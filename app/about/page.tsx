import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { WhatsAppFloat } from "@/components/whatsapp-float"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Target, Eye, Heart, Users, Award, Globe } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="relative py-24">
          <div className="absolute inset-0">
            <Image src="/images/nairobi-skyline.jpg" alt="Nairobi skyline" fill className="object-cover" />
            <div className="absolute inset-0 bg-black/50" />
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center text-white">
              <h1 className="font-playfair text-4xl md:text-6xl font-bold mb-6">About SolarGen KE</h1>
              <p className="text-xl max-w-3xl mx-auto">
                Your strategic partner in accessing Kenya's rapidly expanding renewable energy market
              </p>
            </div>
          </div>
        </section>

        {/* Company Overview */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-playfair text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Connecting Business with Opportunity
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    SolarGen KE is a specialized consulting and procurement agency dedicated to connecting private
                    companies with lucrative government renewable energy tenders and contracts in Kenya. With Kenya's
                    Vision 2030 targeting 80% renewable energy, we position ourselves as your strategic partner in
                    accessing this rapidly expanding market.
                  </p>
                  <p>
                    We provide end-to-end support from tender identification to contract award, ensuring our clients
                    maximize their opportunities in Kenya's green energy transformation. Our deep understanding of the
                    regulatory environment, combined with established relationships across the industry, makes us the
                    ideal partner for companies seeking to enter or expand in Kenya's renewable energy sector.
                  </p>
                  <p>
                    With over 137 solar plants planned nationwide and large-scale projects of 40+MW available, the
                    opportunities are substantial. However, navigating the complex tender processes, regulatory
                    requirements, and stakeholder management can be challenging. That's where SolarGen KE comes in.
                  </p>
                </div>
              </div>
              <div className="relative h-96 rounded-lg overflow-hidden">
                <Image src="/images/solar-farm-1.jpg" alt="Solar farm in Kenya" fill className="object-cover" />
              </div>
            </div>
          </div>
        </section>

        {/* Mission, Vision, Values */}
        <section className="py-16 bg-accent/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-playfair text-3xl md:text-4xl font-bold text-foreground mb-4">Our Foundation</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Built on strong principles that guide our commitment to clients and Kenya's renewable energy future
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Target className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="font-playfair text-2xl font-bold">Mission</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    To bridge the gap between private sector capabilities and government renewable energy opportunities,
                    facilitating Kenya's transition to sustainable energy while creating value for our clients.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Eye className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="font-playfair text-2xl font-bold">Vision</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    To be the leading renewable energy consulting firm in East Africa, recognized for our expertise in
                    government tender facilitation and our contribution to the region's clean energy transformation.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Heart className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="font-playfair text-2xl font-bold">Values</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    Integrity, transparency, and results-driven partnerships. We believe in sustainable business
                    practices that benefit all stakeholders while advancing Kenya's renewable energy goals.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-playfair text-3xl md:text-4xl font-bold text-foreground mb-4">
                Why Choose SolarGen KE
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Our unique combination of expertise, networks, and commitment sets us apart in the renewable energy
                consulting space
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Users,
                  title: "Proven Network",
                  description:
                    "Established connections with government agencies, contractors, consultants, and international financiers across the renewable energy ecosystem.",
                },
                {
                  icon: Globe,
                  title: "Specialized Focus",
                  description:
                    "Dedicated expertise in renewable energy sector with deep understanding of Kenya's regulatory environment and market dynamics.",
                },
                {
                  icon: Award,
                  title: "Results-Driven",
                  description:
                    "30% commission structure ensures we're invested in your success - we only succeed when you do, aligning our interests with yours.",
                },
                {
                  icon: Target,
                  title: "Time-Critical Execution",
                  description:
                    "We understand that timing is essential in tender processes and move quickly to secure opportunities for our clients.",
                },
                {
                  icon: Eye,
                  title: "Market Intelligence",
                  description:
                    "Continuous monitoring of market trends, regulatory changes, and upcoming opportunities to keep you ahead of the competition.",
                },
                {
                  icon: Heart,
                  title: "Client-Centric Approach",
                  description:
                    "Personalized service tailored to your specific capabilities, interests, and strategic objectives in the renewable energy market.",
                },
              ].map((feature, index) => (
                <Card key={index} className="h-full">
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <feature.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl font-semibold">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-sm leading-relaxed">{feature.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 bg-accent/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-playfair text-3xl md:text-4xl font-bold text-foreground mb-4">Our Expertise</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                A team of experienced professionals with deep knowledge of Kenya's renewable energy landscape
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="font-playfair text-2xl font-bold mb-6">Professional Excellence</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold mb-1">Government Relations</h4>
                      <p className="text-sm text-muted-foreground">
                        Extensive experience working with government agencies, understanding bureaucratic processes, and
                        maintaining key relationships.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold mb-1">Technical Expertise</h4>
                      <p className="text-sm text-muted-foreground">
                        Deep understanding of renewable energy technologies, project development, and technical
                        requirements for large-scale implementations.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold mb-1">Financial Structuring</h4>
                      <p className="text-sm text-muted-foreground">
                        Expertise in project finance, international funding mechanisms, and risk assessment for
                        renewable energy projects.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold mb-1">Legal & Compliance</h4>
                      <p className="text-sm text-muted-foreground">
                        Comprehensive knowledge of regulatory frameworks, compliance requirements, and legal processes
                        in Kenya's energy sector.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative h-96 rounded-lg overflow-hidden">
                <Image
                  src="/images/solar-installation.jpg"
                  alt="Solar installation team"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-4">Ready to Partner with Us?</h2>
            <p className="text-xl mb-8 opacity-90">
              Join the companies already benefiting from Kenya's renewable energy opportunities
            </p>
            <Button asChild size="lg" variant="secondary">
              <Link href="/contact">Start Your Journey</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  )
}
