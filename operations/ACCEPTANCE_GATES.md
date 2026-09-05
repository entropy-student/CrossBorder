# Platform-Neutral Runtime Acceptance Gates

The project is not allowed to freeze a commerce base merely because installation succeeds. Each candidate is evaluated against the same evidence categories; platform-specific terms belong in the notes below rather than in the shared gate names.

## Gate 0 — Provenance / baseline
- [ ] Official route, acquisition mode, resolved version/commit, local baseline, and lockfile are recorded.
- [ ] Source templates and local patches are distinguishable.
- [ ] Declared package-manager version is used for important install/build evidence.
- [ ] No dependency or upstream source is changed merely to manufacture a pass.

## Gate 1 — Environment
- [ ] Required runtime prerequisites and Docker/Compose are available.
- [ ] Candidate-specific ports, Compose project, database, and physical volume are isolated.
- [ ] Database image identity is recorded before an existing volume is started and is checked for drift.
- [ ] Recoverable network conditions are recorded as warnings/fallbacks; only unavailable acquisition paths are hard blockers.

## Gate 2 — Backend / Admin
- [ ] Migrations/initialization path is detected from the checked-out candidate.
- [ ] Backend health/API is reachable without fatal errors.
- [ ] Admin access is verified at the appropriate evidence level: browser, API, or both.
- [ ] Seed/sample data and a sellable product are readable.

## Gate 3 — Storefront / Commerce
- [ ] Storefront starts and the candidate's canonical catalog route responds.
- [ ] Product detail, cart, address, shipping, test/system payment, checkout, and order evidence are recorded separately.
- [ ] API checkout is not counted as storefront UI checkout unless the UI path was actually verified.
- [ ] Completed order can be re-read through the candidate's backend/Admin API.

## Gate 4 — Production build
- [ ] Backend production build passes using locked dependencies.
- [ ] Storefront production build passes using the verified local runtime configuration.
- [ ] Production-mode backend and storefront runtime smoke pass.
- [ ] No key build step is skipped or replaced with a dev-server result.

## Gate 5 — Cross-border
- [ ] At least one market/region/currency path is proven.
- [ ] Currency/price, country/address, shipping, tax, and catalog exposure are understandable.
- [ ] A second market/currency is either proven or explicitly marked `UNKNOWN/NOT RUN`.

## Gate 6 — Security / hygiene
- [ ] Runtime secrets, credential files, tokens, and local state are excluded from reusable artifacts.
- [ ] Safe templates preserve their source bytes and variable names.
- [ ] Database is not exposed beyond the intended local interface.
- [ ] Production-only gaps and unrotated local/test credentials are explicitly listed.

## Gate 7 — Repeatability
- [ ] Candidate-specific reset is guarded and cannot delete the other candidate.
- [ ] Clean database recreation and initialization path are verified without hidden state.
- [ ] Important evidence can be reproduced with path-portable commands and exact versions.

## Platform notes

**Medusa note:** record Region, publishable-key/sales-channel mapping, System payment, and migration-based initial-data seed where applicable. These are Medusa-specific checks, not universal gate terminology.

**Spree note:** record market/country/locale/payment/shipping terminology as exposed by the current route. Distinguish prebuilt Quick Start runtime from local application-source runtime, and distinguish Store API checkout from storefront UI payment checkout.

Passing shared gates records evidence for the candidate. The Reviewer decision is now `TECHNOLOGY_SELECTION=MEDUSA`; the frozen Medusa mother template is `03_template/medusa-crossborder-base/`. Spree evidence remains preserved as a benchmark reference.
