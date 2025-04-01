"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { ChevronRight, BarChart3, Users, Zap, Globe, MessageSquare, LineChart } from "lucide-react"
import { cn } from "@/lib/utils"
import { useLocalization } from "@/components/localization-provider"

const features = [
  {
    id: "analytics",
    icon: <BarChart3 className="h-6 w-6" />,
    title: "Análises Avançadas",
    description: "Visualize o comportamento dos usuários e otimize suas páginas com dados em tempo real.",
    image: "/placeholder.svg?height=600&width=800&text=Analytics+Dashboard",
  },
  {
    id: "segmentation",
    icon: <Users className="h-6 w-6" />,
    title: "Segmentação Inteligente",
    description: "Direcione suas mensagens para o público certo no momento certo.",
    image: "/placeholder.svg?height=600&width=800&text=Segmentation+Tool",
  },
  {
    id: "optimization",
    icon: <Zap className="h-6 w-6" />,
    title: "Otimização Automática",
    description: "Nossos algoritmos ajustam suas páginas automaticamente para maximizar conversões.",
    image: "/placeholder.svg?height=600&width=800&text=Optimization+Engine",
  },
  {
    id: "global",
    icon: <Globe className="h-6 w-6" />,
    title: "Alcance Global",
    description: "Suporte a múltiplos idiomas e otimização para diferentes regiões.",
    image: "/placeholder.svg?height=600&width=800&text=Global+Reach",
  },
  {
    id: "chat",
    icon: <MessageSquare className="h-6 w-6" />,
    title: "Chat Inteligente",
    description: "Interaja com seus visitantes em tempo real e aumente suas chances de conversão.",
    image: "/placeholder.svg?height=600&width=800&text=Smart+Chat",
  },
  {
    id: "reporting",
    icon: <LineChart className="h-6 w-6" />,
    title: "Relatórios Detalhados",
    description: "Acompanhe seu progresso com relatórios personalizados e insights acionáveis.",
    image: "/placeholder.svg?height=600&width=800&text=Detailed+Reports",
  },
]

export function FeatureShowcase() {
  const [activeFeature, setActiveFeature] = useState(features[0].id)
  const { t } = useLocalization()

  const activeFeatureData = features.find((f) => f.id === activeFeature)

  return (
    <section className="py-16 bg-deep-blue-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-mesh opacity-10"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-block rounded-lg bg-gold-brown-500/20 px-3 py-1 text-sm text-gold-brown-300 border border-gold-brown-500/30 mb-4">
            Recursos Exclusivos
          </div>
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight mb-4">
            <span className="bg-gradient-to-r from-white to-gold-brown-300 bg-clip-text text-transparent">
              Ferramentas poderosas para seu sucesso
            </span>
          </h2>
          <p className="max-w-2xl mx-auto text-deep-blue-200">
            Nossa plataforma oferece tudo o que você precisa para transformar visitantes em clientes fiéis.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Feature Navigation */}
          <div className="lg:col-span-5 space-y-2">
            {features.map((feature) => (
              <motion.button
                key={feature.id}
                onClick={() => setActiveFeature(feature.id)}
                className={cn(
                  "w-full text-left p-4 rounded-lg transition-all duration-200 flex items-start gap-4 group",
                  activeFeature === feature.id
                    ? "bg-deep-blue-800 border border-gold-brown-500/30"
                    : "hover:bg-deep-blue-800/50 border border-deep-blue-700/50",
                )}
                whileHover={{ x: 5 }}
              >
                <div
                  className={cn(
                    "p-2 rounded-full transition-colors",
                    activeFeature === feature.id
                      ? "bg-gold-brown-500/20 text-gold-brown-400"
                      : "bg-deep-blue-700/50 text-deep-blue-300 group-hover:text-gold-brown-400",
                  )}
                >
                  {feature.icon}
                </div>
                <div>
                  <h3
                    className={cn(
                      "font-medium text-lg mb-1 transition-colors",
                      activeFeature === feature.id
                        ? "text-gold-brown-300"
                        : "text-white group-hover:text-gold-brown-300",
                    )}
                  >
                    {feature.title}
                  </h3>
                  <p className="text-deep-blue-200 text-sm">{feature.description}</p>
                </div>
                <ChevronRight
                  className={cn(
                    "ml-auto self-center transition-transform",
                    activeFeature === feature.id
                      ? "text-gold-brown-400 translate-x-0"
                      : "text-deep-blue-400 -translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100",
                  )}
                />
              </motion.button>
            ))}
          </div>

          {/* Feature Image */}
          <div className="lg:col-span-7 relative">
            <div className="relative rounded-xl overflow-hidden border border-deep-blue-700 shadow-xl h-[400px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeFeature}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0"
                >
                  <Image
                    src={activeFeatureData?.image || ""}
                    alt={activeFeatureData?.title || ""}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-deep-blue-900/90 via-deep-blue-900/40 to-transparent" />

                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-xl font-bold text-white mb-2">{activeFeatureData?.title}</h3>
                    <p className="text-deep-blue-100">{activeFeatureData?.description}</p>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Decorative elements */}
              <div className="absolute top-4 right-4 w-20 h-20">
                <svg viewBox="0 0 100 100" className="w-full h-full text-gold-brown-500/20">
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeDasharray="6 4"
                  />
                  <circle cx="50" cy="50" r="20" fill="none" stroke="currentColor" strokeWidth="2" />
                </svg>
              </div>
            </div>

            {/* Floating badges */}
            <motion.div
              className="absolute -bottom-6 -left-6 bg-deep-blue-800 border border-gold-brown-500/30 rounded-lg p-3 shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-2">
                <div className="bg-green-500/20 p-1.5 rounded-full">
                  <Zap className="h-4 w-4 text-green-500" />
                </div>
                <div className="text-sm font-medium text-white">Aumento de 200% em conversões</div>
              </div>
            </motion.div>

            <motion.div
              className="absolute -top-6 right-12 bg-deep-blue-800 border border-gold-brown-500/30 rounded-lg p-3 shadow-lg"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-2">
                <div className="bg-blue-500/20 p-1.5 rounded-full">
                  <Users className="h-4 w-4 text-blue-500" />
                </div>
                <div className="text-sm font-medium text-white">87.000+ usuários ativos</div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

