"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
// Icons for future use - removing unused imports for now
// import { Phone, Mail, MapPin } from "lucide-react";
import { useState, useEffect } from "react";

const Header = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animations after component mounts
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
         <header
       className="fixed top-0 w-full z-50 transition-all duration-300 border-b bg-[rgb(6,38,68)] border-[#c0a651]/30 shadow-lg"
     >
             <div className="container mx-auto">
         {/* Main navigation with centered menu */}
         <div className="relative flex items-center">
          {/* Logo - responsive positioning */}
          <div className="flex-1 flex justify-start">
                           <Link href="/" className={`flex items-center transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
                 <div className="w-16 h-20 sm:w-20 sm:h-24 flex items-center justify-center">
                   <img src="/logo.webp" alt="Global Crédito Logo" className="w-full h-full object-contain" />
                 </div>
               </Link>
          </div>

                     {/* Desktop navigation */}
           <nav className="absolute left-1/2 transform -translate-x-1/2 hidden lg:flex items-center space-x-6">
             <a href="#servicos" className={`text-[#c0a651] hover:text-[#d4b86a] font-medium text-sm whitespace-nowrap transition-all duration-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`} style={{ transitionDelay: isVisible ? '200ms' : '0ms' }}>
               Serviços
             </a>
             <a href="#sobre" className={`text-[#c0a651] hover:text-[#d4b86a] font-medium text-sm whitespace-nowrap transition-all duration-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`} style={{ transitionDelay: isVisible ? '400ms' : '0ms' }}>
               Sobre
             </a>
             <Link href="/blog" className={`text-[#c0a651] hover:text-[#d4b86a] font-medium text-sm whitespace-nowrap transition-all duration-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`} style={{ transitionDelay: isVisible ? '600ms' : '0ms' }}>
               Blog
             </Link>
             <Link href="/informacao-legal" className={`text-[#c0a651] hover:text-[#d4b86a] font-medium text-sm whitespace-nowrap transition-all duration-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`} style={{ transitionDelay: isVisible ? '800ms' : '0ms' }}>
               Informação Legal
             </Link>
             <a href="#contacto" className={`text-[#c0a651] hover:text-[#d4b86a] font-medium text-sm whitespace-nowrap transition-all duration-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`} style={{ transitionDelay: isVisible ? '1000ms' : '0ms' }}>
               Contactos
             </a>
           </nav>

          {/* Right side buttons - responsive */}
          <div className={`flex items-center space-x-2 sm:space-x-3 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`} style={{ transitionDelay: isVisible ? '1200ms' : '0ms' }}>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;