import type React from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FloatingCTA } from "@/components/floating-cta"

export default function CaseStudyLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main className="bg-[#0a0e27] overflow-x-hidden">
      <Header />
      {children}
      <Footer />
      <FloatingCTA />
    </main>
  )
}
