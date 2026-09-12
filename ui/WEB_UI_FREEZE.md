# Pawfectly Home Web UI Freeze — Historical Technical Baseline

Historical result: `WEB_UI_FREEZE=PASS`  
Current Owner visual acceptance: `REOPENED / NOT ACCEPTED` (2026-09-12)

## Meaning of the historical PASS

The earlier PASS recorded route coverage, breakpoint checks, commerce-boundary preservation and visual QA against the then-approved Figma source. It must **not** be interpreted as current Owner approval of the visual quality.

The Owner has since stated that the implemented customer-facing UI is materially below the earlier AI-generated reference imagery and requires a new design-system / golden-screen rebase before final launch polish.

## Historical source of truth

`FIGMA_SOURCE_OF_TRUTH=https://www.figma.com/design/pnt82TByaLXSRlHhiQdgLo`

Approved historical sources: 01B, 03D, 04D, 05B, 06B, 07B, 08C, 10, and 11.

These remain evidence of the previous design pass, not the final design direction.

## Implemented routes

- `/{countryCode}` - Homepage (`/us` verified)
- `/{countryCode}/store` - Collection/Search (`/us/store` verified)
- `/{countryCode}/products/{handle}` - PDP (`/us/products/sweatshirt` verified)
- `/{countryCode}/cart` - Cart (`/us/cart` verified)
- `/{countryCode}/checkout` - Existing Medusa Checkout (`/us/checkout` verified)

## Supported historical breakpoints

`1440`, `1024`, `768`, and `390` CSS px were checked. Visible document horizontal overflow was zero at each breakpoint on the core routes during the historical QA pass.

## Current design direction

Before broad storefront rewrites:

1. build a small reference set from the strongest AI-generated / image references and current implementation screenshots;
2. define 2–3 canonical golden screens (recommended: Home, PDP, Checkout/Cart shell);
3. extract reusable design tokens, layout grammar, typography, spacing, component states, image slots and responsive rules;
4. freeze the reusable design system in Figma plus code-readable specification files;
5. produce an implementation map against the existing Next.js/Medusa storefront;
6. reconcile the checkout golden screen with the future external payment/fulfillment integration constraints before final code freeze.

High-capability design/reasoning models may be used for the high-leverage reference/spec/review passes. Routine component implementation should not consume frontier-model quota once the system is frozen.

## Asset replacement contract

`ASSET/*` slots remain neutral until approved lifestyle assets are supplied. Product images, titles, prices, variants, availability, currency and cart data remain Medusa-driven unless a later integration Gate changes the source-of-truth contract.

## Commerce boundary

The visual redesign may replace the storefront presentation layer substantially, but must not silently redefine cart, totals, inventory, order, shipping, payment or fulfillment ownership. Those boundaries are established separately through architecture/integration Gates.

## Known historical constraints

- `KNOWN_P2_CONTENT_DEBT=Dog/Cat/Collections/New arrivals/Journal remain safe generic destinations until real taxonomy/content exists.`
- `CSS_DEBT_AFTER_CLEANUP=12 !important declarations remained in the historical implementation; mixed legacy stylesheet debt was deferred.`
- historical checkout retained the existing Medusa Checkout structure;
- real product data/assets were not final.

## Change policy

The former rule “update the approved Figma source first” is superseded by the new rebase sequence above. A new Figma/design-system freeze is required before the redesigned UI is considered accepted.
