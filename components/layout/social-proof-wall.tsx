"use client"

import { useEffect, useState, useRef } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Star, Instagram } from "lucide-react"

// Generate social proof data
const generateSocialProofs = () => {
  const proofs = []
  for (let i = 1; i <= 12; i++) {
    proofs.push({
      id: i,
      username: `woodworker${i}`,
      image: `/videoinsta${i}.jpg `,
      comment: `I built this ${i % 3 === 0 ? "table" : i % 3 === 1 ? "shelf" : "chair"} using the plans. So happy with how it turned out!`,
      likes: Math.floor(Math.random() * 100) + 10,
      platform: i % 3 === 0 ? "Instagram" : i % 3 === 1 ? "Facebook" : "Twitter",
      rating: Math.min(5, Math.floor(Math.random() * 2) + 4),
    })
  }
  return proofs
}

const socialProofs = generateSocialProofs()

export default function SocialProofWall() {
  const [visibleProofs, setVisibleProofs] = useState(socialProofs.slice(0, 6))
  const [isLoading, setIsLoading] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  // Simulate loading more content when scrolling
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && visibleProofs.length < socialProofs.length && !isLoading) {
          loadMoreProofs()
        }
      },
      { threshold: 0.5 },
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current)
      }
    }
  }, [visibleProofs, isLoading])

  const loadMoreProofs = () => {
    setIsLoading(true)

    // Simulate API delay
    setTimeout(() => {
      const nextBatch = socialProofs.slice(visibleProofs.length, visibleProofs.length + 3)
      setVisibleProofs([...visibleProofs, ...nextBatch])
      setIsLoading(false)
    }, 1500)
  }

  return (
    <div>
      <div className="mb-8 text-center">
        <h3 className="mb-2 text-2xl font-bold text-[#5a3d2b] md:text-3xl">See What Our Community Is Building</h3>
        <p className="text-[#5a3d2b]/80">Real projects from real woodworkers using our plans</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
        <AnimatePresence>
          {visibleProofs.map((proof, index) => (
            <motion.div
              key={proof.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group overflow-hidden rounded-lg bg-white shadow-md transition-all hover:shadow-lg"
            >
              <div className="relative aspect-square">
                <Image
                  src={proof.image || "/placeholder.svg"}
                  alt={`Project by ${proof.username}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-white">
                        <Instagram className="h-3 w-3 text-[#5a3d2b]" />
                      </div>
                      <span className="text-sm font-medium text-white">@{proof.username}</span>
                    </div>
                    <div className="flex">
                      {[...Array(proof.rating)].map((_, i) => (
                        <Star key={i} className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <p className="text-sm text-[#5a3d2b]/80">{proof.comment}</p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {visibleProofs.length < socialProofs.length && (
        <div ref={containerRef} className="mt-8 text-center">
          {isLoading ? (
            <div className="inline-flex items-center gap-2">
              <div className="h-4 w-4 animate-spin rounded-full border-2 border-[#d35400] border-t-transparent"></div>
              <span className="text-sm text-[#5a3d2b]/70">Loading more...</span>
            </div>
          ) : (
            <button
              className="rounded-lg border border-[#e0d5c8] px-4 py-2 text-sm text-[#5a3d2b] transition-colors hover:border-[#d35400] hover:text-[#d35400]"
              onClick={loadMoreProofs}
            >
              Load More
            </button>
          )}
        </div>
      )}
    </div>
  )
}

