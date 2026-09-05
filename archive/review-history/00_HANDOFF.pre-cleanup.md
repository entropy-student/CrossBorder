# CrossBorder Independent Store — Handoff

## CURRENT STATUS

- **TASK:** CB-UI-FINAL-001 — Full-site final QA and Web UI Freeze — **RESULT: PASS**.
- **LAST VERIFIED TASK:** CB-UI-FINAL-001 — **RESULT: PASS**; CB-UI-DEV-003R, CB-UI-DEV-003, CB-REVIEW-03-FIX, CB-REVIEW-03-PREP, CB-UI-DEV-002R, CB-UI-DEV-002, CB-UI-DEV-001 and CB-DEV-012 through CB-DEV-020 remain PASS.
- **RESULT:** `PASS` for full-site responsive/accessibility/commercial regression, controlled CSS debt cleanup, Figma/Web audit, and Web UI Freeze. The current stage is `WEB UI FINAL QA`; the next step is `WAITING_FOR_REVIEWER`.
- **Stage:** `03_template/medusa-crossborder-base/` remains the authoritative, parameterized Medusa mother template. Homepage, PDP, Collection/Search, Cart, Mini Cart and Checkout presentation now have evidence on top of the unchanged Medusa commerce contract. Spree remains a benchmark reference.
- **CURRENT STAGE:** `WEB UI FINAL QA`
- **REVIEW_STAGING_PATH:** `PROJECT_PARENT\CrossBorder-Independent-Store-REVIEW-03-FIX-STAGING`
- **NEXT STEP:** `WAITING_FOR_REVIEWER`
- **TECHNOLOGY_SELECTION:** `MEDUSA` (Reviewer decision date: `2026-09-01`).
- **Spree status:** `BENCHMARK_REFERENCE` / `NOT_SELECTED`; Spree source, Scorecard, provenance and Evidence remain preserved and are not being extended as the formal mother-template track.
- **TEMPLATE_FREEZE:** `PASS`; `TEMPLATE_PATH=03_template/medusa-crossborder-base`; fresh validation used Compose project `medusa-template-validation`, volume `medusa-template-validation_pgdata`, PostgreSQL `54332`, backend/Admin `9500`, storefront `8500`.
- **Validation fields:** `TEMPLATE_VALIDATION=PASS`; `US_USD_VALIDATION=PASS`; `FR_EUR_VALIDATION=PASS`; `CREDENTIAL_BLOCKER=RESOLVED`; `SECRET_SCAN=PASS`; `ABSOLUTE_PATH_SCAN=PASS`; `SOURCE_WORKTREE=CLEAN`.
- **CB-DEV-020 fields:** `MULTI_COPY_ISOLATION=PASS`; `PRE_SETUP_GUARD=PASS`; `RERUN_SAFE=PASS`; `US_USD_REGRESSION=PASS`; `FR_EUR_REGRESSION=PASS`; `PROJECT_STATUS_SYNC=PASS`; `STAGING_SECURITY=PASS`.
- **Portability fields:** `PORTABILITY_TEST=PASS`; project `medusa-template-portability-final3`; ports `55435/19503/18503` for database/backend/storefront; isolated volume `medusa-template-portability-final3_pgdata`; US/USD and France/EUR, Admin API and PostgreSQL checks passed.
- **Safety:** Historical databases, Docker volumes, historical orders, candidate application source, package locks and platform versions were preserved. One new local US/USD UI checkout smoke order was created as explicitly allowed; it was retained. No real payment provider was configured.

### CB-UI-DEV-003 — Current UI evidence

- **Build:** `corepack pnpm@10.11.1 exec tsc --noEmit` -> exit `0` (`5.7s`); `corepack pnpm@10.11.1 build` -> Next `15.5.21`, exit `0`, static generation `70/70` (`39.5s`). Backend production runtime was started from `.medusa/server`; storefront production runtime used `next start` on port `8000`.
- **Runtime:** Backend `/health` -> `200`; Store API products -> `200`; `/us`, `/us/store`, `/us/products/sweatshirt`, `/us/cart`, and `/us/checkout?step=address` loaded successfully. Browser error log remained empty.
- **Cart/Mini Cart:** Real Medusa Sweatshirt `S` variant rendered with live image, `$10.00` price, Bag count, item quantity, total, remove action, View your bag and Checkout. Quantity `1 -> 2 -> 1`, remove, empty state, and re-add passed; quantity/removal actions refresh after the existing server action completes so the visible state stays live. Mobile bag access uses the existing live `/us/cart` route because the hover Popover is hidden at the touch breakpoint.
- **Checkout:** Missing address and missing shipping/payment guards held progression; valid US address, `US Standard Shipping`, `Manual Payment`, review and place-order stages passed. Free-shipping nudge was not rendered because current configuration exposed no zero-price shipping rule.
- **New UI order:** `order_01M1GPCBKTY023ZS1VG4P2MDG3`, Display ID `4`, `USD`, shipping country `US`, `US Standard Shipping`, `pp_system_default`, total `20`. Storefront confirmation, Admin API, and PostgreSQL returned matching evidence.
- **Responsive:** `HORIZONTAL_OVERFLOW_1440=PASS`, `HORIZONTAL_OVERFLOW_1024=PASS`, `HORIZONTAL_OVERFLOW_768=PASS`, `HORIZONTAL_OVERFLOW_390=PASS` across Home, Store, PDP, Cart and Checkout checks. Required screenshots and QA documents are under `04_docs/ui_implementation/CB-UI-DEV-003/`.
- **Workspace cleanup:** `CLEANUP_BEFORE_SIZE=1,411,657,466 bytes / 1.31 GiB`; generated dependency/build/runtime artifacts were removed before implementation; `CLEANUP_AFTER_SIZE=21,756,735 bytes / 20.75 MiB`; `SPACE_RECLAIMED=1,389,900,731 bytes / 1.29 GiB` (`98.46%`). Removed only generated `node_modules`, `.next`, `.medusa`, `tsconfig.tsbuildinfo`, disposable CB-020 copy, and superseded external staging was moved to `CrossBorder-Independent-Store-LOCAL-ARCHIVE`; the project-local dependencies were then reinstalled for this build and remain excluded/ignored.
- **Cleanup preservation:** Main project and `CrossBorder-Independent-Store-LOCAL-ARCHIVE` were preserved; Medusa/Spree source, provenance, Evidence, Handoff, template, Git baselines, Docker volumes and Orders were not deleted. Root, Medusa candidate, and Spree candidate were clean immediately after cleanup; the UI checkpoint is `ac46cae`.

### CB-UI-DEV-003R — Current UI evidence

- **Task:** `CB-UI-DEV-003R`; **RESULT:** `PASS`; **CURRENT STAGE:** `UI IMPLEMENTATION`; **NEXT STEP:** `WAITING_FOR_REVIEWER`.
- **Checkout brand:** Desktop and mobile production captures show `Pawfectly Home` in the compact Checkout header; mobile shows `Back`.
- **Mobile Review:** Shipping Address, Contact, and Billing Address are stacked vertically at 390px with safe wrapping; Delivery and Payment checks report no overflow. Geometry evidence and zero intersections are recorded in `04_docs/ui_implementation/CB-UI-DEV-003R/FUNCTIONAL_REGRESSION.md`.
- **Cart sign-in:** `.ph-cart-signin-button` uses `white-space: nowrap`; the current live Cart was empty during this regression capture, so the conditional sign-in prompt was not rendered. The previous live Cart/Mini Cart evidence remains preserved under `CB-UI-DEV-003`.
- **Regression:** `corepack pnpm@10.11.1 exec tsc --noEmit` exit `0`; `corepack pnpm@10.11.1 build` exit `0`, Next `15.5.21`, static generation `70/70`; production routes and browser error-level logs passed. No new order was created.
- **Evidence:** Required screenshots and `UI_VISUAL_DIFF.md` / `FUNCTIONAL_REGRESSION.md` are under `04_docs/ui_implementation/CB-UI-DEV-003R/`. No backend, payment, shipping, Cart action, order, database, or volume semantics were changed.

## CB-UI-FINAL-001 — Current UI evidence

