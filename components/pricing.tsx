"use client"

import { useState } from "react"
import { Check, Code, Palette, Share2 } from "lucide-react"

const pricingCategories = [
  {
    id: "web",
    title: "Web Design & Development",
    icon: Code,
    packages: [
      {
        id: 1,
        name: "Starter",
        price: "₦80,000",
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
        price: "₦150,000",
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
        price: "₦250,000+",
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
    ],
  },
  {
    id: "branding",
    title: "Branding & Identity",
    icon: Palette,
    packages: [
      {
        id: 4,
        name: "Basic Logo",
        price: "₦50,000",
        description: "Essential brand identity",
        features: [
          "Logo design (3 concepts)",
          "2 revision rounds",
          "Final files (PNG, JPG)",
          "Basic brand colors",
          "Social media profile sizing",
          "1 week delivery",
        ],
      },
      {
        id: 5,
        name: "Brand Identity",
        price: "₦120,000",
        description: "Complete visual identity",
        popular: true,
        features: [
          "Logo design (5 concepts)",
          "Unlimited revisions",
          "All file formats (AI, EPS, PDF, PNG, JPG, SVG)",
          "Brand color palette",
          "Typography guidelines",
          "Business card design",
          "Letterhead design",
          "Brand style guide",
          "2 weeks delivery",
        ],
      },
      {
        id: 6,
        name: "Premium Package",
        price: "₦200,000",
        description: "Full brand experience",
        features: [
          "Everything in Brand Identity",
          "Brand strategy consultation",
          "Comprehensive brand guidelines (PDF)",
          "Social media kit (templates)",
          "Presentation template",
          "Email signature design",
          "Packaging concepts (if applicable)",
          "3 weeks delivery",
          "3 months support",
        ],
      },
    ],
  },
  {
    id: "social",
    title: "Social Media Design",
    icon: Share2,
    packages: [
      {
        id: 7,
        name: "Starter Pack",
        price: "₦40,000",
        description: "Get started on social",
        features: [
          "10 custom post designs",
          "2 social media platforms",
          "Basic templates",
          "Brand color integration",
          "2 revision rounds",
          "PNG/JPG formats",
        ],
      },
      {
        id: 8,
        name: "Growth Pack",
        price: "₦80,000",
        description: "Consistent content flow",
        popular: true,
        features: [
          "20 custom post designs",
          "All major platforms (IG, FB, Twitter, LinkedIn)",
          "Editable templates",
          "Story/Reel templates (5)",
          "Carousel designs (3)",
          "Unlimited revisions",
          "Source files included",
        ],
      },
      {
        id: 9,
        name: "Pro Monthly",
        price: "₦150,000/mo",
        description: "Full content management",
        features: [
          "40+ posts per month",
          "All platforms covered",
          "Video graphics & animations",
          "Story highlights design",
          "Ad creative designs",
          "Content calendar included",
          "Priority support",
          "Monthly strategy consultation",
        ],
      },
    ],
  },
]

export function Pricing() {
  const [activeCategory, setActiveCategory] = useState("web")

  const currentCategory = pricingCategories.find((cat) => cat.id === activeCategory)

  return (
    <section id="pricing" className="relative py-20 md:py-32 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0a0e27] mb-4">Simple Pricing</h2>
          <p className="text-lg text-[#64748b]">Transparent pricing for all services</p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {pricingCategories.map((category) => {
            const Icon = category.icon
            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeCategory === category.id
                    ? "bg-[#00d4ff] text-[#0a0e27] shadow-lg"
                    : "bg-white text-[#64748b] hover:bg-gray-100 border border-gray-200"
                }`}
              >
                <Icon className="w-5 h-5" />
                <span className="hidden sm:inline">{category.title}</span>
                <span className="sm:hidden">{category.title.split(" ")[0]}</span>
              </button>
            )
          })}
        </div>

        {/* Pricing Cards */}
        {currentCategory && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {currentCategory.packages.map((pkg) => (
              <div
                key={pkg.id}
                className={`relative rounded-lg overflow-hidden transition-all duration-300 ${
                  pkg.popular
                    ? "md:scale-105 bg-white border-2 border-[#00d4ff] shadow-xl shadow-cyan-500/20"
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
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
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
        )}

        <p className="text-center text-[#64748b] text-sm">
          All packages include free consultation. Custom packages available upon request.
        </p>
      </div>
    </section>
  )
          }
