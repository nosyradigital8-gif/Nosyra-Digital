"use client"

import Image from "next/image"

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[calc(100vh-64px)] bg-white overflow-hidden flex items-center justify-center pt-20"
    >
      {/* African background image */}
      <Image
        src="/lagos-nigeria-modern-office-skyline-african-tech-p.jpg"
        alt="Modern office in Lagos, Nigeria"
        fill
        className="absolute inset-0 w-full h-full object-cover"
        priority
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        {/* Trust badges */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          <div className="px-4 py-2 bg-white/90 rounded-full text-[#0a0e27] text-xs md:text-sm font-medium">
            Fast Turnaround
          </div>
          <div className="px-4 py-2 bg-white/90 rounded-full text-[#0a0e27] text-xs md:text-sm font-medium">
            Affordable Pricing
          </div>
          <div className="px-4 py-2 bg-white/90 rounded-full text-[#0a0e27] text-xs md:text-sm font-medium">
            Based in Lagos
          </div>
        </div>

        {/* Main headline */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 text-balance">
          Stop Losing Customers to
          <span className="block text-[#00d4ff]">Bad Websites</span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg md:text-xl text-white max-w-2xl mx-auto mb-8">
          We build websites that turn Lagos visitors into paying customers. Fast turnaround. Affordable pricing. Real results.
        </p>

        {/* Launch special badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#00d4ff]/20 border border-[#00d4ff] rounded-full text-white text-sm md:text-base mb-8">
          <span className="animate-pulse">🚀</span>
          <span className="font-semibold">Launch Special: First 5 clients save 40%</span>
          <span className="px-2 py-1 bg-[#00d4ff] text-[#0a0e27] rounded-full text-xs font-bold">2 SPOTS LEFT</span>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#services"
            className="px-8 py-4 bg-[#00d4ff] text-[#0a0e27] rounded-lg font-bold hover:bg-[#00b8d4] transition-all duration-300 text-base md:text-lg inline-block"
          >
            See Our Services
          </a>
          <a
            href="#contact"
            className="px-8 py-4 bg-white text-[#0a0e27] rounded-lg font-bold hover:bg-gray-100 transition-all duration-300 text-base md:text-lg inline-block"
          >
            Get A Quote
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce">
        <div className="flex flex-col items-center gap-2">
          <span className="text-white text-sm">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-white rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  )
            }
