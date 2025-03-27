"use client"

import { useEffect, useState, useRef } from "react"
import Image from "next/image"
import { motion } from "framer-motion"

const images = [
  { id: 1, src: "/wooden1.jpg", alt: "Outdoor bench plans" },
  { id: 2, src: "/wooden2.jpg", alt: "Cabinet designs" },
  { id: 3, src: "/wooden3.jpg", alt: "Dining table plans" },
  { id: 4, src: "/wooden4.jpg", alt: "Bookshelf designs" },
  { id: 5, src: "/wooden5.jpg", alt: "Garden planter plans" },
  { id: 6, src: "/wooden6.png", alt: "Wooden toys" },
  { id: 7, src: "/wooden7.jpg", alt: "Coffee table designs" },
  { id: 8, src: "/wooden8.jpg", alt: "Bed frame plans" },
  { id: 9, src: "/wooden9.jpg", alt: "Workshop storage" },
  { id: 10, src: "/wooden10.jpg", alt: "Wooden chair designs" },
  { id: 11, src: "/wooden11.jpg", alt: "Jewelry box plans" },
  { id: 12, src: "/wooden12.jpg", alt: "Outdoor deck plans" },
]

export default function DynamicShowcaseGrid() {
  const [shuffledImages, setShuffledImages] = useState(images)
  const gridRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  // Shuffle images function
  const shuffleImages = () => {
    const newImages = [...shuffledImages]
    for (let i = newImages.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[newImages[i], newImages[j]] = [newImages[j], newImages[i]]
    }
    setShuffledImages(newImages)
  }

  // Intersection observer to detect when grid is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (gridRef.current) {
      observer.observe(gridRef.current)
    }

    return () => {
      if (gridRef.current) {
        observer.unobserve(gridRef.current)
      }
    }
  }, [])

  // Shuffle images periodically when in view
  useEffect(() => {
    if (!isVisible) return

    const interval = setInterval(() => {
      shuffleImages()
    }, 5000)

    return () => clearInterval(interval)
  }, [isVisible, shuffledImages])

  return (
    <div ref={gridRef} className="overflow-hidden">
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
        {shuffledImages.map((image, index) => (
          <motion.div
            key={image.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: isVisible ? 1 : 0,
              y: isVisible ? 0 : 20,
              transition: {
                duration: 0.5,
                delay: index * 0.1,
                ease: "easeOut",
              },
            }}
            className="group relative overflow-hidden rounded-lg"
          >
            <div className="aspect-square overflow-hidden">
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                width={300}
                height={300}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/70 to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <p className="text-sm font-medium text-white">{image.alt}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

