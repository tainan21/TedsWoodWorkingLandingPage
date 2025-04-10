"use client"

import { useState, useEffect } from "react"

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 59,
    seconds: 59,
  })

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 }
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 }
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 }
        } else {
          // Reset to 24 hours when countdown reaches zero
          return { hours: 23, minutes: 59, seconds: 59 }
        }
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="flex items-center gap-4">
      <div className="bg-white text-amber-700 rounded-lg p-3 text-center min-w-[70px]">
        <span className="block text-2xl font-bold">{timeLeft.hours.toString().padStart(2, "0")}</span>
        <span className="text-xs">Hours</span>
      </div>
      <div className="bg-white text-amber-700 rounded-lg p-3 text-center min-w-[70px]">
        <span className="block text-2xl font-bold">{timeLeft.minutes.toString().padStart(2, "0")}</span>
        <span className="text-xs">Minutes</span>
      </div>
      <div className="bg-white text-amber-700 rounded-lg p-3 text-center min-w-[70px]">
        <span className="block text-2xl font-bold">{timeLeft.seconds.toString().padStart(2, "0")}</span>
        <span className="text-xs">Seconds</span>
      </div>
    </div>
  )
}
