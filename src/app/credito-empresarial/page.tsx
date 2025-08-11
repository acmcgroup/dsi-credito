import { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Building2, 
  Calculator, 
  Shield, 
  Clock, 
  CheckCircle, 
  TrendingUp,
  FileText,
  Target,
  BarChart3
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Crédito Empresarial | Global Crédito - Soluções Financeiras no Porto',
  description: 'Crédito empresarial para PMEs e empresas. Financiamento de capital de giro, investimentos e expansão empresarial com condições vantajosas.',
  keywords: 'crédito empresarial, financiamento empresas, capital de giro, investimento empresarial, Porto',
  openGraph: {
    title: 'Crédito Empresarial | Global Crédito',
    description: 'Soluções de crédito empresarial para PMEs e empresas no Porto. Financiamento com condições vantajosas.',
    type: 'website',
    locale: 'pt_PT',
  },
};

const CreditoEmpresarial = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Section */}
      <section className="bg-[rgb(6,38,68)] text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <Badge variant="secondary" className="mb-4 bg-[#c0a651] text-white">
              <Building2 className="w-4 h-4 mr-2" />
              Crédito Empresarial
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Impulsione o Crescimento da Sua Empresa
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Crédito empresarial com condições vantajosas para PMEs e empresas em crescimento
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-[#c0a651] text-white hover:bg-[#f4d03f] hover:text-[rgb(6,38,68)] transition-all duration-300">
                <Calculator className="w-5 h-5 mr-2" />
                Simular Agora
              </Button>
              <Button size="lg" variant="outline" className="border-[#c0a651] text-[#c0a651] hover:bg-[#c0a651] hover:text-white transition-all duration-300">
                <FileText className="w-5 h-5 mr-2" />
                Documentos Necessários
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Vantagens */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Por que escolher a Global Crédito para a sua empresa?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Oferecemos soluções financeiras adaptadas às necessidades específicas do seu negócio
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow border-0 shadow-md">
              <CardHeader>
                <div className="w-16 h-16 bg-[#c0a651]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-[#c0a651]" />
                </div>
                <CardTitle>Taxas Competitivas</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Negociamos com os principais bancos para obter as melhores taxas de juro do mercado
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow border-0 shadow-md">
              <CardHeader>
                <div className="w-16 h-16 bg-[#c0a651]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-[#c0a651]" />
                </div>
                <CardTitle>Aprovação Rápida</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Processo simplificado com aprovação em tempo recorde e acompanhamento personalizado
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow border-0 shadow-md">
              <CardHeader>
                <div className="w-16 h-16 bg-[#c0a651]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-[#c0a651]" />
                </div>
                <CardTitle>Segurança Total</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Autorização do Banco de Portugal e cumprimento rigoroso das normas de proteção ao cliente
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Tipos de Crédito */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Tipos de Crédito Empresarial
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Soluções adaptadas às diferentes necessidades do seu negócio
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="p-8 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-[#c0a651]/20 rounded-lg flex items-center justify-center">
                    <Target className="w-6 h-6 text-[#c0a651]" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl">Capital de Giro</CardTitle>
                    <CardDescription>Para necessidades operacionais</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-[#c0a651]" />
                  <span>Financiamento de operações diárias</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-[#c0a651]" />
                  <span>Prazos flexíveis</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-[#c0a651]" />
                  <span>Taxas competitivas</span>
                </div>
              </CardContent>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-[#c0a651]/20 rounded-lg flex items-center justify-center">
                    <BarChart3 className="w-6 h-6 text-[#c0a651]" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl">Investimento</CardTitle>
                    <CardDescription>Para expansão e modernização</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-[#c0a651]" />
                  <span>Financiamento de equipamentos</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-[#c0a651]" />
                  <span>Expansão de instalações</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-[#c0a651]" />
                  <span>Prazos estendidos</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-[rgb(6,38,68)] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Pronto para Impulsionar o Crescimento da Sua Empresa?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Contacte-nos hoje mesmo para uma consulta gratuita e descubra como podemos ajudá-lo
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-[#c0a651] text-white hover:bg-[#f4d03f] hover:text-[rgb(6,38,68)] transition-all duration-300">
              <Calculator className="w-5 h-5 mr-2" />
              Simular Crédito
            </Button>
            <Button size="lg" variant="outline" className="border-[#c0a651] text-[#c0a651] hover:bg-[#c0a651] hover:text-white transition-all duration-300">
              <FileText className="w-5 h-5 mr-2" />
              Solicitar Consulta
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CreditoEmpresarial; 
