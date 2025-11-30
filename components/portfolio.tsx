"use client"

import Image from "next/image"

const projects = [
  {
    id: 1,
    title: "TradeBridge",
    category: "E-Commerce Marketplace",
    description: "Multi-vendor marketplace platform for online sellers and buyers",
    externalLink: "https://tradebridgemarket.vercel.app/",
    image: "/images/portfolio-tradebbridge.jpg",
  },
  {
    id: 2,
    title: "Qlick Cleaning",
    category: "Service Booking",
    description: "Professional cleaning services website with online booking system",
    externalLink: "https://igloo-stable-79381142.figma.site/",
    image: "/images/portfolio-qlick.jpg",
  },
  {
    id: 3,
    title: "Prestige Estates",
    category: "Real Estate",
    description: "Luxury property listings platform with advanced search",
    externalLink: "https://prestigeestate.vercel.app/",
    image: "/images/portfolio-prestige.jpg",
  },
]

export function Portfolio() {
  return (
    <section id="portfolio" className="relative py-20 md:py-32 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0a0e27] mb-4">Our Work</h2>
          <p className="text-lg text-[#64748b]">Real projects we've built for clients</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-xl hover:border-[#00d4ff] transition-all duration-300 flex flex-col"
            >
              <div className="relative h-48 bg-gray-100 flex items-center justify-center overflow-hidden group">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              {/* Project info */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-[#0a0e27] mb-2">{project.title}</h3>
                <p className="text-[#64748b] text-sm mb-4 flex-grow">{project.description}</p>
                <p className="text-[#00d4ff] text-xs font-semibold mb-4">{project.category}</p>

                <a
                  href={project.externalLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-[#00d4ff] text-[#0a0e27] rounded font-semibold text-sm hover:bg-[#00b8d4] transition-all duration-300 text-center"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#contact"
            className="px-8 py-4 bg-[#00d4ff] text-[#0a0e27] rounded-lg font-bold hover:bg-[#00b8d4] transition-all duration-300 inline-block"
          >
            Start Your Project
          </a>
        </div>
      </div>
    </section>
  )
}
