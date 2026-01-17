import { ArrowRight, MessageCircle, Search, ShoppingBag, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"

const steps = [
  {
    number: "01",
    icon: MessageCircle,
    title: "Entre no Grupo",
    description: "Clique no botão e entre gratuitamente no nosso grupo do WhatsApp.",
  },
  {
    number: "02",
    icon: Search,
    title: "Nossa IA Trabalha",
    description: "Nossa inteligência artificial monitora milhões de produtos 24h por dia.",
  },
  {
    number: "03",
    icon: Sparkles,
    title: "Receba Ofertas",
    description: "Você recebe notificações das melhores ofertas direto no seu celular.",
  },
  {
    number: "04",
    icon: ShoppingBag,
    title: "Economize!",
    description: "Aproveite os descontos exclusivos e economize nas suas compras.",
  },
]

export function HowItWorksSection() {
  return (
    <section id="como-funciona" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">Como Funciona?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Em apenas 4 passos simples você começa a economizar
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-card rounded-2xl p-8 border border-border h-full">
                <span className="text-6xl font-bold text-primary/10">{step.number}</span>
                <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center -mt-8 mb-4">
                  <step.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                  <ArrowRight className="w-8 h-8 text-primary/30" />
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            asChild
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg px-10 py-6 shadow-xl"
          >
            <a href="https://chat.whatsapp.com/invite/placeholder" target="_blank" rel="noopener noreferrer">
              Começar a Economizar Agora
              <MessageCircle className="w-5 h-5 ml-2" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
