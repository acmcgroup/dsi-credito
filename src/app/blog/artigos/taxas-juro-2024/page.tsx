import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Clock, User, ArrowLeft, TrendingUp, Calculator, Shield, CheckCircle, Target, BarChart3, AlertTriangle } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Taxas de Juro: O que Esperar em 2024 | Global Crédito",
  description: "Análise das tendências das taxas de juro e como podem afetar os seus planos de crédito no próximo ano.",
  keywords: "taxas juro 2024, Euribor, crédito habitação, mercado financeiro, Portugal",
  openGraph: {
    title: "Taxas de Juro: O que Esperar em 2024",
    description: "Análise completa das tendências das taxas de juro para 2024 e impacto nos créditos.",
    type: "article",
    publishedTime: "2023-12-28T00:00:00.000Z",
    authors: ["Global Crédito"],
    tags: ["taxas juro", "2024", "Euribor", "mercado financeiro"]
  }
};

export default function TaxasJuro2024Page() {
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
                Mercado
              </span>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                28 Dezembro 2023
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                8 min de leitura
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight tracking-tight">
              Taxas de{" "}
              <span className="text-transparent bg-gradient-to-r from-[#c0a651] to-[#f4d03f] bg-clip-text">
                Juro
              </span>{" "}
              O que Esperar em 2024
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
              Análise das tendências das taxas de juro e como podem afetar 
              os seus planos de crédito no próximo ano.
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
                  As taxas de juro são um dos fatores mais importantes a considerar 
                  quando se planeia contrair um crédito, especialmente o crédito habitação. 
                  Em 2024, o mercado financeiro enfrenta um cenário de incerteza e 
                  mudanças significativas.
                </p>
                <p className="text-lg leading-relaxed text-gray-700">
                  Neste artigo, analisamos as tendências esperadas para as taxas de juro 
                  no próximo ano e como podem impactar as suas decisões financeiras.
                </p>
              </div>

              <div className="mb-12">
                <h2 className="text-3xl font-bold text-[rgb(6,38,68)] mb-6">
                  Contexto Atual do Mercado
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <Card className="border-2 border-[#c0a651] shadow-lg">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 bg-[#c0a651] rounded-lg flex items-center justify-center mb-4">
                        <TrendingUp className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-[rgb(6,38,68)] mb-3">Inflação</h3>
                      <p className="text-gray-700">
                        A inflação tem sido o principal motor das subidas das taxas de juro, 
                        forçando os bancos centrais a agir.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="border-2 border-[#c0a651] shadow-lg">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 bg-[#c0a651] rounded-lg flex items-center justify-center mb-4">
                        <BarChart3 className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-[rgb(6,38,68)] mb-3">Política Monetária</h3>
                      <p className="text-gray-700">
                        O BCE tem mantido uma política de taxas elevadas para combater 
                        a inflação persistente na zona euro.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="border-2 border-[#c0a651] shadow-lg">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 bg-[#c0a651] rounded-lg flex items-center justify-center mb-4">
                        <Shield className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-[rgb(6,38,68)] mb-3">Estabilidade Financeira</h3>
                      <p className="text-gray-700">
                        Os bancos centrais procuram equilibrar o controlo da inflação 
                        com a estabilidade do sistema financeiro.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="border-2 border-[#c0a651] shadow-lg">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 bg-[#c0a651] rounded-lg flex items-center justify-center mb-4">
                        <Target className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-[rgb(6,38,68)] mb-3">Crescimento Económico</h3>
                      <p className="text-gray-700">
                        O impacto das taxas elevadas no crescimento económico 
                        pode forçar uma mudança de política.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <div className="mb-12">
                <h2 className="text-3xl font-bold text-[rgb(6,38,68)] mb-6">
                  Tendências Esperadas para 2024
                </h2>
                
                <div className="space-y-6">
                  <div className="border-l-4 border-[#c0a651] pl-6">
                    <h3 className="text-2xl font-bold text-[rgb(6,38,68)] mb-3">Primeiro Semestre: Estabilidade</h3>
                    <p className="text-gray-700 mb-3">
                      Espera-se que as taxas se mantenham estáveis durante o primeiro 
                      semestre de 2024, com o BCE a monitorizar os dados de inflação.
                    </p>
                    <p className="text-gray-700">
                      <strong>Fatores:</strong> Inflação ainda acima do objetivo de 2%, 
                      necessidade de consolidar os ganhos da política monetária.
                    </p>
                  </div>

                  <div className="border-l-4 border-[#c0a651] pl-6">
                    <h3 className="text-2xl font-bold text-[rgb(6,38,68)] mb-3">Segundo Semestre: Possível Descida</h3>
                    <p className="text-gray-700 mb-3">
                      Se a inflação continuar a descer e o crescimento económico 
                      se mostrar fraco, o BCE pode começar a baixar as taxas.
                    </p>
                    <p className="text-gray-700">
                      <strong>Fatores:</strong> Dados económicos, pressão política, 
                      necessidade de estimular o crescimento.
                    </p>
                  </div>

                  <div className="border-l-4 border-[#c0a651] pl-6">
                    <h3 className="text-2xl font-bold text-[rgb(6,38,68)] mb-3">Euribor: Movimento Gradual</h3>
                    <p className="text-gray-700 mb-3">
                      A Euribor deve seguir as taxas do BCE, mas com movimentos 
                      mais graduais e menos voláteis do que em 2023.
                    </p>
                    <p className="text-gray-700">
                      <strong>Expectativa:</strong> Euribor 12M entre 3,5% e 4,5% 
                      durante a maior parte do ano.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mb-12">
                <h2 className="text-3xl font-bold text-[rgb(6,38,68)] mb-6">
                  Impacto nas Diferentes Tipologias de Crédito
                </h2>
                
                <div className="bg-[#c0a651]/10 border-2 border-[#c0a651] rounded-lg p-6">
                  <h3 className="text-xl font-bold text-[rgb(6,38,68)] mb-4">Crédito Habitação</h3>
                  <ul className="space-y-3 text-gray-700 mb-6">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-[#c0a651] mt-0.5 flex-shrink-0" />
                      <span><strong>Taxa Variável:</strong> Prestações podem estabilizar ou diminuir gradualmente</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-[#c0a651] mt-0.5 flex-shrink-0" />
                      <span><strong>Taxa Fixa:</strong> Pode tornar-se mais atrativa se as taxas baixarem</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-[#c0a651] mt-0.5 flex-shrink-0" />
                      <span><strong>Taxa Mista:</strong> Boa opção para aproveitar a estabilidade atual</span>
                    </li>
                  </ul>

                  <h3 className="text-xl font-bold text-[rgb(6,38,68)] mb-4">Crédito Pessoal e Automóvel</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-[#c0a651] mt-0.5 flex-shrink-0" />
                      <span><strong>Taxas:</strong> Podem baixar ligeiramente, mas menos que a Euribor</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-[#c0a651] mt-0.5 flex-shrink-0" />
                      <span><strong>Spread:</strong> Pode ser negociado com mais facilidade</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mb-12">
                <h2 className="text-3xl font-bold text-[rgb(6,38,68)] mb-6">
                  Estratégias para 2024
                </h2>
                
                <div className="space-y-6">
                  <div className="bg-white border-2 border-[#c0a651] rounded-lg p-6 shadow-lg">
                    <h3 className="text-xl font-bold text-[rgb(6,38,68)] mb-3">1. Avalie a Sua Situação Atual</h3>
                    <p className="text-gray-700">
                      Se tem crédito habitação com taxa variável, calcule o impacto 
                      das taxas atuais e projete cenários futuros.
                    </p>
                  </div>

                  <div className="bg-white border-2 border-[#c0a651] rounded-lg p-6 shadow-lg">
                    <h3 className="text-xl font-bold text-[rgb(6,38,68)] mb-3">2. Considere a Reestruturação</h3>
                    <p className="text-gray-700">
                      Avalie se faz sentido reestruturar o seu crédito, aproveitando 
                      as condições atuais do mercado.
                    </p>
                  </div>

                  <div className="bg-white border-2 border-[#c0a651] rounded-lg p-6 shadow-lg">
                    <h3 className="text-xl font-bold text-[rgb(6,38,68)] mb-3">3. Prepare-se para Oportunidades</h3>
                    <p className="text-gray-700">
                      Mantenha-se informado sobre as tendências do mercado para 
                      aproveitar momentos favoráveis.
                    </p>
                  </div>

                  <div className="bg-white border-2 border-[#c0a651] rounded-lg p-6 shadow-lg">
                    <h3 className="text-xl font-bold text-[rgb(6,38,68)] mb-3">4. Diversifique as Opções</h3>
                    <p className="text-gray-700">
                      Considere produtos com diferentes tipologias de taxa para 
                      reduzir o risco de exposição.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mb-12">
                <h2 className="text-3xl font-bold text-[rgb(6,38,68)] mb-6">
                  Riscos e Oportunidades
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-red-50 border-2 border-red-200 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-red-800 mb-4 flex items-center gap-2">
                      <AlertTriangle className="h-5 w-5" />
                      Riscos
                    </h3>
                    <ul className="space-y-2 text-red-700">
                      <li className="flex items-start gap-3">
                        <CheckCircle className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
                        <span>Taxas podem subir mais do que o esperado</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
                        <span>Volatilidade do mercado pode aumentar</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
                        <span>Impacto na capacidade de pagamento</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-green-50 border-2 border-green-200 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-green-800 mb-4 flex items-center gap-2">
                      <Target className="h-5 w-5" />
                      Oportunidades
                    </h3>
                    <ul className="space-y-2 text-green-700">
                      <li className="flex items-start gap-3">
                        <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Possibilidade de taxas mais baixas no futuro</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Negociação de melhores condições</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Reestruturação de créditos existentes</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="mb-12">
                <h2 className="text-3xl font-bold text-[rgb(6,38,68)] mb-6">
                  Conclusão
                </h2>
                <p className="text-lg leading-relaxed text-gray-700 mb-6">
                  2024 promete ser um ano de transição no mercado das taxas de juro, 
                  com possibilidade de estabilização e eventual descida gradual.
                </p>
                <p className="text-lg leading-relaxed text-gray-700">
                  É essencial manter-se informado e preparado para aproveitar as 
                  oportunidades que surgirem, sempre com o aconselhamento de especialistas 
                  que conhecem o mercado e podem ajudá-lo a tomar as melhores decisões.
                </p>
              </div>
            </article>

            {/* CTA Section */}
            <div className="mt-16 text-center">
              <Card className="bg-[rgb(6,38,68)] border-2 border-[#c0a651] shadow-xl">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-4">
                    Precisa de Aconselhamento sobre Taxas de Juro?
                  </h3>
                  <p className="text-white/90 mb-6">
                    Os nossos especialistas podem ajudá-lo a analisar as tendências 
                    do mercado e a escolher a melhor estratégia para o seu crédito.
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