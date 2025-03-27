"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"

const projects = [
  {
    id: 1,
    title: "Dining Table",
    before: "/placeholder.svg?height=300&width=400",
    after: "/placeholder.svg?height=300&width=400",
    description: "From raw lumber to a beautiful farmhouse dining table",
  },
  {
    id: 2,
    title: "Bookshelf",
    before: "/placeholder.svg?height=300&width=400",
    after: "/placeholder.svg?height=300&width=400",
    description: "A simple bookshelf design transformed into an elegant storage solution",
  },
  {
    id: 3,
    title: "Garden Bench",
    before: "/placeholder.svg?height=300&width=400",
    after: "/placeholder.svg?height=300&width=400",
    description: "Basic materials crafted into a sturdy and beautiful outdoor bench",
  },
  {
    id: 4,
    title: "Coffee Table",
    before: "/placeholder.svg?height=300&width=400",
    after: "/placeholder.svg?height=300&width=400",
    description: "From concept to a stunning centerpiece for your living room",
  },
]

export default function BeforeAfterCards() {
  return (
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
      {projects.map((project) => (
        <FlipCard key={project.id} project={project} />
      ))}
    </div>
  )
}

function FlipCard({ project }: { project: (typeof projects)[0] }) {
  const [isFlipped, setIsFlipped] = useState(false)

  return (
    <div
      className="group h-80 w-full perspective-1000"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <motion.div
        className="relative h-full w-full transform-style-3d transition-all duration-500"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
      >
        {/* Front - Before */}
        <div className="absolute inset-0 backface-hidden rounded-lg shadow-lg">
          <div className="relative h-full w-full overflow-hidden rounded-lg">
            <Image
              src={project.before || "/placeholder.svg"}
              alt={`${project.title} before`}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/30" />
            <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center text-white">
              <h3 className="mb-2 text-xl font-bold">{project.title}</h3>
              <div className="rounded-full bg-[#d35400] px-3 py-1 text-sm font-medium">BEFORE</div>
            </div>
          </div>
        </div>

        {/* Back - After */}
        <div className="absolute inset-0 backface-hidden rounded-lg shadow-lg" style={{ transform: "rotateY(180deg)" }}>
          <div className="relative h-full w-full overflow-hidden rounded-lg">
            <Image
              src={project.after || "/placeholder.svg"}
              alt={`${project.title} after`}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/20" />
            <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center text-white">
              <h3 className="mb-2 text-xl font-bold">{project.title}</h3>
              <div className="mb-2 rounded-full bg-[#2e7d32] px-3 py-1 text-sm font-medium">AFTER</div>
              <p className="text-sm">{project.description}</p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

