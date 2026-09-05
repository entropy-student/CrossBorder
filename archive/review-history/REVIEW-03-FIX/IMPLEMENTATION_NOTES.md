# CB-REVIEW-03-FIX Implementation Notes

## Minimal changes

- `src/styles/globals.css`: at the existing `max-width: 1023px` tablet breakpoint, hide the full desktop navigation link group. This resolves the 768px Header width collision while retaining Search, Account, Currency, and Bag actions.
- `src/modules/layout/templates/nav/index.tsx`: replaced the unsupported free-shipping/worldwide-delivery announcement with neutral brand copy.
- `src/modules/home/templates/homepage.tsx`: removed fabricated rating/testimonial/Verified buyer content and unsupported return/checkout claims; retained the approved section structure with neutral feedback state.
- `src/modules/products/components/product-preview/index.tsx`: removed the empty star presentation from catalog cards and used `Reviews coming soon`.
- `src/modules/products/templates/index.tsx`: removed star-only PDP review presentation and changed reassurance copy to a neutral product-detail statement.
- `src/modules/products/components/product-actions/index.tsx`: preserved real inventory logic and replaced the unsupported delivery SLA with checkout-based shipping wording.
- `src/modules/products/components/product-tabs/index.tsx`: retained the Shipping & Returns tab structure while replacing unsupported delivery and return promises with neutral information.
- `src/modules/products/components/product-tabs/accordion.tsx`: added `aria-label={title}` to the Radix accordion trigger.

## Explicit boundaries

- No backend, Store API, payment, shipping, region, currency, variant, inventory, cart, or checkout semantics were changed.
- No new search/filter backend or hardcoded commerce data was introduced.
- No Cart or Checkout UI redesign was started.
- No new order was created.
- `CSS_DEBT=P2_DEFERRED_TO_PRE_WEB_UI_FREEZE`; no stylesheet refactor was attempted.
