"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function QuoteForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const formData = new FormData(e.currentTarget)
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      company: formData.get("company"),
      projectType: formData.get("projectType"),
      message: formData.get("message"),
    }

    // Here you would typically send the data to your backend
    // For now, we'll simulate a submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    alert("Thank you for your inquiry! We will contact you within 24 hours.")
    setIsSubmitting(false)
    e.currentTarget.reset()
  }

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="font-playfair text-2xl">Request a Quote</CardTitle>
        <CardDescription>Get a personalized consultation for your renewable energy project</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Full Name *
              </label>
              <Input id="name" name="name" type="text" required placeholder="Your full name" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email Address *
              </label>
              <Input id="email" name="email" type="email" required placeholder="your.email@company.com" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="phone" className="block text-sm font-medium mb-2">
                Phone Number
              </label>
              <Input id="phone" name="phone" type="tel" placeholder="+254 700 000 000" />
            </div>
            <div>
              <label htmlFor="company" className="block text-sm font-medium mb-2">
                Company Name
              </label>
              <Input id="company" name="company" type="text" placeholder="Your company name" />
            </div>
          </div>

          <div>
            <label htmlFor="projectType" className="block text-sm font-medium mb-2">
              Project Type
            </label>
            <select
              id="projectType"
              name="projectType"
              className="w-full px-3 py-2 border border-input bg-background rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
            >
              <option value="">Select project type</option>
              <option value="solar-park">Solar Park (10-40MW)</option>
              <option value="epc-contract">EPC Contract</option>
              <option value="consultant">Consultant Position</option>
              <option value="developer">Developer Opportunity</option>
              <option value="contractor">Contractor Sourcing</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-2">
              Project Details
            </label>
            <Textarea
              id="message"
              name="message"
              rows={4}
              placeholder="Tell us about your project requirements, timeline, and any specific needs..."
            />
          </div>

          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : "Request Quote"}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
