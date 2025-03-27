"use client"

import { useEffect, useState } from "react"
import { motion, useAnimation } from "framer-motion"
import { Shield } from "lucide-react"

export default function FloatingGuarantee() {
  const controls = useAnimation()
  const [isVisible, setIsVisible] = useState(true)

  // Floating animation
  useEffect(() => {
    controls.start({
      y: [0, -10, 0],
      transition: {
        duration: 4,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
      },
    })
  }, [controls])

  // Hide on scroll down, show on scroll up
  useEffect(() => {
    let lastScrollY = window.scrollY

    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY > lastScrollY) {
        setIsVisible(false)
      } else {
        setIsVisible(true)
      }

      lastScrollY = currentScrollY
    }

    window.addEventListener("scroll", handleScroll, { passive: true })

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <motion.div
      className="fixed bottom-8 right-8 z-50 overflow-hidden rounded-full shadow-lg"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{
        opacity: isVisible ? 1 : 0,
        scale: isVisible ? 1 : 0.8,
        y: [0, -10, 0],
      }}
      transition={{
        opacity: { duration: 0.3 },
        scale: { duration: 0.3 },
        y: {
          duration: 4,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        },
      }}
    >
      <div className="group relative">
        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white p-2">
          <div className="flex h-full w-full flex-col items-center justify-center rounded-full bg-[#d35400] text-white">
            <Shield className="h-6 w-6" />
            <span className="text-xs font-bold">60-DAY</span>
            <span className="text-[10px]">GUARANTEE</span>
          </div>
        </div>

        {/* Pulsing effect */}
        <div
          className="absolute inset-0 -z-10 animate-ping rounded-full bg-[#d35400] opacity-30"
          style={{ animationDuration: "3s" }}
        ></div>

        {/* Tooltip */}
        <div className="absolute -top-16 left-1/2 w-48 -translate-x-1/2 rounded-lg bg-white p-2 text-center text-xs shadow-lg opacity-0 transition-opacity group-hover:opacity-100">
          <p className="font-medium text-[#5a3d2b]">60-Day Money Back Guarantee</p>
          <p className="text-[#5a3d2b]/70">Not satisfied? Get a full refund, no questions asked!</p>
          <div className="absolute -bottom-2 left-1/2 h-4 w-4 -translate-x-1/2 rotate-45 bg-white"></div>
        </div>
      </div>
    </motion.div>
  )
}

