import { model } from "@medusajs/framework/utils"

export const PayPalPaymentOperation = model.define("paypal_payment_operation", {
  id: model.id().primaryKey(),
  operation_key: model.text().unique(),
  operation_type: model.enum(["refund", "reversal", "dispute"]),
  status: model.enum(["pending", "completed", "failed", "held"]).default("pending"),
  paypal_order_id: model.text().nullable(),
  paypal_capture_id: model.text().nullable(),
  paypal_refund_id: model.text().nullable(),
  medusa_payment_id: model.text().nullable(),
  medusa_session_id: model.text().nullable(),
  medusa_order_id: model.text().nullable(),
  amount: model.text().nullable(),
  currency_code: model.text().nullable(),
  failure_reason: model.text().nullable(),
  safe_metadata: model.json().nullable(),
})

export default PayPalPaymentOperation
