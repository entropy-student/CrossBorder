# Review-03 Technical Debt Register

Severity meanings:

- P0: release-blocking security/data-loss/commerce failure.
- P1: fix before the next Cart/Checkout implementation slice.
- P2: fix before the next UI freeze or production content handoff.
- P3: defer; useful cleanup or enhancement with no current gate failure.

## Closed findings in CB-REVIEW-03-FIX

| ID | Severity | Finding | Evidence | Disposition |
| --- | --- | --- | --- | --- |
| R03-UI-001 | P1 | 768px Header action overflow | Production DOM after fix: clientWidth=768, scrollWidth=768, actions right=736 | CLOSED; existing tablet breakpoint hides desktop nav links; no overflow masking |
| R03-UI-002 | P1 | Live option refinement verification and prior `(0)` interpretation | Current `/us/store`: live S/M/L/XL; selecting S changed `Size(0)` to `Size(1)` and wrote current `optionValueIds` | CLOSED; `(0)` is selectedCount, not available-value count |
| R03-UI-003 | P2 | Unsupported rating, testimonial, Verified buyer, shipping, delivery, and returns claims | Active Homepage/PDP/catalog source and production DOM after fix | CLOSED; neutral copy or empty verified-feedback state used |
| R03-UI-004 | P2 | PDP accordion trigger accessible names | Production PDP accessibility snapshot exposes `Product Information` and `Shipping & Returns` labels | CLOSED; `UNNAMED_PDP_ACCORDION_BUTTONS=0` |

## Open findings / deferred debt

| ID | Severity | Finding | Evidence | Disposition |
| --- | --- | --- | --- | --- |
| R03-UI-005 | P2 | `globals.css` is 2,436 lines with 19 `!important` declarations, direct hex literals, legacy starter rules, and brittle descendant selectors. | Static stylesheet audit | `CSS_DEBT=P2_DEFERRED_TO_PRE_WEB_UI_FREEZE`; not refactored in this finding-closure task. |
| R03-UI-006 | P3 | Newsletter Subscribe is `type="button"` without a submit/action contract in this slice. | Homepage source | Keep presentational until newsletter behavior is in scope; do not invent an API. |
| R03-UI-007 | P3 | `ProductOnboardingCta` appears unreferenced and retains a legacy onboarding URL. | Definition-only source search | Do not delete during this closure. |
| R03-UI-008 | P3 | Button/card typography patterns share CSS classes but lack a shared React-level Button primitive; Homepage ProductCard parallels ProductPreview. | Code reuse audit | Defer until after data/interaction work. |
| R03-UI-009 | P3 | Tailwind breakpoints and CSS media blocks have separate ownership. | Tailwind `screens` plus CSS media blocks | Defer; no current runtime failure. |

## Checks not treated as debt

| Check | Result |
| --- | --- |
| P0 security or data-loss issue found in UI audit | None observed |
| Backend or commerce API redesign | None observed |
| Cart/Checkout visual redesign | None performed |
| Hardcoded product title/price/variant/inventory in catalog/PDP data path | None observed |
| Synthetic product SVG introduced | None observed |
| Production build fatal error | None; TypeScript and Next build passed |
| Browser error-level logs on audited routes | None observed |

## Review disposition

The register records the four scoped closures while retaining the P2 stylesheet debt and unrelated P3 maintenance as deferred. No Cart or Checkout work was started.
