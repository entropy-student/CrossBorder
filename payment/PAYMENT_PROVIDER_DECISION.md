# Payment Provider Decision

Current settlement direction: `WORLDFIRST`.

Locked current account mode:

- `WORLDFIRST_MODE=WORLDFIRST_COLLECTION_ACCOUNT`.
- `WORLDFIRST_GLOBAL_CHECKOUT=NOT_AVAILABLE_CURRENT_ACCOUNT / DEFERRED`.
- `CHECKOUT_GATEWAY_REQUIRED=YES`.

Primary checkout-gateway candidate: `PAYPAL`.

The customer checkout gateway is separate from WorldFirst settlement:

- `WORLDFIRST_COLLECTION_ACCOUNT`: settlement account receiving funds from a separate payment gateway/acquirer. This is not itself a customer card-checkout gateway; `CHECKOUT_GATEWAY_REQUIRED=YES`.
- `WORLDFIRST_GLOBAL_CHECKOUT`: retained as a deferred future path, but not available on the current confirmed account.

Do not infer PayPal eligibility, card-processing approval or sandbox access.
See the [PayPal readiness contract](paypal/PAYPAL_INTEGRATION_CONTRACT.md) and
[WorldFirst settlement contract](worldfirst/WORLDFIRST_INTEGRATION_CONTRACT.md).

## Decision evidence required

- merchant/entity eligibility and onboarding status;
- supported currencies and target markets;
- API, SDK or hosted-checkout capabilities;
- authorization/capture model;
- cancel, full refund and partial refund support;
- webhook/callback signing and replay protection;
- idempotency support;
- sandbox/test environment;
- settlement and fee model;
- PCI/card-data boundary;
- whether the external system creates its own orders.

Medusa remains the cart/order source of truth. A future WorldFirst or gateway adapter must connect external transaction IDs to Medusa payment-session/order IDs without creating a second customer-order database.
