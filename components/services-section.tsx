import { Tag, Bell, Percent, ShoppingBag } from "lucide-react"

const services = [
  {
    icon: Tag,
    title: "Cupons Exclusivos",
    description: "Códigos de desconto verificados diariamente.",
  },
  {
    icon: Bell,
    title: "Alertas em Tempo Real",
    description: "Receba ofertas relâmpago antes de acabar.",
  },
  {
    icon: Percent,
    title: "Até 90% OFF",
    description: "Descontos imperdíveis nas maiores lojas.",
  },
  {
    icon: ShoppingBag,
    title: "100% Gratuito",
    description: "Sem taxas, sem pegadinhas. Apenas economia.",
  },
]

export function ServicesSection() {
  return (
    <section id="servicos" className="py-20 relative">
      {/* Background blob */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/5 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Nossos Serviços</h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            Tudo o que você precisa para economizar nas suas compras online.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-card rounded-2xl p-6 shadow-lg border border-border hover:shadow-xl transition-all hover:-translate-y-1"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">{service.title}</h3>
              <p className="text-sm text-muted-foreground">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
