import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Clock, User, ArrowLeft, TrendingUp, Calculator, Shield, CheckCircle, Target } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Consolidação de Créditos: Simplifique as Suas Finanças | Global Crédito",
  description: "Aprenda como unificar todos os seus créditos numa só prestação e reduzir significativamente os seus gastos mensais.",
  keywords: "consolidação créditos, unificar empréstimos, reduzir prestações, gestão dívidas, Portugal",
  openGraph: {
    title: "Consolidação de Créditos: Simplifique as Suas Finanças",
    description: "Guia completo sobre consolidação de créditos para simplificar a gestão financeira.",
    type: "article",
    publishedTime: "2024-01-01T00:00:00.000Z",
    authors: ["Global Crédito"],
    tags: ["consolidação", "créditos", "gestão dívidas", "finanças"]
  }
};

export default function ConsolidacaoCreditosPage() {
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
                Consolidação
              </span>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                1 Janeiro 2024
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                4 min de leitura
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight tracking-tight">
              Consolidação de{" "}
              <span className="text-transparent bg-gradient-to-r from-[#c0a651] to-[#f4d03f] bg-clip-text">
                Créditos
              </span>{" "}
              Simplifique as Suas Finanças
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
              Aprenda como unificar todos os seus créditos numa só prestação e reduzir 
              significativamente os seus gastos mensais.
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
                  O que é a Consolidação de Créditos?
                </h2>
                <p className="text-lg leading-relaxed text-gray-700 mb-6">
                  A consolidação de créditos é uma solução financeira que permite unificar 
                  vários empréstimos e cartões de crédito num único crédito, com uma 
                  prestação mensal mais baixa e uma gestão simplificada das suas dívidas.
                </p>
                <p className="text-lg leading-relaxed text-gray-700">
                  Esta solução é ideal para quem tem múltiplos créditos com diferentes 
                  taxas de juro e prazos, permitindo uma melhor organização financeira 
                  e potencialmente poupanças significativas.
                </p>
              </div>

              <div className="mb-12">
                <h2 className="text-3xl font-bold text-[rgb(6,38,68)] mb-6">
                  Vantagens da Consolidação
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <Card className="border-2 border-[#c0a651] shadow-lg">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 bg-[#c0a651] rounded-lg flex items-center justify-center mb-4">
                        <Calculator className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-[rgb(6,38,68)] mb-3">Prestação Única</h3>
                      <p className="text-gray-700">
                        Substitui múltiplas prestações por uma só, facilitando 
                        a gestão mensal das suas finanças.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="border-2 border-[#c0a651] shadow-lg">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 bg-[#c0a651] rounded-lg flex items-center justify-center mb-4">
                        <TrendingUp className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-[rgb(6,38,68)] mb-3">Taxa Mais Baixa</h3>
                      <p className="text-gray-700">
                        Geralmente oferece uma taxa de juro mais competitiva, 
                        resultando em poupanças significativas.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="border-2 border-[#c0a651] shadow-lg">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 bg-[#c0a651] rounded-lg flex items-center justify-center mb-4">
                        <Shield className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-[rgb(6,38,68)] mb-3">Maior Controlo</h3>
                      <p className="text-gray-700">
                        Simplifica o controlo das suas dívidas com um único 
                        credor e uma data de pagamento.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="border-2 border-[#c0a651] shadow-lg">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 bg-[#c0a651] rounded-lg flex items-center justify-center mb-4">
                        <Target className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-[rgb(6,38,68)] mb-3">Prazo Flexível</h3>
                      <p className="text-gray-700">
                        Permite escolher um prazo que se adapte à sua 
                        capacidade de pagamento atual.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <div className="mb-12">
                <h2 className="text-3xl font-bold text-[rgb(6,38,68)] mb-6">
                  Quando Considerar a Consolidação
                </h2>
                
                <div className="space-y-6">
                  <div className="border-l-4 border-[#c0a651] pl-6">
                    <h3 className="text-2xl font-bold text-[rgb(6,38,68)] mb-3">Múltiplos Créditos</h3>
                    <p className="text-gray-700 mb-3">
                      Se tem vários empréstimos ou cartões de crédito com diferentes 
                      taxas e prazos, a consolidação pode simplificar a gestão.
                    </p>
                    <p className="text-gray-700">
                      <strong>Indicador:</strong> Mais de 2-3 créditos ativos simultaneamente.
                    </p>
                  </div>

                  <div className="border-l-4 border-[#c0a651] pl-6">
                    <h3 className="text-2xl font-bold text-[rgb(6,38,68)] mb-3">Dificuldades de Pagamento</h3>
                    <p className="text-gray-700 mb-3">
                      Se está a ter dificuldades em cumprir todas as prestações 
                      mensais, a consolidação pode reduzir a pressão financeira.
                    </p>
                    <p className="text-gray-700">
                      <strong>Indicador:</strong> Atrasos ocasionais ou stress com múltiplas datas de vencimento.
                    </p>
                  </div>

                  <div className="border-l-4 border-[#c0a651] pl-6">
                    <h3 className="text-2xl font-bold text-[rgb(6,38,68)] mb-3">Taxas Elevadas</h3>
                    <p className="text-gray-700 mb-3">
                      Se alguns dos seus créditos têm taxas de juro muito elevadas, 
                      a consolidação pode resultar em poupanças significativas.
                    </p>
                    <p className="text-gray-700">
                      <strong>Indicador:</strong> Taxas superiores a 10-15% ao ano.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mb-12">
                <h2 className="text-3xl font-bold text-[rgb(6,38,68)] mb-6">
                  Como Funciona o Processo
                </h2>
                
                <div className="bg-[#c0a651]/10 border-2 border-[#c0a651] rounded-lg p-6">
                  <h3 className="text-xl font-bold text-[rgb(6,38,68)] mb-4">Passos da Consolidação</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-[#c0a651] mt-0.5 flex-shrink-0" />
                      <span><strong>1. Avaliação:</strong> Análise de todos os seus créditos ativos e capacidade de pagamento</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-[#c0a651] mt-0.5 flex-shrink-0" />
                      <span><strong>2. Proposta:</strong> Elaboração de uma proposta de consolidação personalizada</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-[#c0a651] mt-0.5 flex-shrink-0" />
                      <span><strong>3. Aprovação:</strong> Análise e aprovação do novo crédito consolidado</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-[#c0a651] mt-0.5 flex-shrink-0" />
                      <span><strong>4. Liquidação:</strong> Pagamento automático de todos os créditos antigos</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-[#c0a651] mt-0.5 flex-shrink-0" />
                      <span><strong>5. Gestão:</strong> Início do pagamento da nova prestação consolidada</span>
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
                    <h3 className="text-xl font-bold text-[rgb(6,38,68)] mb-4">Documentos Pessoais</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-3">
                        <CheckCircle className="h-4 w-4 text-[#c0a651] mt-0.5 flex-shrink-0" />
                        <span>Cartão de Cidadão ou Bilhete de Identidade</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="h-4 w-4 text-[#c0a651] mt-0.5 flex-shrink-0" />
                        <span>Número de Identificação Fiscal (NIF)</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="h-4 w-4 text-[#c0a651] mt-0.5 flex-shrink-0" />
                        <span>Comprovativo de morada</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-white border-2 border-[#c0a651] rounded-lg p-6 shadow-lg">
                    <h3 className="text-xl font-bold text-[rgb(6,38,68)] mb-4">Documentos Financeiros</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-3">
                        <CheckCircle className="h-4 w-4 text-[#c0a651] mt-0.5 flex-shrink-0" />
                        <span>Extratos de todos os créditos ativos</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="h-4 w-4 text-[#c0a651] mt-0.5 flex-shrink-0" />
                        <span>Comprovativos de rendimentos</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="h-4 w-4 text-[#c0a651] mt-0.5 flex-shrink-0" />
                        <span>Mapa de responsabilidades do Banco de Portugal</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="mb-12">
                <h2 className="text-3xl font-bold text-[rgb(6,38,68)] mb-6">
                  Considerações Importantes
                </h2>
                
                <div className="space-y-6">
                  <div className="bg-white border-2 border-[#c0a651] rounded-lg p-6 shadow-lg">
                    <h3 className="text-xl font-bold text-[rgb(6,38,68)] mb-3">Prazo Total</h3>
                    <p className="text-gray-700">
                      A consolidação pode estender o prazo total de pagamento, 
                      resultando em mais juros pagos ao longo do tempo.
                    </p>
                  </div>

                  <div className="bg-white border-2 border-[#c0a651] rounded-lg p-6 shadow-lg">
                    <h3 className="text-xl font-bold text-[rgb(6,38,68)] mb-3">Disciplina Financeira</h3>
                    <p className="text-gray-700">
                      É essencial manter a disciplina e não contrair novos créditos 
                      após a consolidação para evitar voltar à situação anterior.
                    </p>
                  </div>

                  <div className="bg-white border-2 border-[#c0a651] rounded-lg p-6 shadow-lg">
                    <h3 className="text-xl font-bold text-[rgb(6,38,68)] mb-3">Comparação de Custos</h3>
                    <p className="text-gray-700">
                      Compare sempre o custo total da consolidação com o custo 
                      total dos créditos individuais antes de decidir.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mb-12">
                <h2 className="text-3xl font-bold text-[rgb(6,38,68)] mb-6">
                  Conclusão
                </h2>
                <p className="text-lg leading-relaxed text-gray-700 mb-6">
                  A consolidação de créditos pode ser uma excelente solução para 
                  simplificar a gestão das suas finanças e reduzir a pressão 
                  financeira mensal.
                </p>
                <p className="text-lg leading-relaxed text-gray-700">
                  No entanto, é essencial fazer uma análise cuidadosa e contar com 
                  o aconselhamento de especialistas para garantir que esta solução 
                  é realmente a mais adequada para a sua situação.
                </p>
              </div>
            </article>

            {/* CTA Section */}
            <div className="mt-16 text-center">
              <Card className="bg-[rgb(6,38,68)] border-2 border-[#c0a651] shadow-xl">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-4">
                    Precisa de Ajuda com a Consolidação dos Seus Créditos?
                  </h3>
                  <p className="text-white/90 mb-6">
                    Os nossos especialistas podem analisar a sua situação e 
                    propor a solução de consolidação mais adequada.
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