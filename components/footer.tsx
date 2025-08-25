import Link from "next/link"
import Image from "next/image"
import { Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Image src="/images/logo.png" alt="SolarGen KE" width={40} height={40} className="w-10 h-10" />
              <span className="font-playfair font-bold text-xl text-primary">SolarGen KE</span>
            </div>
            <p className="text-background/80 mb-4 max-w-md">
              Your strategic partner in accessing Kenya's rapidly expanding renewable energy market. Connecting
              businesses with government tender opportunities.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-primary" />
                <a href="mailto:info@solargenke.com" className="text-background/80 hover:text-primary">
                  info@solargenke.com
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-primary" />
                <a href="tel:+254701089741" className="text-background/80 hover:text-primary">
                  +254-701089741
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-primary" />
                <span className="text-background/80">Nairobi, Kenya</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-background/80 hover:text-primary">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-background/80 hover:text-primary">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-background/80 hover:text-primary">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-background/80 hover:text-primary">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              <li className="text-background/80">Tender Identification</li>
              <li className="text-background/80">Documentation Support</li>
              <li className="text-background/80">Partnership Facilitation</li>
              <li className="text-background/80">Financial Structuring</li>
              <li className="text-background/80">Compliance & Guarantees</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 mt-8 pt-8 text-center">
          <p className="text-background/60">
            © 2025 SolarGen KE. All rights reserved. | Connecting Business with Opportunity
          </p>
        </div>
      </div>
    </footer>
  )
}
