# CB-UI-DEV-002R Functional Regression

## Environment

- Storefront production runtime: `http://localhost:8000`.
- Backend production runtime: `http://localhost:9000`.
- Region: US.
- Currency: USD.
- Product source: live Medusa Store API.
- No new order was created in this UI-only correction pass.

## Results

| Check | Evidence | Result |
|---|---|---|
| `/us/store` loads | HTTP 200; four real product cards rendered | PASS |
| USD pricing | Live cards rendered `$10.00` and `$15.00` values | PASS |
| Product links | Live links resolved to `/us/products/sweatshirt`, `/shorts`, `/sweatpants` and `/t-shirt` | PASS |
| Search hit | `q=sweatshirt` returned the real `Medusa Sweatshirt` card | PASS |
| Search no-results | `q=zzzz-no-such-pawfectly-item` rendered the empty state and zero cards | PASS |
| Price sort | `Price: Low -> High` changed the URL to `sortBy=price_asc` and ordered `$10.00` before `$15.00` | PASS |
| Real option filter | Opened Options > Size, selected live `S`, and generated `optionValueIds=optval_01M1D8PY05ZC2FGRAVQVQKGEFP` through the existing query updater | PASS |
| Refinement disclosure | Sort/Options summaries are compact and closed by default; live Sort and Size/Color controls remain operable when opened | PASS |
| Mobile first fold | At 390 x 844 the two-column product grid begins below the compact toolbar | PASS |
| Horizontal overflow | Desktop and mobile layouts rendered without horizontal overflow, overlap or clipping | PASS |
| Browser console | Error-level browser logs during final route and interaction checks | `0` |

The option-value ID above is recorded as observed runtime evidence only; it is not hardcoded in the UI.

## Build and runtime regression

- `corepack pnpm@10.11.1 exec tsc --noEmit`: PASS.
- `corepack pnpm@10.11.1 build`: PASS.
- Next.js `15.5.21`; static generation `70/70`; exit code `0`.
- Production runtime smoke remained available for `/health`, `/us`, `/us/store`, a real PDP and `/us/cart`.
- Backend, payment, shipping, region/currency and cart semantics were not modified.

## Scope boundary

PDP implementation was not redesigned in CB-UI-DEV-002R. Cart and Checkout visuals were not changed. No backend or new search service was added.
