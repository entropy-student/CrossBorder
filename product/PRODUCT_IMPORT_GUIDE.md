# Pawfectly Home Product Import Guide

This guide describes the safe, repeatable path from supplier material to a
Medusa product. The canonical input is JSON. The current adapter is dry-run by
default. Explicit `--write` performs a local upsert and `--write --publish` is
required for an explicit local publication.

## Pipeline

```text
intake JSON / supplier evidence
        |
        v
schema/runtime shape ----> BLOCKED + DRY_RUN_NOT_ATTEMPTED when malformed
        |
        v
business validator ------> PASS / NEEDS_VERIFICATION / BLOCKED
        |
        v
normalizer (no guessed facts)
        |
        v
Medusa dry-run plan ------> request-shaped product/upsert mapping
        |
        v
explicit local Medusa upsert + Admin/Store/PostgreSQL verification
```

`product-pipeline.mjs dry-run` performs no HTTP request. The separate
`medusa-product-upsert.mjs` remains dry-run unless `--write` is supplied. Its
write path is limited to the configured local Mother Template, requires the
import gate and never resets the catalog or changes historical orders. A
publish request additionally requires `record_status=PUBLISHED` and
`PUBLISH_REQUIRED=PASS`; publish and logistics gaps remain visible and do not
become fabricated values.

## Directory contract

| Path | Use |
|---|---|
| `05_product/intake/` | Supplier intake records before normalization |
| `05_product/normalized/` | Reviewed canonical records ready for a dry-run |
| `05_product/assets/` | Asset contract and future approved asset references; no secrets or generated product art |
| `05_product/schemas/` | JSON Schema for editor/CI validation |
| `05_product/scripts/` | Dependency-free validator plus explicit local upsert adapter |

Do not place passwords, API tokens, supplier account sessions or runtime `.env`
files in these directories.

## Commands

Run from the project root with the project Node runtime. The validator is
schema-first and the current canonical version is `1.1.0`:

```powershell
node .\05_product\scripts\product-pipeline.mjs validate `
  --input .\05_product\intake\PRODUCT_INTAKE_TEMPLATE.json

node .\05_product\scripts\product-pipeline.mjs normalize `
  --input .\05_product\intake\PRODUCT_INTAKE_TEMPLATE.json `
  --output .\05_product\normalized\product.normalized.json

node .\05_product\scripts\product-pipeline.mjs dry-run `
  --input .\05_product\intake\TEST_FIXTURE_ONLY.medusa-seed.json `
  --output .\05_product\normalized\TEST_FIXTURE_ONLY.medusa-plan.json

node .\05_product\scripts\product-pipeline.mjs test `
  --input .\05_product\intake\TEST_FIXTURE_ONLY.medusa-seed.json
```

The last command is a mapping test only. It should report
`WRITE_PERFORMED=NO`. Generated normalized/plan files should be reviewed before
being committed; the repository currently keeps only the directory guidance,
not generated output.

## Intake workflow

1. Save the supplier URL, source screenshots/files and supplier replies in the
   intake record or its external evidence location.
2. Fill every known field. Keep unknown fields as `null`, `UNKNOWN` or
   `NEEDS_VERIFICATION`.
3. Run `validate`. Resolve every `IMPORT_REQUIRED=BLOCKED` issue before a
   dry-run; publish/logistics gaps remain explicit for a user-supplied draft.
4. Run `normalize`; inspect the result and confirm that no fact was invented.
5. Run `dry-run`; review the Medusa product/variant/price/metadata plan.
6. Only after human approval should a separately authorized Admin API upsert be
   executed with `medusa-product-upsert.mjs --write` against the local Mother
   Template. User-supplied product approval authorizes store integration; it
   does not mark sourcing, logistics or risk gates as passed.
7. Re-read the product from Medusa Admin/Store API and retain the source ID,
   resulting Medusa product ID and verification evidence.

## Idempotency and safety contract

- Upsert identity must be the immutable `source_product_id` plus the approved
  internal SKU, never a title alone.
- A rerun must update the same reviewed product rather than create a duplicate.
- Variant identity must use a stable source variant ID or internal SKU; duplicate
  SKUs in one record are blocked.
- No operation in this pipeline deletes products, resets the catalog, changes
  historical orders or changes payment/shipping/region semantics.
- Prices remain currency-aware: the master stores currency units. The frozen
  Mother Template runtime and migration seed use Medusa amounts in those
  currency units (for example `14.99` for USD); the adapter preserves that
  runtime convention and never uses cost/landed values as a selling price.
- Supplier facts remain traceable in metadata; native Medusa fields retain their
  normal contract.

## Current first integration record

`normalized/PAWFECTLY-PET-HAIR-REMOVER.json` is the first user-supplied
integration record. It has internal SKU `PAW-PHR-001`, confirmed selling price
`14.99 USD`, and is `PUBLISHED` in the local preview runtime using the
user-approved source image. `project_owned_inventory` remains `UNKNOWN`; the
preview variant uses `manage_inventory=false` and must not be read as owned
production stock. Source/logistics facts remain separately unresolved. The
generic seed fixture remains technical test data only. See
[REAL_PRODUCT_INTEGRATION_POLICY.md](REAL_PRODUCT_INTEGRATION_POLICY.md) for
the separation between store integration and sourcing/procurement gates.
