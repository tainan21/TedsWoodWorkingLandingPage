"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Michael Johnson",
    location: "Portland, OR",
    image: "/testemonial1.jpg",
    text: "I've been woodworking for 15 years, and these are by far the best plans I've ever used. The level of detail is incredible, and I've completed projects I never thought I could tackle.",
    stars: 5,
    project: "/Cabinet.jpg",
    projectName: "Kitchen Cabinet",
  },
  {
    name: "Sarah Williams",
    location: "Austin, TX",
    image: "/testemonial2.jpg",
    text: "As a beginner, I was intimidated by woodworking. Ted's plans made it so easy to get started. The instructions are crystal clear, and I'm amazed at what I've been able to build!",
    stars: 5,
    project: "/Bench.jpg",
    projectName: "Garden Bench",
  },
  {
    name: "Robert Chen",
    location: "Chicago, IL",
    image: "/testemonial3.jpg",
    text: "The material lists are spot-on. No more wasted trips to the hardware store or buying too much lumber. These plans have saved me time and money on every project.",
    stars: 5,
    project: "/Desk.jpg",
    projectName: "Home Office Desk",
  },
  {
    name: "Jennifer Lopez",
    location: "Miami, FL",
    image: "/testemonial4.jpg",
    text: "I bought TedsWoodworking for my husband as a gift, and now we're building projects together every weekend. The plans are so easy to follow that even I can help!",
    stars: 5,
    project: "/Bookshelf.jpg",
    projectName: "Built-in Bookshelf",
  },
  {
    name: "David Wilson",
    location: "Seattle, WA",
    image: "/testemonial1.jpg",
    text: "The variety of plans is incredible. From small weekend projects to furniture that becomes a family heirloom, there's something for every skill level and interest.",
    stars: 5,
    project: "/Table.jpg",
    projectName: "Dining Table",
  },
  {
    name: "Amanda Taylor",
    location: "Denver, CO",
    image: "/testemonial1.jpg",
    text: "The 3D diagrams and exploded views make visualization so much easier. I can see exactly how everything fits together before making a single cut.",
    stars: 5,
    project: "/Cradle.jpg",
    projectName: "Baby Cradle",
  },
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [visibleTestimonials, setVisibleTestimonials] = useState(3)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setVisibleTestimonials(1)
      } else if (window.innerWidth < 1024) {
        setVisibleTestimonials(2)
      } else {
        setVisibleTestimonials(3)
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % (testimonials.length - visibleTestimonials + 1))
    }, 5000)
    return () => clearInterval(interval)
  }, [visibleTestimonials])

  return (
    <div className="relative">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * (100 / visibleTestimonials)}%)` }}
        >
          {testimonials.map((testimonial, index) => (
            <div key={index} className="px-2" style={{ flex: `0 0 ${100 / visibleTestimonials}%` }}>
              <Card className="h-full border-amber-100">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="rounded-full overflow-hidden h-12 w-12 relative">
                      <Image
                        src={testimonial.image || "/placeholder.svg"}
                        alt={`${testimonial.name}'s portrait`}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-bold">{testimonial.name}</p>
                      <p className="text-sm text-gray-500">{testimonial.location}</p>
                    </div>
                  </div>
                  <div className="flex text-amber-400">
                    {[...Array(testimonial.stars)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600">"{testimonial.text}"</p>
                  <div className="pt-4">
                    <p className="text-sm font-medium mb-2">Project built:</p>
                    <div className="relative h-40 rounded-md overflow-hidden">
                      <Image
                        src={testimonial.project || "/placeholder.svg"}
                        alt={testimonial.projectName}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-2 text-sm">
                        {testimonial.projectName}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center mt-6 gap-2">
        {[...Array(testimonials.length - visibleTestimonials + 1)].map((_, index) => (
          <button
            key={index}
            className={`h-2 rounded-full transition-all ${
              currentIndex === index ? "w-6 bg-amber-600" : "w-2 bg-amber-300"
            }`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to testimonial group ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
