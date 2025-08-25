import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { WhatsAppFloat } from "@/components/whatsapp-float"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Search, FileText, Users, DollarSign, Shield, Settings, CheckCircle, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const services = [
  {
    icon: Search,
    title: "Tender Identification",
    description:
      "We monitor and identify relevant government tenders in renewable energy, solar parks (10-40 MW), and related infrastructure projects across Kenya.",
    features: [
      "Continuous monitoring of government portals",
      "Early notification of upcoming tenders",
      "Detailed tender analysis and requirements",
      "Market intelligence and competitor analysis",
    ],
    image: "/images/solar-farm-1.jpg",
  },
  {
    icon: FileText,
    title: "Documentation Support",
    description:
      "Complete assistance with tender documentation including Letters of Intent, NDAs, undertaking agreements from AEC, and project documents preparation.",
    features: [
      "Letter of Intent preparation",
      "Non-disclosure agreements",
      "AEC undertaking agreements",
      "Technical documentation review",
      "Compliance verification",
    ],
    image: "/images/solar-panels-grid.jpg",
  },
  {
    icon: Users,
    title: "Partnership Facilitation",
    description:
      "We connect you with verified contractors, consultants, developers, and financiers from our extensive network of industry professionals.",
    features: [
      "Verified contractor network",
      "Experienced consultants",
      "Established developers",
      "International financiers",
      "Local partnership facilitation",
    ],
    image: "/images/nairobi-skyline.jpg",
  },
  {
    icon: DollarSign,
    title: "Financial Structuring",
    description:
      "Access to Tier 1 financiers from UAE & Europe with conformable and verifiable bank-to-bank funding solutions for your projects.",
    features: [
      "Tier 1 international financiers",
      "Bank-to-bank funding solutions",
      "Project finance structuring",
      "Risk assessment and mitigation",
      "Competitive financing terms",
    ],
    image: "/images/solar-transmission.jpg",
  },
  {
    icon: Shield,
    title: "Compliance & Guarantees",
    description:
      "Assistance with Advance Payment Guarantees (APG), Performance Bonds (5% of project value), and regulatory compliance requirements.",
    features: [
      "Advance Payment Guarantees",
      "Performance Bonds (5% project value)",
      "Regulatory compliance support",
      "Environmental impact assessments",
      "Government approval processes",
    ],
    image: "/images/wind-solar.jpg",
  },
  {
    icon: Settings,
    title: "Stakeholder Management",
    description:
      "Navigate government processes, public participation requirements, and regulatory approvals with our experienced team.",
    features: [
      "Government relations management",
      "Public participation coordination",
      "Regulatory approval navigation",
      "Community engagement",
      "Stakeholder communication",
    ],
    image: "/images/solar-installation.jpg",
  },
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="relative py-24 bg-gradient-to-r from-primary/10 to-secondary/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="font-playfair text-4xl md:text-6xl font-bold text-foreground mb-6">Our Services</h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Comprehensive support for accessing Kenya's renewable energy market. From tender identification to
                contract award, we ensure your success.
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-16">
              {services.map((service, index) => (
                <div
                  key={index}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}
                >
                  <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                    <Card className="h-full">
                      <CardHeader>
                        <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                          <service.icon className="h-8 w-8 text-primary" />
                        </div>
                        <CardTitle className="font-playfair text-2xl font-bold">{service.title}</CardTitle>
                        <CardDescription className="text-base leading-relaxed">{service.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-3">
                          {service.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center space-x-3">
                              <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                              <span className="text-sm">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                  <div className={index % 2 === 1 ? "lg:col-start-1" : ""}>
                    <div className="relative h-80 rounded-lg overflow-hidden">
                      <Image
                        src={service.image || "/placeholder.svg"}
                        alt={service.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 bg-accent/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-playfair text-3xl md:text-4xl font-bold text-foreground mb-4">Our Process</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                A systematic approach to securing renewable energy opportunities in Kenya
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  step: "1",
                  title: "Initial Consultation",
                  description:
                    "We assess your capabilities, interests, and financial capacity to match you with appropriate opportunities.",
                },
                {
                  step: "2",
                  title: "Letter of Intent & NDA",
                  description: "Secure your position with proper documentation and confidentiality agreements.",
                },
                {
                  step: "3",
                  title: "AEC Undertaking",
                  description: "Obtain necessary undertaking agreements from relevant authorities.",
                },
                {
                  step: "4",
                  title: "Project Documentation",
                  description: "Complete preparation of all required project documents and submissions.",
                },
              ].map((process, index) => (
                <Card key={index} className="text-center">
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                      {process.step}
                    </div>
                    <CardTitle className="text-lg">{process.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{process.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-4">
              Ready to Access Kenya's Renewable Energy Market?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Partner with SolarGen KE and unlock opportunities in Kenya's fastest-growing sector.
            </p>
            <Button asChild size="lg" variant="secondary">
              <Link href="/contact" className="inline-flex items-center">
                Get Started Today
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  )
}
