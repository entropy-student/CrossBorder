# Runtime Head-to-Head Scorecard

Purpose: compare Medusa and Spree using observed evidence categories. This document is not a weighted winner calculation; `UNKNOWN/NOT RUN` is never a pass. The final reviewer decision is recorded below without deleting benchmark evidence.

`TECHNOLOGY_SELECTION=MEDUSA`

`REVIEWER_DECISION_DATE=2026-09-01`

`Spree=BENCHMARK_REFERENCE; NOT_SELECTED`

| Evidence | Medusa DTC Starter | Spree current scaffold | Decision significance |
|---|---|---|---|
| Exact version / provenance | **PASS** — Medusa `2.19.0`; DTC archive fallback SHA256 `ea7c88e159828fc2980a376186c331f0ce7496fa317665e15d653a00620bcc12`; official upstream commit `UNRESOLVED`; synthetic local baseline `5d3e644ebf7812453e2be000eba2f497423e5c02` | **PASS** — `create-spree-app` `1.2.1`; locked CLI `2.4.9`; backend Spree `5.6.1`; storefront upstream commit `e1b2cc76335fe9a419afb090db5ef5da61432bab`; synthetic local baseline `f9966ab61ae0ceb72f62a51167b1c013fe10230f` | Reproducibility |
| Frozen lock install | **PASS** — project lockfile installed with pnpm `10.11.1` and `--frozen-lockfile` | **PASS** — storefront lockfile installed with pnpm `10.33.4` and `--frozen-lockfile` | Hard Gate |
| Fresh install without candidate source patch | **PASS** — archive baseline source remained clean; local env/config and harness were outside candidate source baseline | **PASS** — backend scaffold required no application source patch; storefront clone fallback used official archive; Quick Start compose used a documented local Postgres 16 fallback | Hard Gate |
| Baseline initialization / sample data | **PASS** — migration `apps/backend/src/migration-scripts/initial-data-seed.ts` observed creating baseline data; US/USD augmentation is separate | **PASS** — official CLI sample-data path + `spree init` loaded/reindexed 36 products | Setup burden |
| Backend/Admin runtime | **PASS** — Medusa backend/Admin on `http://localhost:9000`; health and Admin route passed | **PASS** — prebuilt backend/Admin on `http://localhost:9100`; `/up` 200 and `/admin` sign-in redirect observed | Hard Gate |
| Admin browser login proof | **PASS** — historical authenticated Medusa Admin browser login evidence is preserved from CB-DEV-013 | UNKNOWN/NOT VERIFIED — sign-in redirect/API proof exists; authenticated browser login was not isolated as a separate proof | Evidence level |
| Admin API proof | **PASS** — Admin API re-read CB-DEV-012 order `order_01M1DKBRWD3DNN1D7MWQZR36EE` | **PASS** — Admin API re-read `or_uw2YK1rnl0` / `R159573601` | Hard Gate |
| Storefront runtime | **PASS** — production and dev runtime served `http://localhost:8000` | **PASS** — Quick Start dev runtime served `http://localhost:3001`; local-source production runtime served `http://localhost:3002`; US route `/us/en` | Hard Gate |
| Storefront UI product proof | **PASS** — production `/us` and `/us/store` returned 200 with USD/catalog markers | **PASS** — `/us/en`, `/us/en/products`, and Automatic Espresso Machine detail returned 200 with product/USD content | Commerce proof |
| Storefront UI cart proof | **PASS** — CB-DEV-012 storefront checkout evidence included add-to-cart/cart progression; detailed interactive UI trace is retained in task evidence | UNKNOWN/NOT VERIFIED — cart was proven through Store API, not current storefront UI | Evidence level |
| Storefront UI checkout proof | **PASS** — CB-DEV-012 System Payment completed the real storefront checkout path | PARTIAL/NOT VERIFIED — local-source production routes were verified, but no authenticated storefront payment click path was used; API checkout is separate evidence | Evidence level |
| API checkout proof | **PASS** — US/USD automated smoke completed cart through System Payment to order | **PASS** — Store API completed cart through Check test/system payment to order | Hard Gate |
| Product / USD price | **PASS** — sellable variant had calculated USD price; smoke selected Medusa Sweatpants / M at `$15.00` | **PASS** — local-source Store API returned Electric Kettle 1.7L at `$44.99` USD; storefront HTML also rendered source products and USD price | Hard Gate |
| Cart / line item | **PASS** — cart create and line-item add | **PASS** — cart create and sample variant add | Hard Gate |
| US address / shipping | **PASS** — US address, `US Standard Shipping`, and shipping profile path | **PASS** — US/San Francisco address and `UPS Ground (USD)` at `$5.00` | Cross-border |
| Test/system payment | **PASS** — `pp_system_default`; payment collection/session authorized | **PASS** — local-source backend `Check` method (`display_on=both` local DB augmentation); no Stripe/PayPal transaction | Hard Gate |
| Completed order | **PASS** — order ID above; total `25` USD; Store/Admin/PostgreSQL checks passed | **PASS** — source order `or_98FqgRua4h`, number `R730405727`, total `49.99` USD; Store/Admin/PostgreSQL double-read passed | Hard Gate |
| PostgreSQL proof | **PASS** — same Medusa order double-read from existing `crossborder-medusa_medusa_pgdata` | **PASS** — Quick Start evidence remains on `spree-demo_postgres_data`; local-source order independently read from PostgreSQL 18 volume `spree-demo-source_postgres_data` | Auditability |
| Order currency / country | **PASS** — `currency_code=usd`, shipping country `us` in PostgreSQL/Admin evidence | **PASS** — USD and US in Admin/PostgreSQL evidence | Hard Gate |
| Europe/EUR baseline | **PASS** — prior EUR test order #1 preserved; CB-DEV-017 also completed a fresh France/EUR repeat order | **PASS** — CB-DEV-017 completed a fresh France/EUR repeat order | Cross-border |
| Second region/currency proof in current round | **PASS** — France/EUR cart, shipping, System Payment, order, Admin and PostgreSQL evidence | **PASS** — France/EUR cart, shipping, Check payment, order, Admin and PostgreSQL evidence | Cross-border |
| Region/currency routing | **PASS** — US Region API returned `currency_code=usd`; storefront default region `us` | **PASS** — default US market/USD/country and `/us/en` route | Cross-border |
| Sales-channel / publishable mapping | **PASS** — publishable key resolved intended Medusa sales channel/catalog | **PASS** — public `online` channel and publishable key resolved storefront catalog | Exposure control |
| Backend production build | **PASS** — CB-DEV-013 direct backend `pnpm run build`, exit 0; `.medusa/server` artifact generated | **PASS** — local `backend/Dockerfile`, explicit `SPREE_CLI_VERSION=2.4.9`, exit 0; image `sha256:ddd89fd8e443affc5e9e6422e617e0794aae10becb6ac458e54992db7376efb0` | Hard Gate |
| Storefront production build | **PASS** — CB-DEV-013 clean Next build, exit 0; independent TypeScript check exit 0 | **PASS** — clean `corepack pnpm install --frozen-lockfile` + `corepack pnpm run build`; pnpm `10.33.4`, Next `16.2.11`, exit 0 | Hard Gate |
| Production runtime proof | **PASS** — built backend from `.medusa/server` + `next start`; `/health`, `/us`, `/us/store` passed | **PASS** — source image runtime is `RAILS_ENV=production` on `9200`; `/up=200`, `/dashboard=200`; storefront `next start` on `3002` returned `/us/en`, `/us/en/products`, and source product detail as 200 with product/USD HTML | Hard Gate |
| Prebuilt Docker runtime proof | PARTIAL — Docker proof is PostgreSQL/container isolation; application ran from local source | **PASS** — `ghcr.io/spree/spree:latest`, image ID `sha256:048c57126667464722c61485be81686d7ddc1717794a3d77eff902a4e2125070`, repo digest recorded | Runtime identity |
| Local application-source runtime proof | **PASS** — backend/storefront source runtime and built `.medusa/server` runtime | **PASS** — `02_demos/spree-demo/backend/Dockerfile` built and ran as `spree-demo-source-backend:cb-dev-016`; source backend/Admin API, source storefront, source DB and order smoke passed | Reproducibility |
| Package-manager exactness | **PASS** — declared `pnpm@10.11.1`; executable selected by project helper; global `11.19.0` is not evidence | **PASS** — declared `pnpm@10.33.4`; CB-DEV-016 build used `corepack pnpm` executable with version `10.33.4`; global `11.19.0` is not evidence | Reproducibility |
| Source patch required | **PASS / NO candidate source patch** — changes were local env/harness/docs; DTC baseline commit remains clean | **PASS / NO candidate application source patch** — source baseline `f9966ab...` remained clean; build runner used a temporary LF-normalized archive only because Windows CRLF made the Docker shebang non-executable | Maintenance |
| Environment/scaffold patch required | **US/USD augmentation + local runtime env**; `NEXT_PUBLIC_BASE_URL` is local HTTP `http://localhost:8000` | Source orchestration added independent Compose project/volumes and ports; Check was enabled for storefront API in the new source DB only. Stock dashboard template has no committed lockfile and remains an unlocked dependency risk | Setup burden |
| Reset / clean repeat run | **PASS** — two fresh disposable projects/volumes plus rerun-safe augmentation; historical reset helper was not used | **PASS** — two fresh disposable projects/volumes plus idempotent sample counts and explicit post-sample Check normalization | Hard Gate |
| Official upstream E2E coverage | UNKNOWN/NOT RUN as current runtime proof | `UPSTREAM TEST COVERAGE EXISTS` — `e2e/checkout.spec.ts` / `e2e-backend/` are not CB-DEV-014 runtime evidence because they use their own backend/payment assumptions | Evidence boundary |
| Local extra services | PostgreSQL 16 in Docker; no Redis required for observed local route | Quick Start: PostgreSQL 16 + Mailpit; local source: PostgreSQL 18.6 on independent `spree-demo-source` project/volume; no Redis required for observed source route | Ops burden |
| Known reproducibility risks | Migration baseline is detected; `REDIS_URL` template/config mismatch and existing ignored native build-script notices remain documented | Quick Start image is tagged `latest`; Quick Start/dev logical volume names overlap but physical volumes are guarded; source Dockerfile extracts stock dashboard without a committed lockfile; Windows build required temporary LF normalization | Risk register |

