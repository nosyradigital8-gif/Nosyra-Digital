"use client"

import Link from "next/link"
import Image from "next/image"
import { Instagram, Facebook } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Column 1 - About */}
          <div>
            <Link href="#home" className="flex items-center gap-2 mb-4 hover:opacity-80 transition-opacity">
              <div className="w-10 h-10 relative">
                <Image
                  src="/images/20251130-182150.png"
                  alt="Nosyra Digital"
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>
              <span className="text-lg font-bold text-[#0a0e27]">Nosyra Digital</span>
            </Link>
            <p className="text-[#64748b] text-sm mb-6">Your Digital Success Partner</p>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/nosyradigital01"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white border border-gray-200 rounded-lg text-[#00d4ff] hover:border-[#00d4ff] transition-all duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.facebook.com/nosyradigital"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white border border-gray-200 rounded-lg text-[#00d4ff] hover:border-[#00d4ff] transition-all duration-300"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Column 2 - Quick Links */}
          <div>
            <h3 className="text-[#0a0e27] font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="text-[#64748b] hover:text-[#00d4ff] transition-colors text-sm">
                  Home
                </a>
              </li>
              <li>
                <a href="#services" className="text-[#64748b] hover:text-[#00d4ff] transition-colors text-sm">
                  Services
                </a>
              </li>
              <li>
                <a href="#portfolio" className="text-[#64748b] hover:text-[#00d4ff] transition-colors text-sm">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-[#64748b] hover:text-[#00d4ff] transition-colors text-sm">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#contact" className="text-[#64748b] hover:text-[#00d4ff] transition-colors text-sm">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3 - Contact */}
          <div>
            <h3 className="text-[#0a0e27] font-bold mb-6">Contact</h3>
            <div className="space-y-3 mb-6">
              <a
                href="tel:+2347058466586"
                className="text-[#64748b] hover:text-[#00d4ff] transition-colors text-sm block"
              >
                +234 705 846 6586
              </a>
              <a
                href="https://wa.me/2347058466586"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#00d4ff] hover:text-[#0a0e27] transition-colors text-sm block font-semibold"
              >
                Chat on WhatsApp
              </a>
              <a
                href="mailto:info@nosyradigital.com.ng"
                className="text-[#64748b] hover:text-[#00d4ff] transition-colors text-sm block"
              >
                info@nosyradigital.com.ng
              </a>
            </div>
            <a
              href="#contact"
              className="px-6 py-2 bg-[#00d4ff] text-[#0a0e27] rounded-lg font-semibold text-sm hover:bg-[#00b8d4] transition-all duration-300 inline-block"
            >
              Get Quote
            </a>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8">
          <p className="text-center text-[#94a3b8] text-sm">
            Copyright © {currentYear} Nosyra Digital. All Rights Reserved. Based in Lagos, Nigeria 🇳🇬
          </p>
        </div>
      </div>
    </footer>
  )
}
