"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const products = [
  {
    id: 1,
    title: "Step-by-Step Instructions",
    description:
      "Every plan includes clear, easy-to-follow instructions that guide you through each stage of the project, from cutting the first piece to applying the final finish.",
    image: "/img10.jpg",
  },
  {
    id: 2,
    title: "Detailed Materials Lists",
    description:
      "Know exactly what you need before you start. Our plans include comprehensive materials lists with quantities, dimensions, and recommended types of wood.",
    image: "/img11.jpg",
  },
  {
    id: 3,
    title: "Precise Cutting Diagrams",
    description:
      "Eliminate guesswork with our cutting diagrams that show you exactly how to cut each piece for maximum efficiency and minimal waste.",
    image: "/img9.jpg",
  },
  {
    id: 4,
    title: "3D Renderings & Schematics",
    description:
      "Visualize your project before you build with detailed 3D renderings and schematics that show every angle and joint connection.",
    image: "/img22.jpg",
  },
]

export default function ProductSlider() {
  const [current, setCurrent] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  const next = () => {
    setCurrent((current + 1) % products.length)
  }

  const prev = () => {
    setCurrent((current - 1 + products.length) % products.length)
  }

  useEffect(() => {
    if (!autoplay) return

    const interval = setInterval(next, 5000)
    return () => clearInterval(interval)
  }, [current, autoplay])

  return (
    <div className="relative mx-auto max-w-5xl overflow-hidden rounded-xl bg-white shadow-lg">
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {products.map((product) => (
          <div key={product.id} className="min-w-full">
            <div className="grid md:grid-cols-2">
              <div className="order-2 flex flex-col justify-center p-6 md:order-1">
                <h3 className="mb-4 text-2xl font-bold text-[#5a3d2b]">{product.title}</h3>
                <p className="text-[#5a3d2b]/80">{product.description}</p>
              </div>
              <div className="order-1 md:order-2">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.title}
                  width={600}
                  height={400}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      <Button
        variant="outline"
        size="icon"
        className="absolute left-4 top-1/2 h-10 w-10 -translate-y-1/2 rounded-full border-[#8B4513]/20 bg-white/80 text-[#5a3d2b] hover:bg-white hover:text-[#d35400]"
        onClick={prev}
        onMouseEnter={() => setAutoplay(false)}
        onMouseLeave={() => setAutoplay(true)}
      >
        <ChevronLeft className="h-5 w-5" />
        <span className="sr-only">Previous product</span>
      </Button>

      <Button
        variant="outline"
        size="icon"
        className="absolute right-4 top-1/2 h-10 w-10 -translate-y-1/2 rounded-full border-[#8B4513]/20 bg-white/80 text-[#5a3d2b] hover:bg-white hover:text-[#d35400]"
        onClick={next}
        onMouseEnter={() => setAutoplay(false)}
        onMouseLeave={() => setAutoplay(true)}
      >
        <ChevronRight className="h-5 w-5" />
        <span className="sr-only">Next product</span>
      </Button>

      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
        {products.map((_, index) => (
          <button
            key={index}
            className={`h-2 w-2 rounded-full ${current === index ? "bg-[#d35400]" : "bg-[#8B4513]/20"}`}
            onClick={() => setCurrent(index)}
            onMouseEnter={() => setAutoplay(false)}
            onMouseLeave={() => setAutoplay(true)}
          >
            <span className="sr-only">Go to slide {index + 1}</span>
          </button>
        ))}
      </div>
    </div>
  )
}

