import { isEmpty } from "./isEmpty"

type ConvertToLocaleParams = {
  amount: unknown
  currency_code: string
  minimumFractionDigits?: number
  maximumFractionDigits?: number
  locale?: string
}

export const toNumericAmount = (value: unknown): number => {
  if (typeof value === "number") {
    return Number.isFinite(value) ? value : 0
  }

  if (typeof value === "string") {
    const parsed = Number(value)
    return Number.isFinite(parsed) ? parsed : 0
  }

  if (value && typeof value === "object") {
    const source = value as Record<string, unknown>
    const numeric = source.numeric_
    if (typeof numeric === "number" && Number.isFinite(numeric)) {
      return numeric
    }

    const raw = source.raw_
    if (raw && typeof raw === "object") {
      return toNumericAmount((raw as Record<string, unknown>).value)
    }

    if ("value" in source) {
      return toNumericAmount(source.value)
    }
  }

  return 0
}

export const convertToLocale = ({
  amount,
  currency_code,
  minimumFractionDigits,
  maximumFractionDigits,
  locale = "en-US",
}: ConvertToLocaleParams) => {
  const numericAmount = toNumericAmount(amount)

  return currency_code && !isEmpty(currency_code)
    ? new Intl.NumberFormat(locale, {
        style: "currency",
        currency: currency_code,
        minimumFractionDigits,
        maximumFractionDigits,
      }).format(numericAmount)
    : numericAmount.toString()
}
