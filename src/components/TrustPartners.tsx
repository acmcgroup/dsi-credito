import { Card, CardContent } from "@/components/ui/card";
import { Shield, Award, Users, Globe } from "lucide-react";

const partners = [
  { name: "Banco de Portugal", type: "Regulador" },
  { name: "APB", type: "Associação" },
  { name: "Santander", type: "Parceiro" },
  { name: "BCP", type: "Parceiro" },
  { name: "CGD", type: "Parceiro" },
  { name: "BPI", type: "Parceiro" },
  { name: "Bankinter", type: "Parceiro" },
  { name: "Crédito Agrícola", type: "Parceiro" }
];

const certifications = [
  {
    icon: Shield,
    title: "Autorização BP",
    subtitle: "Nº 0003923",
    description: "Licenciado pelo Banco de Portugal"
  },
  {
    icon: Award,
    title: "Membro APB",
    subtitle: "Certificado",
    description: "Associação Portuguesa de Bancos"
  },
  {
    icon: Users,
    title: "RGPD Compliance",
    subtitle: "Certificado",
    description: "Proteção total dos seus dados"
  },
  {
    icon: Globe,
    title: "ISO 27001",
    subtitle: "Certificado",
    description: "Segurança da informação"
  }
];

const TrustPartners = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-blue-50/50 via-indigo-50/30 to-slate-50/40 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/3 to-blue-600/3"></div>
      </div>
      
      <div className="container mx-auto px-4 relative">
        {/* Trust indicators */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary/10 to-blue-600/10 backdrop-blur-sm rounded-full text-sm font-bold text-primary mb-6 shadow-soft border border-primary/20">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
            Credibilidade Comprovada
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-foreground mb-6 leading-tight tracking-tight">
            Confiança e{" "}
            <span className="text-transparent bg-gradient-to-r from-primary to-blue-600 bg-clip-text">
              Credibilidade
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto font-medium leading-relaxed">
            Licenciados, certificados e reconhecidos pelas principais entidades do sector financeiro.
          </p>
        </div>

        {/* Enhanced Certifications */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {certifications.map((cert, index) => {
            const Icon = cert.icon;
            return (
              <Card key={index} className="group h-full bg-white/90 backdrop-blur-sm border-0 shadow-lg hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 hover:-translate-y-4 text-center cursor-pointer">
                <CardContent className="p-8 relative overflow-hidden">
                  {/* Background decoration */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Enhanced icon */}
                  <div className="relative mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-blue-600 rounded-2xl flex items-center justify-center mx-auto shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-500">
                      <Icon className="h-8 w-8 text-white group-hover:scale-110 transition-transform duration-300" />
                      <div className="absolute -inset-1 bg-gradient-to-br from-primary to-blue-600 rounded-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500 blur-sm"></div>
                    </div>
                  </div>
                  
                  <h3 className="font-black text-foreground mb-2 text-lg group-hover:text-primary transition-all duration-300 relative">{cert.title}</h3>
                  <div className="text-sm font-bold text-primary mb-3 relative">{cert.subtitle}</div>
                  <p className="text-xs text-muted-foreground font-medium relative">{cert.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Enhanced Bank partners */}
        <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-12 shadow-xl border border-white/50 mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-black text-foreground mb-4">
              Parceiros Bancários
            </h3>
            <p className="text-lg text-muted-foreground font-medium max-w-2xl mx-auto">
              Trabalhamos com os principais bancos portugueses para garantir as melhores condições
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6 items-center">
            {partners.map((partner, index) => (
              <div key={index} className="text-center group cursor-pointer">
                <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 mb-3 shadow-md group-hover:shadow-lg group-hover:-translate-y-2 transition-all duration-300 border border-gray-100/50">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary/10 to-blue-600/10 rounded-xl flex items-center justify-center mx-auto group-hover:bg-gradient-to-br group-hover:from-primary group-hover:to-blue-600 transition-all duration-300">
                    <span className="text-primary font-black text-lg group-hover:text-white transition-colors duration-300">
                      {partner.name.substring(0, 2).toUpperCase()}
                    </span>
                  </div>
                </div>
                <div className="text-xs font-bold text-foreground group-hover:text-primary transition-colors duration-300">{partner.name}</div>
                <div className="text-xs text-muted-foreground font-medium">{partner.type}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced Statistics */}
        <div className="relative">
          <div className="bg-gradient-to-br from-primary via-blue-600 to-indigo-700 rounded-3xl p-12 text-white shadow-2xl overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 opacity-30">
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-blue-600/10"></div>
            </div>
            
            <div className="relative z-10">
              <div className="text-center mb-12">
                <h3 className="text-3xl md:text-4xl font-black mb-4 leading-tight">
                  Números de{" "}
                  <span className="text-yellow-300">Confiança</span>
                </h3>
                <p className="text-xl text-white/90 font-medium">Resultados que comprovam a nossa excelência</p>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                <div className="group">
                  <div className="text-4xl md:text-5xl font-black mb-3 text-yellow-300 group-hover:scale-110 transition-transform duration-300">15+</div>
                  <div className="text-sm text-white/90 font-medium">Anos de Experiência</div>
                </div>
                <div className="group">
                  <div className="text-4xl md:text-5xl font-black mb-3 text-yellow-300 group-hover:scale-110 transition-transform duration-300">500M€+</div>
                  <div className="text-sm text-white/90 font-medium">Crédito Aprovado</div>
                </div>
                <div className="group">
                  <div className="text-4xl md:text-5xl font-black mb-3 text-yellow-300 group-hover:scale-110 transition-transform duration-300">5,000+</div>
                  <div className="text-sm text-white/90 font-medium">Clientes Satisfeitos</div>
                </div>
                <div className="group">
                  <div className="text-4xl md:text-5xl font-black mb-3 text-yellow-300 group-hover:scale-110 transition-transform duration-300">98%</div>
                  <div className="text-sm text-white/90 font-medium">Taxa de Aprovação</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustPartners;