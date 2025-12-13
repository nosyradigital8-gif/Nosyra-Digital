"use client"

import { Code, ShoppingCart, Smartphone, Megaphone, Palette, Share2 } from "lucide-react"

const services = [
  {
    id: 1,
    title: "Custom Website",
    description: "Professional, responsive websites built to showcase your business",
    icon: Code,
  },
  {
    id: 2,
    title: "E-Commerce Store",
    description: "Complete online stores with secure payment integration",
    icon: ShoppingCart,
  },
  {
    id: 3,
    title: "Mobile Optimization",
    description: "Websites optimized for all devices and screen sizes",
    icon: Smartphone,
  },
  {
    id: 4,
    title: "Digital Marketing",
    description: "SEO optimization and online visibility solutions",
    icon: Megaphone,
  },
  {
    id: 5,
    title: "Branding & Identity",
    description: "Logo design, brand guidelines, and visual identity systems",
    icon: Palette,
  },
  {
    id: 6,
    title: "Social Media Design",
    description: "Eye-catching graphics and templates for your social platforms",
    icon: Share2,
  },
]

export function Services() {
  return (
    <section id="services" className="relative py-20 md:py-32 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0a0e27] mb-4">
            Our Services
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive digital solutions to help your business thrive online
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <div
                key={service.id}
                className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-14 h-14 bg-[#00d4ff]/10 rounded-lg flex items-center justify-center mb-6">
                  <Icon className="w-7 h-7 text-[#00d4ff]" />
                </div>
                <h3 className="text-xl font-bold text-[#0a0e27] mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            )
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <a
            href="#contact"
            className="inline-block px-8 py-4 bg-[#00d4ff] text-[#0a0e27] rounded-lg font-bold hover:bg-[#00b8d4] transition-all duration-300"
          >
            Get Started Today
          </a>
        </div>
      </div>
    </section>
  )
    }
