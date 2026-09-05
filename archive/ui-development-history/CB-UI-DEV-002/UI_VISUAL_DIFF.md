# CB-UI-DEV-002 UI Visual Diff

## Reference

- Figma file: https://www.figma.com/design/pnt82TByaLXSRlHhiQdgLo
- PDP reference: `04D - PDP Desktop V4 Final Refinement`, node `27:165`; mobile PDP in `08C`, node `32:68`.
- Collection reference: `05B - Collection + Search Desktop V2 Premium`, node `30:102`; mobile Collection in `08C`, node `32:32`.
- Shared tokens and typography: `01B - Design Foundation V2 / Final Tokens`.

## Captures

| Surface | Viewport | Evidence | Result |
|---|---:|---|---|
| PDP | 1440 x 900 | `pdp-desktop-1440.png` | PASS - hero gallery, purchase panel, hierarchy and token usage align with the approved desktop composition. |
| PDP | 390 x 844 | `pdp-mobile-390.png` | PASS - single-column product hero, real option pills and mobile rhythm align with the approved mobile structure. |
| Collection / Search | 1440 x 900 | `collection-desktop-1440.png` | PASS - collection hero, search, refinement rail and four-column catalog grid align with the approved desktop composition. |
| Collection / Search | 390 x 844 | `collection-mobile-390.png` | PASS - compact hero, search/refinement stack and two-column grid align with the approved mobile structure. |

## Remaining differences

| Difference | Severity | Status | Disposition |
|---|---|---|---|
| The current Medusa seed exposes two product images for the PDP smoke product while the Figma asset plan shows four gallery slots. | Low | Deferred | The gallery remains dynamic and uses every real Medusa image; no duplicate or invented asset was added. |
| The frozen asset contract does not provide a real lifestyle image for this seed. | Low | Deferred | A neutral, labeled fallback preserves the approved container ratio until an approved asset is supplied. |
| Medusa has no review records in the verified local data. | Low | Fixed | The rating area is an honest empty presentation shell with no invented score, count or review quote. |
| Catalog copy is editorial UI copy; product title, price, image and option values remain live Medusa fields. | Informational | Fixed | No commerce metadata was fabricated. |

## QA estimate

`VISUAL_MATCH_ESTIMATE=95%`

The estimate covers the approved layout geometry, responsive structure, tokens, typography, CTA hierarchy, borders, radii and spacing. The remaining low-severity differences are data/asset availability constraints documented above, not alternate design decisions.