- **TASK:** `CB-UI-FINAL-001`; **RESULT:** `PASS`; **CURRENT STAGE:** `WEB UI FINAL QA`; **NEXT STEP:** `WAITING_FOR_REVIEWER`.
- **FULL_ROUTE_QA:** PASS for `/us`, `/us/store`, `/us/products/sweatshirt`, `/us/cart`, and `/us/checkout` at 1440/1024/768/390. Post-fix visible document geometry reports zero horizontal overflow; backend `/health` returned HTTP 200 `OK`; browser error-level log remained empty.
- **CSS_CLEANUP:** `BEFORE_CSS_LINES=3050`, `AFTER_CSS_LINES=3065`, `BEFORE_IMPORTANT_COUNT=19`, `AFTER_IMPORTANT_COUNT=12`; seven unnecessary force declarations removed. The remaining mixed stylesheet debt is `CSS_DEBT=P2_DEFERRED_TO_PRE_WEB_UI_FREEZE`.
- **VISUAL_QA:** Homepage, PDP, Collection, Cart, and Checkout each remain at the approved `95%` visual-match estimate. Final 1440/390 captures are under `04_docs/ui_implementation/CB-UI-FINAL-001/`.
- **ACCESSIBILITY:** Basic buttons/links/labels/focus/disclosure/alt/disabled-state audit PASS; `UNNAMED_PDP_ACCORDION_BUTTONS=0`; no WCAG certification claimed.
- **COMMERCE_REGRESSION:** Existing Medusa Region/USD, live product data, Search/Sort/option filter, variant/Add to Bag, Cart, shipping, System/Manual Payment and Checkout evidence preserved; no new order created in this final QA. Current seed variants are unavailable, so no non-empty Mini Cart was fabricated; previous live non-empty Cart/Mini Cart evidence remains under CB-UI-DEV-003.
- **ASSET_READINESS:** `REAL_PRODUCT_ASSET_REPLACEMENT_READY=YES`; live Medusa product imagery is used, neutral lifestyle slots remain for missing approved assets.
- **WEB_UI_FREEZE:** `PASS`; freeze document is `04_docs/ui_implementation/WEB_UI_FREEZE.md`. Deferred P2 content/taxonomy debt and local test-payment/product-data caveats are recorded there.
- **ROOT_CHECKPOINT:** `7f0e3d698e076eae89b627a58e52ec7a60d4aa94` (`qa: freeze Pawfectly Home web UI`); root, Medusa candidate, and Spree candidate worktrees are clean. The final handoff hash-record update follows as a documentation-only commit.

## TASK LEDGER

| Task | Result | Evidence |
|---|---|---|
| CB-DEV-012 | PASS | Medusa US/USD System Payment order smoke; Admin API + PostgreSQL double-read. |
| CB-DEV-013 | PASS | Medusa backend/storefront production builds and production-mode runtime. |
| CB-DEV-014 | PASS | Spree official baseline, prebuilt runtime, Sample Data, Store API commerce, and US/USD sanity. |
| CB-DEV-015 | PASS | Review bundle security, provenance, root/nested Git baselines, guarded scripts, evidence normalization, and fixed bundle verification. |
| CB-DEV-015R | PASS | Review Bundle source-faithful staging, integrity attestation, UTF-8 manifest, and forward-slash ZIP regression fix. |
| CB-DEV-016 | PASS | Spree local-source Docker build, independent PostgreSQL 18 runtime, storefront production build/runtime, US/USD Check order, Admin API and PostgreSQL double-read. |
| CB-DEV-017 | PASS | Symmetric disposable repeatability, France/EUR second-market orders, rerun safety, production metrics, audits, and operability evidence for both candidates. |
| CB-DEV-018 | PASS | Medusa final selection, credential-blocker resolution, fresh mother-template validation, US/USD and France/EUR orders, production builds/runtime, and UI implementation boundary. |
| CB-REVIEW-02-PREP | PASS | Pre-cleanup size inventory, generated-artifact cleanup, old Review archive move, source/Git preservation checks, and manual Review-02 include/exclude guidance. |
| CB-DEV-019 | PASS | Mother Template port/project portability, fresh non-default validation, authoritative runbook, safe Review staging, and root checkpoint closure. |
| CB-DEV-020 | PASS | Mother Template fresh-copy identity/volume isolation, pre-setup zero-mutation guards, same-copy rerun safety, final US/USD + France/EUR regression, status sync, and Review-02 staging closure. |
| CB-REVIEW-03-PREP | PASS | UI structure, Figma consistency, commerce boundary, data honesty, responsive/basic accessibility, build/regression audit, and safe Review-03 staging. |
| CB-REVIEW-03-FIX | PASS | Closed the 768px Header overflow, corrected option selectedCount interpretation and re-verified live filtering, removed unsupported claims, and named PDP accordion triggers. |
| CB-UI-DEV-003 | PASS | Cart, Mini Cart, Checkout presentation, responsive evidence, one US/USD System Payment UI order, Admin/PostgreSQL re-read, and production regression. |
| CB-UI-DEV-003R | PASS | Checkout Pawfectly Home branding, mobile Review stacking, Delivery/Payment responsive regression, Cart sign-in no-wrap fix, production build, and screenshot evidence. |
| CB-UI-FINAL-001 | PASS | Full-site responsive/accessibility/commerce regression, controlled CSS cleanup, Figma/Web visual audit, and Web UI Freeze. |

## LAST RUN

Local execution date: `2026-09-02` (Asia/Shanghai). Important commands and outcomes:

- CB-DEV-018 template bootstrap: `powershell -NoProfile -ExecutionPolicy Bypass -File 03_template/medusa-crossborder-base/scripts/setup-local.ps1` -> `TEMPLATE_VALIDATION=PASS`, `TEMPLATE_FREEZE=PASS`. Exact project pnpm `10.11.1` and frozen lock install passed; migration-based `initial-data-seed.ts`, US/USD augmentation, Admin creation/reuse against the new validation DB, and publishable-key configuration passed.
- CB-DEV-018 production build/runtime: backend build `PASS` and storefront Next `15.5.21` production build `PASS`; built backend started from `.medusa/server`, storefront production runtime started, Admin/API and `/us`/`/us/store` smoke passed. No candidate application source or lockfile patch was needed.
- CB-DEV-018 commerce evidence: new validation order `order_01M1EFQF516285FT7929NGEFF2` is USD, US, total `115`, `US Standard Shipping`, `pp_system_default`; new validation order `order_01M1EFQJP5AXSKF88N9ND641BP` is EUR, FR, total `20`, `Standard Shipping`, `pp_system_default`. Store API, Admin API and PostgreSQL checks matched for both.
- CB-DEV-018 credential handling: the old Review-01 local credential was not reused as template evidence. A new local-only Admin credential was created/verified in the new validation database, stored only under ignored runtime state, and not written here or to any Review Bundle. `TEMPLATE_FREEZE_CREDENTIAL_BLOCKER=RESOLVED`.
- CB-DEV-018 hygiene: template source scan found no runtime env, credential, build/cache or machine-specific path; `REAL_CREDENTIAL_LEAKS=0`, `ABSOLUTE_USER_PATHS=0`, and candidate source worktrees remained clean. Validation-generated runtime artifacts were moved out of the template tree into ignored root runtime storage after evidence capture.

- CB-REVIEW-02-PREP size inventory and cleanup: `BEFORE_TOTAL_SIZE=4,209,485,100 bytes / 3.92 GiB`; generated dependency/build/runtime artifacts were removed or moved outside the project; final measured workspace size is `16,377,184 bytes / 15.62 MiB`. `SPACE_RECLAIMED=4,193,107,916 bytes / 3.91 GiB`; `REDUCTION_PERCENT=99.61%`.
- CB-REVIEW-02-PREP preserved source, evidence, Mother Template, provenance and root/Medusa/Spree Git metadata. Old Review bundles and generated runtime/tooling artifacts were moved to the sibling `CrossBorder-Independent-Store-LOCAL-ARCHIVE`; no ZIP was created.

- CB-DEV-019 template portability: `setup-local.ps1` accepted and propagated `ProjectName=medusa-template-portability-final3`, `DatabasePort=55435`, `BackendPort=19503`, and `StorefrontPort=18503`; `.runtime/local-config.json` persisted the contract. Explicit parameter mismatch was rejected by the guard. The first runner attempt exposed a generated-tree lock during a redundant backend rebuild; the runner was corrected to stop the process tree and setup now uses a storefront-only second build, then a clean one-command run passed.
- CB-DEV-019 final disposable validation: fresh migration baseline and `MEDUSA_BASELINE_SEEDED_BY_MIGRATION` passed; US/USD order `order_01M1EQN3W3JYYQY4Z6BF1534Y9`, currency `usd`, country `us`, total `115`, `US Standard Shipping`, `pp_system_default`, Admin API and PostgreSQL re-read PASS. France/EUR order `order_01M1EQN8CSHK0XH0RV1A4DC6YV`, currency `eur`, country `fr`, total `20`, `Standard Shipping`, `pp_system_default`, Admin API and PostgreSQL re-read PASS. Backend and storefront production builds and production runtime completed; exact project pnpm `10.11.1` was used.
- CB-DEV-019 disposable cleanup: the four new portability-test projects/volumes were stopped and removed by exact Compose project name; historical Medusa/template-validation and Spree environments were not touched. `medusa-template-portability-final3_pgdata` was the final validation volume.
- CB-DEV-019 review staging: `powershell -NoProfile -ExecutionPolicy Bypass -File 04_docs/scripts/92-prepare-review-staging.ps1` generated external `CrossBorder-Independent-Store-REVIEW-STAGING`. `REVIEW_STAGING=PASS`, `SECRET_SCAN_RESULT=PASS`, `REAL_CREDENTIAL_LEAKS=0`, `DENYLIST_SCAN_RESULT=PASS`, `ABSOLUTE_PATH_SCAN=PASS`, `ZIP_CREATED=NO`; 1,429 files included and 15 excluded. Safe environment templates and source regression files were copied byte-for-byte; `customer.ts` retains `password: string`, and Spree `AuthContext.tsx` contains no sanitizer marker.
- CB-DEV-019 hygiene: root `.gitignore`, candidate source, Mother Template, UI baseline, Scorecard, final selection evidence and Handoff are present in staging. Staging has zero `.git`, runtime `.env`, credentials, `*.local.txt`, `node_modules`, `.next`, `.medusa` or `tsbuildinfo` entries. `REVIEW02_ROOT_BASELINE_COMMIT=55e5839c251ba437316a976212a18f750c63d31d`.

