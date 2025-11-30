"use client"

import Link from "next/link"
import { ArrowLeft, ExternalLink, CheckCircle } from "lucide-react"

export default function TradeBridgeCaseStudy() {
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
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">TradeBridge</h1>
            <p className="text-xl text-[#cbd5e1] mb-6">
              Multi-vendor marketplace connecting sellers and buyers with integrated payment solutions
            </p>
            <div className="flex gap-4">
              <a
                href="https://tradebridgemarket.vercel.app/"
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
              { label: "Type", value: "E-Commerce" },
              { label: "Duration", value: "3 Months" },
              { label: "Team Size", value: "5 Members" },
              { label: "Result", value: "30% Retention ↑" },
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
              TradeBridge needed a robust platform that could handle multiple vendors, complex product catalogs, and
              secure payment processing. The client required a solution that was scalable, user-friendly, and could
              compete with established marketplaces.
            </p>
            <p className="text-[#cbd5e1] leading-relaxed">
              Key requirements included real-time inventory management, vendor dashboards, customer reviews, and
              seamless checkout experience across all devices.
            </p>
          </div>
        </section>

        {/* Solution section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6">Our Solution</h2>
          <div className="space-y-4">
            {[
              {
                title: "Modern Tech Stack",
                description:
                  "Built with Next.js for optimal performance, PostgreSQL for data integrity, and Stripe integration for secure payments.",
              },
              {
                title: "Vendor Management System",
                description:
                  "Created comprehensive vendor dashboards with analytics, inventory management, and performance metrics.",
              },
              {
                title: "Mobile-First Design",
                description:
                  "Responsive interface that provides seamless shopping experience on all devices with optimized checkout flow.",
              },
              {
                title: "Advanced Features",
                description:
                  "Implemented real-time notifications, product recommendations, and customer review system for engagement.",
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
              { metric: "30%", label: "Increase in User Retention" },
              { metric: "50+", label: "Active Vendors" },
              { metric: "1000+", label: "Products Listed" },
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
          <h2 className="text-2xl font-bold text-white mb-4">Ready to Build Your Platform?</h2>
          <p className="text-[#cbd5e1] mb-6">Let's create something amazing for your business</p>
          <a
            href="/#contact"
            className="inline-block px-8 py-3 bg-[#00d4ff] text-[#0a0e27] rounded-lg font-bold hover:shadow-lg hover:shadow-cyan-500/50 transition-all"
          >
            Start Your Project
          </a>
        </section>
      </div>
    </div>
  )
}
