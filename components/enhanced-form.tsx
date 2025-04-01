"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { CheckCircle, ChevronRight, Mail, User, Building, Phone, Globe, AlertCircle, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { useLocalization } from "@/components/localization-provider"

type FormStep = "contact" | "business" | "needs" | "success"

export function EnhancedForm() {
  const [step, setStep] = useState<FormStep>("contact")
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    website: "",
    size: "",
    industry: "",
    needs: "",
    budget: "",
    timeframe: "",
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const { t } = useLocalization()

  const updateFormData = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    if (errors[field]) {
      setErrors((prev) => {
        const newErrors = { ...prev }
        delete newErrors[field]
        return newErrors
      })
    }
  }

  const validateStep = () => {
    const newErrors: Record<string, string> = {}

    if (step === "contact") {
      if (!formData.firstName) newErrors.firstName = "Nome é obrigatório"
      if (!formData.lastName) newErrors.lastName = "Sobrenome é obrigatório"
      if (!formData.email) {
        newErrors.email = "Email é obrigatório"
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        newErrors.email = "Email inválido"
      }
      if (!formData.phone) newErrors.phone = "Telefone é obrigatório"
    } else if (step === "business") {
      if (!formData.company) newErrors.company = "Empresa é obrigatória"
      if (!formData.size) newErrors.size = "Tamanho da empresa é obrigatório"
      if (!formData.industry) newErrors.industry = "Indústria é obrigatória"
    } else if (step === "needs") {
      if (!formData.needs) newErrors.needs = "Necessidades são obrigatórias"
      if (!formData.budget) newErrors.budget = "Orçamento é obrigatório"
      if (!formData.timeframe) newErrors.timeframe = "Prazo é obrigatório"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleNext = () => {
    if (!validateStep()) return

    if (step === "contact") {
      setStep("business")
    } else if (step === "business") {
      setStep("needs")
    } else if (step === "needs") {
      setLoading(true)
      // Simulate API call
      setTimeout(() => {
        setLoading(false)
        setStep("success")
      }, 1500)
    }
  }

  const handlePrevious = () => {
    if (step === "business") {
      setStep("contact")
    } else if (step === "needs") {
      setStep("business")
    }
  }

  const getStepProgress = () => {
    switch (step) {
      case "contact":
        return 33
      case "business":
        return 66
      case "needs":
        return 100
      case "success":
        return 100
    }
  }

  return (
    <div className="bg-deep-blue-800/50 border border-deep-blue-700 rounded-xl p-6 md:p-8 shadow-xl max-w-2xl mx-auto">
      {step !== "success" && (
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-xl font-bold text-white">
              {step === "contact" && "Informações de Contato"}
              {step === "business" && "Informações da Empresa"}
              {step === "needs" && "Suas Necessidades"}
            </h3>
            <div className="text-sm text-deep-blue-300">
              Passo {step === "contact" ? "1" : step === "business" ? "2" : "3"} de 3
            </div>
          </div>

          <div className="w-full bg-deep-blue-700 h-2 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-gold-brown-600 to-gold-brown-400"
              initial={{ width: step === "contact" ? 0 : getStepProgress() + "%" }}
              animate={{ width: getStepProgress() + "%" }}
              transition={{ duration: 0.5 }}
            />
          </div>
        </div>
      )}

      <AnimatePresence mode="wait">
        {step === "contact" && (
          <motion.div
            key="contact"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div>
                <Label htmlFor="firstName" className="text-white mb-2 block">
                  Nome <span className="text-red-500">*</span>
                </Label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-deep-blue-400" />
                  <Input
                    id="firstName"
                    value={formData.firstName}
                    onChange={(e) => updateFormData("firstName", e.target.value)}
                    className={`pl-10 bg-deep-blue-900 border-deep-blue-700 text-white ${
                      errors.firstName
                        ? "border-red-500 focus:ring-red-500"
                        : "focus:border-gold-brown-500 focus:ring-gold-brown-500/30"
                    }`}
                    placeholder="Seu nome"
                  />
                </div>
                {errors.firstName && (
                  <p className="text-red-500 text-sm mt-1 flex items-center">
                    <AlertCircle className="h-3 w-3 mr-1" />
                    {errors.firstName}
                  </p>
                )}
              </div>

              <div>
                <Label htmlFor="lastName" className="text-white mb-2 block">
                  Sobrenome <span className="text-red-500">*</span>
                </Label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-deep-blue-400" />
                  <Input
                    id="lastName"
                    value={formData.lastName}
                    onChange={(e) => updateFormData("lastName", e.target.value)}
                    className={`pl-10 bg-deep-blue-900 border-deep-blue-700 text-white ${
                      errors.lastName
                        ? "border-red-500 focus:ring-red-500"
                        : "focus:border-gold-brown-500 focus:ring-gold-brown-500/30"
                    }`}
                    placeholder="Seu sobrenome"
                  />
                </div>
                {errors.lastName && (
                  <p className="text-red-500 text-sm mt-1 flex items-center">
                    <AlertCircle className="h-3 w-3 mr-1" />
                    {errors.lastName}
                  </p>
                )}
              </div>

              <div>
                <Label htmlFor="email" className="text-white mb-2 block">
                  Email <span className="text-red-500">*</span>
                </Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-deep-blue-400" />
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => updateFormData("email", e.target.value)}
                    className={`pl-10 bg-deep-blue-900 border-deep-blue-700 text-white ${
                      errors.email
                        ? "border-red-500 focus:ring-red-500"
                        : "focus:border-gold-brown-500 focus:ring-gold-brown-500/30"
                    }`}
                    placeholder="seu@email.com"
                  />
                </div>
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1 flex items-center">
                    <AlertCircle className="h-3 w-3 mr-1" />
                    {errors.email}
                  </p>
                )}
              </div>

              <div>
                <Label htmlFor="phone" className="text-white mb-2 block">
                  Telefone <span className="text-red-500">*</span>
                </Label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-deep-blue-400" />
                  <Input
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => updateFormData("phone", e.target.value)}
                    className={`pl-10 bg-deep-blue-900 border-deep-blue-700 text-white ${
                      errors.phone
                        ? "border-red-500 focus:ring-red-500"
                        : "focus:border-gold-brown-500 focus:ring-gold-brown-500/30"
                    }`}
                    placeholder="(00) 00000-0000"
                  />
                </div>
                {errors.phone && (
                  <p className="text-red-500 text-sm mt-1 flex items-center">
                    <AlertCircle className="h-3 w-3 mr-1" />
                    {errors.phone}
                  </p>
                )}
              </div>
            </div>

            <div className="flex justify-end">
              <Button
                onClick={handleNext}
                className="bg-gold-brown-500 hover:bg-gold-brown-600 text-deep-blue-900 font-medium group"
              >
                Próximo
                <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </motion.div>
        )}

        {step === "business" && (
          <motion.div
            key="business"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div>
                <Label htmlFor="company" className="text-white mb-2 block">
                  Empresa <span className="text-red-500">*</span>
                </Label>
                <div className="relative">
                  <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-deep-blue-400" />
                  <Input
                    id="company"
                    value={formData.company}
                    onChange={(e) => updateFormData("company", e.target.value)}
                    className={`pl-10 bg-deep-blue-900 border-deep-blue-700 text-white ${
                      errors.company
                        ? "border-red-500 focus:ring-red-500"
                        : "focus:border-gold-brown-500 focus:ring-gold-brown-500/30"
                    }`}
                    placeholder="Nome da empresa"
                  />
                </div>
                {errors.company && (
                  <p className="text-red-500 text-sm mt-1 flex items-center">
                    <AlertCircle className="h-3 w-3 mr-1" />
                    {errors.company}
                  </p>
                )}
              </div>

              <div>
                <Label htmlFor="website" className="text-white mb-2 block">
                  Website
                </Label>
                <div className="relative">
                  <Globe className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-deep-blue-400" />
                  <Input
                    id="website"
                    value={formData.website}
                    onChange={(e) => updateFormData("website", e.target.value)}
                    className="pl-10 bg-deep-blue-900 border-deep-blue-700 text-white focus:border-gold-brown-500 focus:ring-gold-brown-500/30"
                    placeholder="www.seusite.com"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="size" className="text-white mb-2 block">
                  Tamanho da Empresa <span className="text-red-500">*</span>
                </Label>
                <Select value={formData.size} onValueChange={(value) => updateFormData("size", value)}>
                  <SelectTrigger
                    id="size"
                    className={`bg-deep-blue-900 border-deep-blue-700 text-white ${
                      errors.size
                        ? "border-red-500 focus:ring-red-500"
                        : "focus:border-gold-brown-500 focus:ring-gold-brown-500/30"
                    }`}
                  >
                    <SelectValue placeholder="Selecione o tamanho" />
                  </SelectTrigger>
                  <SelectContent className="bg-deep-blue-800 border-deep-blue-700 text-white">
                    <SelectItem value="1-10">1-10 funcionários</SelectItem>
                    <SelectItem value="11-50">11-50 funcionários</SelectItem>
                    <SelectItem value="51-200">51-200 funcionários</SelectItem>
                    <SelectItem value="201-500">201-500 funcionários</SelectItem>
                    <SelectItem value="501+">501+ funcionários</SelectItem>
                  </SelectContent>
                </Select>
                {errors.size && (
                  <p className="text-red-500 text-sm mt-1 flex items-center">
                    <AlertCircle className="h-3 w-3 mr-1" />
                    {errors.size}
                  </p>
                )}
              </div>

              <div>
                <Label htmlFor="industry" className="text-white mb-2 block">
                  Indústria <span className="text-red-500">*</span>
                </Label>
                <Select value={formData.industry} onValueChange={(value) => updateFormData("industry", value)}>
                  <SelectTrigger
                    id="industry"
                    className={`bg-deep-blue-900 border-deep-blue-700 text-white ${
                      errors.industry
                        ? "border-red-500 focus:ring-red-500"
                        : "focus:border-gold-brown-500 focus:ring-gold-brown-500/30"
                    }`}
                  >
                    <SelectValue placeholder="Selecione a indústria" />
                  </SelectTrigger>
                  <SelectContent className="bg-deep-blue-800 border-deep-blue-700 text-white">
                    <SelectItem value="ecommerce">E-commerce</SelectItem>
                    <SelectItem value="saas">SaaS</SelectItem>
                    <SelectItem value="finance">Finanças</SelectItem>
                    <SelectItem value="education">Educação</SelectItem>
                    <SelectItem value="healthcare">Saúde</SelectItem>
                    <SelectItem value="retail">Varejo</SelectItem>
                    <SelectItem value="other">Outro</SelectItem>
                  </SelectContent>
                </Select>
                {errors.industry && (
                  <p className="text-red-500 text-sm mt-1 flex items-center">
                    <AlertCircle className="h-3 w-3 mr-1" />
                    {errors.industry}
                  </p>
                )}
              </div>
            </div>

            <div className="flex justify-between">
              <Button
                onClick={handlePrevious}
                variant="outline"
                className="border-gold-brown-500/50 text-white hover:bg-deep-blue-700 hover:text-gold-brown-300"
              >
                Voltar
              </Button>
              <Button
                onClick={handleNext}
                className="bg-gold-brown-500 hover:bg-gold-brown-600 text-deep-blue-900 font-medium group"
              >
                Próximo
                <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </motion.div>
        )}

        {step === "needs" && (
          <motion.div
            key="needs"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="space-y-6 mb-8">
              <div>
                <Label htmlFor="needs" className="text-white mb-2 block">
                  Descreva suas necessidades <span className="text-red-500">*</span>
                </Label>
                <Textarea
                  id="needs"
                  value={formData.needs}
                  onChange={(e) => updateFormData("needs", e.target.value)}
                  className={`bg-deep-blue-900 border-deep-blue-700 text-white min-h-[120px] ${
                    errors.needs
                      ? "border-red-500 focus:ring-red-500"
                      : "focus:border-gold-brown-500 focus:ring-gold-brown-500/30"
                  }`}
                  placeholder="Conte-nos sobre seus objetivos e desafios..."
                />
                {errors.needs && (
                  <p className="text-red-500 text-sm mt-1 flex items-center">
                    <AlertCircle className="h-3 w-3 mr-1" />
                    {errors.needs}
                  </p>
                )}
              </div>

              <div>
                <Label className="text-white mb-4 block">
                  Orçamento mensal estimado <span className="text-red-500">*</span>
                </Label>
                <RadioGroup
                  value={formData.budget}
                  onValueChange={(value) => updateFormData("budget", value)}
                  className="grid grid-cols-1 md:grid-cols-2 gap-3"
                >
                  <div>
                    <RadioGroupItem value="R$500-R$1000" id="budget-1" className="peer sr-only" />
                    <Label
                      htmlFor="budget-1"
                      className={`flex p-3 cursor-pointer rounded-lg border ${
                        formData.budget === "R$500-R$1000"
                          ? "bg-gold-brown-500/20 border-gold-brown-500 text-gold-brown-300"
                          : "bg-deep-blue-900 border-deep-blue-700 text-deep-blue-200 hover:bg-deep-blue-800 hover:text-white"
                      }`}
                    >
                      R$500-R$1000
                    </Label>
                  </div>

                  <div>
                    <RadioGroupItem value="R$1001-R$2500" id="budget-2" className="peer sr-only" />
                    <Label
                      htmlFor="budget-2"
                      className={`flex p-3 cursor-pointer rounded-lg border ${
                        formData.budget === "R$1001-R$2500"
                          ? "bg-gold-brown-500/20 border-gold-brown-500 text-gold-brown-300"
                          : "bg-deep-blue-900 border-deep-blue-700 text-deep-blue-200 hover:bg-deep-blue-800 hover:text-white"
                      }`}
                    >
                      R$1001-R$2500
                    </Label>
                  </div>

                  <div>
                    <RadioGroupItem value="R$2501-R$5000" id="budget-3" className="peer sr-only" />
                    <Label
                      htmlFor="budget-3"
                      className={`flex p-3 cursor-pointer rounded-lg border ${
                        formData.budget === "R$2501-R$5000"
                          ? "bg-gold-brown-500/20 border-gold-brown-500 text-gold-brown-300"
                          : "bg-deep-blue-900 border-deep-blue-700 text-deep-blue-200 hover:bg-deep-blue-800 hover:text-white"
                      }`}
                    >
                      R$2501-R$5000
                    </Label>
                  </div>

                  <div>
                    <RadioGroupItem value="R$5000+" id="budget-4" className="peer sr-only" />
                    <Label
                      htmlFor="budget-4"
                      className={`flex p-3 cursor-pointer rounded-lg border ${
                        formData.budget === "R$5000+"
                          ? "bg-gold-brown-500/20 border-gold-brown-500 text-gold-brown-300"
                          : "bg-deep-blue-900 border-deep-blue-700 text-deep-blue-200 hover:bg-deep-blue-800 hover:text-white"
                      }`}
                    >
                      R$5000+
                    </Label>
                  </div>
                </RadioGroup>
                {errors.budget && (
                  <p className="text-red-500 text-sm mt-1 flex items-center">
                    <AlertCircle className="h-3 w-3 mr-1" />
                    {errors.budget}
                  </p>
                )}
              </div>

              <div>
                <Label className="text-white mb-4 block">
                  Prazo para implementação <span className="text-red-500">*</span>
                </Label>
                <RadioGroup
                  value={formData.timeframe}
                  onValueChange={(value) => updateFormData("timeframe", value)}
                  className="grid grid-cols-1 md:grid-cols-3 gap-3"
                >
                  <div>
                    <RadioGroupItem value="Imediato" id="timeframe-1" className="peer sr-only" />
                    <Label
                      htmlFor="timeframe-1"
                      className={`flex p-3 cursor-pointer rounded-lg border ${
                        formData.timeframe === "Imediato"
                          ? "bg-gold-brown-500/20 border-gold-brown-500 text-gold-brown-300"
                          : "bg-deep-blue-900 border-deep-blue-700 text-deep-blue-200 hover:bg-deep-blue-800 hover:text-white"
                      }`}
                    >
                      Imediato
                    </Label>
                  </div>

                  <div>
                    <RadioGroupItem value="1-3 meses" id="timeframe-2" className="peer sr-only" />
                    <Label
                      htmlFor="timeframe-2"
                      className={`flex p-3 cursor-pointer rounded-lg border ${
                        formData.timeframe === "1-3 meses"
                          ? "bg-gold-brown-500/20 border-gold-brown-500 text-gold-brown-300"
                          : "bg-deep-blue-900 border-deep-blue-700 text-deep-blue-200 hover:bg-deep-blue-800 hover:text-white"
                      }`}
                    >
                      1-3 meses
                    </Label>
                  </div>

                  <div>
                    <RadioGroupItem value="3+ meses" id="timeframe-3" className="peer sr-only" />
                    <Label
                      htmlFor="timeframe-3"
                      className={`flex p-3 cursor-pointer rounded-lg border ${
                        formData.timeframe === "3+ meses"
                          ? "bg-gold-brown-500/20 border-gold-brown-500 text-gold-brown-300"
                          : "bg-deep-blue-900 border-deep-blue-700 text-deep-blue-200 hover:bg-deep-blue-800 hover:text-white"
                      }`}
                    >
                      3+ meses
                    </Label>
                  </div>
                </RadioGroup>
                {errors.timeframe && (
                  <p className="text-red-500 text-sm mt-1 flex items-center">
                    <AlertCircle className="h-3 w-3 mr-1" />
                    {errors.timeframe}
                  </p>
                )}
              </div>
            </div>

            <div className="flex justify-between">
              <Button
                onClick={handlePrevious}
                variant="outline"
                className="border-gold-brown-500/50 text-white hover:bg-deep-blue-700 hover:text-gold-brown-300"
              >
                Voltar
              </Button>
              <Button
                onClick={handleNext}
                className="bg-gold-brown-500 hover:bg-gold-brown-600 text-deep-blue-900 font-medium group"
                disabled={loading}
              >
                {loading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Enviando...
                  </>
                ) : (
                  <>
                    Enviar
                    <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </>
                )}
              </Button>
            </div>
          </motion.div>
        )}

        {step === "success" && (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="text-center py-8"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-500/20 mb-6">
              <CheckCircle className="h-8 w-8 text-green-500" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Solicitação Enviada com Sucesso!</h3>
            <p className="text-deep-blue-200 mb-8 max-w-md mx-auto">
              Obrigado por entrar em contato conosco. Um de nossos especialistas entrará em contato com você em até 24
              horas para discutir suas necessidades.
            </p>
            <div className="p-4 rounded-lg bg-deep-blue-900/50 border border-deep-blue-700 mb-6 max-w-md mx-auto">
              <div className="flex items-center gap-2 text-left mb-2">
                <User className="h-4 w-4 text-gold-brown-400" />
                <span className="text-deep-blue-200">
                  {formData.firstName} {formData.lastName}
                </span>
              </div>
              <div className="flex items-center gap-2 text-left">
                <Mail className="h-4 w-4 text-gold-brown-400" />
                <span className="text-deep-blue-200">{formData.email}</span>
              </div>
            </div>
            <Button
              className="bg-gold-brown-500 hover:bg-gold-brown-600 text-deep-blue-900 font-medium"
              onClick={() => window.location.reload()}
            >
              Voltar para o Início
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

