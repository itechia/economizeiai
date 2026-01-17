import { Percent, Bell, Shield, Clock, Sparkles, Gift } from "lucide-react"

const benefits = [
  {
    icon: Percent,
    title: "Descontos Exclusivos",
    description: "Cupons e ofertas que você não encontra em nenhum outro lugar. Economize até 90% nas suas compras.",
  },
  {
    icon: Bell,
    title: "Alertas em Tempo Real",
    description:
      "Seja o primeiro a saber das ofertas relâmpago antes que acabem. Notificações instantâneas no WhatsApp.",
  },
  {
    icon: Shield,
    title: "Ofertas Verificadas",
    description: "Todas as ofertas são testadas e verificadas pela nossa equipe antes de serem compartilhadas.",
  },
  {
    icon: Clock,
    title: "Promoções 24/7",
    description: "Nossa IA monitora as lojas o dia todo e encontra as melhores ofertas automaticamente.",
  },
  {
    icon: Sparkles,
    title: "Inteligência Artificial",
    description: "Tecnologia avançada que analisa milhões de produtos para encontrar os melhores preços.",
  },
  {
    icon: Gift,
    title: "100% Gratuito",
    description: "Não cobramos nada para você participar. Economize dinheiro sem gastar nada.",
  },
]

export function BenefitsSection() {
  return (
    <section id="beneficios" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Por que Entrar no <span className="text-primary">Economize AI</span>?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Descubra como milhares de pessoas estão economizando centenas de reais todo mês com nossas ofertas
            exclusivas.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group p-8 bg-card rounded-2xl border border-border hover:border-primary/30 hover:shadow-xl transition-all duration-300"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <benefit.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{benefit.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
