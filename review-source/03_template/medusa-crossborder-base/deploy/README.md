# Deployment preparation artifact

This directory is preparation only. No cloud resource, DNS record, payment
credential, production database, or deployment was created by BATCH-05.

- `medusa/`: platform-neutral server/worker image and migration contract.
- `vercel.md`: Vercel Storefront root/build/environment contract.
- `managed-services.md`: Supabase, Upstash, R2, and optional Resend contract.
- `dns-plan.md`: DNS records to apply only after hosting choices are approved.
- `rollback.md`: migration, release, and rollback runbook.

The only remaining hosting choice is the Medusa backend host documented in
`../../../../../../跨境电商-review/execution/BATCH-05/BACKEND_HOST_DECISION.md`.
