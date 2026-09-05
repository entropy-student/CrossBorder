# Pawfectly Home Product Data Contract

Status: `v1.1.0` - canonical JSON contract, no production SKU included.

This contract is the boundary between supplier facts, product content work and
the Medusa product model. It is deliberately fact-first: an unknown fact is
represented by `null`, `UNKNOWN` or `NEEDS_VERIFICATION`; it is never inferred
from a product name, a supplier category or a design example.

## Canonical record

The canonical format is JSON. Every record contains these top-level sections:

| Section | Purpose |
|---|---|
| `schema_version`, `record_status` | Contract version and workflow state |
| `identity` | Traceable supplier/source identity |
| `commerce` | Currency, prices, options, variants and inventory facts |
| `physical` | Product and package dimensions/weight/material |
| `content` | Customer-facing copy and specifications |
| `taxonomy` | Pet/category/collection facts, not invented tags |
| `assets` | References to real product and lifestyle images |
| `operations` | MOQ, lead time and fulfillment notes |
| `cross_border` | Origin, verified HS/compliance and restricted-material notes |
| `provenance` | Source URL, evidence, verification status and date |

The complete machine-readable shape is the source-side
[product-master.schema.json](../CrossBorder-Independent-Store/05_product/schemas/product-master.schema.json).
Use the source-side
[PRODUCT_INTAKE_TEMPLATE.json](../CrossBorder-Independent-Store/05_product/intake/PRODUCT_INTAKE_TEMPLATE.json)
for a new record. The CSV is an operator-friendly flat intake aid, not the
canonical storage format.

The validator performs a dependency-free structural check equivalent to the
JSON Schema before any business rules run. A malformed record is `BLOCKED` and
reports `DRY_RUN_NOT_ATTEMPTED`; the dry-run mapper never receives it.

## Required facts and workflow gates

An import-ready record is not automatically publish-ready or logistics-ready.
The validator reports three independent gates:

| Gate | Minimum facts | Missing/unknown result |
|---|---|---|
| `IMPORT_REQUIRED` | Unique source ID and internal SKU, title, handle, ISO currency, at least one variant SKU, source URL and source evidence; a positive selling price is required for priced import, but a user-supplied `DRAFT` may enter store integration with price explicitly unknown | `BLOCKED` when identity/commerce facts are absent or invalid; otherwise `NEEDS_VERIFICATION` |
| `PUBLISH_REQUIRED` | Real title/handle/price/variant, real main image, customer description, and an explicit purchasability mode; user-approved store integration may use `LOCAL_PREVIEW_AVAILABILITY` while owned inventory remains unknown | `NEEDS_VERIFICATION`; it never turns a fixture into a published product |
| `LOGISTICS_REQUIRED` | Product weight, package dimensions/weight, origin and reviewed fulfillment/shipping assumptions | `NEEDS_VERIFICATION` until facts are supplied |

`PASS` means the record passes the import gate and has no unresolved required
fact in the three-gate contract. `NEEDS_VERIFICATION` means the import shape is
usable for review/dry-run but one or more publish or logistics facts remain
unknown or unverified. `BLOCKED` means the record cannot be safely mapped
because an import-required fact is missing/invalid, or a hard data conflict was
found. The result is machine-readable and each issue includes its gate and
classification.

For a record with `record_status=DRAFT`, user approval can authorize store
integration even when `commerce.selling_price` and inventory remain unknown.
The adapter must keep the product unpublished and must not create a fabricated
price. An `ACTIVE`/published local-preview path requires a real selling price,
verified source asset and explicit preview purchasability; owned inventory and
production logistics remain separate readiness states.

## Unknown-value policy

Use only these explicit unknown markers:

- `null` for an absent value.
- `UNKNOWN` when the fact has not been obtained.
- `NEEDS_VERIFICATION` when a supplied value or interpretation needs evidence.

Do not use a guessed zero, placeholder price, fabricated stock quantity,
generic supplier promise, fake review, or a made-up taxonomy value. A
`TEST_FIXTURE_ONLY` record may contain deterministic example values solely to
exercise the validator and dry-run mapper; it cannot pass the publish gate.

## Field contract

### Identity

- `source_product_id`: immutable supplier/source identifier.
- `supplier_name`, `supplier_url`: supplier identity and source link.
- `internal_sku`: project-owned unique SKU once assigned.
- `handle`: stable URL handle; do not derive it silently from a title.
- `title`, `subtitle`: source-backed product names/copy.

### Commerce

- `currency`: stored uppercase. The currently supported set is explicitly
  `SUPPORTED_CURRENCIES={USD,EUR}`. Unsupported currencies are blocked rather
  than accepted by a generic three-letter regex. USD and EUR currently use two
  minor units; the mapper uses a currency exponent table and does not assume
  every future currency has two decimals.
- `cost_price`, `selling_price`, `compare_at_price`: monetary values in the
  currency unit, not minor units. `compare_at_price` must not be lower than
  `selling_price` when both are known.
