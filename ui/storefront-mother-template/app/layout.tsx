import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Storefront Mother Template",
  description: "Business-data-free visual template laboratory"
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
