import { Award, Users } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function Awards() {
  const awards = ["2025 나눔엔젤스 × 인하대 블록체인센터 AI 해커톤 우수상", "BUIDL AI 2025 Hackathon Upstage 트랙 3등"]

  const activities = [
    "2023 달꿈 멘토단 활동",
    "멋쟁이 사자처럼 12기 FE 커리큘럼 이수 (24.03~12)",
    "멋쟁이 사자처럼 13기 FE 운영진(25.01~)",
    "정보통신공학과 학생회장 직무대행(24.01~04)",
    "정보통신공학과 학생부회장 (24.04~12)",
    "인하대 전자공학과 CVIP Lab 학부연구생(24.09~12)",
    "인하대 전기전자공학부 생성형AI 연구실 학부연구생(25.03~08)",
  ]

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Awards */}
      <Card className="shadow-xl border-0 bg-white/80 backdrop-blur-sm">
        <CardContent className="p-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-yellow-100 p-3 rounded-full">
              <Award className="h-6 w-6 text-yellow-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800">Awards</h3>
          </div>
          <ul className="space-y-4">
            {awards.map((award, index) => (
              <li key={index} className="flex items-start gap-3">
                <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0" />
                <p className="text-gray-700 leading-relaxed">{award}</p>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      {/* Activities */}
      <Card className="shadow-xl border-0 bg-white/80 backdrop-blur-sm">
        <CardContent className="p-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-blue-100 p-3 rounded-full">
              <Users className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800">Activities</h3>
          </div>
          <ul className="space-y-3">
            {activities.map((activity, index) => (
              <li key={index} className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                <p className="text-gray-700 text-sm leading-relaxed">{activity}</p>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}
