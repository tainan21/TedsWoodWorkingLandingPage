"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 2,
    hours: 23,
    minutes: 59,
    seconds: 59,
  })

  const [isPulsing, setIsPulsing] = useState(false)

  // Update countdown timer
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let { days, hours, minutes, seconds } = prev

        if (seconds > 0) {
          seconds -= 1
        } else {
          seconds = 59
          if (minutes > 0) {
            minutes -= 1
          } else {
            minutes = 59
            if (hours > 0) {
              hours -= 1
            } else {
              hours = 23
              if (days > 0) {
                days -= 1
              } else {
                // Timer complete
                clearInterval(timer)
              }
            }
          }
        }

        // Trigger pulsing effect when time is running low
        if (days === 0 && hours < 5) {
          setIsPulsing(true)
        }

        return { days, hours, minutes, seconds }
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="text-center">
      <h3 className="mb-4 text-xl font-bold text-[#5a3d2b] md:text-2xl">Limited Time Offer Ends In:</h3>

      <div className="mb-6 flex justify-center gap-4">
        <TimeUnit label="Days" value={timeLeft.days} />
        <TimeUnit label="Hours" value={timeLeft.hours} />
        <TimeUnit label="Minutes" value={timeLeft.minutes} />
        <TimeUnit label="Seconds" value={timeLeft.seconds} />
      </div>

      <div className="mx-auto max-w-md space-y-4">
        <div className="flex items-center justify-between rounded-lg bg-[#f9f5f0] p-4">
          <div>
            <p className="text-lg font-bold text-[#5a3d2b]">Complete Package</p>
            <p className="text-sm text-[#5a3d2b]/70">All 16,000 woodworking plans</p>
          </div>
          <div className="text-right">
            <p className="text-sm text-[#5a3d2b]/70">
              Regular Price: <span className="line-through">$297</span>
            </p>
            <motion.p
              className="text-2xl font-bold text-[#d35400]"
              animate={isPulsing ? { scale: [1, 1.05, 1] } : {}}
              transition={isPulsing ? { repeat: Number.POSITIVE_INFINITY, duration: 2 } : {}}
            >
              $37
            </motion.p>
          </div>
        </div>

        <Link href="https://orders.clickbank.net/?cbfid=13103&cbitems=8&corid=3e8d3625-66da-4662-8269-7072604c6776&hopId=e52f7094-af3a-4a20-b745-8efd02dcb7ad&oaref=01.77DE3D3A119DF91E12ECE773763DD534AF522216987F20A8541FB804404292F5A5ADC7F6&template=20357&time=1742825570&vtid=tedplandiy&vvvv=tedsplans&vvar=cbfid%3D13103%26cbitems%3D8%26cbskin%3D20357%26vtid%3Dtedplandiy">

        <motion.button
          className="w-full rounded-lg bg-[#d35400] py-3 text-lg font-bold text-white transition-colors hover:bg-[#a04000]"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          animate={isPulsing ? { scale: [1, 1.05, 1] } : {}}
          transition={isPulsing ? { repeat: Number.POSITIVE_INFINITY, duration: 2 } : {}}
        >
          Get Instant Access Now
        </motion.button>
        </Link>

        <p className="text-sm text-[#5a3d2b]/70">60-day money-back guarantee. No questions asked.</p>
      </div>
    </div>
  )
}

function TimeUnit({ label, value }: { label: string; value: number }) {
  return (
    <div className="flex flex-col items-center">
      <div className="relative overflow-hidden rounded-lg bg-[#5a3d2b] px-4 py-2 text-white">
        <AnimatePresence mode="popLayout">
          <motion.div
            key={value}
            initial={{ y: -40 }}
            animate={{ y: 0 }}
            exit={{ y: 40 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="text-2xl font-bold md:text-3xl"
          >
            {value.toString().padStart(2, "0")}
          </motion.div>
        </AnimatePresence>
      </div>
      <p className="mt-1 text-xs text-[#5a3d2b]">{label}</p>
    </div>
  )
}

