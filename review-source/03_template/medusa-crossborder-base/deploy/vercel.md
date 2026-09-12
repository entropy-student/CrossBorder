# Vercel Storefront contract

## Project settings

- Root Directory: repository root (the source repository is connected to
  Vercel). This preserves the workspace lockfile and makes the source tree
  available to the Storefront build.
- Install: `corepack pnpm@10.11.1 install --frozen-lockfile`.
- Build: `corepack pnpm@10.11.1 --dir 03_template/medusa-crossborder-base/apps/storefront build`.
- Node.js: 22.14.0 in Preview and Production.
- Framework: Next.js 15.5.24.
- Preview and production projects must have separate environment values.

## Public variables

- `NEXT_PUBLIC_MEDUSA_BACKEND_URL`
- `NEXT_PUBLIC_MEDUSA_PUBLISHABLE_KEY`
- `NEXT_PUBLIC_BASE_URL`
- `NEXT_PUBLIC_CHECKOUT_EXPOSURE_MODE=customer`
- `MEDUSA_CLOUD_S3_HOSTNAME` and `MEDUSA_CLOUD_S3_PATHNAME` only when the
  verified public R2 custom hostname/path is configured; no wildcard image
  hostname is allowed.

## Secrets

No PayPal secret or database credential belongs in Vercel public variables.
PayPal remains disabled until the isolated sandbox gate is accepted.
