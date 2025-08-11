import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Clock, User, ArrowLeft, TrendingUp, Calculator, Shield, CheckCircle } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Como Escolher o Melhor Crédito Habitação em 2024 | Global Crédito",
  description: "Descubra os fatores mais importantes a considerar na escolha do seu crédito habitação e como obter as melhores condições do mercado em 2024.",
  keywords: "crédito habitação, crédito casa, financiamento imobiliário, taxas juro, spread, 2024, Portugal",
  openGraph: {
    title: "Como Escolher o Melhor Crédito Habitação em 2024",
    description: "Guia completo para escolher o melhor crédito habitação com as melhores condições do mercado.",
    type: "article",
    publishedTime: "2024-01-15T00:00:00.000Z",
    authors: ["Global Crédito"],
    tags: ["crédito habitação", "financiamento", "imobiliário", "2024"]
  }
};

export default function CreditoHabitacao2024Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-[rgb(6,38,68)] text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="mb-6">
              <Link 
                href="/blog" 
                className="inline-flex items-center gap-2 text-[#c0a651] hover:text-[#f4d03f] transition-colors duration-300"
              >
                <ArrowLeft className="h-4 w-4" />
                Voltar ao Blog
              </Link>
            </div>
            
            <div className="flex items-center gap-4 mb-6 text-sm">
              <span className="px-3 py-1 bg-[#c0a651] text-[rgb(6,38,68)] rounded-full font-semibold">
                Crédito Habitação
              </span>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                15 Janeiro 2024
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                5 min de leitura
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight tracking-tight">
              Como Escolher o{" "}
              <span className="text-transparent bg-gradient-to-r from-[#c0a651] to-[#f4d03f] bg-clip-text">
                Melhor Crédito Habitação
              </span>{" "}
              em 2024
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
              Descubra os fatores mais importantes a considerar na escolha do seu crédito habitação 
              e como obter as melhores condições do mercado.
            </p>

            <div className="flex items-center gap-4 mt-8">
              <div className="w-12 h-12 bg-[#c0a651] rounded-full flex items-center justify-center">
                <User className="h-6 w-6 text-white" />
              </div>
              <div>
                <p className="font-semibold">Equipa Global Crédito</p>
                <p className="text-white/80 text-sm">Especialistas em Crédito</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Article Content */}
            <article className="prose prose-lg max-w-none">
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-[rgb(6,38,68)] mb-6">
                  Introdução
                </h2>
                <p className="text-lg leading-relaxed text-gray-700 mb-6">
                  A compra de uma casa é uma das decisões financeiras mais importantes da sua vida. 
                  Com as taxas de juro em constante mudança e uma oferta diversificada de produtos 
                  bancários, escolher o crédito habitação certo pode ser um desafio.
                </p>
                <p className="text-lg leading-relaxed text-gray-700">
                  Neste guia completo, vamos ajudá-lo a navegar pelas opções disponíveis e a tomar 
                  uma decisão informada sobre o seu financiamento imobiliário.
                </p>
              </div>

              <div className="mb-12">
                <h2 className="text-3xl font-bold text-[rgb(6,38,68)] mb-6">
                  Fatores Principais a Considerar
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <Card className="border-2 border-[#c0a651] shadow-lg">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 bg-[#c0a651] rounded-lg flex items-center justify-center mb-4">
                        <TrendingUp className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-[rgb(6,38,68)] mb-3">Taxa de Juro</h3>
                      <p className="text-gray-700">
                        Compare as taxas fixas, variáveis e mistas. Em 2024, as taxas variáveis 
                        podem oferecer melhores condições iniciais.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="border-2 border-[#c0a651] shadow-lg">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 bg-[#c0a651] rounded-lg flex items-center justify-center mb-4">
                        <Calculator className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-[rgb(6,38,68)] mb-3">Spread</h3>
                      <p className="text-gray-700">
                        O spread é a margem que o banco adiciona à Euribor. Negocie para obter 
                        o spread mais baixo possível.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="border-2 border-[#c0a651] shadow-lg">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 bg-[#c0a651] rounded-lg flex items-center justify-center mb-4">
                        <Shield className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-[rgb(6,38,68)] mb-3">Seguros</h3>
                      <p className="text-gray-700">
                        Avalie se os seguros obrigatórios (vida e multirriscos) são competitivos 
                        ou se pode contratá-los separadamente.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="border-2 border-[#c0a651] shadow-lg">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 bg-[#c0a651] rounded-lg flex items-center justify-center mb-4">
                        <CheckCircle className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-[rgb(6,38,68)] mb-3">Comissões</h3>
                      <p className="text-gray-700">
                        Atenção às comissões de manutenção de conta, processamento de pagamentos 
                        e outras despesas ocultas.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <div className="mb-12">
                <h2 className="text-3xl font-bold text-[rgb(6,38,68)] mb-6">
                  Tipos de Taxa de Juro
                </h2>
                
                <div className="space-y-6">
                  <div className="border-l-4 border-[#c0a651] pl-6">
                    <h3 className="text-2xl font-bold text-[rgb(6,38,68)] mb-3">Taxa Fixa</h3>
                    <p className="text-gray-700 mb-3">
                      A prestação mantém-se constante durante todo o período contratado, 
                      oferecendo previsibilidade mas geralmente com taxas mais altas.
                    </p>
                    <p className="text-gray-700">
                      <strong>Vantagens:</strong> Previsibilidade, proteção contra subidas de juros
                    </p>
                    <p className="text-gray-700">
                      <strong>Desvantagens:</strong> Taxas mais altas, menor flexibilidade
                    </p>
                  </div>

                  <div className="border-l-4 border-[#c0a651] pl-6">
                    <h3 className="text-2xl font-bold text-[rgb(6,38,68)] mb-3">Taxa Variável</h3>
                    <p className="text-gray-700 mb-3">
                      A prestação varia consoante a evolução da Euribor, oferecendo taxas 
                      mais baixas mas com risco de subida.
                    </p>
                    <p className="text-gray-700">
                      <strong>Vantagens:</strong> Taxas mais baixas, flexibilidade
                    </p>
                    <p className="text-gray-700">
                      <strong>Desvantagens:</strong> Imprevisibilidade, risco de subida
                    </p>
                  </div>

                  <div className="border-l-4 border-[#c0a651] pl-6">
                    <h3 className="text-2xl font-bold text-[rgb(6,38,68)] mb-3">Taxa Mista</h3>
                    <p className="text-gray-700 mb-3">
                      Combina períodos de taxa fixa com períodos de taxa variável, 
                      oferecendo um equilíbrio entre previsibilidade e flexibilidade.
                    </p>
                    <p className="text-gray-700">
                      <strong>Vantagens:</strong> Equilíbrio entre fixa e variável
                    </p>
                    <p className="text-gray-700">
                      <strong>Desvantagens:</strong> Maior complexidade, pode ser mais cara
                    </p>
                  </div>
                </div>
              </div>

              <div className="mb-12">
                <h2 className="text-3xl font-bold text-[rgb(6,38,68)] mb-6">
                  Dicas para Negociar Melhores Condições
                </h2>
                
                <div className="bg-[#c0a651]/10 border-2 border-[#c0a651] rounded-lg p-6">
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-[#c0a651] mt-0.5 flex-shrink-0" />
                      <span>Compare propostas de vários bancos antes de decidir</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-[#c0a651] mt-0.5 flex-shrink-0" />
                      <span>Negocie o spread - cada décima pode fazer diferença</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-[#c0a651] mt-0.5 flex-shrink-0" />
                      <span>Considere transferir outros produtos para o mesmo banco</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-[#c0a651] mt-0.5 flex-shrink-0" />
                      <span>Avalie se os seguros obrigatórios são competitivos</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-[#c0a651] mt-0.5 flex-shrink-0" />
                      <span>Leia atentamente todas as comissões e despesas</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mb-12">
                <h2 className="text-3xl font-bold text-[rgb(6,38,68)] mb-6">
                  Conclusão
                </h2>
                <p className="text-lg leading-relaxed text-gray-700 mb-6">
                  Escolher o crédito habitação certo requer tempo, pesquisa e comparação. 
                  Não se deixe pressionar e tome uma decisão informada que se adequa 
                  às suas necessidades e capacidade financeira.
                </p>
                <p className="text-lg leading-relaxed text-gray-700">
                  A equipa da Global Crédito está disponível para o ajudar a analisar 
                  as diferentes propostas e a encontrar a solução mais adequada para si.
                </p>
              </div>
            </article>

            {/* CTA Section */}
            <div className="mt-16 text-center">
              <Card className="bg-[rgb(6,38,68)] border-2 border-[#c0a651] shadow-xl">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-4">
                    Precisa de Ajuda com o Seu Crédito Habitação?
                  </h3>
                  <p className="text-white/90 mb-6">
                    Os nossos especialistas podem ajudá-lo a encontrar as melhores condições 
                    e a negociar com os bancos em seu nome.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link 
                      href="/#contacto"
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#c0a651] text-[rgb(6,38,68)] font-semibold rounded-lg hover:bg-[#d4b86a] transition-colors duration-300"
                    >
                      Contactar Especialista
                    </Link>
                    <Link 
                      href="/blog"
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-[#c0a651] text-[#c0a651] font-semibold rounded-lg hover:bg-[#c0a651] hover:text-[rgb(6,38,68)] transition-colors duration-300"
                    >
                      Ver Mais Artigos
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 