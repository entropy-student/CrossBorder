# PayPal Integration Contract

`RUNTIME_IMPLEMENTATION_CONTRACT=MEDUSA_PAYMENT_MODULE_ABSTRACT_PAYMENT_PROVIDER`.
The active implementation is the Medusa service at
`03_template/medusa-crossborder-base/apps/backend/src/modules/paypal/service.ts`.
`06_payment/providers/payment-provider-adapter.mjs` is a readiness/reference
abstraction only; it is not a second runtime payment contract or orchestration
system.

## Architecture

Current selected architecture:

```text
Customer -> Medusa / Pawfectly Home checkout -> PayPal
         -> PayPal merchant balance -> WorldFirst Collection Account -> FX/withdrawal
```

`WORLDFIRST_MODE=WORLDFIRST_COLLECTION_ACCOUNT` means WorldFirst receives
settlement funds from a separate checkout gateway. WorldFirst collection-account
data must never be used as customer payment credentials or represented as the
checkout gateway.

## Provider boundary

The PayPal Medusa Payment Module scaffold implements the installed
`AbstractPaymentProvider` boundary at
`03_template/medusa-crossborder-base/apps/backend/src/modules/paypal/`:

- `initiatePayment()` / create provider order with `intent=AUTHORIZE`
- `getPaymentStatus()`
- `authorizePayment()` where applicable
- `capturePayment()` only through the stored PayPal authorization ID
- `cancelPayment()` / void where applicable
- `refundPayment()` including partial refund where supported
- `verifyWebhook()` / notification verification
- `getWebhookActionAndData()` with a pure event mapper

The service delegates provider I/O to operation-specific `PayPalTransport`
contracts. The runtime default transport fails closed and is not an HTTP
client. The frozen first path is `PAYPAL_PAYMENT_INTENT=AUTHORIZE` with
`PAYPAL_AUTO_CAPTURE=false`: PayPal order -> approval -> authorization ID ->
capture by authorization ID -> capture ID. A future transport will follow the
official PayPal Orders/Payments API flow documented by Medusa; the official
server SDK is intentionally not installed during this no-network,
no-credential scaffold phase.

For PayPal Orders v2 `PATCH`, the official operation returns `204` and the
current endpoint contract does not define `PayPal-Request-Id` as a PATCH
header. The scaffold therefore does not send that header for `updateOrder`.
It derives a bounded local `operation_id` from the opaque Medusa session,
normalized amount/currency and the Medusa update idempotency context when
present. The same update retry is stable and a distinct amount/currency or
operation context is distinct; this identity is local correlation, not a
claim that PayPal PATCH supports request-id idempotency. See the official
[Orders v2 update endpoint](https://developer.paypal.com/api/orders/v2/orders-patch/)
and [REST idempotency guidance](https://developer.paypal.com/api/rest/reference/idempotency/).

No operation may return a success state without a verified PayPal response.
The adapter must fail closed on missing configuration, unknown provider states,
invalid signatures, amount mismatch or currency mismatch.

## Ownership and correlation

- Medusa owns the cart, shipping choice, totals, order and customer/order history.
- PayPal owns the external transaction, customer approval state,
  authorization/capture state, provider refund state and provider risk signals.
- The integration layer owns the durable mapping between Medusa cart/payment
  collection/session/order IDs and PayPal order/payment/capture/refund IDs.
- WorldFirst settlement is a separate downstream receiving/FX operation and
  must not create a second order or replace Medusa order ownership.
- Preserve `payload.headers`, `payload.rawData` and `payload.data` through the
  verification seam; do not log or persist transmission/header secrets.

Before capture or order finalization, compare the PayPal amount and currency
with the current Medusa cart/order. One provider transaction may create at most
one Medusa order.

The Medusa payment-session identifier is opaque. The implementation uses the
installed contract's `input.data.session_id` (with backward-compatible reads of
older stored field names) and does not require a `ps_` prefix. The actual local
Medusa 2.19.0 read-only evidence uses `payses_...` identifiers.

## Customer flow

1. Medusa creates or updates the cart and calculates shipping/totals.
2. A future server-side adapter creates a PayPal order/payment session with a
   stable idempotency key.
3. The shopper is redirected to, or approves through, the official PayPal flow.
4. The return route validates state and never treats a browser redirect alone as
   proof of payment.
5. A verified provider response/webhook confirms the external state.
6. Medusa finalizes the order exactly once after amount/currency and state checks.

Cancel, decline, timeout, provider outage and failed verification return the
shopper to a safe retry state without creating a paid order.

## Webhook and retry rules

- Verify the provider signature server-side before processing any notification.
- Persist processed event IDs and make replayed events harmless.
- Do not trust client-supplied amount, currency, order ID or payment status.
- Repeated submit, callback or capture requests must not create duplicate
  charges, captures or Medusa orders.
- Never put server secrets in browser URLs, logs or screenshots.

The first actionable webhook set is restricted to
`PAYMENT.AUTHORIZATION.CREATED`, `PAYMENT.AUTHORIZATION.VOIDED`,
`PAYMENT.CAPTURE.COMPLETED` and the Payments v2 event
`PAYMENT.CAPTURE.DECLINED`. `PAYMENT.CAPTURE.DENIED` is retained only as an
explicit legacy Payments v1 compatibility alias. `CHECKOUT.ORDER.APPROVED`
is not actionable in this first AUTHORIZE path because its order resource
shape is not an authorization/capture resource. Unknown events are
`NOT_SUPPORTED`. Replay safety is not externally proven until sandbox evidence
exists.

Status reconciliation is evidence-first: a capture identifier means
`captured`; an authorization identifier without a capture identifier means
`authorized` for a compatible AUTHORIZE response; an Order `COMPLETED`
status without either identifier remains pending and is never treated as a
captured payment. This applies through both `getPaymentStatus()` and
`retrievePayment()`.

The installed Medusa 2.19.0 `payment-webhook.js` subscriber explicitly returns
for `canceled` and `failed` actions before invoking `processPaymentWorkflow`.
Therefore `MEDUSA_NEGATIVE_WEBHOOK_ACTIONS=IGNORED_BY_CORE` for this
installed runtime. Customer PayPal remains disabled; an eventual sandbox
integration must add application-level reconciliation before exposing
negative webhook outcomes.

Refund keys include the Medusa `context.idempotency_key`, so the same logical
retry is stable while separate legitimate partial refunds receive different
PayPal request IDs. The local contract bounds the cumulative amount represented
in Medusa data; provider-side cumulative enforcement still requires sandbox
evidence. PayPal refund completion is asynchronous in the external contract:
`COMPLETED`, `PENDING` and `FAILED` outcomes, repeated logical refunds,
distinct partial refunds and provider/Medusa read-back all remain
`SANDBOX_REQUIRED`; local transport tests do not prove real refund completion.
The current scaffold carries operation evidence in returned provider data for
local contract testing, not as a durable concurrent-refund ledger. Until a
reviewed Medusa persistence/reconciliation path and sandbox evidence exist,
concurrent or ambiguous refunds remain `HOLD` for manual provider/Medusa
reconciliation; the adapter must not invent a second accounting store.

## Current gate

`PAYPAL_CUSTOMER_EXPOSURE=DISABLED_UNTIL_ADAPTER_AND_SANDBOX_REVIEW`.
The existing storefront has no PayPal customer checkout path and must continue
to hide `pp_paypal*`. System Payment remains technical-test-only. The module
is conditionally registered only when `PAYPAL_PROVIDER_ENABLED=true`; enabled
registration still requires credentials, while the transport remains
fail-closed until its official SDK/API implementation is reviewed.
