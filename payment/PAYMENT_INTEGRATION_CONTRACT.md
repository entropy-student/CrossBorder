# Payment / External System Integration Contract

## Current status

This contract is intentionally incomplete until the Owner's existing payment/fulfillment system is inspected.

The repository must not assume that Medusa remains the final order source of truth, and it must not assume that the existing in-repo PayPal implementation remains the production payment path.

## Facts to establish before implementation

1. Which system owns cart, final order, payment state, shipment and refund state.
2. What integration surfaces exist: API, SDK, hosted redirect, plugin, webhook/callback, message queue or file exchange.
3. Stable identifiers for cart/order/payment/shipment/refund mapping.
4. Amount/currency/order validation boundaries.
5. Duplicate-submit/idempotency behavior.
6. Callback verification, replay handling and retry behavior.
7. Cancel, full refund and partial refund semantics.
8. Fulfillment creation, tracking updates and exception ownership.
9. Inventory ownership/synchronization if the external system manages stock.
10. Failure recovery and manual reconciliation path.

## Minimum safety rules

- No external success page or browser return may be treated as authoritative without server-side confirmation where the external system supports it.
- Duplicate requests must not create duplicate customer orders, duplicate charges or duplicate fulfillment.
- Identifier/amount/currency mismatch must fail closed.
- Credentials stay outside source control and ordinary evidence.
- Existing custom provider code stays disabled unless explicitly selected after the intake.

## Future implementation decision

Only after the intake may the Reviewer choose the smallest suitable boundary, such as a Medusa adapter, hosted redirect, order handoff, fulfillment connector, or combined integration.

Live operation remains forbidden until the chosen integration passes its test-environment, retry, cancellation/refund and fulfillment acceptance checks.
