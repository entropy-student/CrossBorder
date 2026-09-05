# Workspace Migration Validation

Task: `WORKSPACE_ROOT_CONSOLIDATION` (continuation of `CB-DOCS-002R-FINAL-MICRO-FIX`)

```text
RESULT=PASS
```

The workspace move, source/build checks, Docker recovery, and live local
runtime read-back are complete. Docker Desktop's Linux engine recovered by a
normal non-destructive start; no reset, WSL distribution deletion, database
reset, or volume reset was used.

## Final locations

```text
PROJECT_TOP_LEVEL=C:\Users\34707\Documents\ChatGPT\跨境电商
HUMAN_DOC_ROOT=C:\Users\34707\Documents\ChatGPT\跨境电商
SOURCE_CANONICAL=C:\Users\34707\Documents\ChatGPT\跨境电商\CrossBorder-Independent-Store
```

```text
SOURCE_MOVE=PASS
OLD_CANONICAL_PATH_EXISTS=NO
NEW_CANONICAL_PATH_EXISTS=YES
```

The source was moved on the same volume with an in-place directory move. The
old directory was checked before and after the move and was not deleted until
the new path existed.

## Git evidence

```text
HEAD_BEFORE_MOVE=1d47cd3daed9e06ec879db6365444d0f6c7e5019
HEAD_AFTER_MOVE=1d47cd3daed9e06ec879db6365444d0f6c7e5019
HEAD_UNCHANGED=YES
GIT_TOPLEVEL=C:\Users\34707\Documents\ChatGPT\跨境电商\CrossBorder-Independent-Store
```

The intentional post-move pointer/README/staging-tool changes are recorded
in the final root checkpoint after this validation is complete:

```text
ROOT_CHECKPOINT=ee6e42dccd2a140402f5e7d5e807ecc97760ee71
ROOT_STATUS=CLEAN
MEDUSA_STATUS=CLEAN
SPREE_STATUS=CLEAN
```

Medusa and Spree were checked with `git rev-parse --show-toplevel`; each
resolved to its own expected repository and neither inherited the parent
source repository identity.

## Runtime and data safety

```text
RUNTIME_IDENTITY_PRESERVED=YES
RUNTIME_CONFIG=03_template/medusa-crossborder-base/.runtime/local-config.json
RUNTIME_PROJECT_IDENTITY_PRESERVED=YES
DATABASE_PRESERVED=YES
HISTORICAL_ORDERS_PRESERVED=YES
DATABASE_RESET=NO
NEW_ORDER_CREATED=NO
```

The saved runtime contract retained the existing ProjectName and configured
ports. No setup, seed, migration, order, payment, Docker-volume or database
write operation was run during the move. Docker API read-back was unavailable
on this host during the post-move check, so no database-content claim is based
on a live query.

```text
PAYMENT_BEHAVIOR_CHANGED=NO
REAL_PAYPAL_API_CALLED=NO
REAL_WORLDFIRST_API_CALLED=NO
REAL_MONEY_CHARGED=NO
```

## External cleanup

The following explicitly scoped disposable directories were audited and
removed after `UNIQUE_REQUIRED_FILES=0` was established:

```text
CrossBorder-Independent-Store-LOCAL-ARCHIVE
_crossborder_reviewer_merge_tmp_20260904
_crossborder_reviewer_merge_tmp_20260904b
```

The local archive contained generated review/build/runtime duplicates only;
source, assets and evidence were already present in the canonical source,
document center or Git history. These folders were permanently removed and
are recoverable only from an external backup. `CrossBorder-Independent-Store`
was preserved and moved; the unrelated `LOCAL-ARCHIVE` name above refers only
to the audited disposable directory explicitly in scope.

## Post-move checks

```text
CURRENT_OLD_CANONICAL_PATH_REFERENCES=0
BROKEN_CURRENT_DOCUMENT_LINKS=0
TYPESCRIPT_BACKEND=PASS
TYPESCRIPT_STOREFRONT=PASS
PRODUCTION_BUILD=PASS
STAGING_TOOL_AFTER_MOVE=PASS
SECRET_SCAN=PASS
DENYLIST_SCAN=PASS
ABSOLUTE_PATH_SCAN=PASS
ZIP_CREATED=NO
BACKEND_HEALTH=PASS
STOREFRONT_ROUTE_READBACK=PASS
STORE_API_READBACK=PASS
ADMIN_API_READBACK=PASS
POSTGRESQL_READBACK=PASS
DATABASE_NON_MUTATION=PASS
DATABASE_LIVE_READBACK=PASS
HISTORICAL_ORDERS_NON_MUTATION=PASS
HISTORICAL_ORDERS_LIVE_READBACK=PASS
RUNTIME_REGRESSION=PASS
DOCKER_ENGINE_RECOVERED=YES
ORDER_COUNT_READ_ONLY=2
```

The build validated the moved application source and produced the existing
local build outputs. The root checkpoint above contains only the intentional
post-move pointer, README and staging-tool changes. The runtime regression
reused the saved `.runtime/local-config.json`; no mutating
`acceptance-smoke.ps1` was run.

`NEXT_STEP=WAITING_FOR_REVIEWER`
