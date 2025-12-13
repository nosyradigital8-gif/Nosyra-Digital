"use client"

import { useState } from "react"
import Image from "next/image"
import { Code, Palette, Share2, X, ChevronLeft, ChevronRight } from "lucide-react"

const categories = [
  {
    id: "web",
    title: "Web Design & Development",
    icon: Code,
    projects: [
      {
        id: 1,
        title: "TradeBridge",
        category: "E-Commerce Marketplace",
        description: "Multi-vendor marketplace platform showcasing advanced e-commerce features and vendor management",
        externalLink: "https://tradebridgemarket.vercel.app/",
        image: "/images/tradebrdige-screenshot.jpg",
      },
      {
        id: 2,
        title: "Floor Decor Kumasi",
        category: "Interior Design & Flooring",
        description: "Elegant flooring showcase platform featuring product galleries and service information",
        externalLink: "https://v0-floor-decor-kumasi-website.vercel.app/",
        image: "/images/floor-decor-screenshot.jpg",
      },
      {
        id: 3,
        title: "QuickTrads",
        category: "Trading Platform",
        description: "Modern trading platform interface with real-time data and intuitive user experience",
        externalLink: "https://v0-quicktrads-website-design.vercel.app/",
        image: "/images/quicktrads-screenshot.jpg",
      },
      {
        id: 4,
        title: "Posh Treats",
        category: "Food Delivery",
        description: "Delightful food ordering and delivery platform with seamless checkout experience",
        externalLink: "https://v0-posh-treats-website.vercel.app/#delivery",
        image: "/images/posh-treats-screenshot.jpg",
      },
      {
        id: 5,
        title: "Beyond Beddings",
        category: "Home Furnishings",
        description: "Luxury bedding and home décor e-commerce site with elegant product presentations",
        externalLink: "https://v0-beyond-beddings-website.vercel.app/",
        image: "/images/beyond-beddings-screenshot.jpg",
      },
      {
        id: 6,
        title: "Prestige Estates",
        category: "Real Estate",
        description: "Property listing platform featuring advanced search, filters, and modern design patterns",
        externalLink: "https://prestigeestate.vercel.app/",
        image: "/images/prestige-screenshot.jpg",
      },
    ],
  },
  {
    id: "branding",
    title: "Branding & Identity",
    icon: Palette,
    projects: [
      {
        id: 7,
        title: "Auric",
        category: "Branding & Identity",
        description: "Complete brand identity with logo design, color palette, and visual guidelines",
        images: [
          "/images/auric-1.jpg",
          "/images/auric-2.jpg",
          "/images/auric-3.jpg",
          "/images/auric-4.jpg",
        ],
      },
      {
        id: 8,
        title: "Tech Tutor Academy",
        category: "Branding & Identity",
        description: "Educational brand identity featuring modern design and professional materials",
        images: [
          "/images/tech-tutor-1.jpg",
          "/images/tech-tutor-2.jpg",
          "/images/tech-tutor-3.jpg",
          "/images/tech-tutor-4.jpg",
        ],
      },
      {
        id: 9,
        title: "Ember & Sage",
        category: "Branding & Identity",
        description: "Elegant brand identity with sophisticated visual language and style guide",
        images: [
          "/images/ember-sage-1.jpg",
          "/images/ember-sage-2.jpg",
          "/images/ember-sage-3.jpg",
          "/images/ember-sage-4.jpg",
        ],
      },
    ],
  },
  {
    id: "social",
    title: "Social Media Design",
    icon: Share2,
    projects: [
      {
        id: 10,
        title: "Excellent Home and Services",
        category: "Social Media Design",
        description: "Engaging social media graphics and content templates for home service business",
        images: [
          "/images/excellent-home-1.jpg",
          "/images/excellent-home-2.jpg",
          "/images/excellent-home-3.jpg",
          "/images/excellent-home-4.jpg",
          "/images/excellent-home-5.jpg",
        ],
      },
      {
        id: 11,
        title: "Eureka Catering Services",
        category: "Social Media Design",
        description: "Appetizing social media designs showcasing culinary excellence and catering services",
        images: [
          "/images/eureka-catering-1.jpg",
          "/images/eureka-catering-2.jpg",
          "/images/eureka-catering-3.jpg",
          "/images/eureka-catering-4.jpg",
          "/images/eureka-catering-5.jpg",
        ],
      },
      {
        id: 12,
        title: "Leads Maps & Property",
        category: "Social Media Design",
        description: "Professional real estate social media content with property showcases and market insights",
        images: [
          "/images/leads-maps-1.jpg",
          "/images/leads-maps-2.jpg",
          "/images/leads-maps-3.jpg",
          "/images/leads-maps-4.jpg",
          "/images/leads-maps-5.jpg",
        ],
      },
    ],
  },
]

