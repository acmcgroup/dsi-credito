"use client";

import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Users, HandHeart, Crown, FileText, Shield, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const advantages = [
  {
    id: 1,
    icon: Users,
    title: "Negociação com vários bancos",
    description: "Comparamos propostas de vários bancos para garantir a melhor taxa, melhores condições e menor custo total ao longo do tempo.",
    highlight: "Melhor taxa garantida"
  },
  {
    id: 2,
    icon: HandHeart,
    title: "Acompanhamento personalizado",
    description: "Acompanhamos o seu processo do início à escritura, sem custos adicionais.",
    highlight: "Do início à escritura"
  },
  {
    id: 3,
    icon: Crown,
    title: "Gestor de crédito dedicado",
    description: "Ter um gestor de crédito dedicado em seu nome, não do banco. O seu interesse é a nossa prioridade.",
    highlight: "Dedicado a si"
  },
  {
    id: 4,
    icon: CheckCircle,
    title: "Acesso a soluções exclusivas",
    description: "Clientes acompanhados por nós têm acesso a spreads preferenciais através de campanhas negociadas com os bancos.",
    highlight: "Spreads preferenciais"
  },
  {
    id: 5,
    icon: FileText,
    title: "Ajuda na burocracia",
    description: "Tratamos de todos os documentos, simulações e contactos com os bancos por si.",
    highlight: "Zero burocracia para si"
  },
  {
    id: 6,
    icon: Shield,
    title: "Independência e imparcialidade",
    description: "Não somos um banco. O nosso compromisso é consigo, e com encontrar o melhor negócio para si.",
    highlight: "100% independente"
  }
];

export default function AdvantagesCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % advantages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % advantages.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + advantages.length) % advantages.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  const currentAdvantage = advantages[currentSlide];
  const IconComponent = currentAdvantage.icon;

  return (
    <section className="py-16 bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(59,130,246,0.03)_25%,rgba(59,130,246,0.03)_50%,transparent_50%,transparent_75%,rgba(59,130,246,0.03)_75%)] bg-[length:60px_60px]"></div>
      
      <div className="container mx-auto px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-black text-gray-900 mb-4 tracking-tight">
            O que um <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">intermediário de crédito</span> deve oferecer
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-medium">
            Descubra as vantagens exclusivas de trabalhar connosco
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Main Carousel Card */}
          <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/50 overflow-hidden min-h-[320px]">
            {/* Content */}
            <div className="p-8 text-center">
              {/* Icon */}
              <div className="relative mb-6">
                <div className="w-18 h-18 bg-gradient-to-br from-blue-500 via-blue-600 to-indigo-700 rounded-full flex items-center justify-center mx-auto shadow-lg">
                  <IconComponent className="w-9 h-9 text-white" />
                </div>
                <div className="absolute inset-0 bg-blue-400/20 rounded-full blur-lg scale-125 -z-10"></div>
              </div>

              {/* Content */}
              <div className="space-y-4">
                <div className="inline-block bg-gradient-to-r from-blue-100 via-purple-50 to-indigo-100 rounded-full px-4 py-1.5 border border-blue-200/50">
                  <span className="text-blue-700 font-semibold text-xs tracking-wide uppercase">
                    {currentAdvantage.highlight}
                  </span>
                </div>

                <h3 className="text-2xl lg:text-3xl font-black text-gray-900 tracking-tight">
                  {currentAdvantage.title}
                </h3>

                <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed font-medium">
                  {currentAdvantage.description}
                </p>
              </div>
            </div>

            {/* Navigation Arrows */}
            <Button
              variant="outline"
              size="icon"
              onClick={prevSlide}
              className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm border-white/50 shadow-xl hover:bg-white hover:shadow-2xl hover:scale-110 transition-all duration-300"
            >
              <ChevronLeft className="w-6 h-6 text-blue-600" />
            </Button>

            <Button
              variant="outline"
              size="icon"
              onClick={nextSlide}
              className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm border-white/50 shadow-xl hover:bg-white hover:shadow-2xl hover:scale-110 transition-all duration-300"
            >
              <ChevronRight className="w-6 h-6 text-blue-600" />
            </Button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-3 mt-8">
            {advantages.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`relative transition-all duration-300 ${
                  index === currentSlide
                    ? 'w-12 h-3'
                    : 'w-3 h-3 hover:scale-125'
                }`}
              >
                <div
                  className={`absolute inset-0 rounded-full transition-all duration-300 ${
                    index === currentSlide
                      ? 'bg-gradient-to-r from-blue-500 to-indigo-600 shadow-lg'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              </button>
            ))}
          </div>

          {/* Auto-play indicator */}
          {isAutoPlaying && (
            <div className="flex justify-center mt-4">
              <div className="flex items-center space-x-2 text-sm text-gray-500">
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                <span className="font-medium">Rotação automática ativa</span>
              </div>
            </div>
          )}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 hover:from-blue-700 hover:via-blue-800 hover:to-indigo-800 text-white font-semibold px-6 py-3 rounded-xl shadow-xl hover:shadow-blue-500/25 hover:-translate-y-1 transition-all duration-300"
          >
            Começar Agora - É Grátis
          </Button>
          <p className="text-gray-500 mt-2 font-medium text-sm">
            Sem compromisso • Resposta em 24h • Confidencial
          </p>
        </div>
      </div>
    </section>
  );
}