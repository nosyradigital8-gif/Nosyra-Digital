"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const menuItems = [
    { label: "Services", href: "#services" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Pricing", href: "#pricing" },
    { label: "Contact", href: "#contact" },
  ]

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-white shadow-md" : "bg-white/95"}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link href="#home" className="flex items-center gap-2 flex-shrink-0 hover:opacity-80 transition-opacity">
              <div className="w-16 h-16 relative">
                <Image
                  src="/images/20251130-182150.png"
                  alt="Nosyra Digital"
                  width={64}
                  height={64}
                  className="object-contain"
                  priority
                />
              </div>
              <span className="text-xl font-bold text-[#0a0e27] hidden sm:inline"></span>
            </Link>

            {/* Desktop Menu */}
            <nav className="hidden md:flex items-center gap-8">
              {menuItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-[#64748b] hover:text-[#00d4ff] transition-colors text-sm font-medium"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden md:flex items-center gap-4">
              <a
                href="#contact"
                className="px-6 py-2 bg-[#00d4ff] text-[#0a0e27] rounded-lg font-semibold hover:bg-[#00b8d4] transition-all duration-300 text-sm"
              >
                Get Quote
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-[#00d4ff] p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu - Slide in from right */}
      {mobileMenuOpen && (
        <>
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black/30 z-40 md:hidden"
            onClick={() => setMobileMenuOpen(false)}
            style={{ animation: "fadeIn 0.3s ease-out" }}
          />
          {/* Slide-in menu */}
          <div className="fixed top-0 right-0 w-64 h-screen bg-white z-40 md:hidden flex flex-col p-6 animate-slide-in-right shadow-lg">
            <div className="flex justify-between items-center mb-8">
              <span className="font-bold text-[#0a0e27]">Menu</span>
              <button onClick={() => setMobileMenuOpen(false)} className="text-[#00d4ff]" aria-label="Close menu">
                <X size={24} />
              </button>
            </div>
            <nav className="flex flex-col gap-6">
              {menuItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-[#0a0e27] hover:text-[#00d4ff] transition-colors font-medium text-lg"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contact"
                className="w-full px-4 py-3 bg-[#00d4ff] text-[#0a0e27] rounded-lg font-semibold text-center mt-4 hover:bg-[#00b8d4] transition-all"
                onClick={() => setMobileMenuOpen(false)}
              >
                Get Quote
              </a>
            </nav>
          </div>
        </>
      )}

      <div className="h-16"></div>
    </>
  )
}
