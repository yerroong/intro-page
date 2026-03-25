import { Award, Users } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function AchievementsSection() {
  const awards = [
    {
      date: "2026.03.25",
      title: "LG U+ 유레카 3기 SW 최종융합프로젝트",
      organizer: "LG 유플러스 X 멀티캠퍼스",
      award: "최우수상 1등"
    },
    {
      date: "2026.01.31",
      title: "제 1회 대학 연합 해커톤 ASCII-THON",
      organizer: "아주대, 서울시립대, 인하대, 중앙대",
      award: "서비스 개발 트랙 장려상"
    },
    {
      date: "2025.04.12",
      title: "BUIDL AI 2025 Hackathon",
      organizer: "BUIDL AI",
      award: "Upstage 트랙 3등"
    },
    {
      date: "2025.03.25",
      title: "AI 해커톤",
      organizer: "나눔엔젤스 × 인하대 블록체인센터",
      award: "우수상"
    }
  ]

  const activities = [
    { period: "24.03-24.12", content: "멋쟁이 사자처럼 12기 FE 커리큘럼 이수" },
    { period: "25.01-25.12", content: "멋쟁이 사자처럼 13기 FE 운영진" },
    { period: "24.01-24.04", content: "정보통신공학과 학생회장 직무대행" },
    { period: "24.04-24.12", content: "정보통신공학과 학생부회장" },
    { period: "24.09-24.12", content: "인하대 전자공학과 CVIP Lab 학부연구생" },
    { period: "25.03-25.08", content: "인하대 전기전자공학부 생성형AI 연구실 학부연구생" },
    { period: "25.06-25.12", content: "인천 외국인종합지원센터 '인천 외국인 산재보험 가이드' 웹앱 출시" },
    { period: "25.08~26.03", content: "LG U+ 유레카 프론트엔드 과정 수료" },
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
          <div className="space-y-5">
            {awards.map((award, index) => (
              <div key={index} className="flex gap-4">
                <div className="flex-shrink-0 w-20 text-sm font-semibold text-yellow-600 pt-1">
                  {award.date}
                </div>
                <div className="flex-1 border-l-2 border-yellow-200 pl-4">
                  <h4 className="font-semibold text-gray-800 mb-1">{award.title}</h4>
                  <p className="text-xs text-gray-500 mb-1">{award.organizer}</p>
                  <p className="text-sm text-yellow-600 font-medium">{award.award}</p>
                </div>
              </div>
            ))}
          </div>
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
          <div className="space-y-4">
            {activities.map((activity, index) => (
              <div key={index} className="flex gap-4">
                <div className="flex-shrink-0 w-24 text-xs font-semibold text-blue-600 pt-1">
                  {activity.period}
                </div>
                <div className="flex-1 border-l-2 border-blue-200 pl-4">
                  <p className="text-sm text-gray-700 leading-relaxed">{activity.content}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
