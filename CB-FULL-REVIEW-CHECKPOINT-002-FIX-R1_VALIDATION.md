# CB-FULL-REVIEW-CHECKPOINT-002-FIX-R1 Validation

## Scope

This checkpoint closes the Round-1 package/status/documentation findings only.
No PayPal or WorldFirst API was called, no customer payment was enabled, and
no product, UI, database, Docker or runtime behavior was changed.

```text
TASK_ID=CB-FULL-REVIEW-CHECKPOINT-002-FIX-R1
RESULT=PASS
CURRENT_STAGE=PAYMENT_INTEGRATION
NEXT_STEP=UPLOAD_FULL_REVIEW_CHECKPOINT_002_ROUND_2
NEXT_PHASE=PAYPAL_ACCOUNT_SANDBOX_CAPABILITY
```

## Package closure

```text
PACKAGE_LAYOUT=LIVE_WORKSPACE_SHAPE
PACKAGE_RELATIVE_LINKS=0
REVIEW_PACKAGE_REPRODUCIBILITY=PASS
SAFE_ENV_TEMPLATES_INCLUDED=4
RUNTIME_ENV_INCLUDED=0
PACKAGE_MANIFEST_INCLUDED=YES
STAGING_MANIFEST_INCLUDED=YES
DUPLICATED_SOURCE_TREE=NO
SECRET_SCAN=PASS
```

The package root contains current document-center files directly and the
canonical source once under `CrossBorder-Independent-Store/`. The four safe
environment templates are copied byte-for-byte; runtime `.env` files and
credentials are excluded. The ZIP hash is recorded in the external Round-2
manifest to avoid a circular hash.

```text
PACKAGE_FILE_COUNT=1651
PACKAGE_SIZE_BYTES=RECORDED_IN_EXTERNAL_ROUND_2_MANIFEST
ZIP_SHA256=RECORDED_IN_EXTERNAL_ROUND_2_MANIFEST
ROOT_HEAD=72840e82639cde4886fd2ca8014ac377d0ffc1e4
MEDUSA_HEAD=5d3e644ebf7812453e2be000eba2f497423e5c02
SPREE_HEAD=f9966ab61ae0ceb72f62a51167b1c013fe10230f
DOCUMENT_CENTER_HEAD_AT_PACKAGE_GENERATION=RECORDED_IN_EXTERNAL_ROUND_2_MANIFEST
```

## Current status corrections

```text
ROADMAP_CURRENT_GATE=FULL_REVIEW_CHECKPOINT_002
PROJECT_STATUS_CURRENT_STAGE=payment_integration
PROJECT_STATUS_CURRENT_REVIEW_CHECKPOINT=full_review_checkpoint_002
PROJECT_STATUS_LAST_COMPLETED_TASK=CB-FULL-REVIEW-CHECKPOINT-002-FIX-R1
PAYPAL_PROVIDER_ENABLED=NO
PAYPAL_CUSTOMER_EXPOSURE=DISABLED
PAYPAL_SANDBOX_STARTED=NO
PAYPAL_RUNTIME_CODE_CHANGED=NO
PRODUCT_BEHAVIOR_CHANGED=NO
UI_BEHAVIOR_CHANGED=NO
```

The disk-audit wording now distinguishes deleted regeneratable build output
from source and Docker/PostgreSQL data:

```text
DISK_CONTENT_DELETED=YES_GENERATED_ONLY
SOURCE_CONTENT_DELETED=NO
DOCKER_DATA_DELETED=NO
DATABASE_CONTENT_MODIFIED=NO
SPACE_RECLAIMED_GB=approximately 2.638
```

## Read-only dependency audit

No automatic fix or dependency update was run. Registry access was available.

```text
PNPM_AUDIT_PROD_EXIT=1
PNPM_AUDIT_PROD_CRITICAL=0
PNPM_AUDIT_PROD_HIGH=4
PNPM_AUDIT_PROD_MODERATE=7
PNPM_AUDIT_PROD_LOW=0
PNPM_AUDIT_ALL_EXIT=1
PNPM_AUDIT_ALL_CRITICAL=0
PNPM_AUDIT_ALL_HIGH=4
PNPM_AUDIT_ALL_MODERATE=7
PNPM_AUDIT_ALL_LOW=0
NEXT_VERSION=15.5.24
```

The audit findings remain recorded for a later dependency maintenance
decision; this task intentionally did not upgrade anything.

## Medusa compatibility evidence

The installed application remains Medusa 2.19.0. A temporary, isolated npm
package inspection of official 2.20.1 packages was removed after inspection.
In `@medusajs/medusa@2.20.1/dist/subscribers/payment-webhook.js`, the core
subscriber returns before running `processPaymentWorkflow` when the provider
returns `PaymentActions.CANCELED` or `PaymentActions.FAILED`. Therefore:

```text
MEDUSA_INSTALLED_VERSION=2.19.0
MEDUSA_2_20_1_NEGATIVE_WEBHOOK_ACTIONS=IGNORED_BY_CORE
MEDUSA_2_20_1_PAYPAL_SCAFFOLD_COMPATIBILITY=NO_OBVIOUS_BREAKING_CHANGE
```

The 2.20.1 provider contract surface inspected for the scaffold retains the
same `AbstractPaymentProvider` operation family (initiate, retrieve/status,
authorize, capture, refund, cancel/delete, update and webhook mapping), so no
obvious breaking change was found. This is a source/package compatibility
probe, not an upgrade recommendation.

The installed 2.19.0 generic payment webhook route enqueues the provider body
and responds `200` before provider verification is processed by the delayed
subscriber:

```text
MEDUSA_WEBHOOK_PREVERIFY_ACK=ACK_BEFORE_PROVIDER_VERIFICATION
```

No Medusa core patch was made. Application-level reconciliation remains a
required hard gate before customer PayPal exposure.

## Preserved invariants

```text
ROOT_STATUS=CLEAN_AFTER_CHECKPOINT_COMMIT
MEDUSA_STATUS=CLEAN
SPREE_STATUS=CLEAN
DOCUMENT_CENTER_STATUS=CLEAN_AFTER_FINAL_MANIFEST_COMMIT
NEW_ORDER_CREATED=NO
DATABASE_RESET=NO
REAL_PAYPAL_API_CALLED=NO
REAL_WORLDFIRST_API_CALLED=NO
REAL_MONEY_CHARGED=NO
REAL_SECRET_COMMITTED=NO
```

The accepted storefront/product/runtime baseline remains unchanged. The
Round-2 ZIP and its matching manifest are the only next-review deliverables.
