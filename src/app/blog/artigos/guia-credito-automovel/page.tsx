import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Clock, User, ArrowLeft, Car, TrendingUp, Calculator, Shield, CheckCircle } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Guia Completo para Crédito Automóvel | Global Crédito",
  description: "Tudo o que precisa saber sobre financiamento de veículos: taxas, prazos, documentação necessária e dicas para obter a melhor proposta.",
  keywords: "crédito automóvel, financiamento veículos, crédito carro, leasing automóvel, taxas juro, Portugal",
  openGraph: {
    title: "Guia Completo para Crédito Automóvel",
    description: "Guia completo sobre financiamento de veículos com as melhores condições do mercado.",
    type: "article",
    publishedTime: "2024-01-10T00:00:00.000Z",
    authors: ["Global Crédito"],
    tags: ["crédito automóvel", "financiamento", "veículos", "leasing"]
  }
};

export default function GuiaCreditoAutomovelPage() {
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
                Crédito Automóvel
              </span>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                10 Janeiro 2024
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                7 min de leitura
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight tracking-tight">
              Guia{" "}
              <span className="text-transparent bg-gradient-to-r from-[#c0a651] to-[#f4d03f] bg-clip-text">
                Completo para Crédito Automóvel
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
              Tudo o que precisa saber sobre financiamento de veículos: taxas, prazos, 
              documentação necessária e dicas para obter a melhor proposta.
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
                  O crédito automóvel é uma das formas mais populares de financiar a compra 
                  de um veículo, permitindo-lhe adquirir o carro dos seus sonhos sem comprometer 
                  as suas poupanças.
                </p>
                <p className="text-lg leading-relaxed text-gray-700">
                  Neste guia, vamos explorar todas as opções disponíveis, desde o crédito 
                  pessoal tradicional até ao leasing operacional, ajudando-o a tomar a 
                  decisão mais adequada para a sua situação.
                </p>
              </div>

              <div className="mb-12">
                <h2 className="text-3xl font-bold text-[rgb(6,38,68)] mb-6">
                  Tipos de Financiamento Automóvel
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <Card className="border-2 border-[#c0a651] shadow-lg">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 bg-[#c0a651] rounded-lg flex items-center justify-center mb-4">
                        <Car className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-[rgb(6,38,68)] mb-3">Crédito Pessoal</h3>
                      <p className="text-gray-700">
                        Empréstimo sem garantia específica, com taxas mais altas mas 
                        maior flexibilidade de utilização.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="border-2 border-[#c0a651] shadow-lg">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 bg-[#c0a651] rounded-lg flex items-center justify-center mb-4">
                        <Shield className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-[rgb(6,38,68)] mb-3">Crédito Automóvel</h3>
                      <p className="text-gray-700">
                        Financiamento específico para veículos, com taxas mais baixas 
                        e o próprio carro como garantia.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="border-2 border-[#c0a651] shadow-lg">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 bg-[#c0a651] rounded-lg flex items-center justify-center mb-4">
                        <TrendingUp className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-[rgb(6,38,68)] mb-3">Leasing Operacional</h3>
                      <p className="text-gray-700">
                        Aluguer de longo prazo com opção de compra no final, 
                        ideal para empresas e profissionais liberais.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="border-2 border-[#c0a651] shadow-lg">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 bg-[#c0a651] rounded-lg flex items-center justify-center mb-4">
                        <Calculator className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-[rgb(6,38,68)] mb-3">Crédito com Garantia</h3>
                      <p className="text-gray-700">
                        Financiamento com garantias adicionais (imóveis, depósitos), 
                        oferecendo as melhores taxas do mercado.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <div className="mb-12">
                <h2 className="text-3xl font-bold text-[rgb(6,38,68)] mb-6">
                  Fatores que Influenciam a Aprovação
                </h2>
                
                <div className="space-y-6">
                  <div className="border-l-4 border-[#c0a651] pl-6">
                    <h3 className="text-2xl font-bold text-[rgb(6,38,68)] mb-3">Histórico de Crédito</h3>
                    <p className="text-gray-700 mb-3">
                      O seu histórico de pagamentos é crucial. Pagamentos em atraso ou 
                      incumprimentos podem dificultar a aprovação.
                    </p>
                    <p className="text-gray-700">
                      <strong>Dica:</strong> Verifique o seu mapa de responsabilidades 
                      no Banco de Portugal antes de solicitar o crédito.
                    </p>
                  </div>

                  <div className="border-l-4 border-[#c0a651] pl-6">
                    <h3 className="text-2xl font-bold text-[rgb(6,38,68)] mb-3">Rendimentos e Estabilidade</h3>
                    <p className="text-gray-700 mb-3">
                      Os bancos analisam a sua capacidade de pagamento, considerando 
                      rendimentos, estabilidade profissional e outras fontes de renda.
                    </p>
                    <p className="text-gray-700">
                      <strong>Dica:</strong> Mantenha pelo menos 3 meses de recibos de vencimento 
                      e comprovativos de rendimentos adicionais.
                    </p>
                  </div>

                  <div className="border-l-4 border-[#c0a651] pl-6">
                    <h3 className="text-2xl font-bold text-[rgb(6,38,68)] mb-3">Entrada e Prazo</h3>
                    <p className="text-gray-700 mb-3">
                      Uma entrada maior reduz o risco para o banco e pode resultar em 
                      melhores condições. O prazo também influencia a aprovação.
                    </p>
                    <p className="text-gray-700">
                      <strong>Dica:</strong> Considere uma entrada de pelo menos 20% 
                      para obter as melhores taxas.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mb-12">
                <h2 className="text-3xl font-bold text-[rgb(6,38,68)] mb-6">
                  Documentação Necessária
                </h2>
                
                <div className="bg-[#c0a651]/10 border-2 border-[#c0a651] rounded-lg p-6">
                  <h3 className="text-xl font-bold text-[rgb(6,38,68)] mb-4">Documentos Pessoais</h3>
                  <ul className="space-y-2 text-gray-700 mb-6">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-[#c0a651] mt-0.5 flex-shrink-0" />
                      <span>Cartão de Cidadão ou Bilhete de Identidade</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-[#c0a651] mt-0.5 flex-shrink-0" />
                      <span>Número de Identificação Fiscal (NIF)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-[#c0a651] mt-0.5 flex-shrink-0" />
                      <span>Comprovativo de morada (fatura de serviços)</span>
                    </li>
                  </ul>

                  <h3 className="text-xl font-bold text-[rgb(6,38,68)] mb-4">Documentos Profissionais</h3>
                  <ul className="space-y-2 text-gray-700 mb-6">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-[#c0a651] mt-0.5 flex-shrink-0" />
                      <span>Últimos 3 recibos de vencimento</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-[#c0a651] mt-0.5 flex-shrink-0" />
                      <span>Contrato de trabalho ou declaração da entidade patronal</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-[#c0a651] mt-0.5 flex-shrink-0" />
                      <span>Declaração de IRS dos últimos 2 anos</span>
                    </li>
                  </ul>

                  <h3 className="text-xl font-bold text-[rgb(6,38,68)] mb-4">Documentos do Veículo</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-[#c0a651] mt-0.5 flex-shrink-0" />
                      <span>Fatura proforma ou contrato de compra</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-[#c0a651] mt-0.5 flex-shrink-0" />
                      <span>Documento único automóvel (DUA)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-[#c0a651] mt-0.5 flex-shrink-0" />
                      <span>Inspeção técnica (se aplicável)</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mb-12">
                <h2 className="text-3xl font-bold text-[rgb(6,38,68)] mb-6">
                  Como Obter as Melhores Condições
                </h2>
                
                <div className="space-y-6">
                  <div className="bg-white border-2 border-[#c0a651] rounded-lg p-6 shadow-lg">
                    <h3 className="text-xl font-bold text-[rgb(6,38,68)] mb-3">1. Compare Propostas</h3>
                    <p className="text-gray-700">
                      Solicite propostas de pelo menos 3 bancos diferentes. Cada instituição 
                      tem critérios próprios e pode oferecer condições mais vantajosas.
                    </p>
                  </div>

                  <div className="bg-white border-2 border-[#c0a651] rounded-lg p-6 shadow-lg">
                    <h3 className="text-xl font-bold text-[rgb(6,38,68)] mb-3">2. Negocie as Taxas</h3>
                    <p className="text-gray-700">
                      Não aceite a primeira proposta. Use as outras propostas como 
                      alavanca para negociar melhores condições.
                    </p>
                  </div>

                  <div className="bg-white border-2 border-[#c0a651] rounded-lg p-6 shadow-lg">
                    <h3 className="text-xl font-bold text-[rgb(6,38,68)] mb-3">3. Considere Produtos Adicionais</h3>
                    <p className="text-gray-700">
                      Muitos bancos oferecem melhores condições se contratar outros 
                      produtos (conta, cartão de crédito, seguros).
                    </p>
                  </div>

                  <div className="bg-white border-2 border-[#c0a651] rounded-lg p-6 shadow-lg">
                    <h3 className="text-xl font-bold text-[rgb(6,38,68)] mb-3">4. Avalie o Prazo Total</h3>
                    <p className="text-gray-700">
                      Um prazo mais longo significa prestações menores, mas mais juros pagos. 
                      Encontre o equilíbrio ideal para a sua situação.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mb-12">
                <h2 className="text-3xl font-bold text-[rgb(6,38,68)] mb-6">
                  Conclusão
                </h2>
                <p className="text-lg leading-relaxed text-gray-700 mb-6">
                  O crédito automóvel pode ser uma excelente opção para adquirir o veículo 
                  que precisa, mas é essencial fazer uma análise cuidadosa das condições 
                  e comparar várias propostas.
                </p>
                <p className="text-lg leading-relaxed text-gray-700">
                  A equipa da Global Crédito está disponível para o ajudar a encontrar 
                  as melhores condições e a negociar com os bancos em seu nome, 
                  poupando-lhe tempo e dinheiro.
                </p>
              </div>
            </article>

            {/* CTA Section */}
            <div className="mt-16 text-center">
              <Card className="bg-[rgb(6,38,68)] border-2 border-[#c0a651] shadow-xl">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-4">
                    Precisa de Ajuda com o Seu Crédito Automóvel?
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