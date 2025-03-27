"use client"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Send, X, Bot } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

// Predefined responses for the AI assistant
const responses = {
  greeting: "Hi there! I'm your woodworking assistant. How can I help you today?",
  default: "I'd be happy to help you with that. Our woodworking plans cover a wide range of projects.",
  beginner:
    "For beginners, I recommend starting with our simple bookshelf or small box projects. They require minimal tools and are great for learning the basics.",
  tools:
    "The essential tools you'll need are a saw, drill, measuring tape, square, and sandpaper. As you advance, you might want to add a router, miter saw, and table saw.",
  wood: "For beginners, pine is affordable and easy to work with. Oak and maple are more durable but harder. Cherry and walnut are beautiful for fine furniture.",
  finish:
    "Popular finishes include polyurethane for durability, Danish oil for a natural look, or paint for a colorful finish. Always sand between coats for the best results.",
  plans:
    "We have over 16,000 plans including furniture, outdoor projects, crafts, and home improvement. What type of project are you interested in?",
}

type Message = {
  id: number
  text: string
  sender: "user" | "ai"
  isTyping?: boolean
}

export default function AIWoodworkingAssistant() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([{ id: 1, text: responses.greeting, sender: "ai" }])
  const [input, setInput] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  // Auto-scroll to bottom of messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  const handleSendMessage = () => {
    if (!input.trim()) return

    // Add user message
    const userMessage: Message = {
      id: messages.length + 1,
      text: input,
      sender: "user",
    }

    setMessages([...messages, userMessage])
    setInput("")
    setIsTyping(true)

    // Simulate AI thinking and typing
    setTimeout(() => {
      // Add AI response based on keywords in user input
      let responseText = responses.default
      const lowerInput = input.toLowerCase()

      if (lowerInput.includes("beginner") || lowerInput.includes("start")) {
        responseText = responses.beginner
      } else if (lowerInput.includes("tool")) {
        responseText = responses.tools
      } else if (lowerInput.includes("wood") || lowerInput.includes("material")) {
        responseText = responses.wood
      } else if (lowerInput.includes("finish") || lowerInput.includes("stain") || lowerInput.includes("paint")) {
        responseText = responses.finish
      } else if (lowerInput.includes("plan") || lowerInput.includes("project")) {
        responseText = responses.plans
      }

      const aiMessage: Message = {
        id: messages.length + 2,
        text: responseText,
        sender: "ai",
      }

      setIsTyping(false)
      setMessages((prev) => [...prev, aiMessage])
    }, 1500)
  }

  return (
    <>
      {/* Chat button */}
      <motion.button
        className="fixed bottom-8 right-8 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#5a3d2b] text-white shadow-lg hover:bg-[#4a3121]"
        onClick={() => setIsOpen(true)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <Bot className="h-6 w-6" />
      </motion.button>

      {/* Chat window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed bottom-8 right-8 z-50 w-full max-w-md overflow-hidden rounded-lg bg-white shadow-xl sm:bottom-24"
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            transition={{ duration: 0.3 }}
          >
            {/* Header */}
            <div className="flex items-center justify-between bg-[#5a3d2b] p-4 text-white">
              <div className="flex items-center gap-2">
                <Bot className="h-5 w-5" />
                <h3 className="font-medium">Woodworking Assistant</h3>
              </div>
              <button onClick={() => setIsOpen(false)} className="rounded-full p-1 hover:bg-white/10">
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Messages */}
            <div className="h-80 overflow-y-auto p-4">
              <AnimatePresence>
                {messages.map((message) => (
                  <motion.div
                    key={message.id}
                    className={`mb-4 flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div
                      className={`max-w-[80%] rounded-lg p-3 ${
                        message.sender === "user" ? "bg-[#d35400] text-white" : "bg-[#f9f5f0] text-[#5a3d2b]"
                      }`}
                    >
                      {message.sender === "ai" ? <TypewriterText text={message.text} /> : <p>{message.text}</p>}
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>

              {isTyping && (
                <motion.div
                  className="mb-4 flex justify-start"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="max-w-[80%] rounded-lg bg-[#f9f5f0] p-3 text-[#5a3d2b]">
                    <div className="flex items-center gap-1">
                      <div className="h-2 w-2 animate-bounce rounded-full bg-[#5a3d2b]/60 [animation-delay:0ms]"></div>
                      <div className="h-2 w-2 animate-bounce rounded-full bg-[#5a3d2b]/60 [animation-delay:150ms]"></div>
                      <div className="h-2 w-2 animate-bounce rounded-full bg-[#5a3d2b]/60 [animation-delay:300ms]"></div>
                    </div>
                  </div>
                </motion.div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="border-t border-gray-200 p-4">
              <form
                className="flex gap-2"
                onSubmit={(e) => {
                  e.preventDefault()
                  handleSendMessage()
                }}
              >
                <Input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask about woodworking..."
                  className="flex-1 border-[#e0d5c8] focus-visible:ring-[#d35400]"
                />
                <Button type="submit" className="bg-[#d35400] hover:bg-[#a04000]" disabled={!input.trim() || isTyping}>
                  <Send className="h-4 w-4" />
                </Button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

// Typewriter effect component
function TypewriterText({ text }: { text: string }) {
  const [displayedText, setDisplayedText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[currentIndex])
        setCurrentIndex((prev) => prev + 1)
      }, 20) // Speed of typing

      return () => clearTimeout(timeout)
    }
  }, [currentIndex, text])

  // Reset when text changes
  useEffect(() => {
    setDisplayedText("")
    setCurrentIndex(0)
  }, [text])

  return <p>{displayedText}</p>
}

