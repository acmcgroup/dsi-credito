import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Clock, User, ArrowLeft, Building, TrendingUp, Calculator, Shield, CheckCircle, Target, BarChart3 } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Crédito Empresarial: Investir no Crescimento da Sua Empresa | Global Crédito",
  description: "Explore as diferentes opções de financiamento empresarial disponíveis e como podem impulsionar o desenvolvimento do seu negócio.",
  keywords: "crédito empresarial, financiamento empresas, capital de giro, investimento negócio, Portugal",
  openGraph: {
    title: "Crédito Empresarial: Investir no Crescimento da Sua Empresa",
    description: "Guia completo sobre financiamento empresarial para impulsionar o crescimento do seu negócio.",
    type: "article",
    publishedTime: "2024-01-05T00:00:00.000Z",
    authors: ["Global Crédito"],
    tags: ["crédito empresarial", "financiamento", "empresas", "crescimento"]
  }
};

export default function CreditoEmpresarialCrescimentoPage() {
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
                Crédito Empresarial
              </span>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                5 Janeiro 2024
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                6 min de leitura
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight tracking-tight">
              Crédito{" "}
              <span className="text-transparent bg-gradient-to-r from-[#c0a651] to-[#f4d03f] bg-clip-text">
                Empresarial
              </span>{" "}
              Investir no Crescimento da Sua Empresa
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
              Explore as diferentes opções de financiamento empresarial disponíveis e como 
              podem impulsionar o desenvolvimento do seu negócio.
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
                  O crescimento empresarial requer investimento contínuo, seja para expandir 
                  operações, adquirir novos equipamentos, ou simplesmente manter o capital 
                  de giro necessário para o funcionamento diário.
                </p>
                <p className="text-lg leading-relaxed text-gray-700">
                  O crédito empresarial oferece às empresas a flexibilidade financeira 
                  necessária para aproveitar oportunidades de crescimento e superar 
                  desafios temporários de liquidez.
                </p>
              </div>

              <div className="mb-12">
                <h2 className="text-3xl font-bold text-[rgb(6,38,68)] mb-6">
                  Tipos de Financiamento Empresarial
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <Card className="border-2 border-[#c0a651] shadow-lg">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 bg-[#c0a651] rounded-lg flex items-center justify-center mb-4">
                        <Building className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-[rgb(6,38,68)] mb-3">Capital de Giro</h3>
                      <p className="text-gray-700">
                        Financiamento para cobrir necessidades operacionais diárias, 
                        como pagamento a fornecedores e despesas correntes.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="border-2 border-[#c0a651] shadow-lg">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 bg-[#c0a651] rounded-lg flex items-center justify-center mb-4">
                        <Target className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-[rgb(6,38,68)] mb-3">Investimento</h3>
                      <p className="text-gray-700">
                        Financiamento para aquisição de equipamentos, expansão de 
                        instalações ou desenvolvimento de novos produtos.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="border-2 border-[#c0a651] shadow-lg">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 bg-[#c0a651] rounded-lg flex items-center justify-center mb-4">
                        <TrendingUp className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-[rgb(6,38,68)] mb-3">Factoring</h3>
                      <p className="text-gray-700">
                        Antecipação de recebíveis, convertendo faturas em dinheiro 
                        imediato para melhorar a liquidez.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="border-2 border-[#c0a651] shadow-lg">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 bg-[#c0a651] rounded-lg flex items-center justify-center mb-4">
                        <BarChart3 className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-[rgb(6,38,68)] mb-3">Leasing</h3>
                      <p className="text-gray-700">
                        Aluguer de equipamentos ou instalações com opção de compra, 
                        ideal para empresas que preferem não imobilizar capital.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <div className="mb-12">
                <h2 className="text-3xl font-bold text-[rgb(6,38,68)] mb-6">
                  Vantagens do Crédito Empresarial
                </h2>
                
                <div className="space-y-6">
                  <div className="border-l-4 border-[#c0a651] pl-6">
                    <h3 className="text-2xl font-bold text-[rgb(6,38,68)] mb-3">Flexibilidade Financeira</h3>
                    <p className="text-gray-700 mb-3">
                      Permite à empresa manter o capital próprio disponível para outras 
                      oportunidades ou para cobrir situações inesperadas.
                    </p>
                    <p className="text-gray-700">
                      <strong>Benefício:</strong> Maior capacidade de resposta a 
                      oportunidades de mercado.
                    </p>
                  </div>

                  <div className="border-l-4 border-[#c0a651] pl-6">
                    <h3 className="text-2xl font-bold text-[rgb(6,38,68)] mb-3">Crescimento Acelerado</h3>
                    <p className="text-gray-700 mb-3">
                      Possibilita investimentos que de outra forma seriam adiados, 
                      acelerando o crescimento e a competitividade da empresa.
                    </p>
                    <p className="text-gray-700">
                      <strong>Benefício:</strong> Aproveitamento de oportunidades 
                      de mercado que não podem esperar.
                    </p>
                  </div>

                  <div className="border-l-4 border-[#c0a651] pl-6">
                    <h3 className="text-2xl font-bold text-[rgb(6,38,68)] mb-3">Gestão de Fluxo de Caixa</h3>
                    <p className="text-gray-700 mb-3">
                      Ajuda a equilibrar entradas e saídas de dinheiro, especialmente 
                      em empresas com sazonalidade ou ciclos de pagamento longos.
                    </p>
                    <p className="text-gray-700">
                      <strong>Benefício:</strong> Maior estabilidade financeira 
                      e redução de stress operacional.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mb-12">
                <h2 className="text-3xl font-bold text-[rgb(6,38,68)] mb-6">
                  Critérios de Aprovação
                </h2>
                
                <div className="bg-[#c0a651]/10 border-2 border-[#c0a651] rounded-lg p-6">
                  <h3 className="text-xl font-bold text-[rgb(6,38,68)] mb-4">Fatores Principais</h3>
                  <ul className="space-y-3 text-gray-700 mb-6">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-[#c0a651] mt-0.5 flex-shrink-0" />
                      <span><strong>Histórico da Empresa:</strong> Tempo de atividade e performance financeira</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-[#c0a651] mt-0.5 flex-shrink-0" />
                      <span><strong>Demonstrações Financeiras:</strong> Balanços e demonstrações de resultados</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-[#c0a651] mt-0.5 flex-shrink-0" />
                      <span><strong>Plano de Negócio:</strong> Estratégia clara para utilização dos fundos</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-[#c0a651] mt-0.5 flex-shrink-0" />
                      <span><strong>Garantias:</strong> Colaterais ou avalistas que reduzam o risco</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-[#c0a651] mt-0.5 flex-shrink-0" />
                      <span><strong>Capacidade de Pagamento:</strong> Fluxo de caixa projetado</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mb-12">
                <h2 className="text-3xl font-bold text-[rgb(6,38,68)] mb-6">
                  Documentação Necessária
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white border-2 border-[#c0a651] rounded-lg p-6 shadow-lg">
                    <h3 className="text-xl font-bold text-[rgb(6,38,68)] mb-4">Documentos da Empresa</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-3">
                        <CheckCircle className="h-4 w-4 text-[#c0a651] mt-0.5 flex-shrink-0" />
                        <span>Certidão permanente da Conservatória</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="h-4 w-4 text-[#c0a651] mt-0.5 flex-shrink-0" />
                        <span>Estatutos da empresa</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="h-4 w-4 text-[#c0a651] mt-0.5 flex-shrink-0" />
                        <span>Cartão de identificação fiscal</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="h-4 w-4 text-[#c0a651] mt-0.5 flex-shrink-0" />
                        <span>Licenças de atividade</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-white border-2 border-[#c0a651] rounded-lg p-6 shadow-lg">
                    <h3 className="text-xl font-bold text-[rgb(6,38,68)] mb-4">Documentos Financeiros</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-3">
                        <CheckCircle className="h-4 w-4 text-[#c0a651] mt-0.5 flex-shrink-0" />
                        <span>Últimos 3 anos de demonstrações financeiras</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="h-4 w-4 text-[#c0a651] mt-0.5 flex-shrink-0" />
                        <span>Declarações de IVA e IRC</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="h-4 w-4 text-[#c0a651] mt-0.5 flex-shrink-0" />
                        <span>Extratos bancários dos últimos 6 meses</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="h-4 w-4 text-[#c0a651] mt-0.5 flex-shrink-0" />
                        <span>Plano de negócio detalhado</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="mb-12">
                <h2 className="text-3xl font-bold text-[rgb(6,38,68)] mb-6">
                  Estratégias para Obter Melhores Condições
                </h2>
                
                <div className="space-y-6">
                  <div className="bg-white border-2 border-[#c0a651] rounded-lg p-6 shadow-lg">
                    <h3 className="text-xl font-bold text-[rgb(6,38,68)] mb-3">1. Prepare-se Adequadamente</h3>
                    <p className="text-gray-700">
                      Organize toda a documentação financeira e prepare um plano de negócio 
                      detalhado que demonstre a viabilidade do projeto.
                    </p>
                  </div>

                  <div className="bg-white border-2 border-[#c0a651] rounded-lg p-6 shadow-lg">
                    <h3 className="text-xl font-bold text-[rgb(6,38,68)] mb-3">2. Compare Propostas</h3>
                    <p className="text-gray-700">
                      Solicite propostas de várias instituições financeiras e compare 
                      não só as taxas, mas também as condições e prazos.
                    </p>
                  </div>

                  <div className="bg-white border-2 border-[#c0a651] rounded-lg p-6 shadow-lg">
                    <h3 className="text-xl font-bold text-[rgb(6,38,68)] mb-3">3. Considere Garantias</h3>
                    <p className="text-gray-700">
                      Avalie se pode oferecer garantias adicionais que possam resultar 
                      em melhores condições de financiamento.
                    </p>
                  </div>

                  <div className="bg-white border-2 border-[#c0a651] rounded-lg p-6 shadow-lg">
                    <h3 className="text-xl font-bold text-[rgb(6,38,68)] mb-3">4. Negocie Ativamente</h3>
                    <p className="text-gray-700">
                      Não aceite a primeira proposta. Use as outras propostas como 
                      alavanca para negociar melhores condições.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mb-12">
                <h2 className="text-3xl font-bold text-[rgb(6,38,68)] mb-6">
                  Conclusão
                </h2>
                <p className="text-lg leading-relaxed text-gray-700 mb-6">
                  O crédito empresarial pode ser uma ferramenta poderosa para impulsionar 
                  o crescimento da sua empresa, mas é essencial escolher a opção certa 
                  e negociar as melhores condições.
                </p>
                <p className="text-lg leading-relaxed text-gray-700">
                  A equipa da Global Crédito especializada em financiamento empresarial 
                  está disponível para o ajudar a analisar as diferentes opções e a 
                  encontrar a solução mais adequada para as necessidades da sua empresa.
                </p>
              </div>
            </article>

            {/* CTA Section */}
            <div className="mt-16 text-center">
              <Card className="bg-[rgb(6,38,68)] border-2 border-[#c0a651] shadow-xl">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-4">
                    Precisa de Financiamento para a Sua Empresa?
                  </h3>
                  <p className="text-white/90 mb-6">
                    Os nossos especialistas em crédito empresarial podem ajudá-lo a 
                    encontrar as melhores condições e a estruturar a proposta ideal.
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