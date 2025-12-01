"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"

export function Header() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    if (sidebarOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
  }, [sidebarOpen])

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
              onClick={() => setSidebarOpen(!sidebarOpen)}
              aria-label="Toggle menu"
            >
              {sidebarOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden transition-opacity duration-300"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-xl z-50 transform transition-transform duration-300 ease-in-out md:hidden ${
          sidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Sidebar Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-200">
            <span className="text-xl font-bold text-[#0a0e27]">Menu</span>
            <button
              onClick={() => setSidebarOpen(false)}
              className="p-2 text-[#0a0e27] hover:text-[#00d4ff] transition-colors"
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Sidebar Navigation */}
          <nav className="flex-1 px-4 py-6 space-y-2">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block px-4 py-3 text-[#64748b] hover:text-[#00d4ff] hover:bg-gray-50 rounded-lg transition-colors text-base font-medium"
                onClick={() => setSidebarOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Sidebar CTA */}
          <div className="p-4 border-t border-gray-200">
            <a
              href="#contact"
              className="block w-full text-center px-6 py-3 bg-[#00d4ff] text-[#0a0e27] rounded-lg font-semibold hover:bg-[#00b8d4] transition-all duration-300 text-base"
              onClick={() => setSidebarOpen(false)}
            >
              Get Quote
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
