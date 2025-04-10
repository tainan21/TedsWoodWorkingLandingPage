"use client"

import { useEffect } from "react"
import { LocalizationProvider } from "@/components/localization-provider"
import { VideoHero } from "@/components/common/hero-section/video-hero"
import { TrustBuilder } from "@/components/common/conversion-components/trust-builder"
import { BackgroundParallaxSection } from "@/components/common/conversion-components/background-parallax"
import { FeatureShowcase } from "@/components/common/conversion-components/feature-showcase"
import { TestimonialCarousel } from "@/components/common/conversion-components/testimonial-carousel"
import { EnhancedForm } from "@/components/enhanced-form"
import { FloatingCTA } from "@/components/ui-enhancements/floating-cta"
import { ScrollProgress } from "@/components/ui-enhancements/scroll-progress"

import { CountdownTimer } from "@/components/ui-enhancements/countdown-timer"
import { FeatureComparison } from "@/components/ui-enhancements/feature-comparison"
import { EnhancedFooter } from "@/components/enhanced-footer"

export default function LandingA() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible")
          }
        })
      },
      { threshold: 0.1 },
    )

    document.querySelectorAll(".animate-on-scroll").forEach((element) => {
      observer.observe(element)
    })

    return () => {
      document.querySelectorAll(".animate-on-scroll").forEach((element) => {
        observer.unobserve(element)
      })
    }
  }, [])

  // Set end date for countdown timer (7 days from now)
  const endDate = new Date()
  endDate.setDate(endDate.getDate() + 7)

  return (
    <LocalizationProvider>
      <ScrollProgress />
      <FloatingCTA />

      <VideoHero />

      <TrustBuilder />

      <div className="py-16 bg-deep-blue-950">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Woodworking Plan Packages</h2>
            <p className="text-deep-blue-200 max-w-2xl mx-auto">
              Choose the perfect woodworking plan package for your skill level and project needs.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <FeatureComparison />
            </div>

            <div>
              <CountdownTimer endDate={endDate} />
            </div>
          </div>
        </div>
      </div>

      {/* Existing Components */}
      <BackgroundParallaxSection />
      <FeatureShowcase />
      <TestimonialCarousel />

      {/* <div className="py-16 bg-deep-blue-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Get Personalized Project Recommendations</h2>
            <p className="text-deep-blue-200 max-w-2xl mx-auto">
              Tell us about your woodworking experience, tools, and interests, and we'll recommend the perfect projects
              for you.
            </p>
          </div>

          <EnhancedForm />
        </div>
      </div> */}

      {/* New Footer */}
      <EnhancedFooter />
    </LocalizationProvider>
  )
}

