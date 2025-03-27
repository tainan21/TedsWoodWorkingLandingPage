"use client"

import { useState, useEffect } from "react"
import { motion, useAnimation } from "framer-motion"
import { ShoppingCart } from "lucide-react"

export default function FloatingCart() {
  const [itemCount, setItemCount] = useState(0)
  const [isVisible, setIsVisible] = useState(true)
  const controls = useAnimation()

  // Bounce animation when scrolling past conversion points
  useEffect(() => {
    const conversionPoints = [
      document.getElementById("features"),
      document.getElementById("plans"),
      document.getElementById("about"),
    ]

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Animate the cart and increment the counter
            controls.start({
              scale: [1, 1.2, 1],
              transition: { duration: 0.5 },
            })

            setItemCount((prev) => Math.min(prev + 1, 16))
          }
        })
      },
      { threshold: 0.5 },
    )

    conversionPoints.forEach((point) => {
      if (point) observer.observe(point)
    })

    return () => {
      conversionPoints.forEach((point) => {
        if (point) observer.unobserve(point)
      })
    }
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
      className="fixed bottom-8 left-8 z-40"
      animate={controls}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{
        opacity: isVisible ? 1 : 0,
        scale: isVisible ? 1 : 0.8,
      }}
      transition={{ duration: 0.3 }}
    >
      <motion.button
        className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-[#d35400] text-white shadow-lg hover:bg-[#a04000]"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <ShoppingCart className="h-6 w-6" />

        {itemCount > 0 && (
          <motion.div
            className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-[#5a3d2b] text-xs font-bold text-white"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 500, damping: 30 }}
          >
            {itemCount}
          </motion.div>
        )}

        {/* Tooltip */}
        <div className="absolute -top-10 left-1/2 w-32 -translate-x-1/2 rounded-lg bg-white p-2 text-center text-xs shadow-lg opacity-0 transition-opacity group-hover:opacity-100">
          <p className="font-medium text-[#5a3d2b]">Your Cart</p>
          <div className="absolute -bottom-1 left-1/2 h-2 w-2 -translate-x-1/2 rotate-45 bg-white"></div>
        </div>
      </motion.button>
    </motion.div>
  )
}

