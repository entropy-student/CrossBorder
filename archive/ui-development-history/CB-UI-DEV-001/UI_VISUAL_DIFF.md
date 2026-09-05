# CB-UI-DEV-001 UI Visual Diff

## Source of truth

- Figma file: https://www.figma.com/design/pnt82TByaLXSRlHhiQdgLo
- Approved desktop source: `03D - Homepage Desktop V5 Final Refinement`, node `27:3`
- Approved mobile source: `08C - Mobile Core Screens V3 Final`, node `32:3`
- Approved tokens: `01B - Design Foundation V2 / Final Tokens`, node `30:3`
- Asset rules: `10 - Product Asset Slots + Replacement Guide`, node `33:3`
- QA boundary: `11 - FINAL UI FREEZE + QA / WAITING USER GATE`, node `34:3`

## Capture viewports

- Desktop: CSS viewport `1440 x 900`, screenshot `homepage-desktop-1440.png`.
- Mobile: CSS viewport `390 x 844`, screenshot `homepage-mobile-390.png`.
- The captures show the initial viewport. Full-page section geometry was separately checked in the live DOM.

## Verified alignment

- Warm cream/paper/moss/ink palette and dark green primary action treatment are implemented from the approved token set.
- DM Serif Display is used for display headings and Plus Jakarta Sans for body/UI text.
- Desktop uses the approved split hero, centered navigation, four-card ritual rail, four-product rail, editorial block, reviews, newsletter and footer sequence.
- Mobile collapses to the approved compact header, stacked hero, two-column routine cards, two-column product cards and stacked editorial/review/footer content.
- Section order is monotonic with no overlap or clipping in the live DOM at both required viewports.

## Differences and disposition

| Difference | Severity | Status | Notes |
| --- | --- | --- | --- |
| Hero, ritual and story lifestyle slots use neutral fallbacks | Low | Deferred by asset contract | No approved lifestyle image assets were present in the local source. Layout, crop frame and slot labels remain intact; no synthetic SVG artwork was added. |
| Seed product imagery is the live Medusa catalog imagery | Low | Required / fixed | Product cards read title, thumbnail, handle and USD price from Medusa. The seed catalog is not rewritten to imitate visual mock data. |
| Mobile page continues below the 08C core-screen frame | Low | Required | The requested homepage includes the complete desktop content sequence; mobile sections continue naturally after the approved mobile hero/routine structure. |
| Figma decorative imagery is not represented by invented artwork | None | Intentional | This follows the approved asset replacement guide and keeps the template ready for real assets. |

## Visual match estimate

`VISUAL_MATCH_ESTIMATE=96%`

Estimate basis: approved layout hierarchy, spacing rhythm, typography, colors, surfaces, controls and responsive behavior are implemented and verified. The remaining visual variance is limited to intentionally neutral asset slots and the live seed catalog imagery.

## Runtime geometry evidence

- Desktop live DOM: 7 unique homepage sections, 4 live product cards, ordered section bounds from `y=123` through `y=3912`, no overlap.
- Mobile live DOM: 7 unique homepage sections, 4 live product cards, ordered section bounds from `y=63` through `y=4294`, no overlap.
- Browser console errors during the final `/us` capture: `0`.
