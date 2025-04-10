"use client"

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ChevronLeft, ChevronRight } from "lucide-react"

const categories = ["All Plans", "Furniture", "Outdoor", "Garden", "Small Projects", "Dreams", "Home Decor"]

const plans = [
  {
    title: "Workbench",
    category: "Work",
    difficulty: "Intermediate",
    image: "/customproject1.jpg",
    popular: true,
  },
  {
    title: "Garden Chair",
    category: "Outdoor",
    difficulty: "Beginner",
    image: "/wooden2.jpg",
    popular: true,
  },
  {
    title: "Smart Furniture",
    category: "Furniture",
    difficulty: "Intermediate",
    image: "/customproject3.jpg",
    popular: false,
  },
  {
    title: "Small Projects",
    category: "Garden",
    difficulty: "Beginner",
    image: "/customsmall.jpg",
    popular: false,
  },
  {
    title: "Modern Cabinet",
    category: "Furniture",
    difficulty: "Beginner",
    image: "/wooden6.png",
    popular: false,
  },
  {
    title: "Wooden Deck",
    category: "Dreams",
    difficulty: "Advanced",
    image: "/customproject6.jpg",
    popular: true,
  },
  {
    title: "Rustic Constructions",
    category: "Furniture",
    difficulty: "Intermediate",
    image: "/customproject2.png",
    popular: false,
  },
  {
    title: "Modern Cabinet",
    category: "Home Decor",
    difficulty: "Advanced",
    image: "/wooden3.jpg",
    popular: false,
  },
  {
    title: "Complete Dining Table",
    category: "Outdoor",
    difficulty: "Intermediate",
    image: "/wooden8.jpg",
    popular: true,
  },
]

export default function PlanShowcase() {
  const [activeCategory, setActiveCategory] = useState("All Plans")
  const [currentPage, setCurrentPage] = useState(0)
  const itemsPerPage = 6

  const filteredPlans =
    activeCategory === "All Plans" ? plans : plans.filter((plan) => plan.category === activeCategory)

  const totalPages = Math.ceil(filteredPlans.length / itemsPerPage)
  const currentPlans = filteredPlans.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage)

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages)
  }

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages)
  }

  return (
    <div className="space-y-8">
      <div className="flex flex-wrap gap-2 justify-center">
        {categories.map((category) => (
          <Button
            key={category}
            variant={activeCategory === category ? "default" : "outline"}
            className={activeCategory === category ? "bg-amber-600 hover:bg-amber-700" : "border-amber-200"}
            onClick={() => {
              setActiveCategory(category)
              setCurrentPage(0)
            }}
          >
            {category}
          </Button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentPlans.map((plan, index) => (
          <Card key={index} className="overflow-hidden border-amber-100 transition-all hover:shadow-lg">
            <div className="relative h-48">
              <Image src={plan.image || "/placeholder.svg"} alt={plan.title} fill className="object-cover" />
              {plan.popular && <Badge className="absolute top-2 right-2 bg-amber-600">Popular</Badge>}
            </div>
            <CardContent className="p-4">
              <h3 className="font-bold text-lg mb-1">{plan.title}</h3>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">{plan.category}</span>
                <Badge variant="outline" className="border-amber-200 text-amber-700">
                  {plan.difficulty}
                </Badge>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {totalPages > 1 && (
        <div className="flex justify-center gap-4 mt-8">
          <Button variant="outline" size="icon" onClick={prevPage} className="border-amber-200">
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <div className="flex items-center gap-1">
            {[...Array(totalPages)].map((_, i) => (
              <Button
                key={i}
                variant={currentPage === i ? "default" : "outline"}
                className={`w-8 h-8 p-0 ${currentPage === i ? "bg-amber-600 hover:bg-amber-700" : "border-amber-200"}`}
                onClick={() => setCurrentPage(i)}
              >
                {i + 1}
              </Button>
            ))}
          </div>
          <Button variant="outline" size="icon" onClick={nextPage} className="border-amber-200">
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      )}
    </div>
  )
}
