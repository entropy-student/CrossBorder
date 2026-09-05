# Design Consistency Matrix

## Frozen Figma references

| Area | Approved Figma source | Implementation evidence | Result |
| --- | --- | --- | --- |
| Foundation / tokens | 01B - Design Foundation V2 / Final Tokens | `apps/storefront/src/styles/globals.css:46-58` token layer; `UI_IMPLEMENTATION_BASELINE.md` | PASS with stylesheet debt |
| Homepage desktop | 03D - Homepage Desktop V5 Final Refinement, node `27:3` | `modules/home/templates/homepage.tsx`; CB-UI-DEV-001 desktop evidence | PASS; historical match estimate 96% |
| PDP desktop | 04D - PDP Desktop V4 Final Refinement, node `27:165` | `modules/products/templates/index.tsx`; CB-UI-DEV-002 evidence | PASS; historical match estimate 95% |
| Collection desktop | 05B - Collection + Search Desktop V2 Premium, node `30:102` | `modules/store/templates/index.tsx`, `modules/collections/templates/index.tsx`; CB-UI-DEV-002R evidence | PASS; historical match estimate 95% |
| Mobile core | 08C - Mobile Core Screens V3 Final, Homepage node `32:3`, Collection node `32:32`, PDP node `32:68` | Responsive runtime audit at 390 CSS px | PASS with 768 boundary exception outside mobile breakpoint |
| Asset slots | 10 - Product Asset Slots + Replacement Guide, node `33:3` | Live `product.thumbnail` / image usage and neutral editorial fallback slots | PASS |
| UI freeze / QA boundary | 11 - FINAL UI FREEZE + QA / WAITING USER GATE, node `34:3` | `UI_IMPLEMENTATION_BASELINE.md`; no Cart/Checkout redesign | PASS |

## Consistency checks

| Contract | Observed implementation | Status | Remaining difference / disposition |
| --- | --- | --- | --- |
| Typography | Body/UI computed as `Plus Jakarta Sans`; display heading computed as `DM Serif Display` | PASS | Local font files are used so build does not require a font fetch |
| Color | Root Pawfectly tokens include ink, primary/deep green, moss, paper, cream, sand, border, muted, and gold | PASS with P2 debt | Legacy/direct literals remain elsewhere in the 2,436-line stylesheet; no refactor in this task |
| Spacing / rhythm | Shared `.ph-container`, page section classes, and compact collection refinement region | PASS at 1440/1024/390 | 768 header overflow is recorded separately |
| Radius / borders / surfaces | Tokenized card/media radii and cream/paper/moss surfaces are used across audited slices | PASS | Some legacy starter classes remain in the same stylesheet |
| Desktop width | `--ph-container: 1440px`; 1440 CSS viewport showed content bounded to 1,440px | PASS | At 768 the nav action group exceeds the client width by ~18px |
| Mobile behavior | Mobile homepage/PDP/collection collapse into approved stacked/two-column structures; collection uses native disclosures | PASS at 390 | Product grid begins at y≈557 on Collection; no horizontal overflow at 390 |
| CTA treatment | Shared `.ph-button` class family and existing localized links preserve navigation | PASS | No separate shared React Button component; recorded in reuse audit |
| Product cards | Shared `ProductPreview` powers catalog/related product cards; Homepage has a parallel data-driven card for its distinct rail | PASS | Parallel markup is limited but worth future consolidation review |
| Assets | Medusa thumbnail/image is preferred; missing editorial assets render neutral labeled slots | PASS | Live seed imagery differs from Figma sample imagery by approved asset contract |
| Data rendering | Titles, thumbnails, calculated prices, variants, query results and links are sourced from Medusa | PASS | Homepage review/rating marketing claims are not live commerce data; see debt register |
| First-fold hierarchy | Collection desktop grid top y≈544 at 1440; mobile grid top y≈557.3 at 390 | PASS | Meets prior CB-UI-DEV-002R first-fold evidence |

## Current runtime measurements

| CSS viewport | Homepage | PDP | Collection | Horizontal overflow |
| ---: | --- | --- | --- | --- |
| 1440 x 900 | 4 live product cards; ordered sections | Gallery/purchase/detail sections ordered | 4 cards begin at y≈544 | None observed |
| 1024 x 900 | 4 live product cards; ordered sections | Two-column PDP remains ordered | 4 cards begin at y≈544 | None observed |
| 768 x 900 | Two-column content remains ordered | Content remains ordered | 4-card grid begins at y≈544 | P1: header action group extends to x≈786 against 768px client width |
| 390 x 844 | Two-column product rail; stacked sections | Mobile gallery, purchase panel, fixed mobile action region | Two-column grid begins at y≈557.3 | None observed |

## Conclusion

The implementation follows the frozen visual direction and token/font contract. The matrix is not a waiver for the recorded P1/P2 findings; those remain open for Reviewer decision.
