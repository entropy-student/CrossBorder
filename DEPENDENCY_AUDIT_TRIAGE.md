# Dependency Audit Triage

`AUDIT_DATE=2026-09-05`
`COMMAND_PROD=corepack pnpm@10.11.1 audit --prod --json`
`COMMAND_ALL=corepack pnpm@10.11.1 audit --json`
`AUTO_FIX=NO`

Both commands completed with exit code `1` because advisories were found.
The current registry result is the same for both scopes:

```text
AUDIT_CRITICAL=0
AUDIT_HIGH=4
AUDIT_MODERATE=7
AUDIT_LOW=0
```

No dependency was changed in this task. The source paths below are pnpm
dependency paths, not machine-specific filesystem paths. A sanitized summary
is preserved in `DEPENDENCY_AUDIT_SANITIZED.json`.

## Advisory register

| Severity | Advisory | Package / installed | Vulnerable range | Fixed version | Direct or transitive | Dependency path | Production reachability / current invocation | Remediation | Recommendation |
|---|---|---|---|---|---|---|---|---|---|
| HIGH | 1115806 / GHSA-r5fr-rjxr-66jc / CVE-2026-4800 | lodash 4.17.23 | >=4.0.0 <=4.17.23 | >=4.18.0 | Direct in storefront; also transitive in backend path | `apps__backend>@medusajs/cli>@medusajs/utils>@graphql-codegen/core>@graphql-codegen/plugin-helpers>lodash` | Storefront directly invokes `isEqual`, `pick`, and `mapKeys`; current code does not invoke the vulnerable `_.template` imports surface. | LOCKFILE_ONLY, after compatibility verification | FIX_BEFORE_LIVE |
| HIGH | 1124252 / GHSA-6g55-p6wh-862q / CVE-2026-45623 | postcss 8.4.31 | <=8.5.11 | >=8.5.12 | Transitive through Next; also a build tool dependency | `apps__storefront>next>postcss` | Build-time Next/PostCSS path; application code does not process untrusted CSS. | NEXT_UPGRADE or compatible lockfile/override review | FIX_BEFORE_LIVE |
| HIGH | 1139510 / GHSA-r28c-9q8g-f849 / CVE-2026-73646 | postcss 8.4.31 | <=8.5.17 | >=8.5.18 | Transitive through Next; also a build tool dependency | `apps__storefront>next>postcss` | Build-time source-map path; application code does not expose a user CSS parser. | NEXT_UPGRADE or compatible lockfile/override review | FIX_BEFORE_LIVE |
| HIGH | 1124066 / GHSA-f88m-g3jw-g9cj | sharp 0.34.5 | <0.35.0 | >=0.35.0 | Transitive through Next | `apps__storefront>next>sharp` | Next image optimization dependency; no direct sharp invocation in current source. | NEXT_UPGRADE or compatible lockfile/override review | FIX_BEFORE_LIVE |
| MODERATE | 1113715 / GHSA-2g4f-4pwh-qvx6 / CVE-2025-69873 | ajv 8.13.0 | >=7.0.0-alpha.0 <8.18.0 | >=8.18.0 | Transitive | `apps__backend>@medusajs/cli>@medusajs/deps>@mikro-orm/migrations>umzug>@rushstack/ts-command-line>@rushstack/terminal>@rushstack/node-core-library>ajv` | Medusa CLI/migration dependency; current application source does not directly invoke ajv with attacker-controlled `$data`. | MEDUSA_UPGRADE or compatible transitive override review | NEEDS_MORE_EVIDENCE |
| MODERATE | 1115810 / GHSA-f23m-r3pf-42rh / CVE-2026-2950 | lodash 4.17.23 | <=4.17.23 | >=4.18.0 | Direct in storefront; also transitive in backend path | same backend path as 1115806 | Current source uses `isEqual`, `pick`, and `mapKeys`; it does not invoke the affected `_.unset`/`_.omit` array-path behavior. | LOCKFILE_ONLY, after compatibility verification | FIX_BEFORE_LIVE |
| MODERATE | 1117015 / GHSA-qx2v-qp2m-jg93 / CVE-2026-41305 | postcss 8.4.31 | <8.5.10 | >=8.5.10 | Transitive through Next; also a build tool dependency | `apps__storefront>next>postcss` | Build-time dependency; current product source does not accept or stringify user CSS. | NEXT_UPGRADE or compatible lockfile/override review | NOT_REACHABLE_DOCUMENTED |
| MODERATE | 1130709 / GHSA-fxqj-rqcc-2cmp / CVE-2026-69153 | postcss 8.4.31 | <=8.5.22 | >=8.5.23 | Transitive through Next; also a build tool dependency | `apps__storefront>next>postcss` | Build-time dependency; current product source does not accept or stringify user CSS. | NEXT_UPGRADE or compatible lockfile/override review | NOT_REACHABLE_DOCUMENTED |
| MODERATE | 1158506 / GHSA-x5fp-wj9c-mxmx / CVE-2026-82562 | qs 6.15.3 | >=6.14.2 <=6.15.3 | >=6.16.0 | Direct storefront dependency | `apps__storefront>qs` | Current source does not directly invoke `qs`; package is part of the storefront runtime dependency graph and needs compatibility review. | LOCKFILE_ONLY | FIX_BEFORE_LIVE |
| MODERATE | 1158507 / GHSA-4mjr-xmp4-gh2g / CVE-2026-82417 | qs 6.15.3 | >=2.2.5 <6.16.0 | >=6.16.0 | Direct storefront dependency | `apps__storefront>qs` | Current source does not directly invoke `qs`; package is part of the storefront runtime dependency graph and needs compatibility review. | LOCKFILE_ONLY | FIX_BEFORE_LIVE |
| MODERATE | 1119441 / GHSA-w5hq-g745-h8pq / CVE-2026-41907 | uuid 9.0.1 | <11.1.1 | >=11.1.1 | Transitive | `apps__backend>@medusajs/medusa>@medusajs/event-bus-redis>bullmq>uuid` | Medusa event-bus dependency; no direct uuid use in the reviewed PayPal or storefront source. | MEDUSA_UPGRADE or compatible transitive override review | NEEDS_MORE_EVIDENCE |

## Triage decision

`NEXT_VERSION=15.5.24` remains fixed. `MEDUSA_INSTALLED_VERSION=2.19.0`
remains fixed. The advisories are recorded for a separate dependency
maintenance decision; no automatic fix/update is authorized here. The direct
storefront packages and Next image/build dependency chain should be resolved
before live payment or production launch, with compatibility testing before
any lockfile-only change. Medusa transitive advisories require a separately
reviewed Medusa-compatible maintenance path.

`PAYPAL_PROVIDER_ENABLED=NO` and `PAYPAL_CUSTOMER_EXPOSURE=DISABLED`; this
audit does not authorize sandbox or live payment exposure.
