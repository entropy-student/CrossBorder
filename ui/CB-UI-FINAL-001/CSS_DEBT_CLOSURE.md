# CB-UI-FINAL-001 - CSS Debt Closure

## Audit before change

- `BEFORE_CSS_LINES=3050`
- `BEFORE_IMPORTANT_COUNT=19`
- `globals.css` remains a mixed legacy starter + Pawfectly stylesheet.
- Static class audit found legacy/Tailwind utilities and dynamic class construction; no legacy block was deleted without runtime proof.

## Controlled cleanup

- Added one bounded responsive rule: at widths below 1100px, Story and PDP Why sections stack before their two-column content becomes too narrow.
- Added `min-width: 0` to the shared hero/story text rule and PDP Why copy to prevent intrinsic child widths from escaping their grid tracks.
- Removed `!important` from the catalog label and catalog media presentation rules where the same unlayered scoped selector already wins the cascade.
- No `globals.css` rewrite; no new `!important`; no commerce component behavior change.

## Audit after change

- `AFTER_CSS_LINES=3065`
- `AFTER_IMPORTANT_COUNT=12`
- `RULES_REMOVED=0`
- `RULES_CONSOLIDATED=0`
- `DECLARATIONS_DE_IMPORTANTED=7`
- `RESPONSIVE_STABILITY_RULES_ADDED=1`
- `VISIBLE_LAYOUT_REGRESSION=0`

The line count increased because the safe responsive rule was added. The meaningful debt reduction in this pass is the removal of seven unnecessary force declarations and the elimination of the verified 768px/1024px layout risks. Unused legacy CSS remains classified rather than guessed away.

`CSS_DEBT=P2_DEFERRED_TO_SEPARATE_MAINTENANCE_PASS`
