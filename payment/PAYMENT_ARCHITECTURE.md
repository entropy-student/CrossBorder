# Payment Architecture

## Current decision

- `SETTLEMENT_PROVIDER=WORLDFIRST`
- `WORLDFIRST_MODE=WORLDFIRST_COLLECTION_ACCOUNT`
- `WORLDFIRST_GLOBAL_CHECKOUT=NOT_AVAILABLE_CURRENT_ACCOUNT / DEFERRED`
- `CHECKOUT_GATEWAY_REQUIRED=YES`
- `PRIMARY_CHECKOUT_CANDIDATE=PAYPAL`
- `PAYPAL_PAYMENT_INTENT=AUTHORIZE`
- `PAYPAL_AUTO_CAPTURE=false`
- `PAYPAL_PROVIDER_ENABLED=NO`
- `PAYPAL_CUSTOMER_EXPOSURE=DISABLED`
- `SYSTEM_PAYMENT=TECHNICAL_TEST_ONLY`

WorldFirst receives settlement from a future checkout gateway; it is not the
customer-facing acquiring provider. PayPal remains a candidate only and must
stay behind the Medusa Payment Module boundary.

## Runtime authority and safety

`Medusa Payment Module / AbstractPaymentProvider` is the runtime payment
contract. The provider-neutral file in the canonical source is readiness/
reference material only, not a second order orchestration system.

Medusa owns cart, totals, shipping choice, order and customer history. A future
provider adapter owns only external transaction state, verified callbacks,
idempotency and safe operation mapping. No provider API was called and no real
money was charged in the closed review checkpoint.

The installed Medusa 2.19.0 negative webhook behavior is
`MEDUSA_NEGATIVE_WEBHOOK_ACTIONS=IGNORED_BY_CORE`; application-level
reconciliation is required before customer exposure.

See [PayPal](PAYPAL.md), [WorldFirst](WORLDFIRST.md) and the
[canonical payment contract](PAYMENT_INTEGRATION_CONTRACT.md).
