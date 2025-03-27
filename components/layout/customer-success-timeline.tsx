"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"

const successStories = [
  {
    id: 1,
    year: "2018",
    name: "Kevin Roane - San Mateo, CA",
    project: "“I Had Been Burned Before, but Ted Proved Me Wrong...”",
    testimonial:
      "“I had been burned before, but Ted proved me wrong and I couldn't be happier with the purchase. For a beginner, this package is a god-send because you'll get every detail you need for your project. It even lists the different tools needed and how to use them and the plan explains the entire process to you.If you want to get ideas on your project or build thousands of quality works in wood, you owe it to yourself to get this package.”",
    image: "/img27.jpg",
  },
  {
    id: 2,
    year: "2019",
    name: "Melvin Jones- AWFS Association, WLake Ariel PA",
    project: "“An Excellent Investment For Anyone Starting Out”",
    testimonial:
      "“Of all the woodwork plans I have bought over the years, this is the best collection I have. Its an excellent resource for beginners as well as seasoned woodworkers. It includes tons of blueprints for different small crafts, furniture and outdoor projects and it’s simply outstanding…an excellent investment for anyone starting out. I would loved to have had these when I was building my first outdoor deck. Considering the excellent content, and the quality of the plans itself, this package is quite a bargain.“",
    image: "/img26.jpg",
  },
  {
    id: 3,
    year: "2020",
    name: "Bradly Lerwill - Durham, UK",
    project: "“Plans Are Super Easy To Read and Understand Unlike Others...”",
    testimonial:
      "“I just got this package a few days ago, and I’ve had a hard time putting it down. There are lots of full-color pictures, with thorough descriptions of every step in the project. These turned out to be even better than I’d hoped!, Plans are super easy to read and understand, unlike several others I looked online. I can’t wait to get started building some of the pieces and I have some projects picked out to start as soon as I can get the lumber! A valuable addition to my woodworking reference library. I would highly recommend it to anyone who’s interested in woodworking.”",
    image: "/img25.jpg",
  },
  {
    id: 4,
    year: "2021",
    name: "Willie Stark - Chief Editor, Woodworking, Valdosta",
    project: "“The Best Collection of Project Plans I've Reviewed!”",
    testimonial:
      "“I’ve read numerous books and bought several online woodworking plans and this is clearly the best that is on the market in every aspect. It has got lots of different ideas and inspiration. Plans are detailed and the instructions are in-depth. I’d rate this package as one of the best collection on woodworking plans I’ve reviewed. You simply must get this, especially if you are just getting started in woodworking. As far as I am concerned, this is a bargain. The level of detail will set a new standard in the field.”",
    image: "/img24.jpg",
  },
  {
    id: 5,
    year: "2022",
    name: "Robert Chen",
    project: "Entertainment Center",
    testimonial:
      "I built this entertainment center over a weekend. The measurements were spot-on and it fits perfectly in my living room.",
    image: "/placeholder.svg?height=300&width=400",
  },
]

export default function CustomerSuccessTimeline() {
  const containerRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  return (
    <div ref={containerRef} className="relative py-16">
      {/* Timeline line */}
      <div className="absolute left-1/2 top-0 h-full w-1 -translate-x-1/2 bg-[#d35400]/20" />

      {/* Progress indicator */}
      <motion.div
        className="absolute left-1/2 top-0 z-10 h-full w-1 -translate-x-1/2 bg-[#d35400]"
        style={{ scaleY: scrollYProgress, transformOrigin: "top" }}
      />

      <div className="relative z-20">
        {successStories.map((story, index) => (
          <TimelineItem key={story.id} story={story} index={index} progress={scrollYProgress} />
        ))}
      </div>
    </div>
  )
}

function TimelineItem({
  story,
  index,
  progress,
}: {
  story: (typeof successStories)[0]
  index: number
  progress: any
}) {
  const itemRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: itemRef,
    offset: ["start end", "center center"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 1, 0.3])
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8])
  const x = useTransform(scrollYProgress, [0, 1], [index % 2 === 0 ? -50 : 50, 0])

  return (
    <div ref={itemRef} className={`mb-24 flex ${index % 2 === 0 ? "justify-end" : "justify-start"} px-4`}>
      <motion.div
        className={`relative w-full max-w-lg rounded-lg bg-white p-6 shadow-lg ${index % 2 === 0 ? "mr-8" : "ml-8"}`}
        style={{ opacity, scale, x }}
      >
        {/* Year badge */}
        <div className="absolute top-0 z-10 -translate-y-1/2 rounded-full bg-[#d35400] px-4 py-1 text-sm font-bold text-white">
          {story.year}
        </div>

        {/* Timeline dot */}
        <div
          className={`absolute top-1/2 h-6 w-6 -translate-y-1/2 rounded-full border-4 border-[#d35400] bg-white ${
            index % 2 === 0 ? "-right-11" : "-left-11"
          }`}
        />

        <div className="grid gap-4 md:grid-cols-2">
          <div className="overflow-hidden rounded-lg">
            <Image
              src={story.image || "/placeholder.svg"}
              alt={story.project}
              width={400}
              height={300}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="flex flex-col justify-center">
            <h3 className="mb-1 text-xl font-bold text-[#5a3d2b]">{story.name}</h3>
            <p className="mb-3 text-sm font-medium text-[#d35400]">{story.project}</p>
            <p className="text-sm text-[#5a3d2b]/80">"{story.testimonial}"</p>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

