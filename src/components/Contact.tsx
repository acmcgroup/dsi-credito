"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
} from "lucide-react";
import { useState } from "react";

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

const Contact = () => {
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setForm(prev => ({ ...prev, [id]: value }));
    
    // Reset status when user starts typing
    if (submitStatus !== 'idle') {
      setSubmitStatus('idle');
      setErrorMessage("");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const timestamp = new Date().toISOString();
    
    console.log(`[${timestamp}] 📝 Contact form submission started`, {
      name: form.name.substring(0, 20) + (form.name.length > 20 ? '...' : ''),
      email: form.email,
      hasPhone: !!form.phone,
      hasSubject: !!form.subject,
      messageLength: form.message.length
    });

    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage("");

    try {
      console.log(`[${timestamp}] 🌐 Sending request to /api/contact`);
      
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      console.log(`[${timestamp}] 📡 Response received:`, {
        status: response.status,
        ok: response.ok,
        statusText: response.statusText
      });

      const data = await response.json();
      console.log(`[${timestamp}] 📄 Response data:`, data);

      if (data.success) {
        console.log(`[${timestamp}] ✅ Form submission successful`);
        setSubmitStatus('success');
        setForm({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
        
        // Auto-hide success message after 5 seconds
        setTimeout(() => {
          setSubmitStatus('idle');
        }, 5000);
      } else {
        console.log(`[${timestamp}] ❌ Form submission failed:`, data.error);
        setSubmitStatus('error');
        setErrorMessage(data.error || "Ocorreu um erro. Tente novamente.");
      }
    } catch (error) {
      console.error(`[${timestamp}] 🚨 Frontend error during form submission:`, error);
      setSubmitStatus('error');
      
      // More specific error messages based on error type
      if (error instanceof TypeError && error.message.includes('fetch')) {
        setErrorMessage("Erro de rede. Verifique sua conexão com a internet.");
      } else if (error instanceof Error && error.name === 'AbortError') {
        setErrorMessage("Requisição cancelada. Tente novamente.");
      } else {
        setErrorMessage("Erro de conexão. Verifique sua internet e tente novamente.");
      }
    } finally {
      setIsSubmitting(false);
      console.log(`[${timestamp}] 🏁 Form submission process completed`);
    }
  };
  return (
    <section
      id="contacto"
      className="py-10 sm:py-12 lg:py-20 bg-white relative overflow-hidden"
    >

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center sm:mb-12 ">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            Entre em <span className="text-transparent bg-blue-600 bg-clip-text">Contacto</span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Saiba como o podemos apoiar na concretização dos seus objetivos financeiros.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:items-stretch">
          {/* Contact Info */}
          <div className="space-y-6 h-full">
            <Card className="bg-blue-50 border border-blue-100 shadow-md h-full flex flex-col">
              <CardContent className="p-6 flex-1 flex flex-col">
                <h3 className="text-lg font-semibold text-center mb-6">Informações de Contacto</h3>
                <div className="space-y-5 text-sm flex-1">
                  {[
                    {
                      icon: <Phone className="h-5 w-5 text-white" />,
                      lines: ["+351 220 998 039", "+351 916 254 215"]
                    },
                    {
                      icon: <Mail className="h-5 w-5 text-white" />,
                      lines: ["pedrobaptista@dsicredito.pt", "patriciacastro@dsicredito.pt"],
                    },
                    {
                      icon: <MapPin className="h-5 w-5 text-white" />,
                      lines: ["Rua Doutor Emílio Peres, 139", "4050-007 Porto Portugal"],
                    },
                    {
                      icon: <Clock className="h-5 w-5 text-white" />,
                      lines: ["Seg a Sex: 9h00 - 19h00", "Sábado: 9h00 - 13h00"],
                    },
                  ].map((item, idx) => (
                    <div key={idx} className="flex gap-4 items-start">
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-blue-600 shadow">
                        {item.icon}
                      </div>
                      <div>
                        {item.lines.map((line, i) => (
                          <p key={i} className="text-muted-foreground text-xs">
                            {line}
                          </p>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="shadow-md rounded-xl bg-blue-100 border border-blue-200 h-full flex flex-col">
            <CardHeader className="px-6 pt-6 pb-2">
              <CardTitle className="text-lg text-center font-semibold tracking-tight">
                Envie-nos uma Mensagem
              </CardTitle>
              <CardDescription className="text-sm text-muted-foreground text-center">
                Preencha o formulário e entraremos em contacto.
              </CardDescription>
            </CardHeader>

            <CardContent className="px-6 pb-6 space-y-4 text-sm flex-1">
              {/* Success Message */}
              {submitStatus === 'success' && (
                <div className="p-4 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-400 text-green-700 rounded-md text-center shadow-lg transform transition-all duration-300 ease-out opacity-100">
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center animate-pulse">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <span className="font-medium">Mensagem enviada com sucesso!</span>
                  </div>
                  <p className="text-sm text-green-600 mt-1">Entraremos em contacto em breve.</p>
                </div>
              )}

              {/* Error Message */}
              {submitStatus === 'error' && (
                <div className="p-4 bg-gradient-to-r from-red-50 to-rose-50 border border-red-400 text-red-700 rounded-md text-center shadow-lg transform transition-all duration-300 ease-out">
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <span className="font-medium">{errorMessage}</span>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Input
                    id="name"
                    type="text"
                    placeholder="Nome completo"
                    value={form.name}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    className="text-sm px-4 py-2 bg-white shadow-inner rounded-md placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:shadow-md border-0 disabled:opacity-50 transition-all duration-200"
                  />
                  <Input
                    id="email"
                    type="email"
                    placeholder="seu@email.com"
                    value={form.email}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    className="text-sm px-4 py-2 bg-white shadow-inner rounded-md placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:shadow-md border-0 disabled:opacity-50 transition-all duration-200"
                  />
                </div>

                <Input
                  id="phone"
                  type="tel"
                  placeholder="Telefone (+351 XXX XXX XXX)"
                  value={form.phone}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  className="text-sm px-4 py-2 bg-white shadow-inner rounded-md placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary/30 border-0 disabled:opacity-50"
                />

                <Input
                  id="subject"
                  type="text"
                  placeholder="Assunto (motivo do contacto)"
                  value={form.subject}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  className="text-sm px-4 py-2 bg-white shadow-inner rounded-md placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary/30 border-0 disabled:opacity-50"
                />

                <Textarea
                  id="message"
                  placeholder="Descreva a sua situação ou dúvida..."
                  rows={4}
                  value={form.message}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  className="text-sm px-4 py-2 bg-white shadow-inner rounded-md resize-none placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:shadow-md border-0 disabled:opacity-50 transition-all duration-200"
                />

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 text-sm font-semibold bg-primary text-white hover:bg-blue.300/90 hover:shadow-lg hover:shadow-primary/25 hover:scale-[1.02] active:scale-[0.98] active:shadow-md transition-all duration-200 ease-out rounded-md disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:shadow-none group"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      <span className="animate-pulse">Enviando...</span>
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4 mr-2 group-hover:translate-x-1 transition-transform duration-200" />
                      <span>Enviar</span>
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>



        </div>
      </div>
    </section>
  );
};

export default Contact;
