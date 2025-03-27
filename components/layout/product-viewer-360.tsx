"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { RotateCw } from "lucide-react"

// Generate array of image paths for 360 rotation
const generateImagePaths = () => {
  const paths = []
  for (let i = 1; i <= 6; i++) {
    paths.push(`/customproject${i}.jpg`)
  }
  return paths
}

const imagePaths = generateImagePaths()

export default function ProductViewer360() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true)
    setStartX(e.clientX)
  }

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true)
    setStartX(e.touches[0].clientX)
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return

    const deltaX = e.clientX - startX
    handleRotation(deltaX)
    setStartX(e.clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return

    const deltaX = e.touches[0].clientX - startX
    handleRotation(deltaX)
    setStartX(e.touches[0].clientX)
  }

  const handleRotation = (deltaX: number) => {
    if (Math.abs(deltaX) < 5) return

    const direction = deltaX > 0 ? -1 : 1
    setCurrentIndex((prev) => {
      let newIndex = prev + direction
      if (newIndex < 0) newIndex = imagePaths.length - 1
      if (newIndex >= imagePaths.length) newIndex = 0
      return newIndex
    })
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  const handleTouchEnd = () => {
    setIsDragging(false)
  }

  // Auto-rotate when not interacting
  useEffect(() => {
    if (isDragging) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % imagePaths.length)
    }, 1000)

    return () => clearInterval(interval)
  }, [isDragging])

  return (
    <div className="mx-auto max-w-lg text-center">
      <h3 className="mb-4 text-xl font-bold text-[#5a3d2b]">Explore Our Planss</h3>
      <p className="mb-6 text-[#5a3d2b]/80">Drag left or right to rotate and see different woodworking projects</p>

      <div
        ref={containerRef}
        className="relative aspect-square w-full h-full cursor-grab overflow-hidden rounded-lg bg-[#f9f5f0] shadow-lg active:cursor-grabbing"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Current image */}
        <Image
          src={imagePaths[currentIndex] || "/placeholder.svg"}
          alt={`Product view ${currentIndex + 1}`}
          fill
          className="object-contain p-4"
        />

        {/* Drag indicator overlay */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <motion.div
            className="flex h-16 w-16 items-center justify-center rounded-full bg-[#5a3d2b]/10"
            animate={{ opacity: isDragging ? 0 : 0.8 }}
          >
            {/* <RotateCw className="h-8 w-8 text-[#5a3d2b]/50" /> */}
          </motion.div>
        </div>

        {/* Progress indicator */}
        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-1">
          {imagePaths.map((_, index) => (
            <div
              key={index}
              className={`h-1.5 w-1.5 rounded-full ${index === currentIndex ? "bg-[#d35400]" : "bg-[#5a3d2b]/20"}`}
            />
          ))}
        </div>
      </div>

      <p className="mt-4 text-sm text-[#5a3d2b]/70">
        View {currentIndex + 1} of {imagePaths.length}
      </p>
    </div>
  )
}

