"use client"

import { Card, CardContent } from "@/components/ui/card"

export default function About() {
  const interests = [
    { title: "UI/UX Design", icon: "🎨", color: "from-pink-400 to-rose-500" },
    { title: "Frontend Development", icon: "💻", color: "from-blue-400 to-indigo-500" },
    { title: "Team Collaboration", icon: "🤝", color: "from-green-400 to-emerald-500" },
    { title: "Problem Solving", icon: "🧩", color: "from-purple-400 to-violet-500" },
  ]

  return (
    <Card className="shadow-xl border-0 bg-gradient-to-br from-white to-blue-50 overflow-hidden">
      <CardContent className="p-8">
        <div className="space-y-8">
          <div className="text-center">
            <p className="text-lg leading-relaxed">
              김예린은 프론트엔드 개발자가 되는 것을 목표로 하고 있으며,
              <span className="font-bold text-blue-600"> UI/UX와 협업</span>을 중요하게 생각합니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {interests.map((interest, index) => (
              <div
                key={index}
                className={`bg-gradient-to-r ${interest.color} p-6 rounded-xl text-white transform hover:scale-105 transition-all duration-300 hover:shadow-lg`}
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{interest.icon}</span>
                  <h3 className="font-semibold">{interest.title}</h3>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-gray-50 to-blue-50 p-6 rounded-xl">
            <h3 className="text-xl font-bold mb-4 text-center">현재 학습 중인 기술</h3>
            <p className="text-center text-gray-700">React, HTML/CSS, JavaScript, TypeScript, GitHub, Figma, C++</p>
          </div>

          <div className="text-center">
            <p className="text-lg">프론트엔드 기술을 활용한 실제 서비스 구현에 관심이 많습니다.</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
