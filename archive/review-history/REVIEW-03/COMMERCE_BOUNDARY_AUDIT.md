# Commerce Boundary Audit

## Boundary rule

The UI may render and invoke the existing Medusa Storefront data/actions. It must not reimplement Region, Currency, Pricing, Product, Variant, Inventory, Cart, Shipping, Payment, or Checkout semantics.

## UI files that touch commerce data or actions

| File / area | Existing touchpoint | Boundary assessment |
| --- | --- | --- |
| `src/app/[countryCode]/(main)/page.tsx` | Resolves localized country and Region before rendering Homepage | PASS; existing region routing remains authoritative |
| `src/app/[countryCode]/(main)/layout.tsx` | Supplies resolved region/currency to shared navigation | PASS; presentation only |
| `src/app/[countryCode]/(main)/store/page.tsx` | Reads `q`, `sortBy`, and `optionValueIds`; passes them to Store template | PASS; existing query contract |
| `src/app/[countryCode]/(main)/collections/[handle]/page.tsx` | Resolves Region and collection query context | PASS; existing Store API path |
| `src/app/[countryCode]/(main)/categories/[...category]/page.tsx` | Existing category query path and refinement usage | PASS; not redesigned |
| `src/app/[countryCode]/(main)/products/[handle]/page.tsx` | Reads product, Region, images, variants, and localized product route | PASS; live Medusa product data |
| `modules/home/templates/homepage.tsx` | `listProducts` by resolved `region.id`; renders title, thumbnail, handle, calculated price | PASS; no catalog/price/inventory literals |
| `modules/products/templates/index.tsx` | Receives live product/Region; renders product fields and delegates actions | PASS; no commerce semantics reimplemented |
| `modules/products/components/product-actions/index.tsx` | Existing `addToCart`, variant/option selection, inventory availability, ProductPrice | PASS; existing action and inventory semantics retained |
| `modules/products/components/product-actions/mobile-actions.tsx` | Existing mobile price/variant/add-to-cart action surface | PASS; no new cart API |
| `modules/products/components/product-actions/option-select.tsx` | Existing variant option selection | PASS; renders actual option data |
| `modules/products/components/product-price/index.tsx` | Existing `getProductPrice` display path | PASS; Region-aware calculated price remains data driven |
| `modules/products/components/product-preview/index.tsx` | Existing localized product link, thumbnail, calculated price | PASS |
| `modules/products/components/related-products/index.tsx` | Existing Region/product listing for related products | PASS |
| `modules/store/templates/paginated-products.tsx` | Existing `listProductsWithSort`, Region, `q`, category/collection/product IDs, option values | PASS |
| `modules/store/components/catalog-search.tsx` | GET form writes existing `q` parameter | PASS; no search backend added |
| `modules/store/components/refinement-list/index.tsx` | Preserves URL updates for sort and `optionValueIds` | PASS; compact disclosure is presentational |
| `modules/store/components/refinement-list/options-picker/index.tsx` | Reads existing `/store/product-options`; sends selected IDs to existing query updater | PASS; current runtime exposed S/M/L/XL and selecting live S wrote the current `optionValueIds` query. `Size(0)` / `Color(0)` is selectedCount, not available-value count. |
| `modules/store/components/refinement-list/sort-products/index.tsx` | Writes existing `sortBy` parameter | PASS |
| `modules/layout/components/cart-dropdown/index.tsx` | Existing cart retrieval and cart link; UI label changed to Bag in prior UI slice | PASS; cart semantics not redesigned |
| `src/app/[countryCode]/(main)/cart/page.tsx` and `modules/cart/**` | Existing cart route/components | PASS; only regression-smoked, not visually redesigned |
| `src/app/[countryCode]/(checkout)/**` and `modules/checkout/**` | Existing checkout route/components | PASS; not changed or redesigned |

## Explicit non-changes

- No backend source files were changed.
- No payment provider, shipping provider, Region, Currency, price, inventory, or checkout workflow was added or replaced.
- No new search backend was created.
- No product title, handle, image, calculated price, variant value, or stock quantity was written as UI mock commerce data.
- The closure changes are confined to storefront presentation/data-consumer code and do not touch package locks.
- No new order was created during this task.

## Data-honesty closure

- Active Homepage, catalog card, and PDP presentation no longer render fabricated star scores, named testimonials, Verified buyer labels, or unsupported shipping/returns promises without a live source/configuration.
- The current production runtime verified the existing option endpoint and query contract: Size displayed real S/M/L/XL values; selecting live S changed selectedCount from 0 to 1 and wrote a non-empty current `optionValueIds` query. The prior `(0)` interpretation is corrected.
- Live Region/USD product and price data, variant selection, Add to Bag, search, sort, and cart behavior remain on the existing Store API/data layer.
