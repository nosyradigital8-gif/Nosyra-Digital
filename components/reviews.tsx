"use client"

const faqs = [
  {
    id: 1,
    question: "How long does it take to build a website?",
    answer: "Most projects take 2-4 weeks from start to launch, depending on complexity and features. Simple websites can be completed in 1-2 weeks, while e-commerce or custom platforms may take 4-6 weeks. We'll provide a detailed timeline during our initial consultation.",
  },
  {
    id: 2,
    question: "What's included in your web design service?",
    answer: "Our service includes custom design, responsive development, SEO optimization, performance optimization, content management system setup, contact forms, social media integration, and basic training on how to manage your site.",
  },
  {
    id: 3,
    question: "Do you provide ongoing support after launch?",
    answer: "Yes! We offer flexible maintenance packages that include regular updates, security monitoring, backup management, content updates, and technical support. We're always available to help with any issues or additions you need.",
  },
  {
    id: 4,
    question: "Can you help with hosting and domain setup?",
    answer: "Absolutely. We handle all technical aspects including domain registration, hosting setup, SSL certificate installation, email configuration, and DNS management. We'll ensure everything is properly configured and secure.",
  },
  {
    id: 5,
    question: "Will my website work on mobile devices?",
    answer: "Every website we build is fully responsive and optimized for all devices - smartphones, tablets, laptops, and desktops. We test thoroughly across different screen sizes and browsers to ensure a perfect experience for all your visitors.",
  },
  {
    id: 6,
    question: "Can I update the website content myself?",
    answer: "Yes! We build websites with user-friendly content management systems (CMS) that allow you to easily update text, images, and other content without any coding knowledge. We also provide training and documentation to help you get started.",
  },
  {
    id: 7,
    question: "Do you offer e-commerce solutions?",
    answer: "Yes, we specialize in building secure e-commerce platforms with payment gateway integration, inventory management, order tracking, and customer accounts. We can integrate popular solutions like Stripe, PayPal, and Paystack.",
  },
  {
    id: 8,
    question: "What are your payment terms?",
    answer: "We typically require 50% upfront to begin the project and 50% upon completion before launch. For larger projects, we can arrange milestone-based payments. We accept bank transfers and all major payment methods.",
  },
  {
    id: 9,
    question: "Will my website be SEO optimized?",
    answer: "Absolutely. Every website includes on-page SEO optimization, proper meta tags, structured data, fast loading speeds, mobile optimization, and XML sitemaps. We follow best practices to help your site rank well in search engines.",
  },
]

export function Reviews() {
  return (
    <section className="relative py-20 md:py-32 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#00d4ff]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#00d4ff]/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            Everything you need to know about our services. Can't find the answer you're looking for? Feel free to contact us.
          </p>
        </div>

        {/* FAQ Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {faqs.map((faq, index) => (
            <div
              key={faq.id}
              className="group bg-white border border-gray-200 rounded-2xl p-6 lg:p-8 hover:border-[#00d4ff] hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              style={{
                animationDelay: `${index * 0.1}s`,
              }}
            >
              {/* Question number badge */}
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0 w-10 h-10 bg-[#00d4ff]/10 group-hover:bg-[#00d4ff] rounded-lg flex items-center justify-center transition-colors duration-300">
                  <span className="text-[#00d4ff] group-hover:text-white font-bold text-sm transition-colors duration-300">
                    {String(faq.id).padStart(2, '0')}
                  </span>
                </div>
                <h3 className="flex-1 text-[#0a0e27] font-bold text-lg lg:text-xl leading-tight">
                  {faq.question}
                </h3>
              </div>

              {/* Answer */}
              <p className="text-[#64748b] text-sm lg:text-base leading-relaxed pl-14">
                {faq.answer}
              </p>
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
