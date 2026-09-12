# GPT-6 Visual Pass Brief

Use this file only after the Owner provides the approved reference images.

## Mission

Transform the isolated mother template so its visual language matches the supplied references as closely as practical while keeping it generic and reusable.

## Inputs

1. approved reference image(s);
2. screenshots of the current `/golden` route at desktop and mobile widths;
3. this directory only.

## Direct-edit rule

Do not respond with a design description for another agent to reinterpret. Edit the final reusable code directly.

Primary editable files:

- `app/globals.css`
- `src/mother-template.tsx`

You may adjust `src/neutral-data.ts` only to improve neutral placeholder lengths required for realistic geometry. Do not add real product/brand copy.

## Preserve

- `data-slot` markers;
- semantic page structure;
- generic data independence;
- desktop and mobile behavior;
- no external commerce/API dependencies;
- no business-specific brand, product, price, provider or fulfillment content.

## Do not touch

- Medusa runtime source;
- payment or fulfillment code;
- project production configuration;
- secrets;
- the actual live storefront during the design iteration.

## Output target

The `/golden` page is the first acceptance surface. Match the reference in this order:

1. overall composition and proportions;
2. typography scale/weight/line-height;
3. image geometry and cropping slots;
4. spacing rhythm;
5. header/footer geometry;
6. buttons/controls;
7. borders/radii/shadows;
8. color and micro-detail;
9. mobile reflow.

Avoid compensating for structural mismatch with piles of one-off absolute positioning or breakpoint hacks. Convert repeated visual decisions into reusable tokens/components.

## Completion condition

Stop after producing the direct code changes and a short list of intentional differences that cannot be inferred from the reference. Screenshot comparison and acceptance are handled by `VISUAL_GATE.md`.
