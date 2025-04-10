import type { ReactNode } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface BonusCardProps {
  title: string
  value: string
  description: string
  icon: ReactNode
}

export default function BonusCard({ title, value, description, icon }: BonusCardProps) {
  return (
    <Card className="overflow-hidden border-amber-100 transition-all hover:shadow-lg">
      <div className="bg-amber-50 p-4 flex justify-between items-center border-b border-amber-100">
        <div className="flex items-center gap-3">
          <div className="bg-white rounded-full p-2 shadow-sm">{icon}</div>
          <h3 className="font-bold">{title}</h3>
        </div>
        <Badge className="bg-red-500">FREE</Badge>
      </div>
      <CardContent className="p-6 space-y-4">
        <div className="bg-amber-50 rounded-full px-4 py-1 text-amber-700 font-bold inline-block">{value}</div>
        <p className="text-gray-600">{description}</p>
      </CardContent>
    </Card>
  )
}
