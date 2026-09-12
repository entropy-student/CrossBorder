# Integration Contract

This visual package is intentionally independent from commerce data.

## Current rule

The accepted mother-template components are reused by the real storefront. Integration replaces neutral values and media slots; it does not redesign accepted geometry.

## Later mapping boundary

The future adapter may supply values such as:

- brand/navigation labels;
- title and descriptive copy;
- image URLs and alt text;
- display price text;
- option/variant labels;
- availability state;
- cart-derived display state.

The template itself must not decide payment, fulfillment, inventory, order ownership, refund state or external-system semantics.

## Anti-drift rule

When the real storefront is wired later:

1. reuse the accepted components/CSS directly where possible;
2. add a thin data adapter around them;
3. do not ask an execution agent to reconstruct the design from screenshots or prose;
4. any unavoidable visual deviation returns to the visual-review Gate.
