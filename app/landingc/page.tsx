import Link from "next/link"
import Image from "next/image"
import { Star, Play, Check, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import TestimonialSlider from "@/components/layout/testimonial-slider"
import ProductSlider from "@/components/layout/product-slider"
import PlanSlider from "@/components/layout/plan-slider"
import DynamicShowcaseGrid from "@/components/layout/dynamic-showcase-grid"
import ScrollReveal from "@/components/layout/3d-scroll-reveal"
import CustomerSuccessTimeline from "@/components/layout/customer-success-timeline"
import BeforeAfterCards from "@/components/layout/before-after-cards"
import CountdownTimer from "@/components/layout/countdown-timer"
import ProductViewer360 from "@/components/layout/product-viewer-360"
import PlanFinderQuiz from "@/components/layout/plan-finder-quiz"
import SocialProofWall from "@/components/layout/social-proof-wall"
// import WorkshopRegistration from "@/salvarcomponente/workshop-registration"
import FloatingGuarantee from "@/components/layout/floating-guarantee"
import AIWoodworkingAssistant from "@/components/layout/ai-woodworking-assistant"
import FloatingCart from "@/components/layout/floating-cart"
import EmotionalCTA from "@/components/layout/emotional-cta"



export default function LandingC(): React.ReactElement {
  
  return (
      <div className="flex min-h-screen flex-col bg-[#f9f5f0]">
      
      <header className="sticky top-0 z-50 w-full border-b border-[#e0d5c8] bg-[#f9f5f0]/95 backdrop-blur supports-[backdrop-filter]:bg-[#f9f5f0]/80">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Image src="/logo.png" alt="Logo" width={150} height={40} className="rounded" />
          </div>
          <nav className="hidden md:flex gap-6">
            <Link
              href="#features"
              className="text-[#5a3d2b] hover:text-[#d35400] text-sm font-medium transition-colors"
            >
              Features
            </Link>
            <Link href="#plans" className="text-[#5a3d2b] hover:text-[#d35400] text-sm font-medium transition-colors">
              Plans
            </Link>
            <Link
              href="#testimonials"
              className="text-[#5a3d2b] hover:text-[#d35400] text-sm font-medium transition-colors"
            >
              Testimonials
            </Link>
            <Link href="#about" className="text-[#5a3d2b] hover:text-[#d35400] text-sm font-medium transition-colors">
              About
            </Link>
          </nav>
          <Link href="https://orders.clickbank.net/?cbfid=13103&cbitems=8&corid=3e8d3625-66da-4662-8269-7072604c6776&hopId=e52f7094-af3a-4a20-b745-8efd02dcb7ad&oaref=01.77DE3D3A119DF91E12ECE773763DD534AF522216987F20A8541FB804404292F5A5ADC7F6&template=20357&time=1742825570&vtid=tedplandiy&vvvv=tedsplans&vvar=cbfid%3D13103%26cbitems%3D8%26cbskin%3D20357%26vtid%3Dtedplandiy">
            <Button className="bg-[#d35400] hover:bg-[#a04000] text-white">Get Access Now</Button>
          </Link>
        </div>
      </header>

      <main className="flex-1">
      <section className="relative py-12 md:py-24 bg-[url('/retina_wood-main-bg.jpg')] bg-cover bg-center">
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="container relative z-10 mx-auto px-4 text-center text-white">
        <div className="flex justify-center mb-4">
          {[1, 2, 3, 4, 5].map((star) => (
            <Star key={star} className="h-6 w-6 fill-yellow-400 text-yellow-400" />
          ))}
        </div>
        <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
          16,000 Woodworking Plans & Projects
        </h1>

        <div className="mx-auto mb-8 max-w-3xl">
          <div className="relative aspect-video overflow-hidden rounded-lg border-4 border-[#8B4513] shadow-xl">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/2fn3sqB6WPQ?autoplay=0&controls=0&rel=0&modestbranding=1&showinfo=0&wmode=transparent&cc_load_policy=0&disablekb=1&playsinline=1&enablejsapi=1&origin=https%3A%2F%2Ftedplansdiy.com&widgetid=1&forigin=https%3A%2F%2Ftedplansdiy.com%2F%3FhopId%3D55de4531-58fc-4f8c-8105-0e5f776ddcc8%26%26shield%3Df7eef0y6zcvyl1bggc3hx5-i6i%26traffic_source%3Dpressel_button%26traffic_type%3Dpressel_type&aoriginsup=1&vf=6&hopId=55de4531-58fc-4f8c-8105-0e5f776ddcc8"
              title="Woodworking Video"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        <p className="mx-auto mb-8 max-w-2xl text-xl md:text-2xl">
          Step-by-Step Instructions For Beautiful Woodworking Projects - Even If You're A Complete Beginner!
        </p>
          <Link href="https://orders.clickbank.net/?cbfid=13103&cbitems=8&corid=baa1eac4-0789-4867-9c02-e99d77ff5cdc&hopId=e52f7094-af3a-4a20-b745-8efd02dcb7ad&oaref=01.77DE3D3A119DF91E12ECE773763DD534AF522216987F20A8541FB804404292F5A5ADC7F6&template=20357&time=1742480124&vtid=tedplandiy&vvvv=tedsplans&vvar=cbfid%3D13103%26cbitems%3D8%26cbskin%3D20357%26vtid%3Dtedplandiy">
            <Button className="h-14 px-8 text-lg bg-[#d35400] hover:bg-[#a04000] text-white">
          Get Instant Access
        </Button>
        </Link>
      </div>
    </section>
  
      <section className="py-8 bg-[#5a3d2b] text-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="rounded-full bg-[#d35400] p-3">
                  <Check className="h-6 w-6" />
                </div>
                <p className="font-medium">Detailed Plans</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="rounded-full bg-[#d35400] p-3">
                  <Check className="h-6 w-6" />
                </div>
                <p className="font-medium">Step-by-Step Instructions</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="rounded-full bg-[#d35400] p-3">
                  <Check className="h-6 w-6" />
                </div>
                <p className="font-medium">Materials Lists</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="rounded-full bg-[#d35400] p-3">
                  <Check className="h-6 w-6" />
                </div>
                <p className="font-medium">Lifetime Access</p>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-16 bg-[#f9f5f0]">
          <div className="container mx-auto px-4">
            <h2 className="mb-6 text-center text-3xl font-bold text-[#5a3d2b] md:text-4xl">
              Special Limited-Time Offer
            </h2>
            <p className="mx-auto mb-12 max-w-2xl text-center text-[#5a3d2b]/80">
              This exclusive discount won't last forever. Lock in your lifetime access now!
            </p>

            <CountdownTimer />
          </div>
        </section>
              <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="mb-8 text-center text-3xl font-bold text-[#5a3d2b] md:text-4xl">
              Explore Our Collection of 16,000 Plans
            </h2>
            <p className="mx-auto mb-12 max-w-2xl text-center text-[#5a3d2b]/80">
              From furniture to outdoor projects, our plans cover every type of woodworking project imaginable.
            </p>

            <DynamicShowcaseGrid />
          </div>
        </section>

        <section className="py-16 bg-[#f9f5f0]" id="testimonials">
          <div className="container mx-auto px-4">
            <h2 className="mb-12 text-center text-3xl font-bold text-[#5a3d2b] md:text-4xl">
              Success Stories From Our Community
            </h2>
            <CustomerSuccessTimeline />
          </div>
        </section>
        <EmotionalCTA />
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid gap-8 md:grid-cols-3">
              <div className="group relative overflow-hidden rounded-lg bg-white p-6 shadow-md transition-all hover:shadow-xl">
                <div className="mb-4 text-[#d35400]">
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
                    className="h-10 w-10"
                  >
                    <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z"></path>
                    <path d="M3 9V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v4"></path>
                  </svg>
                </div>
                <h3 className="mb-2 text-xl font-bold text-[#5a3d2b]">Beginner Friendly</h3>
                <p className="text-[#5a3d2b]/80">
                  No experience needed. Our plans include detailed step-by-step instructions that anyone can follow.
                </p>
                <div className="absolute bottom-0 left-0 h-1 w-0 bg-[#d35400] transition-all duration-300 group-hover:w-full"></div>
              </div>

              <div className="group relative overflow-hidden rounded-lg bg-white p-6 shadow-md transition-all hover:shadow-xl">
                <div className="mb-4 text-[#d35400]">
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
                    className="h-10 w-10"
                  >
                    <path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z"></path>
                    <path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"></path>
                    <path d="M12 2v2"></path>
                    <path d="M12 22v-2"></path>
                    <path d="m17 20.66-1-1.73"></path>
                    <path d="M11 10.27 7 3.34"></path>
                    <path d="m20.66 17-1.73-1"></path>
                    <path d="m3.34 7 1.73 1"></path>
                    <path d="M14 12h8"></path>
                    <path d="M2 12h2"></path>
                    <path d="m20.66 7-1.73 1"></path>
                    <path d="m3.34 17 1.73-1"></path>
                    <path d="m17 3.34-1 1.73"></path>
                    <path d="m7 20.66 1-1.73"></path>
                  </svg>
                </div>
                <h3 className="mb-2 text-xl font-bold text-[#5a3d2b]">Detailed Blueprints</h3>
                <p className="text-[#5a3d2b]/80">
                  Every plan includes precise measurements, cutting lists, and 3D diagrams to ensure perfect results.
                </p>
                <div className="absolute bottom-0 left-0 h-1 w-0 bg-[#d35400] transition-all duration-300 group-hover:w-full"></div>
              </div>

              <div className="group relative overflow-hidden rounded-lg bg-white p-6 shadow-md transition-all hover:shadow-xl">
                <div className="mb-4 text-[#d35400]">
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
                    className="h-10 w-10"
                  >
                    <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"></path>
                    <path d="m3.3 7 8.7 5 8.7-5"></path>
                    <path d="M12 22V12"></path>
                  </svg>
                </div>
                <h3 className="mb-2 text-xl font-bold text-[#5a3d2b]">Huge Variety</h3>
                <p className="text-[#5a3d2b]/80">
                  From small crafts to large furniture, our 16,000 plans cover every type of woodworking project
                  imaginable.
                </p>
                <div className="absolute bottom-0 left-0 h-1 w-0 bg-[#d35400] transition-all duration-300 group-hover:w-full"></div>
              </div>
            </div>
          </div>
        </section>

       <section className="py-16 bg-[#f9f5f0]" id="features">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="mb-6 text-3xl font-bold text-[#5a3d2b] md:text-4xl">Get 50 Free Woodworking Plans</h2>
              <p className="mb-8 text-lg text-[#5a3d2b]/80">
                Enter your email below and we'll send you 50 free woodworking plans right away. No strings attached!
              </p>

              <div className="mx-auto mb-8 max-w-md">
                <div className="flex gap-2">
                  <Input
                    type="email"
                    placeholder="Your email address"
                    className="h-12 border-[#8B4513]/20 focus-visible:ring-[#d35400]"
                  />
                  <Link href="https://orders.clickbank.net/?cbfid=13103&cbitems=8&corid=3e8d3625-66da-4662-8269-7072604c6776&hopId=e52f7094-af3a-4a20-b745-8efd02dcb7ad&oaref=01.77DE3D3A119DF91E12ECE773763DD534AF522216987F20A8541FB804404292F5A5ADC7F6&template=20357&time=1742825570&vtid=tedplandiy&vvvv=tedsplans&vvar=cbfid%3D13103%26cbitems%3D8%26cbskin%3D20357%26vtid%3Dtedplandiy">
                  <Button className="h-12 bg-[#2e7d32] hover:bg-[#1b5e20] text-white">Get Free Plans</Button>
                  </Link>
                  
                </div>
                <p className="mt-2 text-sm text-[#5a3d2b]/60">We respect your privacy. Unsubscribe at any time.</p>
              </div>
            </div>

            <div className="mt-16">
              <h3 className="mb-8 text-center text-2xl font-bold text-[#5a3d2b]">What Our Customers Say</h3>
              <TestimonialSlider />
            </div>
          </div>
        </section>
        <section className="py-16 bg-white" id="about">
          <div className="container mx-auto px-4">
            <h2 className="mb-12 text-center text-3xl font-bold text-[#5a3d2b] md:text-4xl">
              Why Choose Our Woodworking Plans?
            </h2>

            <ProductSlider />
          </div>
        </section>

    
        <section className="py-16 bg-[#f9f5f0]">
          <div className="container mx-auto px-4">
            <h2 className="mb-6 text-center text-3xl font-bold text-[#5a3d2b] md:text-4xl">
              Find Your Perfect Woodworking Project
            </h2>
            <p className="mx-auto mb-12 max-w-2xl text-center text-[#5a3d2b]/80">
              Answer a few simple questions and we'll recommend the perfect plan for your skill level and interests.
            </p>

            <PlanFinderQuiz />
          </div>
        </section>
      
        <section className="py-12 bg-[#d35400] text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Limited Time Offer</h2>
            <p className="mx-auto mb-8 max-w-2xl text-lg">
              Get all 16,000 woodworking plans plus 4 bonuses worth $297 - all for one low price! This special offer
              won't last long.
            </p>
            <Link href="https://orders.clickbank.net/?cbfid=13103&cbitems=8&corid=baa1eac4-0789-4867-9c02-e99d77ff5cdc&hopId=e52f7094-af3a-4a20-b745-8efd02dcb7ad&oaref=01.77DE3D3A119DF91E12ECE773763DD534AF522216987F20A8541FB804404292F5A5ADC7F6&template=20357&time=1742480124&vtid=tedplandiy&vvvv=tedsplans&vvar=cbfid%3D13103%26cbitems%3D8%26cbskin%3D20357%26vtid%3Dtedplandiy">
            <Button className="h-14 px-8 text-lg bg-white hover:bg-white/90 text-[#d35400]">
              Get Instant Access Now
            </Button>
            </Link>
          </div>
        </section>
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <SocialProofWall />
          </div>
        </section>

        <section className="py-12 bg-[url('/retina_wood-main-bg.jpg')] bg-cover bg-center bg-[#8B4513]">
          <div className="container mx-auto px-4 text-center">
            <h2 className="mb-6 text-3xl font-bold text-white md:text-4xl">Get Access To All 16,000 Plans Today</h2>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-white/90">
              Stop wasting time and money on woodworking projects that don't work out. Our detailed plans make
              woodworking easy and enjoyable!
            </p>
            <Link href="https://orders.clickbank.net/?cbfid=13103&cbitems=8&corid=baa1eac4-0789-4867-9c02-e99d77ff5cdc&hopId=e52f7094-af3a-4a20-b745-8efd02dcb7ad&oaref=01.77DE3D3A119DF91E12ECE773763DD534AF522216987F20A8541FB804404292F5A5ADC7F6&template=20357&time=1742480124&vtid=tedplandiy&vvvv=tedsplans&vvar=cbfid%3D13103%26cbitems%3D8%26cbskin%3D20357%26vtid%3Dtedplandiy">
              <Button className="h-14 px-8 text-lg bg-[#d35400] hover:bg-[#a04000] text-white">Buy Now</Button>
            </Link>
          </div>
        </section>

        <section className="py-16 bg-[#f9f5f0]" id="plans">
          <div className="container mx-auto px-4">
            <h2 className="mb-12 text-center text-3xl font-bold text-[#5a3d2b] md:text-4xl">
            Claim These 4 Exclusive Bonuses If You Order Today!

            </h2>

            <PlanSlider />

            <div className="mt-12 text-center">
              <Button className="h-12 px-8 bg-[#d35400] hover:bg-[#a04000] text-white">View All 16,000 Plans</Button>
            </div>
          </div>
        </section>

        <section className="py-16 bg-[#f9f5f0]">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl">
              <h2 className="mb-8 text-center text-3xl font-bold text-[#5a3d2b] md:text-4xl">What You'll Get</h2>

              <div className="space-y-6">
                <div className="flex gap-4 rounded-lg border border-[#e0d5c8] p-4 transition-all hover:border-[#d35400] hover:shadow-md">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#d35400]/10 text-[#d35400]">
                    <Check className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-[#5a3d2b]">16,000 Woodworking Plans</h3>
                    <p className="text-[#5a3d2b]/80">
                      Access our complete library of detailed woodworking plans covering furniture, outdoor projects,
                      crafts, and more.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 rounded-lg border border-[#e0d5c8] p-4 transition-all hover:border-[#d35400] hover:shadow-md">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#d35400]/10 text-[#d35400]">
                    <Check className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-[#5a3d2b]">Lifetime Updates</h3>
                    <p className="text-[#5a3d2b]/80">
                      Get access to all future plans and updates at no additional cost.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 rounded-lg border border-[#e0d5c8] p-4 transition-all hover:border-[#d35400] hover:shadow-md">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#d35400]/10 text-[#d35400]">
                    <Check className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-[#5a3d2b]">DWG/CAD Files Included</h3>
                    <p className="text-[#5a3d2b]/80">
                      Edit and customize plans to fit your specific needs with included CAD files.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 rounded-lg border border-[#e0d5c8] p-4 transition-all hover:border-[#d35400] hover:shadow-md">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#d35400]/10 text-[#d35400]">
                    <Check className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-[#5a3d2b]">60-Day Money Back Guarantee</h3>
                    <p className="text-[#5a3d2b]/80">
                      Try our plans risk-free. If you're not satisfied, we'll refund your purchase - no questions asked.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-12 bg-[#5a3d2b] text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="mb-6 text-3xl font-bold md:text-4xl">Start Building Your Dream Projects Today</h2>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-white/90">
              Join thousands of woodworkers who have transformed their hobby with our detailed plans.
            </p>
            <Link href="https://orders.clickbank.net/?cbfid=13103&cbitems=8&corid=9debc046-72f3-4b5b-a17d-462abc0fd2e5&hopId=d48bf91d-ea1d-4243-990c-03bbb5b6d24f&oaref=01.77DE3D3A119DF91E12ECE773763DD534AF522216987F20A8541FB804404292F5A5ADC7F6&template=20357&time=1742825154&vtid=tedplandiy&vvvv=tedsplans&vvar=cbfid%3D13103%26cbitems%3D8%26cbskin%3D20357%26vtid%3Dtedplandiy">
                <Button className="group h-14 px-8 text-lg bg-[#d35400] hover:bg-[#a04000] text-white">
                Get Instant Access
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <p className="mt-4 text-sm text-white/70">Secure payment - 60-day money back guarantee</p>
          </div>
        </section>
      </main>

      <footer className="border-t border-[#e0d5c8] bg-[#f9f5f0] py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="flex items-center gap-2">
              <Image src="/placeholder.svg?height=32&width=32" alt="Logo" width={32} height={32} className="rounded" />
              <span className="text-lg font-bold text-[#8B4513]">Woodworking Plans</span>
            </div>

            <nav className="flex gap-6">
              <Link href="#" className="text-sm text-[#5a3d2b] hover:text-[#d35400]">
                Privacy Policy
              </Link>
              <Link href="#" className="text-sm text-[#5a3d2b] hover:text-[#d35400]">
                Terms of Service
              </Link>
              <Link href="#" className="text-sm text-[#5a3d2b] hover:text-[#d35400]">
                Contact Us
              </Link>
            </nav>
          </div>
          <div className="mt-6 text-center text-sm text-[#5a3d2b]/60">
            &copy; {new Date().getFullYear()} Woodworking Plans. All rights reserved.
          </div>
        </div>
      </footer>

      {/* Floating Components */}
      <FloatingGuarantee />
      <AIWoodworkingAssistant />
      <FloatingCart />
    </div>
  )
}

