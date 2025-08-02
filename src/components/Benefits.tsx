import { Card, CardContent } from "@/components/ui/card";
import { 
  Shield, 
  Zap, 
  Target, 
  Users, 
  Award, 
  Clock,
} from "lucide-react";

const benefits = [
  {
    icon: Shield,
    title: "100% Seguro e Licenciado",
    description: "Licença do Banco de Portugal e total conformidade regulatória.",
    color: "text-blue-600"
  },
  {
    icon: Zap,
    title: "Processo Rápido",
    description: "Aprovação em 24h e documentação simplificada.",
    color: "text-yellow-600"
  },
  {
    icon: Target,
    title: "Melhor Taxa do Mercado",
    description: "Comparamos todas as opções para garantir a melhor oferta.",
    color: "text-green-600"
  },
  {
    icon: Users,
    title: "Atendimento Personalizado",
    description: "Cada cliente tem um consultor dedicado durante todo o processo.",
    color: "text-purple-600"
  },
  {
    icon: Award,
    title: "Experiência Comprovada",
    description: "Mais de 15 anos no mercado com milhares de clientes satisfeitos.",
    color: "text-red-600"
  },
  {
    icon: Clock,
    title: "Disponibilidade Total",
    description: "Suporte 6 dias por semana para esclarecer todas as suas dúvidas.",
    color: "text-indigo-600"
  },
];

const Benefits = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-gray-50/80 to-slate-100/40 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/4 to-blue-600/4"></div>
      </div>
      
      <div className="container mx-auto px-6 lg:px-8 relative">
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary/10 to-blue-600/10 backdrop-blur-sm rounded-full text-xs font-bold text-primary mb-4 shadow-soft border border-primary/20">
            <div className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse"></div>
            Vantagens Exclusivas
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-foreground mb-4 leading-tight tracking-tight">
            Porque Escolher a{" "}
            <span className="text-transparent bg-gradient-to-r from-primary to-blue-600 bg-clip-text">
              Global Crédito?
            </span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto font-medium leading-relaxed">
            Mais de 15 anos de experiência no mercado português, com uma equipa dedicada 
            a encontrar sempre a melhor solução para os nossos clientes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <Card key={index} className="group h-full bg-white/90 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl hover:shadow-primary/20 transition-all duration-300 hover:-translate-y-2 cursor-pointer">
                <CardContent className="p-6 text-center relative overflow-hidden">
                  {/* Background decoration */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Enhanced icon styling */}
                  <div className="relative mb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-white to-gray-50 rounded-2xl flex items-center justify-center mx-auto shadow-lg group-hover:shadow-xl border border-gray-100/50 backdrop-blur-sm group-hover:-translate-y-1 transition-all duration-300">
                      <Icon className={`h-8 w-8 ${benefit.color} group-hover:scale-105 transition-all duration-300`} />
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-bold text-foreground mb-3 group-hover:text-primary transition-all duration-300 relative">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed font-medium relative">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Enhanced Trust indicators */}
        <div className="relative max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-primary via-blue-600 to-indigo-700 rounded-2xl p-8 text-white text-center shadow-xl overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 opacity-30">
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-blue-600/10"></div>
            </div>
            
            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-black mb-6 leading-tight">
                Números que{" "}
                <span className="text-yellow-300">Falam por Si</span>
              </h3>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="group">
                  <div className="text-3xl md:text-4xl font-black mb-2 text-yellow-300 group-hover:scale-105 transition-transform duration-300">98%</div>
                  <div className="text-xs text-white/90 font-medium">Taxa de Aprovação</div>
                </div>
                <div className="group">
                  <div className="text-3xl md:text-4xl font-black mb-2 text-yellow-300 group-hover:scale-105 transition-transform duration-300">24h</div>
                  <div className="text-xs text-white/90 font-medium">Tempo Médio</div>
                </div>
                <div className="group">
                  <div className="text-3xl md:text-4xl font-black mb-2 text-yellow-300 group-hover:scale-105 transition-transform duration-300">500M€+</div>
                  <div className="text-xs text-white/90 font-medium">Crédito Aprovado</div>
                </div>
                <div className="group">
                  <div className="text-3xl md:text-4xl font-black mb-2 text-yellow-300 group-hover:scale-105 transition-transform duration-300">5,000+</div>
                  <div className="text-xs text-white/90 font-medium">Clientes Satisfeitos</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;