- CB-DEV-020 exact toolchain: the first fresh-copy preflight detected the shell fallback pnpm `11.25.0`; the template runner was corrected to invoke the declared Corepack package `pnpm@10.11.1`. Subsequent Copy A/Copy B setup, build, start and smoke commands reported `PNPM_VERSION=10.11.1`; PowerShell parser checks passed for all changed runners.
- CB-DEV-020 Copy A: fresh copy without `-ProjectName`, ports `55440/19510/18510` (database/backend/storefront), generated project `medusa-crossborder-independent-store-cb020-mother-copy-e0669d07`, volume `medusa-crossborder-independent-store-cb020-mother-copy-e0669d07_pgdata`, PostgreSQL container `cdcc2bc8ecbc512f2fb7a00c5cd0cbda89cd51cb4d21a3a5444f9b73a755f198`. First bootstrap and the complete US/USD + France/EUR Store/Admin/PostgreSQL/build/runtime acceptance passed; first orders `order_01M1EV7DH74BMX1S3XMDPMB0N4` (USD/US, total `115`) and `order_01M1EV7HEACAHBDHESJGXFF5S6` (EUR/FR, total `20`).
- CB-DEV-020 Copy B: independent fresh copy without `-ProjectName`, ports `55441/19511/18511`, generated project `medusa-crossborder-independent-store-cb020-mother-copy-32d639d9`, volume `medusa-crossborder-independent-store-cb020-mother-copy-32d639d9_pgdata`, PostgreSQL container `a2818603e7729dcfc126c240af5c0fcd6e34fd3fad028e5e49cf63ffb9749f94`. Complete bootstrap and US/USD + France/EUR acceptance passed; orders `order_01M1EVNTR9PT8WBQHPZ47DKJBN` (USD/US, total `115`) and `order_01M1EVNYWP0AA3PSEYX2JDBSC5` (EUR/FR, total `20`). Compose labels and actual container mounts proved A/B physical volume separation; database order counts were A `4` vs B `2`.
- CB-DEV-020 rerun safety: Copy A was rerun with no explicit settings; its saved project/ports were reused, `TEMPLATE_VALIDATION_VOLUME_REUSED` was emitted, resource counts remained `2 regions / 4 products / 3 shipping options / 4 orders`, and US/USD + France/EUR Admin/PostgreSQL smoke passed with new orders `order_01M1EVYXSZF9RN204JYW3H2GHA` and `order_01M1EVZ1JG51HD48R4D5EW49HT`.
- CB-DEV-020 fresh-copy guards: `start-local.ps1`, `build-production.ps1`, and `acceptance-smoke.ps1` on a copy without `.runtime/local-config.json` each exited nonzero with `RUN_SETUP_LOCAL_FIRST`; runtime config, Docker project/volume, env files, and build artifacts remained absent. A fresh copy forced to use Copy A's existing project name exited with `FRESH_TEMPLATE_COPY_VOLUME_COLLISION` before writing config or starting Docker.
- CB-DEV-020 cleanup: only the two CB-020 disposable Compose projects/volumes and three external disposable copy directories were removed after evidence capture. Historical Medusa, template-validation, repeat, and all Spree containers/volumes remained present and unchanged; no new Spree or commerce validation was run.

- CB-DEV-017 disposable environments were created without touching historical projects or volumes. Medusa repeat PostgreSQL `16-alpine` volumes were `crossborder-medusa-repeat_pgdata` and `crossborder-medusa-repeat-2_pgdata`; Spree repeat PostgreSQL `18.6` volumes were `spree-demo-repeat_postgres_data` and `spree-demo-repeat-2_postgres_data`, with separate storage volumes.
- Medusa repeat: exact pnpm `10.11.1`; fresh `medusa db:migrate` ran migration seed; US/USD augmentation and rerun both passed. First repeat US order `order_01M1E8KRQ2D0XE7KN64H1WWMSE` total `115`; France/EUR order `order_01M1E8X7BKYQHQHNEEPSG0SR3R` total `20`; Store/Admin/PostgreSQL evidence matched.
- Medusa repeat-2: fresh migration/seed, US/USD augmentation, production backend startup on `9301`, and new US/USD order `order_01M1EAXBWXE2YEBG06ARRHE94E` passed. The second run reused the existing locked build artifact and did not reuse the first repeat volume.
- Spree repeat: local source backend image `spree-demo-repeat-backend:cb-dev-017` built from the candidate Dockerfile with `SPREE_CLI_VERSION=2.4.9`, exit `0`, duration `139.7s`, image ID `sha256:57b7823fd1ac75ad111274d39ad099686cae230caf5ac59240ab311da445b13d`; image is distinct from Quick Start `sha256:048c57126667464722c61485be81686d7ddc1717794a3d77eff902a4e2125070`.
- Spree repeat: source PostgreSQL `18.6`, exact storefront pnpm `10.33.4`, clean production build exit `0` in `47.3s`, backend cold start `22.2s`, storefront product-page cold start `16.5s`; US/USD order `or_OIJLhNcSbf` / `R558089105` total `39.99` and France/EUR order `or_AXs1igzRC6` / `R214021284` total `45.99` passed Store/Admin/PostgreSQL double-read.
- Spree repeat-2: fresh PG18/storage volumes, sample initialization and rerun kept `36` products / `121` variants without duplicate seed counts; backend started on `9401` and new US/USD order `or_EfhxLZ9ck8` / `R095286615` passed double-read.
- `04_docs/scripts/14-spree-repeatability.ps1` was exercised as a rerun-safe preparation runner. It makes storage ownership and post-sample Check `display_on=both` explicit; no destructive reset was used.
- Production metrics: Medusa backend/storefront `55.4s/49.3s`, cold start `10.8s/2.2s`; Spree local-source backend/storefront `139.7s/47.3s`, cold start `22.2s/16.5s`. These are local single-run observations, not load tests.
- Dependency snapshot: Medusa storefront audit `0 critical / 4 high / 5 moderate`; Spree storefront audit `0 critical / 9 high / 10 moderate`; Ruby audit `NOT_AVAILABLE`, Docker Scout indexing not completed. No dependency or lockfile update was made.

