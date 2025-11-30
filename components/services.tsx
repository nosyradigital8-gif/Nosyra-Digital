"use client"

import { Code, ShoppingCart, Smartphone, Megaphone } from "lucide-react"

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
]

export function Services() {
  return (
    <section id="services" className="relative py-20 md:py-32 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0a0e27] mb-4">What We Offer</h2>
          <p className="text-lg text-[#64748b] max-w-2xl mx-auto">
            Complete digital solutions tailored to your business needs
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={service.id}
                className="p-8 bg-white rounded-lg border border-gray-200 hover:border-[#00d4ff] hover:shadow-lg transition-all duration-300 group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-6 p-4 bg-[#00d4ff]/10 rounded-lg w-fit group-hover:bg-[#00d4ff]/20 transition-colors">
                  <Icon className="w-6 h-6 text-[#00d4ff]" />
                </div>
                <h3 className="text-xl font-bold text-[#0a0e27] mb-3">{service.title}</h3>
                <p className="text-[#64748b]">{service.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
