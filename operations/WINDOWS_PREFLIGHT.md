# Windows Preflight — Minimal User Work

## Install only this new prerequisite first
1. Docker Desktop for Windows using the WSL 2 backend.

Existing Node.js and Git can be reused if preflight passes. Do **not** separately install PostgreSQL, Redis, Stripe CLI, Ruby, or pnpm.

## After Docker Desktop is ready
Open PowerShell in the document center root. The current application path is
the frozen Mother Template child, not the historical candidate clone:

```powershell
Set-ExecutionPolicy -Scope Process Bypass
$projectRoot = (Resolve-Path .\CrossBorder-Independent-Store).Path
Set-Location $projectRoot
$template = (Resolve-Path .\03_template\medusa-crossborder-base).Path
Set-Location $template
powershell -ExecutionPolicy Bypass -File .\scripts\setup-local.ps1
```

Only continue after the template setup reports a successful local validation.
The historical root preflight and candidate preparation scripts remain in the
canonical source project's
[technical scripts directory](../CrossBorder-Independent-Store/04_docs/scripts/)
as reproducibility utilities; they are not the current Mother Template
bootstrap path.

The current setup deliberately verifies the locked template toolchain, preserves
existing non-default local secrets on rerun, and keeps PostgreSQL disposable and
local-only.

## Important current-upstream behavior
The current DTC Starter backend does **not** expose an `apps/backend` `seed` script. The root package still contains `backend:seed`, so blindly following that alias is unsafe. The checked-out backend does contain `src/migration-scripts/initial-data-seed.ts`, and `medusa db:migrate` has already been observed creating the baseline dataset. The preparation script therefore inspects both capabilities at runtime:
- if the migration initial-data seed is present, it prints `MEDUSA_BASELINE_SEEDED_BY_MIGRATION` and `US_USD_AUGMENTATION_REQUIRED`;
- if an official package seed exists instead, it runs it;
- only if neither capability exists does it print `MEDUSA_DATA_BOOTSTRAP_REQUIRED`.

GitHub `git clone`/registry manifest failures are treated as recoverable when the official archive/local image path is available. A failure of both acquisition paths remains a hard preflight blocker.

The current setup applies the script-driven US/USD augmentation and prepares the
ignored storefront runtime configuration. The manual bootstrap document is
historical and is indexed under the
[document-center legacy runbooks](../archive/legacy-runbooks/).

No real payment account is required for this validation.
