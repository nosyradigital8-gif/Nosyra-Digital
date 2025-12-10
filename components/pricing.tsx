"use client"

import { Check } from "lucide-react"

const packages = [
  {
    id: 1,
    name: "Starter",
    price: "₦250,000",
    description: "Perfect for small businesses",
    features: [
      "5-page website",
      "Mobile responsive",
      "Contact form",
      "Social media links",
      "Basic SEO",
      "1 month support",
    ],
  },
  {
    id: 2,
    name: "Professional",
    price: "₦500,000",
    description: "Most popular choice",
    popular: true,
    features: [
      "10-page website",
      "E-commerce ready",
      "Payment integration",
      "Blog/CMS system",
      "Advanced SEO",
      "3 months support",
    ],
  },
  {
    id: 3,
    name: "Enterprise",
    price: "₦1,000,000+",
    description: "Custom solutions",
    features: [
      "Unlimited pages",
      "Full e-commerce",
      "Custom features",
      "Advanced integrations",
      "Priority support",
      "6 months support",
    ],
  },
]

export function Pricing() {
  return (
    <section id="pricing" className="relative py-20 md:py-32 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0a0e27] mb-4">Simple Pricing</h2>
          <p className="text-lg text-[#64748b]">Transparent pricing for all sizes</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {packages.map((pkg, index) => (
            <div
              key={pkg.id}
              className={`relative rounded-lg overflow-hidden transition-all duration-300 ${
                pkg.popular
                  ? "md:scale-105 bg-white border-2 border-[#00d4ff] shadow-lg shadow-cyan-500/30"
                  : "bg-white border border-gray-200 hover:border-[#00d4ff] hover:shadow-lg"
              }`}
            >
              {pkg.popular && (
                <div className="absolute top-4 right-4 bg-[#00d4ff] text-[#0a0e27] px-3 py-1 rounded-full text-xs font-bold">
                  Popular
                </div>
              )}

              <div className="p-8">
                <h3 className="text-2xl font-bold text-[#0a0e27] mb-2">{pkg.name}</h3>
                <p className="text-[#64748b] text-sm mb-4">{pkg.description}</p>

                <div className="mb-6">
                  <div className="text-4xl font-bold text-[#00d4ff]">{pkg.price}</div>
                </div>

                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-[#00d4ff] flex-shrink-0 mt-0.5" />
                      <span className="text-[#64748b] text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className={`w-full py-3 rounded-lg font-bold transition-all duration-300 inline-block text-center ${
                    pkg.popular
                      ? "bg-[#00d4ff] text-[#0a0e27] hover:bg-[#00b8d4]"
                      : "border-2 border-[#00d4ff] text-[#00d4ff] hover:bg-[#00d4ff]/5"
                  }`}
                >
                  Get Started
                </a>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-[#64748b] text-sm">
          All packages include free consultation. Custom packages available upon request.
        </p>
      </div>
    </section>
  )
}
