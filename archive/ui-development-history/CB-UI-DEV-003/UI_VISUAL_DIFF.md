# CB-UI-DEV-003 UI Visual Diff

## Source of truth

- Figma: https://www.figma.com/design/pnt82TByaLXSRlHhiQdgLo
- Approved references: 06B Cart + Mini Cart Desktop V2 Premium, 07B Checkout Desktop V2 Premium, 08C Mobile Core Screens V3 Final, 10 Asset Slots + Replacement Guide, 11 UI Freeze.
- Runtime: Medusa Mother Template production storefront at `http://localhost:8000`.

## Captures

The browser viewport was explicitly set to the requested CSS viewport. The browser scrollbar reduces the raster width by 15px in the saved PNGs; the viewport contract remains 1440x900 and 390x844.

| Surface | Requested viewport | Evidence | Result |
|---|---:|---|---|
| Cart | 1440x900 | `cart-desktop-1440.png` | PASS |
| Cart | 390x844 | `cart-mobile-390.png` | PASS |
| Mini Cart / mobile bag fallback | 1440x900 | `mini-cart-desktop-1440.png` | PASS |
| Mini Cart / mobile bag fallback | 390x844 | `mini-cart-mobile-390.png` | PASS |
| Checkout address | 1440x900 | `checkout-address-desktop-1440.png` | PASS |
| Checkout payment | 1440x900 | `checkout-payment-desktop-1440.png` | PASS |
| Checkout review | 1440x900 | `checkout-review-desktop-1440.png` | PASS |
| Checkout address | 390x844 | `checkout-address-mobile-390.png` | PASS |
| Checkout review | 390x844 | `checkout-review-mobile-390.png` | PASS |

## Match assessment

Estimated scoped visual match: **95%**.

The Cart, Mini Cart, and Checkout presentation layer follows the approved cream/ink/green surfaces, DM Serif Display headings, Plus Jakarta Sans UI text, compact borders/radii, summary card treatment, responsive single-column mobile flow, and live product imagery. Remaining differences are data-driven or starter-runtime differences rather than a layout redesign: seeded product names/prices, the starter account prompt, the starter payment-detail placeholder for Manual Payment, and the intentional mobile route-based bag fallback because the existing hover Popover is hidden at the touch breakpoint.

## Remaining differences

| Difference | Severity | Status | Reason |
|---|---|---|---|
| Seeded product copy and USD values differ from Figma examples | P3 | Deferred | UI remains data-driven; examples are not commerce fixtures. |
| Manual Payment displays the existing test-provider detail placeholder | P3 | Accepted | Payment semantics and provider contract were not changed. |
| Mobile Mini Cart uses the existing full Cart route rather than a hover popover | P2 | Accepted/deferred | Hover popovers are not available on the touch breakpoint; live bag access remains available and functional at `/us/cart`. |
| Account prompt remains in the starter flow | P3 | Accepted | Existing authentication surface; no account redesign was requested. |

No overlap, clipping, or document horizontal overflow was observed at the tested viewports.
