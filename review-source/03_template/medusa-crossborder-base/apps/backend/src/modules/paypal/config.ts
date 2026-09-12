import { MedusaError } from "@medusajs/framework/utils"

export type PayPalRuntimeEnvironment = "sandbox" | "production"
export type PayPalCheckoutExposureMode = "customer" | "technical_test" | "paypal_sandbox_test"

export const PAYPAL_PAYMENT_RETURN_PATH = "/api/payment-return"

type Environment = Record<string, string | undefined>

function isUsableCredential(value: string | undefined): boolean {
  const normalized = value?.trim() || ""
  return Boolean(
    normalized &&
      !/^<[^>]+>$/.test(normalized) &&
      !/(PLACEHOLDER|SET_LOCALLY|LOCAL_ONLY|GENERATED_BY)/i.test(normalized)
  )
}

function requireHttpsUrl(value: string | undefined, name: string): URL {
  if (!value?.trim()) throw new MedusaError(MedusaError.Types.INVALID_DATA, `${name} is required when PayPal is enabled.`)
  let parsed: URL
  try {
    parsed = new URL(value)
  } catch {
    throw new MedusaError(MedusaError.Types.INVALID_DATA, `${name} must be a valid HTTPS URL.`)
  }
  if (parsed.protocol !== "https:" || parsed.username || parsed.password || parsed.hash) {
    throw new MedusaError(MedusaError.Types.INVALID_DATA, `${name} must be an HTTPS URL without credentials or fragments.`)
  }
  if (parsed.pathname !== PAYPAL_PAYMENT_RETURN_PATH) {
    throw new MedusaError(MedusaError.Types.INVALID_DATA, `${name} must use the ${PAYPAL_PAYMENT_RETURN_PATH} callback path.`)
  }
  return parsed
}

export function validatePayPalEnvironment(env: Environment): void {
  const enabled = env.PAYPAL_PROVIDER_ENABLED?.toLowerCase() === "true"
  const environment = (env.PAYPAL_ENVIRONMENT?.toLowerCase() || "sandbox") as PayPalRuntimeEnvironment
  const intent = env.PAYPAL_PAYMENT_INTENT?.toUpperCase() || "AUTHORIZE"
  const autoCapture = env.PAYPAL_AUTO_CAPTURE?.toLowerCase() === "true"

  if (environment !== "sandbox" && environment !== "production") {
    throw new MedusaError(MedusaError.Types.INVALID_DATA, "PAYPAL_ENVIRONMENT must be sandbox or production.")
  }
  if (autoCapture) {
    throw new MedusaError(MedusaError.Types.INVALID_DATA, "PAYPAL_AUTO_CAPTURE=true is unsupported: the reviewed PayPal path is AUTHORIZE only.")
  }
  if (intent !== "AUTHORIZE") {
    throw new MedusaError(MedusaError.Types.INVALID_DATA, "PAYPAL_PAYMENT_INTENT must be AUTHORIZE for the reviewed PayPal path.")
  }
  if (!enabled) return
  if (environment !== "sandbox") {
    throw new MedusaError(MedusaError.Types.NOT_ALLOWED, "PayPal production transport is disabled; sandbox is the only allowed environment.")
  }
  if (!isUsableCredential(env.PAYPAL_CLIENT_ID) || !isUsableCredential(env.PAYPAL_CLIENT_SECRET)) {
    throw new MedusaError(MedusaError.Types.INVALID_DATA, "PAYPAL_PROVIDER_ENABLED=true requires non-placeholder sandbox client credentials.")
  }
  if (!isUsableCredential(env.PAYPAL_WEBHOOK_ID)) {
    throw new MedusaError(MedusaError.Types.INVALID_DATA, "PAYPAL_PROVIDER_ENABLED=true requires PAYPAL_WEBHOOK_ID.")
  }

  const returnUrl = requireHttpsUrl(env.PAYPAL_RETURN_URL, "PAYPAL_RETURN_URL")
  const cancelUrl = requireHttpsUrl(env.PAYPAL_CANCEL_URL, "PAYPAL_CANCEL_URL")
  if (returnUrl.origin !== cancelUrl.origin) {
    throw new MedusaError(MedusaError.Types.INVALID_DATA, "PAYPAL_RETURN_URL and PAYPAL_CANCEL_URL must share the same storefront origin.")
  }
  if (cancelUrl.searchParams.get("cancel") !== "1") {
    throw new MedusaError(MedusaError.Types.INVALID_DATA, "PAYPAL_CANCEL_URL must identify the cancellation return with cancel=1.")
  }
  if (env.PAYPAL_STOREFRONT_ORIGIN?.trim() && env.PAYPAL_STOREFRONT_ORIGIN.trim() !== returnUrl.origin) {
    throw new MedusaError(MedusaError.Types.INVALID_DATA, "PAYPAL_STOREFRONT_ORIGIN must match the configured PayPal callback URL origin.")
  }

  const backendMode = (env.MEDUSA_CHECKOUT_INSTANCE_MODE || "customer") as PayPalCheckoutExposureMode
  const declaredMode = (env.PAYPAL_CHECKOUT_EXPOSURE_MODE || backendMode) as PayPalCheckoutExposureMode
  if (!(["customer", "technical_test", "paypal_sandbox_test"] as string[]).includes(backendMode)) {
    throw new MedusaError(MedusaError.Types.INVALID_DATA, "MEDUSA_CHECKOUT_INSTANCE_MODE is not a supported checkout exposure mode.")
  }
  if (!(["customer", "technical_test", "paypal_sandbox_test"] as string[]).includes(declaredMode)) {
    throw new MedusaError(MedusaError.Types.INVALID_DATA, "PAYPAL_CHECKOUT_EXPOSURE_MODE is not a supported checkout exposure mode.")
  }
  if (declaredMode !== backendMode || declaredMode !== "paypal_sandbox_test") {
    throw new MedusaError(MedusaError.Types.NOT_ALLOWED, "Enabled PayPal requires backend and storefront exposure mode paypal_sandbox_test.")
  }
}

export function validatePayPalTemplateMode(backend: Environment, storefront: Environment): void {
  const backendMode = backend.MEDUSA_CHECKOUT_INSTANCE_MODE || "customer"
  const storefrontMode = storefront.NEXT_PUBLIC_CHECKOUT_EXPOSURE_MODE || "customer"
  if (backendMode !== storefrontMode) {
    throw new MedusaError(MedusaError.Types.INVALID_DATA, "Backend MEDUSA_CHECKOUT_INSTANCE_MODE and storefront NEXT_PUBLIC_CHECKOUT_EXPOSURE_MODE must match.")
  }
}
