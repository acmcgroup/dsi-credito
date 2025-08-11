import { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Merge, 
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
  title: 'Consolidação de Créditos | Global Crédito - Soluções Financeiras no Porto',
  description: 'Consolidação de créditos para simplificar as suas finanças. Unifique todos os seus empréstimos numa única prestação com taxas mais baixas.',
  keywords: 'consolidação créditos, unificar empréstimos, refinanciamento, redução juros, Porto',
  openGraph: {
    title: 'Consolidação de Créditos | Global Crédito',
    description: 'Simplifique as suas finanças com consolidação de créditos. Uma única prestação com taxas mais baixas.',
    type: 'website',
    locale: 'pt_PT',
  },
};

const Consolidacao = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Section */}
      <section className="bg-[rgb(6,38,68)] text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <Badge variant="secondary" className="mb-4 bg-[#c0a651] text-white">
              <Merge className="w-4 h-4 mr-2" />
              Consolidação de Créditos
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Simplifique as Suas Finanças
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Consolide todos os seus créditos numa única prestação com taxas mais baixas e melhor gestão
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
              Por que escolher a consolidação de créditos?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Benefícios que vão transformar a sua vida financeira
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow border-0 shadow-md">
              <CardHeader>
                <div className="w-16 h-16 bg-[#c0a651]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <DollarSign className="w-8 h-8 text-[#c0a651]" />
                </div>
                <CardTitle>Poupança Mensal</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Reduza significativamente a sua prestação mensal e liberte dinheiro para outras necessidades
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow border-0 shadow-md">
              <CardHeader>
                <div className="w-16 h-16 bg-[#c0a651]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-[#c0a651]" />
                </div>
                <CardTitle>Gestão Simplificada</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Uma única prestação mensal em vez de múltiplas datas de vencimento para gerir
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-[#c0a651]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-[#c0a651]" />
                </div>
                <CardTitle>Taxas Mais Baixas</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Beneficie de taxas de juro mais competitivas e reduza o custo total dos seus créditos
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Como Funciona */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Como Funciona a Consolidação
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Processo simples e transparente para consolidar os seus créditos
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-[#c0a651] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold mb-2">Análise</h3>
              <p className="text-gray-600">
                Analisamos todos os seus créditos atuais e situação financeira
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-[#c0a651] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold mb-2">Simulação</h3>
              <p className="text-gray-600">
                Criamos uma simulação personalizada com as melhores condições
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-[#c0a651] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold mb-2">Aprovação</h3>
              <p className="text-gray-600">
                Obtemos a aprovação do novo crédito consolidado
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-[#c0a651] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                4
              </div>
              <h3 className="text-xl font-semibold mb-2">Liquidação</h3>
              <p className="text-gray-600">
                Liquidamos os créditos antigos e inicia o novo
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tipos de Créditos */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Que Créditos Pode Consolidar?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Consolide diferentes tipos de créditos numa única solução
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
                    <CardTitle className="text-2xl">Créditos Pessoais</CardTitle>
                    <CardDescription>Empréstimos para projetos pessoais</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-[#c0a651]" />
                  <span>Créditos para viagens</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-[#c0a651]" />
                  <span>Créditos para formação</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-[#c0a651]" />
                  <span>Créditos para eventos</span>
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
                    <CardTitle className="text-2xl">Cartões de Crédito</CardTitle>
                    <CardDescription>Dívidas de cartões de crédito</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-[#c0a651]" />
                  <span>Dívidas acumuladas</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-[#c0a651]" />
                  <span>Juros elevados</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-[#c0a651]" />
                  <span>Múltiplos cartões</span>
                </div>
              </CardContent>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-[#c0a651]/20 rounded-lg flex items-center justify-center">
                    <Merge className="w-6 h-6 text-[#c0a651]" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl">Outros Créditos</CardTitle>
                    <CardDescription>Diversos tipos de financiamento</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-[#c0a651]" />
                  <span>Créditos automóvel</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-[#c0a651]" />
                  <span>Créditos para reformas</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-[#c0a651]" />
                  <span>Microcréditos</span>
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
                    <CardTitle className="text-2xl">Créditos com Garantias</CardTitle>
                    <CardDescription>Créditos com hipotecas ou penhores</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-[#c0a651]" />
                  <span>Créditos hipotecários</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-[#c0a651]" />
                  <span>Créditos com penhor</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-[#c0a651]" />
                  <span>Refinanciamento</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Benefícios da Consolidação
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Transforme a sua situação financeira com a consolidação de créditos
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-[#c0a651] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                💰
              </div>
              <h3 className="text-xl font-semibold mb-2">Poupança</h3>
              <p className="text-gray-600">
                Reduza até 40% na sua prestação mensal
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-[#c0a651] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                📅
              </div>
              <h3 className="text-xl font-semibold mb-2">Organização</h3>
              <p className="text-gray-600">
                Uma única data de vencimento
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-[#c0a651] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                📊
              </div>
              <h3 className="text-xl font-semibold mb-2">Controlo</h3>
              <p className="text-gray-600">
                Melhor gestão das suas finanças
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-[#c0a651] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                🎯
              </div>
              <h3 className="text-xl font-semibold mb-2">Objetivos</h3>
              <p className="text-gray-600">
                Liberte dinheiro para outros projetos
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-[rgb(6,38,68)] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Pronto para Simplificar as Suas Finanças?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Contacte-nos hoje mesmo para uma consulta gratuita e descubra como podemos ajudá-lo
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-[#c0a651] text-white hover:bg-[#f4d03f] hover:text-[rgb(6,38,68)] transition-all duration-300">
              <Calculator className="w-5 h-5 mr-2" />
              Simular Consolidação
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

export default Consolidacao; 
