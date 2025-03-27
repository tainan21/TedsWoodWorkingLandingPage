"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronRight, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const quizSteps = [
  {
    id: 1,
    question: "What's your woodworking experience level?",
    options: ["Beginner", "Intermediate", "Advanced"],
  },
  {
    id: 2,
    question: "What type of project are you interested in?",
    options: ["Furniture", "Outdoor", "Small Crafts", "Home Improvement"],
  },
  {
    id: 3,
    question: "What tools do you have available?",
    options: ["Basic hand tools only", "Some power tools", "Fully equipped workshop"],
  },
  {
    id: 4,
    question: "How much time can you dedicate to your project?",
    options: ["Weekend project", "1-2 weeks", "Long-term project"],
  },
]

const results = [
  {
    id: 1,
    title: "Beginner-Friendly Bookshelf",
    description: "A perfect starter project that requires minimal tools and can be completed in a weekend.",
    image: "/plan1.jpg",
  },
  {
    id: 2,
    title: "Classic Coffee Table",
    description: "A beautiful centerpiece for your living room that showcases your woodworking skills.",
    image: "/plan1.jpg",
  },
  {
    id: 3,
    title: "Garden Planter Box",
    description: "An outdoor project that's practical and adds charm to your garden or patio.",
    image: "/plan1.jpg",
  },
  {
    id: 4,
    title: "Custom Kitchen Cabinet",
    description: "Transform your kitchen with custom cabinetry that maximizes your storage space.",
    image: "/plan1.jpg",
  },
]

export default function PlanFinderQuiz() {
  const [currentStep, setCurrentStep] = useState(0)
  const [answers, setAnswers] = useState<string[]>([])
  const [showResults, setShowResults] = useState(false)

  const handleOptionSelect = (option: string) => {
    const newAnswers = [...answers]
    newAnswers[currentStep] = option
    setAnswers(newAnswers)

    if (currentStep < quizSteps.length - 1) {
      setTimeout(() => {
        setCurrentStep(currentStep + 1)
      }, 500)
    } else {
      setTimeout(() => {
        setShowResults(true)
      }, 500)
    }
  }

  const resetQuiz = () => {
    setCurrentStep(0)
    setAnswers([])
    setShowResults(false)
  }

  return (
    <div className="mx-auto max-w-2xl rounded-xl bg-white p-6 shadow-lg">
      {!showResults ? (
        <>
          {/* Progress bar */}
          <div className="mb-6">
            <div className="mb-2 flex justify-between">
              <span className="text-sm text-[#5a3d2b]/70">
                Step {currentStep + 1} of {quizSteps.length}
              </span>
              <span className="text-sm font-medium text-[#5a3d2b]">
                {Math.round(((currentStep + 1) / quizSteps.length) * 100)}% Complete
              </span>
            </div>
            <div className="h-2 w-full overflow-hidden rounded-full bg-[#f9f5f0]">
              <motion.div
                className="h-full bg-[#d35400]"
                initial={{ width: `${(currentStep / quizSteps.length) * 100}%` }}
                animate={{ width: `${((currentStep + 1) / quizSteps.length) * 100}%` }}
                transition={{ duration: 0.5 }}
              />
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="mb-6 text-2xl font-bold text-[#5a3d2b]">{quizSteps[currentStep].question}</h3>

              <div className="space-y-3">
                {quizSteps[currentStep].options.map((option) => (
                  <button
                    key={option}
                    className={`flex w-full items-center justify-between rounded-lg border p-4 text-left transition-all hover:border-[#d35400] hover:shadow-md ${
                      answers[currentStep] === option ? "border-[#d35400] bg-[#d35400]/5" : "border-[#e0d5c8]"
                    }`}
                    onClick={() => handleOptionSelect(option)}
                  >
                    <span className="text-[#5a3d2b]">{option}</span>
                    {answers[currentStep] === option && <Check className="h-5 w-5 text-[#d35400]" />}
                  </button>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </>
      ) : (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
          <div className="mb-6 text-center">
            <h3 className="mb-2 text-2xl font-bold text-[#5a3d2b]">Your Perfect Woodworking Plan</h3>
            <p className="text-[#5a3d2b]/80">Based on your preferences, we've found the perfect project for you!</p>
          </div>

          <div className="mb-6 overflow-hidden rounded-lg">
            <motion.div
              className="relative aspect-video"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <img
                src={results[1].image || "/placeholder.svg"}
                alt={results[1].title}
                className="h-full w-full object-cover"
              />
            </motion.div>
          </div>

          <div className="mb-6 text-center">
            <h4 className="mb-2 text-xl font-bold text-[#5a3d2b]">{results[1].title}</h4>
            <p className="text-[#5a3d2b]/80">{results[1].description}</p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Link href="https://orders.clickbank.net/?cbfid=13103&cbitems=8&corid=9debc046-72f3-4b5b-a17d-462abc0fd2e5&hopId=d48bf91d-ea1d-4243-990c-03bbb5b6d24f&oaref=01.77DE3D3A119DF91E12ECE773763DD534AF522216987F20A8541FB804404292F5A5ADC7F6&template=20357&time=1742825154&vtid=tedplandiy&vvvv=tedsplans&vvar=cbfid%3D13103%26cbitems%3D8%26cbskin%3D20357%26vtid%3Dtedplandiy">
              <Button className="flex-1 bg-[#d35400] hover:bg-[#a04000]">
                Get This Plan Now
                <ChevronRight className="ml-1 h-4 w-4" />
              </Button>
            </Link>
            
            <Link href="https://orders.clickbank.net/?cbfid=13103&cbitems=8&corid=9debc046-72f3-4b5b-a17d-462abc0fd2e5&hopId=d48bf91d-ea1d-4243-990c-03bbb5b6d24f&oaref=01.77DE3D3A119DF91E12ECE773763DD534AF522216987F20A8541FB804404292F5A5ADC7F6&template=20357&time=1742825154&vtid=tedplandiy&vvvv=tedsplans&vvar=cbfid%3D13103%26cbitems%3D8%26cbskin%3D20357%26vtid%3Dtedplandiy">
              <Button
                variant="outline"
                className="flex-1 border-[#e0d5c8] text-[#5a3d2b] hover:bg-[#f9f5f0]"
                onClick={resetQuiz}
              >
                Start Over
            </Button>
            </Link>
          </div>
        </motion.div>
      )}
    </div>
  )
}