- PowerShell parser checks passed for `_common.ps1`, `01-preflight.ps1`, `02-start-medusa-db.ps1`, `03-prepare-medusa.ps1`, `05-us-order-smoke.ps1`, `90-build-review-bundle.ps1`, `91-check-spree-db-isolation.ps1`, and `99-reset-local.ps1`; `node --check 04_docs/node/us-order-smoke.mjs` passed.
- `powershell -NoProfile -ExecutionPolicy Bypass -File 04_docs/scripts/91-check-spree-db-isolation.ps1` → `SPREE_DB_ISOLATION_GUARD=PASS`; prebuilt project resolves `spree-demo_postgres_data`, source qualification must resolve `spree-demo-source_postgres_data`.
- `powershell -NoProfile -ExecutionPolicy Bypass -File 04_docs/scripts/05-us-order-smoke.ps1` → `US_ORDER_SMOKE_PASS`; hardened smoke order `order_01M1DX5H2FTDYR2N4J16HTK1HZ`, Display ID `3`, total `25`, currency `USD`, country `us`.
- Hardened smoke order was re-read through Admin API: order exists, total `25`, country `us`, shipping method `US Standard Shipping`. PostgreSQL re-read returned the same ID with `currency_code=usd`, current order total `25`, and country `us`.
- `medusa user --help` was checked using project pnpm `10.11.1`; the CLI exposes user creation but no verified non-destructive password update/reset command. No reset was attempted.
- Root meta Git baseline was initialized at `0169d6f1a50ba2f4a7b039906328d8653d60b03a` before final documentation updates; the final root commit is recorded in `REVIEW_MANIFEST.txt`.
- Spree local baseline commit: `f9966ab61ae0ceb72f62a51167b1c013fe10230f`.
- Final bundle command: `powershell -NoProfile -ExecutionPolicy Bypass -File 04_docs/scripts/90-build-review-bundle.ps1`; the final SHA256, counts, scan result, and source template hashes are in the root `REVIEW_MANIFEST.txt` and the bundled manifest.
- CB-DEV-015R final command: `powershell -NoProfile -ExecutionPolicy Bypass -File 04_docs/scripts/90-build-review-bundle.ps1` -> `SECRET_SCAN_RESULT=PASS` (pre-archive and post-ZIP), `SOURCE_INTEGRITY_RESULT=PASS`, `SOURCE_MUTATIONS=0`, `REAL_CREDENTIAL_LEAKS=0`, `POST_ZIP_DENYLIST_SCAN=PASS`, `ZIP_ENTRY_SEPARATOR=FORWARD_SLASH`.
- Final bundle: `REVIEW-01-FINAL.zip`; external attestation: `REVIEW-01-FINAL.attestation.txt`; `FINAL_SHA256=recorded in external attestation`. The root/bundled manifest records content metadata and the expected external attestation filename; the external attestation is authoritative because putting the archive hash inside the archive would create a self-reference.
- Final validation counts: `file_count=1141`, `excluded_count=31`, `redacted_env_count=4`; root `.gitignore` was included and hash-verified; safe `.env.example`/`.env.template` hashes matched byte-for-byte.
- `powershell -NoProfile -ExecutionPolicy Bypass -File 04_docs/scripts/91-check-spree-db-isolation.ps1` -> `SPREE_DB_ISOLATION_GUARD=PASS`; `spree-demo_postgres_data` and `spree-demo-source_postgres_data` are distinct physical volumes.
- `powershell -NoProfile -ExecutionPolicy Bypass -File 04_docs/scripts/07-build-spree-source.ps1` -> Docker production build with `--build-arg SPREE_CLI_VERSION=2.4.9`, exit `0`, duration `203.7s`; image ID/repo digest `sha256:ddd89fd8e443affc5e9e6422e617e0794aae10becb6ac458e54992db7376efb0`. Temporary build context LF normalization was used for Windows CRLF shebang compatibility; candidate worktree stayed unchanged.
- `powershell -NoProfile -ExecutionPolicy Bypass -File 04_docs/scripts/06-prepare-spree-source.ps1` -> source PostgreSQL `18.6`, migrations/baseline/sample data/reindex PASS; 36 products, 121 variants, one US/USD market and source project `spree-demo-source`.
- `powershell -NoProfile -ExecutionPolicy Bypass -File 04_docs/scripts/08-spree-source-smoke.ps1` -> `SOURCE_ORDER_SMOKE_PASS`, `SOURCE_ORDER_DOUBLE_READ=PASS`; source order `or_98FqgRua4h`, number `R730405727`, total `49.99 USD`, shipping country `US`, `UPS Ground (USD)`, Check payment. Store API, Admin API and source PostgreSQL returned matching identity/amount/currency/country/payment/shipping evidence.
- `corepack pnpm install --frozen-lockfile` and `corepack pnpm run build` in `02_demos/spree-demo/apps/storefront` -> pnpm `10.33.4`, Next `16.2.11`, exit `0`, build duration `61.1s`; production `next start -p 3002` returned `/us/en`, `/us/en/products`, and source product detail as `200` with product/USD HTML.
- Source backend container `spree-demo-source-web-1` is healthy, `RAILS_ENV=production`, `/up=200`; Dashboard `/dashboard=200`; source Spree runtime version `5.6.1`. Quick Start image ID `sha256:048c57126667464722c61485be81686d7ddc1717794a3d77eff902a4e2125070` remained distinct and its database/order state was not used by source qualification.
- Early source-runner failures were corrected without resetting data: host proxy caused a false local HTTP probe, sample-data storage needed container ownership, and a rerun-safe seed probe avoided duplicate Store validation. Final initialization and smoke completed successfully.
- CB-DEV-016 evidence fields: `SOURCE_BACKEND_IMAGE_ID=sha256:ddd89fd8e443affc5e9e6422e617e0794aae10becb6ac458e54992db7376efb0`; `SOURCE_POSTGRES_VERSION=18.6`; `SOURCE_DB_VOLUME=spree-demo-source_postgres_data`; `SOURCE_ORDER_ID=or_98FqgRua4h`; `SOURCE_ORDER_NUMBER=R730405727`; `STOREFRONT_BUILD_RESULT=PASS`; `LOCAL_SOURCE_RUNTIME_RESULT=PASS`; `SOURCE_WORKTREE_STATUS=CLEAN`.

## KEY VERIFIED EVIDENCE

### CB-DEV-012 — Medusa US/USD Order Smoke

- Medusa `2.19.0`; declared/project pnpm `10.11.1`; Node `v24.19.0`.
- US Region `reg_01M1DFTRDVE3VFFH544YF35DYA` was returned by Store API with `currency_code=usd`.
- Sellable Medusa Sweatpants / M had calculated USD price `$15.00`; `US Standard Shipping` and `pp_system_default` were selected.
- Original completed order `order_01M1DKBRWD3DNN1D7MWQZR36EE`, Display ID `2`, total `25`, currency `USD`, shipping country `us`.
- Admin API returned the order and PostgreSQL independently confirmed USD, US address, `US Standard Shipping`, and authorized System payment. This evidence and the EUR test order #1 remain preserved.

### CB-DEV-013 — Medusa Production Build / Runtime

- Backend direct build from `apps/backend`: project pnpm `10.11.1` `run build`, exit code `0`; artifacts generated under `apps/backend/.medusa/server`.
- Storefront clean Next production build from `apps/storefront`, exit code `0`; independent TypeScript check exit code `0`.
- Production runtime started the backend from `.medusa/server` and storefront with `next start`; backend `/health` and Admin `/app` responded successfully.
- Production Store API returned the US Region/USD and a USD product; production `/us` and `/us/store` returned `200`.
- Runtime caveat: Medusa v2.19 backend must start from `.medusa/server` to locate the built Admin artifact. This is documented; it is not a build failure.

### CB-DEV-014 — Spree Baseline / Core / US/USD

- Official route: `create-spree-app@1.2.1`; locked `@spree/cli` `2.4.9`; backend Spree `5.6.1`; official storefront commit `e1b2cc76335fe9a419afb090db5ef5da61432bab`.
- Prebuilt runtime: `ghcr.io/spree/spree:latest`, image ID `sha256:048c57126667464722c61485be81686d7ddc1717794a3d77eff902a4e2125070`, repo digest `ghcr.io/spree/spree@sha256:048c57126667464722c61485be81686d7ddc1717794a3d77eff902a4e2125070`; backend/Admin `9100`, storefront `3001`, US route `/us/en`.
- Sample Data loaded/reindexed: 36 products. Store API checkout passed product → cart → US address → `UPS Ground (USD)` → seeded `Check` payment → order.
- Spree order `or_uw2YK1rnl0`, number `R159573601`, total `884.99 USD`, shipping country `US`; Admin API and PostgreSQL re-read passed.
- Spree Store API checkout is PASS. Seeded `Check` payment was not visible in the current storefront UI, so storefront UI payment checkout is `PARTIAL/NOT VERIFIED`; upstream E2E files are not current runtime proof.

### CB-DEV-015 — Normalization Evidence

- Review bundle script implements staging, filtering, runtime env redaction, source template byte-integrity checks, pre-ZIP secret scan, manifest creation, ZIP creation, post-ZIP scan, and SHA256.
- Runtime credential files and `.env`/`.env.local`/`.env.e2e` files are excluded. Redacted runtime env structures are placed only under `REVIEW_ENV/`, with complete variable names preserved.
- Safe `.env.example` and `.env.template` files are copied byte-for-byte; hashes are recorded in `REVIEW_MANIFEST.txt`.
- `REAL_CREDENTIAL_LEAKS=0` and `SECRET_SCAN_RESULT=PASS` are required by the script and recorded only after both scans pass.
- Medusa migration-based baseline initialization is now distinguished from US/USD augmentation. Normal rerun preserves valid non-default JWT/Cookie secrets. Admin credential reuse verifies the matching DB user before reporting readiness.
- `99-reset-local.ps1` is dry-run by default; destructive reset requires `-ConfirmReset`, and clone removal additionally requires `-DeleteClone`. It targets only the Medusa Compose project.
- Medusa PostgreSQL image identity is checked with `docker image inspect` JSON before an existing volume is started. Spree prebuilt/source volume isolation is guarded by `91-check-spree-db-isolation.ps1`.

### CB-DEV-015R - Review Bundle Source-Integrity Fix

- The prior Review-01 Builder was corrected to stop sanitizing arbitrary staged source text. Application source, configuration source, automation source, documentation, Docker files, and lockfiles are now copied byte-for-byte; a real credential in ordinary source fails the build instead of being silently rewritten.
- Runtime `.env`, credential, session, and local-secret files remain excluded. Redacted runtime environment structure is generated only under `REVIEW_ENV/`; complete variable names are preserved. Safe `.env.example` and `.env.template` files remain unchanged and their source/review SHA256 values match.
- `SOURCE_INTEGRITY_RESULT=PASS` and `SOURCE_MUTATIONS=0` were verified across the staged project records, including `04_docs/**`, `02_demos/medusa-local/**`, `02_demos/medusa-dtc/**`, and `02_demos/spree-demo/**`. Root `.gitignore` is present in the Bundle and hash-verified.
- ZIP creation uses `System.IO.Compression.ZipArchive`; independent inspection found 1,141 entries, zero backslash separators, zero denylist matches, and post-ZIP secret scan PASS. Manifest and attestation are strict UTF-8 with `MOJIBAKE_CHECK=PASS`.
- Regression checks passed: `02_demos/spree-demo/apps/storefront/src/lib/data/customer.ts` still contains `password: string`; `AuthContext.tsx` and the other checked source files were byte-faithful. The external attestation records the final archive SHA256, post-ZIP scans, file count, source integrity, and zero real credential leaks.
- `REVIEW-01-FIXED.zip` is retained only as a superseded historical artifact; it must not be used as the source-faithful review evidence because the old Builder mutated ordinary source text. `REVIEW-01-FINAL.zip` is the valid bundle for this review.

### CB-DEV-016 - Spree Local-Source Production Qualification

