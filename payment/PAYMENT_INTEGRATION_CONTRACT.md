# Payment Integration Contract

`RUNTIME_IMPLEMENTATION_CONTRACT=MEDUSA_PAYMENT_MODULE_ABSTRACT_PAYMENT_PROVIDER`.
The provider-neutral file referenced below is readiness/reference material only;
it is not a competing runtime payment contract or second order orchestration
system. The active PayPal implementation is the Medusa
`AbstractPaymentProvider` service under the Mother Template.

This contract is provider-neutral and applies to the future PayPal checkout adapter and any later approved provider path. The current WorldFirst account is a collection/settlement account, not the customer checkout gateway.

## State ownership

- Medusa owns: cart, shipping choice, totals, order, customer/order history.
- Payment provider/external payment system owns: payment transaction, authorization/capture/refund status, provider-specific risk/3DS state.
- Integration layer owns: stable identifier mapping, idempotency, verified callbacks/webhooks, error translation and retry safety.

## Required adapter lifecycle

A selected adapter must support the applicable subset of:

`create payment -> status -> authorize -> capture -> cancel -> refund -> partial refund -> webhook/notification`.

Redirect providers additionally require a same-origin return handler. All providers require asynchronous server-side confirmation where the upstream system supports webhooks/callbacks.

## Provider-neutral boundary

`06_payment/providers/payment-provider-adapter.mjs` documents the provider-neutral
operation names, internal payment states and correlation fields without
connecting the storefront directly to any provider. Its default adapter throws
`PAYMENT_PROVIDER_NOT_CONFIGURED`; it never returns a fabricated success. It is
not the active runtime boundary; Medusa Payment Module/
`AbstractPaymentProvider` is.

## Amount, currency and correlation

- Verify amount and currency against the Medusa cart/order before authorization, capture or order finalization.
- Persist a mapping between Medusa cart/payment-session/order identifiers and the external transaction ID.
- A provider transaction must not create more than one Medusa order.
- Currency mismatch, amount mismatch or unverified webhook input must stop order finalization.

## Idempotency

- Repeated payment-session initiation must not create uncontrolled duplicate charges.
- Repeated customer submit must not create multiple orders or captures.
- Replayed webhook/callback events must be safe.
- One successful cart checkout must create exactly one Medusa order.
- Idempotency keys and provider transaction IDs must be stored in a durable server-side record when an adapter is implemented.

## Customer exposure

Technical fixtures are not customer payment methods. `pp_system_default` is allowed only when `NEXT_PUBLIC_CHECKOUT_EXPOSURE_MODE=technical_test`; normal customer mode hides it. Unsupported provider IDs are hidden until their complete frontend/server flow is implemented.

PayPal is currently an unsupported/unconfigured provider path. Its starter
display mapping does not authorize exposure; the explicit customer gate remains
disabled until a reviewed adapter, redirect/approval flow and webhook path pass
sandbox tests.

Frontend hiding is defense-in-depth, not the production security boundary. A customer-facing production Region must not include `pp_system_default`, and production fulfillment must not include local technical shipping fixtures.

## Secrets

Separate at minimum:

- browser-safe public/publishable identifier, if required;
- backend secret/API credential;
- webhook/callback verification secret.

Secrets must be environment/runtime-only. Never commit or package real secrets.

## Failure behavior

Declines, canceled redirects, provider outages, expired sessions and verification failures must return the shopper to a safe retry state without converting the cart into a paid order.

## Production gate

Live mode is forbidden until sandbox success, decline, retry, duplicate-submit, webhook replay, refund, cancel and read-back tests pass and real shipping/tax/policy prerequisites are separately resolved.
