import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Clock, User, ArrowRight, TrendingUp, Home, Car, Building, CreditCard } from "lucide-react";
import Link from "next/link";

export default function BlogPage() {
  const blogPosts = [
    {
      id: 1,
      title: "Como escolher o melhor crédito habitação em 2024",
      excerpt: "Descubra os fatores mais importantes a considerar na escolha do seu crédito habitação e como obter as melhores condições do mercado.",
      category: "Crédito Habitação",
      author: "Equipa Global Crédito",
      date: "15 Janeiro 2024",
      readTime: "5 min",
      icon: Home,
      featured: true
    },
    {
      id: 2,
      title: "Guia completo para crédito automóvel",
      excerpt: "Tudo o que precisa saber sobre financiamento de veículos: taxas, prazos, documentação necessária e dicas para obter a melhor proposta.",
      category: "Crédito Automóvel",
      author: "Equipa Global Crédito",
      date: "10 Janeiro 2024",
      readTime: "7 min",
      icon: Car
    },
    {
      id: 3,
      title: "Crédito empresarial: investir no crescimento da sua empresa",
      excerpt: "Explore as diferentes opções de financiamento empresarial disponíveis e como podem impulsionar o desenvolvimento do seu negócio.",
      category: "Crédito Empresarial",
      author: "Equipa Global Crédito",
      date: "5 Janeiro 2024",
      readTime: "6 min",
      icon: Building
    },
    {
      id: 4,
      title: "Consolidação de créditos: simplifique as suas finanças",
      excerpt: "Aprenda como unificar todos os seus créditos numa só prestação e reduzir significativamente os seus gastos mensais.",
      category: "Consolidação",
      author: "Equipa Global Crédito",
      date: "1 Janeiro 2024",
      readTime: "4 min",
      icon: CreditCard
    },
    {
      id: 5,
      title: "Taxas de juro: o que esperar em 2024",
      excerpt: "Análise das tendências das taxas de juro e como podem afetar os seus planos de crédito no próximo ano.",
      category: "Mercado",
      author: "Equipa Global Crédito",
      date: "28 Dezembro 2023",
      readTime: "8 min",
      icon: TrendingUp
    },
    {
      id: 6,
      title: "Dicas para aprovação rápida de crédito pessoal",
      excerpt: "Conheça os requisitos essenciais e estratégias para aumentar as suas hipóteses de aprovação de crédito pessoal.",
      category: "Crédito Pessoal",
      author: "Equipa Global Crédito",
      date: "20 Dezembro 2023",
      readTime: "5 min",
      icon: CreditCard
    }
  ];

  const categories = [
    "Todos",
    "Crédito Habitação",
    "Crédito Automóvel", 
    "Crédito Empresarial",
    "Crédito Pessoal",
    "Consolidação",
    "Mercado"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-[rgb(6,38,68)] text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight tracking-tight">
            Blog{" "}
            <span className="text-transparent bg-gradient-to-r from-[#c0a651] to-[#f4d03f] bg-clip-text">
              Global Crédito
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Insights, dicas e novidades sobre crédito e finanças pessoais
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Categories Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
                  index === 0 
                    ? 'bg-[rgb(6,38,68)] text-white' 
                    : 'bg-white text-[rgb(6,38,68)] border-2 border-[#c0a651] hover:bg-[#c0a651] hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Featured Post */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-[rgb(6,38,68)] mb-6 text-center">
              Artigo em Destaque
            </h2>
            {blogPosts.filter(post => post.featured).map(post => (
              <Card key={post.id} className="border-2 border-[#c0a651] shadow-xl overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-1/3 bg-gradient-to-br from-[rgb(6,38,68)] to-[#c0a651] p-8 flex items-center justify-center">
                    <post.icon className="h-24 w-24 text-white" />
                  </div>
                  <div className="md:w-2/3 p-8">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="px-3 py-1 bg-[#c0a651] text-[rgb(6,38,68)] text-sm font-semibold rounded-full">
                        {post.category}
                      </span>
                      <div className="flex items-center gap-2 text-gray-600 text-sm">
                        <Calendar className="h-4 w-4" />
                        {post.date}
                      </div>
                      <div className="flex items-center gap-2 text-gray-600 text-sm">
                        <Clock className="h-4 w-4" />
                        {post.readTime}
                      </div>
                    </div>
                    <CardTitle className="text-2xl font-bold text-[rgb(6,38,68)] mb-4">
                      {post.title}
                    </CardTitle>
                    <CardDescription className="text-lg text-gray-700 mb-6">
                      {post.excerpt}
                    </CardDescription>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-gray-600">
                        <User className="h-4 w-4" />
                        <span className="text-sm">{post.author}</span>
                      </div>
                                           <Link href="/blog/artigos/credito-habitacao-2024" className="flex items-center gap-2 px-4 py-2 bg-[rgb(6,38,68)] text-white rounded-lg hover:bg-[#c0a651] transition-colors duration-300">
                       Ler Artigo
                       <ArrowRight className="h-4 w-4" />
                     </Link>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Blog Posts Grid */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-[rgb(6,38,68)] mb-8 text-center">
              Artigos Recentes
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.filter(post => !post.featured).map(post => (
                <Card key={post.id} className="border-2 border-[#c0a651] shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardHeader className="pb-4">
                    <div className="w-12 h-12 bg-[#c0a651] rounded-lg flex items-center justify-center mb-4">
                      <post.icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="px-2 py-1 bg-[#c0a651]/20 text-[#c0a651] text-xs font-semibold rounded">
                        {post.category}
                      </span>
                    </div>
                    <CardTitle className="text-lg font-bold text-[rgb(6,38,68)] line-clamp-2">
                      {post.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <CardDescription className="text-gray-700 mb-4 line-clamp-3">
                      {post.excerpt}
                    </CardDescription>
                    <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-3 w-3" />
                        {post.date}
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-3 w-3" />
                        {post.readTime}
                      </div>
                    </div>
                                         <Link href={`/blog/artigos/${post.id === 2 ? 'guia-credito-automovel' : post.id === 3 ? 'credito-empresarial-crescimento' : post.id === 4 ? 'consolidacao-creditos-simplificar-financas' : post.id === 5 ? 'taxas-juro-2024' : 'dicas-aprovacao-credito-pessoal'}`} className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-[rgb(6,38,68)] text-white rounded-lg hover:bg-[#c0a651] transition-colors duration-300">
                       Ler Mais
                       <ArrowRight className="h-4 w-4" />
                     </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="text-center">
            <Card className="bg-[rgb(6,38,68)] border-2 border-[#c0a651] shadow-xl max-w-2xl mx-auto">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Fique a par das novidades
                </h3>
                <p className="text-white/90 mb-6">
                  Subscreva a nossa newsletter e receba as últimas notícias sobre 
                  crédito, dicas financeiras e ofertas exclusivas.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                  <input
                    type="email"
                    placeholder="seu@email.com"
                    className="flex-1 px-4 py-3 rounded-lg border-0 focus:outline-none focus:ring-2 focus:ring-[#c0a651]"
                  />
                  <button className="px-6 py-3 bg-[#c0a651] text-[rgb(6,38,68)] font-semibold rounded-lg hover:bg-[#d4b86a] transition-colors duration-300">
                    Subscrever
                  </button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
} 