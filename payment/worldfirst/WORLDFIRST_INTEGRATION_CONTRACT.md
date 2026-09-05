# WorldFirst Integration Contract

## Decision boundary

`SETTLEMENT_PROVIDER=WORLDFIRST` is selected for settlement direction.
`WORLDFIRST_MODE=WORLDFIRST_COLLECTION_ACCOUNT` is locked for the current
confirmed account. `CHECKOUT_GATEWAY_REQUIRED=YES` and the primary checkout
candidate is PayPal.

### Collection account

```text
Customer -> separate payment gateway/acquirer -> WorldFirst collection account -> FX/withdrawal
```

This path has no customer checkout adapter. It requires a separate customer
checkout gateway. WorldFirst collection-account details must not be treated as
a card-payment API or as proof that checkout is available.

### Global Checkout

```text
Customer -> WorldFirst Global Checkout -> WorldFirst settlement/account -> FX/withdrawal
```

This path is `NOT_AVAILABLE_CURRENT_ACCOUNT / DEFERRED`. Only if later
approved by an account/capability review may it become a customer checkout
integration. Its runtime contract must then be the Medusa Payment Module /
`AbstractPaymentProvider`; it must not create a parallel payment or order
source of truth. Official confirmation is still required for merchant
eligibility, target-market/currency support, API/SDK or hosted-checkout flow,
signing, webhooks, idempotency, refunds and sandbox access. This does not claim
permanent unavailability to the business.

## Readiness reference only

The source file
[`payment-provider-adapter.mjs`](../../CrossBorder-Independent-Store/06_payment/providers/payment-provider-adapter.mjs)
is `READINESS_REFERENCE_ONLY`. It is not the runtime contract and is not a
customer checkout adapter. If a future Global Checkout path is approved, the
implementation must use Medusa Payment Module / `AbstractPaymentProvider` and
support the applicable operations:

- `createPaymentSession()`
- `getPaymentStatus()`
- `authorizePayment()`
- `capturePayment()`
- `cancelPayment()`
- `refundPayment()` including partial refund where supported
- `verifyWebhook()` / notification verification
- `normalizePaymentEvent()`

No method may return `CAPTURED` or another success state without a verified upstream response. Amount, currency and order correlation must be checked before Medusa order finalization.

## State model

Internal states are:

`CREATED`, `PENDING`, `AUTHORIZED`, `CAPTURED`, `FAILED`, `CANCELLED`, `REFUNDED`, `PARTIALLY_REFUNDED`.

Provider-specific values must be mapped explicitly and unknown values must fail closed for review.

## Correlation and idempotency

Persist, in a server-side integration record:

- Medusa cart ID;
- Medusa payment collection/session ID;
- Medusa order ID after exactly-once order creation;
- WorldFirst transaction/payment ID;
- request idempotency key and request status;
- verified webhook event ID and processing result.

The same idempotency key must not create duplicate provider charges, captures or Medusa orders. Replayed notifications must be harmless.

## Security boundaries

- Keep client/public identifiers separate from server credentials and webhook secrets.
- Use separate sandbox and live configuration; never select live mode by default.
- Verify request signing and webhook signatures on the server.
- Enforce same-origin/allowlisted return URLs and never put secrets in browser URLs, logs or screenshots.
- Compare provider amount/currency with the Medusa cart/order before capture or order finalization.

## Current state

`REAL_WORLDFIRST_API_CALLED=NO`, `REAL_MONEY_TEST=NO`,
`PAYMENT_SECRET_COMMITTED=NO`,
`WORLDFIRST_GLOBAL_CHECKOUT=NOT_AVAILABLE_CURRENT_ACCOUNT / DEFERRED`.