- Source baseline `f9966ab61ae0ceb72f62a51167b1c013fe10230f` was verified clean before and after qualification; no Spree candidate application source or lockfile was patched.
- Local source backend was built from `02_demos/spree-demo/backend/Dockerfile` using explicit CLI `2.4.9`, Ruby `4.0.1`, Docker Node `22`, and locked Spree `5.6.1`. The resulting local image is distinct from the Quick Start prebuilt image.
- Source database isolation passed before startup. PostgreSQL `18.6` uses `spree-demo-source_postgres_data` and storage uses `spree-demo-source_storage_data`; the existing Quick Start `spree-demo_postgres_data` volume was untouched.
- Sample initialization loaded/reindexed 36 products. The source Store API exposed valid USD pricing; source backend `/up`, source Dashboard `/dashboard`, source Admin API, and source storefront production routes all responded successfully.
- Source commerce completed one new US/USD Check order. Store API, Admin API and source PostgreSQL re-reads matched on order ID/number, currency, US country, total, payment method/provider, and shipping method.
- `Admin browser login proof=UNKNOWN/NOT VERIFIED`; Admin/Dashboard route and Admin API were verified separately. The stock dashboard template has no committed lockfile, so `STOCK_DASHBOARD_UNLOCKED_DEPENDENCY_RISK` remains documented.

### CB-DEV-017 - Final Symmetric Repeatability & Operability Benchmark

- `MEDUSA_REPEATABILITY=PASS`: first disposable project `crossborder-medusa-repeat` and second disposable project `crossborder-medusa-repeat-2` both completed fresh PostgreSQL initialization, migration seed, US/USD augmentation, backend/API startup, and new US/USD order smoke. Rerunning the augmentation reused existing IDs without duplicates.
- `SPREE_REPEATABILITY=PASS`: first disposable project `spree-demo-repeat` and second `spree-demo-repeat-2` both used new PostgreSQL 18.6/storage volumes, local source image runtime, 36 sample products / 121 variants, and new US/USD orders. Repeated official sample load retained product/market/shipping counts; the explicit runner reapplied Check visibility after sample loading.
- `MEDUSA_SECOND_MARKET=PASS`: France/EUR order `order_01M1E8X7BKYQHQHNEEPSG0SR3R`, total `20`, country `fr`, `Standard Shipping`, `pp_system_default`, Admin/PostgreSQL matched.
- `SPREE_SECOND_MARKET=PASS`: France/EUR order `or_AXs1igzRC6`, number `R214021284`, total `45.99`, country `FR`, `UPS Ground (EUR)`, Check, Admin/PostgreSQL matched.
- `MEDUSA_BUILD_SECONDS=104.7` (`55.4` backend + `49.3` storefront); `SPREE_BUILD_SECONDS=187.0` (`139.7` local backend image + `47.3` storefront). `MEDUSA_COLD_START_SECONDS=10.8 backend / 2.2 storefront`; `SPREE_COLD_START_SECONDS=22.2 backend / 16.5 storefront`.
- `MEDUSA_RAM_MB=approximately 43` combined first-repeat idle runtime; `SPREE_RAM_MB=approximately 1094` combined first-repeat idle runtime. `MEDUSA_ARTIFACT_SIZE=.medusa/server 8.3 MB + storefront .next 367.2 MB`; `SPREE_ARTIFACT_SIZE=backend image 209.3 MB + storefront .next 89.3 MB`.
- `MEDUSA_MANUAL_STEPS=0 interventions after runner inputs`; `SPREE_MANUAL_STEPS=0 interventions after runner-owned storage/check normalization`. `MEDUSA_WORKAROUNDS=.medusa/server startup path and local fake Redis/event bus`; `SPREE_WORKAROUNDS=temporary LF-normalized build context, storage ownership normalization, and stock dashboard unlocked dependency risk`.
- Local source worktrees remained clean; application source, package manifests, and lockfiles were not changed. Historical Medusa/Spree databases, volumes, and orders were not used as repeat PASS evidence.
- Template application-source hash comparison: `258` copied candidate files matched byte-for-byte; the only intentional template-only differences are the authored README and template `.gitignore` control files.
- Current evidence gaps remain explicit: Spree authenticated Admin browser login `UNKNOWN/NOT VERIFIED`; Spree storefront payment UI `PARTIAL/NOT VERIFIED`; dependency audits report advisories and no package updates were made. These do not reopen the reviewer’s final Medusa selection.

## CHANGES MADE

- Added root meta Git repository with strict `.gitignore`; candidate source trees remain outside the root baseline.
- Added the generated-review attestation ignore rule to the root meta `.gitignore`.
- Added independent Spree local Git baseline and provenance records for Medusa archive/local identities, Spree versions/image identity, and PostgreSQL isolation.
- Added `04_docs/scripts/90-build-review-bundle.ps1` and `04_docs/scripts/91-check-spree-db-isolation.ps1`.
- Replaced the Review Builder's arbitrary text sanitizer with byte-faithful source copying, explicit runtime-env redaction, strict source-line allowlisting for deterministic public fixtures, source SHA256 verification, custom forward-slash ZIP creation, post-ZIP scans, and an external attestation.
- Hardened `04_docs/node/us-order-smoke.mjs` with assertions for order type/id, USD, US shipping address, positive total, canonical US shipping, payment collection/session, and System provider.
- Corrected Medusa preparation detection for `initial-data-seed.ts`, rerun-safe secrets, DB-verified Admin credential reuse, and archive provenance.
- Added pre-start PostgreSQL image drift guard, recoverable-network preflight behavior, and confirmation-gated Medusa reset.
- Normalized `PLATFORM_COMPARISON.md`, `ACCEPTANCE_GATES.md`, `LOCAL_RUNBOOK.md`, `DEMO_BOOTSTRAP.md`, `WINDOWS_PREFLIGHT.md`, `PRODUCTION_READINESS.md`, and `RUNTIME_SCORECARD.md`.
- Corrected the real Medusa storefront runtime env to `NEXT_PUBLIC_BASE_URL=http://localhost:8000`; the safe `.env.template` remains unchanged.
- Added an explicit empty `03_template/.gitkeep`; no platform source has been frozen.
- Added Spree local-source orchestration: `02_demos/spree-local/docker-compose.source.yml`, source image build/prepare/smoke/runtime scripts, and `04_docs/node/spree-source-order-smoke.mjs`.
- Qualified the source-only Check payment as storefront-visible in the new source database (`display_on=both`); no Quick Start or Medusa payment configuration was changed.
- Updated `RUNTIME_SCORECARD.md` with Spree local-source build/runtime/order evidence and explicit stock-dashboard/Windows line-ending reproducibility caveats.
- Added disposable repeat compose definitions for Medusa and Spree, including second-run projects with separate ports and physical volumes.
- Added `04_docs/node/medusa-repeat-augment.ts`, `medusa-repeat-smoke.mjs`, and Medusa repeat production-start runners; migration-based baseline seed is exercised without DB reset.
- Hardened `spree-source-order-smoke.mjs` and its PowerShell runner for country/currency/label parameters, France/EUR evidence, and Windows Docker stderr capture; added `14-spree-repeatability.ps1`.
- Added `04_docs/FINAL_SELECTION_EVIDENCE.md` and appended unweighted CB-DEV-017 repeatability/operability evidence to `RUNTIME_SCORECARD.md`.
- Recorded Reviewer decision `TECHNOLOGY_SELECTION=MEDUSA`; marked Spree `BENCHMARK_REFERENCE` / `NOT_SELECTED` without deleting its evidence.
- Created `03_template/medusa-crossborder-base/` with locked Medusa source, safe env contracts, provenance, migration baseline, rerun-safe US/USD augmentation, local setup/start/build runners, and acceptance smoke.
- Added `04_docs/UI_IMPLEMENTATION_BASELINE.md` to define the next UI implementation boundary without changing visual design or commerce behavior.
- Resolved the template-freeze credential blocker by creating and verifying a new local-only Admin credential in the isolated `medusa-template-validation` database; the credential remains ignored and is not recorded in documentation.
- CB-DEV-018 fresh template validation passed for US/USD and France/EUR Store/Admin/PostgreSQL order evidence, production backend/storefront builds, production runtime, and template hygiene.
- CB-DEV-019 made Mother Template Compose DB port and project name configurable with a guarded runtime config contract; propagated all four runtime parameters through setup/start/build/smoke; hardened generated-tree process cleanup; and removed the obsolete template `.gitkeep`.
- CB-DEV-019 synchronized `PROJECT_STATUS.json`, made the Mother Template the authoritative runbook path, marked manual demo bootstrap as historical, and pointed the UI implementation baseline at the Mother Template.
- CB-DEV-019 added `04_docs/scripts/92-prepare-review-staging.ps1`; it performs external source-faithful staging, exclusions, safe-template hash checks, secret/denylist/absolute-path scans and writes `STAGING_MANIFEST.txt` without creating a ZIP.

## FILES CHANGED