## Evidence-level rules

1. A Store API checkout is recorded separately from storefront UI checkout.
2. Admin route/API access is recorded separately from authenticated Admin browser login.
3. `PREBUILT_IMAGE_RUNTIME` is not `LOCAL_APPLICATION_SOURCE_RUNTIME`.
4. Existing historical evidence is preserved but is not relabeled as a new CB-DEV-015 execution.
5. `UNKNOWN/NOT RUN` is used instead of guessing a pass.

## CB-DEV-017 repeatability and operability evidence

The measurements below are observed local evidence from disposable repeat environments. They are not a weighted score or a platform selection.

| Evidence | Medusa repeat | Spree local-source repeat |
|---|---|---|
| Disposable environment | Docker project `crossborder-medusa-repeat`, PostgreSQL `16-alpine`, volume `crossborder-medusa-repeat_pgdata`, backend `9300`, storefront `8003` | Docker project `spree-demo-repeat`, PostgreSQL `18.6`, volumes `spree-demo-repeat_postgres_data` / `spree-demo-repeat_storage_data`, backend `9400`, storefront `3004` |
| Clean initialization | **PASS** — fresh volume, `pnpm@10.11.1`, `medusa db:migrate`, migration `initial-data-seed.ts`, Admin setup, US/USD augmentation | **PASS** — fresh volume, source image, `db:prepare`, official `spree:load_sample_data`, 36 products / 121 variants, Check enabled for storefront API |
| Second clean initialization | **PASS** — project `crossborder-medusa-repeat-2`, fresh volume `crossborder-medusa-repeat-2_pgdata`, new US/USD order | **PASS** — project `spree-demo-repeat-2`, fresh volumes, 36 products / 121 variants, new US/USD order |
| Rerun safety | **PASS** — augmentation rerun reused the same Region, warehouse, fulfillment set, and shipping option IDs; no duplicate augmentation state | **PASS with explicit post-seed step** — repeated official sample load kept 36 products / 121 variants / 7 markets / 12 shipping methods; sample load resets Check `display_on`, so the runner reapplies and verifies `both` |
| US/USD order | **PASS** — order `order_01M1E8KRQ2D0XE7KN64H1WWMSE`, display `2`, total `115`, `US Standard Shipping`, `pp_system_default`; Admin/API/PostgreSQL evidence matched | **PASS** — order `or_OIJLhNcSbf`, number `R558089105`, total `39.99`, `UPS Ground (USD)`, Check; Store/Admin/PostgreSQL evidence matched |
| France/EUR order | **PASS** — order `order_01M1E8X7BKYQHQHNEEPSG0SR3R`, display `3`, total `20`, France address, `Standard Shipping`, `pp_system_default`; Admin/PostgreSQL matched | **PASS** — order `or_AXs1igzRC6`, number `R214021284`, total `45.99`, France address, `UPS Ground (EUR)`, Check; Store/Admin/PostgreSQL matched |
| Backend production build | **PASS** — CB-DEV-013 clean direct build, observed output `12.28s` backend compile + `43.11s` Admin/frontend = `55.4s` | **PASS** — local source Dockerfile, `SPREE_CLI_VERSION=2.4.9`, local image `sha256:57b7823fd1ac75ad111274d39ad099686cae230caf5ac59240ab311da445b13d`, `139.7s` |
| Storefront production build | **PASS** — exact pnpm `10.11.1`, Next `15.5.21`, `49.3s`, exit `0` | **PASS** — exact pnpm `10.33.4`, Next `16.2.11`, `47.3s`, exit `0` |
| Total measured build | `104.7s` (backend + storefront) | `187.0s` (backend image + storefront) |
| Production runtime | **PASS** — backend `/health` on `9300`, storefront `/us`, `/us/store`, product detail on `8003` returned product/USD content | **PASS** — source image `/up` on `9400`; `/us/en`, `/us/en/products`, product detail on `3004` returned product/USD content |
| Cold start | Backend `10.8s`; storefront localized product page `2.2s` | Backend container `22.2s`; storefront localized product page `16.5s` |
| Idle RAM, approximate | Backend host Node `4.0 MB` + PostgreSQL `33.0 MiB` + storefront host Node `5.7 MB` = approximately `43 MB` | Backend `877.7 MiB` + PostgreSQL `75.2 MiB` + storefront host Node `140.7 MB` = approximately `1,094 MB` |
| Artifact / image footprint | `.medusa/server` `8.3 MB`; storefront `.next` `367.2 MB`; installed Medusa pnpm package tree `880.4 MB` | backend image `209.3 MB`; storefront `.next` `89.3 MB`; storefront `node_modules` `759.3 MB` |
| Tracked candidate source size | `2.12 MB` across 259 tracked files | `3.87 MB` across 855 tracked files |
| Runtime services / Docker containers | 3 services (PostgreSQL, backend, storefront); 1 Docker container plus 2 host Node processes | 3 services; 2 Docker containers plus 1 host Node process |
| Required project automation | Existing Medusa migration seed + `medusa-repeat-augment.ts`, `medusa-repeat-smoke.mjs`, repeat compose/start runners | `14-spree-repeatability.ps1`, generic `08-spree-source-smoke.ps1`, source image build runner, repeat compose files |
| Manual intervention during clean repeat | `0` intervention after scripts; Admin email/password is supplied as a runtime-only input | `0` intervention after runner; runner-owned storage chown and Check post-seed normalization are explicit steps |
| Known workarounds | `.medusa/server` working-directory startup; no Redis uses Medusa fake local Redis/event bus | Temporary LF-normalized archive build context on Windows; storage ownership normalization; stock dashboard has no committed lockfile |
| Candidate source patches | `0` | `0` |
| Temporary build transforms | `0` | `1` — LF-normalized temporary Git archive; candidate source remained clean |
| Dependency audit | `pnpm audit --prod`: `0` critical / `4` high / `5` moderate; exit `1` because advisories exist | `pnpm audit --prod`: `0` critical / `9` high / `10` moderate; exit `1` because advisories exist; Ruby audit `NOT_AVAILABLE`; Docker Scout indexing was not completed |
| Failure recovery evidence | No platform failure counted; runner startup path was made explicit and augmentation rerun-safe | Two operational friction points recovered without source patch: Windows archive/build-context handling and initial storage ownership; sample reset behavior is documented |
| UI / Admin evidence | Historical Medusa Admin browser login and storefront UI checkout remain **PASS**; repeat proof was API/runtime focused | Storefront product routes **PASS**; Store/Admin API checkout **PASS**; authenticated Admin browser login **UNKNOWN/NOT VERIFIED**; storefront payment UI remains **PARTIAL/NOT VERIFIED** |

