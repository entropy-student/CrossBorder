# Document Cleanup Inventory

Task: `CB-DOC-CLEANUP-001`

This inventory was captured before any archive move or deletion. Paths are
relative to the project root unless explicitly marked as external.

## Authoritative state observed

- Technology: `MEDUSA`
- Mother Template: `03_template/medusa-crossborder-base/`
- Figma UI: frozen
- Web UI: frozen; `CB-UI-FINAL-001=VERIFIED PASS`
- Review-03: closed
- Root HEAD at inventory: `0363c9cbffc7057e7f12757ec2952e3a2e700c3f`
- Root, Medusa candidate, and Spree candidate worktrees were clean.

## Size snapshot

| Metric | Value |
|---|---:|
| `BEFORE_PROJECT_FILE_COUNT` | 116,411 |
| `BEFORE_PROJECT_SIZE_BYTES` | 1,341,126,467 |
| `BEFORE_PROJECT_SIZE_GIB` | 1.249 GiB |
| Largest top-level directory | `03_template` - 1,318,398,107 bytes |
| Largest second-level directory | `03_template/medusa-crossborder-base` - 1,318,398,107 bytes |

The project size includes ignored local runtime/build artifacts because the
purpose of this pre-cleanup snapshot is to account for the physical workspace,
not only tracked files.

## Top-level and second-level directories

| Rank | Directory | Bytes | Approx. MiB |
|---:|---|---:|---:|
| 1 | `03_template` | 1,318,398,107 | 1,257.32 |
| 2 | `02_demos` | 13,923,479 | 13.28 |
| 3 | `.git` | 5,658,443 | 5.40 |
| 4 | `04_docs` | 3,069,736 | 2.93 |
| 5 | `01_research` | 9,672 | 0.01 |
| 1 | `03_template/medusa-crossborder-base` | 1,318,398,107 | 1,257.32 |
| 2 | `02_demos/spree-demo` | 9,602,488 | 9.16 |
| 3 | `.git/objects` | 5,557,736 | 5.30 |
| 4 | `02_demos/medusa-dtc` | 4,311,887 | 4.11 |
| 5 | `04_docs/ui_implementation` | 2,870,049 | 2.74 |
| 6 | `04_docs/scripts` | 93,573 | 0.09 |
| 7 | `04_docs/node` | 26,449 | 0.03 |
| 8 | `02_demos/spree-repeat` | 2,284 | 0.00 |
| 9 | `02_demos/provenance` | 2,087 | 0.00 |
| 10 | `02_demos/spree-local` | 1,107 | 0.00 |
| 11 | `02_demos/medusa-repeat` | 908 | 0.00 |
| 12 | `02_demos/medusa-local` | 434 | 0.00 |

## Top 50 files

