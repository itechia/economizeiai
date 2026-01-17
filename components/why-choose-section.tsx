import Image from "next/image"
import { CheckCircle, Zap, Shield } from "lucide-react"

const benefits = [
  {
    icon: Zap,
    title: "Alertas Imediatos",
    description: "Promoções relâmpago chegam na hora no seu WhatsApp.",
  },
  {
    icon: Shield,
    title: "Menor Preço Histórico",
    description: "Monitoramos o preço para garantir que o desconto é real.",
  },
]

export function WhyChooseSection() {
  return (
    <section id="vantagens" className="py-20 relative">
      {/* Background blobs */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image side */}
          <div className="relative order-last lg:order-first flex justify-center">
            <div className="relative w-full max-w-[450px]">
              <Image
                src="/person-using-smartphone-happy-with-shopping-bags-b.jpg"
                alt="Pessoa economizando"
                width={450}
                height={400}
                className="rounded-3xl w-full h-auto"
              />

              {/* Floating testimonial card */}
              <div className="absolute -bottom-6 -right-0 md:-right-6 bg-card rounded-2xl shadow-xl p-4 border border-border max-w-[200px] z-10">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 rounded-full bg-primary/20" />
                  <div>
                    <p className="text-xs font-medium text-foreground">Maria S.</p>
                    <p className="text-xs text-muted-foreground">Membro</p>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground italic">"Economizei R$ 500 no primeiro mês!"</p>
              </div>
            </div>
          </div>

          {/* Content side */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance">
              Por que escolher o Economize AI?
            </h2>

            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <benefit.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{benefit.title}</h3>
                    <p className="text-sm text-muted-foreground">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-4 pt-4">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span>Sem spam</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span>100% grátis</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
