# Medusa vs Spree — Platform Comparison

Date: 2026-09-01  
Status: architecture/repository verification complete; CB-DEV-012 through CB-DEV-017 evidence is available; final reviewer selection is recorded below.

## Executive summary

### Final reviewer decision
- **TECHNOLOGY_SELECTION=MEDUSA**
- **Decision date: 2026-09-01**
- **Spree status: BENCHMARK_REFERENCE / NOT_SELECTED**

The reviewer selected Medusa DTC Starter based only on verified evidence: functional parity, clean repeatability, US/USD and France/EUR orders, production build/runtime, no candidate source patch, stronger Medusa UI checkout proof, a Node/TypeScript-centric customization surface, fewer observed Windows/build workarounds, lower observed storefront dependency advisory counts, and a simpler long-term Codex modification surface.

Spree evidence remains in this document and in the scorecard as a benchmark reference. No new score or weighting was introduced by this decision.

## Current official routes

### Medusa
- Core: https://github.com/medusajs/medusa
- DTC starter: https://github.com/medusajs/dtc-starter
- Agent skills: https://github.com/medusajs/medusa-agent-skills
- Old `nextjs-starter-medusa` was archived on 2026-07-02 and is deprecated.
- DTC starter prerequisites: Node 20+, PostgreSQL 15+, pnpm 10+.
- Current general installation docs specify supported Node LTS ranges (20.19+ or 22.12+).
- Monorepo: `apps/backend` + `apps/storefront`.

### Spree
- Core: https://github.com/spree/spree
- Starter backend: https://github.com/spree/spree_starter
- Storefront: https://github.com/spree/storefront
- Agent skills: https://github.com/spree/agent-skills
- Recommended scaffold: `npx create-spree-app@latest my-store`.
- Current scaffold requires Node 22+ and Docker.
- Backend: Ruby/Rails; storefront: Next.js/React/TypeScript.
- Current 5.6 release line has simplified default infrastructure and no longer requires Redis by default.

## License check

### Medusa
- Core is MIT.
- Enterprise materials/features such as RBAC/SSO are not part of the reusable MIT base; keep them excluded unless separately licensed.

### Spree
- Core is BSD 3-Clause.
- Starter/storefront/agent-skills are permissively licensed (starter/storefront/skills currently MIT).

## Feature matrix

| Area | Medusa DTC Starter | Spree + Storefront | Current lead |
|---|---|---|---|
| Product catalog | Built in | Built in | Tie |
| Product variants | Built in | Built in | Tie |
| Cart | Built in | Built in | Tie |
| Checkout | Multi-step | One-page | Spree |
| Customer accounts | Built in | Built in | Tie |
| Order history | Built in | Built in | Tie |
| Admin | Built-in Admin | Built-in Admin Dashboard | Tie |
| Multi-region | Regions bind currency/payment/fulfillment/tax | Markets package geography/currency/locale/payment/shipping | Spree |
| Multi-currency | Region/currency support | Markets + price lists | Spree slight |
| Shipping | Regional fulfillment/pricing | Market-aware shipping | Spree slight |
| Stripe | Official integration | Storefront support | Tie |
| PayPal | Official integration guidance | Storefront support | Spree slight |
| Adyen | Not starter focus | Storefront support | Spree |
| SEO | Customizable storefront foundation | SEO features packaged in storefront | Spree |
| Multi-language storefront | Additional localization work | Locale URL routing built in | Spree |
| AI-agent support | Official agent skills + Medusa docs MCP with Codex instructions | 26 official skills, explicit Codex support, CLI/offline schema tooling | Tie / different strengths |
| Single-language backend/frontend stack | Node/TypeScript-centric | TypeScript frontend + Ruby/Rails backend | Medusa |
| Default infra complexity | Node + PostgreSQL; Redis optional for first dev test | Docker + Rails/PostgreSQL; Redis no longer required by default in 5.6 | Medusa slight |
| Cross-border out-of-box completeness | Strong primitives | More packaged | Spree |

The `Current lead` column records feature-level observations only. It is not a
platform ranking and does not override the final reviewer decision above.

## Revised weighted scores

Scores are decision aids only; runtime Gate results override them.

| Criterion | Weight | Medusa | Spree |
|---|---:|---:|---:|
| Cross-border readiness | 20% | 8.3 | 9.5 |
| Can directly reuse/fork | 15% | 9.0 | 9.0 |
| AI/Codex maintainability | 20% | 9.6 | 8.5 |
| Frontend customization | 10% | 9.0 | 9.3 |
| Backend customization | 10% | 9.2 | 7.8 |
| Payment/checkout readiness | 10% | 8.3 | 9.3 |
| Local/demo bootstrap simplicity | 10% | 7.6 | 7.8 |
| License clarity | 5% | 8.5 | 9.2 |
| **Weighted total** | **100%** | **8.77** | **8.83** |

