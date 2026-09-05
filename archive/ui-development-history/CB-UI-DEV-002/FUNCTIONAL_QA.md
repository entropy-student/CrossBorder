# CB-UI-DEV-002 Functional QA

Environment: Medusa Mother Template production runtime, `http://localhost:9000` backend and `http://localhost:8000` storefront, US region / USD context.

## Automated and browser checks

| Check | Evidence | Result |
|---|---|---|
| TypeScript | `corepack pnpm@10.11.1 exec tsc --noEmit` | PASS |
| Production storefront build | `corepack pnpm@10.11.1 build` in `apps/storefront`, Next `15.5.21`, `70/70` pages | PASS |
| Backend production runtime | Built `.medusa/server` started with `medusa start`; `/health` | HTTP 200 / PASS |
| Storefront production runtime | `next start -p 8000` | Ready / PASS |
| `/us` | Production route | HTTP 200 / PASS |
| `/us/store` | Real catalog route | HTTP 200, 4 real products / PASS |
| PDP | `/us/products/sweatshirt` | Product title, 2 real images, USD price, 4 real size values / PASS |
| PDP gallery | Clicked the second real thumbnail | Main image URL changed / PASS |
| Variant selection | Selected real `S` option | URL included real `v_id`; stock became available; Add to Bag enabled / PASS |
| Invalid variant guard | Opened PDP with a nonexistent `v_id` | Route cleared the invalid selection; purchase remained disabled and unavailable / PASS |
| Add to Bag | Existing `addToCart` action | Navigation changed from `Bag 0` to `Bag 1` after refresh / PASS |
| Cart route | `/us/cart` | Content rendered; HTTP 200 / PASS |
| Search result | `/us/store?q=sweatshirt` | 1 real result: `Medusa Sweatshirt` / PASS |
| Search no-result | `/us/store?q=zzzz-no-such-pawfectly-item` | Empty state rendered, 0 product cards / PASS |
| Sort | `/us/store?sortBy=price_asc` | Active label `Price: Low -> High`; prices `$10.00, $15.00, $15.00, $15.00` / PASS |
| Option filter | Clicked real Size `S` option | URL added real `optionValueIds` and button became selected / PASS |
| Product links | Catalog cards | 4 links reached `/us/products/<handle>` / PASS |
| US/USD | Store API and rendered UI | Region currency `usd`; PDP/catalog prices rendered with `$` / PASS |
| Mobile PDP | 390px viewport | Responsive hero, selected option, USD price and mobile purchase state rendered / PASS |
| Mobile catalog | 390px viewport | Responsive hero, search/refinement stack and two-column grid rendered / PASS |
| Browser console | Tested PDP, catalog, search and cart routes | `0` error-level logs / PASS |

## Scope boundary

Checkout and Cart visual redesign were not performed. Existing Cart/Checkout routes were only smoke-checked for regression as required by this slice.
