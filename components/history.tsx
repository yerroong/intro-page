import { Card, CardContent } from "@/components/ui/card"

export default function History() {
  const timelineEvents = [
    {
      year: "2003",
      description: "충남 천안 출생",
      icon: "🌱",
      color: "from-green-400 to-emerald-500",
    },
    {
      year: "2022",
      description: "쌍용고 졸업 / 인하대학교 정보통신공학과 입학",
      icon: "🎓",
      color: "from-blue-400 to-indigo-500",
    },
    {
      year: "2023",
      description: "블루투스 소모임 운영진, alICE 기획부장, 달꿈 멘토단",
      icon: "👥",
      color: "from-purple-400 to-violet-500",
    },
    {
      year: "2024",
      description: "학생회장 직무대행, 부회장 당선, 멋쟁이 사자처럼 FE 이수, CVIP Lab 학부연구생",
      icon: "🚀",
      color: "from-orange-400 to-red-500",
    },
    {
      year: "2025",
      description: "멋사 FE 운영진, 생성형AI 연구실 학부연구생, 인솔루션 프로젝트 참여",
      icon: "⭐",
      color: "from-pink-400 to-rose-500",
    },
  ]

  return (
    <div className="max-w-4xl mx-auto">
      <div className="space-y-8">
        {timelineEvents.map((event, index) => (
          <Card key={index} className="overflow-hidden shadow-lg border-0 hover:shadow-xl transition-all duration-300">
            <CardContent className="p-0">
              <div className="flex flex-col md:flex-row">
                <div
                  className={`bg-gradient-to-r ${event.color} p-6 md:w-48 flex flex-col items-center justify-center text-white`}
                >
                  <span className="text-4xl mb-2">{event.icon}</span>
                  <span className="text-2xl font-bold">{event.year}</span>
                </div>

                <div className="flex-1 p-6 flex items-center">
                  <p className="text-lg text-gray-700 leading-relaxed">{event.description}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
