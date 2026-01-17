"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { CheckCircle, ArrowRight, Sparkles } from "lucide-react"

import { useCity } from "@/components/city-context"

import { CitySelector } from "@/components/city-selector"

export function HeroSection() {
  const { whatsappLink } = useCity()
  return (
    <section className="relative pt-24 pb-16 min-h-screen flex items-center overflow-hidden bg-gradient-to-b from-background to-green-50/50 dark:to-green-950/20">

      {/* Premium Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-green-400/20 rounded-full blur-[100px] animate-pulse-slow" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-emerald-300/20 rounded-full blur-[100px] animate-pulse-slow delay-1000" />
        <div className="absolute top-[20%] left-[10%] w-[300px] h-[300px] bg-teal-200/20 rounded-full blur-[80px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">

          {/* Mobile: City Selector at the very top */}
          <div className="w-full max-w-sm lg:hidden mb-4 animate-fade-in-up">
            <CitySelector />
          </div>

          {/* Left content */}
          <div className="space-y-6 flex flex-col items-center text-center lg:items-start lg:text-left order-2 lg:order-1 max-w-2xl mx-auto lg:mx-0">

            <div className="hidden lg:block animate-fade-in-up">
              {/* Desktop City Selector placement could be here or in header, keeping header for now */}
              {/* If we want it here on desktop too: <CitySelector /> */}
            </div>

            <span className="inline-flex items-center gap-2 text-emerald-700 dark:text-emerald-300 text-sm font-semibold bg-emerald-100 dark:bg-emerald-900/30 px-4 py-1.5 rounded-full border border-emerald-200 dark:border-emerald-800 animate-fade-in-up delay-100">
              <Sparkles className="w-4 h-4 fill-emerald-500 text-emerald-500" />
              Comunidade Exclusiva
            </span>

            <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-foreground leading-[1.1] tracking-tight text-balance animate-fade-in-up delay-200">
              Garanta Descontos <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-500">Absurdos</span> em Produtos
            </h1>

            <p className="text-muted-foreground text-lg md:text-xl max-w-lg leading-relaxed animate-fade-in-up delay-300">
              Não perca tempo procurando. Receba cupons e ofertas relâmpago da Amazon, Mercado Livre e Shopee direto no seu WhatsApp.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto pt-4 animate-fade-in-up delay-400">
              <Button
                asChild
                size="lg"
                className="rounded-full h-14 px-8 font-bold text-lg shadow-xl hover:shadow-2xl shadow-green-500/20 transition-all hover:scale-105 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 border-0"
              >
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  Entrar no Grupo do WhatsApp
                  <ArrowRight className="w-5 h-5" />
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-full h-14 px-8 font-bold text-lg hover:bg-secondary/50 border-2"
              >
                <a href="#servicos">Saiba Mais</a>
              </Button>
            </div>

            <div className="flex items-center gap-4 pt-4 animate-fade-in-up delay-500 opacity-80">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className={`w-8 h-8 rounded-full border-2 border-background bg-gray-200`} style={{ backgroundImage: `url(/avatars/${i}.png)` }} />
                  // Note: Using placeholder divs if images don't exist, but better to use simple colored divs with letters or icons for now
                ))}
                <div className="flex items-center justify-center w-8 h-8 rounded-full border-2 border-background bg-emerald-100 text-[10px] font-bold text-emerald-700">
                  +50k
                </div>
              </div>
              <p className="text-sm font-medium text-muted-foreground">membros economizando diariamente</p>
            </div>

          </div>

          {/* Right content - Visual */}
          <div className="relative flex justify-center order-1 lg:order-2 w-full max-w-[320px] md:max-w-[400px] mx-auto lg:mr-auto animate-fade-in-up delay-300">
            {/* Decorative circle behind image */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-green-200/40 to-emerald-200/40 rounded-full blur-2xl -z-10" />

            <div className="relative">
              <Image
                src="/happy-person-shopping-on-phone-with-blue-shirt.jpg"
                alt="Pessoa feliz economizando com cupom"
                width={400}
                height={500}
                className="rounded-[2.5rem] shadow-2xl rotate-[-2deg] hover:rotate-0 transition-transform duration-500 border-[8px] border-white dark:border-gray-800 object-cover aspect-[4/5]"
                priority
              />

              {/* Floating Elements with better styling */}
              <div className="absolute -top-6 -right-6 bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-4 border border-green-100 dark:border-green-900/30 animate-float z-20 max-w-[140px]">
                <div className="flex flex-col gap-1">
                  <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Desconto</span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-2xl font-bold text-green-600">-70%</span>
                    <span className="text-xs text-gray-400 line-through">R$ 100</span>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-8 -left-2 bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-4 border border-green-100 dark:border-green-900/30 animate-float-delayed z-20 flex items-center gap-3">
                <div className="bg-green-100 p-2 rounded-full">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <p className="font-bold text-sm">Cupom Aplicado!</p>
                  <p className="text-xs text-muted-foreground">Economia garantida</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