- `option_names`: real option group names.
- `variants[]`: each variant has a source or internal identity, SKU, real
  option values, selling/compare-at prices and explicit inventory status.
- `inventory_status`: use a known status such as `IN_STOCK`, `OUT_OF_STOCK`,
  `BACKORDER` or `DISCONTINUED`; otherwise use an unknown marker.
- `supplier_stock_status` records supplier claims separately from project-owned
  inventory. `project_owned_inventory` must remain `UNKNOWN` when the project
  does not own stock. For a local storefront preview, set
  `storefront_purchasable=YES` and `availability_mode=LOCAL_PREVIEW_AVAILABILITY`;
  the adapter disables Medusa inventory management for that preview variant,
  without creating an owned quantity. This is not production inventory
  readiness.

### Physical, content and taxonomy

`physical.weight` and `physical.package_weight` are objects with a measured
`value` and controlled `unit` (`g`, `kg`, `oz` or `lb`). A bare number is
invalid. Unknown measurements use `{ "value": null, "unit": "UNKNOWN" }`.
Dimensions use `length`, `width`, `height` and a controlled unit (`mm`, `cm`,
`m` or `in`). Known dimensions must all be finite and greater than zero;
unknown dimensions remain explicit and keep the logistics gate at
`NEEDS_VERIFICATION`. Content must preserve supplier facts and approved copy;
do not turn unknown specifications into marketing claims.
Taxonomy values must come from the approved catalog taxonomy. If taxonomy is
not yet approved, leave it unknown rather than inventing a collection.

### Assets

`main_image`, `thumbnail`, `gallery_images[]` and `lifestyle_images[]` are
asset references. Each known reference should include `url`, `alt`, `source`
and an explicit verification/status field. The real image must remain the real
product. A missing asset is a publish verification item, not a reason to make
a fake SVG or AI-generated replacement product.

### Operations and cross-border

`moq`, lead time and fulfillment notes are supplier/operations facts. Origin,
HS code and compliance/restricted-material notes require evidence. `hs_code`
is an object: `{ "value": null, "status": "NEEDS_VERIFICATION", "evidence": null }`.
Only a known value with `status=VERIFIED` and present evidence passes the HS
check; the contract does not infer customs classification or provide customs
advice.

### Provenance

`source_url`, `source_evidence[]`, `status` and `last_verified_date` make the
record auditable. `status` is `VERIFIED`, `UNVERIFIED` or
`NEEDS_VERIFICATION`. A record without traceable source evidence cannot be
treated as a final Pawfectly product.

## Medusa mapping boundary

```text
Product Master
    |
    +--> Medusa Product: title, handle, subtitle, description, thumbnail,
    |                    images, options, variants and prices
    |
    +--> Medusa inventory: only explicit inventory/purchasability facts
    |
    +--> Medusa metadata: supplier, physical, operations, taxonomy,
                         cross-border and provenance fields
```

| Product Master | Medusa | Rule |
|---|---|---|
| `identity.title` | `product.title` | Source-backed only |
| `identity.handle` | `product.handle` | Stable URL identity |
| `identity.subtitle` | `product.subtitle` | Preserve when known |
| `content.long_description` | `product.description` | Fall back to short copy only when explicitly supplied |
| `assets.thumbnail` | `product.thumbnail` | Asset URL, never hardcoded in UI |
| `assets.main_image` + gallery | `product.images[]` | Preserve real asset references |
| `commerce.option_names` | `product.options[]` | Real option groups only |
| `commerce.variants[]` | `product.variants[]` | SKU/options/price mapping; a DRAFT with no user-confirmed price maps to `prices: []` and remains unpublished |
| `selling_price` | variant `prices[].amount` | The frozen Mother Template runtime follows its migration seed and stores Medusa amounts in currency units (for example `14.99` for USD); preserve the source fact |
| `cost_price`, `compare_at_price` | product/variant metadata | Preserve for controlled merchandising review; do not expose as a fake storefront price |
| supplier/physical/operations/taxonomy/cross-border/provenance | `product.metadata` or variant metadata | Do not alter Medusa's native commerce contract |

The dry-run mapper outputs the request-shaped plan but performs no network write
and no catalog reset. The explicit local DRAFT adapter is documented in the
import guide and is the only authorized writer for the first user-supplied
record. Existing orders and seed products are never used as a source of truth
for a formal Pawfectly product.

## Versioning and assets

The current schema is `1.1.0`. A `1.0.0` record is rejected with
`SCHEMA_UPGRADE_REQUIRED`; old bare-number weights and string HS values are not
silently reinterpreted. Convert the record explicitly before validation.

Every supplied asset must be an object with `url`, `alt`, `source` and
`status`. A real publishable `main_image` additionally requires known values
and `status=VERIFIED`. Missing optional gallery/lifestyle assets do not block
import, but malformed asset objects are schema errors.

## Current project boundary

No formal Pawfectly SKU is present in this task. The included
`TEST_FIXTURE_ONLY.medusa-seed.json` exists only to test schema shape,
validation, normalization and Medusa mapping. It must not be imported,
published, or described as a real product.
