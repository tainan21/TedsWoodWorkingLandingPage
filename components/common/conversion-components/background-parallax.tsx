"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useLocalization } from "@/components/localization-provider"

export function BackgroundParallaxSection() {
  const { t } = useLocalization()
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, 200])
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1])

  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  return (
    <section ref={ref} className="relative h-[80vh] overflow-hidden">
      {/* Parallax Background */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{
          y: isMobile ? 0 : y,
          scale,
        }}
      >
        <Image src="/placeholder.svg?height=1080&width=1920" alt="Parallax background" fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-deep-blue-950 via-deep-blue-900/70 to-transparent" />
      </motion.div>

      {/* Content */}
      <motion.div
        className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4"
        style={{ opacity }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
            Turn Your Passion{" "}
            <span className="bg-gradient-to-r from-white to-gold-brown-300 bg-clip-text text-transparent">
              into Profit!
            </span>
          </h2>
          <p className="text-xl text-deep-blue-100 mb-8 max-w-2xl mx-auto">
            Ever thought about making money with your carpentry? Discover how thousands of people are creating amazing projects and turning DIY skills into a real extra income.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gold-brown-500 hover:bg-gold-brown-600 text-deep-blue-900 font-medium group"
              onClick={() => window.location.href = "/conversion"}
            >
              I Want to Start Now!
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-gold-brown-500/50 text-white hover:bg-deep-blue-800 hover:text-gold-brown-300"
              onClick={() => window.location.href = "/conversion"}
            >
              See Successful Projects
            </Button>
          </div>
        </motion.div>
      </motion.div>

      {/* Floating Elements */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-20 h-20 rounded-full bg-gold-brown-500/20 blur-xl"
        animate={{
          y: [0, -30, 0],
          opacity: [0.4, 0.6, 0.4],
        }}
        transition={{
          duration: 5,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
      />
      <motion.div
        className="absolute bottom-1/3 right-1/4 w-32 h-32 rounded-full bg-deep-blue-500/20 blur-xl"
        animate={{
          y: [0, 40, 0],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 7,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
          delay: 1,
        }}
      />
    </section>
  )
}
