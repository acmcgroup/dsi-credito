import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, FileText, UserCheck, Building, Phone, Mail, ExternalLink } from "lucide-react";

export default function InformacaoLegalPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-[rgb(6,38,68)] text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight tracking-tight">
            Informação{" "}
            <span className="text-transparent bg-gradient-to-r from-[#c0a651] to-[#f4d03f] bg-clip-text">
              Legal
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Transparência e conformidade regulamentar são os pilares da nossa atividade
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Company Information */}
          <div className="max-w-4xl mx-auto mb-16">
            <Card className="border-2 border-[#c0a651] shadow-xl">
              <CardHeader className="bg-[rgb(6,38,68)] text-white">
                <div className="flex items-center gap-3">
                  <Building className="h-8 w-8 text-[#c0a651]" />
                  <CardTitle className="text-2xl">Informação da Empresa</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold text-[rgb(6,38,68)] mb-4">Dados Sociais</h3>
                    <div className="space-y-3 text-gray-700">
                      <p><strong>Denominação:</strong> Pedro Duarte Baptista, Unipessoal Lda</p>
                      <p><strong>NIF:</strong> [NIF da empresa]</p>
                      <p><strong>Capital Social:</strong> [Capital social]</p>
                      <p><strong>Data de Constituição:</strong> [Data de constituição]</p>
                      <p><strong>Registo Comercial:</strong> [Registo comercial]</p>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[rgb(6,38,68)] mb-4">Endereço</h3>
                    <div className="space-y-3 text-gray-700">
                      <p><strong>Morada:</strong> Rua Doutor Emílio Peres, 139</p>
                      <p><strong>Código Postal:</strong> 4050-007</p>
                      <p><strong>Localidade:</strong> Porto</p>
                      <p><strong>País:</strong> Portugal</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Regulatory Information */}
          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[rgb(6,38,68)] mb-8 text-center">
              Informação Regulamentar
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="border-2 border-[#c0a651] shadow-lg">
                <CardHeader>
                  <div className="w-12 h-12 bg-[#c0a651] rounded-lg flex items-center justify-center mb-4">
                    <Shield className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl text-[rgb(6,38,68)]">Autorização BP</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">
                    A Global Crédito está registada junto do Banco de Portugal como 
                    Intermediário de Crédito Vinculado sob o número:
                  </p>
                  <div className="text-center">
                    <span className="text-3xl font-bold text-[#c0a651]">0003923</span>
                  </div>
                  <p className="text-sm text-gray-600 mt-2 text-center">
                    Esta autorização garante que operamos em conformidade com a 
                    regulamentação portuguesa e europeia.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-[#c0a651] shadow-lg">
                <CardHeader>
                  <div className="w-12 h-12 bg-[#c0a651] rounded-lg flex items-center justify-center mb-4">
                    <UserCheck className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl text-[rgb(6,38,68)]">Membro APB</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">
                    Somos membros da Associação Portuguesa de Bancos (APB), 
                    comprometendo-nos com as melhores práticas da indústria.
                  </p>
                  <div className="text-center">
                    <span className="text-lg font-semibold text-[#c0a651]">Membro Ativo</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Legal Documents */}
          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[rgb(6,38,68)] mb-8 text-center">
              Documentos Legais
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="border-2 border-[#c0a651] shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <div className="w-12 h-12 bg-[#c0a651] rounded-lg flex items-center justify-center mb-4">
                    <FileText className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-lg text-[rgb(6,38,68)]">Política de Privacidade</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">
                    Conheça como tratamos e protegemos os seus dados pessoais 
                    de acordo com o RGPD.
                  </p>
                  <button className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-[rgb(6,38,68)] text-white rounded-lg hover:bg-[#c0a651] transition-colors duration-300">
                    <ExternalLink className="h-4 w-4" />
                    Consultar Documento
                  </button>
                </CardContent>
              </Card>

              <Card className="border-2 border-[#c0a651] shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <div className="w-12 h-12 bg-[#c0a651] rounded-lg flex items-center justify-center mb-4">
                    <FileText className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-lg text-[rgb(6,38,68)]">Termos e Condições</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">
                    Condições gerais de utilização dos nossos serviços 
                    e produtos de intermediação de crédito.
                  </p>
                  <button className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-[rgb(6,38,68)] text-white rounded-lg hover:bg-[#c0a651] transition-colors duration-300">
                    <ExternalLink className="h-4 w-4" />
                    Consultar Documento
                  </button>
                </CardContent>
              </Card>

              <Card className="border-2 border-[#c0a651] shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <div className="w-12 h-12 bg-[#c0a651] rounded-lg flex items-center justify-center mb-4">
                    <FileText className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-lg text-[rgb(6,38,68)]">Política de Cookies</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">
                    Informações sobre a utilização de cookies no nosso website 
                    e como pode gerir as suas preferências.
                  </p>
                  <button className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-[rgb(6,38,68)] text-white rounded-lg hover:bg-[#c0a651] transition-colors duration-300">
                    <ExternalLink className="h-4 w-4" />
                    Consultar Documento
                  </button>
                </CardContent>
              </Card>

              <Card className="border-2 border-[#c0a651] shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <div className="w-12 h-12 bg-[#c0a651] rounded-lg flex items-center justify-center mb-4">
                    <FileText className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-lg text-[rgb(6,38,68)]">Livro de Reclamações</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">
                    Acesso ao livro de reclamações eletrónico e informações 
                    sobre o processo de resolução de conflitos.
                  </p>
                  <button className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-[rgb(6,38,68)] text-white rounded-lg hover:bg-[#c0a651] transition-colors duration-300">
                    <ExternalLink className="h-4 w-4" />
                    Aceder
                  </button>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Compliance Information */}
          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[rgb(6,38,68)] mb-8 text-center">
              Conformidade e Regulamentação
            </h2>
            <Card className="border-2 border-[#c0a651] shadow-lg">
              <CardContent className="p-8">
                <div className="prose prose-lg max-w-none text-gray-700">
                  <h3 className="text-xl font-bold text-[rgb(6,38,68)] mb-4">RGPD Compliance</h3>
                  <p className="mb-4">
                    A Global Crédito está em total conformidade com o Regulamento Geral 
                    sobre a Proteção de Dados (RGPD) e a legislação portuguesa de proteção 
                    de dados pessoais.
                  </p>
                  
                  <h3 className="text-xl font-bold text-[rgb(6,38,68)] mb-4">Supervisão Bancária</h3>
                  <p className="mb-4">
                    Como intermediário de crédito vinculado, estamos sujeitos à supervisão 
                    do Banco de Portugal, garantindo a proteção dos interesses dos consumidores 
                    e a estabilidade do sistema financeiro.
                  </p>
                  
                  <h3 className="text-xl font-bold text-[rgb(6,38,68)] mb-4">Código de Conduta</h3>
                  <p className="mb-4">
                    Aderimos ao Código de Conduta da Associação Portuguesa de Bancos, 
                    comprometendo-nos com os mais altos padrões éticos e profissionais.
                  </p>
                  
                  <h3 className="text-xl font-bold text-[rgb(6,38,68)] mb-4">Formação Contínua</h3>
                  <p>
                    A nossa equipa participa regularmente em ações de formação e atualização 
                    para manter-se a par das últimas regulamentações e melhores práticas do setor.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="text-center">
            <Card className="bg-[rgb(6,38,68)] border-2 border-[#c0a651] shadow-xl max-w-2xl mx-auto">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Tem questões legais?
                </h3>
                <p className="text-white/90 mb-6">
                  A nossa equipa está disponível para esclarecer qualquer dúvida 
                  sobre questões regulamentares ou legais.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="tel:+351220998039"
                    className="flex items-center justify-center gap-2 px-6 py-3 bg-[#c0a651] text-[rgb(6,38,68)] font-semibold rounded-lg hover:bg-[#d4b86a] transition-colors duration-300"
                  >
                    <Phone className="h-4 w-4" />
                    +351 220 998 039
                  </a>
                  <a 
                    href="mailto:pedrobaptista@dsicredito.pt"
                    className="flex items-center justify-center gap-2 px-6 py-3 bg-[#c0a651] text-[rgb(6,38,68)] font-semibold rounded-lg hover:bg-[#d4b86a] transition-colors duration-300"
                  >
                    <Mail className="h-4 w-4" />
                    Enviar Email
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
} 