"use client"

import { useState, useRef, useEffect } from "react"
import { motion, useAnimation, AnimatePresence } from "framer-motion"
import { Play, Pause, Volume2, VolumeX, ArrowRight, CheckCircle, ChevronDown } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { useLocalization } from "@/components/localization-provider"

export function VideoHero() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(true)
  const [isHovering, setIsHovering] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)
  const controls = useAnimation()
  const { t } = useLocalization()

  // Simulate video with placeholder
  const videoPlaceholder = "/placeholder.svg?height=720&width=1280&text=Woodworking+Video"

  useEffect(() => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.play().catch(() => {
          // Autoplay was prevented, keep state consistent
          setIsPlaying(false)
        })
      } else {
        videoRef.current.pause()
      }

      videoRef.current.muted = isMuted
    }
  }, [isPlaying, isMuted])

  const togglePlay = () => {
    setIsPlaying(!isPlaying)
  }

  const toggleMute = () => {
    setIsMuted(!isMuted)
  }

  const pulseAnimation = {
    scale: [1, 1.05, 1],
    transition: {
      duration: 2,
      repeat: Number.POSITIVE_INFINITY,
      repeatType: "reverse" as const,
    },
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-deep-blue-950">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        {/* For a real implementation, replace the div with a video element */}
        <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: `url(${videoPlaceholder})` }} />
        {/* Uncomment for real video implementation
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          loop
          playsInline
          poster="/placeholder.svg?height=720&width=1280&text=Woodworking+Poster"
        >
          <source src="/video-placeholder.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        */}

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-deep-blue-950/90 via-deep-blue-900/70 to-deep-blue-950/90" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <Badge className="bg-gold-brown-500/20 text-gold-brown-300 border border-gold-brown-500/30 mb-6 py-1.5 px-4 text-sm">
              Master Woodworking From Home
            </Badge>

            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-white to-gold-brown-300 bg-clip-text text-transparent">
                16,000+ Woodworking Plans & Projects
              </span>
            </h1>

            <p className="text-xl text-deep-blue-100 mb-8 max-w-3xl mx-auto">
              Step-by-step blueprints for beautiful furniture, crafts, and outdoor projects - even if you're a complete
              beginner with limited tools.
            </p>
          </motion.div>

          {/* Video Controls */}
          <motion.div
            className="relative mb-12 rounded-xl overflow-hidden border border-deep-blue-700 shadow-2xl max-w-3xl mx-auto aspect-video"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            {/* For a real implementation, replace the img with a video element */}
            <img
              src={videoPlaceholder || "/placeholder.svg"}
              alt="Woodworking project demonstration"
              className="w-full h-full object-cover"
            />

            {/* Play Button Overlay */}
            <AnimatePresence>
              {!isPlaying && (
                <motion.div
                  className="absolute inset-0 flex items-center justify-center bg-deep-blue-950/40"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.button
                    className="w-20 h-20 rounded-full bg-gold-brown-500 text-deep-blue-900 flex items-center justify-center"
                    onClick={togglePlay}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    animate={pulseAnimation}
                  >
                    <Play className="h-8 w-8 ml-1" />
                  </motion.button>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Video Controls */}
            <AnimatePresence>
              {(isHovering || isPlaying) && (
                <motion.div
                  className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-deep-blue-950 to-transparent"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex items-center justify-between">
                    <button
                      className="w-10 h-10 rounded-full bg-deep-blue-800/80 text-white flex items-center justify-center hover:bg-gold-brown-500 hover:text-deep-blue-900 transition-colors"
                      onClick={togglePlay}
                    >
                      {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5 ml-0.5" />}
                    </button>

                    <div className="text-sm text-deep-blue-200">Watch how to build a beautiful cabinet</div>

                    <button
                      className="w-10 h-10 rounded-full bg-deep-blue-800/80 text-white flex items-center justify-center hover:bg-gold-brown-500 hover:text-deep-blue-900 transition-colors"
                      onClick={toggleMute}
                    >
                      {isMuted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-12"
          >
            <motion.div whileHover="hover" className="inline-block">
              <motion.button
                className="bg-gold-brown-500 hover:bg-gold-brown-600 text-deep-blue-900 font-medium px-8 py-4 rounded-lg text-lg shadow-lg flex items-center justify-center group relative overflow-hidden"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <span className="relative z-10 flex items-center">
                  Get Instant Access To All Plans
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </span>

                {/* Animated background */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-gold-brown-600 to-gold-brown-400"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.4 }}
                />
              </motion.button>

              {/* Animated rings */}
              <motion.div
                className="absolute inset-0 rounded-lg border border-gold-brown-500/50"
                initial={{ opacity: 0.5 }}
                variants={{
                  hover: {
                    scale: 1.15,
                    opacity: 0,
                    transition: { duration: 0.5, repeat: Number.POSITIVE_INFINITY },
                  },
                }}
              />
            </motion.div>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-4 text-sm text-deep-blue-100"
          >
            <div className="flex items-center gap-1">
              <CheckCircle className="h-4 w-4 text-gold-brown-400" />
              <span>Lifetime Access</span>
            </div>
            <div className="flex items-center gap-1">
              <CheckCircle className="h-4 w-4 text-gold-brown-400" />
              <span>60-Day Money Back Guarantee</span>
            </div>
            <div className="flex items-center gap-1">
              <CheckCircle className="h-4 w-4 text-gold-brown-400" />
              <span>24/7 Customer Support</span>
            </div>
            <div className="flex items-center gap-1">
              <CheckCircle className="h-4 w-4 text-gold-brown-400" />
              <span>Secure Checkout</span>
            </div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, y: [0, 10, 0] }}
            transition={{
              opacity: { delay: 1.5, duration: 1 },
              y: { delay: 1.5, duration: 2, repeat: Number.POSITIVE_INFINITY },
            }}
          >
            <ChevronDown className="h-8 w-8 text-gold-brown-400" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

