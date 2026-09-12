# DNS plan (not applied)

No DNS record is changed by this repository. After the Storefront deployment
and Medusa backend host are selected, create records with the authoritative DNS
provider only after TLS and CORS values are known:

1. Storefront apex/`www` record to the Vercel target.
2. `api` record to the selected persistent Medusa server host.
3. `webhooks` or API path to the same backend for PayPal sandbox/live webhook
   traffic, with a dedicated random path and rate limiting.
4. Optional mail records required by the verified Resend domain.

The current domain has no verified public A/AAAA/CNAME evidence. This is a
deployment prerequisite, not a BATCH-05 runtime change.
