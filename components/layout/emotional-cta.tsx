"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
export default function EmotionalCTA() {
  const containerRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  // Transform grayscale to color based on scroll
  const grayscale = useTransform(scrollYProgress, [0, 0.5], [100, 0])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0.5, 1])
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.95, 1])

  return (
    <div ref={containerRef} className="relative overflow-hidden py-24">
      {/* Background image */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{
          filter: `grayscale(${grayscale}%)`,
          opacity,
          scale,
        }}
      >
        <Image src="/complete.png" alt="Woodworking journey" fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/40" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl"
        >
          <h2 className="mb-6 text-3xl font-bold md:text-4xl lg:text-5xl">Start Your Woodworking Journey Today</h2>
          <p className="mb-8 text-lg text-white/90 md:text-xl">
            Join thousands of woodworkers who have discovered the joy of creating beautiful, handcrafted pieces. Your
            journey begins with a single step.
          </p>

          <motion.div
            whileInView={{
              scale: [1, 1.05, 1],
              transition: {
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
                duration: 2,
              },
            }}
            viewport={{ once: true }}
          >
            <Link href="https://orders.clickbank.net/?cbfid=13103&cbitems=8&corid=baa1eac4-0789-4867-9c02-e99d77ff5cdc&hopId=e52f7094-af3a-4a20-b745-8efd02dcb7ad&oaref=01.77DE3D3A119DF91E12ECE773763DD534AF522216987F20A8541FB804404292F5A5ADC7F6&template=20357&time=1742480124&vtid=tedplandiy&vvvv=tedsplans&vvar=cbfid%3D13103%26cbitems%3D8%26cbskin%3D20357%26vtid%3Dtedplandiy">
            <Button className="group h-14 px-8 text-lg bg-[#d35400] hover:bg-[#a04000] text-white">
              Begin Your Woodworking Journey
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            </Link>
          </motion.div>

          <p className="mt-4 text-sm text-white/70">16,000 plans. Lifetime access. 60-day money back guarantee.</p>
        </motion.div>
      </div>
    </div>
  )
}

