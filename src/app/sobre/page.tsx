import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Award, Users, Clock } from "lucide-react";

export default function SobrePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-[rgb(6,38,68)] text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight tracking-tight">
            Sobre a{" "}
            <span className="text-transparent bg-gradient-to-r from-[#c0a651] to-[#f4d03f] bg-clip-text">
              Global Crédito
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            O seu parceiro de confiança para soluções de crédito no mercado português
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Company Overview */}
          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[rgb(6,38,68)] mb-8 text-center">
              Quem Somos
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="text-lg leading-relaxed mb-6">
                A <strong>Global Crédito</strong> é uma empresa especializada em intermediação de crédito, 
                registada junto do Banco de Portugal sob o nº 0003923. Atuamos como intermediários de 
                crédito vinculados, oferecendo soluções personalizadas para particulares e empresas.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                Com mais de 10 anos de experiência no mercado, ajudamos centenas de clientes a 
                concretizar os seus objetivos financeiros, desde a compra da casa dos sonhos até 
                ao financiamento de projetos empresariais.
              </p>
              <p className="text-lg leading-relaxed">
                A nossa missão é simplificar o processo de obtenção de crédito, oferecendo 
                aconselhamento especializado e condições competitivas através da nossa rede 
                de parceiros bancários.
              </p>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card className="text-center border-2 border-[#c0a651] shadow-lg">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-[#c0a651] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold text-[rgb(6,38,68)]">300+</CardTitle>
                <CardDescription className="text-lg">Clientes Satisfeitos</CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center border-2 border-[#c0a651] shadow-lg">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-[#c0a651] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold text-[rgb(6,38,68)]">100M€+</CardTitle>
                <CardDescription className="text-lg">Crédito Aprovado</CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center border-2 border-[#c0a651] shadow-lg">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-[#c0a651] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold text-[rgb(6,38,68)]">10+</CardTitle>
                <CardDescription className="text-lg">Anos de Experiência</CardDescription>
              </CardHeader>
            </Card>
          </div>

          {/* Values Section */}
          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[rgb(6,38,68)] mb-8 text-center">
              Os Nossos Valores
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="border-2 border-[#c0a651] shadow-lg">
                <CardHeader>
                  <div className="w-12 h-12 bg-[#c0a651] rounded-lg flex items-center justify-center mb-4">
                    <Shield className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl text-[rgb(6,38,68)]">Transparência</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    Acreditamos na comunicação clara e honesta com os nossos clientes, 
                    explicando todos os detalhes dos produtos de crédito de forma compreensível.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-[#c0a651] shadow-lg">
                <CardHeader>
                  <div className="w-12 h-12 bg-[#c0a651] rounded-lg flex items-center justify-center mb-4">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl text-[rgb(6,38,68)]">Foco no Cliente</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    Cada cliente é único e merece uma solução personalizada. 
                    Trabalhamos para encontrar as melhores condições para as suas necessidades específicas.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-[#c0a651] shadow-lg">
                <CardHeader>
                  <div className="w-12 h-12 bg-[#c0a651] rounded-lg flex items-center justify-center mb-4">
                    <Award className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl text-[rgb(6,38,68)]">Excelência</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    Comprometemo-nos com os mais altos padrões de qualidade no serviço 
                    e aconselhamento financeiro, sempre atualizados com as melhores práticas do mercado.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-[#c0a651] shadow-lg">
                <CardHeader>
                  <div className="w-12 h-12 bg-[#c0a651] rounded-lg flex items-center justify-center mb-4">
                    <Shield className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl text-[rgb(6,38,68)]">Conformidade</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    Operamos em total conformidade com a regulamentação do Banco de Portugal 
                    e as melhores práticas da indústria financeira.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Contact CTA */}
          <div className="text-center">
            <Card className="bg-[rgb(6,38,68)] border-2 border-[#c0a651] shadow-xl max-w-2xl mx-auto">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Pronto para começar?
                </h3>
                <p className="text-white/90 mb-6">
                  Entre em contacto connosco e descubra como podemos ajudá-lo a 
                  concretizar os seus objetivos financeiros.
                </p>
                <a 
                  href="#contacto" 
                  className="inline-flex items-center px-6 py-3 bg-[#c0a651] text-[rgb(6,38,68)] font-semibold rounded-lg hover:bg-[#d4b86a] transition-colors duration-300"
                >
                  Contactar Agora
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
} 