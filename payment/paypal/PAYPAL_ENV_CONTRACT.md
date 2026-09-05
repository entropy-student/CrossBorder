# PayPal Environment Contract

Placeholders only. Keep values local and ignored; do not commit real keys.

## Required separation

Use separate local environment files or secret-manager namespaces for sandbox
and live. Live mode must never be selected by default.

The future adapter may require fields equivalent to the following, subject to
the official PayPal product contract selected after eligibility review:

```text
PAYPAL_ENVIRONMENT=sandbox
PAYPAL_PROVIDER_ENABLED=false
PAYPAL_PAYMENT_INTENT=AUTHORIZE
PAYPAL_CLIENT_ID=
PAYPAL_CLIENT_SECRET=
PAYPAL_API_BASE_URL=<SET_LOCALLY_FROM_OFFICIAL_DOCUMENTATION>
PAYPAL_WEBHOOK_ID=
PAYPAL_RETURN_URL=<SET_LOCALLY_TO_SAME_ORIGIN_CHECKOUT_RETURN>
PAYPAL_CANCEL_URL=<SET_LOCALLY_TO_SAME_ORIGIN_CHECKOUT_CANCEL>
PAYPAL_IDEMPOTENCY_HEADER=PayPal-Request-Id
PAYPAL_CUSTOMER_EXPOSURE=disabled
PAYPAL_SANDBOX_PAYMENT_ENABLED=false
PAYPAL_LIVE_ACCESS=false
PAYPAL_AUTO_CAPTURE=false
```

`PAYPAL_PAYMENT_INTENT=AUTHORIZE` and `PAYPAL_AUTO_CAPTURE=false` are the only
reviewed values for the first sandbox path. If auto-capture is set to `true`,
the application fails closed with an explicit unsupported-configuration error;
it is not silently accepted. Capture requires the authorization ID returned by
the authorization operation.

These names are a project-side contract, not a claim that every PayPal product
uses identical field names. Confirm official names before implementation.

`PAYPAL_STATIC_WEBHOOK_SECRET_REQUIRED=NO`. The first-path webhook seam uses
`PAYPAL_WEBHOOK_ID`, PayPal transmission headers, the raw request body and the
parsed event, with server-side cryptographic or PayPal verification. A static
shared webhook secret is not part of this contract. `PAYPAL_WEBHOOK_ID` is
required before any future customer exposure
(`PAYPAL_WEBHOOK_ID_REQUIRED_BEFORE_CUSTOMER_EXPOSURE=YES`).

The canonical Medusa config registers the module only when
`PAYPAL_PROVIDER_ENABLED=true`. With the safe default `false`, missing
credentials do not prevent startup and no PayPal provider is added to the
Payment Module. Enabling registration without client credentials, or with any
template sentinel such as `<...>`, `PLACEHOLDER`, `SET_LOCALLY` or
`LOCAL_ONLY`, fails closed before provider registration/transport. The actual
runtime source of truth is
`03_template/medusa-crossborder-base/apps/backend/.env.template`.

## Secret rules

- Client ID may be browser-visible only if the selected official SDK requires
  it; client secret and webhook verification material are server-only.
- Never log, screenshot, package or commit a secret.
- Do not place secrets in `00_HANDOFF.md`, validation docs or sample env files.
- Missing or incomplete configuration must disable customer exposure and fail
  closed rather than fabricate a payment session.
