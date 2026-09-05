# Source Markdown Audit

Task: `CB-DOCS-002R-FINAL-MICRO-FIX`

This is lightweight independent source evidence for the document-center
cleanup. It does not change application, payment, product, UI, database,
Docker or runtime behavior.

## Git status

```text
ROOT_STATUS=CLEAN
ROOT_STATUS_RAW=git status --porcelain returned no entries
MEDUSA_REPOSITORY=CrossBorder-Independent-Store/02_demos/medusa-dtc
MEDUSA_TOPLEVEL=CrossBorder-Independent-Store/02_demos/medusa-dtc
MEDUSA_STATUS=CLEAN
SPREE_REPOSITORY=CrossBorder-Independent-Store/02_demos/spree-demo
SPREE_TOPLEVEL=CrossBorder-Independent-Store/02_demos/spree-demo
SPREE_STATUS=CLEAN
```

The candidate repository top levels were checked with
`git rev-parse --show-toplevel`; neither candidate status inherits the parent
Root repository.

## Document location audit

```text
HUMAN_FACING_DOCS_OUTSIDE_DOCUMENT_CENTER=0
SOURCE_BOUND_DOCS_OUTSIDE_DOCUMENT_CENTER=47
```

The following exact files are the only source-bound Markdown/control files
outside the document center. They are source-adjacent README, control,
license, provenance or benchmark documentation, not competing human-working
authorities:

```text
CrossBorder-Independent-Store/00_HANDOFF.md
CrossBorder-Independent-Store/02_demos/README.md
CrossBorder-Independent-Store/02_demos/medusa-dtc/AGENTS.md
CrossBorder-Independent-Store/02_demos/medusa-dtc/CLAUDE.md
CrossBorder-Independent-Store/02_demos/medusa-dtc/README.md
CrossBorder-Independent-Store/02_demos/medusa-dtc/apps/backend/README.md
CrossBorder-Independent-Store/02_demos/medusa-dtc/apps/backend/src/admin/README.md
CrossBorder-Independent-Store/02_demos/medusa-dtc/apps/backend/src/admin/i18n/README.md
CrossBorder-Independent-Store/02_demos/medusa-dtc/apps/backend/src/api/README.md
CrossBorder-Independent-Store/02_demos/medusa-dtc/apps/backend/src/jobs/README.md
CrossBorder-Independent-Store/02_demos/medusa-dtc/apps/backend/src/links/README.md
CrossBorder-Independent-Store/02_demos/medusa-dtc/apps/backend/src/modules/README.md
CrossBorder-Independent-Store/02_demos/medusa-dtc/apps/backend/src/subscribers/README.md
CrossBorder-Independent-Store/02_demos/medusa-dtc/apps/backend/src/workflows/README.md
CrossBorder-Independent-Store/02_demos/spree-demo/CLAUDE.md
CrossBorder-Independent-Store/02_demos/spree-demo/README.md
CrossBorder-Independent-Store/02_demos/spree-demo/AGENTS.md
CrossBorder-Independent-Store/02_demos/spree-demo/apps/storefront/CLAUDE.md
CrossBorder-Independent-Store/02_demos/spree-demo/apps/storefront/README.md
CrossBorder-Independent-Store/02_demos/spree-demo/backend/AGENTS.md
CrossBorder-Independent-Store/02_demos/spree-demo/backend/CLAUDE.md
CrossBorder-Independent-Store/02_demos/spree-demo/backend/LICENSE.md
CrossBorder-Independent-Store/03_template/medusa-crossborder-base/AGENTS.md
CrossBorder-Independent-Store/03_template/medusa-crossborder-base/CLAUDE.md
CrossBorder-Independent-Store/03_template/medusa-crossborder-base/README.md
CrossBorder-Independent-Store/03_template/medusa-crossborder-base/TEMPLATE_PROVENANCE.md
CrossBorder-Independent-Store/03_template/medusa-crossborder-base/apps/backend/README.md
CrossBorder-Independent-Store/03_template/medusa-crossborder-base/apps/backend/src/admin/README.md
CrossBorder-Independent-Store/03_template/medusa-crossborder-base/apps/backend/src/admin/i18n/README.md
CrossBorder-Independent-Store/03_template/medusa-crossborder-base/apps/backend/src/api/README.md
CrossBorder-Independent-Store/03_template/medusa-crossborder-base/apps/backend/src/jobs/README.md
CrossBorder-Independent-Store/03_template/medusa-crossborder-base/apps/backend/src/links/README.md
CrossBorder-Independent-Store/03_template/medusa-crossborder-base/apps/backend/src/modules/README.md
CrossBorder-Independent-Store/03_template/medusa-crossborder-base/apps/backend/src/subscribers/README.md
CrossBorder-Independent-Store/03_template/medusa-crossborder-base/apps/backend/src/workflows/README.md
CrossBorder-Independent-Store/04_docs/README.md
CrossBorder-Independent-Store/05_product/README.md
CrossBorder-Independent-Store/05_product/assets/README.md
CrossBorder-Independent-Store/05_product/normalized/README.md
CrossBorder-Independent-Store/05_product/scripts/README.md
CrossBorder-Independent-Store/05_product/sourcing/README.md
CrossBorder-Independent-Store/05_product/sourcing/evidence/README.md
CrossBorder-Independent-Store/05_product/sourcing/scripts/README.md
CrossBorder-Independent-Store/05_product/sourcing/testing/README.md
CrossBorder-Independent-Store/06_payment/README.md
CrossBorder-Independent-Store/06_payment/providers/paypal/README.md
CrossBorder-Independent-Store/06_payment/providers/worldfirst/README.md
```

## Obsolete staging audit

```text
PATH=../CrossBorder-Independent-Store-DOCUMENT-CENTER-STAGING-CHECK
EXISTS=NO
PATH=../CrossBorder-Independent-Store-DOCUMENT-CENTER-STAGING-FINAL
EXISTS=NO
PATH=../CrossBorder-Independent-Store-FINAL-ROUND-3-STAGING-R2-FINAL
EXISTS=NO
PATH=../CrossBorder-Independent-Store-FULL-REVIEW-CHECKPOINT-001-ROUND-2-FINAL-STAGING
EXISTS=NO
PATH=../CrossBorder-Independent-Store-FULL-REVIEW-CHECKPOINT-001-ROUND-2-STAGING
EXISTS=NO
PATH=../CrossBorder-Independent-Store-FULL-REVIEW-CHECKPOINT-001-STAGING
EXISTS=NO
```

No new full Reviewer ZIP or staging directory was created by this micro-fix.

## Current path corrections

- WorldFirst Collection Account is settlement-only and has no customer
  checkout adapter.
- A future approved Global Checkout path must use Medusa Payment Module /
  `AbstractPaymentProvider` at runtime.
- `payment-provider-adapter.mjs` is `READINESS_REFERENCE_ONLY`.
- Current Payment Provider Decision and Windows Preflight links point to the
  document center or canonical source paths rather than pre-migration
  `providers/` or `04_docs/archive/` wording.

`BROKEN_CURRENT_DOCUMENT_LINKS=0`
`NEXT_STEP=WAITING_FOR_REVIEWER`
