"use client"

import Link from "next/link"
import { ArrowLeft, ExternalLink, CheckCircle } from "lucide-react"

export default function PrestigeEstatesCaseStudy() {
  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back button */}
        <Link
          href="/#portfolio"
          className="inline-flex items-center gap-2 text-[#00d4ff] hover:text-white transition-colors mb-8 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          Back to Portfolio
        </Link>

        {/* Hero section */}
        <div className="mb-12">
          <div className="bg-gradient-to-br from-[#111827] to-[#0a0e27] rounded-lg p-8 md:p-12 border border-[#334155] mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Prestige Estates</h1>
            <p className="text-xl text-[#cbd5e1] mb-6">
              Luxury real estate platform showcasing premium properties with advanced filtering and lead capture
            </p>
            <div className="flex gap-4">
              <a
                href="https://prestigeestate.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#00d4ff] text-[#0a0e27] rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all"
              >
                Visit Live Project <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Project details grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {[
              { label: "Type", value: "Real Estate" },
              { label: "Duration", value: "8 Weeks" },
              { label: "Team Size", value: "6 Members" },
              { label: "Result", value: "100+ Leads/Mo" },
            ].map((item) => (
              <div key={item.label} className="bg-[#1a1f3a] border border-[#334155] rounded-lg p-4">
                <p className="text-[#94a3b8] text-sm mb-1">{item.label}</p>
                <p className="text-white font-bold">{item.value}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Challenge section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6">The Challenge</h2>
          <div className="bg-[#1a1f3a] border border-[#334155] rounded-lg p-8">
            <p className="text-[#cbd5e1] leading-relaxed mb-4">
              Prestige Estates needed a sophisticated platform to showcase luxury properties and capture high-value
              leads. The challenge was creating an elegant interface that reflected the premium nature of their
              properties while maintaining functionality and user engagement.
            </p>
            <p className="text-[#cbd5e1] leading-relaxed">
              Requirements included advanced property filtering, virtual tours capability, lead capture forms, and a
              system to manage agent inquiries and property showings.
            </p>
          </div>
        </section>

        {/* Solution section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6">Our Solution</h2>
          <div className="space-y-4">
            {[
              {
                title: "Premium Property Showcase",
                description:
                  "Designed elegant property cards with high-resolution image galleries and detailed specifications.",
              },
              {
                title: "Advanced Search Filters",
                description:
                  "Built sophisticated filtering system for price range, location, property type, amenities, and more.",
              },
              {
                title: "Lead Capture Optimization",
                description: "Strategically placed inquiry forms with minimal friction to maximize lead conversion.",
              },
              {
                title: "Agent Management",
                description:
                  "Created agent profiles, contact systems, and inquiry routing for seamless customer service.",
              },
              {
                title: "Virtual Tour Integration",
                description: "Integrated capability for 360-degree property tours and video showcases.",
              },
              {
                title: "Analytics Dashboard",
                description: "Built backend dashboard for tracking inquiries, property views, and lead management.",
              },
            ].map((item, index) => (
              <div key={index} className="bg-[#1a1f3a] border border-[#334155] rounded-lg p-6 flex gap-4">
                <CheckCircle className="w-6 h-6 text-[#00d4ff] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-white font-bold mb-2">{item.title}</h3>
                  <p className="text-[#cbd5e1]">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Results section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6">Results & Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { metric: "100+", label: "Qualified Leads Monthly" },
              { metric: "45%", label: "Inquiry Response Rate" },
              { metric: "25+", label: "Active Properties" },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-[#00d4ff]/20 to-[#00d4ff]/5 border border-[#00d4ff]/30 rounded-lg p-8 text-center"
              >
                <p className="text-4xl font-bold text-[#00d4ff] mb-2">{item.metric}</p>
                <p className="text-[#cbd5e1]">{item.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-r from-[#1a1f3a] to-[#111827] border border-[#334155] rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Ready to Showcase Your Properties?</h2>
          <p className="text-[#cbd5e1] mb-6">Let's build a platform that attracts qualified buyers and investors</p>
          <a
            href="/#contact"
            className="inline-block px-8 py-3 bg-[#00d4ff] text-[#0a0e27] rounded-lg font-bold hover:shadow-lg hover:shadow-cyan-500/50 transition-all"
          >
            Start Your Real Estate Platform
          </a>
        </section>
      </div>
    </div>
  )
}
