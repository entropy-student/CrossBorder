# CB-REVIEW-03-FIX Functional Regression

## Production routes

| Check | Result | Evidence |
| --- | --- | --- |
| `/us` | PASS | Production HTML loaded with live USD products |
| `/us/store` | PASS | Live collection loaded with four product cards |
| Real PDP `/us/products/sweatshirt` | PASS | Live title, images, variants, calculated USD price, and actions loaded |
| `/us/cart` | PASS | Existing cart route remained readable; no visual redesign performed |
| Browser error-level console logs | PASS | Empty on audited routes |

## Commerce/UI regression

| Check | Result | Evidence |
| --- | --- | --- |
| Region / currency | PASS | `/us` and `/us/store` rendered `USD` and `$10.00` / `$15.00` live prices |
| Real products / links | PASS | Catalog links resolved to live localized PDPs |
| Variant selection | PASS | Current live PDP S selection produced a real `v_id` and enabled Add to bag |
| Add to Bag | PASS | Existing Storefront action exercised; Bag remained readable; no order created |
| Search | PASS | Searching `Sweatshirt` returned the real Medusa Sweatshirt |
| No-result | PASS | Non-matching query rendered the live empty state and zero cards |
| Price sort | PASS | Existing `price_asc` query produced `$10.00` followed by `$15.00` items |
| Option filter | PASS | Current Size disclosure exposed S/M/L/XL; live S changed `Size(0)` to `Size(1)`, wrote current `optionValueIds`, and retained the live grid |
| PDP accordion names | PASS | Product Information and Shipping & Returns triggers had accessible names; unnamed count `0` |
| New order | NOT RUN | Explicitly prohibited for this task; existing order evidence preserved |

## Option-count interpretation

The `(0)` in `Size(0)` and `Color(0)` is the selected-count indicator. It is not the number of available option values. Empty `option.values` would suppress the option root; the current runtime instead showed the live values S/M/L/XL after opening Size.

No historical hardcoded option ID was used. The URL assertion used the current runtime-generated query value after selecting the visible live S option.
