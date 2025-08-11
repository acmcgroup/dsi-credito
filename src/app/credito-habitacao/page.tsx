import { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Home, 
  Calculator, 
  Shield, 
  Clock, 
  CheckCircle, 
  TrendingUp,
  FileText,
  Users,
  Building
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Crédito Habitação | Global Crédito - Soluções Financeiras no Porto',
  description: 'Crédito habitação com as melhores condições do mercado. Taxas competitivas, aprovação rápida e acompanhamento personalizado. Solicite uma simulação gratuita.',
  keywords: 'crédito habitação, empréstimo casa, taxa juro habitação, simulação crédito habitação, Porto',
  openGraph: {
    title: 'Crédito Habitação | Global Crédito',
    description: 'As melhores condições de crédito habitação no Porto. Taxas competitivas e aprovação rápida.',
    type: 'website',
    locale: 'pt_PT',
  },
};

const CreditoHabitacao = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#003865] to-[#004a8a] text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <Badge variant="secondary" className="mb-4 bg-[#003865]/10 text-[#003865]">
              <Home className="w-4 h-4 mr-2" />
              Crédito Habitação
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Realize o Sonho da Casa Própria
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Crédito habitação com as melhores condições do mercado, taxas competitivas e aprovação rápida
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-[#003865] hover:bg-[#c0a651] hover:text-[#003865]">
                <Calculator className="w-5 h-5 mr-2" />
                Simular Agora
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-[#c0a651] hover:text-[#003865]">
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
              Por que escolher a Global Crédito?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Oferecemos as melhores condições e acompanhamento personalizado para o seu crédito habitação
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-[#003865]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-[#003865]" />
                </div>
                <CardTitle>Taxas Competitivas</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Negociamos com os principais bancos para obter as melhores taxas de juro do mercado
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-green-600" />
                </div>
                <CardTitle>Aprovação Rápida</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Processo simplificado com aprovação em tempo recorde e acompanhamento personalizado
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-purple-600" />
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
              Tipos de Crédito Habitação
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Soluções adaptadas às suas necessidades e perfil financeiro
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="p-8 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                                  <div className="w-12 h-12 bg-[#003865]/10 rounded-lg flex items-center justify-center">
                  <Building className="w-6 h-6 text-[#003865]" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl">Compra de Casa</CardTitle>
                    <CardDescription>Para primeira habitação ou mudança</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>Financiamento até 90% do valor da casa</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>Prazos até 40 anos</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>Taxas fixas ou variáveis</span>
                </div>
              </CardContent>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <Home className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl">Construção</CardTitle>
                    <CardDescription>Para construir a casa dos seus sonhos</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>Financiamento da construção</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>Pagamentos faseados</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>Acompanhamento da obra</span>
                </div>
              </CardContent>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl">Reformas</CardTitle>
                    <CardDescription>Para melhorar e valorizar a sua casa</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>Financiamento de obras de melhoria</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>Prazos flexíveis</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>Taxas especiais para reformas</span>
                </div>
              </CardContent>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                    <Users className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl">Jovens</CardTitle>
                    <CardDescription>Programas especiais para jovens casais</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>Condições especiais para jovens</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>Entrada reduzida</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>Taxas preferenciais</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Processo */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Como Funciona o Processo
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Processo simples e transparente em apenas 4 passos
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-[#003865] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold mb-2">Contacto Inicial</h3>
              <p className="text-gray-600">
                Entre em contacto connosco para uma primeira conversa sobre as suas necessidades
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-[#003865] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold mb-2">Análise e Simulação</h3>
              <p className="text-gray-600">
                Analisamos o seu perfil e criamos simulações personalizadas com as melhores condições
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-[#003865] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold mb-2">Aprovação</h3>
              <p className="text-gray-600">
                Apresentamos a sua candidatura aos bancos e obtemos a aprovação mais rápida
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-[#003865] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                4
              </div>
              <h3 className="text-xl font-semibold mb-2">Assinatura</h3>
              <p className="text-gray-600">
                Acompanhamos todo o processo até à assinatura final do contrato
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-[#003865] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Pronto para Realizar o Sonho da Casa Própria?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Contacte-nos hoje mesmo para uma consulta gratuita e descubra como podemos ajudá-lo
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-[#003865] hover:bg-[#c0a651] hover:text-[#003865]">
              <Calculator className="w-5 h-5 mr-2" />
              Simular Crédito
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-[#c0a651] hover:text-[#003865]">
              <FileText className="w-5 h-5 mr-2" />
              Solicitar Consulta
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CreditoHabitacao; 