"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { 
  Calculator, 
  Home, 
  Car, 
  Building, 
  CreditCard, 
  TrendingUp, 
  DollarSign,
  Calendar,
  Target,
  ArrowRight,
  Info
} from "lucide-react";



export default function SimuladorPage() {
  const [selectedType, setSelectedType] = useState("habitacao");
  const [amount, setAmount] = useState("");
  const [term, setTerm] = useState("");
  const [rate, setRate] = useState("");
  const [monthlyPayment, setMonthlyPayment] = useState(0);
  const [totalInterest, setTotalInterest] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);

  const creditTypes = [
    {
      id: "habitacao",
      name: "Crédito Habitação",
      icon: Home,
      description: "Financiamento para compra de casa",
      defaultRate: "3.5",
      minTerm: 12,
      maxTerm: 360,
      minAmount: 25000,
      maxAmount: 500000
    },
    {
      id: "automovel",
      name: "Crédito Automóvel",
      icon: Car,
      description: "Financiamento para veículos",
      defaultRate: "6.5",
      minTerm: 12,
      maxTerm: 84,
      minAmount: 5000,
      maxAmount: 100000
    },
    {
      id: "empresarial",
      name: "Crédito Empresarial",
      icon: Building,
      description: "Financiamento para empresas",
      defaultRate: "7.5",
      minTerm: 12,
      maxTerm: 120,
      minAmount: 10000,
      maxAmount: 1000000
    },
    {
      id: "pessoal",
      name: "Crédito Pessoal",
      icon: CreditCard,
      description: "Financiamento para necessidades pessoais",
      defaultRate: "8.5",
      minTerm: 12,
      maxTerm: 84,
      minAmount: 1000,
      maxAmount: 50000
    },
    {
      id: "consolidacao",
      name: "Consolidação de Créditos",
      icon: TrendingUp,
      description: "Unificar vários créditos numa só prestação",
      defaultRate: "9.0",
      minTerm: 24,
      maxTerm: 120,
      minAmount: 5000,
      maxAmount: 100000
    }
  ];

  const selectedCredit = creditTypes.find(type => type.id === selectedType);

  const calculateCredit = () => {
    if (!amount || !term || !rate) return;

    const principal = parseFloat(amount);
    const months = parseInt(term);
    const annualRate = parseFloat(rate);
    const monthlyRate = annualRate / 100 / 12;

    if (monthlyRate === 0) return;

    const monthlyPayment = principal * (monthlyRate * Math.pow(1 + monthlyRate, months)) / (Math.pow(1 + monthlyRate, months) - 1);
    const totalAmount = monthlyPayment * months;
    const totalInterest = totalAmount - principal;

    setMonthlyPayment(monthlyPayment);
    setTotalInterest(totalInterest);
    setTotalAmount(totalAmount);
  };

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('pt-PT', {
      style: 'currency',
      currency: 'EUR'
    }).format(value);
  };

  const handleTypeChange = (typeId: string) => {
    setSelectedType(typeId);
    const credit = creditTypes.find(t => t.id === typeId);
    if (credit) {
      setRate(credit.defaultRate);
      setAmount("");
      setTerm("");
      setMonthlyPayment(0);
      setTotalInterest(0);
      setTotalAmount(0);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Header Section */}
      <section className="pt-32 pb-16 bg-[rgb(6,38,68)] text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight tracking-tight">
            Simulador de{" "}
            <span className="text-transparent bg-gradient-to-r from-[#c0a651] to-[#f4d03f] bg-clip-text">
              Crédito
            </span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-white/90 max-w-3xl mx-auto font-medium leading-relaxed">
            Calcule a sua prestação mensal e compare diferentes opções de financiamento
          </p>
        </div>
      </section>

      {/* Simulator Section */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Credit Type Selection */}
            <div className="lg:col-span-1">
              <Card className="bg-white shadow-lg border-0">
                <CardHeader className="bg-[rgb(6,38,68)] text-white rounded-t-lg">
                  <CardTitle className="flex items-center gap-3">
                    <Calculator className="h-6 w-6" />
                    Tipo de Crédito
                  </CardTitle>
                  <CardDescription className="text-white/80">
                    Selecione o tipo de financiamento
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-3">
                    {creditTypes.map((type) => {
                      const Icon = type.icon;
                      return (
                        <button
                          key={type.id}
                          onClick={() => handleTypeChange(type.id)}
                          className={`w-full p-4 rounded-lg border-2 transition-all duration-300 text-left ${
                            selectedType === type.id
                              ? "border-[#c0a651] bg-[#c0a651]/10"
                              : "border-gray-200 hover:border-[#c0a651]/50 hover:bg-gray-50"
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <div className={`p-2 rounded-lg ${
                              selectedType === type.id ? "bg-[#c0a651] text-white" : "bg-gray-100"
                            }`}>
                              <Icon className="h-5 w-5" />
                            </div>
                            <div>
                              <h3 className="font-semibold text-gray-900">{type.name}</h3>
                              <p className="text-sm text-gray-600">{type.description}</p>
                            </div>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Calculator Form */}
            <div className="lg:col-span-2">
              <Card className="bg-white shadow-lg border-0">
                <CardHeader className="bg-[rgb(6,38,68)] text-white rounded-t-lg">
                  <CardTitle className="flex items-center gap-3">
                    <DollarSign className="h-6 w-6" />
                    Simulação
                  </CardTitle>
                  <CardDescription className="text-white/80">
                    {selectedCredit?.name} - Introduza os dados para calcular
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                    <div>
                      <Label htmlFor="amount" className="text-sm font-medium text-gray-700">
                        Montante (€)
                      </Label>
                      <Input
                        id="amount"
                        type="number"
                        placeholder="Ex: 100000"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        min={selectedCredit?.minAmount}
                        max={selectedCredit?.maxAmount}
                        className="mt-2"
                      />
                      <p className="text-xs text-gray-500 mt-1">
                        Min: {formatCurrency(selectedCredit?.minAmount || 0)} | 
                        Max: {formatCurrency(selectedCredit?.maxAmount || 0)}
                      </p>
                    </div>
                    <div>
                      <Label htmlFor="term" className="text-sm font-medium text-gray-700">
                        Prazo (meses)
                      </Label>
                      <Input
                        id="term"
                        type="number"
                        placeholder="Ex: 240"
                        value={term}
                        onChange={(e) => setTerm(e.target.value)}
                        min={selectedCredit?.minTerm}
                        max={selectedCredit?.maxTerm}
                        className="mt-2"
                      />
                      <p className="text-xs text-gray-500 mt-1">
                        Min: {selectedCredit?.minTerm} | Max: {selectedCredit?.maxTerm}
                      </p>
                    </div>
                    <div>
                      <Label htmlFor="rate" className="text-sm font-medium text-gray-700">
                        Taxa Anual (%)
                      </Label>
                      <Input
                        id="rate"
                        type="number"
                        step="0.1"
                        placeholder="Ex: 3.5"
                        value={rate}
                        onChange={(e) => setRate(e.target.value)}
                        className="mt-2"
                      />
                      <p className="text-xs text-gray-500 mt-1">
                        Taxa sugerida: {selectedCredit?.defaultRate}%
                      </p>
                    </div>
                  </div>

                  <Button 
                    onClick={calculateCredit}
                    disabled={!amount || !term || !rate}
                    className="w-full bg-[rgb(6,38,68)] hover:bg-[#c0a651] hover:text-[rgb(6,38,68)] transition-all duration-300 font-bold py-3"
                  >
                    <Calculator className="h-5 w-5 mr-2" />
                    Calcular Crédito
                  </Button>

                  {/* Results */}
                  {monthlyPayment > 0 && (
                    <div className="mt-8 p-6 bg-gradient-to-r from-[#c0a651]/10 to-[#f4d03f]/10 rounded-lg border border-[#c0a651]/20">
                      <h3 className="text-xl font-bold text-[rgb(6,38,68)] mb-4 text-center">
                        Resultados da Simulação
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                          <div className="text-2xl font-bold text-[#c0a651]">
                            {formatCurrency(monthlyPayment)}
                          </div>
                          <div className="text-sm text-gray-600">Prestação Mensal</div>
                        </div>
                        <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                          <div className="text-2xl font-bold text-[rgb(6,38,68)]">
                            {formatCurrency(totalInterest)}
                          </div>
                          <div className="text-sm text-gray-600">Total de Juros</div>
                        </div>
                        <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                          <div className="text-2xl font-bold text-[#f4d03f]">
                            {formatCurrency(totalAmount)}
                          </div>
                          <div className="text-sm text-gray-600">Total a Pagar</div>
                        </div>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Additional Information */}
          <div className="mt-16">
            <Card className="bg-gradient-to-r from-[rgb(6,38,68)] to-[rgb(6,38,68)]/90 text-white border-0">
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold mb-4">
                    Precisa de Ajuda com o Seu Crédito?
                  </h2>
                  <p className="text-xl text-white/90 max-w-2xl mx-auto">
                    Os nossos especialistas estão disponíveis para analisar a sua situação 
                    e encontrar a melhor solução de financiamento para si.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-[#c0a651] rounded-full flex items-center justify-center mx-auto mb-4">
                      <Target className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">Análise Personalizada</h3>
                    <p className="text-white/80">
                      Avaliamos o seu perfil e objetivos para recomendar a melhor opção
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-[#c0a651] rounded-full flex items-center justify-center mx-auto mb-4">
                      <TrendingUp className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">Melhores Condições</h3>
                    <p className="text-white/80">
                      Negociamos com os bancos para obter as taxas mais competitivas
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-[#c0a651] rounded-full flex items-center justify-center mx-auto mb-4">
                      <Calendar className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">Acompanhamento</h3>
                    <p className="text-white/80">
                      Apoiamos todo o processo desde a simulação até à aprovação
                    </p>
                  </div>
                </div>
                <div className="text-center mt-8">
                  <Button className="bg-[#c0a651] hover:bg-[#f4d03f] hover:text-[rgb(6,38,68)] text-lg px-8 py-3 font-bold transition-all duration-300">
                    <ArrowRight className="h-5 w-5 mr-2" />
                    Solicitar Consulta Gratuita
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Disclaimer */}
          <div className="mt-8 text-center">
            <div className="inline-flex items-center gap-2 text-sm text-gray-600 bg-gray-100 px-4 py-2 rounded-full">
              <Info className="h-4 w-4" />
              <span>
                Esta simulação é meramente informativa. As condições finais dependem da aprovação bancária.
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
