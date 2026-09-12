import { createHash } from "node:crypto"
import { MedusaError, MedusaService } from "@medusajs/framework/utils"
import PayPalEventInbox from "./models/paypal-event-inbox"
import PayPalPaymentOperation from "./models/paypal-payment-operation"

type WebhookInboxInput = {
  event: Record<string, unknown>
  action?: "authorized" | "captured" | "canceled" | "failed" | "held" | "not_supported"
  provider_resource_id?: string | null
  medusa_session_id?: string | null
  medusa_order_id?: string | null
  amount?: string | null
  currency_code?: string | null
}

type EventInboxRecord = {
  id: string
  status: "received" | "verified" | "dispatch_requested" | "applied" | "held" | "failed"
  provider_event_id: string
}

const safeText = (value: unknown) => typeof value === "string" && value.trim() ? value.trim() : undefined
const digest = (value: string) => createHash("sha256").update(value).digest("hex")
const tail = (value: string | undefined) => value ? value.slice(-8) : undefined

class PayPalReconciliationModuleService extends MedusaService({ PayPalEventInbox, PayPalPaymentOperation }) {
  async recordVerifiedWebhookEvent(input: WebhookInboxInput): Promise<{ replayed: boolean; claimed: boolean; record: EventInboxRecord }> {
    const eventId = safeText(input.event.id)
    const eventType = safeText(input.event.event_type) || "UNKNOWN"
    if (!eventId) throw new MedusaError(MedusaError.Types.INVALID_DATA, "PayPal webhook persistence requires a provider event ID.")
    const resource = input.event.resource && typeof input.event.resource === "object" && !Array.isArray(input.event.resource)
      ? input.event.resource as Record<string, unknown>
      : {}
    const resourceId = safeText(resource.id)
    const correlationId = safeText(input.medusa_session_id)
    const rawAmount = resource.amount && typeof resource.amount === "object" && !Array.isArray(resource.amount)
      ? resource.amount as Record<string, unknown>
      : {}
    const amount = safeText(rawAmount.value)
    const currency = safeText(rawAmount.currency_code)?.toUpperCase()

    const service = this as unknown as {
      listPayPalEventInboxes: (filters: Record<string, unknown>) => Promise<EventInboxRecord[]>
      createPayPalEventInboxes: (records: Record<string, unknown>[]) => Promise<EventInboxRecord[]>
      updatePayPalEventInboxes: (data: Array<Record<string, unknown>>) => Promise<EventInboxRecord[]>
    }
    const providerEventKey = digest(eventId)
    let record: EventInboxRecord
    try {
      const created = await service.createPayPalEventInboxes([{
      provider_event_id: providerEventKey,
      provider: "paypal",
      status: "received",
      provider_resource_id: safeText(input.provider_resource_id) || (resourceId ? digest(resourceId) : null),
      medusa_session_id: correlationId || null,
      medusa_order_id: safeText(input.medusa_order_id) || null,
      amount: safeText(input.amount) || amount || null,
      currency_code: safeText(input.currency_code)?.toUpperCase() || currency || null,
      event_type: eventType,
      received_at: new Date(),
      applied_at: null,
      failure_reason: null,
      safe_metadata: {
        provider_event_id_tail: tail(eventId),
        provider_resource_id_tail: tail(resourceId),
        event_type: eventType,
        action: input.action,
      },
      }])
      record = created[0] as EventInboxRecord
      if (!record) throw new MedusaError(MedusaError.Types.UNEXPECTED_STATE, "PayPal webhook inbox insert returned no record.")
    } catch (error) {
      const existing = await service.listPayPalEventInboxes({ provider_event_id: providerEventKey })
      if (!existing.length) throw error
      return { replayed: true, claimed: false, record: existing[0] }
    }
    const verified = await service.updatePayPalEventInboxes([{ id: record.id, status: "verified" }])
    return { replayed: false, claimed: true, record: (verified[0] || record) as EventInboxRecord }
  }

