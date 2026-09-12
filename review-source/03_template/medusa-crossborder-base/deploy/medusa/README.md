# Medusa production image

The image contains the generated `apps/backend/.medusa/server` artifact and
runtime dependencies only. The build context excludes runtime environment
files, credentials, local state and generated caches through `.dockerignore`.

Use the same immutable image with `MEDUSA_RUNTIME_ROLE=server` or `worker`.
Run migrations as a separate one-shot job with `MEDUSA_RUNTIME_ROLE=migrate`.
Production configuration is fail-closed; provide secrets through the host
secret manager, never through the image or build arguments.
