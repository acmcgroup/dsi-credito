import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Clock, User, ArrowLeft, CreditCard, TrendingUp, Calculator, Shield, CheckCircle, Target, FileText, AlertTriangle } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Dicas para Aprovação Rápida de Crédito Pessoal | Global Crédito",
  description: "Conheça os requisitos essenciais e estratégias para aumentar as suas hipóteses de aprovação de crédito pessoal.",
  keywords: "crédito pessoal, aprovação rápida, requisitos crédito, dicas financiamento, Portugal",
  openGraph: {
    title: "Dicas para Aprovação Rápida de Crédito Pessoal",
    description: "Guia completo com estratégias para aumentar as hipóteses de aprovação de crédito pessoal.",
    type: "article",
    publishedTime: "2023-12-20T00:00:00.000Z",
    authors: ["Global Crédito"],
    tags: ["crédito pessoal", "aprovação", "financiamento", "dicas"]
  }
};

export default function DicasAprovacaoCreditoPessoalPage() {
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
                Crédito Pessoal
              </span>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                20 Dezembro 2023
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                5 min de leitura
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight tracking-tight">
              Dicas para{" "}
              <span className="text-transparent bg-gradient-to-r from-[#c0a651] to-[#f4d03f] bg-clip-text">
                Aprovação Rápida
              </span>{" "}
              de Crédito Pessoal
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
              Conheça os requisitos essenciais e estratégias para aumentar as suas 
              hipóteses de aprovação de crédito pessoal.
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
                  O crédito pessoal é uma das formas mais flexíveis de financiamento, 
                  permitindo-lhe obter dinheiro para diversos fins sem necessidade 
                  de garantias específicas.
                </p>
                <p className="text-lg leading-relaxed text-gray-700">
                  No entanto, a aprovação não é automática e depende de vários fatores. 
                  Neste guia, partilhamos estratégias comprovadas para aumentar 
                  significativamente as suas hipóteses de aprovação.
                </p>
              </div>

              <div className="mb-12">
                <h2 className="text-3xl font-bold text-[rgb(6,38,68)] mb-6">
                  Fatores que Influenciam a Aprovação
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <Card className="border-2 border-[#c0a651] shadow-lg">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 bg-[#c0a651] rounded-lg flex items-center justify-center mb-4">
                        <Shield className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-[rgb(6,38,68)] mb-3">Histórico de Crédito</h3>
                      <p className="text-gray-700">
                        O seu histórico de pagamentos é o fator mais importante. 
                        Pagamentos em atraso podem comprometer a aprovação.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="border-2 border-[#c0a651] shadow-lg">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 bg-[#c0a651] rounded-lg flex items-center justify-center mb-4">
                        <TrendingUp className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-[rgb(6,38,68)] mb-3">Rendimentos</h3>
                      <p className="text-gray-700">
                        A estabilidade e nível dos seus rendimentos determinam 
                        a sua capacidade de pagamento.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="border-2 border-[#c0a651] shadow-lg">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 bg-[#c0a651] rounded-lg flex items-center justify-center mb-4">
                        <Calculator className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-[rgb(6,38,68)] mb-3">Taxa de Esforço</h3>
                      <p className="text-gray-700">
                        A percentagem dos seus rendimentos comprometida com 
                        outras prestações mensais.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="border-2 border-[#c0a651] shadow-lg">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 bg-[#c0a651] rounded-lg flex items-center justify-center mb-4">
                        <Target className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-[rgb(6,38,68)] mb-3">Finalidade</h3>
                      <p className="text-gray-700">
                        O motivo do crédito pode influenciar a decisão. 
                        Algumas finalidades são mais bem vistas pelos bancos.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <div className="mb-12">
                <h2 className="text-3xl font-bold text-[rgb(6,38,68)] mb-6">
                  Estratégias para Aumentar as Hipóteses de Aprovação
                </h2>
                
                <div className="space-y-6">
                  <div className="border-l-4 border-[#c0a651] pl-6">
                    <h3 className="text-2xl font-bold text-[rgb(6,38,68)] mb-3">1. Prepare a Documentação</h3>
                    <p className="text-gray-700 mb-3">
                      Organize todos os documentos necessários antes de submeter 
                      a candidatura. Documentação incompleta pode atrasar ou 
                      comprometer a aprovação.
                    </p>
                    <p className="text-gray-700">
                      <strong>Documentos essenciais:</strong> Cartão de cidadão, NIF, 
                      comprovativo de morada, recibos de vencimento, extratos bancários.
                    </p>
                  </div>

                  <div className="border-l-4 border-[#c0a651] pl-6">
                    <h3 className="text-2xl font-bold text-[rgb(6,38,68)] mb-3">2. Melhore o Seu Histórico de Crédito</h3>
                    <p className="text-gray-700 mb-3">
                      Se tem pagamentos em atraso, regularize-os antes de solicitar 
                      novo crédito. Um histórico limpo é fundamental.
                    </p>
                    <p className="text-gray-700">
                      <strong>Dica:</strong> Verifique o seu mapa de responsabilidades 
                      no Banco de Portugal e corrija eventuais problemas.
                    </p>
                  </div>

                  <div className="border-l-4 border-[#c0a651] pl-6">
                    <h3 className="text-2xl font-bold text-[rgb(6,38,68)] mb-3">3. Reduza a Taxa de Esforço</h3>
                    <p className="text-gray-700 mb-3">
                      Quanto menor for a percentagem dos seus rendimentos comprometida 
                      com outras prestações, maiores serão as hipóteses de aprovação.
                    </p>
                    <p className="text-gray-700">
                      <strong>Objetivo:</strong> Manter a taxa de esforço abaixo de 35-40%.
                    </p>
                  </div>

                  <div className="border-l-4 border-[#c0a651] pl-6">
                    <h3 className="text-2xl font-bold text-[rgb(6,38,68)] mb-3">4. Escolha o Valor e Prazo Adequados</h3>
                    <p className="text-gray-700 mb-3">
                      Solicite um valor que seja realista face aos seus rendimentos 
                      e escolha um prazo que resulte em prestações confortáveis.
                    </p>
                    <p className="text-gray-700">
                      <strong>Estratégia:</strong> Comece com valores menores se for 
                      a primeira vez que solicita crédito.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mb-12">
                <h2 className="text-3xl font-bold text-[rgb(6,38,68)] mb-6">
                  Preparação da Candidatura
                </h2>
                
                <div className="bg-[#c0a651]/10 border-2 border-[#c0a651] rounded-lg p-6">
                  <h3 className="text-xl font-bold text-[rgb(6,38,68)] mb-4">Checklist de Preparação</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-[#c0a651] mt-0.5 flex-shrink-0" />
                      <span><strong>Histórico limpo:</strong> Verifique e corrija problemas no mapa de responsabilidades</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-[#c0a651] mt-0.5 flex-shrink-0" />
                      <span><strong>Documentação completa:</strong> Organize todos os documentos necessários</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-[#c0a651] mt-0.5 flex-shrink-0" />
                      <span><strong>Rendimentos estáveis:</strong> Mantenha pelo menos 3 meses de recibos de vencimento</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-[#c0a651] mt-0.5 flex-shrink-0" />
                      <span><strong>Conta bancária organizada:</strong> Evite saldos negativos e movimentos suspeitos</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-[#c0a651] mt-0.5 flex-shrink-0" />
                      <span><strong>Finalidade clara:</strong> Defina bem o motivo do crédito</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mb-12">
                <h2 className="text-3xl font-bold text-[rgb(6,38,68)] mb-6">
                  Erros Comuns a Evitar
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-red-50 border-2 border-red-200 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-red-800 mb-4 flex items-center gap-2">
                      <AlertTriangle className="h-5 w-5" />
                      O que Evitar
                    </h3>
                    <ul className="space-y-2 text-red-700">
                      <li className="flex items-start gap-3">
                        <CheckCircle className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
                        <span>Solicitar crédito com pagamentos em atraso</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
                        <span>Ocultar informações sobre outros créditos</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
                        <span>Submeter documentação incompleta</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
                        <span>Solicitar valores irrealistas</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-green-50 border-2 border-green-200 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-green-800 mb-4 flex items-center gap-2">
                      <Target className="h-5 w-5" />
                      O que Fazer
                    </h3>
                    <ul className="space-y-2 text-green-700">
                      <li className="flex items-start gap-3">
                        <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Preparar toda a documentação</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Ser transparente sobre a situação financeira</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Escolher valores e prazos realistas</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Comparar propostas de vários bancos</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="mb-12">
                <h2 className="text-3xl font-bold text-[rgb(6,38,68)] mb-6">
                  Dicas para Acelerar o Processo
                </h2>
                
                <div className="space-y-6">
                  <div className="bg-white border-2 border-[#c0a651] rounded-lg p-6 shadow-lg">
                    <h3 className="text-xl font-bold text-[rgb(6,38,68)] mb-3">1. Candidatura Online</h3>
                    <p className="text-gray-700">
                      As candidaturas online são geralmente processadas mais rapidamente 
                      e permitem acompanhar o estado da candidatura em tempo real.
                    </p>
                  </div>

                  <div className="bg-white border-2 border-[#c0a651] rounded-lg p-6 shadow-lg">
                    <h3 className="text-xl font-bold text-[rgb(6,38,68)] mb-3">2. Documentação Digital</h3>
                    <p className="text-gray-700">
                      Prepare os documentos em formato digital (PDF) para facilitar 
                      o upload e acelerar a análise.
                    </p>
                  </div>

                  <div className="bg-white border-2 border-[#c0a651] rounded-lg p-6 shadow-lg">
                    <h3 className="text-xl font-bold text-[rgb(6,38,68)] mb-3">3. Resposta Rápida</h3>
                    <p className="text-gray-700">
                      Responda rapidamente a qualquer pedido de informação adicional 
                      do banco para evitar atrasos no processo.
                    </p>
                  </div>

                  <div className="bg-white border-2 border-[#c0a651] rounded-lg p-6 shadow-lg">
                    <h3 className="text-xl font-bold text-[rgb(6,38,68)] mb-3">4. Escolha o Banco Certo</h3>
                    <p className="text-gray-700">
                      Alguns bancos são mais rápidos no processamento de créditos pessoais. 
                      Pesquise e escolha o que melhor se adequa às suas necessidades.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mb-12">
                <h2 className="text-3xl font-bold text-[rgb(6,38,68)] mb-6">
                  Conclusão
                </h2>
                <p className="text-lg leading-relaxed text-gray-700 mb-6">
                  A aprovação rápida de crédito pessoal depende muito da preparação 
                  e da sua situação financeira atual. Seguindo estas estratégias, 
                  pode aumentar significativamente as suas hipóteses de sucesso.
                </p>
                <p className="text-lg leading-relaxed text-gray-700">
                  Lembre-se de que cada caso é único e que o aconselhamento de 
                  especialistas pode fazer toda a diferença na escolha da melhor 
                  solução para as suas necessidades.
                </p>
              </div>
            </article>

            {/* CTA Section */}
            <div className="mt-16 text-center">
              <Card className="bg-[rgb(6,38,68)] border-2 border-[#c0a651] shadow-xl">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-4">
                    Precisa de Ajuda com o Seu Crédito Pessoal?
                  </h3>
                  <p className="text-white/90 mb-6">
                    Os nossos especialistas podem ajudá-lo a preparar a candidatura 
                    e a escolher a melhor solução para as suas necessidades.
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