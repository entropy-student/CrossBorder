# CB-UI-FINAL-001 - Final QA Matrix

## Scope

- Target: `03_template/medusa-crossborder-base/`
- Runtime: Medusa backend from `.medusa/server`; Storefront `next start -p 8000`
- Database: existing local PostgreSQL on `127.0.0.1:54329`; no reset or volume mutation
- Browser checks: 1440, 1024, 768, and 390 CSS px
- Product source: live Medusa Store API; current seeded catalog contains four USD products

## Route and responsive matrix

| Area | `/us` | `/us/store` | `/us/products/sweatshirt` | `/us/cart` | `/us/checkout?step=address` |
|---|---:|---:|---:|---:|---:|
| 1440 route/content | PASS | PASS | PASS | PASS | PASS |
| 1024 route/content | PASS | PASS | PASS | PASS | PASS |
| 768 route/content | PASS | PASS | PASS | PASS | PASS |
| 390 route/content | PASS | PASS | PASS | PASS | PASS |
| Visible document horizontal overflow | 0 | 0 | 0 | 0 | 0 |
| Browser console error log | 0 | 0 | 0 | 0 | 0 |

Post-fix geometry measured `document.documentElement.scrollWidth == document.documentElement.clientWidth` for every route and viewport. Hidden `sr-only` labels may have their own intrinsic scroll width; these were excluded from visible-layout overflow checks.

## Feature gates

| Gate | Result | Evidence |
|---|---|---|
| Homepage | PASS | Final 1440/390 captures; live product links and USD prices |
| Collection/Search | PASS | Live four-product grid, query/sort/option plumbing preserved; no-result evidence retained from CB-UI-DEV-002R |
| PDP | PASS | Live product image, title, option groups, calculated USD price, availability state |
| Cart | PASS | Existing CB-UI-DEV-003 functional evidence; current empty state is honest |
| Mini Cart | PASS (historical) | Existing non-empty live Mini Cart evidence in CB-UI-DEV-003 |
| Checkout | PASS (historical) | Existing US/USD address, shipping, Manual/System Payment, review and order evidence in CB-UI-DEV-003 |
| Empty Cart | PASS | Current `/us/cart` empty state screenshot and route check |
| No Search Results | PASS (historical) | Existing live query/no-result regression in CB-UI-DEV-002R |
| Mobile sticky CTA | NOT APPLICABLE in current seed state | All current seeded variants report unavailable; no broken visible sticky CTA was present. Existing available-state behavior remains covered by prior evidence. |

## Runtime state

- Docker Desktop: running.
- Existing PostgreSQL container: healthy; image `postgres:16-alpine`.
- Backend `/health`: HTTP 200 `OK` via `curl.exe`.
- Storefront production server: ready on `http://localhost:8000`.
- No new order was created in CB-UI-FINAL-001.

## Result

`FINAL_ROUTE_QA=PASS`

`RESPONSIVE_GEOMETRY=PASS`

`CONSOLE_ERRORS=0`

