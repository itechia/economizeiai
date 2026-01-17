import { Quote, ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"

export function TestimonialsSection() {
  return (
    <section id="depoimentos" className="py-20 relative">
      {/* Background blob */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-primary/5 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">O que nossos membros dizem</h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            Milhares de pessoas já estão economizando com a Economize AI.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-card rounded-3xl p-8 md:p-12 shadow-xl border border-border relative">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              {/* Image */}
              <div className="flex-shrink-0">
                <Image
                  src="/testimonial-person-happy-customer-portrait.jpg"
                  alt="Cliente satisfeito"
                  width={150}
                  height={150}
                  className="rounded-2xl"
                />
              </div>

              {/* Content */}
              <div className="text-center md:text-left">
                <Quote className="w-10 h-10 text-primary/30 mb-4 mx-auto md:mx-0" />
                <p className="text-foreground text-lg mb-6 leading-relaxed">
                  "Eu queria muito a nova TV da Samsung, mas o preço estava proibitivo. No grupo do WhatsApp, peguei uma promoção com 45% de desconto. Surreal!"
                </p>
                <div>
                  <p className="font-semibold text-foreground">Mariana Costa</p>
                  <p className="text-sm text-muted-foreground">Membro desde Jan/2026</p>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-center gap-4 mt-8">
              <button className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:bg-muted transition-colors">
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:bg-primary/90 transition-colors">
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
