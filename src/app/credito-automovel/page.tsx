import { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Car, Calculator, Shield, Clock, CheckCircle, TrendingUp, FileText, Zap, Fuel, Settings } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Crédito Automóvel | Global Crédito - Soluções Financeiras no Porto',
  description: 'Crédito automóvel com condições vantajosas. Financiamento para carros novos e usados, aprovação rápida e taxas competitivas.',
  keywords: 'crédito automóvel, financiamento carro, empréstimo automóvel, simulação crédito carro, Porto',
  openGraph: {
    title: 'Crédito Automóvel | Global Crédito',
    description: 'As melhores condições de crédito automóvel no Porto. Financiamento para carros novos e usados.',
    type: 'website',
    locale: 'pt_PT',
  },
};

const CreditoAutomovel = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-green-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-900 to-green-700 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <Badge variant="secondary" className="mb-4 bg-green-100 text-green-800">
              <Car className="w-4 h-4 mr-2" />
              Crédito Automóvel
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Conduza o Carro dos Seus Sonhos
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Crédito automóvel com as melhores condições do mercado, para carros novos e usados
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-green-900 hover:bg-gray-100">
                <Calculator className="w-5 h-5 mr-2" />
                Simular Agora
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-900">
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
              Por que escolher a Global Crédito para o seu carro?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Oferecemos as melhores condições e acompanhamento personalizado para o seu crédito automóvel
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-green-600" />
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
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-blue-600" />
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

      {/* CTA Final */}
      <section className="py-20 bg-green-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Pronto para Conduzir o Carro dos Seus Sonhos?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Contacte-nos hoje mesmo para uma consulta gratuita e descubra como podemos ajudá-lo
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-green-900 hover:bg-gray-100">
              <Calculator className="w-5 h-5 mr-2" />
              Simular Crédito
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-900">
              <FileText className="w-5 h-5 mr-2" />
              Solicitar Consulta
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CreditoAutomovel; 