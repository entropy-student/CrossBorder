# Managed service contract

## Supabase PostgreSQL

The long-running Backend uses a direct or session-pooled connection suitable
for the Medusa runtime. Migration and backup jobs use a direct/session
connection; a transaction pooler must not be used for migration or worker
operations that require session/prepared-statement behavior.

## Upstash Redis

Use native TLS `rediss://` URLs, not a REST URL. `REDIS_URL` is the required
base value and Medusa Session Redis uses the same project config with an
explicit environment key prefix; cache, events, locking, and workflow values
may inherit it or be set separately. Preview and production use separate
databases or prefixes. Capacity, eviction, BullMQ completed/failed retention,
alerts and server/worker restart tests are deployment gates.

## Cloudflare R2

The S3 file provider uses `S3_ENDPOINT`, `S3_REGION=auto`, `S3_BUCKET`,
`S3_ACCESS_KEY_ID`, `S3_SECRET_ACCESS_KEY`, and `S3_PUBLIC_URL`. The source
contains no real values. Public product assets use a verified HTTPS hostname;
The provider sets `acl: false`; no `x-amz-acl` header is sent. The current
production boundary supports one public product-media bucket/custom domain
only. Private import/export files are disabled until a separate protected
provider/bucket exists; they must not be stored in that public bucket.

## Resend

Resend is optional. Until a verified sending domain and production provider
configuration exist, production notification readiness remains HOLD and no
real email is sent.