- `00_HANDOFF.md`
- `.gitignore`
- `02_demos/README.md`
- `02_demos/medusa-dtc.UPSTREAM.txt`
- `02_demos/provenance/medusa-baseline.txt`
- `02_demos/provenance/spree-baseline.txt`
- `02_demos/provenance/spree-db-isolation.txt`
- `02_demos/spree-demo/.gitignore` and its independent local Git metadata
- `03_template/.gitkeep`
- `PROJECT_STATUS.json`
- `04_docs/RUNTIME_SCORECARD.md`
- `04_docs/ACCEPTANCE_GATES.md`
- `04_docs/LOCAL_RUNBOOK.md`
- `04_docs/DEMO_BOOTSTRAP.md`
- `04_docs/WINDOWS_PREFLIGHT.md`
- `04_docs/PRODUCTION_READINESS.md`
- `04_docs/node/us-order-smoke.mjs`
- `04_docs/scripts/_common.ps1`, `01-preflight.ps1`, `02-start-medusa-db.ps1`, `03-prepare-medusa.ps1`, `05-us-order-smoke.ps1`, `90-build-review-bundle.ps1`, `91-check-spree-db-isolation.ps1`, `99-reset-local.ps1`
- `02_demos/spree-local/docker-compose.source.yml`
- `04_docs/node/spree-source-order-smoke.mjs`
- `04_docs/scripts/06-prepare-spree-source.ps1`, `07-build-spree-source.ps1`, `08-spree-source-smoke.ps1`, `09-start-spree-source-storefront.ps1`
- `02_demos/medusa-repeat/docker-compose.repeat.yml`, `docker-compose.repeat-2.yml`
- `02_demos/spree-repeat/docker-compose.repeat.yml`, `docker-compose.repeat-2.yml`
- `04_docs/node/medusa-repeat-augment.ts`, `04_docs/node/medusa-repeat-smoke.mjs`, `04_docs/node/spree-source-order-smoke.mjs`
- `04_docs/scripts/07-build-spree-source.ps1`, `08-spree-source-smoke.ps1`, `09-start-spree-source-storefront.ps1`, `12-start-medusa-repeat.ps1`, `13-start-medusa-repeat-storefront.ps1`, `14-spree-repeatability.ps1`
- `04_docs/FINAL_SELECTION_EVIDENCE.md`
- `03_template/medusa-crossborder-base/` (mother template source, safe env contracts, provenance, Compose, scripts, and README)
- `04_docs/UI_IMPLEMENTATION_BASELINE.md`
- `04_docs/REVIEW02_WORKSPACE_SIZE_REPORT.md`
- `04_docs/REVIEW02_INCLUDE_EXCLUDE.md`
- `04_docs/REVIEW02_CLEANUP_REPORT.md`
- `04_docs/scripts/92-prepare-review-staging.ps1`
- `03_template/medusa-crossborder-base/docker-compose.local.yml`, `README.md`, `scripts/_common.ps1`, `scripts/setup-local.ps1`, `scripts/start-local.ps1`, `scripts/build-production.ps1`, `scripts/acceptance-smoke.ps1`
- `04_docs/scripts/90-build-review-bundle.ps1` remains the historical Review-01 reproducer; current Review-02 staging uses `04_docs/scripts/92-prepare-review-staging.ps1`.
- Local runtime-only Medusa storefront `.env.local` was corrected but is excluded from Git and review artifacts.
- CB-DEV-020 changed only Mother Template orchestration/README, Review staging manifest metadata, status/runbook wording, and this Handoff; no candidate application source or lockfile was changed.

No Medusa/Spree database data, Docker volume, existing order, package lock, platform version, or UI source was deleted or upgraded.

## KNOWN ISSUES

- `02_demos/medusa-admin.local.txt` and `02_demos/spree-demo/.spree/credentials.json` are local-only runtime credentials. They are excluded from the root meta repository and fixed review bundle. The old Review-01 exposure is recorded as `LOCAL_ONLY_TEST_CREDENTIAL_EXPOSED_IN_REVIEW01`.
- Historical Review-01 contained a local-only Medusa credential. No verified safe, non-destructive password rotation command was found in the current CLI/help/source, so the historical database was not reset. The template-freeze requirement is resolved by a new Admin credential created and verified only in the isolated `medusa-template-validation` database; its value is excluded from this handoff and all review artifacts.
- Medusa archive acquisition uses moving `refs/heads/main`; the fixed archive SHA256 is recorded, while `upstream_commit=UNRESOLVED` is deliberate because the exact commit cannot be safely inferred. `5d3e644...` is a synthetic local baseline, not an official upstream commit.
- Medusa production backend start uses `.medusa/server`; storefront logs still contain non-fatal locale/customer requests and locked native build-script notices documented by CB-DEV-013.
- Spree prebuilt image uses the `latest` tag. Quick Start compose uses PostgreSQL 16 while dev/source compose declares PostgreSQL 18; the logical `postgres_data` names overlap, so distinct Compose projects and physical volumes are mandatory.
- Spree source Dockerfile extracts a stock dashboard template without a committed lockfile; `STOCK_DASHBOARD_UNLOCKED_DEPENDENCY_RISK` remains open even though the locked CLI build arg was used.
- Windows CRLF in the candidate archive made the Docker `bin/rails` shebang non-executable. The source build runner uses an explicitly disclosed temporary LF-normalized archive; the Spree candidate worktree itself remains clean and unpatched.
- Spree storefront production route/content evidence is present, but authenticated storefront UI payment interaction was not executed. Admin browser login remains `UNKNOWN/NOT VERIFIED`; Store/Admin API and PostgreSQL evidence are separate and passed.
- CB-DEV-017 dependency snapshot reported advisories: Medusa storefront `0 critical / 4 high / 5 moderate`; Spree storefront `0 critical / 9 high / 10 moderate`. No audit remediation was attempted in this benchmark.
- CB-DEV-017 Spree sample loading is count-idempotent for the observed dataset, but the official task resets Check `display_on` to `back_end`; the repeat runner must reapply `display_on=both` and verify it before smoke.
- CB-DEV-017 measurements are single-machine, single-run observations. They are not throughput or stress-test results.
- Review-02 packaging is intentionally manual. Exclude runtime `.env*`/credential files, generated artifacts, old Review bundles and `.git/**` from the upload as specified in `04_docs/REVIEW02_INCLUDE_EXCLUDE.md`; keep the real workspace Git directories intact.
- The Mother Template generates and persists a unique Compose-safe project identity on first setup when `-ProjectName` is omitted. A fresh copy cannot reuse any existing volume; once `.runtime/local-config.json` exists, only a matching saved project/port contract may rerun and reuse its own labeled volume.
- The template uses the existing local fake-Redis/local-event-bus behavior when no Redis URL is configured; pnpm reports ignored native build scripts (`@swc/core`, `esbuild`, `sharp` and related packages) as a known non-fatal setup warning.

## BLOCKERS

- None for CB-DEV-018.
- `TEMPLATE_FREEZE_CREDENTIAL_BLOCKER=RESOLVED`; the historical credential was not reused as template evidence and no destructive reset was performed.
- `CB-REVIEW-02-PREP` has no blocker. The remaining large workspace entries are protected candidate source/assets, documentation/evidence, Mother Template source and Git baselines; they are not safe cleanup targets.
- `CB-DEV-019` has no blocker. The external Review staging directory is intentionally outside the project and is not a ZIP; the user can compress it manually after review.
- `CB-DEV-020` has no blocker. The two-copy isolation, foreign-volume guard, pre-setup zero-mutation guard, rerun, and final regression all passed; disposable test state was removed without touching historical environments.

## DEFERRED TO CB-DEV-016

- Completed in CB-DEV-016: Spree local-source Docker build/runtime, source Admin/API, independent PostgreSQL, storefront production build/runtime, and US/USD source commerce qualification.
- Historical constraint retained: source Compose uses its own project and physical PostgreSQL volume; the existing prebuilt DB major and volume were not switched or reused.

## DEFERRED TO CB-DEV-017

- Completed in CB-DEV-017: two disposable initialization runs per candidate, rerun safety, France/EUR second-market orders, local build/runtime measurements, dependency snapshot, and operability evidence.
- CB-DEV-018 completed the final platform selection record and Medusa mother-template freeze. Formal UI implementation and any production deployment remain outside this task.

## REVIEW-02 PREP

- `BEFORE_SIZE=4,209,485,100 bytes / 3.92 GiB`
- `AFTER_SIZE=16,377,184 bytes / 15.62 MiB` (final cleanup measurement; the
  report and handoff contain only subsequent same-scope metadata edits)
- `SPACE_RECLAIMED=4,193,107,916 bytes / 3.91 GiB`
- `WORKSPACE_HYGIENE=PASS`
- `REVIEW02_READY=PASS`
- No candidate source, Mother Template source, provenance/evidence, database,
  Docker volume or order was deleted. No ZIP was created.

## CB-DEV-019

- `PORTABILITY_TEST=PASS`
- `PORTABILITY_PROJECT=medusa-template-portability-final3`
- `PORTABILITY_DB_PORT=55435`
- `PORTABILITY_BACKEND_PORT=19503`
- `PORTABILITY_STOREFRONT_PORT=18503`
- `PROJECT_STATUS_SYNC=PASS`
- `REVIEW_STAGING=EXTERNAL_SIBLING/CrossBorder-Independent-Store-REVIEW-STAGING`
- `REVIEW_STAGING_SECRET_SCAN=PASS`
- `REVIEW_STAGING_DENYLIST_SCAN=PASS`
- `REVIEW_STAGING_ABSOLUTE_PATH_SCAN=PASS`
- `REVIEW02_ROOT_BASELINE_COMMIT=55e5839c251ba437316a976212a18f750c63d31d`
- `ROOT_GIT_STATUS=CLEAN`
- `MEDUSA_GIT_STATUS=CLEAN`
- `SPREE_GIT_STATUS=CLEAN`
- `HISTORICAL_DATABASES_VOLUMES_ORDERS=UNCHANGED`

