"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { Star, Shield, Award, TrendingUp, Users, CheckCircle } from "lucide-react"
import { useLocalization } from "@/components/localization-provider"
import { AnimatedCounter } from "@/components/ui-enhancements/animated-counter"

export function TrustBuilder() {
  const { t } = useLocalization()
  const [activeTab, setActiveTab] = useState("results")

  const tabs = [
    { id: "results", label: "Success Stories", icon: <TrendingUp className="h-4 w-4" /> },
    { id: "security", label: "Guarantees", icon: <Shield className="h-4 w-4" /> },
    { id: "clients", label: "Woodworkers", icon: <Users className="h-4 w-4" /> },
    { id: "awards", label: "Recognition", icon: <Award className="h-4 w-4" /> },
  ]

  const testimonials = [
    {
      quote:
        "I've built over 30 projects from these plans. The detailed instructions and cut lists saved me countless hours and thousands of dollars.",
      author: "Michael Johnson",
      role: "Hobbyist Woodworker, Oregon",
      avatar: "/placeholder.svg?height=100&width=100&text=MJ",
      rating: 5,
    },
    {
      quote:
        "As a complete beginner, I was able to build a beautiful dining table that my family uses every day. The plans were easy to follow with clear diagrams.",
      author: "Sarah Williams",
      role: "DIY Enthusiast, Texas",
      avatar: "/placeholder.svg?height=100&width=100&text=SW",
      rating: 5,
    },
  ]

  const securityFeatures = [
    "60-Day Money Back Guarantee",
    "Lifetime Access to All Plans",
    "Free Updates for Life",
    "Secure Payment Processing",
    "Customer Support 7 Days a Week",
    "Satisfaction Guarantee",
  ]

  const awards = [
    { name: "Best Woodworking Resource 2023", organization: "DIY Crafters Association" },
    { name: "Top 10 Woodworking Websites", organization: "Carpentry Magazine" },
    { name: "Excellence in Woodworking Education", organization: "Makers Summit" },
  ]

  const clients = [
    "/placeholder.svg?height=60&width=120&text=Workshop+1",
    "/placeholder.svg?height=60&width=120&text=Woodcraft",
    "/placeholder.svg?height=60&width=120&text=DIY+Mag",
    "/placeholder.svg?height=60&width=120&text=Carpenter",
    "/placeholder.svg?height=60&width=120&text=HomeBuilders",
    "/placeholder.svg?height=60&width=120&text=CraftWood",
    "/placeholder.svg?height=60&width=120&text=WoodPro",
    "/placeholder.svg?height=60&width=120&text=MakerSpace",
  ]

  return (
    <section className="py-16 bg-deep-blue-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-mesh opacity-10"></div>

      {/* Decorative elements */}
      <motion.div
        className="absolute top-20 left-10 w-64 h-64 rounded-full bg-gold-brown-500/5 blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.2, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-deep-blue-500/5 blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
          delay: 2,
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight mb-4">
              <span className="bg-gradient-to-r from-white to-gold-brown-300 bg-clip-text text-transparent">
                Why Thousands of Woodworkers Trust Our Plans
              </span>
            </h2>
            <p className="max-w-2xl mx-auto text-deep-blue-200">
              Discover how our detailed woodworking plans have helped hobbyists and professionals create stunning
              projects with confidence.
            </p>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="bg-deep-blue-800/50 border border-deep-blue-700 rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-white mb-2">
              <AnimatedCounter end={16000} suffix="+" className="text-gold-brown-400" />
            </div>
            <p className="text-deep-blue-300 text-sm">Woodworking Plans</p>
          </div>

          <div className="bg-deep-blue-800/50 border border-deep-blue-700 rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-white mb-2">
              <AnimatedCounter end={87000} suffix="+" className="text-gold-brown-400" />
            </div>
            <p className="text-deep-blue-300 text-sm">Satisfied Woodworkers</p>
          </div>

          <div className="bg-deep-blue-800/50 border border-deep-blue-700 rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-white mb-2">
              <AnimatedCounter end={4.9} decimals={1} className="text-gold-brown-400" />
            </div>
            <p className="text-deep-blue-300 text-sm">Average Rating</p>
          </div>

          <div className="bg-deep-blue-800/50 border border-deep-blue-700 rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-white mb-2">
              <AnimatedCounter end={12} className="text-gold-brown-400" />
            </div>
            <p className="text-deep-blue-300 text-sm">Years of Excellence</p>
          </div>
        </motion.div>

        {/* Tabs */}
        <div className="mb-8">
          <motion.div
            className="flex flex-wrap justify-center gap-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeTab === tab.id
                    ? "bg-gold-brown-500 text-deep-blue-900"
                    : "bg-deep-blue-800 text-deep-blue-200 hover:bg-deep-blue-700 hover:text-white"
                }`}
              >
                {tab.icon}
                {tab.label}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Tab Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="bg-deep-blue-800/50 border border-deep-blue-700 rounded-xl p-6 md:p-8"
        >
          {activeTab === "results" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-white mb-4">Real Results From Real Woodworkers</h3>
                <p className="text-deep-blue-200 mb-6">
                  Our detailed plans have helped thousands of woodworkers create beautiful projects with confidence.
                  Here's what our customers have to say:
                </p>

                <div className="space-y-6">
                  {testimonials.map((testimonial, index) => (
                    <div key={index} className="border-l-2 border-gold-brown-500 pl-4">
                      <p className="text-deep-blue-100 italic mb-3">"{testimonial.quote}"</p>
                      <div className="flex items-center gap-3">
                        <div className="relative h-10 w-10 overflow-hidden rounded-full">
                          <Image
                            src={testimonial.avatar || "/placeholder.svg"}
                            alt={testimonial.author}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <p className="font-medium text-white">{testimonial.author}</p>
                          <p className="text-sm text-deep-blue-300">{testimonial.role}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <div className="bg-deep-blue-900/50 rounded-lg p-6 mb-6">
                  <h4 className="text-lg font-medium text-white mb-4">Project Success Rates</h4>

                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-deep-blue-200">Beginner Completion Rate</span>
                        <span className="text-gold-brown-400">98%</span>
                      </div>
                      <div className="w-full bg-deep-blue-700 rounded-full h-2">
                        <div className="bg-gold-brown-500 h-2 rounded-full" style={{ width: "98%" }}></div>
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-deep-blue-200">Material Cost Savings</span>
                        <span className="text-gold-brown-400">73%</span>
                      </div>
                      <div className="w-full bg-deep-blue-700 rounded-full h-2">
                        <div className="bg-gold-brown-500 h-2 rounded-full" style={{ width: "73%" }}></div>
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-deep-blue-200">Time Saved vs. Other Plans</span>
                        <span className="text-gold-brown-400">65%</span>
                      </div>
                      <div className="w-full bg-deep-blue-700 rounded-full h-2">
                        <div className="bg-gold-brown-500 h-2 rounded-full" style={{ width: "65%" }}></div>
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-deep-blue-200">Customer Satisfaction</span>
                        <span className="text-gold-brown-400">97%</span>
                      </div>
                      <div className="w-full bg-deep-blue-700 rounded-full h-2">
                        <div className="bg-gold-brown-500 h-2 rounded-full" style={{ width: "97%" }}></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-deep-blue-900/50 rounded-lg p-6">
                  <h4 className="text-lg font-medium text-white mb-4">Customer Reviews</h4>

                  <div className="flex items-center gap-4 mb-4">
                    <div className="text-4xl font-bold text-gold-brown-400">4.9</div>
                    <div>
                      <div className="flex">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star key={star} className="h-5 w-5 fill-gold-brown-400 text-gold-brown-400" />
                        ))}
                      </div>
                      <p className="text-sm text-deep-blue-300">Based on 12,487 reviews</p>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-deep-blue-300 w-8">5 ★</span>
                      <div className="flex-1 h-2 bg-deep-blue-700 rounded-full">
                        <div className="bg-gold-brown-500 h-2 rounded-full" style={{ width: "92%" }}></div>
                      </div>
                      <span className="text-xs text-deep-blue-300 w-8">92%</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="text-xs text-deep-blue-300 w-8">4 ★</span>
                      <div className="flex-1 h-2 bg-deep-blue-700 rounded-full">
                        <div className="bg-gold-brown-500 h-2 rounded-full" style={{ width: "6%" }}></div>
                      </div>
                      <span className="text-xs text-deep-blue-300 w-8">6%</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="text-xs text-deep-blue-300 w-8">3 ★</span>
                      <div className="flex-1 h-2 bg-deep-blue-700 rounded-full">
                        <div className="bg-gold-brown-500 h-2 rounded-full" style={{ width: "2%" }}></div>
                      </div>
                      <span className="text-xs text-deep-blue-300 w-8">2%</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="text-xs text-deep-blue-300 w-8">2 ★</span>
                      <div className="flex-1 h-2 bg-deep-blue-700 rounded-full">
                        <div className="bg-gold-brown-500 h-2 rounded-full" style={{ width: "0%" }}></div>
                      </div>
                      <span className="text-xs text-deep-blue-300 w-8">0%</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="text-xs text-deep-blue-300 w-8">1 ★</span>
                      <div className="flex-1 h-2 bg-deep-blue-700 rounded-full">
                        <div className="bg-gold-brown-500 h-2 rounded-full" style={{ width: "0%" }}></div>
                      </div>
                      <span className="text-xs text-deep-blue-300 w-8">0%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "security" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-white mb-4">Our Ironclad Guarantees</h3>
                <p className="text-deep-blue-200 mb-6">
                  We stand behind our woodworking plans with confidence. If you're not completely satisfied, we'll make
                  it right - no questions asked.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {securityFeatures.map((feature, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <Shield className="h-5 w-5 text-gold-brown-400 mt-0.5" />
                      <span className="text-deep-blue-100">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 p-4 bg-deep-blue-900/50 border border-deep-blue-700 rounded-lg">
                  <div className="flex items-center gap-3 mb-3">
                    <Shield className="h-6 w-6 text-gold-brown-400" />
                    <h4 className="text-lg font-medium text-white">Our Quality Promise</h4>
                  </div>
                  <p className="text-deep-blue-200 text-sm">
                    Every plan is tested by real woodworkers in home workshops to ensure they're clear, accurate, and
                    achievable with standard tools.
                  </p>
                </div>
              </div>

              <div>
                <div className="bg-deep-blue-900/50 rounded-lg p-6 h-full">
                  <h4 className="text-lg font-medium text-white mb-4">What You're Protected By</h4>

                  <div className="space-y-4">
                    <div className="flex items-start gap-3 p-3 bg-deep-blue-800/50 rounded-lg">
                      <div className="p-2 bg-deep-blue-700 rounded-full">
                        <Shield className="h-5 w-5 text-gold-brown-400" />
                      </div>
                      <div>
                        <h5 className="font-medium text-white mb-1">60-Day Money Back Guarantee</h5>
                        <p className="text-sm text-deep-blue-200">
                          If you're not completely satisfied, simply let us know within 60 days for a full refund.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-deep-blue-800/50 rounded-lg">
                      <div className="p-2 bg-deep-blue-700 rounded-full">
                        <Shield className="h-5 w-5 text-gold-brown-400" />
                      </div>
                      <div>
                        <h5 className="font-medium text-white mb-1">Lifetime Access</h5>
                        <p className="text-sm text-deep-blue-200">
                          Buy once and get unlimited access to all plans forever, including all future updates.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-deep-blue-800/50 rounded-lg">
                      <div className="p-2 bg-deep-blue-700 rounded-full">
                        <Shield className="h-5 w-5 text-gold-brown-400" />
                      </div>
                      <div>
                        <h5 className="font-medium text-white mb-1">Expert Support</h5>
                        <p className="text-sm text-deep-blue-200">
                          Get help from experienced woodworkers if you have any questions about your projects.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-deep-blue-800/50 rounded-lg">
                      <div className="p-2 bg-deep-blue-700 rounded-full">
                        <Shield className="h-5 w-5 text-gold-brown-400" />
                      </div>
                      <div>
                        <h5 className="font-medium text-white mb-1">Secure Checkout</h5>
                        <p className="text-sm text-deep-blue-200">
                          Your payment information is always protected with bank-level encryption and security.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "clients" && (
            <div>
              <h3 className="text-xl font-bold text-white mb-4">Woodworkers Who Trust Our Plans</h3>
              <p className="text-deep-blue-200 mb-8">
                From complete beginners to professional craftsmen, woodworkers of all skill levels rely on our detailed
                plans to create beautiful projects.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-8">
                {clients.map((client, index) => (
                  <div
                    key={index}
                    className="bg-deep-blue-800/50 border border-deep-blue-700 rounded-lg p-4 flex items-center justify-center h-24"
                  >
                    <Image
                      src={client || "/placeholder.svg"}
                      alt={`Workshop ${index + 1}`}
                      width={120}
                      height={60}
                      className="max-h-12 w-auto grayscale hover:grayscale-0 transition-all duration-300"
                    />
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-deep-blue-900/50 rounded-lg p-6">
                  <h4 className="text-lg font-medium text-white mb-3">Beginners</h4>
                  <p className="text-deep-blue-200 text-sm mb-4">
                    Our step-by-step plans help complete beginners create professional-quality projects from their very
                    first build.
                  </p>
                  <div className="flex items-center gap-2">
                    <div className="text-2xl font-bold text-gold-brown-400">42,000+</div>
                    <span className="text-deep-blue-300 text-sm">beginner woodworkers</span>
                  </div>
                </div>

                <div className="bg-deep-blue-900/50 rounded-lg p-6">
                  <h4 className="text-lg font-medium text-white mb-3">Hobbyists</h4>
                  <p className="text-deep-blue-200 text-sm mb-4">
                    Weekend warriors and DIY enthusiasts use our plans to create beautiful furniture and gifts for
                    friends and family.
                  </p>
                  <div className="flex items-center gap-2">
                    <div className="text-2xl font-bold text-gold-brown-400">31,000+</div>
                    <span className="text-deep-blue-300 text-sm">hobby woodworkers</span>
                  </div>
                </div>

                <div className="bg-deep-blue-900/50 rounded-lg p-6">
                  <h4 className="text-lg font-medium text-white mb-3">Professionals</h4>
                  <p className="text-deep-blue-200 text-sm mb-4">
                    Even professional woodworkers use our plans to save time on design and focus on craftsmanship and
                    client work.
                  </p>
                  <div className="flex items-center gap-2">
                    <div className="text-2xl font-bold text-gold-brown-400">14,000+</div>
                    <span className="text-deep-blue-300 text-sm">professional craftsmen</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "awards" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-white mb-4">Industry Recognition</h3>
                <p className="text-deep-blue-200 mb-6">
                  Our woodworking plans and resources have been recognized by leading publications and organizations in
                  the woodworking community.
                </p>

                <div className="space-y-6">
                  {awards.map((award, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="p-2 bg-gold-brown-500/20 rounded-full border border-gold-brown-500/30">
                        <Award className="h-6 w-6 text-gold-brown-400" />
                      </div>
                      <div>
                        <h4 className="font-medium text-white mb-1">{award.name}</h4>
                        <p className="text-sm text-deep-blue-300">{award.organization}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 p-4 bg-deep-blue-900/50 border border-deep-blue-700 rounded-lg">
                  <div className="flex items-center gap-3 mb-3">
                    <Award className="h-6 w-6 text-gold-brown-400" />
                    <h4 className="text-lg font-medium text-white">Woodworking Excellence</h4>
                  </div>
                  <p className="text-deep-blue-200 text-sm">
                    Our collection has been featured in woodworking magazines and websites across 12 countries as a top
                    resource for DIY enthusiasts.
                  </p>
                </div>
              </div>

              <div className="bg-deep-blue-900/50 rounded-lg p-6">
                <h4 className="text-lg font-medium text-white mb-6">Featured In</h4>

                <div className="space-y-6">
                  <div className="border-l-2 border-gold-brown-500 pl-4">
                    <p className="text-deep-blue-100 italic mb-2">
                      "The most comprehensive collection of woodworking plans we've seen. Perfect for woodworkers of all
                      skill levels."
                    </p>
                    <p className="text-sm text-deep-blue-300">Woodcraft Magazine</p>
                  </div>

                  <div className="border-l-2 border-gold-brown-500 pl-4">
                    <p className="text-deep-blue-100 italic mb-2">
                      "Exceptionally detailed plans with clear instructions. A game-changer for DIY enthusiasts looking
                      to build professional-quality projects."
                    </p>
                    <p className="text-sm text-deep-blue-300">Fine Woodworking</p>
                  </div>

                  <div className="border-l-2 border-gold-brown-500 pl-4">
                    <p className="text-deep-blue-100 italic mb-2">
                      "These plans have set a new standard for clarity and detail in the woodworking community."
                    </p>
                    <p className="text-sm text-deep-blue-300">DIY Home Magazine</p>
                  </div>
                </div>

                <div className="mt-8 grid grid-cols-3 gap-4">
                  <div className="bg-deep-blue-800/50 border border-deep-blue-700 rounded-lg p-3 flex items-center justify-center">
                    <Image
                      src="/placeholder.svg?height=40&width=120&text=WoodMag"
                      alt="Woodworking Magazine"
                      width={120}
                      height={40}
                      className="max-h-8 w-auto"
                    />
                  </div>

                  <div className="bg-deep-blue-800/50 border border-deep-blue-700 rounded-lg p-3 flex items-center justify-center">
                    <Image
                      src="/placeholder.svg?height=40&width=120&text=DIYPro"
                      alt="DIY Pro"
                      width={120}
                      height={40}
                      className="max-h-8 w-auto"
                    />
                  </div>

                  <div className="bg-deep-blue-800/50 border border-deep-blue-700 rounded-lg p-3 flex items-center justify-center">
                    <Image
                      src="/placeholder.svg?height=40&width=120&text=CraftNews"
                      alt="Craft News"
                      width={120}
                      height={40}
                      className="max-h-8 w-auto"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}
        </motion.div>

        {/* Trust Badges */}
        <motion.div
          className="flex flex-wrap justify-center items-center gap-8 mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-2">
            <Shield className="h-5 w-5 text-gold-brown-400" />
            <span className="text-deep-blue-200 text-sm">60-Day Money Back</span>
          </div>

          <div className="flex items-center gap-2">
            <CheckCircle className="h-5 w-5 text-gold-brown-400" />
            <span className="text-deep-blue-200 text-sm">16,000+ Plans</span>
          </div>

          <div className="flex items-center gap-2">
            <Award className="h-5 w-5 text-gold-brown-400" />
            <span className="text-deep-blue-200 text-sm">Award-Winning</span>
          </div>

          <div className="flex items-center gap-2">
            <Users className="h-5 w-5 text-gold-brown-400" />
            <span className="text-deep-blue-200 text-sm">87,000+ Woodworkers</span>
          </div>

          <div className="flex items-center gap-2">
            <Star className="h-5 w-5 text-gold-brown-400" />
            <span className="text-deep-blue-200 text-sm">4.9/5 Rating</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

