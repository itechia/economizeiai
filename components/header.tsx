"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { MessageCircle } from "lucide-react"


import { CitySelector } from "@/components/city-selector"
import { useCity } from "@/components/city-context"

export function Header() {
  const { whatsappLink } = useCity()

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Image
          src="/images/economize-20ai-20logo.png"
          alt="Economize AI"
          width={160}
          height={40}
          className="h-9 w-auto"
        />
        <nav className="hidden md:flex items-center gap-8">
          <a
            href="#servicos"
            className="text-muted-foreground hover:text-primary transition-colors text-sm font-medium"
          >
            Serviços
          </a>
          <a
            href="#vantagens"
            className="text-muted-foreground hover:text-primary transition-colors text-sm font-medium"
          >
            Vantagens
          </a>
          <CitySelector />
        </nav>
        <Button asChild className="hidden md:inline-flex rounded-full px-6 font-semibold shadow-lg bg-green-600 hover:bg-green-700">
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
            <MessageCircle className="w-5 h-5 mr-2" />
            Entrar no WhatsApp
          </a>
        </Button>
      </div>
    </header>

  )
}
