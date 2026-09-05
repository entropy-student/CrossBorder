# Real Product Integration Policy

Status: `ACTIVE_FOR_USER_SUPPLIED_PRODUCTS`

## Governing rule

`USER_SUPPLIED_PRODUCT=APPROVED_FOR_STORE_INTEGRATION`.

When the user explicitly supplies product material to this project, the
product may enter the Pawfectly Home integration workflow. Sourcing gates are
not a product-intake blocker:

- `SAMPLE_GATE` controls physical sample readiness.
- `PROCUREMENT_GATE` controls bulk-order readiness.
- `LOGISTICS_GATE` controls packaging, origin, shipping and customs review.
- `RISK_GATE` controls compliance and IP-risk review.

These gates remain independent and retain `UNKNOWN` or
`NEEDS_VERIFICATION` where facts are missing. They do not mean HS verified,
FTO cleared, logistics ready or bulk purchase approved.

Supplier comparison and sample procurement are not required before a supplied
record can be integrated. `COMP-001` remains available for sourcing and cost
tracking, but it is no longer blocked from having a sellable-product master.

## Draft versus published

A user-supplied record may be created in Medusa as `DRAFT` when its import
identity and source traceability are valid, even if selling price, inventory,
verified supplier name, product image, packaging and cross-border facts are
not yet complete. Missing values remain explicit; no value is inferred.

The selling price is confirmed by the user at `14.99 USD`, and the approved
source image is now attached. The product is published in the local Mother
Template for storefront verification. This local publication does not assert
that project-owned production inventory, logistics or sourcing facts are
ready.

The local preview path requires a real selling price, a verified main product
asset and explicit `LOCAL_PREVIEW_AVAILABILITY`. That mode keeps
`project_owned_inventory=UNKNOWN` and writes `manage_inventory=false` for the
preview variant; it is not a production stock assertion. A cost price or
landed reference is never used as a consumer selling price.

## COMP-001 integration boundary

The first record is `PAWFECTLY-PET-HAIR-REMOVER.json`:

- source product: `1601855396569` from the existing Alibaba URL;
- internal SKU: `PAW-PHR-001`;
- product handle: `pet-hair-remover`;
- currency: `USD`;
- product status: `published` in the local preview runtime;
- selling price: `14.99 USD`, confirmed by the user;
- primary source image: latest user-approved 1:1 `COMP-001-main-square.png`;
- previous wide source image: preserved as secondary lifestyle evidence;
- inventory: unknown and not fabricated;
- variant: one generic internal variant, because the pictured colors and
  supplier variant IDs are not confirmed.

The product copy is merchandising copy based on the supplied product facts.
Supplier marketing language such as “eco-friendly”, “durable”, “premium” or
“safe for all fabrics” is not promoted to a verified claim. The source image
is attached as a verified user-approved source asset; its supplier/source
provenance remains separate and is not promoted to a verified supplier or
logistics fact.

## Adapter safety contract

`05_product/scripts/medusa-product-upsert.mjs` is dry-run by default. A write
requires `--write`, a valid normalized record, an existing local Mother
Template runtime, and a matching local Compose project/database identity.
It never resets a catalog or database, deletes products, changes orders,
targets Spree or enables real payments. `--publish` is a separate explicit
request and is refused unless the record is `PUBLISHED` and the publish gate
passes; ordinary `--write` remains a DRAFT upsert.

Identity is matched first by the stable source product ID in product metadata,
then by the stable product handle. A handle collision belonging to another
source is blocked. Existing variants are matched by internal SKU; a duplicate
SKU is blocked rather than silently creating a second variant.

After a write the adapter reads the product through Admin API, Store API and
the target local PostgreSQL container. A draft normally does not appear in the
Store API; `STORE_READBACK=NOT_VISIBLE_EXPECTED_FOR_DRAFT` is the valid result
in that case. The explicit `--write --publish` path updates and publishes the
same existing product only after the normalized record is `PUBLISHED` and the
publish gate passes. The adapter follows the frozen Mother Template's runtime
amount convention (for example `14.99` for USD); the Product Master remains
the source of the human currency value.

## Explicit non-goals

This policy does not approve a bulk purchase, create final bundle BOMs,
verify HS/FTO/origin, configure production payment or shipping, or deploy the
store. Local publication is not production readiness and does not change the
frozen UI.
