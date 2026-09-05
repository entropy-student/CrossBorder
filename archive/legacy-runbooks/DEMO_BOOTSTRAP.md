# Legacy / Historical Manual Validation Reference

This document describes the historical candidate validation route. The formal
Mother Template path is `03_template/medusa-crossborder-base/`; its current
script-driven augmentation is `scripts/medusa-crossborder-augment.ts` and does
not require manual Admin UI setup.

## Medusa US/USD Augmentation

Purpose: configure only the US/USD augmentation required after the checked-out DTC Starter's migration-based initial-data seed has created the baseline data.

## Initialization distinction
`apps/backend/src/migration-scripts/initial-data-seed.ts` is part of the checked-out baseline and is executed during `medusa db:migrate`; CB-DEV-012 observed Store, Region, tax, stock, fulfillment, product, and inventory data from that path. This is `BASELINE_INITIALIZATION`, not the US/USD augmentation.

Do **not** copy a seed script from the deprecated Medusa starter or another Medusa version. `03-prepare-medusa.ps1` detects the migration capability and prints `MEDUSA_BASELINE_SEEDED_BY_MIGRATION` plus `US_USD_AUGMENTATION_REQUIRED` when present.

## Before starting
- `03-prepare-medusa.ps1` completed migrations and created the local admin.
- Backend is running at `http://localhost:9000`.
- Admin opens at `http://localhost:9000/app`.

## Minimum US/USD dataset
Use the Admin UI. Labels may move slightly between DTC Starter versions; record any material difference during runtime validation.

### 1. Sales channel
Create or confirm one active sales channel for the storefront, for example:
- Name: `Web Store`

### 2. Store + US region
In **Settings → Store**, confirm USD is available and set sensible local-test defaults if the clean database has none.

Then in **Settings → Regions**, create/confirm:
- Region: `United States`
- Currency: `USD`
- Country: `United States`
- Payment provider: Medusa's built-in **System** provider (`pp_system`) for a no-real-money checkout

The System provider is a built-in placeholder/COD-like provider and is appropriate only for this functional Gate.

### 3. US tax region
In **Settings → Tax Regions**, create a United States tax region. A Medusa commerce region and a tax region are separate resources.

For this platform-selection test, use a clearly documented simple test rate (for example 0%) if the UI requires a rate. This is **not** a US tax-compliance decision; production tax is deferred to `PRODUCTION_READINESS.md`.

### 4. Shipping profile + stock location + fulfillment
In **Settings → Locations & Shipping**:
- Create/confirm a simple shipping profile such as `Default Demo`;
- Create location `US Demo Warehouse` with a US address;
- Link the location to `Web Store`;
- Enable Medusa's built-in **Manual** fulfillment provider (`fp_manual_manual`) for the location;
- Enable Shipping mode;
- Create a service zone covering the United States;
- Create one fixed-price shipping option such as `Standard Shipping`;
- Use the same shipping profile as the demo product;
- Use a standard shipping-option type (Medusa normally provides Standard/Express types by default).

The exact price is irrelevant to platform selection; use a simple fixed local-test amount and verify it appears correctly in checkout totals.

### 5. Demo product
Create one deliberately generic test product:
- Product: `Demo Product`
- Variant/SKU: `DEMO-001`
- Currency/price: USD, for example `$20.00`
- Assign it to `Web Store`
- Assign the same demo shipping profile used by the shipping option
- Make inventory available at `US Demo Warehouse`
- If inventory is managed, set a visible test quantity such as `100`

### 6. Publishable API key
In **Settings → Publishable API Keys**:
- Create: `Local Storefront`
- Link it to `Web Store`
- Copy the actual `pk_...` value

Then configure the storefront:

```powershell
.\04_docs\scripts\04-configure-storefront.ps1 -PublishableKey "pk_..." -DefaultRegion "us"
```

### 7. Bootstrap verification
Before checkout testing, confirm all of the following:
- Product is visible through the storefront sales channel.
- USD price is visible.
- US shipping option resolves for a US address and matches the product shipping profile.
- System payment provider is selectable/usable for the US region.
- A US tax region exists so tax behavior is explicit rather than accidental.
- Publishable key only exposes the intended sales channel.
- Inventory/availability is sufficient for one test order.

## Stop condition
If the minimum dataset cannot be configured without source-code changes or undocumented infrastructure, record the failure. Do not patch indefinitely; move to the Spree benchmark.
