import type React from "react"
import type { Metadata } from "next"
import { Inter, Poppins, Nunito } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { QuickLinksMenu } from "@/components/quick-links-menu"
import { SiteSearch } from "@/components/site-search"
import { Suspense } from "react"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
})

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-nunito",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Youpi - Your Personal AI Interpreter | Real-Time Translation",
  description:
    "AI-powered real-time translation for meetings, videos, and conversations. Break language barriers effortlessly with 50+ languages and 95% accuracy. Available on all platforms.",
  keywords: [
    "real-time translation",
    "AI interpreter",
    "language translation",
    "meeting translator",
    "voice translation",
    "multilingual communication",
    "instant translation",
    "AI translation app",
  ],
  authors: [{ name: "Youpi Team" }],
  creator: "Youpi",
  publisher: "Youpi",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://youpi.app",
    title: "Youpi - Your Personal AI Interpreter",
    description:
      "AI-powered real-time translation for meetings, videos, and conversations. Break language barriers effortlessly.",
    siteName: "Youpi",
  },
  twitter: {
    card: "summary_large_image",
    title: "Youpi - Your Personal AI Interpreter",
    description:
      "AI-powered real-time translation for meetings, videos, and conversations. Break language barriers effortlessly.",
    creator: "@youpi",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fafafa" },
    { media: "(prefers-color-scheme: dark)", color: "#141414" },
  ],
    generator: 'youpi@ai'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable} ${nunito.variable}`} suppressHydrationWarning>
      <body className="font-nunito antialiased">
        <ThemeProvider>
          <Suspense fallback={<div>Loading...</div>}>
            <QuickLinksMenu />
            <SiteSearch />
            {children}
          </Suspense>
        </ThemeProvider>
      </body>
    </html>
  )
}
