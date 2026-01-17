"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"

import { useCity } from "@/components/city-context"

import { CitySelector } from "@/components/city-selector"

export function HeroSection() {
  const { whatsappLink } = useCity()
  return (
    <section className="relative pt-28 pb-16 min-h-screen flex items-center">
      {/* ... blob shapes ... */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-primary/8 rounded-full blur-3xl" />
        <div className="absolute top-40 right-40 w-[300px] h-[300px] bg-primary/5 rounded-full blur-2xl" />
        <div className="absolute bottom-20 left-0 w-[400px] h-[400px] bg-primary/6 rounded-full blur-3xl" />
        <div className="absolute top-60 left-1/4 w-[200px] h-[200px] bg-primary/4 rounded-full blur-2xl" />
      </div>

      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-6 flex flex-col items-center text-center lg:items-start lg:text-left">
            <div className="md:hidden w-full max-w-xs">
              <CitySelector />
            </div>

            <span className="inline-flex items-center gap-2 text-green-600 text-sm font-medium bg-green-100 px-3 py-1 rounded-full">
              <CheckCircle className="w-4 h-4" /> Grupo no WhatsApp
            </span>

            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
              Garanta Descontos Absurdos em Produtos
            </h1>

            <p className="text-muted-foreground text-lg max-w-md">
              Não perca tempo procurando. Receba cupons e ofertas relâmpago da Amazon, Mercado Livre e Shopee direto no seu WhatsApp.
            </p>

            <div className="flex flex-wrap gap-4 pt-2 justify-center lg:justify-start">
              <Button
                asChild
                size="lg"
                className="rounded-full px-8 py-6 font-semibold text-base shadow-xl hover:shadow-2xl transition-all hover:scale-105 bg-green-600 hover:bg-green-700"
              >
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  Entrar no Grupo do WhatsApp
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-full px-8 py-6 font-semibold text-base bg-background"
              >
                <a href="#servicos">Saiba Mais</a>
              </Button>
            </div>

            {/* Store logos - Removed as per request */}
            <div className="flex items-center gap-3 pt-4">
              <span className="text-sm text-muted-foreground">+50k membros economizando</span>
            </div>
          </div>

          {/* Right content - Visual with floating cards */}
          <div className="relative flex justify-center">
            {/* Main image/visual */}
            <div className="relative w-full max-w-[350px]">
              <Image
                src="/happy-person-shopping-on-phone-with-blue-shirt.jpg"
                alt="Pessoa feliz economizando"
                width={350}
                height={450}
                className="rounded-3xl w-full h-auto"
                priority
              />

              {/* Floating offer card top right */}
              <div className="absolute -top-4 -right-4 md:-right-8 bg-card rounded-2xl shadow-xl p-4 md:p-6 border border-border animate-float z-10">
                <div className="flex items-center justify-center">
                  <p className="font-bold text-foreground text-xl">Achadinhos</p>
                </div>
              </div>

              {/* Floating card bottom left */}
              <div className="absolute -bottom-6 -left-4 md:-left-8 bg-card rounded-2xl shadow-xl p-4 md:p-6 border border-border animate-float-delayed z-20">
                <div className="text-center">
                  <p className="font-bold text-foreground text-xl">Oferta Relâmpago</p>
                  <p className="text-xs text-green-600 font-semibold mt-1">Corre antes que acabe!</p>
                </div>
              </div>

              {/* Members badge */}
              <div className="absolute top-1/2 -right-12 bg-card rounded-full shadow-lg px-4 py-2 border border-border flex items-center gap-2">
                <div className="flex -space-x-2">
                  <div className="w-6 h-6 rounded-full bg-primary/20 border-2 border-card" />
                  <div className="w-6 h-6 rounded-full bg-primary/30 border-2 border-card" />
                  <div className="w-6 h-6 rounded-full bg-primary/40 border-2 border-card" />
                </div>
                <span className="text-xs font-medium text-muted-foreground">+10k</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
