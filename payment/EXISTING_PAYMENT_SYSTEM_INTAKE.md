# Existing Payment System Intake

Use this checklist before deciding whether to reuse an existing payment system alongside the WorldFirst settlement direction. Provide or inspect only what exists; do not invent missing capabilities.

- System/repository name and architecture.
- Does it expose API, SDK, hosted checkout, plugin or direct database integration?
- Merchant legal entity / supported country or region.
- Supported currencies and payment methods.
- Sandbox/test mode available?
- Create payment/session endpoint.
- Payment status/query endpoint.
- Authorize vs immediate capture behavior.
- Cancel/void support.
- Full and partial refund support.
- Webhook/callback endpoint and signature verification scheme.
- Idempotency key support or equivalent duplicate-charge protection.
- Provider/external transaction identifier.
- Redirect return URL requirements.
- Public key vs server secret vs webhook secret.
- How settlement/fees are represented.
- Whether it currently creates its own orders.

Review outcome must be one of:

`REUSE_MEDUSA_PROVIDER_ADAPTER` / `REUSE_HOSTED_REDIRECT_ADAPTER` / `NEW_PROVIDER_REQUIRED`.