| Rank | Relative path | Bytes |
|---:|---|---:|
| 1 | `03_template/medusa-crossborder-base/node_modules/.pnpm/@next+swc-win32-x64-msvc@15.5.21/.../next-swc.win32-x64-msvc.node` | 148,386,816 |
| 2 | `03_template/medusa-crossborder-base/apps/storefront/.next/cache/webpack/server-production/0.pack` | 144,474,126 |
| 3 | `03_template/medusa-crossborder-base/apps/storefront/.next/cache/webpack/client-production/0.pack` | 76,286,405 |
| 4 | `03_template/medusa-crossborder-base/node_modules/.pnpm/@turbo+windows-64@2.10.12/.../turbo.exe` | 50,242,560 |
| 5 | `03_template/medusa-crossborder-base/apps/storefront/.next/cache/webpack/server-production/index.pack` | 38,735,079 |
| 6 | `03_template/medusa-crossborder-base/apps/storefront/.next/cache/webpack/server-production/index.pack.old` | 38,735,051 |
| 7 | `03_template/medusa-crossborder-base/node_modules/.pnpm/@swc+core-win32-x64-msvc@1.16.1/.../swc.win32-x64-msvc.node` | 27,903,488 |
| 8 | `03_template/medusa-crossborder-base/apps/storefront/.next/cache/webpack/client-production/index.pack` | 24,269,210 |
| 9 | `03_template/medusa-crossborder-base/apps/storefront/.next/cache/webpack/client-production/index.pack.old` | 24,268,783 |
| 10 | `03_template/medusa-crossborder-base/node_modules/.pnpm/@img+sharp-win32-x64@0.34.5/.../libvips-42.dll` | 19,112,960 |
| 11 | `03_template/medusa-crossborder-base/node_modules/.pnpm/@medusajs+dashboard@2.19.0.../node_modules/@medusajs/dashboard/dist/app.js` | 11,872,477 |
| 12 | `03_template/medusa-crossborder-base/node_modules/.pnpm/@esbuild+win32-x64@0.28.2/.../esbuild.exe` | 11,694,592 |
| 13 | `03_template/medusa-crossborder-base/apps/storefront/.next/cache/webpack/edge-server-production/0.pack` | 11,688,968 |
| 14 | `03_template/medusa-crossborder-base/node_modules/.pnpm/typescript@5.9.3/.../typescript.js` | 9,112,572 |
| 15 | `03_template/medusa-crossborder-base/node_modules/.pnpm/@medusajs+dashboard@2.19.0.../dist/chunk-YLEB6TTW.mjs` | 6,725,045 |
| 16 | `03_template/medusa-crossborder-base/node_modules/.pnpm/typescript@5.9.3/.../_tsc.js` | 6,213,092 |
| 17 | `03_template/medusa-crossborder-base/apps/storefront/.next/cache/webpack/server-production/3.pack` | 6,172,156 |
| 18 | `03_template/medusa-crossborder-base/apps/backend/.medusa/server/public/admin/assets/index-XpULDan-.js` | 6,054,389 |
| 19 | `03_template/medusa-crossborder-base/node_modules/.pnpm/tailwindcss@3.4.19.../peers/index.js` | 4,501,254 |
| 20 | `03_template/medusa-crossborder-base/node_modules/.pnpm/next@15.5.21.../dist/server/capsize-font-metrics.json` | 4,301,622 |
| 21 | `02_demos/spree-demo/.git/objects/pack/pack-b62a4bfad4e44c8b9bda2ce327be6ef7961cd480.pack` | 4,033,333 |
| 22 | `03_template/medusa-crossborder-base/node_modules/.pnpm/next@15.5.21.../amphtml-validator/validator_wasm.js` | 4,012,235 |
| 23 | `03_template/medusa-crossborder-base/node_modules/.pnpm/next@15.5.21.../app-page-turbo-experimental.runtime.dev.js.map` | 3,821,648 |
| 24 | `03_template/medusa-crossborder-base/node_modules/.pnpm/next@15.5.21.../app-page-experimental.runtime.dev.js.map` | 3,816,455 |
| 25 | `.git/objects/pack/pack-37093f349985352c1c8cd8fd9dabcccc21e78b90.pack` | 3,665,858 |
| 26 | `03_template/medusa-crossborder-base/node_modules/.pnpm/next@15.5.21.../app-page-turbo.runtime.dev.js.map` | 3,653,605 |
| 27 | `03_template/medusa-crossborder-base/node_modules/.pnpm/next@15.5.21.../app-page.runtime.dev.js.map` | 3,648,417 |
| 28 | `03_template/medusa-crossborder-base/node_modules/.pnpm/next@15.5.21.../app-page-experimental.runtime.prod.js.map` | 2,808,423 |
| 29 | `03_template/medusa-crossborder-base/node_modules/.pnpm/next@15.5.21.../app-page-turbo-experimental.runtime.prod.js.map` | 2,807,833 |
| 30 | `03_template/medusa-crossborder-base/node_modules/.pnpm/next@15.5.21.../app-page.runtime.prod.js.map` | 2,722,400 |
| 31 | `03_template/medusa-crossborder-base/node_modules/.pnpm/next@15.5.21.../app-page-turbo.runtime.prod.js.map` | 2,721,805 |
| 32 | `03_template/medusa-crossborder-base/node_modules/.pnpm/@rollup+rollup-win32-x64-msvc@4.63.0/.../rollup.win32-x64-msvc.node` | 2,653,696 |
| 33 | `03_template/medusa-crossborder-base/node_modules/.pnpm/next@15.5.21.../dist/compiled/webpack/bundle5.js` | 2,582,639 |
| 34 | `03_template/medusa-crossborder-base/apps/storefront/.next/cache/webpack/client-production/13.pack` | 2,453,383 |
| 35 | `03_template/medusa-crossborder-base/node_modules/.pnpm/next@15.5.21.../dist/compiled/next-devtools/index.js.map` | 2,449,181 |
| 36 | `03_template/medusa-crossborder-base/node_modules/.pnpm/date-fns@3.6.0/.../locale/cdn.js.map` | 2,212,540 |
| 37 | `03_template/medusa-crossborder-base/node_modules/.pnpm/@rollup+rollup-win32-x64-gnu@4.63.0/.../rollup.win32-x64-gnu.node` | 2,059,264 |
| 38 | `03_template/medusa-crossborder-base/node_modules/.pnpm/@unrs+resolver-binding-win32-x64-msvc@1.12.2/.../resolver.win32-x64-msvc.node` | 1,886,720 |
| 39 | `03_template/medusa-crossborder-base/node_modules/.pnpm/typescript@5.9.3/.../lib.dom.d.ts` | 1,874,901 |
| 40 | `03_template/medusa-crossborder-base/node_modules/.pnpm/jiti@1.21.7/.../babel.js` | 1,736,792 |
| 41 | `03_template/medusa-crossborder-base/node_modules/.pnpm/date-fns@3.6.0/.../locale/cdn.min.js.map` | 1,578,343 |
| 42 | `03_template/medusa-crossborder-base/node_modules/.pnpm/next@15.5.21.../dist/compiled/babel-packages/packages-bundle.js` | 1,538,674 |
| 43 | `03_template/medusa-crossborder-base/apps/storefront/.next/cache/webpack/edge-server-production/index.pack` | 1,530,766 |
| 44 | `03_template/medusa-crossborder-base/node_modules/.pnpm/jiti@2.7.0/.../babel.cjs` | 1,526,691 |
| 45 | `03_template/medusa-crossborder-base/node_modules/.pnpm/@babel+parser@7.29.8/.../index.js.map` | 1,433,340 |
| 46 | `03_template/medusa-crossborder-base/node_modules/.pnpm/prettier@2.8.8/.../index.js` | 1,434,273 |
| 47 | `03_template/medusa-crossborder-base/node_modules/.pnpm/next@15.5.21.../resvg.wasm` | 1,378,357 |
| 48 | `03_template/medusa-crossborder-base/node_modules/.pnpm/next@15.5.21.../dist/compiled/babel/bundle.js` | 1,359,783 |
| 49 | `03_template/medusa-crossborder-base/node_modules/.pnpm/next@15.5.21.../app-page-turbo-experimental.runtime.prod.js` | 1,354,477 |
| 50 | `03_template/medusa-crossborder-base/node_modules/.pnpm/@babel+parser@7.25.6/.../index.js.map` | 1,353,636 |

