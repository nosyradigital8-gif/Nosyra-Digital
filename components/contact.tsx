"use client"

import type React from "react"
import { useState } from "react"
import { Phone, Mail, Clock, Instagram, Facebook, CheckCircle } from "lucide-react"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  })

  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("[v0] Form submitted:", formData)
    setSubmitted(true)
    setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      })
      setSubmitted(false)
    }, 3000)
  }

  return (
    <section id="contact" className="relative py-20 md:py-32 bg-gray-50 overflow-hidden">
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0a0e27] mb-4">Get Your Free Quote</h2>
          <p className="text-lg text-[#64748b]">Fill out the form below and we'll get back to you within 24 hours</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            {submitted && (
              <div className="mb-6 p-4 bg-[#00d4ff]/10 border border-[#00d4ff] rounded-lg flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-[#00d4ff] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-[#00d4ff] font-semibold">Message Sent!</p>
                  <p className="text-[#64748b] text-sm mt-1">We'll be in touch soon.</p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-[#0a0e27] text-sm font-semibold mb-2">Full Name *</label>
                <input
                  type="text"
                  placeholder="Your name"
                  required
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg text-[#0a0e27] placeholder-[#94a3b8] focus:border-[#00d4ff] focus:outline-none transition-colors"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[#0a0e27] text-sm font-semibold mb-2">Email *</label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    required
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg text-[#0a0e27] placeholder-[#94a3b8] focus:border-[#00d4ff] focus:outline-none transition-colors"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>

                <div>
                  <label className="block text-[#0a0e27] text-sm font-semibold mb-2">Phone *</label>
                  <input
                    type="tel"
                    placeholder="+234 xxx xxx xxxx"
                    required
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg text-[#0a0e27] placeholder-[#94a3b8] focus:border-[#00d4ff] focus:outline-none transition-colors"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>
              </div>

              <div>
                <label className="block text-[#0a0e27] text-sm font-semibold mb-2">Service Needed *</label>
                <select
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg text-[#0a0e27] focus:border-[#00d4ff] focus:outline-none transition-colors"
                  required
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                >
                  <option value="">Select a service</option>
                  <option value="website">Website Design</option>
                  <option value="ecommerce">E-Commerce Store</option>
                  <option value="booking">Booking System</option>
                  <option value="marketing">Digital Marketing</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-[#0a0e27] text-sm font-semibold mb-2">Tell Us About Your Project</label>
                <textarea
                  placeholder="Describe what you need..."
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg text-[#0a0e27] placeholder-[#94a3b8] focus:border-[#00d4ff] focus:outline-none transition-colors resize-none"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-[#00d4ff] text-[#0a0e27] rounded-lg font-bold text-lg hover:bg-[#00b8d4] transition-all duration-300"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            {/* Phone */}
            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-[#00d4ff] hover:shadow-lg transition-all">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#00d4ff]/10 rounded-lg">
                  <Phone className="w-6 h-6 text-[#00d4ff]" />
                </div>
                <div>
                  <h3 className="text-[#0a0e27] font-bold mb-1">Call Us</h3>
                  <a
                    href="tel:+2347058466586"
                    className="text-[#64748b] hover:text-[#00d4ff] transition-colors font-semibold"
                  >
                    +234 705 846 6586
                  </a>
                  <p className="text-[#94a3b8] text-sm mt-2">Mon-Sat: 9AM - 6PM WAT</p>
                </div>
              </div>
            </div>

            {/* WhatsApp */}
            <a
              href="https://wa.me/2347058466586?text=Hi%20Nosyra%20Digital%2C%20I%27m%20interested%20in%20your%20web%20development%20services"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25d366] text-white rounded-lg p-6 flex items-center justify-center gap-3 font-bold text-lg hover:shadow-lg hover:shadow-green-500/50 transition-all duration-300 hover:scale-105"
            >
              <span>💬</span>
              Chat on WhatsApp
            </a>

            {/* Email */}
            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-[#00d4ff] hover:shadow-lg transition-all">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#00d4ff]/10 rounded-lg">
                  <Mail className="w-6 h-6 text-[#00d4ff]" />
                </div>
                <div>
                  <h3 className="text-[#0a0e27] font-bold mb-1">Email</h3>
                  <a
                    href="mailto:info@nosyradigital.com.ng"
                    className="text-[#64748b] hover:text-[#00d4ff] transition-colors"
                  >
                    info@nosyradigital.com.ng
                  </a>
                  <p className="text-[#94a3b8] text-sm mt-2">We reply within 24 hours</p>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-[#00d4ff] hover:shadow-lg transition-all">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#00d4ff]/10 rounded-lg">
                  <Clock className="w-6 h-6 text-[#00d4ff]" />
                </div>
                <div>
                  <h3 className="text-[#0a0e27] font-bold mb-2">Business Hours</h3>
                  <p className="text-[#64748b] text-sm">Monday - Saturday</p>
                  <p className="text-[#64748b] text-sm font-semibold">9:00 AM - 6:00 PM WAT</p>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-[#0a0e27] font-bold mb-4">Follow Us</h3>
              <div className="flex gap-3">
                <a
                  href="https://www.instagram.com/nosyradigital01"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-gray-50 border border-gray-200 rounded-lg p-3 flex items-center justify-center text-[#00d4ff] hover:border-[#00d4ff] hover:bg-[#00d4ff]/5 transition-all duration-300"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="https://www.facebook.com/nosyradigital"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-gray-50 border border-gray-200 rounded-lg p-3 flex items-center justify-center text-[#00d4ff] hover:border-[#00d4ff] hover:bg-[#00d4ff]/5 transition-all duration-300"
                >
                  <Facebook className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
