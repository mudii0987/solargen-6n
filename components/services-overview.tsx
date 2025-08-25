import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Search, FileText, Users, DollarSign, Shield, Settings } from "lucide-react"
import Link from "next/link"

const services = [
  {
    icon: Search,
    title: "Tender Identification",
    description:
      "We monitor and identify relevant government tenders in renewable energy, solar parks (10-40 MW), and related infrastructure projects across Kenya.",
  },
  {
    icon: FileText,
    title: "Documentation Support",
    description:
      "Complete assistance with tender documentation including Letters of Intent, NDAs, undertaking agreements from AEC, and project documents preparation.",
  },
  {
    icon: Users,
    title: "Partnership Facilitation",
    description:
      "We connect you with verified contractors, consultants, developers, and financiers from our extensive network of industry professionals.",
  },
  {
    icon: DollarSign,
    title: "Financial Structuring",
    description:
      "Access to Tier 1 financiers from UAE & Europe with conformable and verifiable bank-to-bank funding solutions for your projects.",
  },
  {
    icon: Shield,
    title: "Compliance & Guarantees",
    description:
      "Assistance with Advance Payment Guarantees (APG), Performance Bonds (5% of project value), and regulatory compliance requirements.",
  },
  {
    icon: Settings,
    title: "Stakeholder Management",
    description:
      "Navigate government processes, public participation requirements, and regulatory approvals with our experienced team.",
  },
]

export function ServicesOverview() {
  return (
    <section className="py-16 bg-accent/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-foreground mb-4">Our Services</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            End-to-end support from tender identification to contract award, ensuring our clients maximize their
            opportunities in Kenya's green energy transformation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((service, index) => (
            <Card key={index} className="h-full hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl font-semibold">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm leading-relaxed">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button asChild size="lg">
            <Link href="/services">View All Services</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
