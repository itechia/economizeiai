import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "O grupo é realmente gratuito?",
    answer:
      "Sim! O Economize AI é 100% gratuito. Você não precisa pagar nada para participar e receber as ofertas exclusivas.",
  },
  {
    question: "Como a IA encontra as ofertas?",
    answer:
      "Nossa inteligência artificial monitora milhões de produtos em tempo real nas principais lojas online como Mercado Livre, Amazon e Shopee. Quando detecta uma queda de preço significativa ou um cupom exclusivo, compartilha automaticamente no grupo.",
  },
  {
    question: "As ofertas são confiáveis?",
    answer:
      "Todas as ofertas são verificadas pela nossa equipe antes de serem compartilhadas. Só publicamos promoções de lojas oficiais e confiáveis, garantindo a segurança das suas compras.",
  },
  {
    question: "Com que frequência vocês postam ofertas?",
    answer:
      "Postamos ofertas o dia todo, 7 dias por semana. Em média, são mais de 40 ofertas por dia, sempre com os melhores preços do momento.",
  },
  {
    question: "Posso sair do grupo quando quiser?",
    answer:
      "Claro! Você pode sair do grupo a qualquer momento, sem nenhum compromisso. Mas temos certeza que você vai querer ficar para continuar economizando!",
  },
]

export function FaqSection() {
  return (
    <section id="faq" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">Perguntas Frequentes</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">Tire suas dúvidas sobre o Economize AI</p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card rounded-xl border border-border px-6"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
