# CB-UI-DEV-002R Collection / Search Visual Diff

## Reference

- Figma file: https://www.figma.com/design/pnt82TByaLXSRlHhiQdgLo
- Desktop source: `05B - Collection + Search Desktop V2 Premium`, node `30:102`.
- Mobile source: `08C - Mobile Core Screens V3 Final`, Collection node `32:32`.
- Shared foundation: `01B - Design Foundation V2 / Final Tokens`.

## Captures

| Surface | Viewport | Evidence | Result |
|---|---:|---|---|
| Collection / Search | 1440 x 900 | `collection-desktop-1440-r.png` | PASS - the compact toolbar is visible below the cream hero and the first row of live product cards begins in the first fold. |
| Collection / Search | 390 x 844 | `collection-mobile-390-r.png` | PASS - search and the two compact refinement disclosures are visible without permanently expanding Sort, Size or Color; the two-column product grid begins in the first fold. |

## Corrections applied

| Difference from CB-UI-DEV-002 | Severity | Status | Disposition |
|---|---|---|---|
| Desktop hero and toolbar pushed the product grid too far down. | High | Fixed | Reduced only the Collection hero/content rhythm and moved refinement controls into a compact bordered bar. |
| Sort and all live product options were expanded in the mobile first fold. | High | Fixed | Added accessible native disclosures. Sort and Options are closed by default; the existing Radix Size/Color accordions remain available after opening Options. |
| The visible control did not communicate the current refinement state compactly. | Medium | Fixed | Summary labels show the current sort and selected option count while preserving the existing URL query updates. |

## Intentional differences

- The verified local Medusa seed has four products, while the Figma frame illustrates a larger catalog. The grid remains data-driven and does not invent additional cards.
- Search, price sort and option values continue to come from the existing Store API/data layer. No Figma sample category, pet metadata or price was added.

## QA estimate

`VISUAL_MATCH_ESTIMATE=95%`

The estimate covers the approved cream/ink/green palette, DM Serif Display and Plus Jakarta Sans typography, container rhythm, compact refinement density, card proportions, responsive two-column mobile grid, borders, radii and first-fold hierarchy. Remaining differences are limited to live catalog size/content, not alternate commerce behavior or a new visual direction.

