# Docker Recovery and Disk Audit

```text
TASK_ID=CB-WORKSPACE-003-DISK-AUDIT-AND-DOCKER-RECOVERY
RESULT=PASS
NEXT_STEP=WAITING_FOR_REVIEWER
```

This is a non-destructive disk audit and Docker recovery record. No project
directory, database, Docker volume, historical order, or payment system was
reset or deleted.

## 1. Disk audit

Audit root:

```text
C:\Users\34707\Documents\ChatGPT\跨境电商
```

Method: recursive file-byte measurement with hidden files included and
reparse/junction traversal excluded. Per-directory figures can overlap when a
generated archive contains another dependency tree; `TOTAL_WORKSPACE_SIZE`
is the workspace aggregate and must not be reconstructed by adding every
nested category.

### Workspace totals

```text
TOTAL_WORKSPACE_SIZE=3,807,206,789 bytes | 3,630.84 MB | 3.55 GB
SOURCE_SIZE=3,804,291,307 bytes | 3,628.05 MB | 3.54 GB
DOCUMENT_CENTER_SIZE_EXCLUDING_SOURCE=2,915,482 bytes | 2.78 MB | 0.003 GB
DOCUMENT_CENTER_SIZE=2,915,482 bytes | 2.78 MB | 0.003 GB
GIT_SIZE=18,954,586 bytes | 18.08 MB | 0.018 GB
NODE_MODULES_SIZE=1,846,594,415 bytes | 1,761.05 MB | 1.72 GB
GENERATED_BUILD_CACHE_SIZE=804,466,552 bytes | 767.20 MB | 0.75 GB
DEMO_BENCHMARK_SIZE=13,923,579 bytes | 13.28 MB | 0.013 GB
```

The `NODE_MODULES_SIZE` and `GENERATED_BUILD_CACHE_SIZE` figures are named
directory aggregates. The active template root dependency tree alone is
`923,613,887` bytes; the larger aggregate includes nested/archived copies.

### Top-level workspace entries

| Entry | Bytes | MB | Classification |
|---|---:|---:|---|
| `CrossBorder-Independent-Store` | 3,804,291,307 | 3,628.05 | REQUIRED_ACTIVE |
| `archive` | 2,336,690 | 2.23 | HISTORICAL_TRACKED |
| `deployment` | 294 | 0.00 | ACTIVE_CURRENT |
| `operations` | 31,542 | 0.03 | ACTIVE_CURRENT |
| `payment` | 33,987 | 0.03 | ACTIVE_CURRENT |
| `product` | 46,806 | 0.04 | ACTIVE_CURRENT |
| `ui` | 427,124 | 0.41 | ACTIVE_CURRENT |
| center Markdown/JSON files | 2,335,039 | 2.23 | ACTIVE_CURRENT / HISTORY |

### Source top-level and required second-level entries

| Entry | Bytes | Classification |
|---|---:|---|
| `.git` | 18,954,586 | REQUIRED_ACTIVE / HISTORICAL_TRACKED |
| `01_research` | 0 | HISTORICAL_TRACKED |
| `02_demos` | 13,923,579 | HISTORICAL_TRACKED / REPRODUCIBILITY |
| `03_template` | 3,761,921,747 | REQUIRED_ACTIVE |
| `04_docs` | 124,085 | SOURCE_ADJACENT_KEEP |
| `05_product` | 9,350,765 | REQUIRED_ACTIVE |
| `06_payment` | 11,610 | REQUIRED_ACTIVE |
| `03_template/.../node_modules` | 923,613,887 | REGENERATABLE; retained |
| `03_template/.../apps/storefront/.next` | 390,347,648 | REGENERATABLE; deleted after stop |
| `03_template/.../apps/backend/.medusa` | 8,911,597 | REGENERATABLE/RUNTIME_ONLY; deleted after stop |
| `03_template/.../.runtime/build-archive` | 2,433,426,101 | RUNTIME_ONLY/HISTORICAL; deleted after uniqueness check |
| `03_template/.../dist` | absent | no active directory |
| `03_template/.../build` | absent | no active directory |
| `03_template/.../coverage` | absent | no active directory |
| `03_template/.../.cache` | absent | no active directory |
| `05_product/assets` | 5,214,202 | REQUIRED_ACTIVE |
| `05_product/evidence` | 3,950,376 | REQUIRED_ACTIVE evidence |

`02_demos` is referenced by historical/provenance and benchmark scripts, but
the active storefront does not import it. Its Medusa and Spree candidate
repositories remain separate clean Git baselines and were not deleted.

### Classification decision

