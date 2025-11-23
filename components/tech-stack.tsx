"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"

export default function TechStack() {
  const [hoveredTech, setHoveredTech] = useState<string | null>(null)

  const technologies = [
    {
      name: "React",
      icon: "⚛️",
      color: "from-blue-50 to-blue-100",
      textColor: "text-blue-700",
      borderColor: "border-blue-200",
    },
    {
      name: "JavaScript",
      icon: "🟨",
      color: "from-yellow-50 to-yellow-100",
      textColor: "text-yellow-700",
      borderColor: "border-yellow-200",
    },
    {
      name: "TypeScript",
      icon: "🔷",
      color: "from-indigo-50 to-indigo-100",
      textColor: "text-indigo-700",
      borderColor: "border-indigo-200",
    },
    {
      name: "HTML",
      icon: "🌐",
      color: "from-orange-50 to-orange-100",
      textColor: "text-orange-700",
      borderColor: "border-orange-200",
    },
    {
      name: "CSS",
      icon: "🎨",
      color: "from-pink-50 to-pink-100",
      textColor: "text-pink-700",
      borderColor: "border-pink-200",
    },
    {
      name: "Vue.js",
      icon: "💚",
      color: "from-green-50 to-green-100",
      textColor: "text-green-700",
      borderColor: "border-green-200",
    },
    {
      name: "GitHub",
      icon: "🐱",
      color: "from-gray-50 to-gray-100",
      textColor: "text-gray-700",
      borderColor: "border-gray-200",
    },
    {
      name: "Figma",
      icon: "🎯",
      color: "from-purple-50 to-purple-100",
      textColor: "text-purple-700",
      borderColor: "border-purple-200",
    },
    {
      name: "C++",
      icon: "⚙️",
      color: "from-slate-50 to-slate-100",
      textColor: "text-slate-700",
      borderColor: "border-slate-200",
    },
  ]

  return (
    <Card className="shadow-xl border-0 bg-white/80 backdrop-blur-sm">
      <CardContent className="p-8">
        <div className="grid grid-cols-3 gap-6">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br ${tech.color} ${tech.borderColor} border-2 p-6 rounded-xl cursor-pointer transition-all duration-300 transform hover:scale-105 hover:shadow-lg ${
                hoveredTech === tech.name ? "scale-105 shadow-lg" : ""
              }`}
              onMouseEnter={() => setHoveredTech(tech.name)}
              onMouseLeave={() => setHoveredTech(null)}
            >
              <div className="text-center">
                <div className="text-4xl mb-3">{tech.icon}</div>
                <div className={`font-semibold text-sm ${tech.textColor}`}>{tech.name}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <p className="text-gray-600">끊임없이 학습하고 성장하는 개발자가 되겠습니다!</p>
        </div>
      </CardContent>
    </Card>
  )
}
