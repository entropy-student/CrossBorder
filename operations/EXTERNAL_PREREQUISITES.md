# External Prerequisites

This is the current prerequisite list for resuming CrossBorder. Unknown facts remain `UNKNOWN` or `HOLD`; this document does not approve production launch.

## Current project facts

- Medusa + Next.js remain the retained application foundation.
- Existing custom PayPal/reconciliation work remains disabled/reference-only.
- Future payment and fulfillment are intended to integrate with another already-running system.
- That external system has not yet been inspected here.
- Therefore final order ownership, payment ownership, inventory ownership, shipment/tracking ownership and refund/cancellation responsibility are not yet frozen.

## Required first when work resumes

Perform a read-only external-system intake and establish:

- system/repository/deployment identity;
- available API, SDK, hosted checkout, plugin or callback surfaces;
- customer-order source of truth;
- identifier mapping between systems;
- payment status/cancel/refund behavior;
- callback verification and duplicate protection;
- fulfillment and tracking responsibilities;
- inventory ownership/synchronization;
- failure, retry and manual-reconciliation behavior;
- credential/account boundaries.

## Business facts still required before production

- verified inventory or supply route;
- complete package dimensions/weight and shipping assumptions;
- origin/compliance/customs facts where applicable;
- production shipping/returns/customer-service process;
- tax and customer-facing policy decisions;
- domain, communications, deployment, monitoring, backup and restore ownership.

## Current state

`PROJECT_RESUME_GATE=EXTERNAL_PAYMENT_FULFILLMENT_SYSTEM_INTAKE`

`PRODUCTION_READY=NO`

`LIVE_ENABLEMENT=NO`
