"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  Send,
  MessageSquare,
  Calculator
} from "lucide-react";

const Contact = () => {
  return (
    <section id="contacto" className="py-12 sm:py-16 lg:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Fale Connosco
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto px-4 sm:px-0">
            Pronto para dar o próximo passo? Entre em contacto e descubra como podemos 
            ajudá-lo a alcançar os seus objetivos financeiros.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
          {/* Contact Info */}
          <div className="space-y-6 sm:space-y-8">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-4 sm:mb-6">
                Informações de Contacto
              </h3>
              
              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1 text-sm sm:text-base">Telefone</h4>
                    <p className="text-muted-foreground text-sm sm:text-base">+351 220 998 039</p>
                    <p className="text-xs sm:text-sm text-muted-foreground">Chamada para rede fixa nacional</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1 text-sm sm:text-base">Telemóvel</h4>
                    <p className="text-muted-foreground text-sm sm:text-base">+351 916 254 215</p>
                    <p className="text-xs sm:text-sm text-muted-foreground">Chamada para rede móvel nacional</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1 text-sm sm:text-base">Email</h4>
                    <p className="text-muted-foreground text-sm sm:text-base break-all">pedrobaptista@dsicredito.pt</p>
                    <p className="text-xs sm:text-sm text-muted-foreground">Resposta garantida em 2h úteis</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1 text-sm sm:text-base">Morada</h4>
                    <p className="text-muted-foreground text-sm sm:text-base">Rua Doutor Emílio Peres, 139</p>
                    <p className="text-muted-foreground text-sm sm:text-base">4050-007 Porto Portugal</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1 text-sm sm:text-base">Horário</h4>
                    <p className="text-muted-foreground text-sm sm:text-base">Segunda a Sexta: 9h00 - 19h00</p>
                    <p className="text-muted-foreground text-sm sm:text-base">Sábado: 9h00 - 13h00</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick actions */}
            <div className="space-y-3 sm:space-y-4">
              <h4 className="text-base sm:text-lg font-semibold text-foreground">Ações Rápidas</h4>
              <div className="grid grid-cols-1 gap-3 sm:gap-4">
                <Button variant="outline" className="justify-start h-auto p-3 sm:p-4 w-full">
                  <Calculator className="h-4 w-4 sm:h-5 sm:w-5 mr-2 sm:mr-3 flex-shrink-0" />
                  <div className="text-left">
                    <div className="font-medium text-sm sm:text-base">Simular Crédito</div>
                    <div className="text-xs text-muted-foreground">Grátis e sem compromisso</div>
                  </div>
                </Button>
                <Button variant="outline" className="justify-start h-auto p-3 sm:p-4 w-full">
                  <MessageSquare className="h-4 w-4 sm:h-5 sm:w-5 mr-2 sm:mr-3 flex-shrink-0" />
                  <div className="text-left">
                    <div className="font-medium text-sm sm:text-base">Chat Online</div>
                    <div className="text-xs text-muted-foreground">Apoio imediato</div>
                  </div>
                </Button>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="bg-gradient-card border-0 shadow-medium">
            <CardHeader className="px-4 sm:px-6">
              <CardTitle className="text-lg sm:text-xl">Envie-nos uma Mensagem</CardTitle>
              <CardDescription className="text-sm sm:text-base">
                Preencha o formulário e entraremos em contacto consigo brevemente.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 sm:space-y-6 px-4 sm:px-6">
              <div className="grid grid-cols-1 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-sm sm:text-base">Nome</Label>
                  <Input id="name" placeholder="O seu nome completo" className="text-sm sm:text-base" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm sm:text-base">Email</Label>
                  <Input id="email" type="email" placeholder="seu@email.com" className="text-sm sm:text-base" />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="phone" className="text-sm sm:text-base">Telefone</Label>
                <Input id="phone" placeholder="+351 XXX XXX XXX" className="text-sm sm:text-base" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="subject" className="text-sm sm:text-base">Assunto</Label>
                <Input id="subject" placeholder="Qual o motivo do contacto?" className="text-sm sm:text-base" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message" className="text-sm sm:text-base">Mensagem</Label>
                <Textarea 
                  id="message" 
                  placeholder="Descreva a sua situação ou dúvida..."
                  rows={4}
                  className="text-sm sm:text-base resize-none"
                />
              </div>
              
              <Button className="w-full py-2.5 sm:py-3 text-sm sm:text-base">
                <Send className="h-4 w-4 mr-2" />
                Enviar Mensagem
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;