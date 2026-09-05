# Local Validation Runbook

Purpose: validate the commerce base on a normal Windows development machine without real money, production accounts, or host-installed databases.

## AUTHORITATIVE CURRENT PATH

`03_template/medusa-crossborder-base/` is the authoritative current Medusa
Mother Template. Start with its project-local runners:

```powershell
cd .\03_template\medusa-crossborder-base
powershell -ExecutionPolicy Bypass -File .\scripts\setup-local.ps1
powershell -ExecutionPolicy Bypass -File .\scripts\start-local.ps1
powershell -ExecutionPolicy Bypass -File .\scripts\build-production.ps1
powershell -ExecutionPolicy Bypass -File .\scripts\acceptance-smoke.ps1
```

The first command accepts `-ProjectName`, `-DatabasePort`, `-BackendPort`, and
`-StorefrontPort` and persists them to ignored `.runtime/local-config.json`.
Later commands read that configuration and verify any explicit overrides.
`02_demos/medusa-dtc` below is retained only as `HISTORICAL CANDIDATE
VALIDATION` evidence.

## Review tooling boundary

`04_docs/scripts/90-build-review-bundle.ps1` is `HISTORICAL_REVIEW01_TOOL`; it
reproduces the old Review-01 bundle contract and is not the current packaging
path. The current Review-02 staging tool is
`04_docs/scripts/92-prepare-review-staging.ps1`. It creates an external staging
folder, performs exclusion and security checks, records Git-status evidence,
and never creates a ZIP.

## Historical candidate-local architecture

```text
Windows
├─ Medusa DTC Starter (HISTORICAL CANDIDATE VALIDATION)
│  ├─ Backend/Admin -> http://localhost:9000
│  ├─ Storefront    -> http://localhost:8000
│  └─ PostgreSQL 16 / Compose project crossborder-medusa -> 127.0.0.1:54329
└─ Spree Quick Start
   ├─ Prebuilt Backend/Admin -> http://localhost:9100
   ├─ Official Storefront    -> http://localhost:3001; US route /us/en
   └─ Independent Compose project/physical volume -> spree-demo_postgres_data
```

Medusa uses the project-declared pnpm `10.11.1`; Spree uses the project-declared pnpm `10.33.4`. Redis is intentionally excluded from the first Medusa validation. Spree local application-source runtime was qualified in CB-DEV-016 and repeated in CB-DEV-017; CB-DEV-014 remains separately labeled as prebuilt-image evidence.

## Important reproducibility rules
- Start from official `medusajs/dtc-starter` only.
- Install from its existing `pnpm-lock.yaml` with `--frozen-lockfile`.
- Use the exact `packageManager` version declared by the checked-out starter.
- Record the exact upstream commit used for the successful run.
- Do not silently upgrade dependencies to make an error disappear.
- Do not assume an old starter's seed/bootstrap command exists in the current starter.
- Do not change npm/Docker registries automatically if networking fails; diagnose first.
- Bind the database to `127.0.0.1` only, not the LAN.
- On the first DB run, record the actual PostgreSQL image ID/repo digest; do not silently change it during the repeatability test.
- If expected `.env.template` keys disappear, stop: do not append guessed legacy variables.

## Gate 0 — preflight

```powershell
Set-ExecutionPolicy -Scope Process Bypass
.\04_docs\scripts\01-preflight.ps1
```

Required result: `PRECHECK_PASS`.

The script checks Git, Node, npm, Docker engine/Compose/Linux containers, ports 54329/9000/8000, disk space, and GitHub/npm/Docker-registry connectivity.

## Gate 1 — prepare Medusa

```powershell
.\04_docs\scripts\03-prepare-medusa.ps1
```

The script will:
1. clone the official DTC Starter if absent;
2. verify origin, lockfile, clean Git baseline, Node engine metadata, and exact pnpm declaration;
3. install locked dependencies;
4. only then start isolated PostgreSQL 16; on first use, pull and record the actual image identity for repeatability;
5. create a local backend `.env` with a local DB URL and generate JWT/cookie secrets only when missing, empty, or template defaults;
6. keep Redis disabled for this first test;
7. run migrations;
8. detect `apps/backend/src/migration-scripts/initial-data-seed.ts` as baseline initialization when present;
9. print `MEDUSA_BASELINE_SEEDED_BY_MIGRATION` and `US_USD_AUGMENTATION_REQUIRED` for that path; only if neither migration capability nor an official package seed exists does it print `MEDUSA_DATA_BOOTSTRAP_REQUIRED`;
10. create a random local admin password and save it in a Git-ignored local file; on an idempotent rerun, reuse an existing successful credential record rather than writing a new unverified password.

Current upstream main, verified 2026-08-31, has no `apps/backend` seed script even though the root still exposes `backend:seed`; it does contain the migration initial-data seed. Therefore the remaining manual work is US/USD augmentation, not recreation of the baseline.

Local DB URL:

```text
postgres://medusa:medusa_local_dev@127.0.0.1:54329/medusa_dtc
```

## Gate 2 — backend + minimum commerce data

Start backend from the cloned starter root:

```powershell
cd .\02_demos\medusa-dtc
pnpm backend:dev
```

Use the executable selected by `Get-PnpmExecutable`; record its resolved path and `pnpm -v` in run evidence. Do not mix global pnpm with the locked project version.

