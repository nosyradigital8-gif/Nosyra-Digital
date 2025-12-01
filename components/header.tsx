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
            <Link href="#home" className="flex items-center gap-3 flex-shrink-0 hover:opacity-80 transition-opacity">
              <div className="w-24 h-24 relative">
                <Image
                  src="/images/20251130-182150.png"
                  alt="Nosyra Digital"
                  width={96}
                  height={96}
                  className="object-contain"
                  priority
                />
              </div>
              <span className="text-2xl font-bold text-[#0a0e27] hidden sm:inline">Nosyra</span>
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
              className="md:hidden p-2 text-[#0a0e27] hover:text-[#00d4ff] transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <nav className="px-4 py-4 space-y-4">
              {menuItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="block text-[#64748b] hover:text-[#00d4ff] transition-colors text-sm font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contact"
                className="block w-full text-center px-6 py-2 bg-[#00d4ff] text-[#0a0e27] rounded-lg font-semibold hover:bg-[#00b8d4] transition-all duration-300 text-sm"
                onClick={() => setMobileMenuOpen(false)}
              >
                Get Quote
              </a>
            </nav>
          </div>
        )}
      </header>
    </>
  )
}
