"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Globe, Mail, Phone, MapPin, ArrowRight } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export function EnhancedFooter() {
  const partners = [
    "/placeholder.svg?height=40&width=80&text=WoodCraft",
    "/placeholder.svg?height=40&width=80&text=ToolDepot",
    "/placeholder.svg?height=40&width=80&text=DIYPro",
    "/placeholder.svg?height=40&width=80&text=CraftMag",
    "/placeholder.svg?height=40&width=80&text=HomeShop",
  ]

  return (
    <footer className="bg-deep-blue-950 border-t border-deep-blue-800">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col items-center justify-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <div className="flex items-center gap-2 font-bold text-2xl">
              <Globe className="h-8 w-8 text-gold-brown-400" />
              <span className="bg-gradient-to-r from-white to-gold-brown-300 bg-clip-text text-transparent">
                WoodMaster Plans
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-8 mb-12"
          >
            {partners.map((partner, index) => (
              <div key={index} className="relative h-12 w-20 grayscale hover:grayscale-0 transition-all duration-300">
                <Image
                  src={partner || "/placeholder.svg"}
                  alt={`Partner ${index + 1}`}
                  fill
                  className="object-contain"
                />
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="max-w-md text-center mb-8"
          >
            <h3 className="text-xl font-bold text-white mb-4">Get Free Woodworking Tips</h3>
            <p className="text-deep-blue-200 mb-6">
              Join our newsletter to receive free woodworking tips, project ideas, and exclusive offers.
            </p>
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder="Your email address"
                className="bg-deep-blue-900 border-deep-blue-700 text-white focus:border-gold-brown-500 focus:ring-gold-brown-500/30"
              />
              <Button className="bg-gold-brown-500 hover:bg-gold-brown-600 text-deep-blue-900 font-medium">
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-deep-blue-800 pt-8">
          <div>
            <h4 className="text-white font-medium mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-deep-blue-300 hover:text-gold-brown-400 transition-colors">
                <Mail className="h-4 w-4" />
                <a href="mailto:support@woodmasterplans.com">support@woodmasterplans.com</a>
              </li>
              <li className="flex items-center gap-2 text-deep-blue-300 hover:text-gold-brown-400 transition-colors">
                <Phone className="h-4 w-4" />
                <a href="tel:+18005551234">+1 (800) 555-1234</a>
              </li>
              <li className="flex items-start gap-2 text-deep-blue-300">
                <MapPin className="h-4 w-4 mt-1" />
                <span>
                  123 Woodworking Lane
                  <br />
                  Craftsville, CA 90210
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-medium mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-deep-blue-300 hover:text-gold-brown-400 transition-colors">
                  Woodworking Plans
                </Link>
              </li>
              <li>
                <Link href="#" className="text-deep-blue-300 hover:text-gold-brown-400 transition-colors">
                  DIY Projects
                </Link>
              </li>
              <li>
                <Link href="#" className="text-deep-blue-300 hover:text-gold-brown-400 transition-colors">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="#" className="text-deep-blue-300 hover:text-gold-brown-400 transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="#" className="text-deep-blue-300 hover:text-gold-brown-400 transition-colors">
                  Affiliate Program
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-medium mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-deep-blue-300 hover:text-gold-brown-400 transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="#" className="text-deep-blue-300 hover:text-gold-brown-400 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-deep-blue-300 hover:text-gold-brown-400 transition-colors">
                  Refund Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-deep-blue-300 hover:text-gold-brown-400 transition-colors">
                  Copyright Notice
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-deep-blue-800 mt-8 pt-8 text-center">
          <p className="text-deep-blue-400 text-sm">
            &copy; {new Date().getFullYear()} WoodMaster Plans. All rights reserved. All woodworking plans are for
            personal use only.
          </p>
        </div>
      </div>
    </footer>
  )
}