```text
03_template/medusa-crossborder-base=REQUIRED_ACTIVE
03_template/.../node_modules=REGENERATABLE / DISPOSABLE_CACHE_CANDIDATE / RETAINED
03_template/.../.next=REGENERATABLE / DISPOSABLE_CACHE_CANDIDATE / DELETED
03_template/.../.medusa=REGENERATABLE / RUNTIME_ONLY / DELETED
03_template/.../.runtime=RUNTIME_ONLY / REQUIRED_ACTIVE
03_template/.../.runtime/build-archive=RUNTIME_ONLY / HISTORICAL_BUILD_OUTPUT
02_demos=HISTORICAL_TRACKED / REQUIRED_REPRODUCIBILITY
05_product/assets=REQUIRED_ACTIVE
05_product/evidence=REQUIRED_ACTIVE
.git=REQUIRED_ACTIVE / HISTORICAL_TRACKED
DELETED_EXACT_GENERATED_TARGETS=YES
```

No deletion was authorized by size alone. The three exact generated targets
were deleted only after Git tracking, current-runtime use, process state, and
PostgreSQL preservation checks passed. The active dependency tree remains.

Pre-cleanup guard evidence:

```text
RUNTIME_BUILD_ARCHIVE_TRACKED_FILES=0
RUNTIME_BUILD_ARCHIVE_UNIQUE_REQUIRED_FILES=0
RUNTIME_BUILD_ARCHIVE_CURRENT_READ_DEPENDENCIES=0
RUNTIME_BUILD_ARCHIVE_GENERATOR_ONLY_REFERENCE=YES
NEXT_AND_MEDUSA_TRACKED_FILES=0
APPLICATION_PROCESSES_STOPPED_BEFORE_DELETE=YES
POSTGRESQL_LISTENER_PRESERVED_BEFORE_DELETE=YES
```

The only source reference to `build-archive` was the existing build-output
writer in `_common.ps1`; it does not read an archive as application state.
`.next` and `.medusa` were stopped before removal and remain regeneratable
from source and the retained dependency tree.

### Post-cleanup disk audit

```text
TOTAL_WORKSPACE_SIZE_AFTER=974,498,579 bytes | 929.35 MB | 0.908 GB
SOURCE_SIZE_AFTER=971,574,112 bytes | 926.57 MB | 0.906 GB
NODE_MODULES_SIZE_AFTER=923,613,887 bytes | 880.83 MB | 0.860 GB
GENERATED_BUILD_CACHE_SIZE_AFTER=0 bytes | 0 MB | 0 GB
DOCUMENT_CENTER_SIZE_AFTER=2,924,467 bytes | 2.79 MB | 0.003 GB
SPACE_RECLAIMED_BYTES=2,832,708,210 bytes
SPACE_RECLAIMED_GB=2.638 GB
SPACE_RECLAIMED_BY_EXACT_TARGETS=2,832,685,346 bytes | 2.638 GB
```

`GENERATED_BUILD_CACHE_SIZE_AFTER` counts the active canonical template
`.next`, `.medusa`, `dist`, `build`, `coverage`, and `.cache` locations; all
are absent after cleanup. `node_modules` was intentionally preserved.

## 2. Git object audit

Root source repository (`CrossBorder-Independent-Store`):

```text
count=782
size=14.24 MiB
in-pack=795
packs=2
size-pack=3.70 MiB
prune-packable=0
garbage=0
size-garbage=0 bytes
```

Medusa candidate repository (`02_demos/medusa-dtc`):

```text
count=455
size=1.92 MiB
in-pack=0
packs=0
size-pack=0
prune-packable=0
garbage=0
```

Spree candidate repository (`02_demos/spree-demo`):

```text
count=0
size=0
in-pack=977
packs=1
size-pack=3.87 MiB
prune-packable=0
garbage=0
```

## 3. Docker and WSL diagnosis

Initial failure observed before recovery:

```text
failed to connect to docker API ... dockerDesktopLinuxEngine
```

Recovered read-only state:

```text
DOCKER_CLI_AVAILABLE=YES
DOCKER_ENGINE_REACHABLE=YES
DOCKER_CONTEXT=desktop-linux
DOCKER_HOST_OVERRIDE=UNSET
DOCKER_VERSION=29.7.2
DOCKER_DESKTOP_VERSION=4.88.1
LINUX_ENGINE=29.7.2 / linux amd64
WSL_VERSION=2.7.12.0
WSL_KERNEL=6.18.33.2-microsoft-standard-WSL2
DOCKER_DESKTOP_PROCESS=RUNNING
COM_DOCKER_SERVICE_STATE=NO_WINDOWS_SERVICE_ENTRY; USER_PROCESS_BACKEND_RUNNING
LINUX_ENGINE_STATE=READY
VIRTUALIZATION=HYPERVISOR_DETECTED
```

