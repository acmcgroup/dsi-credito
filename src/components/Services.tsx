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
    <section id="servicos" className="py-16 sm:py-20 lg:py-24 bg-[rgb(6,38,68)] relative overflow-hidden">

      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16 sm:mb-20 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-3 px-4 sm:px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full text-sm font-bold text-white mb-6 shadow-lg border border-white/30">
            <div className="w-2 h-2 bg-gradient-to-r from-[#c0a651] to-[#f4d03f] rounded-full animate-pulse"></div>
            Serviços Especializados
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight tracking-tight">
            Os{" "}
            <span className="text-transparent bg-gradient-to-r from-[#c0a651] to-[#f4d03f] bg-clip-text">
              Nossos Serviços
            </span>
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-white/90 max-w-3xl mx-auto font-medium leading-relaxed px-4 sm:px-0">
            Oferecemos soluções completas de intermediação de crédito, 
            adaptadas às suas necessidades específicas no mercado português.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12 max-w-7xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className="group h-full bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-primary/10 transition-all duration-500 hover:-translate-y-3 cursor-pointer overflow-hidden">
                {/* Top accent bar */}
                <div className="h-1 bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <CardHeader className="text-center pb-6 pt-8 relative">
                  {/* Enhanced icon container with better styling */}
                                     <div className="relative w-20 h-20 rounded-3xl bg-[#003865]/10 border border-[#003865]/20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-500">
                     <Icon className="h-10 w-10 text-[#003865] group-hover:scale-110 transition-transform duration-500" />
                    {/* Subtle glow effect */}
                    <div className="absolute inset-0 bg-primary/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-md"></div>
                  </div>
                  
                  <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-primary transition-all duration-300 mb-3">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600 font-medium text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="relative px-6 pb-8">
                  {/* Features list with improved styling */}
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-3 text-sm text-gray-700 font-medium">
                        <div className="w-5 h-5 bg-gradient-to-r from-green-400 to-green-500 rounded-full flex items-center justify-center flex-shrink-0 shadow-sm">
                          <CheckCircle className="h-3 w-3 text-white" />
                        </div>
                        <span className="group-hover:text-gray-900 transition-colors duration-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  {/* Enhanced button with better styling */}
                  <Button 
                    className="w-full group bg-white border-2 border-[#003865]/20 hover:bg-[#003865] hover:text-white hover:border-[#003865] hover:shadow-lg hover:shadow-[#003865]/25 hover:-translate-y-1 transition-all duration-300 font-semibold text-sm py-3 rounded-xl"
                  >
                    Saber Mais
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-2 transition-transform duration-300 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        
      </div>
    </section>
  );
};

export default Services;