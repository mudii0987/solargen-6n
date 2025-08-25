import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export function AboutSnippet() {
  return (
    <section className="py-16 bg-accent/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-foreground mb-6">About SolarGen KE</h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              SolarGen KE is a specialized consulting and procurement agency dedicated to connecting private companies
              with lucrative government renewable energy tenders and contracts in Kenya.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              With Kenya's Vision 2030 targeting 80% renewable energy, we position ourselves as your strategic partner
              in accessing this rapidly expanding market. We provide end-to-end support from tender identification to
              contract award, ensuring our clients maximize their opportunities in Kenya's green energy transformation.
            </p>
            <Button asChild size="lg">
              <Link href="/about" className="inline-flex items-center">
                Read More
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <Card className="bg-card/50">
            <CardContent className="p-8">
              <h3 className="font-playfair text-2xl font-bold mb-6">Why Choose SolarGen KE</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold mb-1">Proven Network</h4>
                    <p className="text-sm text-muted-foreground">
                      Established connections with government agencies, contractors, consultants, and international
                      financiers.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold mb-1">Specialized Focus</h4>
                    <p className="text-sm text-muted-foreground">
                      Dedicated expertise in renewable energy sector with deep understanding of Kenya's regulatory
                      environment.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold mb-1">Results-Driven</h4>
                    <p className="text-sm text-muted-foreground">
                      30% commission structure ensures we're invested in your success - we only succeed when you do.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
