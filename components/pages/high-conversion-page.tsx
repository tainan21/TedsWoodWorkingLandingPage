"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useAnimation, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CheckCircle, CreditCard, Globe, MessageSquare, ShieldCheck, Star, Users, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

// Componente de animação para elementos que aparecem durante o scroll
const AnimateOnScroll = ({ children, className = "", delay = 0, ...props }) => {
  const controls = useAnimation()
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, threshold: 0.1 })

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1],
            delay,
          },
        },
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  )
}

// Componente de CTA com efeito de hover
const CtaButton = ({ children, className = "", ...props }) => {
  return (
    <Button className={`cta-button ${className}`} {...props}>
      {children}
    </Button>
  )
}

export default function HighConversionPage() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="flex flex-col min-h-screen bg-deep-blue-950 text-white">
      {/* Header */}
      <header
        className={`sticky top-0 z-40 w-full backdrop-blur transition-all duration-300 ${
          scrolled ? "bg-deep-blue-900/90 shadow-md" : "bg-transparent"
        }`}
      >
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-xl">
            <Globe className="h-6 w-6 text-gold-brown-400" />
            <span className="bg-gradient-to-r from-white to-gold-brown-300 bg-clip-text text-transparent">
              ConvertePro
            </span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <Link href="#recursos" className="font-medium transition-colors hover:text-gold-brown-400">
              Recursos
            </Link>
            <Link href="#precos" className="font-medium transition-colors hover:text-gold-brown-400">
              Preços
            </Link>
            <Link href="#depoimentos" className="font-medium transition-colors hover:text-gold-brown-400">
              Depoimentos
            </Link>
            <Link href="#faq" className="font-medium transition-colors hover:text-gold-brown-400">
              FAQ
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              className="hidden md:flex text-white hover:text-gold-brown-400 hover:bg-deep-blue-800"
            >
              Entrar
            </Button>
            <CtaButton className="bg-gold-brown-500 hover:bg-gold-brown-600 text-deep-blue-900 font-medium">
              Começar Agora
            </CtaButton>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 relative overflow-hidden">
          <div className="absolute inset-0 bg-deep-blue-900 bg-mesh opacity-30"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-deep-blue-950 via-deep-blue-900/50 to-deep-blue-950"></div>

          <div className="container px-4 md:px-6 relative z-10">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <motion.div
                className="flex flex-col justify-center space-y-4"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <div className="inline-block rounded-lg bg-gold-brown-500/20 px-3 py-1 text-sm text-gold-brown-300 border border-gold-brown-500/30">
                  Aumente suas conversões em até 300%
                </div>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  <span className="bg-gradient-to-r from-white to-gold-brown-300 bg-clip-text text-transparent">
                    Transforme visitantes em clientes fiéis
                  </span>
                </h1>
                <p className="max-w-[600px] text-deep-blue-100 md:text-xl">
                  Nossa plataforma combina design inteligente, psicologia de conversão e automação para maximizar seus
                  resultados.
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <CtaButton
                    size="lg"
                    className="bg-gold-brown-500 hover:bg-gold-brown-600 text-deep-blue-900 font-medium group"
                  >
                    Experimente Grátis
                    <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" />
                  </CtaButton>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-gold-brown-500/50 text-white hover:bg-deep-blue-800 hover:text-gold-brown-300"
                  >
                    Ver Demonstração
                  </Button>
                </div>
                <div className="flex items-center gap-4 text-sm text-deep-blue-100">
                  <div className="flex items-center gap-1">
                    <CheckCircle className="h-4 w-4 text-gold-brown-400" />
                    <span>14 dias grátis</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <CheckCircle className="h-4 w-4 text-gold-brown-400" />
                    <span>Sem cartão de crédito</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <CheckCircle className="h-4 w-4 text-gold-brown-400" />
                    <span>Suporte 24/7</span>
                  </div>
                </div>
              </motion.div>
              <motion.div
                className="flex items-center justify-center"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              >
                <div className="relative w-full max-w-[500px] aspect-video overflow-hidden rounded-xl border border-deep-blue-700 bg-deep-blue-800/50 p-2 shadow-xl backdrop-blur-sm">
                  <div className="absolute inset-0 bg-gradient-to-r from-gold-brown-500/10 to-deep-blue-800/10 rounded-lg"></div>
                  <Image
                    src="/placeholder.svg?height=600&width=800"
                    width={800}
                    height={600}
                    alt="Dashboard da plataforma"
                    className="rounded-lg object-cover opacity-80"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-deep-blue-900/90 to-transparent rounded-lg flex items-end p-6">
                    <div className="grid gap-2">
                      <div className="text-sm font-medium text-gold-brown-300">Resultados em tempo real</div>
                      <div className="text-2xl font-bold bg-gradient-to-r from-white to-gold-brown-300 bg-clip-text text-transparent">
                        +127% de conversão
                      </div>
                      <div className="text-xs text-deep-blue-200">Nos últimos 30 dias</div>
                    </div>
                  </div>
                  <motion.div
                    className="absolute top-4 right-4 h-3 w-3 rounded-full bg-gold-brown-400"
                    animate={{ scale: [1, 1.5, 1] }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Social Proof */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-deep-blue-900 relative">
          <div className="absolute inset-0 bg-mesh opacity-10"></div>
          <div className="container px-4 md:px-6 relative z-10">
            <AnimateOnScroll className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-gold-brown-500/20 px-3 py-1 text-sm text-gold-brown-300 border border-gold-brown-500/30">
                  Confiado por mais de 10.000 empresas
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  <span className="bg-gradient-to-r from-white to-gold-brown-300 bg-clip-text text-transparent">
                    Empresas que transformaram seus resultados
                  </span>
                </h2>
              </div>
            </AnimateOnScroll>
            <div className="mx-auto grid max-w-5xl grid-cols-2 gap-6 py-8 md:grid-cols-4 md:gap-12 lg:py-12">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                <AnimateOnScroll
                  key={i}
                  className="flex items-center justify-center grayscale transition-all hover:grayscale-0 hover:scale-105"
                  delay={i * 0.1}
                >
                  <div className="bg-deep-blue-800/50 p-4 rounded-lg border border-deep-blue-700/50 w-full h-full flex items-center justify-center">
                    <Image
                      src={`/placeholder.svg?height=60&width=180&text=LOGO ${i}`}
                      alt={`Logo da empresa ${i}`}
                      width={180}
                      height={60}
                      className="h-12 object-contain opacity-70 hover:opacity-100 transition-opacity"
                    />
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
            <AnimateOnScroll className="flex items-center justify-center gap-4 text-deep-blue-200">
              <div className="flex items-center gap-1">
                <Star className="h-5 w-5 fill-gold-brown-400 text-gold-brown-400" />
                <Star className="h-5 w-5 fill-gold-brown-400 text-gold-brown-400" />
                <Star className="h-5 w-5 fill-gold-brown-400 text-gold-brown-400" />
                <Star className="h-5 w-5 fill-gold-brown-400 text-gold-brown-400" />
                <Star className="h-5 w-5 fill-gold-brown-400 text-gold-brown-400" />
              </div>
              <div className="text-sm">
                <span className="font-medium text-white">4.9/5</span> de mais de 3.000 avaliações
              </div>
            </AnimateOnScroll>
          </div>
        </section>

        {/* Features */}
        <section id="recursos" className="w-full py-12 md:py-24 lg:py-32 bg-deep-blue-950 relative">
          <div className="absolute inset-0 bg-gradient-radial from-deep-blue-900/20 to-transparent"></div>
          <div className="container px-4 md:px-6 relative z-10">
            <AnimateOnScroll className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-gold-brown-500/20 px-3 py-1 text-sm text-gold-brown-300 border border-gold-brown-500/30">
                  Recursos Poderosos
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  <span className="bg-gradient-to-r from-white to-gold-brown-300 bg-clip-text text-transparent">
                    Tudo que você precisa para converter mais
                  </span>
                </h2>
                <p className="max-w-[900px] text-deep-blue-200 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Nossa plataforma foi desenvolvida para maximizar suas taxas de conversão com ferramentas intuitivas e
                  eficazes.
                </p>
              </div>
            </AnimateOnScroll>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-8 md:grid-cols-3 md:gap-12">
              {[
                {
                  icon: <CreditCard className="h-10 w-10 text-gold-brown-400" />,
                  title: "Páginas de Alta Conversão",
                  description:
                    "Templates otimizados e testados para maximizar suas taxas de conversão em qualquer nicho.",
                },
                {
                  icon: <Users className="h-10 w-10 text-gold-brown-400" />,
                  title: "Segmentação Avançada",
                  description:
                    "Personalize a experiência do usuário com base em comportamento, localização e histórico.",
                },
                {
                  icon: <MessageSquare className="h-10 w-10 text-gold-brown-400" />,
                  title: "Chat Inteligente",
                  description: "Atendimento automatizado que aumenta as conversões e melhora a experiência do cliente.",
                },
                {
                  icon: <ShieldCheck className="h-10 w-10 text-gold-brown-400" />,
                  title: "Testes A/B",
                  description: "Compare diferentes versões de suas páginas para descobrir o que funciona melhor.",
                },
                {
                  icon: <Globe className="h-10 w-10 text-gold-brown-400" />,
                  title: "SEO Otimizado",
                  description: "Páginas otimizadas para mecanismos de busca, aumentando seu tráfego orgânico.",
                },
                {
                  icon: <CheckCircle className="h-10 w-10 text-gold-brown-400" />,
                  title: "Análises Detalhadas",
                  description:
                    "Métricas em tempo real para entender o comportamento dos visitantes e otimizar resultados.",
                },
              ].map((feature, i) => (
                <AnimateOnScroll key={i} delay={i * 0.1}>
                  <Card className="flex flex-col items-center text-center bg-deep-blue-800/50 border-deep-blue-700 hover:border-gold-brown-500/50 transition-all hover:shadow-lg hover:shadow-gold-brown-500/10 group">
                    <CardHeader>
                      <motion.div
                        className="p-3 rounded-full bg-deep-blue-700/50 mb-4 border border-deep-blue-600/50 group-hover:bg-gold-brown-500/20 group-hover:border-gold-brown-500/30 transition-colors"
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      >
                        {feature.icon}
                      </motion.div>
                      <CardTitle className="text-white group-hover:text-gold-brown-300 transition-colors">
                        {feature.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base text-deep-blue-200">{feature.description}</CardDescription>
                    </CardContent>
                  </Card>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section id="precos" className="w-full py-12 md:py-24 lg:py-32 bg-deep-blue-900 relative">
          <div className="absolute inset-0 bg-mesh opacity-10"></div>
          <div className="container px-4 md:px-6 relative z-10">
            <AnimateOnScroll className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-gold-brown-500/20 px-3 py-1 text-sm text-gold-brown-300 border border-gold-brown-500/30">
                  Planos Flexíveis
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  <span className="bg-gradient-to-r from-white to-gold-brown-300 bg-clip-text text-transparent">
                    Escolha o plano ideal para o seu negócio
                  </span>
                </h2>
                <p className="max-w-[900px] text-deep-blue-200 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Preços transparentes sem surpresas. Cancele a qualquer momento.
                </p>
              </div>
            </AnimateOnScroll>
            <div className="mx-auto max-w-5xl py-8">
              <Tabs defaultValue="mensal" className="w-full">
                <div className="flex justify-center mb-8">
                  <TabsList className="bg-deep-blue-800 border border-deep-blue-700">
                    <TabsTrigger
                      value="mensal"
                      className="data-[state=active]:bg-gold-brown-500 data-[state=active]:text-deep-blue-900"
                    >
                      Mensal
                    </TabsTrigger>
                    <TabsTrigger
                      value="anual"
                      className="data-[state=active]:bg-gold-brown-500 data-[state=active]:text-deep-blue-900"
                    >
                      Anual (20% de desconto)
                    </TabsTrigger>
                  </TabsList>
                </div>
                <TabsContent value="mensal" className="w-full">
                  <div className="grid gap-6 md:grid-cols-3">
                    {[
                      {
                        name: "Iniciante",
                        price: "R$ 97",
                        description: "Perfeito para pequenos negócios que estão começando.",
                        features: [
                          "Até 5.000 visitantes/mês",
                          "3 páginas de conversão",
                          "Chat básico",
                          "Análises essenciais",
                          "Suporte por email",
                        ],
                        popular: false,
                      },
                      {
                        name: "Profissional",
                        price: "R$ 197",
                        description: "Ideal para empresas em crescimento que precisam de mais recursos.",
                        features: [
                          "Até 20.000 visitantes/mês",
                          "10 páginas de conversão",
                          "Chat avançado com IA",
                          "Testes A/B ilimitados",
                          "Suporte prioritário",
                        ],
                        popular: true,
                      },
                      {
                        name: "Empresarial",
                        price: "R$ 497",
                        description: "Para empresas estabelecidas que precisam de máximo desempenho.",
                        features: [
                          "Visitantes ilimitados",
                          "Páginas ilimitadas",
                          "Chat personalizado com IA",
                          "API completa",
                          "Gerente de sucesso dedicado",
                        ],
                        popular: false,
                      },
                    ].map((plan, i) => (
                      <AnimateOnScroll key={i} delay={i * 0.1}>
                        <Card
                          className={`flex flex-col bg-deep-blue-800/50 border-deep-blue-700 hover:shadow-lg hover:shadow-gold-brown-500/10 transition-all ${plan.popular ? "border-gold-brown-500/50 shadow-lg shadow-gold-brown-500/10" : ""}`}
                        >
                          {plan.popular && (
                            <div className="bg-gold-brown-500 text-deep-blue-900 text-center py-1 text-sm font-medium">
                              Mais Popular
                            </div>
                          )}
                          <CardHeader>
                            <CardTitle className="text-white">{plan.name}</CardTitle>
                            <div className="mt-4 flex items-baseline">
                              <span className="text-5xl font-extrabold bg-gradient-to-r from-white to-gold-brown-300 bg-clip-text text-transparent">
                                {plan.price}
                              </span>
                              <span className="ml-1 text-xl font-normal text-deep-blue-300">/mês</span>
                            </div>
                            <CardDescription className="mt-4 text-deep-blue-200">{plan.description}</CardDescription>
                          </CardHeader>
                          <CardContent className="flex-1">
                            <ul className="space-y-3">
                              {plan.features.map((feature, j) => (
                                <motion.li
                                  key={j}
                                  className="flex items-center"
                                  initial={{ opacity: 0, x: -10 }}
                                  whileInView={{ opacity: 1, x: 0 }}
                                  transition={{ delay: j * 0.1 }}
                                  viewport={{ once: true }}
                                >
                                  <CheckCircle className="h-5 w-5 text-gold-brown-400 mr-2" />
                                  <span className="text-deep-blue-100">{feature}</span>
                                </motion.li>
                              ))}
                            </ul>
                          </CardContent>
                          <CardFooter>
                            <CtaButton
                              className="w-full"
                              variant={plan.popular ? "default" : "outline"}
                              size="lg"
                              style={{
                                background: plan.popular
                                  ? "linear-gradient(to right, #D9AA3F, #BE8C2A)"
                                  : "transparent",
                                borderColor: !plan.popular ? "#BE8C2A" : "transparent",
                                color: plan.popular ? "#0E2348" : "#D9AA3F",
                              }}
                            >
                              Começar Agora
                            </CtaButton>
                          </CardFooter>
                        </Card>
                      </AnimateOnScroll>
                    ))}
                  </div>
                </TabsContent>
                <TabsContent value="anual" className="w-full">
                  <div className="grid gap-6 md:grid-cols-3">
                    {[
                      {
                        name: "Iniciante",
                        price: "R$ 77",
                        description: "Perfeito para pequenos negócios que estão começando.",
                        features: [
                          "Até 5.000 visitantes/mês",
                          "3 páginas de conversão",
                          "Chat básico",
                          "Análises essenciais",
                          "Suporte por email",
                        ],
                        popular: false,
                      },
                      {
                        name: "Profissional",
                        price: "R$ 157",
                        description: "Ideal para empresas em crescimento que precisam de mais recursos.",
                        features: [
                          "Até 20.000 visitantes/mês",
                          "10 páginas de conversão",
                          "Chat avançado com IA",
                          "Testes A/B ilimitados",
                          "Suporte prioritário",
                        ],
                        popular: true,
                      },
                      {
                        name: "Empresarial",
                        price: "R$ 397",
                        description: "Para empresas estabelecidas que precisam de máximo desempenho.",
                        features: [
                          "Visitantes ilimitados",
                          "Páginas ilimitadas",
                          "Chat personalizado com IA",
                          "API completa",
                          "Gerente de sucesso dedicado",
                        ],
                        popular: false,
                      },
                    ].map((plan, i) => (
                      <AnimateOnScroll key={i} delay={i * 0.1}>
                        <Card
                          className={`flex flex-col bg-deep-blue-800/50 border-deep-blue-700 hover:shadow-lg hover:shadow-gold-brown-500/10 transition-all ${plan.popular ? "border-gold-brown-500/50 shadow-lg shadow-gold-brown-500/10" : ""}`}
                        >
                          {plan.popular && (
                            <div className="bg-gold-brown-500 text-deep-blue-900 text-center py-1 text-sm font-medium">
                              Mais Popular
                            </div>
                          )}
                          <CardHeader>
                            <CardTitle className="text-white">{plan.name}</CardTitle>
                            <div className="mt-4 flex items-baseline">
                              <span className="text-5xl font-extrabold bg-gradient-to-r from-white to-gold-brown-300 bg-clip-text text-transparent">
                                {plan.price}
                              </span>
                              <span className="ml-1 text-xl font-normal text-deep-blue-300">/mês</span>
                            </div>
                            <CardDescription className="mt-4 text-deep-blue-200">{plan.description}</CardDescription>
                          </CardHeader>
                          <CardContent className="flex-1">
                            <ul className="space-y-3">
                              {plan.features.map((feature, j) => (
                                <motion.li
                                  key={j}
                                  className="flex items-center"
                                  initial={{ opacity: 0, x: -10 }}
                                  whileInView={{ opacity: 1, x: 0 }}
                                  transition={{ delay: j * 0.1 }}
                                  viewport={{ once: true }}
                                >
                                  <CheckCircle className="h-5 w-5 text-gold-brown-400 mr-2" />
                                  <span className="text-deep-blue-100">{feature}</span>
                                </motion.li>
                              ))}
                            </ul>
                          </CardContent>
                          <CardFooter>
                            <CtaButton
                              className="w-full"
                              variant={plan.popular ? "default" : "outline"}
                              size="lg"
                              style={{
                                background: plan.popular
                                  ? "linear-gradient(to right, #D9AA3F, #BE8C2A)"
                                  : "transparent",
                                borderColor: !plan.popular ? "#BE8C2A" : "transparent",
                                color: plan.popular ? "#0E2348" : "#D9AA3F",
                              }}
                            >
                              Começar Agora
                            </CtaButton>
                          </CardFooter>
                        </Card>
                      </AnimateOnScroll>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section id="depoimentos" className="w-full py-12 md:py-24 lg:py-32 bg-deep-blue-950 relative">
          <div className="absolute inset-0 bg-gradient-radial from-deep-blue-900/20 to-transparent"></div>
          <div className="container px-4 md:px-6 relative z-10">
            <AnimateOnScroll className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-gold-brown-500/20 px-3 py-1 text-sm text-gold-brown-300 border border-gold-brown-500/30">
                  Depoimentos
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  <span className="bg-gradient-to-r from-white to-gold-brown-300 bg-clip-text text-transparent">
                    O que nossos clientes dizem
                  </span>
                </h2>
                <p className="max-w-[900px] text-deep-blue-200 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Milhares de empresas já transformaram seus resultados com nossa plataforma.
                </p>
              </div>
            </AnimateOnScroll>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-8 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  quote:
                    "Aumentamos nossas conversões em 215% no primeiro mês de uso. O investimento se pagou em menos de uma semana.",
                  author: "Ana Silva",
                  role: "CEO, TechStart",
                  avatar: "/placeholder.svg?height=100&width=100",
                },
                {
                  quote:
                    "A facilidade de uso e os resultados rápidos me impressionaram. Nunca vi uma ferramenta tão eficiente para aumentar vendas.",
                  author: "Carlos Mendes",
                  role: "Diretor de Marketing, Grupo Inova",
                  avatar: "/placeholder.svg?height=100&width=100",
                },
                {
                  quote:
                    "O suporte é incrível e as páginas converteram muito melhor do que esperávamos. Recomendo para qualquer negócio.",
                  author: "Juliana Costa",
                  role: "Empreendedora, Bella Moda",
                  avatar: "/placeholder.svg?height=100&width=100",
                },
                {
                  quote:
                    "Implementamos em nosso e-commerce e as vendas aumentaram 178% em apenas 2 meses. Resultado impressionante!",
                  author: "Roberto Almeida",
                  role: "Diretor, MegaStore",
                  avatar: "/placeholder.svg?height=100&width=100",
                },
                {
                  quote:
                    "A segmentação avançada nos permitiu personalizar a experiência para cada cliente. Nosso ROI aumentou 300%.",
                  author: "Fernanda Lima",
                  role: "CMO, Grupo Nexus",
                  avatar: "/placeholder.svg?height=100&width=100",
                },
                {
                  quote:
                    "Depois de testar várias soluções, esta é de longe a melhor. Interface intuitiva e resultados reais.",
                  author: "Marcelo Santos",
                  role: "Fundador, AgênciaDigital",
                  avatar: "/placeholder.svg?height=100&width=100",
                },
              ].map((testimonial, i) => (
                <AnimateOnScroll key={i} delay={i * 0.1}>
                  <Card className="text-center bg-deep-blue-800/50 border-deep-blue-700 hover:border-gold-brown-500/30 transition-all hover:shadow-lg hover:shadow-gold-brown-500/10">
                    <CardHeader>
                      <motion.div
                        className="flex justify-center"
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      >
                        <div className="relative h-16 w-16 overflow-hidden rounded-full border-2 border-gold-brown-500/50">
                          <Image
                            src={testimonial.avatar || "/placeholder.svg"}
                            alt={testimonial.author}
                            fill
                            className="rounded-full object-cover"
                          />
                        </div>
                      </motion.div>
                      <div className="flex justify-center mt-2">
                        <div className="flex">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star key={star} className="h-5 w-5 fill-gold-brown-400 text-gold-brown-400" />
                          ))}
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-deep-blue-200">"{testimonial.quote}"</p>
                      <div className="mt-4">
                        <p className="font-semibold text-white">{testimonial.author}</p>
                        <p className="text-sm text-deep-blue-300">{testimonial.role}</p>
                      </div>
                    </CardContent>
                  </Card>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="w-full py-12 md:py-24 lg:py-32 bg-deep-blue-900 relative">
          <div className="absolute inset-0 bg-mesh opacity-10"></div>
          <div className="container px-4 md:px-6 relative z-10">
            <AnimateOnScroll className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-gold-brown-500/20 px-3 py-1 text-sm text-gold-brown-300 border border-gold-brown-500/30">
                  Perguntas Frequentes
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  <span className="bg-gradient-to-r from-white to-gold-brown-300 bg-clip-text text-transparent">
                    Tire suas dúvidas
                  </span>
                </h2>
                <p className="max-w-[900px] text-deep-blue-200 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Respondemos às perguntas mais comuns sobre nossa plataforma.
                </p>
              </div>
            </AnimateOnScroll>
            <div className="mx-auto grid max-w-3xl gap-4 py-8">
              {[
                {
                  question: "Quanto tempo leva para ver resultados?",
                  answer:
                    "A maioria dos nossos clientes começa a ver melhorias nas taxas de conversão em 7 dias ou menos. Os resultados completos geralmente são visíveis após 30 dias de otimização contínua.",
                },
                {
                  question: "Preciso ter conhecimentos técnicos?",
                  answer:
                    "Não! Nossa plataforma foi projetada para ser extremamente fácil de usar, mesmo para quem não tem experiência técnica. Oferecemos templates prontos e um editor intuitivo de arrastar e soltar.",
                },
                {
                  question: "Posso cancelar a qualquer momento?",
                  answer:
                    "Sim, você pode cancelar sua assinatura a qualquer momento sem taxas ou penalidades. Não exigimos contratos de longo prazo.",
                },
                {
                  question: "Como funciona o suporte?",
                  answer:
                    "Oferecemos suporte por email para todos os planos, com tempo de resposta de até 24 horas. Os planos Profissional e Empresarial incluem suporte prioritário com tempo de resposta de até 4 horas.",
                },
                {
                  question: "A plataforma funciona em qualquer nicho?",
                  answer:
                    "Sim! Nossa plataforma é versátil e funciona para qualquer tipo de negócio. Temos templates específicos para e-commerce, serviços, infoprodutos, SaaS e muito mais.",
                },
                {
                  question: "Como é feita a integração com meu site?",
                  answer:
                    "A integração é simples e pode ser feita de várias maneiras: através de um código JavaScript, plugin WordPress, ou redirecionamento de domínio. Nosso assistente de configuração guia você em todo o processo.",
                },
              ].map((faq, i) => (
                <AnimateOnScroll key={i} delay={i * 0.1}>
                  <Card className="bg-deep-blue-800/50 border-deep-blue-700 hover:border-gold-brown-500/30 transition-all hover:shadow-lg hover:shadow-gold-brown-500/10 group">
                    <CardHeader>
                      <CardTitle className="text-lg text-white group-hover:text-gold-brown-300 transition-colors">
                        {faq.question}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-deep-blue-200">{faq.answer}</p>
                    </CardContent>
                  </Card>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-deep-blue-900 to-deep-blue-950 relative overflow-hidden">
          <div className="absolute inset-0 bg-mesh opacity-10"></div>
          <motion.div
            className="absolute -top-40 -right-40 w-80 h-80 bg-gold-brown-500/10 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.2, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
          />
          <motion.div
            className="absolute -bottom-40 -left-40 w-80 h-80 bg-gold-brown-500/10 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.3, 0.2],
            }}
            transition={{
              duration: 8,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
              delay: 2,
            }}
          />
          <div className="container px-4 md:px-6 relative z-10">
            <AnimateOnScroll className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight lg:text-5xl">
                  <span className="bg-gradient-to-r from-white to-gold-brown-300 bg-clip-text text-transparent">
                    Pronto para aumentar suas conversões?
                  </span>
                </h2>
                <p className="max-w-[900px] text-deep-blue-200 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Junte-se a milhares de empresas que já transformaram seus resultados.
                </p>
              </div>
              <div className="mx-auto w-full max-w-sm space-y-2">
                <form className="flex flex-col sm:flex-row gap-2">
                  <Input
                    type="email"
                    placeholder="Seu melhor email"
                    className="max-w-lg flex-1 bg-deep-blue-800 border-deep-blue-700 text-white focus:border-gold-brown-500 focus:ring-gold-brown-500/30"
                  />
                  <CtaButton
                    type="submit"
                    className="bg-gold-brown-500 hover:bg-gold-brown-600 text-deep-blue-900 font-medium"
                  >
                    Começar Agora
                  </CtaButton>
                </form>
                <p className="text-xs text-deep-blue-300">
                  Teste grátis por 14 dias. Sem necessidade de cartão de crédito.
                </p>
              </div>
              <div className="flex flex-wrap items-center justify-center gap-4 text-sm">
                <div className="flex items-center gap-1">
                  <CheckCircle className="h-4 w-4 text-gold-brown-400" />
                  <span className="text-deep-blue-200">Configuração em 5 minutos</span>
                </div>
                <div className="flex items-center gap-1">
                  <CheckCircle className="h-4 w-4 text-gold-brown-400" />
                  <span className="text-deep-blue-200">Suporte 24/7</span>
                </div>
                <div className="flex items-center gap-1">
                  <CheckCircle className="h-4 w-4 text-gold-brown-400" />
                  <span className="text-deep-blue-200">Resultados garantidos</span>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full border-t border-deep-blue-800 bg-deep-blue-950 py-6 md:py-12">
        <div className="container flex flex-col items-center justify-center gap-4 px-4 md:px-6 md:flex-row md:justify-between">
          <div className="flex items-center gap-2 font-bold text-xl">
            <Globe className="h-6 w-6 text-gold-brown-400" />
            <span className="bg-gradient-to-r from-white to-gold-brown-300 bg-clip-text text-transparent">
              ConvertePro
            </span>
          </div>
          <nav className="flex flex-wrap gap-4 sm:gap-6">
            <Link href="#" className="text-sm text-deep-blue-200 hover:text-gold-brown-300 transition-colors">
              Termos
            </Link>
            <Link href="#" className="text-sm text-deep-blue-200 hover:text-gold-brown-300 transition-colors">
              Privacidade
            </Link>
            <Link href="#" className="text-sm text-deep-blue-200 hover:text-gold-brown-300 transition-colors">
              Cookies
            </Link>
            <Link href="#" className="text-sm text-deep-blue-200 hover:text-gold-brown-300 transition-colors">
              Licenças
            </Link>
            <Link href="#" className="text-sm text-deep-blue-200 hover:text-gold-brown-300 transition-colors">
              Contato
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="#" className="text-deep-blue-300 hover:text-gold-brown-400 transition-colors">
              <span className="sr-only">Facebook</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </Link>
            <Link href="#" className="text-deep-blue-300 hover:text-gold-brown-400 transition-colors">
              <span className="sr-only">Instagram</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
              </svg>
            </Link>
            <Link href="#" className="text-deep-blue-300 hover:text-gold-brown-400 transition-colors">
              <span className="sr-only">Twitter</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
              </svg>
            </Link>
          </div>
        </div>
        <div className="container px-4 md:px-6 mt-6">
          <p className="text-center text-sm text-deep-blue-400">
            &copy; {new Date().getFullYear()} ConvertePro. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  )
}

