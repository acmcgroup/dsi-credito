"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
// Icons for future use - removing unused imports for now
// import { Phone, Mail, MapPin } from "lucide-react";
import { useState, useEffect } from "react";

const Header = () => {
  const [scrollOpacity, setScrollOpacity] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      
      // Use full document height minus viewport height for maximum scroll distance
      // This ensures we need to scroll the entire page to reach max opacity
      const documentHeight = document.documentElement.scrollHeight;
      const windowHeight = window.innerHeight;
      const maxScroll = documentHeight - windowHeight;

      // Calculate opacity from 0% to 90% based on full page scroll
      // Using a slower curve by applying a square root for more gradual buildup
      let opacity = Math.sqrt(scrollPosition / maxScroll) * 90;

      // Ensure opacity doesn't exceed 90%
      opacity = Math.min(opacity, 90);

      // Ensure opacity doesn't go below 0%
      opacity = Math.max(opacity, 0);

      setScrollOpacity(opacity);
    };

    // Initial call to set opacity on page load
    handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className="fixed top-0 w-full z-50 transition-all duration-300 border-b"
      style={{
        backgroundColor: `rgba(37, 99, 235, ${scrollOpacity / 100})`,
        backdropFilter: `blur(${scrollOpacity * 0.16}px)`,
        borderBottomColor: `rgba(59, 130, 246, ${scrollOpacity / 500})`,
        boxShadow: scrollOpacity > 10 ? '0 10px 15px -3px rgba(0, 0, 0, 0.1)' : 'none'
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main navigation with centered menu */}
        <div className="relative flex items-center py-3 sm:py-4">
          {/* Logo - responsive positioning */}
          <div className="flex-1 flex justify-start">
            <Link href="/" className="flex items-center space-x-2 sm:space-x-4">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white rounded-lg flex items-center justify-center shadow-md">
                <span className="text-primary font-bold text-sm sm:text-lg">GC</span>
              </div>
              <div className="block sm:hidden">
                <h1 className="text-sm font-black text-white tracking-tight">GLOBAL CRÉDITO</h1>
              </div>
            </Link>
          </div>

          {/* Desktop navigation */}
          <nav className="absolute left-1/2 transform -translate-x-1/2 hidden lg:flex items-center space-x-6">
            <a href="#servicos" className="text-white/90 hover:text-white transition-colors font-medium text-sm whitespace-nowrap">
              Os nossos serviços
            </a>
            <a href="#sobre" className="text-white/90 hover:text-white transition-colors font-medium text-sm whitespace-nowrap">
              Sobre Global Crédito
            </a>
            <Link href="/blog" className="text-white/90 hover:text-white transition-colors font-medium text-sm whitespace-nowrap">
              Blog
            </Link>
            <Link href="/informacao-legal" className="text-white/90 hover:text-white transition-colors font-medium text-sm whitespace-nowrap">
              Informação Legal
            </Link>
            <a href="#contacto" className="text-white/90 hover:text-white transition-colors font-medium text-sm whitespace-nowrap">
              Contactos
            </a>
          </nav>

          {/* Right side buttons - responsive */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            <Button variant="outline" size="sm" className="hidden md:flex bg-white/10 border-white/30 text-white hover:bg-white hover:text-primary backdrop-blur-sm text-xs sm:text-sm">
              Simular Crédito
            </Button>
            <Button variant="hero" size="sm" className="shadow-md text-xs sm:text-sm px-3 sm:px-4">
              Contactar
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;