### CB-DEV-017 evidence boundaries

- Medusa repeat order IDs are from new PostgreSQL volumes, not the historical Medusa database.
- Spree repeat order IDs are from `spree-demo-repeat` and `spree-demo-repeat-2`, not Quick Start `spree-demo` or source-qualification `spree-demo-source` volumes.
- `spree-demo-repeat-backend:cb-dev-017` is a locally built source image and is distinct from Quick Start image `sha256:048c57126667464722c61485be81686d7ddc1717794a3d77eff902a4e2125070`.
- The build and RAM values are local one-run measurements, not load-test results. The reviewer decision is recorded as `TECHNOLOGY_SELECTION=MEDUSA` in this document; these benchmark measurements remain unchanged.

## CB-DEV-014 observed Spree evidence

- Official route: `npx create-spree-app@1.2.1`; locked project `@spree/cli` `2.4.9`; backend Spree `5.6.1`; official storefront commit `e1b2cc76335fe9a419afb090db5ef5da61432bab`.
- Prebuilt runtime: backend/Admin `9100`; storefront `3001`; Docker project `spree-demo`; PostgreSQL volume `spree-demo_postgres_data`; Medusa PostgreSQL remained `crossborder-medusa_medusa_pgdata` on `127.0.0.1:54329`.
- Core smoke: cart `cart_uw2YK1rnl0` → sample item → US address → `UPS Ground (USD)` → `Check` → order `or_uw2YK1rnl0`, number `R159573601`, total `884.99 USD`; Admin API and PostgreSQL re-reads succeeded.
- Storefront note: official US English route is `/us/en`; `/us/en/` redirects to `/us/en`. Current storefront uses `SPREE_API_URL` and `SPREE_PUBLISHABLE_KEY`, not Medusa-specific variables.