### Correction from the first draft
The earlier displayed weighted totals were arithmetically inconsistent with the listed weights/scores. They have been recalculated here. Separately, new evidence improved Spree's AI-agent and local-infrastructure scores because Spree now ships dedicated agent skills/CLI tooling and its 5.6 line no longer requires Redis by default.

**Interpretation:** the table above is a historical decision aid captured before the final runtime benchmark. It is not reweighted here. The reviewer decision is the explicit `TECHNOLOGY_SELECTION=MEDUSA` recorded in this document.


### Latest bootstrap finding
- Current Medusa DTC root declares pnpm `10.11.1` and exposes a `backend:seed` root alias, but current `apps/backend/package.json` has no `seed` script.
- The checked-out backend contains `apps/backend/src/migration-scripts/initial-data-seed.ts`; CB-DEV-012 evidence shows that migration-based initialization created the baseline Store, Region, tax, stock, fulfillment, product, and inventory data.
- The safe validator now distinguishes `BASELINE_INITIALIZATION=migration-based initial-data-seed` from `US/USD_AUGMENTATION=required`; it does not report the false conclusion that the entire baseline must be manually bootstrapped.
- Spree's current `create-spree-app` flow loaded sample products/categories/images for CB-DEV-014.
- Spree's current `create-spree-app` flow explicitly offers optional sample products/categories/images, lowering demo-bootstrap friction on paper.

This is exactly the type of difference runtime validation is designed to surface.

## Runtime risks to explicitly test

### Medusa
- DTC starter is relatively new compared with the historical starter.
- Current repository still has a small set of open issues and active storefront upgrade/build PRs.
- Current backend `.env.template` still declares `REDIS_URL`, while current `medusa-config.ts` does not consume it; an open upstream issue questions this mismatch. Treat README/template claims as evidence to verify, not runtime truth.
- Storefront requires a real local publishable API key before a production build can pass.
- CB-DEV-013 and CB-DEV-017 verified the required Medusa build/runtime and repeatability evidence; CB-DEV-018 records the resulting template freeze validation.

### Spree
- Cross-border features are stronger out of the box, but backend customizations introduce Rails/Ruby.
- Docker is part of the recommended scaffold.
- Agent skills reduce the AI-learning gap but do not remove the two-language maintenance surface.

## Runtime evidence available

### Medusa
- CB-DEV-012: US/USD Store API checkout with System payment, completed USD order, Admin API re-read, and PostgreSQL double-read passed.
- CB-DEV-013: backend and storefront production builds and production-mode runtime smoke passed; `/us` and `/us/store` remained readable with USD catalog data.
- Runtime ports: backend/Admin `9000`, storefront `8000`, PostgreSQL `127.0.0.1:54329`.

### Spree
- CB-DEV-014: official scaffold baseline, prebuilt Quick Start backend/Admin, official storefront, Store API cart/checkout with Check payment, USD order, Admin API re-read, and PostgreSQL re-read passed.
- Storefront payment UI is not equivalent evidence: the API checkout passed, while the seeded Check payment was not exposed by the current official storefront UI.
- Runtime ports: prebuilt backend/Admin `9100`, storefront `3001`, US English route `/us/en`.

These records are evidence, not a final score or platform decision.

## Runtime environment record
Use one Docker Desktop installation for both candidates, with isolated Compose projects and physical database volumes.

Medusa is the selected platform for the formal mother template:
- Medusa backend/storefront on Windows Node.
- PostgreSQL 16 only in Docker.
- No host PostgreSQL.
- No Redis in first test.
- Detect migration-based baseline initialization from the exact checked-out commit; then apply only the documented US/USD augmentation.

Spree benchmark reference:
- Official Docker-based `create-spree-app` route, local application-source runtime, production build, and repeatability were verified in CB-DEV-014/016/017.
- These records remain preserved and are not the formal mother template.

## Evidence URLs
- https://docs.medusajs.com/learn/installation
- https://github.com/medusajs/dtc-starter
- https://github.com/medusajs/nextjs-starter-medusa
- https://github.com/medusajs/medusa-agent-skills
- https://docs.medusajs.com/learn/introduction/build-with-llms-ai/mcp-server
- https://github.com/spree/spree
- https://github.com/spree/spree_starter
- https://github.com/spree/storefront
- https://github.com/spree/agent-skills
- https://github.com/spree/spree/releases

## Decision boundary
Do not connect real payment, buy a domain, or continue Spree as the formal mother-template track. The next authorized work is UI implementation against the selected Medusa template; visual design itself is outside this document.
