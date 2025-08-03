"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Award, Clock, Lock, ExternalLink } from "lucide-react";
import Image from "next/image";
import heroImage from "@/assets/hero-new.jpg";
import { useEffect, useState } from "react";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animations after component mounts
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <Image 
          src={heroImage} 
          alt="Porto Financial District" 
          fill
          className="object-cover object-[-200px_0px] sm:object-[top]"
          priority
          quality={90}
        />
        {/* Blue transparent overlay */}
        <div className="absolute inset-0 bg-blue-600/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center text-white pt-20 pb-8">
        <div className="max-w-4xl  mx-auto mt-30">
          {/* Main headline */}
          <h1 className={`text-5xl md:text-5xl lg:text-6xl font-black mb-6 sm:mb-8 leading-tight tracking-tight transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Global
            <span className="text-white">
              {" "}Crédito
            </span>
          </h1>

          {/* Subheadline */}
          <p className={`text-sm sm:text-md md:text-lg mb-8 sm:mb-10 text-white/90
            max-w-2xl mx-auto leading-relaxed font-light px-4 sm:px-0 transition-all 
            duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: isVisible ? '200ms' : '0ms' }}>
            Acesso rápido e seguro às soluções de crédito, com condições exclusivas e apoio personalizado.
          </p>

          {/* Features */}
          <div className={`flex flex-row sm:flex-row justify-center gap-4 sm:gap-6 mb-8 sm:mb-12 
            px-4 sm:px-0 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: isVisible ? '400ms' : '0ms' }}>
            <div className="flex items-center justify-center gap-2">
              <Award className="h-4 w-4 text-yellow-400 flex-shrink-0" />
              <span className="text-sm font-light">Exclusividade</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Clock className="h-4 w-4 text-green-400 flex-shrink-0" />
              <span className="text-sm font-light">Rapidez</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Lock className="h-4 w-4 text-blue-300 flex-shrink-0" />
              <span className="text-sm font-light">Confiança</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className={`flex flex-row sm:flex-row gap-3 sm:gap-4 justify-center items-center
             mb-12 sm:mb-16 px-4 sm:px-0 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: isVisible ? '600ms' : '0ms' }}>
            <Button variant="hero" size="lg" className="group sm:w-2/3 md:w-auto md:px-4 sm:px-0 bg-blue-600/80 
            hover:bg-blue-600/100 transition-all duration-300 font-bold text-white">
              Veja quanto pode poupar
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Stats */}
          <div className={`flex flex-row sm:flex-row justify-center gap-6 sm:gap-8 pt-6 border-t border-white/20 mb-8 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: isVisible ? '800ms' : '0ms' }}>
            <div className="text-center">
              <div className="text-xl sm:text-2xl font-black text-white mb-1 tracking-tight">100M€+</div>
              <div className="text-white/80 font-medium text-sm">Crédito Aprovado</div>
            </div>
            <div className="text-center">
              <div className="text-xl sm:text-2xl font-black text-white mb-1 tracking-tight">300+</div>
              <div className="text-white/80 font-medium text-sm">Clientes Satisfeitos</div>
            </div>
            <div className="text-center">
              <div className="text-xl sm:text-2xl font-black text-white mb-1 tracking-tight">10+</div>
              <div className="text-white/80 font-medium text-sm">Anos de Experiência</div>
            </div>
          </div>

          {/* Legal Information Block - Moved to bottom */}
          <div 
            className={`bg-white/15 backdrop-blur-sm rounded-lg px-3 py-2.5 mx-4 sm:mx-auto max-w-3xl border border-white/20 cursor-pointer hover:bg-white/20 group transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            style={{ transitionDelay: isVisible ? '1000ms' : '0ms' }}
            onClick={() => window.open('https://de.cdn-website.com/a1c59971a6334032b852ea665bbca5dc/files/uploaded/InfoLegal.pdf', '_blank')}
          >
            <div className="flex items-start justify-between px-0 sm:px-0">
              <p className="text-[10px] md:text-[10px] text-white flex-1 leading-relaxed">
                Pedro Duarte Baptista, Unipessoal Lda. Intermediário de Crédito Vinculado registado junto do Banco de Portugal sob o nº 0003923. 
                A &ldquo;DS INTERMEDIÁRIOS DE CRÉDITO&rdquo; é uma marca titulada pela Decisões e Soluções Intermediários de Crédito, Lda.
              </p>
              <ExternalLink className="h-4 w-4 text-white/70 group-hover:text-white ml-3 mt-0.5 flex-shrink-0" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;