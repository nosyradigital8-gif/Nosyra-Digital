import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Nosyra Digital | Professional Web Design, Branding & Social Media Agency",
  description:
    "Global web design, branding, and social media design agency. We create stunning websites, brand identities, and social media graphics for businesses worldwide. Affordable packages with fast turnaround times.",
  keywords:
    "web design agency, brand identity design, social media graphics, logo design, e-commerce websites, custom web development, digital branding, social media content, professional web design, brand guidelines, business websites, online presence",
  authors: [{ name: "Nosyra Digital" }],
  creator: "Nosyra Digital",
  generator: "Next.js",
  applicationName: "Nosyra Digital",
  category: "Business, Web Development, Digital Agency, Branding, Design",
  referrer: "origin-when-cross-origin",
  openGraph: {
    title: "Nosyra Digital | Web Design, Branding & Social Media Design Agency",
    description: "Professional web design, brand identity, and social media graphics for businesses worldwide. Fast, affordable, and high-quality digital solutions.",
    type: "website",
    locale: "en_US",
    url: "https://nosyradigital.com.ng",
    siteName: "Nosyra Digital",
    images: [
      {
        url: "/nosyra-logo.png",
        width: 1200,
        height: 630,
        alt: "Nosyra Digital - Web Design, Branding & Social Media Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nosyra Digital | Web Design, Branding & Social Media",
    description: "Professional web design, brand identity, and social media graphics for businesses worldwide",
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
  verification: {
    google: "your-google-verification-code",
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
        <meta property="og:locale" content="en_US" />
        <meta name="format-detection" content="telephone=no" />
        <link rel="canonical" href="https://nosyradigital.com.ng" />
      </head>
      <body className={`font-sans antialiased bg-white text-foreground`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
            }
