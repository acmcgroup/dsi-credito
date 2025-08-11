import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { 
  Phone, 
  Mail, 
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
  Shield
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
         <footer className="bg-[rgb(6,38,68)] text-white">
      <div className="container mx-auto px-4 py-12">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company info */}
          <div className="space-y-4">
                         <div className="flex items-center">
               <div className="w-32 h-32 flex items-center justify-center">
                 <img src="/logo.webp" alt="Global Crédito Logo" className="w-full h-full object-contain" />
               </div>
             </div>
            <p className="text-sm opacity-90 leading-relaxed">
              Pedro Duarte Baptista, Unipessoal Lda - Empresa de Intermediação financeira 
              e crédito. O seu parceiro de confiança no Porto.
            </p>
            <div className="flex items-center gap-2 text-sm">
              <Shield className="h-4 w-4" />
              <span>Autorização BP nº 0003923</span>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Serviços</h3>
            <ul className="space-y-2 text-sm opacity-90">
              <li><Link href="/credito-habitacao" className="hover:opacity-100 transition-opacity">Crédito Habitação</Link></li>
              <li><Link href="/credito-automovel" className="hover:opacity-100 transition-opacity">Crédito Automóvel</Link></li>
              <li><Link href="/credito-empresarial" className="hover:opacity-100 transition-opacity">Crédito Empresarial</Link></li>
              <li><Link href="/credito-pessoal" className="hover:opacity-100 transition-opacity">Crédito Pessoal</Link></li>
              <li><Link href="/consolidacao" className="hover:opacity-100 transition-opacity">Consolidação</Link></li>
              <li><Link href="/renegociacao" className="hover:opacity-100 transition-opacity">Renegociação</Link></li>
            </ul>
          </div>

          {/* Quick links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Links Úteis</h3>
            <ul className="space-y-2 text-sm opacity-90">
              <li><Link href="/sobre-nos" className="hover:opacity-100 transition-opacity">Sobre Nós</Link></li>
              <li><Link href="/simulador-credito-habitacao" className="hover:opacity-100 transition-opacity">Simulador</Link></li>
              <li><Link href="/faq" className="hover:opacity-100 transition-opacity">FAQ</Link></li>
              <li><Link href="/blog" className="hover:opacity-100 transition-opacity">Blog</Link></li>
              <li><Link href="/politica-privacidade" className="hover:opacity-100 transition-opacity">Política de Privacidade</Link></li>
              <li><Link href="/termos-condicoes" className="hover:opacity-100 transition-opacity">Termos e Condições</Link></li>
            </ul>
          </div>

          {/* Contact info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contactos</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>+351 220 998 039</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>+351 916 254 215</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>pedrobaptista@dsicredito.pt</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5" />
                <div>
                  <div>Rua Doutor Emílio Peres, 139</div>
                  <div>4050-007 Porto Portugal</div>
                </div>
              </div>
            </div>

            {/* Social media */}
            <div className="space-y-2">
              <h4 className="font-medium">Siga-nos</h4>
              <div className="flex gap-3">
                <a href="#" className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors">
                  <Facebook className="h-4 w-4" />
                </a>
                <a href="#" className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors">
                  <Instagram className="h-4 w-4" />
                </a>
                <a href="#" className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors">
                  <Linkedin className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-white/20" />

        {/* Bottom footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm opacity-80">
          <div>
            © {currentYear} Global Crédito. Todos os direitos reservados.
          </div>
          <div className="flex flex-wrap gap-4">
            <span>Autorização do Banco de Portugal: 0003923</span>
            <span>•</span>
            <span>Membro da APB</span>
            <span>•</span>
            <span>RGPD Compliance</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;