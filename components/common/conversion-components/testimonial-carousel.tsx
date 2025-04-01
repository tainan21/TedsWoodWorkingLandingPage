"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react"
import { useLocalization } from "@/components/localization-provider"

const testimonials = [
  {
    id: 1,
    quote:
      "Aumentamos nossas conversões em 215% no primeiro mês de uso. O investimento se pagou em menos de uma semana.",
    author: "Ana Silva",
    role: "CEO, TechStart",
    avatar: "/placeholder.svg?height=200&width=200&text=AS",
    image: "/placeholder.svg?height=600&width=800&text=TechStart+Dashboard",
    rating: 5,
    stats: {
      conversion: "+215%",
      revenue: "+187%",
      roi: "12x",
    },
  },
  {
    id: 2,
    quote:
      "A facilidade de uso e os resultados rápidos me impressionaram. Nunca vi uma ferramenta tão eficiente para aumentar vendas.",
    author: "Carlos Mendes",
    role: "Diretor de Marketing, Grupo Inova",
    avatar: "/placeholder.svg?height=200&width=200&text=CM",
    image: "/placeholder.svg?height=600&width=800&text=Grupo+Inova+Results",
    rating: 5,
    stats: {
      conversion: "+178%",
      revenue: "+156%",
      roi: "9x",
    },
  },
  {
    id: 3,
    quote:
      "O suporte é incrível e as páginas converteram muito melhor do que esperávamos. Recomendo para qualquer negócio.",
    author: "Juliana Costa",
    role: "Empreendedora, Bella Moda",
    avatar: "/placeholder.svg?height=200&width=200&text=JC",
    image: "/placeholder.svg?height=600&width=800&text=Bella+Moda+Store",
    rating: 5,
    stats: {
      conversion: "+192%",
      revenue: "+210%",
      roi: "11x",
    },
  },
  {
    id: 4,
    quote: "Implementamos em nosso e-commerce e as vendas aumentaram 178% em apenas 2 meses. Resultado impressionante!",
    author: "Roberto Almeida",
    role: "Diretor, MegaStore",
    avatar: "/placeholder.svg?height=200&width=200&text=RA",
    image: "/placeholder.svg?height=600&width=800&text=MegaStore+Growth",
    rating: 5,
    stats: {
      conversion: "+178%",
      revenue: "+203%",
      roi: "8.5x",
    },
  },
]

export function TestimonialCarousel() {
  const [current, setCurrent] = useState(0)
  const [autoplay, setAutoplay] = useState(true)
  const { t } = useLocalization()

  useEffect(() => {
    if (!autoplay) return

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [autoplay])

  const next = () => {
    setAutoplay(false)
    setCurrent((prev) => (prev + 1) % testimonials.length)
  }

  const prev = () => {
    setAutoplay(false)
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const goTo = (index: number) => {
    setAutoplay(false)
    setCurrent(index)
  }

  const testimonial = testimonials[current]

  return (
    <section className="py-16 bg-deep-blue-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial from-deep-blue-900/20 to-transparent"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-block rounded-lg bg-gold-brown-500/20 px-3 py-1 text-sm text-gold-brown-300 border border-gold-brown-500/30 mb-4">
            Histórias de Sucesso
          </div>
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight mb-4">
            <span className="bg-gradient-to-r from-white to-gold-brown-300 bg-clip-text text-transparent">
              Resultados reais de nossos clientes
            </span>
          </h2>
          <p className="max-w-2xl mx-auto text-deep-blue-200">
            Veja como empresas como a sua estão transformando seus negócios com nossa plataforma.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Testimonial Content */}
          <div className="bg-deep-blue-800/50 border border-deep-blue-700 rounded-xl p-8 relative">
            <Quote className="absolute top-6 left-6 h-24 w-24 text-gold-brown-500/10" />

            <AnimatePresence mode="wait">
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="relative z-10"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="relative h-16 w-16 overflow-hidden rounded-full border-2 border-gold-brown-500/50">
                    <Image
                      src={testimonial.avatar || "/placeholder.svg"}
                      alt={testimonial.author}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-lg">{testimonial.author}</h3>
                    <p className="text-deep-blue-300">{testimonial.role}</p>
                  </div>
                </div>

                <blockquote className="text-xl text-deep-blue-100 mb-8 relative">"{testimonial.quote}"</blockquote>

                <div className="flex items-center gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${i < testimonial.rating ? "fill-gold-brown-400 text-gold-brown-400" : "text-deep-blue-400"}`}
                    />
                  ))}
                </div>

                <div className="grid grid-cols-3 gap-4 mt-8">
                  <div className="bg-deep-blue-900/50 border border-deep-blue-700 rounded-lg p-4 text-center">
                    <p className="text-xs text-deep-blue-300 mb-1">Conversão</p>
                    <p className="text-xl font-bold text-gold-brown-400">{testimonial.stats.conversion}</p>
                  </div>
                  <div className="bg-deep-blue-900/50 border border-deep-blue-700 rounded-lg p-4 text-center">
                    <p className="text-xs text-deep-blue-300 mb-1">Receita</p>
                    <p className="text-xl font-bold text-gold-brown-400">{testimonial.stats.revenue}</p>
                  </div>
                  <div className="bg-deep-blue-900/50 border border-deep-blue-700 rounded-lg p-4 text-center">
                    <p className="text-xs text-deep-blue-300 mb-1">ROI</p>
                    <p className="text-xl font-bold text-gold-brown-400">{testimonial.stats.roi}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Testimonial Image */}
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                transition={{ duration: 0.4 }}
                className="relative rounded-xl overflow-hidden border border-deep-blue-700 shadow-xl aspect-video"
              >
                <Image
                  src={testimonial.image || "/placeholder.svg"}
                  alt={`${testimonial.author} results`}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deep-blue-900/80 via-deep-blue-900/20 to-transparent" />
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 flex items-center gap-2 bg-deep-blue-800 border border-deep-blue-700 rounded-full p-1 shadow-lg">
              <button
                onClick={prev}
                className="p-2 rounded-full hover:bg-deep-blue-700 text-deep-blue-200 hover:text-white transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>

              <div className="flex items-center gap-1 px-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goTo(index)}
                    className={`h-2 w-2 rounded-full transition-all ${
                      current === index ? "bg-gold-brown-400 w-4" : "bg-deep-blue-600 hover:bg-deep-blue-500"
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={next}
                className="p-2 rounded-full hover:bg-deep-blue-700 text-deep-blue-200 hover:text-white transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