## Selection status

`TECHNOLOGY_SELECTION=MEDUSA`.

The reviewer selected Medusa DTC Starter on 2026-09-01 based on the already verified evidence: functional parity, clean repeatability, US/USD and France/EUR orders, production build/runtime, no candidate source patch, stronger Medusa UI checkout proof, a Node/TypeScript-centric customization surface, fewer observed Windows/build workarounds, lower observed storefront dependency advisory counts, and a simpler long-term Codex modification surface.

Spree remains `BENCHMARK_REFERENCE` / `NOT_SELECTED`. Its evidence is retained, including its explicit UI-payment and authenticated-admin evidence boundaries. No new weighting model is introduced here.

## CB-DEV-016 observed Spree local-source evidence

- Source image: `spree-demo-source-backend:cb-dev-016`, image ID/repo digest `sha256:ddd89fd8e443affc5e9e6422e617e0794aae10becb6ac458e54992db7376efb0`; it differs from Quick Start container image `sha256:048c57126667464722c61485be81686d7ddc1717794a3d77eff902a4e2125070`.
- Source backend: local `02_demos/spree-demo/backend/Dockerfile`, build arg `SPREE_CLI_VERSION=2.4.9`, Ruby `4.0.1`, Docker Node `22`, locked Spree `5.6.1`; source runtime `http://127.0.0.1:9200`, `/up=200`, production Rails, Dashboard `/dashboard=200`.
- Source database: PostgreSQL `18.6`, Compose project `spree-demo-source`, physical volumes `spree-demo-source_postgres_data` and `spree-demo-source_storage_data`; isolation guard passed against `spree-demo_postgres_data`.
- Source commerce: product `prod_nJqfPa3Cpe` / Electric Kettle 1.7L at `$44.99` USD → cart → US address → `UPS Ground (USD)` → `Check` → order `or_98FqgRua4h`, number `R730405727`, total `$49.99`; Store API, Admin API and source PostgreSQL re-reads passed.
- Source storefront: exact project pnpm `10.33.4`, Next `16.2.11`; clean frozen install/build exit 0; production `next start` on `3002`; `/us/en`, `/us/en/products`, and `/us/en/products/automatic-espresso-machine` returned 200 with source product/USD HTML.
