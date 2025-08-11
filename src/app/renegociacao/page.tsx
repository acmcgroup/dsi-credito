import { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  RefreshCw, 
  Calculator, 
  Shield, 
  Clock, 
  CheckCircle, 
  TrendingUp,
  FileText,
  CreditCard,
  Target,
  DollarSign
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Renegociação de Créditos | Global Crédito - Soluções Financeiras no Porto',
  description: 'Renegociação de créditos para melhorar as suas condições. Reduza taxas, prazos e prestações com as melhores ofertas do mercado.',
  keywords: 'renegociação créditos, melhorar condições crédito, redução taxas, refinanciamento, Porto',
  openGraph: {
    title: 'Renegociação de Créditos | Global Crédito',
    description: 'Melhore as condições dos seus créditos com renegociação. Taxas mais baixas e melhores condições.',
    type: 'website',
    locale: 'pt_PT',
  },
};

const Renegociacao = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Section */}
      <section className="bg-[rgb(6,38,68)] text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <Badge variant="secondary" className="mb-4 bg-[#c0a651] text-white">
              <RefreshCw className="w-4 h-4 mr-2" />
              Renegociação de Créditos
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Melhore as Condições dos Seus Créditos
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Renegocie os seus créditos para obter taxas mais baixas, prazos melhores e prestações mais acessíveis
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
              Por que renegociar os seus créditos?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Benefícios que vão melhorar significativamente a sua situação financeira
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow border-0 shadow-md">
              <CardHeader>
                <div className="w-16 h-16 bg-[#c0a651]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <DollarSign className="w-8 h-8 text-[#c0a651]" />
                </div>
                <CardTitle>Redução de Custos</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Reduza significativamente as taxas de juro e o custo total dos seus créditos
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow border-0 shadow-md">
              <CardHeader>
                <div className="w-16 h-16 bg-[#c0a651]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-[#c0a651]" />
                </div>
                <CardTitle>Prazos Flexíveis</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Ajuste os prazos dos seus créditos às suas necessidades atuais
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-[#c0a651]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-[#c0a651]" />
                </div>
                <CardTitle>Melhores Condições</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Beneficie das melhores condições do mercado e produtos mais adequados
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Tipos de Renegociação */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Tipos de Renegociação
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Soluções adaptadas aos diferentes tipos de créditos
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="p-8 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-[#c0a651]/20 rounded-lg flex items-center justify-center">
                    <CreditCard className="w-6 h-6 text-[#c0a651]" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl">Crédito Habitação</CardTitle>
                    <CardDescription>Renegociação de hipotecas</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-[#c0a651]" />
                  <span>Redução de taxas de juro</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-[#c0a651]" />
                  <span>Alteração de prazos</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-[#c0a651]" />
                  <span>Mudança de banco</span>
                </div>
              </CardContent>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-[#c0a651]/20 rounded-lg flex items-center justify-center">
                    <Target className="w-6 h-6 text-[#c0a651]" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl">Crédito Pessoal</CardTitle>
                    <CardDescription>Renegociação de empréstimos</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-[#c0a651]" />
                  <span>Redução de prestações</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-[#c0a651]" />
                  <span>Extensão de prazos</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-[#c0a651]" />
                  <span>Melhoria de condições</span>
                </div>
              </CardContent>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-[#c0a651]/20 rounded-lg flex items-center justify-center">
                    <RefreshCw className="w-6 h-6 text-[#c0a651]" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl">Refinanciamento</CardTitle>
                    <CardDescription>Substituição por melhores condições</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-[#c0a651]" />
                  <span>Novo crédito com melhores condições</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-[#c0a651]" />
                  <span>Liquidação do crédito antigo</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-[#c0a651]" />
                  <span>Economia significativa</span>
                </div>
              </CardContent>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-[#c0a651]/20 rounded-lg flex items-center justify-center">
                    <Shield className="w-6 h-6 text-[#c0a651]" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl">Reestruturação</CardTitle>
                    <CardDescription>Ajuste às suas necessidades</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-[#c0a651]" />
                  <span>Alteração de montantes</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-[#c0a651]" />
                  <span>Modificação de garantias</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-[#c0a651]" />
                  <span>Adaptação ao seu perfil</span>
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
              Como Funciona a Renegociação
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Processo simples e transparente para melhorar as suas condições
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-[#c0a651] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold mb-2">Análise</h3>
              <p className="text-gray-600">
                Analisamos os seus créditos atuais e identificamos oportunidades de melhoria
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-[#c0a651] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold mb-2">Simulação</h3>
              <p className="text-gray-600">
                Criamos simulações com as melhores condições disponíveis no mercado
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-[#c0a651] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold mb-2">Negociação</h3>
              <p className="text-gray-600">
                Negociamos com os bancos para obter as melhores condições para si
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-[#c0a651] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                4
              </div>
              <h3 className="text-xl font-semibold mb-2">Implementação</h3>
              <p className="text-gray-600">
                Acompanhamos todo o processo de renegociação até à conclusão
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Benefícios da Renegociação
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Transforme a sua situação financeira com condições mais vantajosas
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-[#c0a651] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                💰
              </div>
              <h3 className="text-xl font-semibold mb-2">Poupança</h3>
              <p className="text-gray-600">
                Reduza até 30% nas suas prestações
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-[#c0a651] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                📉
              </div>
              <h3 className="text-xl font-semibold mb-2">Taxas Baixas</h3>
              <p className="text-gray-600">
                Beneficie das melhores taxas do mercado
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-[#c0a651] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                📅
              </div>
              <h3 className="text-xl font-semibold mb-2">Flexibilidade</h3>
              <p className="text-gray-600">
                Prazos adaptados às suas necessidades
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-[#c0a651] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                🎯
              </div>
              <h3 className="text-xl font-semibold mb-2">Objetivos</h3>
              <p className="text-gray-600">
                Alcanhe os seus objetivos financeiros
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-[rgb(6,38,68)] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Pronto para Melhorar as Condições dos Seus Créditos?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Contacte-nos hoje mesmo para uma consulta gratuita e descubra como podemos ajudá-lo
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-[#c0a651] text-white hover:bg-[#f4d03f] hover:text-[rgb(6,38,68)] transition-all duration-300">
              <Calculator className="w-5 h-5 mr-2" />
              Simular Renegociação
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

export default Renegociacao; 
