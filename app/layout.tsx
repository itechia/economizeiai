import type React from "react"
import type { Metadata } from "next"
import { Inter, Poppins } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css";
import { Providers } from "@/components/providers";

const _inter = Inter({ subsets: ["latin"] })
const _poppins = Poppins({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Economize AI - Cupons e Ofertas Exclusivas",
  description:
    "Entre no maior grupo de promoções do Brasil! Receba cupons exclusivos e ofertas imperdíveis do Mercado Livre, Amazon e Shopee. 100% Gratuito!",
  keywords: "cupons, descontos, promoções, mercado livre, amazon, shopee, ofertas, economia",
  openGraph: {
    title: "Economize AI - Cupons e Ofertas Exclusivas",
    description: "Entre no maior grupo de promoções do Brasil! Receba cupons exclusivos e ofertas imperdíveis.",
    type: "website",
  },
  icons: {
    icon: "/images/economize-20ai-20-281-29.png",
    apple: "/images/economize-20ai-20-281-29.png",
  },
  generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={`font-sans antialiased`}>
        <Providers>
          {children}
        </Providers>
        <Analytics />
      </body>
    </html>
  )
}