Expected:
- API: `http://localhost:9000`
- Admin: `http://localhost:9000/app`

Log in using the local credential record; it is never copied into review bundles or committed to the root meta repository.

After migration-based initialization, follow `04_docs/DEMO_BOOTSTRAP.md` only for US/USD augmentation. Minimum proof data is: storefront sales-channel mapping, US/USD region, US tax region, shipping profile, stock location, US shipping option, one USD product with inventory, and a publishable key linked to the channel. If `MEDUSA_DATA_BOOTSTRAP_REQUIRED` is printed, first confirm both the migration seed and an official package seed are truly absent.

Do **not** assume `NEXT_PUBLIC_DEFAULT_REGION=us` creates any backend region or shipping/payment configuration.

## Gate 3 — configure/start storefront
Copy the actual key from Admin → Settings → Publishable API Keys, then from project root:

```powershell
.\04_docs\scripts\04-configure-storefront.ps1 -PublishableKey "pk_..." -DefaultRegion "us"
```

It writes the current DTC Starter storefront variables only:

```text
NEXT_PUBLIC_MEDUSA_BACKEND_URL=http://localhost:9000
NEXT_PUBLIC_MEDUSA_PUBLISHABLE_KEY=<actual key>
NEXT_PUBLIC_DEFAULT_REGION=us
NEXT_PUBLIC_BASE_URL=http://localhost:8000
```

Start storefront:

```powershell
cd .\02_demos\medusa-dtc
pnpm storefront:dev
```

Expected: `http://localhost:8000`.

## Gate 4 — functional validation
Use `04_docs/ACCEPTANCE_GATES.md`. Required chain:

```text
product → variant → cart → US address → shipping → system/test payment → order → Admin
```

No real Stripe/PayPal/card is required.

## Gate 5 — production builds
Only after the functional chain passes:

```powershell
cd .\02_demos\medusa-dtc
pnpm --filter @dtc/backend build
pnpm --filter @dtc/storefront build
```

A dev-only pass is insufficient. Storefront build must use the genuine local publishable key and the same verified environment.

## Gate 6 — second market proof
Add one second region/currency and verify that region routing, pricing, shipping, and catalog exposure remain understandable without architecture changes. This is a capability proof, not a production tax/payment test.

## Gate 7 — repeatability (disposable; guarded)
CB-DEV-017 completed two disposable initialization runs per candidate without touching historical databases or volumes. Do not use the historical reset helper for this benchmark. Review the plan first:

```powershell
.\04_docs\scripts\99-reset-local.ps1
```

The historical reset helper remains confirmation-gated and only targets the Medusa local project:

```powershell
.\04_docs\scripts\99-reset-local.ps1 -ConfirmReset
.\04_docs\scripts\03-prepare-medusa.ps1
```

The clone is preserved by default. `-ConfirmReset -DeleteClone` additionally deletes only the Medusa source clone after review. No Medusa reset command targets Spree's Compose project or volume. A clean repeat run must use a new project/physical volume, execute migration initialization and US/USD augmentation without hidden state, and retain order/API/PostgreSQL evidence. CB-DEV-017 repeat helpers are:

```powershell
.\04_docs\scripts\12-start-medusa-repeat.ps1
.\04_docs\scripts\13-start-medusa-repeat-storefront.ps1
.\04_docs\scripts\14-spree-repeatability.ps1 -RunSampleData
.\04_docs\scripts\08-spree-source-smoke.ps1 -ComposeFile 02_demos/spree-repeat/docker-compose.repeat.yml -ProjectName spree-demo-repeat
```

The Medusa repeat flow also runs `medusa db:migrate`, `medusa-repeat-augment.ts`, and `medusa-repeat-smoke.mjs` with a runtime-only Admin credential. The Spree source image flow runs `07-build-spree-source.ps1` with `SPREE_CLI_VERSION=2.4.9`; its temporary LF-normalized context is not a candidate source patch.

For a completely fresh clone:

```powershell
.\04_docs\scripts\99-reset-local.ps1 -ConfirmReset -DeleteClone
```

## Spree benchmark — prebuilt, local-source, and repeat qualification
`TECHNOLOGY_SELECTION=MEDUSA`. Spree is retained as `BENCHMARK_REFERENCE` / `NOT_SELECTED`; CB-DEV-014/016/017 verified its prebuilt and local-source evidence on independent ports and database volumes. The canonical local US English route is `/us/en`, not `/us`.

Current official route:

```powershell
npx create-spree-app@1.2.1 spree-demo
```

The prebuilt runtime uses backend/Admin `9100`, storefront `3001`, Docker project `spree-demo`, and physical volume `spree-demo_postgres_data`. The dev/source compose file currently declares PostgreSQL 18 while the Quick Start compose uses PostgreSQL 16; these logical volume names must never share a physical volume. CB-DEV-016 qualified `02_demos/spree-demo/backend` from local source using a different Compose project and physical volume. CB-DEV-017 repeated the source runtime with project `spree-demo-repeat`, backend `9400`, storefront `3004`, and a second disposable project `spree-demo-repeat-2`.

## Not proven by local validation
A local pass is not production readiness. Before real customers, complete `PRODUCTION_READINESS.md`: real payment/KYC, production email/object storage, infrastructure/backups/monitoring, HTTPS/secrets, taxes/customs/shipping, legal/privacy, refunds/chargebacks, analytics/economics, and rollback.
