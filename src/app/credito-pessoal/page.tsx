import { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  User, 
  Calculator, 
  Shield, 
  Clock, 
  CheckCircle, 
  TrendingUp,
  FileText,
  CreditCard,
  Target,
  Zap
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Crédito Pessoal | Global Crédito - Soluções Financeiras no Porto',
  description: 'Crédito pessoal com condições vantajosas. Financiamento para projetos pessoais, consolidação de dívidas e necessidades urgentes.',
  keywords: 'crédito pessoal, empréstimo pessoal, financiamento pessoal, simulação crédito pessoal, Porto',
  openGraph: {
    title: 'Crédito Pessoal | Global Crédito',
    description: 'As melhores condições de crédito pessoal no Porto. Financiamento rápido e flexível.',
    type: 'website',
    locale: 'pt_PT',
  },
};

const CreditoPessoal = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Section */}
      <section className="bg-[rgb(6,38,68)] text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <Badge variant="secondary" className="mb-4 bg-[#c0a651] text-white">
              <User className="w-4 h-4 mr-2" />
              Crédito Pessoal
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Realize os Seus Projetos Pessoais
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Crédito pessoal com condições vantajosas para projetos, consolidação de dívidas e necessidades urgentes
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
              Por que escolher a Global Crédito para o seu crédito pessoal?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Oferecemos as melhores condições e acompanhamento personalizado para o seu financiamento
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

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
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
              Tipos de Crédito Pessoal
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Soluções adaptadas às suas necessidades e perfil financeiro
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
                    <CardTitle className="text-2xl">Projetos Pessoais</CardTitle>
                    <CardDescription>Para realizar os seus sonhos</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-[#c0a651]" />
                  <span>Viagens e férias</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-[#c0a651]" />
                  <span>Formação e educação</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-[#c0a651]" />
                  <span>Casamentos e eventos</span>
                </div>
              </CardContent>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-[#c0a651]/20 rounded-lg flex items-center justify-center">
                    <CreditCard className="w-6 h-6 text-[#c0a651]" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl">Consolidação de Dívidas</CardTitle>
                    <CardDescription>Para simplificar as suas finanças</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-[#c0a651]" />
                  <span>Unificação de créditos</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-[#c0a651]" />
                  <span>Redução de juros</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-[#c0a651]" />
                  <span>Uma única prestação</span>
                </div>
              </CardContent>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-[#c0a651]/20 rounded-lg flex items-center justify-center">
                    <Zap className="w-6 h-6 text-[#c0a651]" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl">Emergências</CardTitle>
                    <CardDescription>Para situações urgentes</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-[#c0a651]" />
                  <span>Despesas médicas</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-[#c0a651]" />
                  <span>Reparações urgentes</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-[#c0a651]" />
                  <span>Aprovação em 24h</span>
                </div>
              </CardContent>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-[#c0a651]/20 rounded-lg flex items-center justify-center">
                    <User className="w-6 h-6 text-[#c0a651]" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl">Reformas</CardTitle>
                    <CardDescription>Para melhorar a sua casa</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-[#c0a651]" />
                  <span>Obras de melhoria</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-[#c0a651]" />
                  <span>Mobiliário e eletrodomésticos</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-[#c0a651]" />
                  <span>Prazos flexíveis</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Características */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Características do Crédito Pessoal
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Condições flexíveis e vantajosas para o seu financiamento
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-[#c0a651] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                €
              </div>
              <h3 className="text-xl font-semibold mb-2">Montantes</h3>
              <p className="text-gray-600">
                Desde 1.000€ até 50.000€
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-[#c0a651] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                %
              </div>
              <h3 className="text-xl font-semibold mb-2">Taxas</h3>
              <p className="text-gray-600">
                Desde 5.9% TAN
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-[#c0a651] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                📅
              </div>
              <h3 className="text-xl font-semibold mb-2">Prazos</h3>
              <p className="text-gray-600">
                Até 7 anos
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-[#c0a651] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                ⚡
              </div>
              <h3 className="text-xl font-semibold mb-2">Aprovação</h3>
              <p className="text-gray-600">
                Em 24-48 horas
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-[rgb(6,38,68)] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Pronto para Realizar os Seus Projetos Pessoais?
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

export default CreditoPessoal; 
