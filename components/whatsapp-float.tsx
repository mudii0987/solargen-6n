import { MessageCircle } from "lucide-react"

export function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/254701089741"
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float flex items-center justify-center"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle className="h-8 w-8" />
    </a>
  )
}
