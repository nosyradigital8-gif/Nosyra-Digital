"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    id: 1,
    question: "How long does it take to build a website?",
    answer: "Most projects take 2-4 weeks from start to launch, depending on complexity and features.",
  },
  {
    id: 2,
    question: "What's included in your web design service?",
    answer: "Custom design, responsive development, SEO optimization, CMS setup, contact forms, and social media integration.",
  },
  {
    id: 3,
    question: "Do you provide ongoing support after launch?",
    answer: "Yes, we offer flexible maintenance packages including updates, security monitoring, backups, and technical support.",
  },
  {
    id: 4,
    question: "Can you help with hosting and domain setup?",
    answer: "Absolutely, we handle domain registration, hosting setup, SSL certificates, email configuration, and DNS management.",
  },
  {
    id: 5,
    question: "Will my website work on mobile devices?",
    answer: "Every website we build is fully responsive and optimized for all devices including smartphones, tablets, and desktops.",
  },
  {
    id: 6,
    question: "Can I update the website content myself?",
    answer: "Yes, we build websites with user-friendly CMS that allow you to easily update content without coding knowledge.",
  },
  {
    id: 7,
    question: "Do you offer e-commerce solutions?",
    answer: "Yes, we build secure e-commerce platforms with payment integration, inventory management, and order tracking.",
  },
  {
    id: 8,
    question: "What are your payment terms?",
    answer: "We require 50% upfront to begin and 50% upon completion, with milestone-based payments available for larger projects.",
  },
  {
    id: 9,
    question: "Will my website be SEO optimized?",
    answer: "Absolutely, every website includes on-page SEO, meta tags, structured data, fast loading speeds, and mobile optimization.",
  },
  {
    id: 10,
    question: "Do you offer branding services?",
    answer: "Yes, we create complete brand identities including logo design, color palettes, typography, and brand guidelines.",
  },
  {
    id: 11,
    question: "What social media design services do you provide?",
    answer: "We design custom social media graphics, templates, story designs, carousel posts, and complete content strategies.",
  },
  {
    id: 12,
    question: "Can you redesign my existing brand?",
    answer: "Yes, we offer brand refresh and complete rebrand services to modernize your visual identity and messaging.",
  },
]

export function Reviews() {
  const [openId, setOpenId] = useState<number | null>(null)

  const toggleFaq = (id: number) => {
    setOpenId(openId === id ? null : id)
  }

  return (
    <section className="relative py-20 md:py-32 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#00d4ff]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#00d4ff]/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-[#00d4ff]/10 text-[#00d4ff] rounded-full text-sm font-semibold">
              FAQ
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0a0e27] mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-lg md:text-xl text-[#64748b] max-w-3xl mx-auto">
            Everything you need to know about our web design, branding, and social media services.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:border-[#00d4ff] transition-all duration-300"
            >
              <button
                onClick={() => toggleFaq(faq.id)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors duration-200"
              >
                <span className="text-[#0a0e27] font-semibold text-base md:text-lg pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-[#00d4ff] flex-shrink-0 transition-transform duration-300 ${
                    openId === faq.id ? "rotate-180" : ""
                  }`}
                />
              </button>
              
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openId === faq.id ? "max-h-96" : "max-h-0"
                }`}
              >
                <div className="px-6 pb-5 pt-2">
                  <p className="text-[#64748b] text-sm md:text-base leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-white border border-gray-200 rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-[#0a0e27] mb-3">
              Still have questions?
            </h3>
            <p className="text-[#64748b] mb-6">
              Our team is here to help. Get in touch and we'll respond as soon as possible.
            </p>
            <a
              href="#contact"
              className="inline-block px-8 py-3 bg-[#00d4ff] text-white font-semibold rounded-lg hover:bg-[#00b8e6] transition-colors duration-300 shadow-lg hover:shadow-xl"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  )
  }
