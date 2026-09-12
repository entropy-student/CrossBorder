# Existing Payment / Fulfillment System Intake

Use this checklist when the project resumes. Inspect only what actually exists; do not invent missing capabilities.

## System identity

- System/repository name and architecture.
- Current deployment/runtime status.
- API, SDK, hosted checkout, plugin, webhook/callback, message queue or other integration surfaces.
- Authentication/credential model and environment separation.

## Order and payment ownership

- Which system owns the final customer order?
- Does the external system create its own order record?
- How are cart/order identifiers mapped?
- Create payment/session flow.
- Payment status/query flow.
- Authorize vs immediate capture behavior.
- Cancel/void support.
- Full and partial refund support.
- Callback/webhook signature verification.
- Idempotency or duplicate-charge/order prevention.
- External transaction identifiers.
- Redirect/return requirements if any.

## Fulfillment ownership

- Which system creates fulfillment/shipment records?
- Tracking creation/update flow.
- Inventory ownership and synchronization behavior.
- Cancel-before-ship and cancel-after-ship behavior.
- Return/reship/refund responsibility.
- Duplicate/retry behavior for fulfillment actions.
- Manual recovery path when automatic state cannot safely converge.

## Decision output

The Reviewer should select the smallest integration shape supported by evidence, for example:

`MEDUSA_ADAPTER` / `HOSTED_REDIRECT` / `ORDER_HANDOFF` / `FULFILLMENT_CONNECTOR` / `COMBINED_EXTERNAL_INTEGRATION` / `NEW_SYSTEM_REQUIRED`.

No implementation begins until source-of-truth boundaries and failure/recovery behavior are explicit.
