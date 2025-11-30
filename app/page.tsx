import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { Portfolio } from "@/components/portfolio"
import { Reviews } from "@/components/reviews"
import { Pricing } from "@/components/pricing"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="bg-white overflow-x-hidden">
      <Header />
      <Hero />
      <Services />
      <Portfolio />
      <Reviews />
      <Pricing />
      <Contact />
      <Footer />
    </main>
  )
}
