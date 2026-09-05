# CB-REVIEW-03-FIX Responsive Geometry Evidence

## Runtime

- Storefront: production `next start -p 8000`
- Routes checked: `/us`, `/us/store`, `/us/products/sweatshirt`
- Browser viewport override used to obtain the requested CSS client widths; measurements are from `document.documentElement.clientWidth` and `scrollWidth`.
- No `overflow-x:hidden` workaround was introduced.

## Geometry results

| CSS viewport | clientWidth | scrollWidth | Header action right edge | Result |
| ---: | ---: | ---: | ---: | --- |
| 1440 | 1440 | 1440 | 1368 | PASS |
| 1024 | 1024 | 1024 | 952 | PASS |
| 768 | 768 | 768 | 736 | PASS |
| 390 | 390 | 390 | 371 | PASS |

`DOCUMENT_HORIZONTAL_OVERFLOW=0` for Homepage, PDP, and Collection checks.

## Captures

- `header-768.png`: shared Header at the 768 CSS-pixel target.
- `homepage-768.png`: Homepage at the 768 CSS-pixel target.
- `collection-768.png`: Collection/Search at the 768 CSS-pixel target.
