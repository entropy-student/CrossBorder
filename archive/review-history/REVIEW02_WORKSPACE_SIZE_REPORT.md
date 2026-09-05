# REVIEW-02 Workspace Size Report

This report records the workspace inventory before cleanup. The inventory was
completed before any CB-REVIEW-02-PREP removal or archive move.

## Method

- Root: `C:\Users\34707\Documents\ChatGPT\CrossBorder-Independent-Store`
- File traversal skipped reparse-point directories so pnpm junctions were not
  followed or counted repeatedly.
- Hidden files and directories, including Git objects and ignored runtime files,
  were included.
- Sizes are binary MiB/GiB, formatted as MB/GB here for readability.

## Summary

| Field | Value |
|---|---:|
| BEFORE_TOTAL_SIZE | 4,209,485,100 bytes / 3.92 GiB |
| File count | 280,842 |
| Directory count | 55,292 |
| Largest top-level directory | `02_demos` - 2,162.32 MB |
| Second-largest top-level directory | `.runtime` - 1,825.23 MB |

## Top-level directories

| Size (MB) | Path |
|---:|---|
| 2,162.32 | `02_demos` |
| 1,825.23 | `.runtime` |
| 18.05 | `.tooling` |
| 1.60 | `03_template` |
| 0.15 | `04_docs` |
| 0.01 | `01_research` |

The three root-level Review archives are files, not directories, and are listed
below.

## Top second-level directories

| Size (MB) | Path |
|---:|---|
| 1,825.12 | `.runtime/cb018-template-validation-artifacts-20260901-204110` |
| 1,305.24 | `02_demos/medusa-dtc` |
| 857.07 | `02_demos/spree-demo` |
| 18.05 | `.tooling/pnpm-10.11.1` |
| 1.60 | `03_template/medusa-crossborder-base` |
| 0.08 | `04_docs/scripts` |
| 0.06 | `.runtime/medusa-repeat` |
| 0.04 | `.runtime/cb018-template-runtime-logs-20260901-204852` |
| 0.03 | `04_docs/node` |
| 0.02 | `04_docs/RUNTIME_SCORECARD.md` |
| 0.01 | `01_research/PLATFORM_COMPARISON.md` |
| 0.01 | `04_docs/LOCAL_RUNBOOK.md` |
| 0.01 | `.runtime/medusa-repeat-2` |
| 0.00 | `04_docs/FINAL_SELECTION_EVIDENCE.md` |
| 0.00 | `04_docs/PRODUCTION_READINESS.md` |
| 0.00 | `04_docs/DEMO_BOOTSTRAP.md` |
| 0.00 | `04_docs/UI_IMPLEMENTATION_BASELINE.md` |
| 0.00 | `04_docs/ACCEPTANCE_GATES.md` |
| 0.00 | `02_demos/spree-repeat` |
| 0.00 | `02_demos/provenance` |
| 0.00 | `04_docs/WINDOWS_PREFLIGHT.md` |
| 0.00 | `02_demos/README.md` |
| 0.00 | `02_demos/spree-local` |
| 0.00 | `02_demos/medusa-repeat` |
| 0.00 | `02_demos/medusa-dtc.UPSTREAM.txt` |
| 0.00 | `02_demos/medusa-local` |

## Top 50 files

