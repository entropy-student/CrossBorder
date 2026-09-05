# Final Selection Evidence

This is the evidence table used for reviewer-led platform selection. It records the final decision without applying a new weighting model or deleting benchmark evidence.

`TECHNOLOGY_SELECTION=MEDUSA`

`REVIEWER_DECISION_DATE=2026-09-01`

`Spree=BENCHMARK_REFERENCE; NOT_SELECTED`

## 1. Functional parity

| Area | Medusa | Spree local source |
|---|---|---|
| Backend / storefront runtime | PASS | PASS |
| Production build | PASS | PASS |
| US/USD commerce | PASS — System Payment | PASS — Check payment |
| Store/API/Admin/PostgreSQL order evidence | PASS | PASS |
| Second clean initialization | PASS | PASS |

## 2. Cross-border

Both repeat environments completed the same second market scenario, France/EUR, with a new order:

- Medusa: `order_01M1E8X7BKYQHQHNEEPSG0SR3R`, EUR, country `fr`, total `20`, System Payment.
- Spree: `or_AXs1igzRC6`, EUR, country `FR`, total `45.99`, Check payment.

This is functional evidence, not a price or feature ranking.

## 3. Clean repeatability

| Test | Medusa | Spree |
|---|---|---|
| Fresh disposable volume | PASS | PASS |
| Second fresh disposable volume | PASS | PASS |
| Rerun without reset | PASS | PASS with explicit post-sample Check normalization |
| Historical environment isolation | PASS | PASS |

## 4. Production build and startup measurements

| Metric | Medusa | Spree local source |
|---|---:|---:|
| Backend build | 55.4 s | 139.7 s |
| Storefront build | 49.3 s | 47.3 s |
| Total measured build | 104.7 s | 187.0 s |
| Backend cold start | 10.8 s | 22.2 s |
| Storefront product-page cold start | 2.2 s | 16.5 s |

Measurements are local single-run observations and are not load-test results.

## 5. Runtime operations

- Medusa repeat: one PostgreSQL container plus host production Node processes; backend `9300`, storefront `8003`, fresh volumes `crossborder-medusa-repeat_pgdata` and `crossborder-medusa-repeat-2_pgdata`.
- Spree repeat: PostgreSQL and local-source backend containers plus host production Next process; backend `9400`, storefront `3004`, fresh volume pairs for `spree-demo-repeat` and `spree-demo-repeat-2`.
- Medusa source runtime uses the `.medusa/server` working-directory caveat and a local fake Redis/event bus when Redis is absent.
- Spree source runtime uses the local Docker image, temporary LF-normalized build context on Windows, and a stock dashboard dependency resolution without a committed dashboard lockfile.

## 6. Resource and artifact snapshot

- Medusa: approximately 43 MB combined idle runtime memory for the first repeat; `.medusa/server` 8.3 MB; storefront `.next` 367.2 MB.
- Spree: approximately 1,094 MB combined idle runtime memory for the first repeat; backend image 209.3 MB; storefront `.next` 89.3 MB.
- These values are approximate and machine-specific.

## 7. Developer / Codex operability

Observed facts:

- Medusa baseline initialization is migration-driven and can be followed by a rerun-safe US/USD augmentation script. The built backend must start from `.medusa/server`.
- Spree local-source qualification uses the official Dockerfile and exact CLI build argument `2.4.9`. Its repeat runner makes storage ownership and Check payment visibility explicit.
- Both candidate application source worktrees stayed clean; no application source patch or lockfile change was needed in CB-DEV-017.
- Repeat environments are explicitly named and use distinct Docker projects, ports, and physical volumes.

## 8. Known risks and evidence gaps

- Medusa and Spree storefront production dependency audits reported advisories; no packages were upgraded in this benchmark.
- Spree authenticated Admin browser login is `UNKNOWN/NOT VERIFIED`.
- Spree storefront payment UI remains `PARTIAL/NOT VERIFIED`; the Check flow is proven through Store API/Admin API/PostgreSQL.
- Spree stock dashboard dependency resolution is not fully deterministic because the extracted template has no committed lockfile.
- Windows source builds still require the disclosed temporary LF normalization.

## 9. Final reviewer decision

`TECHNOLOGY_SELECTION=MEDUSA`

The reviewer selected Medusa DTC Starter using the already verified evidence: functional parity; clean repeatability; US/USD and France/EUR orders; production build/runtime; no candidate source patch; stronger Medusa UI checkout proof; Node/TypeScript-centric customization; fewer observed Windows/build workarounds; lower observed storefront dependency advisory counts; and a simpler long-term Codex modification surface.

Spree remains `BENCHMARK_REFERENCE` / `NOT_SELECTED`. Its source, scorecard rows, order evidence, and known limitations remain preserved for comparison and audit.

Evidence Complete: YES
