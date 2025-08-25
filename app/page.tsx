import { Navigation } from "@/components/navigation"
import { HeroCarousel } from "@/components/hero-carousel"
import { WhatsAppFloat } from "@/components/whatsapp-float"
import { QuoteForm } from "@/components/quote-form"
import { ServicesOverview } from "@/components/services-overview"
import { OpportunitiesSection } from "@/components/opportunities-section"
import { StatsSection } from "@/components/stats-section"
import { AboutSnippet } from "@/components/about-snippet"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroCarousel />
        <StatsSection />
        <OpportunitiesSection />
        <ServicesOverview />
        <AboutSnippet />

        {/* Quote Form Section */}
        <section className="py-16 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-playfair text-3xl md:text-4xl font-bold text-foreground mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Partner with SolarGen KE and unlock opportunities in Kenya's fastest-growing sector. Contact us today
                for a confidential consultation.
              </p>
            </div>
            <QuoteForm />
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  )
}