  async markDispatchRequested(id: string): Promise<EventInboxRecord> {
    const service = this as unknown as { updatePayPalEventInboxes: (data: Array<Record<string, unknown>>) => Promise<EventInboxRecord[]> }
    const records = await service.updatePayPalEventInboxes([{ id, status: "dispatch_requested" }])
    if (!records[0]) throw new MedusaError(MedusaError.Types.UNEXPECTED_STATE, "PayPal webhook dispatch claim read-back failed.")
    return records[0]
  }

  async updateVerifiedWebhookEvent(id: string, values: { medusa_session_id?: string; medusa_order_id?: string; amount?: string; currency_code?: string; provider_resource_id?: string }): Promise<EventInboxRecord> {
    const service = this as unknown as { updatePayPalEventInboxes: (data: Array<Record<string, unknown>>) => Promise<EventInboxRecord[]> }
    const records = await service.updatePayPalEventInboxes([{ id, ...values }])
    if (!records[0]) throw new MedusaError(MedusaError.Types.UNEXPECTED_STATE, "PayPal webhook mapping read-back failed.")
    return records[0]
  }

  async markWebhookFailed(id: string, reason: string): Promise<EventInboxRecord> {
    const service = this as unknown as { updatePayPalEventInboxes: (data: Array<Record<string, unknown>>) => Promise<EventInboxRecord[]> }
    const records = await service.updatePayPalEventInboxes([{ id, status: "failed", failure_reason: reason.slice(0, 160) }])
    if (!records[0]) throw new MedusaError(MedusaError.Types.UNEXPECTED_STATE, "PayPal webhook failure state read-back failed.")
    return records[0]
  }

  async markAppliedAfterMedusaReadback(id: string, medusaState: "authorized" | "captured" | "canceled" | "failed"): Promise<EventInboxRecord> {
    const service = this as unknown as {
      listPayPalEventInboxes: (filters: Record<string, unknown>) => Promise<EventInboxRecord[]>
      updatePayPalEventInboxes: (data: Array<Record<string, unknown>>) => Promise<EventInboxRecord[]>
    }
    const current = (await service.listPayPalEventInboxes({ id }))[0]
    if (!current || current.status !== "dispatch_requested") throw new MedusaError(MedusaError.Types.NOT_ALLOWED, "PayPal event is not awaiting Medusa read-back.")
    const updated = await service.updatePayPalEventInboxes([{ id, status: "applied", applied_at: new Date(), safe_metadata: { medusa_state: medusaState } }])
    return updated[0]
  }

  async listReconciliationCandidates(): Promise<EventInboxRecord[]> {
    const service = this as unknown as { listPayPalEventInboxes: (filters: Record<string, unknown>) => Promise<EventInboxRecord[]> }
    return service.listPayPalEventInboxes({ status: ["received", "verified", "dispatch_requested", "held", "failed"] })
  }

  async reconcileRefundOperation(input: {
    operation_key: string
    refund_id: string
    retrieveRefund: (input: { refund_id: string }) => Promise<{ refund_id: string; status: string }>
  }): Promise<{ status: "pending" | "completed" | "failed" }> {
    const service = this as unknown as {
      listPayPalPaymentOperations: (filters: Record<string, unknown>) => Promise<Array<{ id: string; paypal_refund_id?: string; status: string }>>
      updatePayPalPaymentOperations: (data: Array<Record<string, unknown>>) => Promise<unknown[]>
    }
    const current = (await service.listPayPalPaymentOperations({ operation_key: input.operation_key }))[0]
    if (!current) throw new MedusaError(MedusaError.Types.INVALID_DATA, "Refund reconciliation operation is not registered.")
    const readBack = await input.retrieveRefund({ refund_id: input.refund_id })
    if (readBack.refund_id !== input.refund_id) throw new MedusaError(MedusaError.Types.INVALID_DATA, "Refund read-back belongs to a different operation.")
    const providerStatus = readBack.status.toUpperCase()
    const status = providerStatus === "COMPLETED" ? "completed" : ["FAILED", "DENIED", "DECLINED"].includes(providerStatus) ? "failed" : "pending"
    await service.updatePayPalPaymentOperations([{ id: current.id, status }])
    return { status }
  }
}

export default PayPalReconciliationModuleService
