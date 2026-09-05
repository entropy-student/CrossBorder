# Document Index

This is the single human-facing index for the CrossBorder Independent Store.
The application/source is the child `CrossBorder-Independent-Store` directory
under this document center. Start with [00_HANDOFF.md](00_HANDOFF.md), then use one current
authority per topic below. Detailed human-facing contracts have been moved
here; source-side README/control files are explicitly source-bound.

| Topic | Current authority | Scope |
|---|---|---|
| Current status / handoff | [00_HANDOFF.md](00_HANDOFF.md) | Human-facing state and next action |
| Machine-readable state | [PROJECT_STATUS.json](CrossBorder-Independent-Store/PROJECT_STATUS.json) | Canonical status data |
| Roadmap | [ROADMAP.md](ROADMAP.md) | Current and next phases |
| Documentation cleanup validation | [DOCUMENT_CLEANUP_VALIDATION.md](DOCUMENT_CLEANUP_VALIDATION.md) | Current document-center and source-bound hygiene |
| Workspace root migration | [WORKSPACE_MIGRATION_VALIDATION.md](WORKSPACE_MIGRATION_VALIDATION.md) | Canonical source move and post-move checks |
| Source Markdown audit | [SOURCE_MARKDOWN_AUDIT.md](SOURCE_MARKDOWN_AUDIT.md) | Independent source/repository and staging evidence |
| Production readiness | [PRODUCTION_READINESS.md](PRODUCTION_READINESS.md) | Go-live gates and limitations |
| Payment architecture | [payment/PAYMENT_ARCHITECTURE.md](payment/PAYMENT_ARCHITECTURE.md) | Medusa payment boundary and provider decisions |
| PayPal | [payment/PAYPAL.md](payment/PAYPAL.md) | Candidate readiness and fail-closed state |
| WorldFirst | [payment/WORLDFIRST.md](payment/WORLDFIRST.md) | Settlement/collection-account state |
| Product contract | [product/PRODUCT_DATA_CONTRACT.md](product/PRODUCT_DATA_CONTRACT.md) | Product Master contract |
| Product import | [product/PRODUCT_IMPORT_GUIDE.md](product/PRODUCT_IMPORT_GUIDE.md) | Validation, normalization and dry-run workflow |
| Product integration policy | [product/REAL_PRODUCT_INTEGRATION_POLICY.md](product/REAL_PRODUCT_INTEGRATION_POLICY.md) | User approval and store-integration boundary |
| Product validation | [product/VALIDATION_TEST_MATRIX.md](product/VALIDATION_TEST_MATRIX.md) | Product pipeline validation evidence |
| Product status overview | [product/PRODUCT_CONTRACT.md](product/PRODUCT_CONTRACT.md) | First product and navigation overview |
| Sourcing contract | [product/sourcing/COMPONENT_DATA_CONTRACT.md](product/sourcing/COMPONENT_DATA_CONTRACT.md) | Component Master and BOM boundary |
| Sourcing operations | [product/SOURCING.md](product/SOURCING.md) | COMP-001 overview and independent gates |
| COMP-001 validation | [product/sourcing/COMP-001_VALIDATION.md](product/sourcing/COMP-001_VALIDATION.md) | Current component validation |
| COMP-001 procurement | [product/sourcing/COMP-001_PROCUREMENT_CHECKLIST.md](product/sourcing/COMP-001_PROCUREMENT_CHECKLIST.md) | Bulk-order gate checklist |
| COMP-001 supplier follow-up | [product/sourcing/COMP-001_SUPPLIER_FOLLOWUP.md](product/sourcing/COMP-001_SUPPLIER_FOLLOWUP.md) | Missing supplier facts |
| Sample test protocol | [product/sourcing/testing/PET_HAIR_REMOVER_SAMPLE_TEST_PROTOCOL.md](product/sourcing/testing/PET_HAIR_REMOVER_SAMPLE_TEST_PROTOCOL.md) | COMP-001 physical test system |
| UI freeze | [ui/WEB_UI_FREEZE.md](ui/WEB_UI_FREEZE.md) | Frozen Figma/Web UI contract |
| UI final evidence | [ui/FINAL_UI_EVIDENCE.md](ui/FINAL_UI_EVIDENCE.md) | Final accepted QA evidence |
| Local runbook / operations | [operations/LOCAL_RUNBOOK.md](operations/LOCAL_RUNBOOK.md) | Current local setup and safe commands |
| Review packaging | [operations/REVIEW_PACKAGING.md](operations/REVIEW_PACKAGING.md) | Current safe reviewer staging utility |
| Deployment / go-live | [PRODUCTION_READINESS.md](PRODUCTION_READINESS.md) | Deployment is deferred until gates pass |
| Historical archive | [archive/INDEX.md](archive/INDEX.md) | Closed reviews and prior decisions |

## Payment contract authorities

- [Payment integration contract](payment/PAYMENT_INTEGRATION_CONTRACT.md)
- [Payment provider decision](payment/PAYMENT_PROVIDER_DECISION.md)
- [Payment test matrix](payment/PAYMENT_TEST_MATRIX.md)
- [Existing payment-system intake](payment/EXISTING_PAYMENT_SYSTEM_INTAKE.md)
- [PayPal capability](payment/paypal/PAYPAL_CAPABILITY_MATRIX.md),
  [environment](payment/paypal/PAYPAL_ENV_CONTRACT.md),
  [integration](payment/paypal/PAYPAL_INTEGRATION_CONTRACT.md) and
  [tests](payment/paypal/PAYPAL_TEST_MATRIX.md)
