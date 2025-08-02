import { Button } from "@/components/ui/button";
import { 
  Calculator,
  ArrowRight,
  TrendingDown,
  Clock,
  Shield,
  Users
} from "lucide-react";

const features = [
  {
    icon: TrendingDown,
    title: "Taxas Competitivas",
    description: "As melhores taxas do mercado português"
  },
  {
    icon: Clock,
    title: "Aprovação Rápida",
    description: "Resposta em até 48 horas úteis"
  },
  {
    icon: Shield,
    title: "Segurança Total",
    description: "Processo 100% seguro e confidencial"
  },
  {
    icon: Users,
    title: "Acompanhamento",
    description: "Suporte especializado em todo o processo"
  }
];

const HousingCredit = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-slate-50/80 via-blue-50/60 to-indigo-50/40 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-blue-600/5"></div>
      </div>
      
      <div className="container mx-auto px-6 lg:px-8 relative">
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/80 backdrop-blur-sm rounded-full text-xs font-semibold text-muted-foreground mb-4 shadow-soft border border-primary/10">
            <div className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse"></div>
            Crédito Habitação
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-foreground mb-4 leading-tight tracking-tight">
            O Seu Sonho da Casa Própria{" "}
            <span className="text-transparent bg-gradient-to-r from-primary to-blue-600 bg-clip-text">
              Começa Aqui
            </span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto font-medium leading-relaxed">
            Especializados em crédito habitação no Porto e em todo o país. Encontramos as 
            melhores condições para tornar a casa dos seus sonhos numa realidade.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 max-w-5xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="text-center group cursor-pointer">
                <div className="relative">
                  <div className="w-16 h-16 bg-gradient-to-br from-white to-gray-50 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl group-hover:shadow-primary/20 border border-gray-100/50 backdrop-blur-sm group-hover:-translate-y-1 transition-all duration-300 ease-out">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-blue-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <Icon className="h-8 w-8 text-primary group-hover:text-blue-600 transition-all duration-300 relative z-10 group-hover:scale-105" />
                  </div>
                </div>
                <h3 className="text-base font-bold text-foreground mb-2 group-hover:text-primary transition-all duration-300">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed font-medium">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Enhanced CTA Section */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex flex-col items-center gap-4 p-6 bg-white/70 backdrop-blur-md rounded-2xl shadow-lg border border-white/40">
            <div className="flex flex-col sm:flex-row gap-3">
              <Button 
                variant="hero" 
                size="lg" 
                className="px-6 py-3 font-semibold shadow-lg hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-1 transition-all duration-300 bg-gradient-to-r from-primary to-blue-600 border-0"
              >
                <Calculator className="h-4 w-4 mr-2" />
                Simular Crédito Habitação Grátis
                <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="px-6 py-3 font-semibold border-2 border-primary/20 bg-white/80 backdrop-blur-sm hover:bg-primary hover:text-white hover:border-primary hover:-translate-y-1 transition-all duration-300 shadow-md hover:shadow-lg"
              >
                Falar com Especialista
              </Button>
            </div>
            
            <p className="text-xs text-muted-foreground font-medium">
              ✓ Simulação gratuita e sem compromisso • ✓ Resposta em 24h • ✓ Acompanhamento personalizado
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HousingCredit;