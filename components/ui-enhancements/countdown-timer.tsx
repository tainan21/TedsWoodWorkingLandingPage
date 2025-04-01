"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Clock, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface CountdownTimerProps {
  endDate: Date
  title?: string
  description?: string
  ctaText?: string
  ctaLink?: string
}

export function CountdownTimer({
  endDate,
  title = "Limited Time Offer",
  description = "Get 50% off all woodworking plans in this special bundle",
  ctaText = "Claim Your Discount Now",
  ctaLink = "#",
}: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = endDate.getTime() - new Date().getTime()

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        })
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
      }
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)

    return () => clearInterval(timer)
  }, [endDate])

  const formatNumber = (num: number) => {
    return num < 10 ? `0${num}` : num.toString()
  }

  return (
    <div className="bg-deep-blue-800/80 border border-deep-blue-700 rounded-lg p-6 shadow-lg">
      <div className="flex items-start gap-3 mb-4">
        <Clock className="h-6 w-6 text-gold-brown-400 mt-1" />
        <div>
          <h3 className="text-xl font-bold text-white">{title}</h3>
          <p className="text-deep-blue-200 text-sm">{description}</p>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-2 mb-6">
        <div className="bg-deep-blue-900 border border-deep-blue-700 rounded-lg p-3 text-center">
          <div className="text-2xl font-bold text-gold-brown-400">{formatNumber(timeLeft.days)}</div>
          <div className="text-xs text-deep-blue-300 uppercase">Days</div>
        </div>

        <div className="bg-deep-blue-900 border border-deep-blue-700 rounded-lg p-3 text-center">
          <div className="text-2xl font-bold text-gold-brown-400">{formatNumber(timeLeft.hours)}</div>
          <div className="text-xs text-deep-blue-300 uppercase">Hours</div>
        </div>

        <div className="bg-deep-blue-900 border border-deep-blue-700 rounded-lg p-3 text-center">
          <div className="text-2xl font-bold text-gold-brown-400">{formatNumber(timeLeft.minutes)}</div>
          <div className="text-xs text-deep-blue-300 uppercase">Min</div>
        </div>

        <div className="bg-deep-blue-900 border border-deep-blue-700 rounded-lg p-3 text-center">
          <motion.div
            className="text-2xl font-bold text-gold-brown-400"
            key={timeLeft.seconds}
            initial={{ opacity: 0.5 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            {formatNumber(timeLeft.seconds)}
          </motion.div>
          <div className="text-xs text-deep-blue-300 uppercase">Sec</div>
        </div>
      </div>

      <Button className="w-full bg-gold-brown-500 hover:bg-gold-brown-600 text-deep-blue-900 font-medium group" asChild>
        <a href={ctaLink}>
          {ctaText}
          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </a>
      </Button>
    </div>
  )
}