| Size (MB) | File |
|---:|---|
| 144.80 | `.runtime/cb018-template-validation-artifacts-20260901-204110/.runtime/build-archive/20260901-203854-storefront-next/cache/webpack/server-production/0.pack` |
| 144.80 | `.runtime/cb018-template-validation-artifacts-20260901-204110/apps/storefront/.next/cache/webpack/server-production/0.pack` |
| 144.79 | `.runtime/cb018-template-validation-artifacts-20260901-204110/.runtime/build-archive/20260901-203256-storefront-next/cache/webpack/server-production/0.pack` |
| 141.51 | `02_demos/medusa-dtc/node_modules/.pnpm/@next+swc-win32-x64-msvc@15.5.21/node_modules/@next/swc-win32-x64-msvc/next-swc.win32-x64-msvc.node` |
| 141.51 | `.runtime/cb018-template-validation-artifacts-20260901-204110/node_modules/.pnpm/@next+swc-win32-x64-msvc@15.5.21/node_modules/@next/swc-win32-x64-msvc/next-swc.win32-x64-msvc.node` |
| 130.53 | `02_demos/spree-demo/apps/storefront/node_modules/.pnpm/@next+swc-win32-x64-msvc@16.2.11/node_modules/@next/swc-win32-x64-msvc/next-swc.win32-x64-msvc.node` |
| 122.87 | `02_demos/medusa-dtc/apps/storefront/.next/cache/webpack/server-production/0.pack` |
| 77.02 | `.runtime/cb018-template-validation-artifacts-20260901-204110/.runtime/build-archive/20260901-203256-storefront-next/cache/webpack/client-production/0.pack` |
| 77.02 | `.runtime/cb018-template-validation-artifacts-20260901-204110/apps/storefront/.next/cache/webpack/client-production/0.pack` |
| 77.02 | `.runtime/cb018-template-validation-artifacts-20260901-204110/.runtime/build-archive/20260901-203854-storefront-next/cache/webpack/client-production/0.pack` |
| 71.52 | `02_demos/medusa-dtc/apps/storefront/.next/cache/webpack/client-production/0.pack` |
| 67.83 | `02_demos/spree-demo/apps/storefront/node_modules/.pnpm/@biomejs+cli-win32-x64@2.4.16/node_modules/@biomejs/cli-win32-x64/biome.exe` |
| 47.92 | `02_demos/medusa-dtc/node_modules/.pnpm/@turbo+windows-64@2.10.12/node_modules/@turbo/windows-64/bin/turbo.exe` |
| 47.92 | `.runtime/cb018-template-validation-artifacts-20260901-204110/node_modules/.pnpm/@turbo+windows-64@2.10.12/node_modules/@turbo/windows-64/bin/turbo.exe` |
| 37.54 | `.runtime/cb018-template-validation-artifacts-20260901-204110/.runtime/build-archive/20260901-203854-storefront-next/cache/webpack/server-production/index.pack` |
| 37.54 | `.runtime/cb018-template-validation-artifacts-20260901-204110/.runtime/build-archive/20260901-203256-storefront-next/cache/webpack/server-production/index.pack` |
| 37.54 | `.runtime/cb018-template-validation-artifacts-20260901-204110/apps/storefront/.next/cache/webpack/server-production/index.pack` |
| 35.84 | `02_demos/medusa-dtc/apps/storefront/.next/cache/webpack/server-production/index.pack` |
| 35.84 | `02_demos/medusa-dtc/apps/storefront/.next/cache/webpack/server-production/index.pack.old` |
| 26.61 | `.runtime/cb018-template-validation-artifacts-20260901-204110/node_modules/.pnpm/@swc+core-win32-x64-msvc@1.16.1/node_modules/@swc/core-win32-x64-msvc/swc.win32-x64-msvc.node` |
| 26.61 | `02_demos/medusa-dtc/node_modules/.pnpm/@swc+core-win32-x64-msvc@1.16.1/node_modules/@swc/core-win32-x64-msvc/swc.win32-x64-msvc.node` |
| 25.62 | `02_demos/medusa-dtc/apps/storefront/.next/cache/webpack/server-production/1.pack` |
| 23.33 | `.runtime/cb018-template-validation-artifacts-20260901-204110/.runtime/build-archive/20260901-203854-storefront-next/cache/webpack/client-production/index.pack` |
| 23.33 | `.runtime/cb018-template-validation-artifacts-20260901-204110/.runtime/build-archive/20260901-203256-storefront-next/cache/webpack/client-production/index.pack` |
| 23.33 | `.runtime/cb018-template-validation-artifacts-20260901-204110/apps/storefront/.next/cache/webpack/client-production/index.pack` |
| 23.26 | `02_demos/spree-demo/apps/storefront/node_modules/.pnpm/@swc+core-win32-x64-msvc@1.15.40/node_modules/@swc/core-win32-x64-msvc/swc.win32-x64-msvc.node` |
| 22.38 | `02_demos/spree-demo/apps/storefront/node_modules/.pnpm/@rolldown+binding-win32-x64-msvc@1.0.3/node_modules/@rolldown/binding-win32-x64-msvc/rolldown-binding.win32-x64-msvc.node` |
| 21.99 | `02_demos/medusa-dtc/apps/storefront/.next/cache/webpack/client-production/index.pack` |
| 21.99 | `02_demos/medusa-dtc/apps/storefront/.next/cache/webpack/client-production/index.pack.old` |
| 18.23 | `02_demos/medusa-dtc/node_modules/.pnpm/@img+sharp-win32-x64@0.34.5/node_modules/@img/sharp-win32-x64/lib/libvips-42.dll` |
| 18.23 | `.runtime/cb018-template-validation-artifacts-20260901-204110/node_modules/.pnpm/@img+sharp-win32-x64@0.34.5/node_modules/@img/sharp-win32-x64/lib/libvips-42.dll` |
| 17.55 | `02_demos/spree-demo/apps/storefront/node_modules/.pnpm/@img+sharp-win32-x64@0.35.3/node_modules/@img/sharp-win32-x64/lib/libvips-42.dll` |
| 13.65 | `02_demos/spree-demo/apps/storefront/node_modules/.pnpm/lefthook-windows-x64@2.1.8/node_modules/lefthook-windows-x64/bin/lefthook.exe` |
| 11.90 | `02_demos/spree-demo/apps/storefront/node_modules/.pnpm/@sentry+cli-win32-x64@2.58.6/node_modules/@sentry/cli-win32-x64/bin/sentry-cli.exe` |
| 11.32 | `02_demos/medusa-dtc/node_modules/.pnpm/@medusajs+dashboard@2.19.0__5e1dbabfd9b4b66055a1a5bab424cbcb/node_modules/@medusajs/dashboard/dist/app.js` |
| 11.32 | `.runtime/cb018-template-validation-artifacts-20260901-204110/node_modules/.pnpm/@medusajs+dashboard@2.19.0__5e1dbabfd9b4b66055a1a5bab424cbcb/node_modules/@medusajs/dashboard/dist/app.js` |
| 11.15 | `.runtime/cb018-template-validation-artifacts-20260901-204110/node_modules/.pnpm/@esbuild+win32-x64@0.28.2/node_modules/@esbuild/win32-x64/esbuild.exe` |
| 11.15 | `02_demos/medusa-dtc/node_modules/.pnpm/@esbuild+win32-x64@0.28.2/node_modules/@esbuild/win32-x64/esbuild.exe` |
| 11.15 | `.runtime/cb018-template-validation-artifacts-20260901-204110/apps/storefront/.next/cache/webpack/edge-server-production/0.pack` |
| 11.15 | `.runtime/cb018-template-validation-artifacts-20260901-204110/.runtime/build-archive/20260901-203854-storefront-next/cache/webpack/edge-server-production/0.pack` |
| 11.15 | `.runtime/cb018-template-validation-artifacts-20260901-204110/.runtime/build-archive/20260901-203256-storefront-next/cache/webpack/edge-server-production/0.pack` |
| 9.15 | `02_demos/medusa-dtc/apps/storefront/.next/cache/webpack/edge-server-production/1.pack` |
| 9.06 | `02_demos/spree-demo/apps/storefront/node_modules/.pnpm/lightningcss-win32-x64-msvc@1.32.0/node_modules/lightningcss-win32-x64-msvc/lightningcss.win32-x64-msvc.node` |
| 8.82 | `02_demos/medusa-dtc/apps/backend/node_modules/.vite/deps/chunk-DAGV47RC.js.map` |
| 8.69 | `.runtime/cb018-template-validation-artifacts-20260901-204110/node_modules/.pnpm/typescript@5.9.3/node_modules/typescript/lib/typescript.js` |
| 8.69 | `02_demos/spree-demo/apps/storefront/node_modules/.pnpm/typescript@5.9.3/node_modules/typescript/lib/typescript.js` |
| 8.69 | `02_demos/medusa-dtc/node_modules/.pnpm/typescript@5.9.3/node_modules/typescript/lib/typescript.js` |
| 8.65 | `02_demos/spree-demo/apps/storefront/node_modules/.pnpm/@ts-morph+common@0.27.0/node_modules/@ts-morph/common/dist/typescript.js` |
| 8.49 | `.tooling/pnpm-10.11.1/node_modules/pnpm/dist/pnpm.cjs` |

