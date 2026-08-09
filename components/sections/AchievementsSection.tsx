import { Award, Users, Briefcase } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function AchievementsSection() {
  const careers = [
    {
      period: "2026.07 ~ 2026.08",
      title: "IBK기업은행 카드지원부 IT 인턴",
      company: "IBK기업은행",
    }
  ]

  const awards = [
    {
      date: "2026.03",
      title: "LG U+ 유레카 3기 SW 최종융합프로젝트",
      organizer: "LG 유플러스 X 멀티캠퍼스",
      award: "최우수상 1등"
    },
    {
      date: "2026.01",
      title: "제 1회 대학 연합 해커톤 ASCII-THON",
      organizer: "아주대, 서울시립대, 인하대, 중앙대",
      award: "서비스 개발 트랙 장려상"
    },
    {
      date: "2025.04",
      title: "BUIDL AI 2025 Hackathon",
      organizer: "BUIDL AI",
      award: "Upstage 트랙 3등"
    },
    {
      date: "2025.03",
      title: "인하대 AI 해커톤",
      organizer: "나눔엔젤스 × 인하대 블록체인센터",
      award: "우수상"
    }
  ]

  const activities = [
    { period: "2025.08 ~ 2026.03", content: "LG U+ 유레카 3기 프론트엔드 과정 수료" },
    { period: "2025.06 ~ 2025.12", content: "인천 외국인종합지원센터 '인천 외국인 산재보험 가이드' 앱 출시" },
    { period: "2025.03 ~ 2025.08", content: "인하대 전기전자공학부 생성형AI 연구실 학부연구생" },
    { period: "2024.09 ~ 2024.12", content: "인하대 전자공학과 CVIP Lab 학부연구생" },
    { period: "2024.03 ~ 2025.12", content: "멋쟁이 사자처럼 12기 FE 이수 / 13기 FE 운영진" },
    { period: "2024.01 ~ 2024.12", content: "정보통신공학과 학생회장 직무대행 및 학생부회장" },
  ]

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Career */}
      <Card className="shadow-xl border-0 bg-white/80 backdrop-blur-sm">
        <CardContent className="p-6">
          <div className="flex items-center gap-3 mb-5">
            <div className="bg-green-100 p-2.5 rounded-full">
              <Briefcase className="h-5 w-5 text-green-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-800">Career</h3>
          </div>
          <div className="space-y-4">
            {careers.map((career, index) => (
              <div key={index} className="border-l-2 border-green-200 pl-4">
                <p className="text-xs font-semibold text-green-600 mb-1">{career.period}</p>
                <h4 className="font-semibold text-gray-800 text-sm">{career.title}</h4>
                <p className="text-xs text-gray-500 mt-0.5">{career.company}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Awards */}
      <Card className="shadow-xl border-0 bg-white/80 backdrop-blur-sm">
        <CardContent className="p-6">
          <div className="flex items-center gap-3 mb-5">
            <div className="bg-yellow-100 p-2.5 rounded-full">
              <Award className="h-5 w-5 text-yellow-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-800">Awards</h3>
          </div>
          <div className="space-y-4">
            {awards.map((award, index) => (
              <div key={index} className="border-l-2 border-yellow-200 pl-4">
                <p className="text-xs font-semibold text-yellow-600 mb-1">{award.date}</p>
                <h4 className="text-sm text-gray-800">
                  <span className="font-semibold">{award.title}</span>
                </h4>
                <p className="text-xs text-gray-500 mt-0.5">{award.organizer}</p>
                <p className="text-xs text-yellow-600 font-medium mt-0.5">{award.award}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Activities */}
      <Card className="shadow-xl border-0 bg-white/80 backdrop-blur-sm">
        <CardContent className="p-6">
          <div className="flex items-center gap-3 mb-5">
            <div className="bg-blue-100 p-2.5 rounded-full">
              <Users className="h-5 w-5 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-800">Activities</h3>
          </div>
          <div className="space-y-4">
            {activities.map((activity, index) => (
              <div key={index} className="border-l-2 border-blue-200 pl-4">
                <p className="text-xs font-semibold text-blue-600 mb-1">{activity.period}</p>
                <p className="text-sm text-gray-800 leading-relaxed">{activity.content}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
