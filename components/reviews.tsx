"use client"

import { Clock, Zap, Heart, TrendingUp } from "lucide-react"

const benefits = [
  {
    id: 1,
    icon: Clock,
    title: "Fast & Flexible",
    description: "We move quickly without bureaucracy. Your project gets our full attention and priority from start to finish.",
  },
  {
    id: 2,
    icon: Heart,
    title: "Personal Service",
    description: "Work directly with the founder. No account managers or middlemen - just clear communication and true partnership.",
  },
  {
    id: 3,
    icon: Zap,
    title: "Modern Technology",
    description: "We build with the latest web technologies - React, Next.js, and modern frameworks for fast, reliable websites.",
  },
  {
    id: 4,
    icon: TrendingUp,
    title: "Growth-Focused",
    description: "Your success is our success. We're building our reputation by delivering exceptional results for every client.",
  },
]

export function Reviews() {
  return (
    <section className="relative py-20 md:py-32 bg-gray-50 overflow-hidden">
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0a0e27] mb-4">Why Choose Nosyra Digital</h2>
          <p className="text-lg text-[#64748b]">The advantages of working with a dedicated partner</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {benefits.map((benefit) => {
            const IconComponent = benefit.icon
            return (
              <div
                key={benefit.id}
                className="bg-white p-8 rounded-lg border border-gray-200 hover:border-[#00d4ff] hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-[#00d4ff]/10 rounded-lg flex items-center justify-center">
                      <IconComponent className="w-6 h-6 text-[#00d4ff]" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#0a0e27] mb-2">{benefit.title}</h3>
                    <p className="text-[#64748b] leading-relaxed">{benefit.description}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        <div className="text-center mt-12">
          <p className="text-[#64748b] mb-6 max-w-2xl mx-auto">
            Ready to experience personalized web development? Let's discuss your project.
          </p>
          <a
            href="#contact"
            className="px-8 py-4 bg-[#00d4ff] text-[#0a0e27] rounded-lg font-bold hover:bg-[#00b8d4] transition-all duration-300 inline-block"
          >
            Get Your Free Quote
          </a>
        </div>
      </div>
    </section>
  )
}
