# Release and rollback runbook

This runbook is a deployment contract, not evidence of a deployed service.

1. Preflight: record immutable Backend image digest, Storefront deployment,
   migration list, environment version, payment-off state, CORS origins, R2
   hostname and health/readiness URLs. Confirm a current database backup and
   an isolated restore point.
2. Migration: run the one-shot migration job against the selected Supabase
   direct or session-pooled `:5432` connection. Never use transaction pooler
   `:6543` for migrations. Verify migration completion before server rollout.
3. Rollout: start the same image as `server` and `worker`; worker has Admin
   disabled. Verify health, Store API, Admin API, queue processing and a
   read-only product/cart smoke test before promotion.
4. Storefront: promote Preview only after image optimization, CORS, callback
   routes and checkout exposure checks pass. PayPal remains disabled until its
   separate Sandbox gate is accepted.
5. Roll back application artifacts on startup/readiness, data-integrity,
   payment-callback or storefront smoke failure. Roll back both server and
   worker to the same prior image and revert the Storefront deployment.
6. Database rollback is not automatic. Prefer a forward migration for
   compatible schema changes. Restore a backup only after impact assessment,
   a maintenance decision and an isolated restore rehearsal; record RPO/RTO.
   Never erase orders to undo a code release.
7. External payment actions, secrets, DNS and provider webhooks are separate
   state. Application rollback does not reverse them. Disable exposure and
   reconcile provider state before reopening checkout.
8. Verify recovery with health, Store/Admin read-only checks, queue/replay
   status, image delivery, CORS and payment-off state. Record owner, timestamp,
   image digest, migration state and unresolved risks.
