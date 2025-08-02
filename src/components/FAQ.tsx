"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronDown, MessageCircle, Phone } from "lucide-react";

const faqs = [
  {
    question: "Quanto tempo demora o processo de aprovação?",
    answer: "O tempo varia entre 7 a 15 dias úteis, dependendo da complexidade do pedido e da resposta dos bancos. Fornecemos atualizações regulares durante todo o processo."
  },
  {
    question: "Qual é o custo dos nossos serviços?",
    answer: "A consulta inicial e simulação são sempre gratuitas. Só cobramos uma comissão se conseguirmos aprovar o seu crédito, alinhando os nossos interesses com os seus."
  },
  {
    question: "Que documentos preciso para iniciar o processo?",
    answer: "Normalmente precisamos de: documento de identificação, últimos 3 recibos de vencimento, IRS do último ano, extratos bancários e comprovativo de residência. Ajudamos a preparar toda a documentação."
  },
  {
    question: "Trabalham com que bancos?",
    answer: "Trabalhamos com mais de 15 bancos e instituições financeiras em Portugal, incluindo todos os principais bancos: CGD, BCP, Santander, BPI, Bankinter, Crédito Agrícola, entre outros."
  },
  {
    question: "Posso renegociar um crédito já existente?",
    answer: "Sim! Especializamo-nos também em renegociação de créditos existentes. Analisamos as suas condições atuais e procuramos melhores propostas no mercado."
  },
  {
    question: "É seguro partilhar os meus dados financeiros?",
    answer: "Absolutamente. Somos licenciados pelo Banco de Portugal e cumprimos rigorosamente o RGPD. Todos os dados são tratados com a máxima confidencialidade e segurança."
  },
  {
    question: "Que tipos de crédito podem intermediar?",
    answer: "Intermediamos crédito habitação, crédito automóvel, crédito pessoal, crédito empresarial, consolidação de créditos e renegociação de condições existentes."
  },
  {
    question: "Ajudam clientes em todo o país?",
    answer: "Sim, trabalhamos com clientes em todo o território nacional. Podemos fazer reuniões presenciais no Porto ou videochamadas para clientes de outras regiões."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50/50 to-slate-100/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/3 to-blue-600/3"></div>
      </div>
      
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary/10 to-blue-600/10 backdrop-blur-sm rounded-full text-sm font-bold text-primary mb-6 shadow-soft border border-primary/20">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
            Dúvidas Frequentes
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-foreground mb-6 leading-tight tracking-tight">
            Perguntas{" "}
            <span className="text-transparent bg-gradient-to-r from-primary to-blue-600 bg-clip-text">
              Frequentes
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto font-medium leading-relaxed">
            Esclarecemos as principais dúvidas sobre os nossos serviços de intermediação de crédito.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="space-y-6 mb-16">
            {faqs.map((faq, index) => (
              <Card key={index} className="bg-white/90 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                <CardContent className="p-0">
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full p-8 text-left flex items-center justify-between hover:bg-primary/5 transition-all duration-300 group"
                  >
                    <h3 className="text-xl font-bold text-foreground pr-6 group-hover:text-primary transition-colors duration-300">
                      {faq.question}
                    </h3>
                    <div className="w-10 h-10 bg-primary/10 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                      <ChevronDown 
                        className={`h-5 w-5 text-primary group-hover:text-white transition-all duration-300 ${
                          openIndex === index ? 'transform rotate-180' : ''
                        }`}
                      />
                    </div>
                  </button>
                  
                  {openIndex === index && (
                    <div className="px-8 pb-8 bg-gradient-to-br from-primary/5 to-blue-600/5">
                      <p className="text-muted-foreground leading-relaxed text-lg font-medium">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Enhanced Contact CTA */}
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-12 text-center shadow-xl border border-white/50">
            <h3 className="text-3xl font-black text-foreground mb-6">
              Ainda tem{" "}
              <span className="text-transparent bg-gradient-to-r from-primary to-blue-600 bg-clip-text">
                dúvidas?
              </span>
            </h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto font-medium leading-relaxed">
              A nossa equipa está sempre disponível para esclarecer qualquer questão. 
              Entre em contacto connosco através do meio que preferir.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button 
                variant="outline" 
                size="lg"
                className="gap-3 px-8 py-4 text-lg font-semibold border-2 border-primary/20 bg-white hover:bg-primary hover:text-white hover:border-primary hover:-translate-y-1 transition-all duration-300 shadow-md hover:shadow-lg"
              >
                <MessageCircle className="h-5 w-5" />
                Chat Online
              </Button>
              <Button 
                variant="hero" 
                size="lg"
                className="gap-3 px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-1 transition-all duration-300 bg-gradient-to-r from-primary to-blue-600 border-0"
              >
                <Phone className="h-5 w-5" />
                Ligar Agora
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;