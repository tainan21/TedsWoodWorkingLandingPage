"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useAnimation, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CheckCircle, CreditCard, Globe, MessageSquare, ShieldCheck, Star, Users, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

// Componente de animação para elementos que aparecem durante o scroll
const AnimateOnScroll = ({ children, className = "", delay = 0, ...props }) => {
  const controls = useAnimation()
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, threshold: 0.1 })

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1],
            delay,
          },
        },
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  )
}

// Componente de CTA com efeito de hover
const CtaButton = ({ children, className = "", ...props }) => {
  return (
    <Button className={`cta-button ${className}`} {...props}>
      {children}
    </Button>
  )
}

export default function HighConversionPage() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
<div className="flex flex-col min-h-screen bg-deep-blue-950 text-white">
  {/* Header */}
  <header
    className={`sticky top-0 z-40 w-full backdrop-blur transition-all duration-300 ${
      scrolled ? "bg-deep-blue-900/90 shadow-md" : "bg-transparent"
    }`}
  >
    <div className="container flex h-16 items-center justify-between">
      <div className="flex items-center gap-2 font-bold text-xl">
        <Globe className="h-6 w-6 text-gold-brown-400" />
        <span className="bg-gradient-to-r from-white to-gold-brown-300 bg-clip-text text-transparent">
          WoodCraftPro
        </span>
      </div>
      <nav className="hidden md:flex items-center gap-6 text-sm">
        <Link href="#features" className="font-medium transition-colors hover:text-gold-brown-400">
          Features
        </Link>
        <Link href="#pricing" className="font-medium transition-colors hover:text-gold-brown-400">
          Pricing
        </Link>
        <Link href="#testimonials" className="font-medium transition-colors hover:text-gold-brown-400">
          Testimonials
        </Link>
        <Link href="#faq" className="font-medium transition-colors hover:text-gold-brown-400">
          FAQ
        </Link>
      </nav>
      <div className="flex items-center gap-4">
        <Button
          variant="ghost"
          className="hidden md:flex text-white hover:text-gold-brown-400 hover:bg-deep-blue-800"
        >
          Sign In
        </Button>
        <CtaButton className="bg-gold-brown-500 hover:bg-gold-brown-600 text-deep-blue-900 font-medium">
          Get Started Now
        </CtaButton>
      </div>
    </div>
  </header>

  <main className="flex-1">
    {/* Hero Section */}
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 relative overflow-hidden">
      <div className="absolute inset-0 bg-deep-blue-900 bg-mesh opacity-30"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-deep-blue-950 via-deep-blue-900/50 to-deep-blue-950"></div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <motion.div
            className="flex flex-col justify-center space-y-4"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-block rounded-lg bg-gold-brown-500/20 px-3 py-1 text-sm text-gold-brown-300 border border-gold-brown-500/30">
              Boost Your DIY Success by Up To 300%
            </div>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
              <span className="bg-gradient-to-r from-white to-gold-brown-300 bg-clip-text text-transparent">
                Turn Your DIY Dreams Into Masterpieces
              </span>
            </h1>
            <p className="max-w-[600px] text-deep-blue-100 md:text-xl">
              Unlock access to 16,000 woodworking plans and step-by-step guides that combine expert design,
              advanced carpentry techniques, and smart automation for ultimate project success.
            </p>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <CtaButton
                size="lg"
                className="bg-gold-brown-500 hover:bg-gold-brown-600 text-deep-blue-900 font-medium group"
              >
                Try It Free
                <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" />
              </CtaButton>
              <Button
                size="lg"
                variant="outline"
                className="border-gold-brown-500/50 text-white hover:bg-deep-blue-800 hover:text-gold-brown-300"
              >
                Watch Demo
              </Button>
            </div>
            <div className="flex items-center gap-4 text-sm text-deep-blue-100">
              <div className="flex items-center gap-1">
                <CheckCircle className="h-4 w-4 text-gold-brown-400" />
                <span>14-Day Free Trial</span>
              </div>
              <div className="flex items-center gap-1">
                <CheckCircle className="h-4 w-4 text-gold-brown-400" />
                <span>No Credit Card Needed</span>
              </div>
              <div className="flex items-center gap-1">
                <CheckCircle className="h-4 w-4 text-gold-brown-400" />
                <span>24/7 Expert Support</span>
              </div>
            </div>
          </motion.div>
          <motion.div
            className="flex items-center justify-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <div className="relative w-full max-w-[500px] aspect-video overflow-hidden rounded-xl border border-deep-blue-700 bg-deep-blue-800/50 p-2 shadow-xl backdrop-blur-sm">
              <div className="absolute inset-0 bg-gradient-to-r from-gold-brown-500/10 to-deep-blue-800/10 rounded-lg"></div>
              <Image
                src="/placeholder.svg?height=600&width=800"
                width={800}
                height={600}
                alt="Platform Dashboard"
                className="rounded-lg object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-deep-blue-900/90 to-transparent rounded-lg flex items-end p-6">
                <div className="grid gap-2">
                  <div className="text-sm font-medium text-gold-brown-300">Real-Time Project Results</div>
                  <div className="text-2xl font-bold bg-gradient-to-r from-white to-gold-brown-300 bg-clip-text text-transparent">
                    +127% Efficiency Boost
                  </div>
                  <div className="text-xs text-deep-blue-200">In the last 30 days</div>
                </div>
              </div>
              <motion.div
                className="absolute top-4 right-4 h-3 w-3 rounded-full bg-gold-brown-400"
                animate={{ scale: [1, 1.5, 1] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>

    {/* Social Proof */}
    <section className="w-full py-12 md:py-24 lg:py-32 bg-deep-blue-900 relative">
      <div className="absolute inset-0 bg-mesh opacity-10"></div>
      <div className="container px-4 md:px-6 relative z-10">
        <AnimateOnScroll className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-gold-brown-500/20 px-3 py-1 text-sm text-gold-brown-300 border border-gold-brown-500/30">
              Trusted by over 10,000 DIY Enthusiasts
            </div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
              <span className="bg-gradient-to-r from-white to-gold-brown-300 bg-clip-text text-transparent">
                Projects That Transformed Lives
              </span>
            </h2>
          </div>
        </AnimateOnScroll>
        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-6 py-8 md:grid-cols-4 md:gap-12 lg:py-12">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
            <AnimateOnScroll
              key={i}
              className="flex items-center justify-center grayscale transition-all hover:grayscale-0 hover:scale-105"
              delay={i * 0.1}
            >
              <div className="bg-deep-blue-800/50 p-4 rounded-lg border border-deep-blue-700/50 w-full h-full flex items-center justify-center">
                <Image
                  src={`/placeholder.svg?height=60&width=180&text=LOGO ${i}`}
                  alt={`Company Logo ${i}`}
                  width={180}
                  height={60}
                  className="h-12 object-contain opacity-70 hover:opacity-100 transition-opacity"
                />
              </div>
            </AnimateOnScroll>
          ))}
        </div>
        <AnimateOnScroll className="flex items-center justify-center gap-4 text-deep-blue-200">
          <div className="flex items-center gap-1">
            <Star className="h-5 w-5 fill-gold-brown-400 text-gold-brown-400" />
            <Star className="h-5 w-5 fill-gold-brown-400 text-gold-brown-400" />
            <Star className="h-5 w-5 fill-gold-brown-400 text-gold-brown-400" />
            <Star className="h-5 w-5 fill-gold-brown-400 text-gold-brown-400" />
            <Star className="h-5 w-5 fill-gold-brown-400 text-gold-brown-400" />
          </div>
          <div className="text-sm">
            <span className="font-medium text-white">4.9/5</span> from over 3,000 reviews
          </div>
        </AnimateOnScroll>
      </div>
    </section>

    {/* Features */}
    <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-deep-blue-950 relative">
      <div className="absolute inset-0 bg-gradient-radial from-deep-blue-900/20 to-transparent"></div>
      <div className="container px-4 md:px-6 relative z-10">
        <AnimateOnScroll className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-gold-brown-500/20 px-3 py-1 text-sm text-gold-brown-300 border border-gold-brown-500/30">
              Powerful Features
            </div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
              <span className="bg-gradient-to-r from-white to-gold-brown-300 bg-clip-text text-transparent">
                Everything You Need to Build Better Projects
              </span>
            </h2>
            <p className="max-w-[900px] text-deep-blue-200 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Our platform is engineered to maximize your project outcomes with proven DIY guides, advanced techniques,
              and intuitive tools.
            </p>
          </div>
        </AnimateOnScroll>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-8 md:grid-cols-3 md:gap-12">
          {[
            {
              icon: <CreditCard className="h-10 w-10 text-gold-brown-400" />,
              title: "Step-by-Step DIY Guides",
              description:
                "Proven plans and guides that walk you through every step of your woodworking projects.",
            },
            {
              icon: <Users className="h-10 w-10 text-gold-brown-400" />,
              title: "Advanced Customization",
              description:
                "Tailor each project to your unique style and skill level with fully customizable plans.",
            },
            {
              icon: <MessageSquare className="h-10 w-10 text-gold-brown-400" />,
              title: "Expert Chat Support",
              description:
                "Instant access to expert advice that helps you overcome challenges and enhance project outcomes.",
            },
            {
              icon: <ShieldCheck className="h-10 w-10 text-gold-brown-400" />,
              title: "Project Comparisons",
              description:
                "Test different techniques and methods to discover what works best for your DIY projects.",
            },
            {
              icon: <Globe className="h-10 w-10 text-gold-brown-400" />,
              title: "Tool Optimization",
              description:
                "Plans optimized for every tool, from traditional hand tools to modern power equipment.",
            },
            {
              icon: <CheckCircle className="h-10 w-10 text-gold-brown-400" />,
              title: "Detailed Analytics",
              description:
                "Monitor your progress with real-time insights and metrics to refine your skills.",
            },
          ].map((feature, i) => (
            <AnimateOnScroll key={i} delay={i * 0.1}>
              <Card className="flex flex-col items-center text-center bg-deep-blue-800/50 border-deep-blue-700 hover:border-gold-brown-500/50 transition-all hover:shadow-lg hover:shadow-gold-brown-500/10 group">
                <CardHeader>
                  <motion.div
                    className="p-3 rounded-full bg-deep-blue-700/50 mb-4 border border-deep-blue-600/50 group-hover:bg-gold-brown-500/20 group-hover:border-gold-brown-500/30 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    {feature.icon}
                  </motion.div>
                  <CardTitle className="text-white group-hover:text-gold-brown-300 transition-colors">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-deep-blue-200">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>

    {/* Pricing */}
    <section id="pricing" className="w-full py-12 md:py-24 lg:py-32 bg-deep-blue-900 relative">
      <div className="absolute inset-0 bg-mesh opacity-10"></div>
      <div className="container px-4 md:px-6 relative z-10">
        <AnimateOnScroll className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-gold-brown-500/20 px-3 py-1 text-sm text-gold-brown-300 border border-gold-brown-500/30">
              Flexible Plans
            </div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
              <span className="bg-gradient-to-r from-white to-gold-brown-300 bg-clip-text text-transparent">
                Choose the Perfect Plan for Your DIY Journey
              </span>
            </h2>
            <p className="max-w-[900px] text-deep-blue-200 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Transparent pricing with no surprises. Cancel anytime.
            </p>
          </div>
        </AnimateOnScroll>
        <div className="mx-auto max-w-5xl py-8">
          <Tabs defaultValue="monthly" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="bg-deep-blue-800 border border-deep-blue-700">
                <TabsTrigger
                  value="monthly"
                  className="data-[state=active]:bg-gold-brown-500 data-[state=active]:text-deep-blue-900"
                >
                  Monthly
                </TabsTrigger>
                <TabsTrigger
                  value="annual"
                  className="data-[state=active]:bg-gold-brown-500 data-[state=active]:text-deep-blue-900"
                >
                  Annual (20% off)
                </TabsTrigger>
              </TabsList>
            </div>
            <TabsContent value="monthly" className="w-full">
              <div className="grid gap-6 md:grid-cols-3">
                {[
                  {
                    name: "Beginner",
                    price: "$97",
                    description: "Perfect for DIY beginners starting out.",
                    features: [
                      "Up to 5,000 project ideas",
                      "3 DIY guides",
                      "Basic chat support",
                      "Essential analytics",
                      "Email support",
                    ],
                    popular: false,
                  },
                  {
                    name: "Professional",
                    price: "$197",
                    description: "Ideal for growing DIY enthusiasts needing advanced plans.",
                    features: [
                      "Up to 20,000 project ideas",
                      "10 detailed guides",
                      "Advanced AI chat support",
                      "Unlimited project comparisons",
                      "Priority support",
                    ],
                    popular: true,
                  },
                  {
                    name: "Expert",
                    price: "$497",
                    description: "For seasoned builders who demand maximum performance.",
                    features: [
                      "Unlimited project ideas",
                      "Unlimited DIY guides",
                      "Custom AI chat support",
                      "Full API access",
                      "Dedicated success manager",
                    ],
                    popular: false,
                  },
                ].map((plan, i) => (
                  <AnimateOnScroll key={i} delay={i * 0.1}>
                    <Card
                      className={`flex flex-col bg-deep-blue-800/50 border-deep-blue-700 hover:shadow-lg hover:shadow-gold-brown-500/10 transition-all ${plan.popular ? "border-gold-brown-500/50 shadow-lg shadow-gold-brown-500/10" : ""}`}
                    >
                      {plan.popular && (
                        <div className="bg-gold-brown-500 text-deep-blue-900 text-center py-1 text-sm font-medium">
                          Most Popular
                        </div>
                      )}
                      <CardHeader>
                        <CardTitle className="text-white">{plan.name}</CardTitle>
                        <div className="mt-4 flex items-baseline">
                          <span className="text-5xl font-extrabold bg-gradient-to-r from-white to-gold-brown-300 bg-clip-text text-transparent">
                            {plan.price}
                          </span>
                          <span className="ml-1 text-xl font-normal text-deep-blue-300">/month</span>
                        </div>
                        <CardDescription className="mt-4 text-deep-blue-200">{plan.description}</CardDescription>
                      </CardHeader>
                      <CardContent className="flex-1">
                        <ul className="space-y-3">
                          {plan.features.map((feature, j) => (
                            <motion.li
                              key={j}
                              className="flex items-center"
                              initial={{ opacity: 0, x: -10 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ delay: j * 0.1 }}
                              viewport={{ once: true }}
                            >
                              <CheckCircle className="h-5 w-5 text-gold-brown-400 mr-2" />
                              <span className="text-deep-blue-100">{feature}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </CardContent>
                      <CardFooter>
                        <CtaButton
                          className="w-full"
                          variant={plan.popular ? "default" : "outline"}
                          size="lg"
                          style={{
                            background: plan.popular
                              ? "linear-gradient(to right, #D9AA3F, #BE8C2A)"
                              : "transparent",
                            borderColor: !plan.popular ? "#BE8C2A" : "transparent",
                            color: plan.popular ? "#0E2348" : "#D9AA3F",
                          }}
                        >
                          Get Started Now
                        </CtaButton>
                      </CardFooter>
                    </Card>
                  </AnimateOnScroll>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="annual" className="w-full">
              <div className="grid gap-6 md:grid-cols-3">
                {[
                  {
                    name: "Beginner",
                    price: "$77",
                    description: "Perfect for DIY beginners starting out.",
                    features: [
                      "Up to 5,000 project ideas",
                      "3 DIY guides",
                      "Basic chat support",
                      "Essential analytics",
                      "Email support",
                    ],
                    popular: false,
                  },
                  {
                    name: "Professional",
                    price: "$157",
                    description: "Ideal for growing DIY enthusiasts needing advanced plans.",
                    features: [
                      "Up to 20,000 project ideas",
                      "10 detailed guides",
                      "Advanced AI chat support",
                      "Unlimited project comparisons",
                      "Priority support",
                    ],
                    popular: true,
                  },
                  {
                    name: "Expert",
                    price: "$397",
                    description: "For seasoned builders who demand maximum performance.",
                    features: [
                      "Unlimited project ideas",
                      "Unlimited DIY guides",
                      "Custom AI chat support",
                      "Full API access",
                      "Dedicated success manager",
                    ],
                    popular: false,
                  },
                ].map((plan, i) => (
                  <AnimateOnScroll key={i} delay={i * 0.1}>
                    <Card
                      className={`flex flex-col bg-deep-blue-800/50 border-deep-blue-700 hover:shadow-lg hover:shadow-gold-brown-500/10 transition-all ${plan.popular ? "border-gold-brown-500/50 shadow-lg shadow-gold-brown-500/10" : ""}`}
                    >
                      {plan.popular && (
                        <div className="bg-gold-brown-500 text-deep-blue-900 text-center py-1 text-sm font-medium">
                          Most Popular
                        </div>
                      )}
                      <CardHeader>
                        <CardTitle className="text-white">{plan.name}</CardTitle>
                        <div className="mt-4 flex items-baseline">
                          <span className="text-5xl font-extrabold bg-gradient-to-r from-white to-gold-brown-300 bg-clip-text text-transparent">
                            {plan.price}
                          </span>
                          <span className="ml-1 text-xl font-normal text-deep-blue-300">/month</span>
                        </div>
                        <CardDescription className="mt-4 text-deep-blue-200">{plan.description}</CardDescription>
                      </CardHeader>
                      <CardContent className="flex-1">
                        <ul className="space-y-3">
                          {plan.features.map((feature, j) => (
                            <motion.li
                              key={j}
                              className="flex items-center"
                              initial={{ opacity: 0, x: -10 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ delay: j * 0.1 }}
                              viewport={{ once: true }}
                            >
                              <CheckCircle className="h-5 w-5 text-gold-brown-400 mr-2" />
                              <span className="text-deep-blue-100">{feature}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </CardContent>
                      <CardFooter>
                        <CtaButton
                          className="w-full"
                          variant={plan.popular ? "default" : "outline"}
                          size="lg"
                          style={{
                            background: plan.popular
                              ? "linear-gradient(to right, #D9AA3F, #BE8C2A)"
                              : "transparent",
                            borderColor: !plan.popular ? "#BE8C2A" : "transparent",
                            color: plan.popular ? "#0E2348" : "#D9AA3F",
                          }}
                        >
                          Get Started Now
                        </CtaButton>
                      </CardFooter>
                    </Card>
                  </AnimateOnScroll>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>



        {/* Testimonials */}
        <section id="depoimentos" className="w-full py-12 md:py-24 lg:py-32 bg-deep-blue-950 relative">
        <div className="absolute inset-0 bg-gradient-radial from-deep-blue-900/20 to-transparent"></div>
  <div className="container px-4 md:px-6 relative z-10">
    <AnimateOnScroll className="flex flex-col items-center justify-center space-y-4 text-center">
      <div className="space-y-2">
        <div className="inline-block rounded-lg bg-gold-brown-500/20 px-3 py-1 text-sm text-gold-brown-300 border border-gold-brown-500/30">
          Testimonials
        </div>
        <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
          <span className="bg-gradient-to-r from-white to-gold-brown-300 bg-clip-text text-transparent">
            What Our Customers Are Saying
          </span>
        </h2>
        <p className="max-w-[900px] text-deep-blue-200 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
          Thousands of DIY enthusiasts have transformed their projects using our platform.
        </p>
      </div>
    </AnimateOnScroll>
    <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-8 md:grid-cols-2 lg:grid-cols-3">
      {[
        {
          quote:
            "We boosted our conversions by 215% in the first month. Our investment paid for itself in under a week.",
          author: "Anna Smith",
          role: "CEO, TechStart",
          avatar: "/placeholder.svg?height=100&width=100",
        },
        {
          quote:
            "The ease of use and fast results blew me away. I've never seen a tool so effective at driving sales.",
          author: "Charles Morgan",
          role: "Marketing Director, Inova Group",
          avatar: "/placeholder.svg?height=100&width=100",
        },
        {
          quote:
            "The support is outstanding, and the conversion pages outperformed all our expectations. I recommend it for any business.",
          author: "Julia Costa",
          role: "Entrepreneur, Bella Moda",
          avatar: "/placeholder.svg?height=100&width=100",
        },
        {
          quote:
            "We implemented it on our e-commerce site, and sales surged by 178% in just 2 months. Truly impressive results!",
          author: "Robert Allen",
          role: "Director, MegaStore",
          avatar: "/placeholder.svg?height=100&width=100",
        },
        {
          quote:
            "The advanced segmentation allowed us to tailor experiences for each customer, and our ROI soared by 300%.",
          author: "Fernanda Lewis",
          role: "CMO, Nexus Group",
          avatar: "/placeholder.svg?height=100&width=100",
        },
        {
          quote:
            "After testing several solutions, this one stands out as the best. Its intuitive interface delivers real results.",
          author: "Marcelo Santos",
          role: "Founder, DigitalAgency",
          avatar: "/placeholder.svg?height=100&width=100",
        },
      ].map((testimonial, i) => (
        <AnimateOnScroll key={i} delay={i * 0.1}>
          <Card className="text-center bg-deep-blue-800/50 border-deep-blue-700 hover:border-gold-brown-500/30 transition-all hover:shadow-lg hover:shadow-gold-brown-500/10">
            <CardHeader>
              <motion.div
                className="flex justify-center"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <div className="relative h-16 w-16 overflow-hidden rounded-full border-2 border-gold-brown-500/50">
                  <Image
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={testimonial.author}
                    fill
                    className="rounded-full object-cover"
                  />
                </div>
              </motion.div>
              <div className="flex justify-center mt-2">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-5 w-5 fill-gold-brown-400 text-gold-brown-400" />
                  ))}
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-deep-blue-200">"{testimonial.quote}"</p>
              <div className="mt-4">
                <p className="font-semibold text-white">{testimonial.author}</p>
                <p className="text-sm text-deep-blue-300">{testimonial.role}</p>
              </div>
            </CardContent>
          </Card>
        </AnimateOnScroll>
      ))}
    </div>
  </div>
</section>

{/* FAQ */}
<section id="faq" className="w-full py-12 md:py-24 lg:py-32 bg-deep-blue-900 relative">
  <div className="absolute inset-0 bg-mesh opacity-10"></div>
  <div className="container px-4 md:px-6 relative z-10">
    <AnimateOnScroll className="flex flex-col items-center justify-center space-y-4 text-center">
      <div className="space-y-2">
        <div className="inline-block rounded-lg bg-gold-brown-500/20 px-3 py-1 text-sm text-gold-brown-300 border border-gold-brown-500/30">
          Frequently Asked Questions
        </div>
        <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
          <span className="bg-gradient-to-r from-white to-gold-brown-300 bg-clip-text text-transparent">
            Get Your Questions Answered
          </span>
        </h2>
        <p className="max-w-[900px] text-deep-blue-200 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
          We’ve answered the most common questions about our platform so you can start your DIY journey.
        </p>
      </div>
    </AnimateOnScroll>
    <div className="mx-auto grid max-w-3xl gap-4 py-8">
      {[
        {
          question: "How soon will I see results?",
          answer:
            "Most of our customers start noticing improved conversion rates within 7 days, with full results in 30 days of continuous optimization.",
        },
        {
          question: "Do I need technical knowledge?",
          answer:
            "Not at all! Our platform is designed to be extremely user-friendly, even for beginners. We offer ready-made templates and an intuitive drag-and-drop editor.",
        },
        {
          question: "Can I cancel at any time?",
          answer:
            "Absolutely. You can cancel your subscription anytime without any fees or penalties. We don’t lock you into long-term contracts.",
        },
        {
          question: "How does support work?",
          answer:
            "We provide email support for all plans with a response time of up to 24 hours. Our Professional and Expert plans include priority support with responses in as little as 4 hours.",
        },
        {
          question: "Is the platform suitable for all niches?",
          answer:
            "Yes! Our platform is versatile and works for any business. We have specialized templates for e-commerce, services, digital products, SaaS, and more.",
        },
        {
          question: "How is integration with my website handled?",
          answer:
            "Integration is simple and can be done via JavaScript code, a WordPress plugin, or domain redirection. Our setup assistant will guide you through every step.",
        },
      ].map((faq, i) => (
        <AnimateOnScroll key={i} delay={i * 0.1}>
          <Card className="bg-deep-blue-800/50 border-deep-blue-700 hover:border-gold-brown-500/30 transition-all hover:shadow-lg hover:shadow-gold-brown-500/10 group">
            <CardHeader>
              <CardTitle className="text-lg text-white group-hover:text-gold-brown-300 transition-colors">
                {faq.question}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-deep-blue-200">{faq.answer}</p>
            </CardContent>
          </Card>
        </AnimateOnScroll>
      ))}
    </div>
  </div>
</section>

{/* CTA */}
<section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-deep-blue-900 to-deep-blue-950 relative overflow-hidden">
  <div className="absolute inset-0 bg-mesh opacity-10"></div>
  <motion.div
    className="absolute -top-40 -right-40 w-80 h-80 bg-gold-brown-500/10 rounded-full blur-3xl"
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
    className="absolute -bottom-40 -left-40 w-80 h-80 bg-gold-brown-500/10 rounded-full blur-3xl"
    animate={{
      scale: [1, 1.2, 1],
      opacity: [0.2, 0.3, 0.2],
    }}
    transition={{
      duration: 8,
      repeat: Number.POSITIVE_INFINITY,
      repeatType: "reverse",
      delay: 2,
    }}
  />
  <div className="container px-4 md:px-6 relative z-10">
    <AnimateOnScroll className="flex flex-col items-center justify-center space-y-4 text-center">
      <div className="space-y-2">
        <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight lg:text-5xl">
          <span className="bg-gradient-to-r from-white to-gold-brown-300 bg-clip-text text-transparent">
            Ready to Supercharge Your DIY Projects?
          </span>
        </h2>
        <p className="max-w-[900px] text-deep-blue-200 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
          Join thousands of DIY enthusiasts who have revolutionized their project outcomes.
        </p>
      </div>
      <div className="mx-auto w-full max-w-sm space-y-2">
        <form className="flex flex-col sm:flex-row gap-2">
          <Input
            type="email"
            placeholder="Your best email"
            className="max-w-lg flex-1 bg-deep-blue-800 border-deep-blue-700 text-white focus:border-gold-brown-500 focus:ring-gold-brown-500/30"
          />
          <CtaButton
            type="submit"
            className="bg-gold-brown-500 hover:bg-gold-brown-600 text-deep-blue-900 font-medium"
          >
            Get Started Now
          </CtaButton>
        </form>
        <p className="text-xs text-deep-blue-300">
          Enjoy a 14-day free trial. No credit card required.
        </p>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-4 text-sm">
        <div className="flex items-center gap-1">
          <CheckCircle className="h-4 w-4 text-gold-brown-400" />
          <span className="text-deep-blue-200">Setup in 5 Minutes</span>
        </div>
        <div className="flex items-center gap-1">
          <CheckCircle className="h-4 w-4 text-gold-brown-400" />
          <span className="text-deep-blue-200">24/7 Support</span>
        </div>
        <div className="flex items-center gap-1">
          <CheckCircle className="h-4 w-4 text-gold-brown-400" />
          <span className="text-deep-blue-200">Guaranteed Results</span>
        </div>
      </div>
    </AnimateOnScroll>
  </div>
</section>
</main>

{/* Footer */}
<footer className="w-full border-t border-deep-blue-800 bg-deep-blue-950 py-6 md:py-12">
  <div className="container flex flex-col items-center justify-center gap-4 px-4 md:px-6 md:flex-row md:justify-between">
    <div className="flex items-center gap-2 font-bold text-xl">
      <Globe className="h-6 w-6 text-gold-brown-400" />
      <span className="bg-gradient-to-r from-white to-gold-brown-300 bg-clip-text text-transparent">
        WoodCraftPro
      </span>
    </div>
    <nav className="flex flex-wrap gap-4 sm:gap-6">
      <Link href="#" className="text-sm text-deep-blue-200 hover:text-gold-brown-300 transition-colors">
        Terms
      </Link>
      <Link href="#" className="text-sm text-deep-blue-200 hover:text-gold-brown-300 transition-colors">
        Privacy
      </Link>
      <Link href="#" className="text-sm text-deep-blue-200 hover:text-gold-brown-300 transition-colors">
        Cookies
      </Link>
      <Link href="#" className="text-sm text-deep-blue-200 hover:text-gold-brown-300 transition-colors">
        Licenses
      </Link>
      <Link href="#" className="text-sm text-deep-blue-200 hover:text-gold-brown-300 transition-colors">
        Contact
      </Link>
    </nav>
    <div className="flex items-center gap-4">
      <Link href="#" className="text-deep-blue-300 hover:text-gold-brown-400 transition-colors">
        <span className="sr-only">Facebook</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-5 w-5"
        >
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
        </svg>
      </Link>
      <Link href="#" className="text-deep-blue-300 hover:text-gold-brown-400 transition-colors">
        <span className="sr-only">Instagram</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-5 w-5"
        >
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
          <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
        </svg>
      </Link>
      <Link href="#" className="text-deep-blue-300 hover:text-gold-brown-400 transition-colors">
        <span className="sr-only">Twitter</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-5 w-5"
        >
          <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
        </svg>
      </Link>
    </div>
  </div>
  <div className="container px-4 md:px-6 mt-6">
    <p className="text-center text-sm text-deep-blue-400">
      &copy; {new Date().getFullYear()} WoodCraftPro. All rights reserved.
    </p>
  </div>
</footer>
</div>
  )
}

