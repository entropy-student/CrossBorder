# CB-UI-DEV-001 Implementation Notes

## Scope

Implemented the Pawfectly Home global visual system and homepage in the frozen Medusa Mother Template. PDP, collection, cart-page redesign and checkout UI were intentionally left outside this slice.

## Changed surface

- `03_template/medusa-crossborder-base/apps/storefront/src/styles/globals.css`
  - Added the Pawfectly Home token layer, local font-face declarations, responsive layout primitives, surfaces, controls, cards and restrained transitions.
- `03_template/medusa-crossborder-base/apps/storefront/src/modules/home/templates/homepage.tsx`
  - Added the homepage sections: hero, everyday ritual, live product rail, editorial story, reviews and newsletter.
- `03_template/medusa-crossborder-base/apps/storefront/src/app/[countryCode]/(main)/page.tsx`
  - Routes the localized home page through the new homepage template and preserves the existing country-code/region lookup.
- `03_template/medusa-crossborder-base/apps/storefront/src/app/[countryCode]/(main)/layout.tsx`
  - Supplies the resolved region currency to the navigation without changing cart/customer flows.
- `03_template/medusa-crossborder-base/apps/storefront/src/modules/layout/templates/nav/index.tsx`
  - Replaced the starter navigation presentation with the approved announcement bar, desktop navigation and responsive mobile header.
- `03_template/medusa-crossborder-base/apps/storefront/src/modules/layout/templates/footer/index.tsx`
  - Replaced starter footer presentation while retaining dynamic category and collection links.
- `03_template/medusa-crossborder-base/apps/storefront/src/modules/layout/components/cart-dropdown/index.tsx`
  - Updated the visible label to the approved Bag convention; existing cart component and route remain in use.
- `03_template/medusa-crossborder-base/apps/storefront/.env.template`
  - Corrected safe local defaults to `NEXT_PUBLIC_DEFAULT_REGION=us` and `NEXT_PUBLIC_BASE_URL=http://localhost:8000`.
- `03_template/medusa-crossborder-base/apps/storefront/public/fonts/`
  - Added the approved DM Serif Display and Plus Jakarta Sans font files locally so production builds do not depend on a Google Fonts fetch.

## Commerce/data contract

- Region is resolved with the existing `getRegion(countryCode)` helper.
- Homepage products are loaded with the existing `listProducts` helper for the resolved region.
- Product title, handle, thumbnail and price are read from Medusa; no catalog, price, inventory, region or currency values are hardcoded into the UI.
- Product links still use the existing localized product route.
- `CartButton`, customer retrieval, cart retrieval, shipping-option retrieval and cart routes remain on the existing Medusa Storefront data flow.
- Final live API check: backend health HTTP 200; one US/USD region; four US/USD products returned HTTP 200.

## Asset behavior

Product cards prefer `product.thumbnail` and then the first Medusa product image. Hero, category and story areas preserve the approved asset-slot frames and use neutral fallbacks when no approved lifestyle asset is available. No generated product illustration or fake commerce data was introduced.

## Build and runtime verification

- Dependency command: `corepack pnpm@10.11.1 install --frozen-lockfile` (completed before implementation verification).
- Production build command: `corepack pnpm@10.11.1 build` from `apps/storefront`.
- Next.js: `15.5.21`.
- Final build result: exit code `0`, compiled successfully, static generation `70/70`, approximately `48.1s` after local fonts were installed.
- Production runtime command: `cmd /c ".\\node_modules\\.bin\\next.cmd start -p 8000"`.
- Production runtime readiness: `http://localhost:8000` ready; `/us` and `/us/store` loaded without application-error text.

## QA notes

- Final computed display font: `DM Serif Display, Georgia, serif`.
- Final computed UI font: `Plus Jakarta Sans, sans-serif`.
- Desktop CSS viewport: `1440 x 900`; mobile CSS viewport: `390 x 844`.
- Each homepage section occurred exactly once at both viewports; section bounds were ordered with no overlap.
- Browser console errors during the final homepage capture: `0`.
- Cart preservation check: visible `Bag 0` action still links to `/us/cart`.

## Known differences

Neutral fallbacks remain in lifestyle/category/story asset slots until approved real assets are supplied. This is documented as an asset replacement step, not a change to the frozen layout contract.
