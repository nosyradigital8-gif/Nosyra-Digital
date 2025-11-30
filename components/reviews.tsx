"use client"

const reviews = [
  {
    id: 1,
    name: "Chukwu Obi",
    company: "TradeBridge",
    role: "Founder",
    text: "Nosyra Digital built a marketplace that actually works. The site is fast, looks great, and our users love it.",
    rating: 5,
  },
  {
    id: 2,
    name: "Grace Mensah",
    company: "Qlick Cleaning",
    role: "Business Owner",
    text: "Professional and responsive. The website has definitely helped us get more bookings. Highly recommend!",
    rating: 5,
  },
  {
    id: 3,
    name: "Amara Nwosu",
    company: "Prestige Estates",
    role: "Property Manager",
    text: "Great design and functionality. The platform showcases our properties beautifully.",
    rating: 5,
  },
]

export function Reviews() {
  return (
    <section className="relative py-20 md:py-32 bg-gray-50 overflow-hidden">
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0a0e27] mb-4">What Clients Say</h2>
          <p className="text-lg text-[#64748b]">See what our clients think about working with us</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-white border border-gray-200 rounded-lg p-6 hover:border-[#00d4ff] hover:shadow-lg transition-all duration-300"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <span key={i} className="text-[#00d4ff] text-lg">
                    ★
                  </span>
                ))}
              </div>
              <p className="text-[#64748b] mb-4 text-sm">"{review.text}"</p>
              <div>
                <p className="text-[#0a0e27] font-semibold text-sm">{review.name}</p>
                <p className="text-[#94a3b8] text-xs">
                  {review.role} at {review.company}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