## CB-DEV-020

- `MULTI_COPY_ISOLATION=PASS`
- `COPY_A_PROJECT=medusa-crossborder-independent-store-cb020-mother-copy-e0669d07`
- `COPY_A_VOLUME=medusa-crossborder-independent-store-cb020-mother-copy-e0669d07_pgdata`
- `COPY_B_PROJECT=medusa-crossborder-independent-store-cb020-mother-copy-32d639d9`
- `COPY_B_VOLUME=medusa-crossborder-independent-store-cb020-mother-copy-32d639d9_pgdata`
- `PRE_SETUP_GUARD=PASS` (`start-local`, `build-production`, `acceptance-smoke` all failed before mutation)
- `COMPOSE_IDENTITY_GUARD=PASS`; direct Compose configuration without `MEDUSA_PROJECT_NAME` fails before startup, while the setup-owned identity path validates successfully.
- `RERUN_SAFE=PASS`
- `US_USD_REGRESSION=PASS`; `FR_EUR_REGRESSION=PASS`
- `PROJECT_STATUS_SYNC=PASS`; `PROJECT_STATUS.current_stage=waiting_for_review_02_final_acceptance`
- `REVIEW_STAGING=EXTERNAL_SIBLING/CrossBorder-Independent-Store-REVIEW-STAGING`; `STAGING_SECURITY=PASS`; `ZIP_CREATED=NO`; `COPIED_PROJECT_FILE_COUNT=1429`; `FINAL_STAGING_FILE_COUNT=1430`
- `ROOT_HEAD=RECORDED_IN_FINAL_STAGING_MANIFEST`; `MEDUSA_HEAD=5d3e644ebf7812453e2be000eba2f497423e5c02`; `SPREE_HEAD=f9966ab61ae0ceb72f62a51167b1c013fe10230f`; both candidate statuses `CLEAN`
- `CB_DEV_020_ROOT_COMMIT=cbc5fdf93830ce443922fe6259f96a77b4e58690`
- `HISTORICAL_DATABASES_VOLUMES_ORDERS=UNCHANGED`

## CB-UI-DEV-001

- `TASK ID=CB-UI-DEV-001`
- `RESULT=PASS`
- `FILES CHANGED=03_template/medusa-crossborder-base/apps/storefront/{src/app/[countryCode]/(main)/page.tsx,src/app/[countryCode]/(main)/layout.tsx,src/modules/home/templates/homepage.tsx,src/modules/layout/templates/nav/index.tsx,src/modules/layout/templates/footer/index.tsx,src/modules/layout/components/cart-dropdown/index.tsx,src/styles/globals.css,public/fonts/*,.env.template}; 04_docs/ui_implementation/CB-UI-DEV-001/*`
- `BUILD RESULT=PASS`; `corepack pnpm@10.11.1 build`, Next `15.5.21`, static generation `70/70`, exit code `0`, approximately `48.1s` after local fonts were added.
- `FUNCTIONAL RESULT=PASS`; production `next start` served the home page, `/us` rendered four live Medusa products with dynamic USD prices, and `/us/store` rendered the existing store route without application-error text.
- `DESKTOP QA=PASS`; CSS viewport `1440x900`, seven homepage sections, four live product cards, no ordered-section overlap/clipping, console errors `0`.
- `MOBILE QA=PASS`; CSS viewport `390x844`, responsive hero/routine/product/editorial/review/newsletter/footer structure verified, no ordered-section overlap/clipping, console errors `0`.
- `VISUAL MATCH=96%` estimate against approved Figma nodes `27:3` (03D), `32:3` (08C), and token source `30:3` (01B). Detail is recorded in `04_docs/ui_implementation/CB-UI-DEV-001/UI_VISUAL_DIFF.md`.
- `COMMERCE REGRESSION=PASS`; existing region lookup, product listing, price calculation, cart button/route and Store API contract were preserved. Backend health HTTP `200`; US/USD Region count `1`; US/USD product API HTTP `200` with `4` products.
- `KNOWN DIFFERENCES=approved lifestyle/category/story imagery is not present locally, so those asset slots use neutral fallbacks; product imagery remains the live Medusa catalog imagery. No synthetic product SVGs were added.`
- `EVIDENCE=04_docs/ui_implementation/CB-UI-DEV-001/homepage-desktop-1440.png; 04_docs/ui_implementation/CB-UI-DEV-001/homepage-mobile-390.png; UI_VISUAL_DIFF.md; IMPLEMENTATION_NOTES.md`

## CB-UI-DEV-002

- `TASK ID=CB-UI-DEV-002`
- `RESULT=PASS`
- `CURRENT STAGE=UI IMPLEMENTATION`
- `FILES CHANGED=03_template/medusa-crossborder-base/apps/storefront/{src/app/[countryCode]/(main)/store/page.tsx,src/app/[countryCode]/(main)/collections/[handle]/page.tsx,src/app/[countryCode]/(main)/products/[handle]/page.tsx,src/modules/store/components/catalog-search.tsx,src/modules/store/templates/index.tsx,src/modules/store/templates/paginated-products.tsx,src/modules/collections/templates/index.tsx,src/modules/products/templates/index.tsx,src/modules/products/templates/product-info/index.tsx,src/modules/products/components/image-gallery/index.tsx,src/modules/products/components/product-actions/index.tsx,src/modules/products/components/product-actions/option-select.tsx,src/modules/products/components/product-actions/mobile-actions.tsx,src/modules/products/components/product-price/index.tsx,src/modules/products/components/product-preview/index.tsx,src/modules/products/components/product-tabs/index.tsx,src/modules/layout/templates/nav/index.tsx,src/styles/globals.css}; 04_docs/ui_implementation/CB-UI-DEV-002/*`
- `BUILD RESULT=PASS`; `corepack pnpm@10.11.1 exec tsc --noEmit` and `corepack pnpm@10.11.1 build` passed. Next `15.5.21`, static generation `70/70`, exit code `0`; backend production image build/runtime also passed from `.medusa/server`.
- `FUNCTIONAL RESULT=PASS`; PDP reads live title, description, images, USD price, four live size values and inventory. Selecting the real `S` variant updates `v_id`, enables Add to Bag, and refreshes navigation from `Bag 0` to `Bag 1`. Existing cart route remains functional.
- `COLLECTION/SEARCH RESULT=PASS`; `/us/store` rendered four real products with USD prices; `q=sweatshirt` returned the real sweatshirt, an unmatched query rendered the empty state, price sort changed the active query, and a real Size option updated `optionValueIds`.
- `DESKTOP QA=PASS`; production screenshots captured at `1440x900` for PDP and Collection. Gallery thumbnail selection changed the main image; layout, spacing, hierarchy and no-overlap checks passed.
- `MOBILE QA=PASS`; production screenshots captured at `390x844` for PDP and Collection. Responsive single-column PDP, selected option state, mobile catalog grid and mobile sticky Add to Bag behavior were verified.
- `VISUAL MATCH=95%` estimate against approved Figma nodes `27:165`, `30:102`, `32:32`, `32:68` and shared token source `01B`. Remaining low-severity differences are documented asset availability and absent review records, not alternate commerce behavior.
- `COMMERCE REGRESSION=PASS`; backend `/health`, storefront `/us`, `/us/store`, `/us/products/sweatshirt` and `/us/cart` returned HTTP `200`; browser error-level logs were `0`; existing Medusa Region/USD, product IDs, cart action and checkout contract were not redesigned.
- `KNOWN DIFFERENCES=the verified seed provides two PDP images and no review records; the approved asset contract therefore uses live images, an honest empty review shell and a neutral labeled lifestyle fallback. Cart and Checkout visuals remain outside this slice.`
- `EVIDENCE=04_docs/ui_implementation/CB-UI-DEV-002/{pdp-desktop-1440.png,pdp-mobile-390.png,collection-desktop-1440.png,collection-mobile-390.png,UI_VISUAL_DIFF.md,IMPLEMENTATION_NOTES.md,FUNCTIONAL_QA.md}`

## CB-UI-DEV-002R

