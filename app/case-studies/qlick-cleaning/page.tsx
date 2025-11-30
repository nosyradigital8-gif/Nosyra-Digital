"use client"

import Link from "next/link"
import { ArrowLeft, ExternalLink, CheckCircle } from "lucide-react"

export default function QlickCleaningCaseStudy() {
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
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Qlick Cleaning</h1>
            <p className="text-xl text-[#cbd5e1] mb-6">
              Premium cleaning services platform with advanced booking system, lead capture, and service management
            </p>
            <div className="flex gap-4">
              <a
                href="https://igloo-stable-79381142.figma.site/"
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
              { label: "Type", value: "Service Platform" },
              { label: "Duration", value: "6 Weeks" },
              { label: "Team Size", value: "4 Members" },
              { label: "Result", value: "250+ Bookings" },
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
              Qlick needed a modern platform to showcase their premium cleaning services and capture leads effectively.
              The challenge was creating an intuitive booking system that could handle multiple service types, pricing
              variations, and real-time availability.
            </p>
            <p className="text-[#cbd5e1] leading-relaxed">
              They required a solution that would build trust through customer testimonials, showcase their service
              areas, and make it easy for customers to request quotes and book services online.
            </p>
          </div>
        </section>

        {/* Solution section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6">Our Solution</h2>
          <div className="space-y-4">
            {[
              {
                title: "Lead Capture System",
                description:
                  "Implemented strategic contact forms and service request pages optimized for high conversion rates.",
              },
              {
                title: "Dynamic Pricing Calculator",
                description:
                  "Built an interactive pricing tool that instantly calculates service costs based on property type, rooms, and services selected.",
              },
              {
                title: "Service Showcase",
                description:
                  "Created compelling service cards with detailed descriptions, pricing, and easy booking integration.",
              },
              {
                title: "Social Proof Elements",
                description:
                  "Integrated client testimonials, ratings, and service area maps to build credibility and trust.",
              },
              {
                title: "Mobile Optimization",
                description:
                  "Fully responsive design ensuring seamless experience on mobile devices for on-the-go bookings.",
              },
              {
                title: "CRM Integration",
                description:
                  "Connected to backend systems for lead management, customer communication, and booking tracking.",
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
              { metric: "250+", label: "Bookings in First Month" },
              { metric: "85%", label: "Lead Conversion Rate" },
              { metric: "4.8/5", label: "Customer Satisfaction" },
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
          <h2 className="text-2xl font-bold text-white mb-4">Need a Lead Generation Platform?</h2>
          <p className="text-[#cbd5e1] mb-6">We'll build a system that converts visitors into paying customers</p>
          <a
            href="/#contact"
            className="inline-block px-8 py-3 bg-[#00d4ff] text-[#0a0e27] rounded-lg font-bold hover:shadow-lg hover:shadow-cyan-500/50 transition-all"
          >
            Get Free Consultation
          </a>
        </section>
      </div>
    </div>
  )
}
