import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Clock, MapPin } from "lucide-react"

const opportunities = [
  {
    title: "EPC Solar Park Contract",
    location: "Kajiado County",
    capacity: "25MW",
    status: "Available",
    description:
      "Engineering, Procurement, Construction contract with funding ready for large-scale solar installation.",
    requirements: ["Tier 1 EPC experience", "Performance bond 5%", "Local partnership preferred"],
  },
  {
    title: "Solar Developer Position",
    location: "Naivasha",
    capacity: "15MW",
    status: "Urgent",
    description: "Developer opportunity for utility-scale solar project with government approval pathway.",
    requirements: ["Development experience", "Financial capacity", "Environmental compliance"],
  },
  {
    title: "Consultant - US AEC",
    location: "Multiple Locations",
    capacity: "40MW+",
    status: "Available",
    description: "Consultant positions with US AEC for renewable energy projects across Kenya.",
    requirements: ["Technical expertise", "Government relations", "Project management"],
  },
]

export function OpportunitiesSection() {
  return (
    <section id="opportunities" className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-foreground mb-4">
            Current Market Opportunities
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Immediate opportunities available for qualified partners. Time is of essence - secure your position in
            Kenya's renewable energy future today.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
          {opportunities.map((opportunity, index) => (
            <Card key={index} className="h-full hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant={opportunity.status === "Urgent" ? "destructive" : "default"}>
                    {opportunity.status}
                  </Badge>
                  <span className="text-sm text-muted-foreground flex items-center">
                    <MapPin className="h-4 w-4 mr-1" />
                    {opportunity.location}
                  </span>
                </div>
                <CardTitle className="text-xl font-semibold">{opportunity.title}</CardTitle>
                <CardDescription className="text-primary font-semibold">{opportunity.capacity}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">{opportunity.description}</p>
                <div>
                  <h4 className="font-semibold text-sm mb-2">Requirements:</h4>
                  <ul className="space-y-1">
                    {opportunity.requirements.map((req, reqIndex) => (
                      <li key={reqIndex} className="text-sm text-muted-foreground flex items-center">
                        <CheckCircle className="h-3 w-3 text-primary mr-2 flex-shrink-0" />
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>
                <Button className="w-full" asChild>
                  <a href="/contact">Apply Now</a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-primary/5 rounded-lg p-6 text-center">
          <div className="flex items-center justify-center mb-4">
            <Clock className="h-6 w-6 text-primary mr-2" />
            <span className="font-semibold text-primary">Time-Critical Execution</span>
          </div>
          <p className="text-muted-foreground mb-4">
            We understand that timing is essential in tender processes and move quickly to secure opportunities.
          </p>
          <Button asChild>
            <a href="/contact">Get Started Today</a>
          </Button>
        </div>
      </div>
    </section>
  )
}