- `TASK ID=CB-UI-DEV-002R`
- `RESULT=PASS`
- `CURRENT STAGE=UI IMPLEMENTATION`
- `FILES CHANGED=03_template/medusa-crossborder-base/apps/storefront/{src/modules/store/components/refinement-list/index.tsx,src/modules/store/components/refinement-list/sort-products/index.tsx,src/modules/store/components/refinement-list/options-picker/index.tsx,src/modules/store/templates/index.tsx,src/modules/collections/templates/index.tsx,src/styles/globals.css}; 04_docs/ui_implementation/CB-UI-DEV-002R/*`
- `DESKTOP_FIRST_FOLD_PRODUCTS_VISIBLE=PASS`; the desktop hero is compacted and the refinement region is a single bordered bar; the first row of four live product cards begins within the 1440 x 900 capture.
- `MOBILE_FIRST_FOLD_PRODUCT_ENTRY=PASS`; the 390 x 844 capture shows search plus two closed refinement disclosures, followed by the two-column live product grid.
- `REFINEMENT_DENSITY=PASS`; Sort and Options are compact disclosures, while the real Sort, Size and Color controls remain available when opened.
- `FUNCTIONAL REGRESSION=PASS`; live product links, USD prices, `q` search hit/no-results, `sortBy=price_asc`, and real Size `S` selection producing `optionValueIds` all passed. Browser error-level logs were `0`.
- `BUILD RESULT=PASS`; `corepack pnpm@10.11.1 exec tsc --noEmit` and `corepack pnpm@10.11.1 build` passed; Next `15.5.21`, static generation `70/70`, exit code `0`.
- `VISUAL QA=PASS`; final captures at 1440 x 900 and 390 x 844 were compared with Figma `05B` node `30:102` and `08C` Collection node `32:32`; `VISUAL_MATCH=95%` estimate with live-catalog-size/content differences documented.
- `COMMERCE REGRESSION=PASS`; no commerce/query semantics, Backend, PDP, Cart or Checkout implementation was changed. Existing Medusa US/USD product, cart and route behavior remains intact.
- `EVIDENCE=04_docs/ui_implementation/CB-UI-DEV-002R/{collection-desktop-1440-r.png,collection-mobile-390-r.png,UI_VISUAL_DIFF.md,FUNCTIONAL_REGRESSION.md}`

## CB-REVIEW-03-PREP

- `TASK ID=CB-REVIEW-03-PREP`
- `RESULT=PASS`; Review-03 audit package and external safe staging were completed. This is preparation status, not a claim that every recorded UI finding is resolved.
- `CURRENT STAGE=REVIEW-03`; `NEXT STEP=WAITING_FOR_REVIEWER`
- `REVIEW_STAGING_PATH=PROJECT_PARENT\CrossBorder-Independent-Store-REVIEW-03-STAGING`
- `CODE_STRUCTURE_AUDIT=COMPLETED`; shared ProductPreview, CatalogSearch and RefinementList reuse confirmed. No refactor performed.
- `FIGMA_CONSISTENCY_AUDIT=COMPLETED`; approved Figma sources 01B/03D/04D/05B/08C/10/11 mapped to current implementation and prior visual evidence.
- `COMMERCE_BOUNDARY_AUDIT=COMPLETED`; existing Medusa Region, currency, price, product, variant, inventory, cart, shipping, payment and checkout paths remain authoritative. No backend or lockfile changes in the current diff.
- `DATA_HONESTY_AUDIT=REVIEW_REQUIRED`; live product title/image/price/variant paths are data driven, but Homepage hardcoded rating/testimonial claims are recorded as P2.
- `RESPONSIVE_AUDIT=REVIEW_REQUIRED`; 1440/1024/390 checks had no material overflow; the 768 CSS-pixel boundary showed approximately 18px shared-header overflow on Homepage, PDP and Collection, recorded as P1.
- `A11Y_BASIC_AUDIT=REVIEW_REQUIRED`; semantic links, labelled inputs, native disclosures, focus-visible rule and image alt attributes were observed; two unnamed PDP accordion buttons are recorded as P2.
- `OPTION_FILTER_CURRENT_RUN=REVIEW_REQUIRED`; current production DOM showed `Size(0)` and `Color(0)` while historical CB-UI-DEV-002R recorded a successful live Size filter. No remediation was attempted.
- `BUILD_REGRESSION=PASS`; `corepack pnpm@10.11.1 exec tsc --noEmit` exit `0`; `corepack pnpm@10.11.1 build` exit `0`; Next `15.5.21`, static generation `70/70`.
- `PRODUCTION_RUNTIME_SMOKE=PASS`; production backend `.medusa/server` and `next start -p 8000` ran; `/us`, `/us/store`, `/us/products/sweatshirt` and `/us/cart` navigated successfully; browser error-level logs were `0`.
- `EVIDENCE=04_docs/ui_implementation/REVIEW-03/{REVIEW03_SUMMARY.md,DESIGN_CONSISTENCY_MATRIX.md,CODE_REUSE_AUDIT.md,COMMERCE_BOUNDARY_AUDIT.md,RESPONSIVE_A11Y_AUDIT.md,TECH_DEBT_REGISTER.md}` plus preserved CB-UI-DEV-001/002/002R evidence.
- `STAGING_SECURITY=PASS`; `SECRET_SCAN=PASS`; `REAL_CREDENTIAL_LEAKS=0`; `DENYLIST_SCAN=PASS`; `ABSOLUTE_PATH_SCAN=PASS`; `.git`, runtime env, credentials, build output and old ZIPs excluded; `ZIP_CREATED=NO`.
- `KNOWN_ISSUES=P1 responsive 768px header overflow; P1 current option-value population not re-proven; P2 hardcoded Homepage review claims; P2 unnamed PDP accordion buttons; P2 monolithic stylesheet specificity/debt; P3 presentational newsletter action and legacy unused starter component.`
- `SCOPE_BOUNDARY=Cart/Checkout not redesigned; no Cart/Checkout development started.`

## CB-REVIEW-03-FIX

- `TASK ID=CB-REVIEW-03-FIX`
- `RESULT=PASS`
- `CURRENT STAGE=REVIEW-03 FINDINGS CLOSURE`
- `DOCUMENT_HORIZONTAL_OVERFLOW=0`; production DOM measured `clientWidth=scrollWidth` at 1440, 1024, 768, and 390 for the reviewed storefront routes. Header action right edges were `1368/952/736/371`; no overflow masking was added.
- `HORIZONTAL_OVERFLOW_1440=PASS`; `HORIZONTAL_OVERFLOW_1024=PASS`; `HORIZONTAL_OVERFLOW_768=PASS`; `HORIZONTAL_OVERFLOW_390=PASS`
- `OPTION_FILTER_REVERIFICATION=PASS`; current production `/us/store` exposed real Size values `S/M/L/XL`. Selecting visible live `S` changed `Size(0)` to `Size(1)`, wrote a non-empty current `optionValueIds` query, and retained the live filtered grid. `(0)` is selectedCount, not available-value count; no historical hardcoded option ID was used.
- `DATA_HONESTY=PASS`; unsupported free-shipping/worldwide-delivery, rating, testimonial, Verified buyer, delivery-SLA, and returns promises were removed from the active Homepage/PDP/catalog presentation or replaced with neutral copy.
- `UNNAMED_PDP_ACCORDION_BUTTONS=0`; Product Information and Shipping & Returns triggers expose accessible names from their tab titles.
- `CSS_DEBT=P2_DEFERRED_TO_PRE_WEB_UI_FREEZE`; the 2,436-line mixed stylesheet and 19 existing `!important` declarations were not broadly refactored.
- `BUILD_RESULT=PASS`; `corepack pnpm@10.11.1 exec tsc --noEmit` exit `0`; `corepack pnpm@10.11.1 build` exit `0`; Next `15.5.21`, static generation `70/70` after closure changes.
- `PRODUCTION_RUNTIME_SMOKE=PASS`; `.medusa/server` backend and `next start -p 8000` storefront started; `/us`, `/us/store`, `/us/products/sweatshirt`, and `/us/cart` loaded; browser error-level logs were empty.
- `COMMERCE_REGRESSION=PASS`; Region/USD, live product prices, variant selection, Add to Bag, search, no-result, price sort, current live option filter, and cart route remained functional. No new order was created.
- `FILES_CHANGED=03_template/medusa-crossborder-base/apps/storefront/{src/modules/layout/templates/nav/index.tsx,src/modules/home/templates/homepage.tsx,src/modules/products/components/product-preview/index.tsx,src/modules/products/templates/index.tsx,src/modules/products/components/product-actions/index.tsx,src/modules/products/components/product-tabs/{accordion.tsx,index.tsx},src/styles/globals.css}; PROJECT_STATUS.json; 04_docs/ui_implementation/REVIEW-03/*; 04_docs/ui_implementation/REVIEW-03-FIX/*`
- `EVIDENCE=04_docs/ui_implementation/REVIEW-03-FIX/{header-768.png,homepage-768.png,collection-768.png,RESPONSIVE_GEOMETRY.md,FUNCTIONAL_REGRESSION.md,IMPLEMENTATION_NOTES.md}`
- `REVIEW_STAGING=EXTERNAL_SIBLING/CrossBorder-Independent-Store-REVIEW-03-FIX-STAGING`; `STAGING_SECURITY=PASS`; `SECRET_SCAN=PASS`; `REAL_CREDENTIAL_LEAKS=0`; `DENYLIST_SCAN=PASS`; `ABSOLUTE_PATH_SCAN=PASS`; `ZIP_CREATED=NO`.
- `ROOT_HEAD=RECORDED_IN_STAGING_MANIFEST`; `ROOT_STATUS=CLEAN`; `MEDUSA_STATUS=CLEAN`; `SPREE_STATUS=CLEAN`; historical databases, volumes, and orders were not changed.
- `NEXT STEP=WAITING_FOR_REVIEWER`

RESULT: PASS

NEXT STEP: WAITING_FOR_REVIEWER