`docker context ls` showed `desktop-linux` as the active context. No
`DOCKER_HOST` override was present. WSL showed Docker Desktop using WSL2;
the `docker-desktop` distribution remained version 2. No distribution was
deleted, upgraded, switched destructively, or reset.

### Recovery action

```text
RECOVERY_ACTION=NORMAL_DOCKER_DESKTOP_START
RECOVERY_MODE=NON_DESTRUCTIVE
WSL_SHUTDOWN=NOT_REQUIRED_AFTER_ENGINE_RECOVERED
FACTORY_RESET=NO
DATA_CLEANUP=NO
```

Docker Desktop was started normally and bounded re-tests of `docker info` and
`docker version` succeeded. A WSL shutdown was not needed after the Linux
engine became ready; no destructive recovery action was used.

## 4. Existing resources and runtime identity

Read-only inventory confirmed the existing project resources before runtime
start:

```text
COMPOSE_PROJECT=medusa-product-integration-a1b2c3
POSTGRES_CONTAINER=medusa-product-integration-a1b2c3-postgres-1
POSTGRES_IMAGE=postgres:16-alpine
POSTGRES_PORT=127.0.0.1:56332->5432
POSTGRES_HEALTH=healthy
POSTGRES_RESTART_COUNT=0
COMPOSE_STATE=running(1)
RUNTIME_CONFIG=03_template/medusa-crossborder-base/.runtime/local-config.json
RUNTIME_CONFIG_SOURCE=new canonical source path
```

The saved runtime contract was reused. `setup-local.ps1` was not run, no new
volume was created, and no existing volume or database was reset.

The `docker compose ls` display for the already-existing container retains a
historical pre-move `ConfigFiles` label. This is Docker metadata on the
reused container, not a current source/runtime file reference: the active
process command lines, saved `.runtime/local-config.json`, compose invocation,
and runtime checks resolve from the new canonical source path. The container
was intentionally not recreated solely to rewrite that label.

## 5. Non-mutating runtime regression

Production-style backend and storefront processes were started through the
existing `start-local.ps1` path using the saved runtime configuration. The
checks below were HTTP GET/read-only SQL checks; no acceptance smoke was run.

```text
BACKEND_HEALTH=PASS (HTTP 200, http://127.0.0.1:19600/health)
STOREFRONT_US=PASS (HTTP 200, /us)
STOREFRONT_STORE=PASS (HTTP 200, /us/store)
PDP=PASS (HTTP 200, /us/products/pet-hair-remover)
STORE_API=PASS (US region and product GET)
ADMIN_API=PASS (authenticated product GET only)
POSTGRESQL_READ_ONLY=PASS (SELECT product/variant/order count)
DATABASE_NON_MUTATION=PASS
DATABASE_LIVE_READBACK=PASS
HISTORICAL_ORDERS_NON_MUTATION=PASS
HISTORICAL_ORDERS_LIVE_READBACK=PASS (read-only order count=2)
RUNTIME_REGRESSION=PASS
```

Product identity read back unchanged:

```text
PRODUCT_ID=prod_01M1JG54Z6PFY802QV32EJ174D
SKU=PAW-PHR-001
HANDLE=pet-hair-remover
PRODUCT_STATUS=published
PRICE=14.99 USD
VARIANT_ID=variant_01M1JG551ZEBATMPNNTW138YSE
MANAGE_INVENTORY=false
```

Safety invariants:

```text
NEW_ORDER_CREATED=NO
DATABASE_RESET=NO
REAL_PAYPAL_API_CALLED=NO
REAL_WORLDFIRST_API_CALLED=NO
REAL_MONEY_CHARGED=NO
ACCEPTANCE_SMOKE_RUN=NO
CONSOLE_ERRORS=NOT_ASSESSED_BY_BROWSER_IN_THIS_TASK
```

The Admin token was obtained only for a local read-only GET verification; no
business mutation was performed. The PostgreSQL evidence used the database
name from the saved runtime `DATABASE_URL`, not a guessed database name.

## 6. Final state

```text
ROOT_STATUS=CLEAN
MEDUSA_STATUS=CLEAN
SPREE_STATUS=CLEAN
SOURCE_MOVE=UNCHANGED / PREVIOUSLY_ACCEPTED
DISK_CONTENT_DELETED=YES_GENERATED_ONLY
SOURCE_CONTENT_DELETED=NO
DOCKER_DATA_DELETED=NO
DATABASE_CONTENT_MODIFIED=NO
NEXT_STEP=WAITING_FOR_REVIEWER
```