The `...` in this table abbreviates only the middle of very long generated
dependency paths; the scan used the full filesystem paths.

## Top 50 directories

The following are the top directory aggregates from the same snapshot. Nested
entries intentionally appear because they identify the actual large generated
subtrees.

```text
03_template/medusa-crossborder-base | 1,318,398,107
03_template | 1,318,398,107
03_template/medusa-crossborder-base/node_modules | 923,465,901
03_template/medusa-crossborder-base/node_modules/.pnpm | 923,328,435
03_template/medusa-crossborder-base/apps | 394,227,894
03_template/medusa-crossborder-base/apps/storefront | 385,283,114
03_template/medusa-crossborder-base/apps/storefront/.next | 383,372,564
03_template/medusa-crossborder-base/apps/storefront/.next/cache | 376,336,292
03_template/medusa-crossborder-base/apps/storefront/.next/cache/webpack | 375,559,522
03_template/medusa-crossborder-base/apps/storefront/.next/cache/webpack/server-production | 229,413,046
03_template/medusa-crossborder-base/node_modules/.pnpm/@next+swc-win32-x64-msvc@15.5.21 | 148,387,320
03_template/medusa-crossborder-base/node_modules/.pnpm/@next+swc-win32-x64-msvc@15.5.21/node_modules | 148,387,320
03_template/medusa-crossborder-base/node_modules/.pnpm/@next+swc-win32-x64-msvc@15.5.21/node_modules/@next/swc-win32-x64-msvc | 148,387,320
03_template/medusa-crossborder-base/node_modules/.pnpm/@next+swc-win32-x64-msvc@15.5.21/node_modules/@next | 148,387,320
03_template/medusa-crossborder-base/node_modules/.pnpm/next@15.5.21_@babel+core@7._f3bef59f8c7abdccc76e9fb3ef5dc39b/node_modules | 139,701,401
03_template/medusa-crossborder-base/node_modules/.pnpm/next@15.5.21_@babel+core@7._f3bef59f8c7abdccc76e9fb3ef5dc39b/node_modules/next | 139,701,401
03_template/medusa-crossborder-base/node_modules/.pnpm/next@15.5.21_@babel+core@7._f3bef59f8c7abdccc76e9fb3ef5dc39b/node_modules/next/dist | 139,669,758
03_template/medusa-crossborder-base/apps/storefront/.next/cache/webpack/client-production | 132,926,742
03_template/medusa-crossborder-base/node_modules/.pnpm/next@15.5.21_@babel+core@7._f3bef59f8c7abdccc76e9fb3ef5dc39b/node_modules/next/dist/compiled | 102,462,540
03_template/medusa-crossborder-base/node_modules/.pnpm/next@15.5.21_@babel+core@7._f3bef59f8c7abdccc76e9fb3ef5dc39b/node_modules/next/dist/compiled/next-server | 51,065,115
03_template/medusa-crossborder-base/node_modules/.pnpm/@turbo+windows-64@2.10.12/node_modules/@turbo/windows-64 | 50,244,957
03_template/medusa-crossborder-base/node_modules/.pnpm/@turbo+windows-64@2.10.12/node_modules/@turbo | 50,244,957
03_template/medusa-crossborder-base/node_modules/.pnpm/@turbo+windows-64@2.10.12/node_modules | 50,244,957
03_template/medusa-crossborder-base/node_modules/.pnpm/@turbo+windows-64@2.10.12 | 50,244,957
03_template/medusa-crossborder-base/node_modules/.pnpm/@turbo+windows-64@2.10.12/node_modules/@turbo/windows-64/bin | 50,243,328
03_template/medusa-crossborder-base/node_modules/.pnpm/@medusajs+dashboard@2.19.0__5e1dbabfd9b4b66055a1a5bab424cbcb | 33,990,453
03_template/medusa-crossborder-base/node_modules/.pnpm/@medusajs+dashboard@2.19.0__5e1dbabfd9b4b66055a1a5bab424cbcb/node_modules | 33,990,453
03_template/medusa-crossborder-base/node_modules/.pnpm/@medusajs+dashboard@2.19.0__5e1dbabfd9b4b66055a1a5bab424cbcb/node_modules/@medusajs/dashboard | 33,990,453
03_template/medusa-crossborder-base/node_modules/.pnpm/@medusajs+dashboard@2.19.0__5e1dbabfd9b4b66055a1a5bab424cbcb/node_modules/@medusajs | 33,990,453
03_template/medusa-crossborder-base/node_modules/.pnpm/@swc+core-win32-x64-msvc@1.16.1 | 27,915,245
03_template/medusa-crossborder-base/node_modules/.pnpm/@swc+core-win32-x64-msvc@1.16.1/node_modules | 27,915,245
03_template/medusa-crossborder-base/node_modules/.pnpm/@swc+core-win32-x64-msvc@1.16.1/node_modules/@swc | 27,915,245
03_template/medusa-crossborder-base/node_modules/.pnpm/@swc+core-win32-x64-msvc@1.16.1/node_modules/@swc/core-win32-x64-msvc | 27,915,245
03_template/medusa-crossborder-base/node_modules/.pnpm/@medusajs+dashboard@2.19.0__5e1dbabfd9b4b66055a1a5bab424cbcb/node_modules/@medusajs/dashboard/dist | 23,820,058
03_template/medusa-crossborder-base/node_modules/.pnpm/typescript@5.9.3/node_modules/typescript | 23,625,066
03_template/medusa-crossborder-base/node_modules/.pnpm/typescript@5.9.3/node_modules | 23,625,066
03_template/medusa-crossborder-base/node_modules/.pnpm/typescript@5.9.3 | 23,625,066
03_template/medusa-crossborder-base/node_modules/.pnpm/typescript@5.9.3/node_modules/typescript/lib | 23,568,832
03_template/medusa-crossborder-base/node_modules/.pnpm/date-fns@3.6.0 | 22,153,202
03_template/medusa-crossborder-base/node_modules/.pnpm/date-fns@3.6.0/node_modules | 22,153,202
03_template/medusa-crossborder-base/node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns | 22,153,202
03_template/medusa-crossborder-base/node_modules/.pnpm/@img+sharp-win32-x64@0.34.5/node_modules | 19,890,145
03_template/medusa-crossborder-base/node_modules/.pnpm/@img+sharp-win32-x64@0.34.5/node_modules/@img | 19,890,145
03_template/medusa-crossborder-base/node_modules/.pnpm/@img+sharp-win32-x64@0.34.5/node_modules/@img/sharp-win32-x64 | 19,890,145
03_template/medusa-crossborder-base/node_modules/.pnpm/@img+sharp-win32-x64@0.34.5 | 19,890,145
03_template/medusa-crossborder-base/node_modules/.pnpm/@img+sharp-win32-x64@0.34.5/node_modules/@img/sharp-win32-x64/lib | 19,873,280
03_template/medusa-crossborder-base/node_modules/.pnpm/figlet@1.11.4 | 18,805,509
03_template/medusa-crossborder-base/node_modules/.pnpm/figlet@1.11.4/node_modules | 18,805,509
03_template/medusa-crossborder-base/node_modules/.pnpm/figlet@1.11.4/node_modules/figlet | 18,805,509
```