export function Portfolio() {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentImages, setCurrentImages] = useState<string[]>([])
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [lightboxTitle, setLightboxTitle] = useState("")

  const openLightbox = (images: string[], title: string, index = 0) => {
    setCurrentImages(images)
    setCurrentImageIndex(index)
    setLightboxTitle(title)
    setLightboxOpen(true)
    document.body.style.overflow = "hidden"
  }

  const closeLightbox = () => {
    setLightboxOpen(false)
    document.body.style.overflow = "auto"
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % currentImages.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + currentImages.length) % currentImages.length)
  }

  return (
    <section id="portfolio" className="relative py-20 md:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0a0e27] mb-4">Our Work</h2>
          <p className="text-lg text-[#64748b]">Transforming ideas into stunning digital experiences</p>
        </div>

        {/* Service Categories */}
        {categories.map((category) => {
          const Icon = category.icon
          const hasProjects = category.projects.length > 0

          return (
            <div key={category.id} className="mb-20">
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-[#00d4ff]/10 rounded-lg flex items-center justify-center">
                  <Icon className="w-6 h-6 text-[#00d4ff]" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-[#0a0e27]">{category.title}</h3>
              </div>

              {/* Projects Grid */}
              {hasProjects && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {category.projects.map((project) => {
                    const isGallery = "images" in project
                    
                    return (
                      <div
                        key={project.id}
                        className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-xl hover:border-[#00d4ff] transition-all duration-300 flex flex-col group"
                      >
                        <div className="relative h-56 bg-gray-100 flex items-center justify-center overflow-hidden">
                          <Image
                            src={isGallery ? project.images[0] : project.image || "/placeholder.svg"}
                            alt={project.title}
                            fill
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                          />
                          {isGallery && (
                            <div className="absolute top-3 right-3 bg-black/70 text-white px-3 py-1 rounded-full text-xs font-semibold">
                              {project.images.length} Images
                            </div>
                          )}
                        </div>

                        <div className="p-6 flex flex-col flex-grow">
                          <h4 className="text-xl font-bold text-[#0a0e27] mb-2">{project.title}</h4>
                          <p className="text-[#64748b] text-sm mb-4 flex-grow">{project.description}</p>
                          <p className="text-[#00d4ff] text-xs font-semibold mb-4">{project.category}</p>

                          {isGallery ? (
                            <button
                              onClick={() => openLightbox(project.images, project.title)}
                              className="px-4 py-2 bg-[#00d4ff] text-[#0a0e27] rounded font-semibold text-sm hover:bg-[#00b8d4] transition-all duration-300 text-center"
                            >
                              View Gallery
                            </button>
                          ) : (
                            <a
                              href={project.externalLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="px-4 py-2 bg-[#00d4ff] text-[#0a0e27] rounded font-semibold text-sm hover:bg-[#00b8d4] transition-all duration-300 text-center"
                            >
                              View Project
                            </a>
                          )}
                        </div>
                      </div>
                    )
                  })}
                </div>
              )}
            </div>
          )
        })}

        <div className="text-center mt-16">
          <p className="text-[#64748b] mb-6 max-w-2xl mx-auto text-lg">
            Ready to bring your vision to life? Let's create something exceptional together.
          </p>
          <a
            href="#contact"
            className="px-8 py-4 bg-[#00d4ff] text-[#0a0e27] rounded-lg font-bold hover:bg-[#00b8d4] transition-all duration-300 inline-block"
          >
            Start Your Project
          </a>
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4">
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white hover:text-[#00d4ff] transition-colors z-10"
            aria-label="Close lightbox"
          >
            <X className="w-8 h-8" />
          </button>

          {/* Previous Button */}
          {currentImages.length > 1 && (
            <button
              onClick={prevImage}
              className="absolute left-4 text-white hover:text-[#00d4ff] transition-colors z-10"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-12 h-12" />
            </button>
          )}

          {/* Image Container */}
          <div className="max-w-6xl w-full h-full flex flex-col items-center justify-center">
            <div className="relative w-full h-[80vh] mb-4">
              <Image
                src={currentImages[currentImageIndex] || "/placeholder.svg"}
                alt={`${lightboxTitle} - Image ${currentImageIndex + 1}`}
                fill
                className="object-contain"
              />
            </div>
            
            {/* Image Counter and Title */}
            <div className="text-center">
              <h3 className="text-white text-xl font-bold mb-2">{lightboxTitle}</h3>
              <p className="text-gray-400">
                {currentImageIndex + 1} / {currentImages.length}
              </p>
            </div>

            {/* Thumbnail Navigation */}
            {currentImages.length > 1 && (
              <div className="flex gap-2 mt-4 overflow-x-auto max-w-full px-4">
                {currentImages.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentImageIndex(idx)}
                    className={`relative w-16 h-16 flex-shrink-0 rounded overflow-hidden border-2 transition-all ${
                      idx === currentImageIndex ? "border-[#00d4ff]" : "border-transparent opacity-50 hover:opacity-100"
                    }`}
                  >
                    <Image
                      src={img || "/placeholder.svg"}
                      alt={`Thumbnail ${idx + 1}`}
                      fill
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Next Button */}
          {currentImages.length > 1 && (
            <button
              onClick={nextImage}
              className="absolute right-4 text-white hover:text-[#00d4ff] transition-colors z-10"
              aria-label="Next image"
            >
              <ChevronRight className="w-12 h-12" />
            </button>
          )}
        </div>
      )}
    </section>
  )
      }
