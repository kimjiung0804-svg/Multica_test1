import type { Metadata } from "next"
import { Cormorant_Garamond, Figtree, Outfit, Oxanium } from "next/font/google"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"
import { site } from "@/lib/site"

const oxaniumHeading = Oxanium({subsets:['latin'],variable:'--font-heading'})

const outfit = Outfit({subsets:['latin'],variable:'--font-sans'})

export const metadata: Metadata = {
  title: `${site.name} — Photographer`,
  description:
    "Portfolio of Jiung Kim — portraits, travel, and editorial photography.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("antialiased", "font-sans", outfit.variable, oxaniumHeading.variable)}
    >
      <body>
        <ThemeProvider defaultTheme="light" enableSystem={false}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
