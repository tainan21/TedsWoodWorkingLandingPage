import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Clock, ShieldCheck, PenToolIcon as Tool, Package, FileText, Video } from "lucide-react"
import Testimonials from "@/components/ui-enhancements/testimonials"
import CountdownTimer from "@/components/ui-enhancements/countdown-timerb"
import PlanShowcase from "@/components/ui-enhancements/plan-showcase"
import BonusCard from "@/components/ui-enhancements/bonus-card"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-amber-50 to-white py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
            <div className="space-y-6">
              <Badge className="bg-amber-100 text-amber-800 hover:bg-amber-200">World's Largest Collection</Badge>
              <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
                Unlock the World's Largest Collection of <span className="text-amber-700">Woodworking Plans</span>
              </h1>
              <p className="text-xl text-gray-700">
                Get instant access to 16,000 detailed woodworking plans and projects. Build anything you've ever dreamed
                of with ease and confidence—no more wasted time, materials, or frustration.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white">
                  Get Instant Access Now
                </Button>
                <Button size="lg" variant="outline" className="border-amber-600 text-amber-700 hover:bg-amber-50">
                  Learn More
                </Button>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <ShieldCheck className="h-4 w-4" />
                <span>60-Day Money Back Guarantee</span>
              </div>
            </div>
            <div className="relative h-[400px] rounded-xl overflow-hidden shadow-xl">
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
          </div>
        </div>

        {/* Floating Stats */}
        <div className="container mx-auto px-4 mt-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 -mt-8 relative z-10">
            <Card className="bg-white shadow-lg border-amber-100">
              <CardContent className="p-4 text-center">
                <p className="text-3xl font-bold text-amber-700">16,000+</p>
                <p className="text-sm text-gray-600">Woodworking Plans</p>
              </CardContent>
            </Card>
            <Card className="bg-white shadow-lg border-amber-100">
              <CardContent className="p-4 text-center">
                <p className="text-3xl font-bold text-amber-700">50+</p>
                <p className="text-sm text-gray-600">Categories</p>
              </CardContent>
            </Card>
            <Card className="bg-white shadow-lg border-amber-100">
              <CardContent className="p-4 text-center">
                <p className="text-3xl font-bold text-amber-700">20+</p>
                <p className="text-sm text-gray-600">Years Experience</p>
              </CardContent>
            </Card>
            <Card className="bg-white shadow-lg border-amber-100">
              <CardContent className="p-4 text-center">
                <p className="text-3xl font-bold text-amber-700">100%</p>
                <p className="text-sm text-gray-600">Satisfaction</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Problem-Solution Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Tired of Frustrating Woodworking Plans?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Many woodworkers struggle with incomplete plans, confusing instructions, and wasted materials.
              TedsWoodworking solves all that with clear, detailed, and easy-to-follow plans for every project.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <div className="bg-red-50 p-6 rounded-lg border border-red-100">
                <h3 className="font-bold text-lg mb-2 text-red-700">Common Woodworking Frustrations:</h3>
                <ul className="space-y-3">
                  {[
                    "Incomplete or vague instructions",
                    "Missing measurements and cutting lists",
                    "Poor quality diagrams and illustrations",
                    "Wasted time and materials from trial and error",
                    "Projects that don't match expectations",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0"
                      >
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                      </svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-green-50 p-6 rounded-lg border border-green-100">
                <h3 className="font-bold text-lg mb-2 text-green-700">The TedsWoodworking Solution:</h3>
                <ul className="space-y-3">
                  {[
                    "Step-by-step instructions anyone can follow",
                    "Detailed cutting lists and material requirements",
                    "Clear, professional diagrams and 3D illustrations",
                    "Time-saving techniques and material optimization",
                    "Guaranteed successful project completion",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Authority Introduction */}
      <section className="py-20 bg-amber-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
  <div className="relative h-[400px] rounded-xl overflow-hidden shadow-xl p-10 bg-white order-2 md:order-1">
    <Image
      src="/allbooks.jpg"
      alt="Ted McGrath, Woodworking Expert"
      fill
      className="object-cover p-10"
    />
  </div>
            <div className="space-y-6 order-1 md:order-2">
              <h2 className="text-3xl font-bold">Meet Ted McGrath, Your Woodworking Expert</h2>
              <p className="text-lg text-gray-700">
                With over 20 years of experience in woodworking and carpentry, Ted has crafted the ultimate collection
                of woodworking plans to help you succeed. His passion for teaching and attention to detail has made him
                a trusted authority in the woodworking community.
              </p>
              <p className="text-lg text-gray-700">
                Ted created this comprehensive collection after seeing countless woodworkers struggle with poor-quality
                plans. His mission is to make woodworking accessible, enjoyable, and successful for everyone—from
                beginners to seasoned craftsmen.
              </p>
              <div className="flex items-center gap-4">
                <div className="flex -space-x-2">
                  {[...Array(4)].map((_, i) => (
                    <div key={i} className="h-10 w-10 rounded-full border-2 border-white overflow-hidden relative">
                      <Image
                        src={`/placeholder.svg?height=100&width=100&text=${i + 1}`}
                        alt="Woodworker"
                        fill
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
                <p className="text-sm text-gray-600">
                  <span className="font-bold">Trusted by 50,000+</span> woodworkers worldwide
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Plan Showcase */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Explore Our Massive Collection</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Browse through a small sample of our 16,000 woodworking plans. From simple weekend projects to complex
              furniture pieces, we have plans for every skill level and interest.
            </p>
          </div>
          <PlanShowcase />
          <div className="text-center mt-12">
            <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white">
              Get Access to All 16,000 Plans
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-amber-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What's Included in Every Plan</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Each plan comes with detailed step-by-step instructions, precise cutting and material lists, clear
              diagrams, and more. Everything you need to succeed, whether you're a beginner or a pro.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white border-amber-100">
              <CardContent className="p-6 text-center space-y-4">
                <div className="mx-auto bg-amber-100 rounded-full w-16 h-16 flex items-center justify-center">
                  <FileText className="h-8 w-8 text-amber-700" />
                </div>
                <h3 className="text-xl font-bold">Step-by-Step Instructions</h3>
                <p className="text-gray-600">
                  Clear, easy-to-follow instructions that guide you through every stage of the project, from start to
                  finish.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white border-amber-100">
              <CardContent className="p-6 text-center space-y-4">
                <div className="mx-auto bg-amber-100 rounded-full w-16 h-16 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-amber-700"
                  >
                    <path d="M3 3v18h18"></path>
                    <path d="M18 17V9"></path>
                    <path d="M13 17V5"></path>
                    <path d="M8 17v-3"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Cutting & Materials Lists</h3>
                <p className="text-gray-600">
                  Detailed lists of all materials needed and precise cutting dimensions to minimize waste and save
                  money.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white border-amber-100">
              <CardContent className="p-6 text-center space-y-4">
                <div className="mx-auto bg-amber-100 rounded-full w-16 h-16 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-amber-700"
                  >
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                    <circle cx="8.5" cy="8.5" r="1.5"></circle>
                    <polyline points="21 15 16 10 5 21"></polyline>
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Detailed Diagrams</h3>
                <p className="text-gray-600">
                  High-quality schematics, 3D renderings, and exploded views that make visualization easy.
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mt-8">
            <Card className="bg-white border-amber-100">
              <CardContent className="p-6 text-center space-y-4">
                <div className="mx-auto bg-amber-100 rounded-full w-16 h-16 flex items-center justify-center">
                  <Tool className="h-8 w-8 text-amber-700" />
                </div>
                <h3 className="text-xl font-bold">Tool Requirements</h3>
                <p className="text-gray-600">
                  Complete list of tools needed for each project, with alternatives for different skill levels and
                  budgets.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white border-amber-100">
              <CardContent className="p-6 text-center space-y-4">
                <div className="mx-auto bg-amber-100 rounded-full w-16 h-16 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-amber-700"
                  >
                    <path d="M12 20h9"></path>
                    <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Finishing Details</h3>
                <p className="text-gray-600">
                  Expert advice on sanding, staining, and finishing to give your projects a professional look.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white border-amber-100">
              <CardContent className="p-6 text-center space-y-4">
                <div className="mx-auto bg-amber-100 rounded-full w-16 h-16 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-amber-700"
                  >
                    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Tips & Tricks</h3>
                <p className="text-gray-600">
                  Professional woodworking secrets and time-saving techniques to make your projects easier and better.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose TedsWoodworking?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Save time, avoid frustration, and achieve professional-quality results with plans designed for all skill
              levels. Say goodbye to confusing instructions and hello to woodworking success.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              {[
                {
                  title: "Save Time & Money",
                  description:
                    "No more trial and error or wasted materials. Our precise plans help you get it right the first time.",
                  icon: (
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
                      className="h-6 w-6 text-amber-700"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="12 6 12 12 16 14"></polyline>
                    </svg>
                  ),
                },
                {
                  title: "Perfect for All Skill Levels",
                  description:
                    "Whether you're a beginner or a seasoned woodworker, our plans are designed to be accessible and clear.",
                  icon: (
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
                      className="h-6 w-6 text-amber-700"
                    >
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                      <circle cx="9" cy="7" r="4"></circle>
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                    </svg>
                  ),
                },
                {
                  title: "Massive Variety",
                  description:
                    "With 16,000 plans covering everything from small crafts to large furniture, you'll never run out of projects.",
                  icon: (
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
                      className="h-6 w-6 text-amber-700"
                    >
                      <rect x="3" y="3" width="7" height="7"></rect>
                      <rect x="14" y="3" width="7" height="7"></rect>
                      <rect x="14" y="14" width="7" height="7"></rect>
                      <rect x="3" y="14" width="7" height="7"></rect>
                    </svg>
                  ),
                },
              ].map((benefit, i) => (
                <div key={i} className="flex gap-4">
                  <div className="bg-amber-100 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                    {benefit.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="space-y-8">
              {[
                {
                  title: "Lifetime Updates",
                  description:
                    "Get access to new plans and improvements as they're added to the collection, at no extra cost.",
                  icon: (
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
                      className="h-6 w-6 text-amber-700"
                    >
                      <path d="M21 2v6h-6"></path>
                      <path d="M3 12a9 9 0 0 1 15-6.7L21 8"></path>
                      <path d="M3 12a9 9 0 0 0 15 6.7l3-2.7"></path>
                    </svg>
                  ),
                },
                {
                  title: "Expert Support",
                  description: "Get help and advice from our team of experienced woodworkers whenever you need it.",
                  icon: (
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
                      className="h-6 w-6 text-amber-700"
                    >
                      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                    </svg>
                  ),
                },
                {
                  title: "Risk-Free Purchase",
                  description:
                    "Our 60-day money-back guarantee ensures you're completely satisfied with your purchase.",
                  icon: (
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
                      className="h-6 w-6 text-amber-700"
                    >
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                    </svg>
                  ),
                },
              ].map((benefit, i) => (
                <div key={i} className="flex gap-4">
                  <div className="bg-amber-100 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                    {benefit.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-amber-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What Our Customers Say</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join thousands of satisfied woodworkers who have transformed their projects with TedsWoodworking plans.
            </p>
          </div>
          <Testimonials />
          <div className="text-center mt-12">
            <p className="text-lg font-bold text-amber-700">Join over 50,000 satisfied customers worldwide!</p>
          </div>
        </div>
      </section>

      {/* Bonuses Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Get These Exclusive Bonuses FREE</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              When you purchase today, you'll also receive these valuable bonuses at no extra cost—a $297 value!
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <BonusCard
              title="DWG/CAD Plan Viewer"
              value="$97 Value"
              description="View and modify woodworking plans with this easy-to-use software. No CAD experience needed!"
              icon={<Package className="h-8 w-8 text-amber-700" />}
            />
            <BonusCard
              title="150 Premium Woodworking Videos"
              value="$77 Value"
              description="Watch expert tutorials covering essential woodworking techniques and project walkthroughs."
              icon={<Video className="h-8 w-8 text-amber-700" />}
            />
            <BonusCard
              title="Complete Woodworking Guides"
              value="$123 Value"
              description="Access comprehensive guides on wood selection, finishing techniques, and advanced joinery."
              icon={<FileText className="h-8 w-8 text-amber-700" />}
            />
          </div>
        </div>
      </section>

      {/* Guarantee Section */}
      <section className="py-20 bg-amber-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <div className="mx-auto bg-amber-100 rounded-full w-20 h-20 flex items-center justify-center mb-4">
                <ShieldCheck className="h-10 w-10 text-amber-700" />
              </div>
              <h2 className="text-3xl font-bold mb-4">Our 60-Day Money Back Guarantee</h2>
              <p className="text-xl text-gray-600">
                We're so confident you'll love TedsWoodworking that we offer a full 60-day money-back guarantee. If
                you're not completely satisfied with our plans, simply let us know and we'll refund your money in full.
                No questions asked.
              </p>
            </div>
            <Card className="border-2 border-amber-600">
              <CardContent className="p-8">
                <div className="flex items-center justify-center mb-6">
                  <div className="bg-amber-100 rounded-full p-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="48"
                      height="48"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-amber-700"
                    >
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                      <path d="m9 12 2 2 4-4"></path>
                    </svg>
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4">Zero Risk, 100% Satisfaction</h3>
                <p className="text-gray-600 mb-6">
                  Try TedsWoodworking for a full 60 days. If you don't find our plans helpful, clear, and easy to
                  follow, or if you're unsatisfied for any reason at all, simply email us and we'll promptly refund your
                  entire purchase. We stand behind our product with complete confidence.
                </p>
                <div className="flex justify-center">
                  <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white">
                    Get Instant Access Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Urgency Section */}
      <section className="py-12 bg-amber-700 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2">
              <h2 className="text-2xl font-bold">Limited-Time Offer!</h2>
              <p className="text-amber-100">Special price and bonuses available for a limited time only.</p>
            </div>
            <CountdownTimer />
            <Button size="lg" className="bg-white text-amber-700 hover:bg-amber-50">
              Claim Your Discount Now
            </Button>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-b from-white to-amber-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Start Building Your Dream Projects Today</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Don't miss out! Get instant access to 16,000 plans plus exclusive bonuses like our CAD viewer and premium
            video guides. This limited-time offer won't last—act now!
          </p>
          <div className="max-w-4xl mx-auto">
            <Card className="border-2 border-amber-600">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="space-y-4 text-left">
                    <h3 className="text-2xl font-bold">Here's Everything You'll Get:</h3>
                    <ul className="space-y-3">
                      {[
                        "16,000 Woodworking Plans & Projects",
                        "Step-by-Step Instructions",
                        "Cutting & Materials Lists",
                        "Detailed Schematics",
                        "FREE: DWG/CAD Plan Viewer ($97 Value)",
                        "FREE: 150 Premium Videos ($77 Value)",
                        "FREE: Woodworking Guides ($123 Value)",
                        "60-Day Money Back Guarantee",
                        "Lifetime Updates & Support",
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-amber-600 mt-0.5 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="space-y-6 text-center">
                    <div>
                      <p className="text-gray-500 line-through text-lg">Regular Price: $297</p>
                      <div className="flex items-center justify-center gap-2">
                        <p className="text-4xl font-bold text-amber-600">$67</p>
                        <Badge className="bg-red-500">77% OFF</Badge>
                      </div>
                      <p className="text-sm text-gray-500">One-time payment, no subscription</p>
                    </div>
                    <Button size="lg" className="w-full bg-amber-600 hover:bg-amber-700 text-white text-lg py-6">
                      Buy Now
                    </Button>
                    <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
                      <Clock className="h-4 w-4" />
                      <span>Instant digital access</span>
                    </div>
                    <div className="flex justify-center gap-2">
                      <Image src="/placeholder.svg?height=30&width=50" alt="Payment method" width={50} height={30} />
                      <Image src="/placeholder.svg?height=30&width=50" alt="Payment method" width={50} height={30} />
                      <Image src="/placeholder.svg?height=30&width=50" alt="Payment method" width={50} height={30} />
                      <Image src="/placeholder.svg?height=30&width=50" alt="Payment method" width={50} height={30} />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold text-white mb-4">TedsWoodworking</h3>
              <p className="text-sm">
                Providing high-quality woodworking plans and resources to help you create beautiful projects with
                confidence.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="hover:text-white">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    About Ted
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Testimonials
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="hover:text-white">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Refund Policy
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Contact</h4>
              <ul className="space-y-2 text-sm">
                <li>support@tedswoodworking.com</li>
                <li>Mon-Fri: 9am - 5pm EST</li>
              </ul>
              <div className="flex gap-4 mt-4">
                <Link href="#" className="hover:text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </Link>
                <Link href="#" className="hover:text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </Link>
                <Link href="#" className="hover:text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-center">
            <p>&copy; {new Date().getFullYear()} TedsWoodworking. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
