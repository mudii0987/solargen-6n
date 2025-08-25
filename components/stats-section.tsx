import { Card, CardContent } from "@/components/ui/card"

const stats = [
  {
    number: "137",
    label: "Solar Plants Planned",
    sublabel: "Nationwide",
  },
  {
    number: "80%",
    label: "Vision 2030",
    sublabel: "Renewable Target",
  },
  {
    number: "40+MW",
    label: "Large Scale Projects",
    sublabel: "Available",
  },
  {
    number: "30%",
    label: "Commission Structure",
    sublabel: "Results-Driven",
  },
]

export function StatsSection() {
  return (
    <section className="py-16 bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card key={index} className="bg-primary-foreground/10 border-primary-foreground/20">
              <CardContent className="p-6 text-center">
                <div className="text-3xl md:text-4xl font-bold font-playfair mb-2">{stat.number}</div>
                <div className="font-semibold mb-1">{stat.label}</div>
                <div className="text-sm opacity-80">{stat.sublabel}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
