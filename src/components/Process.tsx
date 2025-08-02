import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  MessageCircle, 
  Calculator, 
  FileCheck, 
  HandCoins,
  ArrowRight,
  CheckCircle2
} from "lucide-react";

const processSteps = [
  {
    step: "01",
    icon: MessageCircle,
    title: "Contacto Inicial",
    description: "Entre em contacto connosco por telefone, email ou através do formulário. Analisamos a sua situação sem compromisso.",
    time: "5 min"
  },
  {
    step: "02", 
    icon: Calculator,
    title: "Simulação Gratuita",
    description: "Criamos várias simulações personalizadas com diferentes bancos para encontrar a melhor proposta para si.",
    time: "2 horas"
  },
  {
    step: "03",
    icon: FileCheck,
    title: "Entrega da Documentação",
    description: "Preparamos e submetemos toda a documentação necessária aos bancos parceiros de forma organizada.",
    time: "1-2 dias"
  },
  {
    step: "04",
    icon: HandCoins,
    title: "Aprovação e Assinatura",
    description: "Acompanhamos todo o processo até à aprovação final e assinatura do contrato na notária.",
    time: "7-15 dias"
  }
];

const Process = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-gradient-to-br from-gray-50/50 to-slate-100/30 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/3 to-blue-600/3"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-primary/10 to-blue-600/10 backdrop-blur-sm rounded-full text-xs sm:text-sm font-bold text-primary mb-4 sm:mb-6 shadow-soft border border-primary/20">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
            Processo Simplificado
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-foreground mb-4 sm:mb-6 leading-tight tracking-tight">
            Como Funciona o{" "}
            <span className="text-transparent bg-gradient-to-r from-primary to-blue-600 bg-clip-text">
              Nosso Processo
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto font-medium leading-relaxed px-4 sm:px-0">
            Um processo simples e transparente, com acompanhamento personalizado em cada etapa.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {processSteps.map((step, index) => {
            const Icon = step.icon;
            const isLast = index === processSteps.length - 1;
            
            return (
              <div key={index} className="relative group">
                <Card className="h-full bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 hover:-translate-y-3 group-hover:bg-white">
                  <CardContent className="p-8 text-center relative overflow-hidden">
                    {/* Background decoration */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    {/* Step number with enhanced styling */}
                    <div className="relative inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary to-blue-600 rounded-2xl mb-6 shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-500">
                      <span className="text-white font-black text-xl">{step.step}</span>
                      <div className="absolute -inset-1 bg-gradient-to-br from-primary to-blue-600 rounded-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500 blur-sm"></div>
                    </div>
                    
                    {/* Icon with better styling */}
                    <div className="mb-6 relative">
                      <div className="w-14 h-14 bg-gradient-to-br from-gray-50 to-white rounded-2xl flex items-center justify-center mx-auto shadow-md group-hover:shadow-lg transition-all duration-300">
                        <Icon className="h-7 w-7 text-primary group-hover:text-blue-600 group-hover:scale-110 transition-all duration-300" />
                      </div>
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-primary transition-all duration-300">
                      {step.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-sm text-muted-foreground leading-relaxed mb-6 font-medium">
                      {step.description}
                    </p>
                    
                    {/* Time indicator with enhanced design */}
                    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-secondary/20 to-yellow-400/20 text-secondary border border-secondary/30 px-4 py-2 rounded-full text-sm font-bold shadow-sm">
                      <CheckCircle2 className="h-4 w-4" />
                      {step.time}
                    </div>
                  </CardContent>
                </Card>
                
                {/* Enhanced arrow connector */}
                {!isLast && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-20">
                    <div className="w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center border border-primary/20">
                      <ArrowRight className="h-5 w-5 text-primary" />
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Enhanced CTA Section */}
        <div className="text-center">
          <div className="relative p-6 sm:p-8 lg:p-12 bg-gradient-to-br from-primary via-blue-600 to-indigo-700 rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden mx-4 sm:mx-auto">
            {/* Background decoration */}
            <div className="absolute inset-0 opacity-30">
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-blue-600/10"></div>
            </div>
            
            <div className="relative z-10">
              <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black text-white mb-4 sm:mb-6 leading-tight">
                Pronto para{" "}
                <span className="text-yellow-300">Começar o Seu Processo?</span>
              </h3>
              <p className="text-base sm:text-lg lg:text-xl text-white/90 mb-6 sm:mb-8 lg:mb-10 max-w-3xl mx-auto font-medium leading-relaxed px-4 sm:px-0">
                Comece hoje mesmo com uma simulação gratuita e sem compromisso. 
                O nosso processo é rápido, seguro e totalmente personalizado.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="w-full sm:w-auto px-6 sm:px-10 py-3 sm:py-4 text-base sm:text-lg font-bold bg-white text-primary border-2 border-white hover:bg-white/90 hover:scale-105 hover:shadow-xl transition-all duration-300"
                >
                  <Calculator className="h-4 sm:h-5 w-4 sm:w-5 mr-2 sm:mr-3" />
                  Simular Crédito Grátis
                </Button>
                
                <Button 
                  size="lg" 
                  className="w-full sm:w-auto px-6 sm:px-10 py-3 sm:py-4 text-base sm:text-lg font-bold bg-yellow-400 text-gray-900 hover:bg-yellow-300 border-2 border-yellow-400 hover:border-yellow-300 hover:scale-105 hover:shadow-xl transition-all duration-300"
                >
                  <MessageCircle className="h-4 sm:h-5 w-4 sm:w-5 mr-2 sm:mr-3" />
                  Falar com Especialista
                </Button>
              </div>
              
              <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row justify-center gap-4 sm:gap-8 text-white/80 text-xs sm:text-sm font-medium">
                <div className="flex items-center justify-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-yellow-300 flex-shrink-0" />
                  Simulação 100% gratuita
                </div>
                <div className="flex items-center justify-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-yellow-300 flex-shrink-0" />
                  Resposta em 24h
                </div>
                <div className="flex items-center justify-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-yellow-300 flex-shrink-0" />
                  Sem compromisso
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;