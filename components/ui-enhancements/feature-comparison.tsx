"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Check, X, HelpCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

export function FeatureComparison() {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null)

  const plans = [
    {
      id: "basic",
      name: "Basic Collection",
      price: "$27",
      description: "Perfect for beginners with essential woodworking plans.",
      popular: false,
    },
    {
      id: "premium",
      name: "Premium Bundle",
      price: "$47",
      description: "Our most popular package with 16,000+ woodworking plans.",
      popular: true,
    },
    {
      id: "ultimate",
      name: "Ultimate Package",
      price: "$67",
      description: "Everything plus exclusive monthly new plans and VIP support.",
      popular: false,
    },
  ]

  const features = [
    {
      name: "Number of Plans",
      tooltip: "How many woodworking plans you'll get access to",
      basic: "1,000+ plans",
      premium: "16,000+ plans",
      ultimate: "16,000+ plans + monthly additions",
    },
    {
      name: "Detailed Instructions",
      tooltip: "Step-by-step instructions with illustrations",
      basic: true,
      premium: true,
      ultimate: true,
    },
    {
      name: "Materials Lists",
      tooltip: "Complete shopping lists for each project",
      basic: true,
      premium: true,
      ultimate: true,
    },
    {
      name: "Cut Lists",
      tooltip: "Detailed cutting diagrams and measurements",
      basic: true,
      premium: true,
      ultimate: true,
    },
    {
      name: "3D Diagrams",
      tooltip: "Interactive 3D models of projects",
      basic: false,
      premium: true,
      ultimate: true,
    },
    {
      name: "Video Tutorials",
      tooltip: "Video guides for complex techniques",
      basic: false,
      premium: "Limited",
      ultimate: "Unlimited",
    },
    {
      name: "Mobile Access",
      tooltip: "Access plans on your smartphone or tablet",
      basic: false,
      premium: true,
      ultimate: true,
    },
    {
      name: "VIP Support",
      tooltip: "Priority email and phone support",
      basic: false,
      premium: false,
      ultimate: true,
    },
  ]

  const renderValue = (value: any) => {
    if (typeof value === "boolean") {
      return value ? <Check className="h-5 w-5 text-green-500" /> : <X className="h-5 w-5 text-red-500" />
    }
    return <span className="text-deep-blue-100">{value}</span>
  }

  return (
    <div className="bg-deep-blue-800/50 border border-deep-blue-700 rounded-xl p-6 overflow-x-auto">
      <h3 className="text-xl font-bold text-white mb-6 text-center">Compare Our Woodworking Plan Packages</h3>

      <table className="w-full min-w-[600px]">
        <thead>
          <tr>
            <th className="text-left p-3 text-deep-blue-300 font-normal">Features</th>
            {plans.map((plan) => (
              <th key={plan.id} className="p-3">
                <div
                  className={`rounded-lg p-4 text-center transition-colors ${
                    selectedPlan === plan.id
                      ? "bg-gold-brown-500/20 border border-gold-brown-500/50"
                      : "bg-deep-blue-900/50 border border-deep-blue-700"
                  }`}
                  onClick={() => setSelectedPlan(plan.id)}
                >
                  {plan.popular && <div className="text-xs font-medium text-gold-brown-400 mb-1">Most Popular</div>}
                  <div className="text-lg font-bold text-white mb-1">{plan.name}</div>
                  <div className="text-2xl font-bold text-gold-brown-400 mb-2">{plan.price}</div>
                  <div className="text-xs text-deep-blue-200 mb-4">{plan.description}</div>
                  <Button
                    className={`w-full ${
                      plan.popular
                        ? "bg-gold-brown-500 hover:bg-gold-brown-600 text-deep-blue-900"
                        : "bg-deep-blue-800 hover:bg-deep-blue-700 text-white"
                    }`}
                    size="sm"
                  >
                    Get This Package
                  </Button>
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {features.map((feature, index) => (
            <tr key={index} className={`border-t border-deep-blue-700 ${index % 2 === 0 ? "bg-deep-blue-900/20" : ""}`}>
              <td className="p-3 text-deep-blue-200">
                <div className="flex items-center gap-1">
                  {feature.name}
                  {feature.tooltip && (
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <span>
                            <HelpCircle className="h-4 w-4 text-deep-blue-400" />
                          </span>
                        </TooltipTrigger>
                        <TooltipContent className="bg-deep-blue-800 border-deep-blue-700 text-white">
                          {feature.tooltip}
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  )}
                </div>
              </td>
              <td className="p-3 text-center">
                <motion.div
                  className={`py-1 ${selectedPlan === "basic" ? "scale-110" : ""}`}
                  animate={{ scale: selectedPlan === "basic" ? 1.1 : 1 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  {renderValue(feature.basic)}
                </motion.div>
              </td>
              <td className="p-3 text-center">
                <motion.div
                  className={`py-1 ${selectedPlan === "premium" ? "scale-110" : ""}`}
                  animate={{ scale: selectedPlan === "premium" ? 1.1 : 1 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  {renderValue(feature.premium)}
                </motion.div>
              </td>
              <td className="p-3 text-center">
                <motion.div
                  className={`py-1 ${selectedPlan === "ultimate" ? "scale-110" : ""}`}
                  animate={{ scale: selectedPlan === "ultimate" ? 1.1 : 1 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  {renderValue(feature.ultimate)}
                </motion.div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

