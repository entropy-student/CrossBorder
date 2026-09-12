"use client"

import { convertToLocale, toNumericAmount } from "@lib/util/money"
import React from "react"

type CartTotalsProps = {
  totals: {
    total?: number | null
    subtotal?: number | null
    tax_total?: number | null
    currency_code: string
    item_subtotal?: number | null
    shipping_subtotal?: number | null
    discount_subtotal?: number | null
    shipping_methods?: unknown[] | null
    shipping_address?: unknown | null
    billing_address?: unknown | null
  }
}

const CartTotals: React.FC<CartTotalsProps> = ({ totals }) => {
  const {
    currency_code,
    total,
    tax_total,
    item_subtotal,
    shipping_subtotal,
    discount_subtotal,
    shipping_methods,
    shipping_address,
    billing_address,
  } = totals

  const itemSubtotal = toNumericAmount(item_subtotal)
  const shippingSubtotal = toNumericAmount(shipping_subtotal)
  const discountSubtotal = toNumericAmount(discount_subtotal)
  const taxTotal = toNumericAmount(tax_total)
  const cartTotal = toNumericAmount(total)
  const shippingResolved = Array.isArray(shipping_methods) && shipping_methods.length > 0
  const taxAddress = shipping_address || billing_address
  const taxAddressResolved =
    typeof taxAddress === "object" &&
    taxAddress !== null &&
    ["address_1", "city", "postal_code", "country_code"].every((field) => {
      const value = (taxAddress as Record<string, unknown>)[field]
      return typeof value === "string" && value.trim().length > 0
    })
  const taxResolved = tax_total != null && taxAddressResolved

  return (
    <div>
      <div className="flex flex-col gap-y-2 txt-medium text-ui-fg-subtle ">
        <div className="flex items-center justify-between">
          <span>Subtotal (excl. shipping and taxes)</span>
          <span data-testid="cart-subtotal" data-value={itemSubtotal}>
            {convertToLocale({ amount: itemSubtotal, currency_code })}
          </span>
        </div>
        <div className="flex items-center justify-between">
          <span>Shipping</span>
          <span data-testid="cart-shipping" data-value={shippingSubtotal}>
            {shippingResolved
              ? convertToLocale({ amount: shippingSubtotal, currency_code })
              : "Calculated at checkout"}
          </span>
        </div>
        {!!discountSubtotal && (
          <div className="flex items-center justify-between">
            <span>Discount</span>
            <span
              className="text-ui-fg-interactive"
              data-testid="cart-discount"
              data-value={discountSubtotal}
            >
              -{" "}
              {convertToLocale({
                amount: discountSubtotal,
                currency_code,
              })}
            </span>
          </div>
        )}
        <div className="flex justify-between">
          <span className="flex gap-x-1 items-center ">Taxes</span>
          <span data-testid="cart-taxes" data-value={taxTotal}>
            {taxResolved
              ? convertToLocale({ amount: taxTotal, currency_code })
              : "Calculated at checkout"}
          </span>
        </div>
      </div>
      <div className="h-px w-full border-b border-gray-200 my-4" />
      <div className="flex items-center justify-between text-ui-fg-base mb-2 txt-medium ">
        <span>Total</span>
        <span
          className="txt-xlarge-plus"
          data-testid="cart-total"
          data-value={cartTotal}
        >
          {convertToLocale({ amount: cartTotal, currency_code })}
        </span>
      </div>
      <div className="h-px w-full border-b border-gray-200 mt-4" />
    </div>
  )
}

export default CartTotals
