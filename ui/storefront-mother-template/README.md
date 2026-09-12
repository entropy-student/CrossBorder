# Storefront Mother Template v1

This directory is an isolated, business-data-free visual laboratory for the CrossBorder storefront.

## Purpose

- Give a high-capability design model a small, stable surface to edit directly.
- Keep product, payment, fulfillment, inventory, account and API logic out of the visual iteration loop.
- Freeze reusable page shells before reconnecting real data.
- Reduce implementation drift: the accepted React/CSS files are later reused directly instead of being reinterpreted from prose.

## Primary visual files

- `app/globals.css` — tokens, typography, spacing, responsive rules and visual states.
- `src/mother-template.tsx` — page composition and reusable presentation components.

## Stable contract files

- `src/neutral-data.ts` — neutral fixture only.
- `INTEGRATION_CONTRACT.md` — later data-mapping boundary.
- `VISUAL_GATE.md` — screenshot acceptance rules.
- `GPT6_VISUAL_BRIEF.md` — compact prompt for a frontier visual/design pass.

Do not add Medusa SDK calls, payment calls, fulfillment calls, database calls, authentication, analytics or live secrets here.

## Initial routes

- `/` — generic home shell
- `/product` — PDP golden-page shell

Collection, cart and checkout shells are added only after the visual language is accepted on the golden PDP.

## Run

```bash
pnpm install
pnpm dev
```

Default port: `8100`.

## Freeze sequence

1. Supply approved reference images.
2. Run one high-leverage GPT-6 design pass using `GPT6_VISUAL_BRIEF.md`.
3. Iterate first on `/product` as the golden page.
4. Capture desktop/mobile screenshots and apply `VISUAL_GATE.md`.
5. Freeze tokens/components.
6. Expand the accepted visual system to remaining page shells.
7. Only after visual acceptance, map real Medusa/external-system values through the integration contract.
