"use client"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Play, Pause, Volume2, VolumeX, ArrowRight, CheckCircle, ChevronDown } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { useLocalization } from "@/components/localization-provider"

export function VideoHero() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(true)
  const [isHovering, setIsHovering] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)
  const { t } = useLocalization()

  // Video placeholder image (used for both the static image and as poster for the video)
  const videoPlaceholder = "/complete.png"

  useEffect(() => {
    if (videoRef.current) {
      try {
        if (isPlaying) {
          videoRef.current.play()
        } else {
          videoRef.current.pause()
        }
        videoRef.current.muted = isMuted
      } catch (error) {
        console.error("Error controlling video playback:", error)
        setIsPlaying(false)
      }
    }
  }, [isPlaying, isMuted])

  const togglePlay = () => setIsPlaying((prev) => !prev)
  const toggleMute = () => setIsMuted((prev) => !prev)

  const pulseAnimation = {
    scale: [1, 1.05, 1],
    transition: { duration: 2, repeat: Infinity, repeatType: "reverse" as const },
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-deep-blue-950">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <div
          className="w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url(${videoPlaceholder})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-deep-blue-950/90 via-deep-blue-900/70 to-deep-blue-950/90" />
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <Badge className="bg-gold-brown-500/20 text-gold-brown-300 border border-gold-brown-500/30 mb-6 py-1.5 px-4 text-sm">
              Master DIY Woodworking Today
            </Badge>

            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-white to-gold-brown-300 bg-clip-text text-transparent">
                16,000+ Step-by-Step Woodworking Plans
              </span>
            </h1>

            <p className="text-xl text-deep-blue-100 mb-8 max-w-3xl mx-auto">
              Build stunning furniture, crafts, and outdoor projects with easy-to-follow blueprints. Perfect for beginners and pros alike!
            </p>
          </motion.div>

          {/* Split Content: Static Image and Video Box */}
          <div className="flex flex-col md:flex-row gap-8 mb-12">
            {/* Static Background Image Box */}
            <div className="md:w-1/2">
              <div className="rounded-xl overflow-hidden border border-deep-blue-700 shadow-2xl">
                <img
                  src={videoPlaceholder}
                  alt="DIY Woodworking Background"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Video Box with Interactive Controls */}
            <div className="md:w-1/2">
              <motion.div
                className="relative rounded-xl overflow-hidden border border-deep-blue-700 shadow-2xl aspect-video"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              >
                <video
                  ref={videoRef}
                  className="w-full h-full object-cover"
                  poster={videoPlaceholder}
                  loop
                  playsInline
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
                        aria-label="Play video"
                      >
                        <Play className="h-8 w-8 ml-1" />
                      </motion.button>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Video Controls Overlay */}
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
                          aria-label={isPlaying ? "Pause video" : "Play video"}
                        >
                          {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5 ml-0.5" />}
                        </button>

                        <div className="text-sm text-deep-blue-200">Watch how to build amazing DIY projects</div>

                        <button
                          className="w-10 h-10 rounded-full bg-deep-blue-800/80 text-white flex items-center justify-center hover:bg-gold-brown-500 hover:text-deep-blue-900 transition-colors"
                          onClick={toggleMute}
                          aria-label={isMuted ? "Unmute video" : "Mute video"}
                        >
                          {isMuted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </div>
          </div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-12"
          >
            <motion.button
              className="bg-gold-brown-500 hover:bg-gold-brown-600 text-deep-blue-900 font-medium px-8 py-4 rounded-lg text-lg shadow-lg flex items-center justify-center group relative overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <span className="relative z-10 flex items-center">
                Get Instant Access to All Plans
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-gold-brown-600 to-gold-brown-400"
                initial={{ x: "-100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.4 }}
              />
            </motion.button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-4 text-sm text-deep-blue-100"
          >
            <TrustIndicator icon={<CheckCircle />} text="Lifetime Access to All Plans" />
            <TrustIndicator icon={<CheckCircle />} text="60-Day Money Back Guarantee" />
            <TrustIndicator icon={<CheckCircle />} text="24/7 Customer Support" />
            <TrustIndicator icon={<CheckCircle />} text="100% Secure Checkout" />
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, y: [0, 10, 0] }}
            transition={{
              opacity: { delay: 1.5, duration: 1 },
              y: { delay: 1.5, duration: 2, repeat: Infinity },
            }}
          >
            <ChevronDown className="h-8 w-8 text-gold-brown-400" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function TrustIndicator({ icon, text }: { icon: React.ReactElement; text: string }) {
  return (
    <div className="flex items-center gap-1">
      {icon}
      <span>{text}</span>
    </div>
  )
}
