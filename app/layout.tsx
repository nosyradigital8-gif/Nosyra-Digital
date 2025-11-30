import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Nosyra Digital | Web Design & Development Agency in Lagos, Nigeria",
  description:
    "Professional web design, development, and digital solutions for businesses in Lagos, Nigeria. E-commerce websites, branding, and digital marketing services. Affordable packages for startups and established businesses.",
  keywords:
    "web design Lagos, web development Nigeria, e-commerce solutions, digital marketing Lagos, website design Nigeria, custom websites Lagos",
  authors: [{ name: "Nosyra Digital" }],
  creator: "Nosyra Digital",
  generator: "Next.js",
  applicationName: "Nosyra Digital",
  category: "Business, Web Development, Digital Agency",
  referrer: "origin-when-cross-origin",
  openGraph: {
    title: "Nosyra Digital | Web Design & Development Agency in Lagos",
    description: "Professional web design and digital solutions for Nigerian businesses",
    type: "website",
    locale: "en_NG",
    url: "https://nosyradigital.com",
    siteName: "Nosyra Digital",
    images: [
      {
        url: "/nosyra-logo.png",
        width: 1200,
        height: 630,
        alt: "Nosyra Digital Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nosyra Digital | Web Design & Development",
    description: "Professional web design and digital solutions for Nigerian businesses",
    creator: "@nosyradigital01",
    images: ["/nosyra-logo.png"],
  },
  icons: {
    icon: "/favicon.svg",
    apple: "/apple-icon.png",
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
}

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: "#00d4ff",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_NG" />
        <meta name="geo.placename" content="Lagos, Nigeria" />
        <meta name="geo.region" content="NG-LA" />
      </head>
      <body className={`font-sans antialiased bg-white text-foreground`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
