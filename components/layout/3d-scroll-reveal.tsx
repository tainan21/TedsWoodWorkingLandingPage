"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"

export default function ScrollReveal() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [containerHeight, setContainerHeight] = useState(0)

  useEffect(() => {
    if (containerRef.current) {
      setContainerHeight(containerRef.current.offsetHeight)
    }
  }, [])

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const layer1Y = useTransform(scrollYProgress, [0, 1], [100, -100])
  const layer2Y = useTransform(scrollYProgress, [0, 1], [50, -50])
  const layer3Y = useTransform(scrollYProgress, [0, 1], [25, -25])
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8])

  return (
    <div ref={containerRef} className="relative h-[80vh] overflow-hidden">
      <div className="absolute inset-0 bg-[#5a3d2b]/10" />

      {/* Background wood texture */}
      <motion.div className="absolute inset-0 z-10" style={{ y: layer1Y }}>
        <Image
          src="/complete.png"
          alt="Wood texture"
          fill
          className="object-cover opacity-30"
        />
      </motion.div>

      {/* Middle layer with tools */}
      <motion.div
        className="absolute inset-0 z-20 flex items-center justify-center"
        style={{ y: layer2Y, opacity, scale }}
      >
        <div className="grid grid-cols-3 gap-8">
          <div className="flex h-32 w-32 items-center justify-center rounded-full bg-[#8B4513]/20 p-4 md:h-40 md:w-40">
            <Image
              src="/placeholder.svg?height=100&width=100"
              alt="Saw"
              width={100}
              height={100}
              className="object-contain"
            />
          </div>
          <div className="flex h-32 w-32 items-center justify-center rounded-full bg-[#8B4513]/20 p-4 md:h-40 md:w-40">
            <Image
              src="/placeholder.svg?height=100&width=100"
              alt="Hammer"
              width={100}
              height={100}
              className="object-contain"
            />
          </div>
          <div className="flex h-32 w-32 items-center justify-center rounded-full bg-[#8B4513]/20 p-4 md:h-40 md:w-40">
            <Image
              src="/placeholder.svg?height=100&width=100"
              alt="Drill"
              width={100}
              height={100}
              className="object-contain"
            />
          </div>
        </div>
      </motion.div>

      {/* Foreground content */}
      <motion.div className="absolute inset-0 z-30 flex items-center justify-center" style={{ y: layer3Y }}>
        <div className="mx-auto max-w-3xl text-center">
          <motion.h2 className="mb-6 text-3xl font-bold text-[#5a3d2b] md:text-4xl" style={{ opacity, scale }}>
            Craftsmanship in Every Detail
          </motion.h2>
          <motion.p className="text-lg text-[#5a3d2b]/80" style={{ opacity, scale }}>
            Our woodworking plans are designed with precision and care, ensuring that every joint, cut, and measurement
            is perfect. Experience the joy of creating beautiful wooden pieces with our detailed instructions.
          </motion.p>
        </div>
      </motion.div>
    </div>
  )
}

