# UI Implementation Baseline

This is an implementation boundary for the selected Medusa storefront in the
Mother Template. It is not a visual redesign or a brand specification. No
formal UI redesign was performed in CB-DEV-018.

Authoritative UI implementation target:
`03_template/medusa-crossborder-base/apps/storefront`.

`02_demos/medusa-dtc/apps/storefront` remains historical candidate evidence
only and is not the formal UI implementation target.

## Current page map

The storefront is under `03_template/medusa-crossborder-base/apps/storefront`
and uses a country-code segment. The current US entry points are `/us` and
`/us/store`.

| Area | Route pattern | Implementation location |
|---|---|---|
| Home | `/{countryCode}` | `src/app/[countryCode]/(main)/page.tsx` |
| Store listing | `/{countryCode}/store` | `src/app/[countryCode]/(main)/store/page.tsx` |
| Product detail | `/{countryCode}/products/{handle}` | `src/app/[countryCode]/(main)/products/[handle]/page.tsx` |
| Category listing | `/{countryCode}/categories/{...category}` | `src/app/[countryCode]/(main)/categories/[...category]/page.tsx` |
| Collection listing | `/{countryCode}/collections/{handle}` | `src/app/[countryCode]/(main)/collections/[handle]/page.tsx` |
| Cart | `/{countryCode}/cart` | `src/app/[countryCode]/(main)/cart/page.tsx` |
| Checkout | `/{countryCode}/checkout` | `src/app/[countryCode]/(checkout)/checkout/page.tsx` |
| Order confirmation | `/{countryCode}/order/{id}/confirmed` | `src/app/[countryCode]/(main)/order/[id]/confirmed/page.tsx` |
| Account | `/{countryCode}/account` | `src/app/[countryCode]/(main)/account/**` |
| Account addresses | `/{countryCode}/account/addresses` | `src/app/[countryCode]/(main)/account/@dashboard/addresses/page.tsx` |
| Account orders | `/{countryCode}/account/orders` | `src/app/[countryCode]/(main)/account/@dashboard/orders/page.tsx` |
| Account order detail | `/{countryCode}/account/orders/details/{id}` | `src/app/[countryCode]/(main)/account/@dashboard/orders/details/[id]/page.tsx` |
| Account profile | `/{countryCode}/account/profile` | `src/app/[countryCode]/(main)/account/@dashboard/profile/page.tsx` |

`src/middleware.ts` owns localized routing and region/country handling. The
checkout route has its own layout under `(checkout)`; the main storefront uses
the `(main)` layout.

## Reusable component areas

- `src/modules/layout`: navigation, footer, side menu, country/language
  selectors, cart button and cart dropdown.
- `src/modules/home`: hero and featured-product rails.
- `src/modules/store`: product grid, filtering, sorting and pagination.
- `src/modules/products`: product templates, gallery, tabs, price and actions.
- `src/modules/cart`: cart templates, line items, summary and totals.
- `src/modules/checkout`: checkout form and summary.
- `src/modules/order`: confirmation, order details, shipping and payment views.
- `src/modules/account`: account layout, profile, addresses and order views.
- `src/modules/common`: links, forms, controls, icons, totals and shared UI.

## Styling and design-system entry points

- `tailwind.config.js` is the Tailwind configuration entry point.
- `postcss.config.js` is the PostCSS entry point.
- `src/styles/globals.css` is the global stylesheet entry point.
- Shared visual primitives are grouped under `src/modules/common/components`
  and icons under `src/modules/common/icons`.

## Future UI Agent boundary

UI work may normally modify storefront layout, page composition, styling,
Tailwind configuration, global styles, and presentational components in
`apps/storefront/src/modules/**` and the route-level page/layout files. Changes
must preserve the existing route contract and production build.

UI work must not casually change:

- Medusa backend modules, migrations, seed data or cross-border augmentation.
- Store API data access and pricing/currency calculations.
- Cart, checkout, payment, shipping or order-completion behavior.
- `src/middleware.ts` region/country routing semantics.
- Required environment variable names or backend/storefront URLs.
- The System Payment test path used by acceptance evidence.

Any change crossing those boundaries requires a new scoped qualification and
must not be represented as a visual-only change.
