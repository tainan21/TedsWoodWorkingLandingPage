"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function FloatingCTA() {
  const [isOpen, setIsOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    // Show the floating CTA after 5 seconds
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 5000)

    return () => clearTimeout(timer)
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      // Simulate form submission
      setTimeout(() => {
        setSubmitted(true)
        // Hide after 3 seconds
        setTimeout(() => {
          setIsOpen(false)
          // Reset for next time
          setTimeout(() => {
            setSubmitted(false)
            setEmail("")
          }, 500)
        }, 3000)
      }, 1000)
    }
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <div className="fixed bottom-6 right-6 z-50">
          <AnimatePresence mode="wait">
            {!isOpen ? (
              <motion.div
                key="button"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                whileHover={{ scale: 1.05 }}
                className="relative"
              >
                <Button
                  onClick={() => setIsOpen(true)}
                  className="h-14 w-14 rounded-full bg-gold-brown-500 hover:bg-gold-brown-600 text-deep-blue-900 shadow-lg"
                >
                  <MessageSquare className="h-6 w-6" />
                </Button>
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.5 }}
                  className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center"
                >
                  1
                </motion.div>
              </motion.div>
            ) : (
              <motion.div
                key="card"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 50, opacity: 0 }}
                className="bg-deep-blue-800 border border-deep-blue-700 rounded-lg shadow-xl p-4 w-80"
              >
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-bold text-white">{submitted ? "Obrigado!" : "Quer aumentar suas conversões?"}</h3>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-8 w-8 p-0 text-deep-blue-300 hover:text-white hover:bg-deep-blue-700"
                    onClick={() => setIsOpen(false)}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>

                <AnimatePresence mode="wait">
                  {!submitted ? (
                    <motion.div key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                      <p className="text-deep-blue-200 text-sm mb-4">
                        Receba dicas exclusivas para aumentar suas taxas de conversão em até 300%.
                      </p>
                      <form onSubmit={handleSubmit} className="space-y-3">
                        <Input
                          type="email"
                          placeholder="Seu melhor email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                          className="bg-deep-blue-900 border-deep-blue-700 text-white focus:border-gold-brown-500 focus:ring-gold-brown-500/30"
                        />
                        <Button
                          type="submit"
                          className="w-full bg-gold-brown-500 hover:bg-gold-brown-600 text-deep-blue-900 font-medium"
                        >
                          Receber Dicas Grátis
                        </Button>
                      </form>
                      <p className="text-deep-blue-400 text-xs mt-3 text-center">
                        Não enviamos spam. Você pode cancelar a qualquer momento.
                      </p>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="text-center py-4"
                    >
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-green-500/20 mb-3">
                        <svg className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <p className="text-deep-blue-100">Enviamos o material para seu email!</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      )}
    </AnimatePresence>
  )
}

