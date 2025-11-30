"use client"

import { MessageCircle, ArrowUp } from "lucide-react"
import { useState, useEffect } from "react"

export function FloatingCTA() {
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <>
      {/* WhatsApp Button */}
      <a
        href="https://wa.me/2347058466586"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 p-4 bg-[#25d366] text-white rounded-full hover:shadow-lg hover:shadow-green-500/50 transition-all duration-300 hover:scale-110 animate-glow-pulse"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
      </a>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-24 right-6 z-40 p-4 bg-[#00d4ff] text-[#0a0e27] rounded-full hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-110 animate-fade-in-up"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-6 h-6" />
        </button>
      )}

      {/* Special Offer Badge */}
      <div className="fixed bottom-6 left-6 z-40 px-4 py-3 bg-[#00d4ff] text-[#0a0e27] rounded-full font-bold text-sm hidden md:flex items-center gap-2 animate-glow-pulse">
        🎁 Launch Special: 20% OFF
      </div>
    </>
  )
}
