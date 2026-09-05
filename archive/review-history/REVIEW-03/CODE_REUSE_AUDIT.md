# Code Reuse and Structure Audit

## Scope

Read-only audit of the Homepage, PDP, Collection / Store / Search, layout, and shared stylesheet. No refactor was made.

## Reuse observed

| Pattern | Shared implementation | Consumers | Assessment |
| --- | --- | --- | --- |
| Product card | `modules/products/components/product-preview/index.tsx` | Store grid, related products, collection/category paths | Good reuse; remains Medusa-data driven |
| Homepage product rail | `modules/home/templates/homepage.tsx` local `ProductCard` | Homepage only | Intentional parallel card because its rail has a different editorial frame; future consolidation opportunity |
| Search | `modules/store/components/catalog-search.tsx` | Store and Collection templates | Shared and query-semantic preserving |
| Refinement | `modules/store/components/refinement-list/index.tsx` | Store, Collection, Category templates | Shared; compact disclosure is presentation-only around existing query updates |
| Option filter | `.../refinement-list/options-picker/index.tsx` | Refinement list | Uses live `/store/product-options` and `optionValueIds` URL state |
| Sort | `.../refinement-list/sort-products/index.tsx` | Refinement list | Uses existing `sortBy` query contract |
| Price | `modules/products/components/product-price/index.tsx` and `getProductPrice` | PDP action panel and product data flow | Existing price calculation path is preserved |
| Container | `.ph-container` in `styles/globals.css` | Navigation, page sections, footer, PDP, catalog | Shared CSS primitive |
| CTA styling | `.ph-button`, `.ph-button-primary`, `.ph-button-secondary` | Homepage links, newsletter control, catalog controls | Shared CSS class family; no shared React Button primitive |
| Typography | Global body/display declarations plus `.ph-*` headings | Homepage, PDP, catalog, layout | Shared token/font mechanism, with legacy declarations also present |

## Duplication / maintenance observations

1. Homepage has local `PrimaryLink`, `SecondaryLink`, `ArrowIsland`, `RitualCard`, and `ProductCard` implementations. They are reused within that page, but buttons/links are not shared as React primitives with PDP/catalog.
2. `ProductPreview` and Homepage `ProductCard` both render product title, image, rating shell, price, and link, but their layout contracts differ. This is a P3 consolidation opportunity, not an implementation defect.
3. Header, footer, PDP, catalog, and legacy starter styles coexist in one `globals.css` file. This makes ownership less obvious and raises regression risk for future UI work.
4. The store data path is shared: `store/page.tsx`, Collection template, Category template, and `paginated-products.tsx` pass search/sort/option state into the existing Medusa helper rather than duplicating query logic.

## CSS audit

- `globals.css`: 2,436 lines.
- `!important`: 19 declarations. Most are targeted overrides for starter/PDP/catalog media or reduced motion; they are not scattered across application source, but they are a specificity maintenance risk.
- Responsive media blocks: 6 total, including 1023px, 767px, and reduced-motion handling.
- Tailwind breakpoints remain defined separately (`2xsmall=320px`, `xsmall=512px`, `small=1024px`, `medium=1280px`, `large=1440px`, etc.). This is compatible with the source, but breakpoint ownership is split between utility classes and CSS media blocks.
- Direct hex literals exist outside the root Pawfectly token declarations, including older/starter styles and browser autofill rules. This is recorded as P2 technical debt; no color refactor was performed.
- Brittle selectors observed include `.ph-catalog-controls .flex.flex-col`, `.ph-catalog-controls > div > div:first-child`, `.ph-pdp-rating > span:first-child`, and `.ph-pdp-related .product-page-constraint > div:first-child`.

## Dead-code check

- `ProductOnboardingCta` appears to have only its definition and no consumer in the audited source tree. It contains a legacy localhost onboarding URL. Classified P3; not deleted because this task is audit-only.
- Other starter components and classes were not labeled dead without a full build-time usage graph. No source was deleted.

## Conclusion

Shared data and refinement components are in place. The main reuse debt is presentational: a large mixed stylesheet, no shared React-level Button primitive, and a deliberate but parallel Homepage product card. These do not justify a Review-03 refactor under the current scope.
