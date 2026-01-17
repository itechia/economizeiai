"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle, SheetDescription } from "@/components/ui/sheet"
import { Menu, MessageCircle } from "lucide-react"


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

        {/* Mobile Menu */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Abrir menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <SheetHeader>
                <SheetTitle>Economize AI</SheetTitle>
                <SheetDescription>Navegue pelo menu</SheetDescription>
              </SheetHeader>
              <nav className="flex flex-col gap-4 mt-8">
                <div className="mb-2">
                  <CitySelector />
                </div>
                <a
                  href="#servicos"
                  className="text-lg font-medium text-foreground hover:text-primary transition-colors"
                >
                  Serviços
                </a>
                <a
                  href="#vantagens"
                  className="text-lg font-medium text-foreground hover:text-primary transition-colors"
                >
                  Vantagens
                </a>
                <Button asChild className="rounded-full w-full font-semibold mt-4 bg-green-600 hover:bg-green-700">
                  <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Entrar no WhatsApp
                  </a>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
