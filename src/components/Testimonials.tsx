"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Maria Silva",
    location: "Porto",
    text: "Excelente serviço! O Pedro ajudou-me a conseguir uma taxa muito melhor do que no meu banco. Todo o processo foi transparente e rápido.",
    rating: 5,
    service: "Crédito Habitação"
  },
  {
    name: "João Santos",
    location: "Vila Nova de Gaia", 
    text: "Profissionalismo exemplar. Conseguiram renegociar o meu crédito e agora pago menos 200€ por mês. Recomendo vivamente!",
    rating: 5,
    service: "Renegociação"
  },
  {
    name: "Ana Costa",
    location: "Matosinhos",
    text: "Depois de várias recusas noutros sítios, a Global Crédito conseguiu aprovar o meu financiamento. Muito obrigada pela dedicação!",
    rating: 5,
    service: "Crédito Pessoal"
  },
  {
    name: "Carlos Ferreira", 
    location: "Maia",
    text: "Serviço personalizado e sempre disponíveis para esclarecer dúvidas. Conseguiram-me condições excecionais para a casa dos meus sonhos.",
    rating: 5,
    service: "Crédito Habitação"
  }
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-slate-50/80 via-blue-50/40 to-indigo-50/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/4 to-blue-600/4"></div>
      </div>
      
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary/10 to-blue-600/10 backdrop-blur-sm rounded-full text-sm font-bold text-primary mb-6 shadow-soft border border-primary/20">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
            Testemunhos Reais
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-foreground mb-6 leading-tight tracking-tight">
            O Que Dizem os{" "}
            <span className="text-transparent bg-gradient-to-r from-primary to-blue-600 bg-clip-text">
              Nossos Clientes
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto font-medium leading-relaxed">
            Mais de 5.000 clientes satisfeitos confiam na nossa experiência e dedicação.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="group bg-white/90 backdrop-blur-sm border-0 shadow-lg hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 hover:-translate-y-3 cursor-pointer">
              <CardContent className="p-8 relative overflow-hidden">
                {/* Background decoration */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="flex items-start gap-6 relative">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-blue-600 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-500">
                    <Quote className="h-6 w-6 text-white" />
                  </div>
                  
                  <div className="flex-1">
                    <p className="text-foreground leading-relaxed mb-6 font-medium text-lg italic">
                      &ldquo;{testimonial.text}&rdquo;
                    </p>
                    
                    <div className="flex items-center gap-2 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <div>
                        <div className="font-bold text-foreground text-lg">{testimonial.name}</div>
                        <div className="text-sm text-muted-foreground font-medium">{testimonial.location}</div>
                      </div>
                      <div className="text-xs bg-gradient-to-r from-primary/20 to-blue-600/20 text-primary border border-primary/30 px-4 py-2 rounded-full font-bold">
                        {testimonial.service}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Enhanced Trust indicators */}
        <div className="text-center">
          <div className="inline-flex items-center gap-12 bg-white/90 backdrop-blur-sm rounded-3xl px-12 py-8 shadow-xl border border-white/50">
            <div className="text-center group">
              <div className="text-3xl font-black text-foreground mb-2 group-hover:text-primary transition-colors duration-300">4.9/5</div>
              <div className="text-sm text-muted-foreground font-medium">Avaliação Média</div>
            </div>
            <div className="w-px h-16 bg-border"></div>
            <div className="text-center group">
              <div className="text-3xl font-black text-foreground mb-2 group-hover:text-primary transition-colors duration-300">5,000+</div>
              <div className="text-sm text-muted-foreground font-medium">Clientes Satisfeitos</div>
            </div>
            <div className="w-px h-16 bg-border"></div>
            <div className="text-center group">
              <div className="text-3xl font-black text-foreground mb-2 group-hover:text-primary transition-colors duration-300">98%</div>
              <div className="text-sm text-muted-foreground font-medium">Taxa de Aprovação</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;