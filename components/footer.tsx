"use client"

import Image from "next/image"
import { useCity } from "@/components/city-context"

export function Footer() {
  const { whatsappLink } = useCity()
  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <Image
            src="/images/economize-20ai-20logo.png"
            alt="Economize AI"
            width={120}
            height={30}
            className="h-8 w-auto"
          />

          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Economize AI. Todos os direitos reservados.
          </p>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted-foreground hover:text-green-600 transition-colors"
          >
            Grupo VIP WhatsApp
          </a>
        </div>
      </div>
    </footer>
  )
}
