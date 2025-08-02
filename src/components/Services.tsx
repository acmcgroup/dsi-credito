import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Home, 
  Car, 
  Building, 
  CreditCard, 
  Banknote, 
  Calculator,
  ArrowRight,
  CheckCircle
} from "lucide-react";

const services = [
  {
    icon: Home,
    title: "Crédito Habitação",
    description: "Financiamento para compra, construção ou obras na sua casa.",
    features: ["Taxa fixa ou variável", "Até 90% do valor", "Prazos até 40 anos"],
  },
  {
    icon: Car,
    title: "Crédito Automóvel",
    description: "Financie o seu carro novo ou usado com as melhores condições.",
    features: ["Aprovação rápida", "Sem entrada", "Seguro incluído"],
  },
  {
    icon: Building,
    title: "Crédito Empresarial",
    description: "Soluções de financiamento para o seu negócio crescer.",
    features: ["Tesouraria", "Investimento", "Equipamentos"],
  },
  {
    icon: CreditCard,
    title: "Crédito Pessoal",
    description: "Para os seus projetos pessoais e necessidades imediatas.",
    features: ["Sem garantias", "Decisão rápida", "Uso livre"],
  },
  {
    icon: Banknote,
    title: "Consolidação de Créditos",
    description: "Unifique todos os seus créditos numa só prestação.",
    features: ["Menor prestação", "Taxa única", "Gestão simplificada"],
  },
  {
    icon: Calculator,
    title: "Renegociação",
    description: "Melhore as condições dos seus créditos existentes.",
    features: ["Taxas mais baixas", "Prazos alargados", "Poupança garantida"],
  }
];

const Services = () => {
  return (
    <section id="servicos" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-indigo-50/50 via-blue-50/30 to-slate-50/40 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/3 to-blue-600/3"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-12 sm:mb-16 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 bg-gradient-to-r from-primary/10 to-blue-600/10 backdrop-blur-sm rounded-full text-xs font-bold text-primary mb-4 shadow-soft border border-primary/20">
            <div className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse"></div>
            Serviços Especializados
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-foreground mb-4 leading-tight tracking-tight">
            Os{" "}
            <span className="text-transparent bg-gradient-to-r from-primary to-blue-600 bg-clip-text">
              Nossos Serviços
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto font-medium leading-relaxed px-4 sm:px-0">
            Oferecemos soluções completas de intermediação de crédito, 
            adaptadas às suas necessidades específicas no mercado português.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12 max-w-6xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className="group h-full bg-white/90 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl hover:shadow-primary/20 transition-all duration-300 hover:-translate-y-2 cursor-pointer">
                <CardHeader className="text-center pb-4 relative overflow-hidden">
                  {/* Background decoration */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Enhanced icon container */}
                  <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-blue-600 flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl group-hover:scale-105 transition-all duration-300">
                    <Icon className="h-8 w-8 text-white group-hover:scale-105 transition-transform duration-300" />
                    <div className="absolute -inset-1 bg-gradient-to-br from-primary to-blue-600 rounded-3xl opacity-30 group-hover:opacity-50 transition-opacity duration-500 blur-sm"></div>
                  </div>
                  
                  <CardTitle className="text-lg font-bold text-foreground group-hover:text-primary transition-all duration-300 relative">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground font-medium mt-2 relative text-sm">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="relative">
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2 text-sm text-foreground font-medium">
                        <div className="w-4 h-4 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                          <CheckCircle className="h-2.5 w-2.5 text-green-600" />
                        </div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    variant="outline" 
                    className="w-full group bg-white border-2 border-primary/20 hover:bg-primary hover:text-white hover:border-primary hover:shadow-lg hover:-translate-y-1 transition-all duration-300 font-semibold text-sm"
                  >
                    Saber Mais
                    <ArrowRight className="h-3 w-3 group-hover:translate-x-2 transition-transform duration-300" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Enhanced CTA */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="flex flex-col items-center gap-4 p-4 sm:p-6 bg-white/80 backdrop-blur-md rounded-2xl shadow-lg border border-white/50 mx-4 sm:mx-auto">
            <h3 className="text-lg sm:text-xl font-bold text-foreground text-center">
              Encontre a Solução Ideal para Si
            </h3>
            <p className="text-muted-foreground font-medium text-sm text-center">
              Comece agora com uma simulação gratuita e sem compromisso
            </p>
            
            <Button 
              variant="hero" 
              size="lg" 
              className="px-4 sm:px-6 py-3 font-semibold shadow-lg hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-1 transition-all duration-300 bg-gradient-to-r from-primary to-blue-600 border-0 w-full sm:w-auto"
            >
              <Calculator className="h-4 w-4 mr-2" />
              Simular Crédito Agora
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;