"use client"

import { Button } from "@/components/ui/button"
import { MessageCircle } from "lucide-react"
import { useCity } from "@/components/city-context"

export function CtaSection() {
  const { whatsappLink } = useCity()

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="bg-primary rounded-3xl p-8 md:p-16 text-center relative overflow-hidden">
          {/* Background blobs */}
          <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-white/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4 text-balance">
              Pronto para economizar?
            </h2>
            <p className="text-primary-foreground/80 mb-8 max-w-md mx-auto">
              Entre grátis e receba as melhores ofertas no seu WhatsApp.
            </p>

            <Button
              asChild
              size="lg"
              className="bg-white text-green-700 hover:bg-white/90 rounded-full px-8 py-6 font-semibold shadow-xl"
            >
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                Entrar no Grupo WhatsApp
                <MessageCircle className="w-5 h-5 ml-2" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