- [WorldFirst capability](payment/worldfirst/WORLDFIRST_CAPABILITY_MATRIX.md),
  [integration](payment/worldfirst/WORLDFIRST_INTEGRATION_CONTRACT.md) and
  [tests](payment/worldfirst/WORLDFIRST_TEST_MATRIX.md)

## Source-bound / not human working documents

These exact documentation/control files remain beside source because their
location or code-directory context matters. They are not competing human
working documents or current authorities:

- `CrossBorder-Independent-Store/00_HANDOFF.md` (discovery pointer stub)
- `CrossBorder-Independent-Store/02_demos/README.md`
- `CrossBorder-Independent-Store/02_demos/medusa-dtc/AGENTS.md`
- `CrossBorder-Independent-Store/02_demos/medusa-dtc/CLAUDE.md`
- `CrossBorder-Independent-Store/02_demos/medusa-dtc/README.md`
- `CrossBorder-Independent-Store/02_demos/medusa-dtc/apps/backend/README.md`
- `CrossBorder-Independent-Store/02_demos/medusa-dtc/apps/backend/src/admin/README.md`
- `CrossBorder-Independent-Store/02_demos/medusa-dtc/apps/backend/src/admin/i18n/README.md`
- `CrossBorder-Independent-Store/02_demos/medusa-dtc/apps/backend/src/api/README.md`
- `CrossBorder-Independent-Store/02_demos/medusa-dtc/apps/backend/src/jobs/README.md`
- `CrossBorder-Independent-Store/02_demos/medusa-dtc/apps/backend/src/links/README.md`
- `CrossBorder-Independent-Store/02_demos/medusa-dtc/apps/backend/src/modules/README.md`
- `CrossBorder-Independent-Store/02_demos/medusa-dtc/apps/backend/src/subscribers/README.md`
- `CrossBorder-Independent-Store/02_demos/medusa-dtc/apps/backend/src/workflows/README.md`
- `CrossBorder-Independent-Store/02_demos/spree-demo/AGENTS.md`
- `CrossBorder-Independent-Store/02_demos/spree-demo/CLAUDE.md`
- `CrossBorder-Independent-Store/02_demos/spree-demo/README.md`
- `CrossBorder-Independent-Store/02_demos/spree-demo/apps/storefront/CLAUDE.md`
- `CrossBorder-Independent-Store/02_demos/spree-demo/apps/storefront/README.md`
- `CrossBorder-Independent-Store/02_demos/spree-demo/backend/AGENTS.md`
- `CrossBorder-Independent-Store/02_demos/spree-demo/backend/CLAUDE.md`
- `CrossBorder-Independent-Store/02_demos/spree-demo/backend/LICENSE.md`
- `CrossBorder-Independent-Store/03_template/medusa-crossborder-base/AGENTS.md`
- `CrossBorder-Independent-Store/03_template/medusa-crossborder-base/CLAUDE.md`
- `CrossBorder-Independent-Store/03_template/medusa-crossborder-base/README.md`
- `CrossBorder-Independent-Store/03_template/medusa-crossborder-base/TEMPLATE_PROVENANCE.md`
- `CrossBorder-Independent-Store/03_template/medusa-crossborder-base/apps/backend/README.md`
- `CrossBorder-Independent-Store/03_template/medusa-crossborder-base/apps/backend/src/admin/README.md`
- `CrossBorder-Independent-Store/03_template/medusa-crossborder-base/apps/backend/src/admin/i18n/README.md`
- `CrossBorder-Independent-Store/03_template/medusa-crossborder-base/apps/backend/src/api/README.md`
- `CrossBorder-Independent-Store/03_template/medusa-crossborder-base/apps/backend/src/jobs/README.md`
- `CrossBorder-Independent-Store/03_template/medusa-crossborder-base/apps/backend/src/links/README.md`
- `CrossBorder-Independent-Store/03_template/medusa-crossborder-base/apps/backend/src/modules/README.md`
- `CrossBorder-Independent-Store/03_template/medusa-crossborder-base/apps/backend/src/subscribers/README.md`
- `CrossBorder-Independent-Store/03_template/medusa-crossborder-base/apps/backend/src/workflows/README.md`
- `CrossBorder-Independent-Store/04_docs/README.md`
- `CrossBorder-Independent-Store/05_product/README.md`
- `CrossBorder-Independent-Store/05_product/assets/README.md`
- `CrossBorder-Independent-Store/05_product/normalized/README.md`
- `CrossBorder-Independent-Store/05_product/scripts/README.md`
- `CrossBorder-Independent-Store/05_product/sourcing/README.md`
- `CrossBorder-Independent-Store/05_product/sourcing/evidence/README.md`
- `CrossBorder-Independent-Store/05_product/sourcing/scripts/README.md`
- `CrossBorder-Independent-Store/05_product/sourcing/testing/README.md`
- `CrossBorder-Independent-Store/06_payment/README.md`
- `CrossBorder-Independent-Store/06_payment/providers/paypal/README.md`
- `CrossBorder-Independent-Store/06_payment/providers/worldfirst/README.md`

The Mother Template source itself is linked from
[the current architecture](payment/PAYMENT_ARCHITECTURE.md); its code,
schemas, JSON data, scripts, tests and assets remain in the source project.

Historical source paths moved to this center are recorded in
[archive/INDEX.md](archive/INDEX.md) and
[DOCUMENT_CLEANUP_VALIDATION.md](DOCUMENT_CLEANUP_VALIDATION.md).
