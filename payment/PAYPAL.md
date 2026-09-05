# PayPal Readiness

PayPal is the first checkout-gateway candidate for the current WorldFirst
collection-account architecture. A PayPal Business account, card-processing
eligibility and sandbox access still require verification.

Current state:

- `PAYPAL_IMPLEMENTATION_PATH=NEW_PAYPAL_ADAPTER_REQUIRED`
- `PAYPAL_PAYMENT_INTENT=AUTHORIZE`
- `PAYPAL_AUTO_CAPTURE=false` (only reviewed value)
- `PAYPAL_PROVIDER_ENABLED=NO`
- `PAYPAL_CUSTOMER_EXPOSURE=DISABLED`
- `PAYPAL_SANDBOX_ACCESS=NEEDS_VERIFICATION`
- `PAYPAL_LIVE_ACCESS=NO`

The canonical source contains a fail-closed Medusa Payment Module scaffold and
local contract tests only. Empty/template credentials must fail before any
transport call. The first external flow still requires sandbox proof for
approval, authorization, capture by authorization ID, void, refunds,
webhooks, replay/idempotency, amount/currency checks and order correlation.

See the [PayPal integration contract](paypal/PAYPAL_INTEGRATION_CONTRACT.md)
and [PayPal test matrix](paypal/PAYPAL_TEST_MATRIX.md).
