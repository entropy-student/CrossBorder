# Current Local Runbook

This is the current operating path for the frozen Medusa mother template. It
uses local Docker PostgreSQL and test payment only; it is not a deployment or
production-readiness procedure.

## Authoritative path

`../CrossBorder-Independent-Store/03_template/medusa-crossborder-base/` is the
only current application path. The old
`../CrossBorder-Independent-Store/02_demos/medusa-dtc` path is historical
candidate validation and is indexed under `../archive/`.

## One-time or fresh local setup

From the document center root, enter the canonical source child and resolve
the template path instead of relying on a machine-specific absolute path:

```powershell
$projectRoot = (Resolve-Path .\CrossBorder-Independent-Store).Path
Set-Location $projectRoot
$template = (Resolve-Path .\03_template\medusa-crossborder-base).Path
Set-Location $template
powershell -ExecutionPolicy Bypass -File .\scripts\setup-local.ps1
```

`setup-local.ps1` owns first-run initialization. It validates the project and
port contract, starts the isolated PostgreSQL service, installs the declared
locked toolchain, runs migration-based baseline initialization, applies the
rerun-safe US/USD augmentation, creates or verifies local Admin state, and
prepares ignored runtime configuration. Do not use an old Admin UI checklist
as a substitute.

## Development start

```powershell
$projectRoot = (Resolve-Path .\CrossBorder-Independent-Store).Path
Set-Location $projectRoot
$template = (Resolve-Path .\03_template\medusa-crossborder-base).Path
Set-Location $template
powershell -ExecutionPolicy Bypass -File .\scripts\start-local.ps1
```

The script reads `.runtime/local-config.json` and starts PostgreSQL, Backend
and Storefront using the saved project/port contract. It reports the resolved
Admin, Storefront and health URLs. A first-run copy must go through
`setup-local.ps1` first.

## Production build and smoke

```powershell
$projectRoot = (Resolve-Path .\CrossBorder-Independent-Store).Path
Set-Location $projectRoot
$template = (Resolve-Path .\03_template\medusa-crossborder-base).Path
Set-Location $template
powershell -ExecutionPolicy Bypass -File .\scripts\build-production.ps1
powershell -ExecutionPolicy Bypass -File .\scripts\acceptance-smoke.ps1
```

The backend production caveat is intentional: start the built backend from
`.medusa/server`. The storefront production check uses the built Next output,
not `next dev`. `acceptance-smoke.ps1` is **MUTATING**: it creates technical
test orders for the acceptance gate. Do not use it as a read-only regression
command; use route/API/PostgreSQL checks or the provider unit tests when a
non-mutating check is required. The smoke covers the current seeded catalog and
US/USD commerce contract; it must not be interpreted as production payment or
logistics qualification.

## Current environment

The persisted local runtime config is authoritative for actual ports. The
historical default validation used PostgreSQL `54332`, Backend/Admin `9500`,
and Storefront `8500`. The historical candidate validation used Medusa
Backend `9000`, Storefront `8000`, and PostgreSQL `54329`; those records remain
in the archive and are not the Mother Template contract.

## Safety rules

- Use the package manager declared by the template (`pnpm 10.11.1` via Corepack).
- Never reset a historical database, Docker volume or order for a local check.
- Never place runtime `.env`, Admin credentials, tokens or generated state in Git.
- Use a new disposable Compose project and physical volume for repeatability.
- Do not configure real Stripe/PayPal, production logistics or deployment here.

## Reference documents

- [Current State](../CURRENT_STATE.md)
- [Production Readiness](../PRODUCTION_READINESS.md)
- [Final Selection Evidence](../archive/platform-selection/FINAL_SELECTION_EVIDENCE.md)
- [Runtime Scorecard](RUNTIME_SCORECARD.md)
- [Platform-neutral Acceptance Gates](ACCEPTANCE_GATES.md)
- [UI Implementation Baseline](../ui/UI_IMPLEMENTATION_BASELINE.md)
- [Web UI Freeze](../ui/WEB_UI_FREEZE.md)
- [Historical Archive Index](../archive/INDEX.md)