These are aggregate sizes; nested entries are intentionally repeated to show
which generated subtrees account for the total.

## Classification before cleanup

| Object / class | Classification | Planned disposition |
|---|---|---|
| `00_HANDOFF.md`, `PROJECT_STATUS.json` | CURRENT | Keep; handoff will be slimmed in place |
| `03_template/medusa-crossborder-base/` source, locks, templates, scripts | CURRENT | Keep in place |
| `04_docs/LOCAL_RUNBOOK.md`, `PRODUCTION_READINESS.md`, `FINAL_SELECTION_EVIDENCE.md`, `RUNTIME_SCORECARD.md`, `ACCEPTANCE_GATES.md`, `WINDOWS_PREFLIGHT.md`, `UI_IMPLEMENTATION_BASELINE.md` | CURRENT | Keep / update current wording where required |
| `04_docs/ui_implementation/CB-UI-FINAL-001/`, `WEB_UI_FREEZE.md` | CURRENT | Keep in place |
| `04_docs/ui_implementation/CB-UI-FINAL-001.zip` | GENERATED_DUPLICATE | Remove after exact 16-entry source set match; source/evidence directory is preserved |
| `04_docs/ui_implementation/CB-UI-DEV-001` through `CB-UI-DEV-003R` | HISTORICAL_UNIQUE | Move to `04_docs/archive/ui-development-history/` |
| `04_docs/ui_implementation/REVIEW-03`, `REVIEW-03-FIX` | HISTORICAL_UNIQUE | Move to `04_docs/archive/review-history/` |
| `01_research/PLATFORM_COMPARISON.md` | HISTORICAL_UNIQUE | Move to `04_docs/archive/platform-selection/` |
| `04_docs/REVIEW02_*` | HISTORICAL_UNIQUE | Move to `04_docs/archive/review-history/` |
| `04_docs/DEMO_BOOTSTRAP.md` | HISTORICAL_UNIQUE / LEGACY | Move to `04_docs/archive/legacy-runbooks/` |
| `04_docs/scripts/90-build-review-bundle.ps1` and historical Spree/repeat scripts | HISTORICAL_UNIQUE | Dependency-audit first; archive only if no current dependency remains |
| `04_docs/scripts/92-prepare-review-staging.ps1` | CURRENT REVIEW UTILITY | Keep unless a later dependency audit proves otherwise |
| `03_template/**/node_modules`, `.next`, `.medusa`, `tsconfig.tsbuildinfo` | RUNTIME_ONLY | Remove; rebuildable and ignored |
| `03_template/**/.env`, `.env.local`, `02_demos/*.local.txt` | RUNTIME_ONLY | Keep local-only if needed, never current docs/archive content |
| External `CrossBorder-Independent-Store-LOCAL-ARCHIVE/` | HISTORICAL_UNIQUE | Preserve outside project; inspect generated bundles separately |
| External staging / CB-020 copy paths | NOT_PRESENT_AT_INVENTORY | No action |
| Databases, Docker volumes, orders | UNKNOWN_DO_NOT_TOUCH | No action |

## Parent-directory inventory

At inventory time `C:\Users\34707\Documents\ChatGPT` contained only:

- `CrossBorder-Independent-Store/` - CURRENT authoritative project.
- `CrossBorder-Independent-Store-LOCAL-ARCHIVE/` - HISTORICAL_UNIQUE external archive.

No `CrossBorder-Independent-Store-*STAGING*` directory and no matching CB-020
copy was present. The external archive contained `generated-artifacts/`,
`review-bundles/`, and the historical review ZIP set; those objects are
audited before any removal.

## Deletion boundary

No database, Docker volume, application source, package lock, Git repository,
Mother Template source, current Figma reference, current Web UI evidence, or
historical unique document is eligible for deletion in this cleanup.