## Top 50 directories

| Size (MB) | Directory |
|---:|---|
| 2,162.32 | `02_demos` |
| 1,825.23 | `.runtime` |
| 1,825.12 | `.runtime/cb018-template-validation-artifacts-20260901-204110` |
| 1,305.24 | `02_demos/medusa-dtc` |
| 880.69 | `.runtime/cb018-template-validation-artifacts-20260901-204110/node_modules` |
| 880.56 | `02_demos/medusa-dtc/node_modules` |
| 880.55 | `.runtime/cb018-template-validation-artifacts-20260901-204110/node_modules/.pnpm` |
| 880.44 | `02_demos/medusa-dtc/node_modules/.pnpm` |
| 857.07 | `02_demos/spree-demo` |
| 851.93 | `02_demos/spree-demo/apps` |
| 851.93 | `02_demos/spree-demo/apps/storefront` |
| 759.25 | `02_demos/spree-demo/apps/storefront/node_modules` |
| 759.14 | `02_demos/spree-demo/apps/storefront/node_modules/.pnpm` |
| 632.12 | `.runtime/cb018-template-validation-artifacts-20260901-204110/.runtime` |
| 632.11 | `.runtime/cb018-template-validation-artifacts-20260901-204110/.runtime/build-archive` |
| 424.05 | `02_demos/medusa-dtc/apps` |
| 368.73 | `02_demos/medusa-dtc/apps/storefront` |
| 367.24 | `02_demos/medusa-dtc/apps/storefront/.next` |
| 358.86 | `02_demos/medusa-dtc/apps/storefront/.next/cache` |
| 358.15 | `02_demos/medusa-dtc/apps/storefront/.next/cache/webpack` |
| 312.32 | `.runtime/cb018-template-validation-artifacts-20260901-204110/apps` |
| 304.08 | `.runtime/cb018-template-validation-artifacts-20260901-204110/.runtime/build-archive/20260901-203854-storefront-next` |
| 304.04 | `.runtime/cb018-template-validation-artifacts-20260901-204110/apps/storefront` |
| 303.99 | `.runtime/cb018-template-validation-artifacts-20260901-204110/apps/storefront/.next` |
| 302.82 | `.runtime/cb018-template-validation-artifacts-20260901-204110/.runtime/build-archive/20260901-203256-storefront-next` |
| 295.60 | `.runtime/cb018-template-validation-artifacts-20260901-204110/.runtime/build-archive/20260901-203854-storefront-next/cache` |
| 295.51 | `.runtime/cb018-template-validation-artifacts-20260901-204110/apps/storefront/.next/cache` |
| 295.29 | `.runtime/cb018-template-validation-artifacts-20260901-204110/.runtime/build-archive/20260901-203854-storefront-next/cache/webpack` |
| 295.29 | `.runtime/cb018-template-validation-artifacts-20260901-204110/.runtime/build-archive/20260901-203256-storefront-next/cache/webpack` |
| 295.29 | `.runtime/cb018-template-validation-artifacts-20260901-204110/apps/storefront/.next/cache/webpack` |
| 220.18 | `02_demos/medusa-dtc/apps/storefront/.next/cache/webpack/server-production` |
| 182.34 | `.runtime/cb018-template-validation-artifacts-20260901-204110/.runtime/build-archive/20260901-203854-storefront-next/cache/webpack/server-production` |
| 182.33 | `.runtime/cb018-template-validation-artifacts-20260901-204110/apps/storefront/.next/cache/webpack/server-production` |
| 182.33 | `.runtime/cb018-template-validation-artifacts-20260901-204110/.runtime/build-archive/20260901-203256-storefront-next/cache/webpack/server-production` |
| 148.11 | `02_demos/spree-demo/apps/storefront/node_modules/.pnpm/next@16.2.11_@babel+core@7._7feca4b3eef4ea260005b1d73df1ac61/node_modules` |
| 148.11 | `02_demos/spree-demo/apps/storefront/node_modules/.pnpm/next@16.2.11_@babel+core@7._7feca4b3eef4ea260005b1d73df1ac61` |
| 148.11 | `02_demos/spree-demo/apps/storefront/node_modules/.pnpm/next@16.2.11_@babel+core@7._7feca4b3eef4ea260005b1d73df1ac61/node_modules/next` |
| 148.07 | `02_demos/spree-demo/apps/storefront/node_modules/.pnpm/next@16.2.11_@babel+core@7._7feca4b3eef4ea260005b1d73df1ac61/node_modules/next/dist` |
| 141.51 | `02_demos/medusa-dtc/node_modules/.pnpm/@next+swc-win32-x64-msvc@15.5.21` |
| 141.51 | `.runtime/cb018-template-validation-artifacts-20260901-204110/node_modules/.pnpm/@next+swc-win32-x64-msvc@15.5.21/node_modules/@next/swc-win32-x64-msvc` |
| 141.51 | `.runtime/cb018-template-validation-artifacts-20260901-204110/node_modules/.pnpm/@next+swc-win32-x64-msvc@15.5.21/node_modules` |
| 141.51 | `.runtime/cb018-template-validation-artifacts-20260901-204110/node_modules/.pnpm/@next+swc-win32-x64-msvc@15.5.21` |
| 141.51 | `02_demos/medusa-dtc/node_modules/.pnpm/@next+swc-win32-x64-msvc@15.5.21/node_modules/@next/swc-win32-x64-msvc` |
| 141.51 | `02_demos/medusa-dtc/node_modules/.pnpm/@next+swc-win32-x64-msvc@15.5.21/node_modules/@next` |
| 141.51 | `02_demos/medusa-dtc/node_modules/.pnpm/@next+swc-win32-x64-msvc@15.5.21/node_modules` |
| 133.23 | `.runtime/cb018-template-validation-artifacts-20260901-204110/node_modules/.pnpm/next@15.5.21_@babel+core@7._f3bef59f8c7abdccc76e9fb3ef5dc39b/node_modules` |
| 133.23 | `.runtime/cb018-template-validation-artifacts-20260901-204110/node_modules/.pnpm/next@15.5.21_@babel+core@7._f3bef59f8c7abdccc76e9fb3ef5dc39b` |

## Initial cleanup candidates

The largest identified items are regenerable and are eligible for cleanup only
after the safety checks described in `REVIEW02_INCLUDE_EXCLUDE.md`:

- all candidate/runtime `node_modules` directories with matching manifests and
  lockfiles;
- candidate `.next` and `.medusa` build outputs;
- the root `.runtime` template-validation artifact archive and old runtime logs;
- the local `.tooling/pnpm-10.11.1` package-manager cache;
- superseded Review ZIPs moved to the sibling local archive, not deleted.

No source, evidence, provenance, database volume, order, or Git metadata is a
cleanup candidate.
