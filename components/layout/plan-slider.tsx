"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const plans = [
  {
    id: 1,
    title: "All Plans",
    description: "Garden benches, picnic tables, planters, and more for your outdoor space.",
    image: "/complete.png",
    count: "16000+ Plans",
  },
  {
    id: 2,
    title: "DWG/CAD Plan Viewer",
    description: "The first bonus is the award winning DWG/CAD Plan Viewer. Now you don't have to pay for overpriced CAD software",
    image: "/cad-dwg-software.jpg",
    count: "5,000+ Plans",
  },
  {
    id: 3,
    title: "150 WoodWorking Vídeos",
    description: "You're also going to receive lifetime membership access to over 150 premium woodworking videos on a wide array of woodworking topics, hosted by veteran woodworkers.",
    image: "/150woodworking-videos.jpg",
    count: "150Vídeos + Plans",
  },
  {
    id: 4,
    title: "How To Start A Woodworking Business",
    description: "Workbenches, tool storage, jigs, and other projects to improve your workshop.",
    image: "/img48.jpg",
    count: "1,500+ Plans",
  },
  {
    id: 5,
    title: "Complete Woodworking Guides",
    description: "Shelving, storage solutions, and other projects to enhance your living space.",
    image: "/img49.jpg",
    count: "4,000+ Plans",
  },
]

export default function PlanSlider() {
  const [current, setCurrent] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  const visiblePlans = 3
  const maxIndex = plans.length - visiblePlans

  const next = () => {
    setCurrent((prev) => (prev >= maxIndex ? 0 : prev + 1))
  }

  const prev = () => {
    setCurrent((prev) => (prev <= 0 ? maxIndex : prev - 1))
  }

  useEffect(() => {
    if (!autoplay) return

    const interval = setInterval(next, 5000)
    return () => clearInterval(interval)
  }, [current, autoplay])

  return (
    <div className="relative mx-auto max-w-6xl">
      <div className="overflow-hidden px-4">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${current * (100 / visiblePlans)}%)`,
          }}
        >
          {plans.map((plan) => (
            <div
              key={plan.id}
              className="min-w-[calc(100%/3)] px-4 md:min-w-[calc(100%/3)]"
              style={{
                minWidth: `calc(100% / ${visiblePlans})`,
              }}
            >
              <div className="overflow-hidden rounded-xl bg-white shadow-md transition-all hover:shadow-lg">
                <div className="relative h-48">
                  <Image src={plan.image || "/placeholder.svg"} alt={plan.title} fill className="object-cover" />
                  <div className="absolute bottom-0 right-0 bg-[#d35400] px-3 py-1 text-sm font-medium text-white">
                    {plan.count}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="mb-2 text-xl font-bold text-[#5a3d2b]">{plan.title}</h3>
                  <p className="text-sm text-[#5a3d2b]/80">{plan.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Button
        variant="outline"
        size="icon"
        className="absolute -left-5 top-1/2 h-10 w-10 -translate-y-1/2 rounded-full border-[#8B4513]/20 bg-white text-[#5a3d2b] hover:bg-white hover:text-[#d35400] shadow-md"
        onClick={prev}
        onMouseEnter={() => setAutoplay(false)}
        onMouseLeave={() => setAutoplay(true)}
        disabled={current <= 0}
      >
        <ChevronLeft className="h-5 w-5" />
        <span className="sr-only">Previous plans</span>
      </Button>

      <Button
        variant="outline"
        size="icon"
        className="absolute -right-5 top-1/2 h-10 w-10 -translate-y-1/2 rounded-full border-[#8B4513]/20 bg-white text-[#5a3d2b] hover:bg-white hover:text-[#d35400] shadow-md"
        onClick={next}
        onMouseEnter={() => setAutoplay(false)}
        onMouseLeave={() => setAutoplay(true)}
        disabled={current >= maxIndex}
      >
        <ChevronRight className="h-5 w-5" />
        <span className="sr-only">Next plans</span>
      </Button>
    </div>
  )
}

