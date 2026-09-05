# CB-UI-DEV-003 Implementation Notes

## Scope

This slice adds the Pawfectly Home presentation layer for Cart, Mini Cart, and Checkout on the frozen Medusa Mother Template. It does not redesign PDP, Collection, Checkout semantics, payment providers, shipping methods, region/currency logic, or backend APIs.

## Changed implementation areas

- Cart page wrappers and summary layout use Pawfectly Home presentation classes.
- Cart quantity selection is presented as live decrement/increment controls while still calling the existing `updateLineItem` action; the route refreshes after completion so quantity and totals remain server-backed.
- Remove controls retain the existing `deleteLineItem` action, now expose stable accessibility/test attributes, and refresh the route after completion so the live cart state is visible.
- Mini Cart uses the existing live `cartState`; it adds the approved View your bag and Checkout CTAs.
- Checkout sections use shared presentation classes around the existing address, shipping, payment, review, and summary components.
- Review text was made neutral so it does not assert unsupported terms or returns policies.
- Only Cart/Checkout CSS was appended to `globals.css`; the deferred global CSS debt was not refactored and no new `!important` rule was introduced by this slice.

## Runtime notes

- Backend production runtime: `node ..\\..\\node_modules\\@medusajs\\cli\\cli.js start --port 9000` from `apps/backend/.medusa/server`.
- Storefront production runtime: `corepack pnpm@10.11.1 start` from `apps/storefront`, serving `http://localhost:8000`.
- The current production build used Next.js `15.5.21`, exact project pnpm `10.11.1`, and the existing local `.env.local` without exposing its values.
- The existing mobile behavior intentionally hides the hover Mini Cart popover at the touch breakpoint; mobile bag access is the live `/us/cart` route.

## Non-blocking debt

- Navigation links for Dog, Cat, Collections, New arrivals, Journal, and some footer links still resolve to generic existing routes until real taxonomy/content exists. This remains P2 and is outside this Cart/Checkout slice.
- `CSS_DEBT=P2_DEFERRED_TO_PRE_WEB_UI_FREEZE` remains open.
