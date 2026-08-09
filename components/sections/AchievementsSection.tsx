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
    {
      period: "2025.08 ~ 2026.03",
      title: "LG U+ 유레카 3기 프론트엔드 과정 수료",
      description: "IT·FE 전반 과정 수료 / 팀 프로젝트 3회 및 수상"
    },
    {
      period: "2025.06 ~ 2025.12",
      title: "인천 외국인종합지원센터 '인천 외국인 산재보험 가이드' 앱 출시",
      description: "개발팀장 / UI 구축 및 AWS 배포·출시"
    },
    {
      period: "2025.03 ~ 2025.08",
      title: "인하대 전기전자공학부 생성형AI 연구실 학부연구생",
      description: "생성형 AI 논문 스터디 및 Upstage AI 서비스 수상"
    },
    {
      period: "2024.09 ~ 2024.12",
      title: "인하대 전자공학과 CVIP Lab 학부연구생",
      description: "CVIP 관련 최신 논문 분석 및 스터디"
    },
    {
      period: "2024.03 ~ 2025.12",
      title: "멋쟁이 사자처럼 12기 FE 이수 / 13기 FE 운영진",
      description: "HTML/CSS·JS·React 커리큘럼 이수, FE 프로젝트 개발 및 운영진 활동"
    },
    {
      period: "2024.01 ~ 2024.12",
      title: "정보통신공학과 학생회장 직무대행 및 학생부회장",
      description: "행사 기획·진행 및 학과 대내외 리스크·이슈 관리"
    },
  ]

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Left Column: Awards + Career */}
      <div className="space-y-6">
        {/* Awards */}
        <Card className="shadow-xl border-0 bg-white/80 backdrop-blur-sm">
          <CardContent className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-yellow-100 p-3 rounded-full">
                <Award className="h-6 w-6 text-yellow-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800">Awards</h3>
            </div>
            <div className="space-y-3">
              {awards.map((award, index) => (
                <div key={index} className="flex gap-3">
                  <div className="flex-shrink-0 w-16 text-xs font-semibold text-yellow-600 pt-1">
                    {award.date}
                  </div>
                  <div className="flex-1 border-l-2 border-yellow-200 pl-3">
                    <h4 className="text-sm text-gray-800">
                      <span className="font-semibold">{award.title}</span> <span className="text-gray-400">|</span> <span className="text-xs text-gray-500">{award.organizer}</span>
                    </h4>
                    <p className="text-xs text-yellow-600 font-medium mt-0.5">{award.award}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Career */}
        <Card className="shadow-xl border-0 bg-white/80 backdrop-blur-sm">
          <CardContent className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-green-100 p-3 rounded-full">
                <Briefcase className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800">Career</h3>
            </div>
            <div className="space-y-3">
              {careers.map((career, index) => (
                <div key={index} className="flex gap-3">
                  <div className="flex-shrink-0 w-28 text-xs font-semibold text-green-600 pt-1">
                    {career.period}
                  </div>
                  <div className="flex-1 border-l-2 border-green-200 pl-3">
                    <h4 className="font-semibold text-gray-800 text-sm">{career.title}</h4>
                    <p className="text-xs text-gray-500 mt-0.5">{career.company}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Activities */}
      <Card className="shadow-xl border-0 bg-white/80 backdrop-blur-sm">
        <CardContent className="p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-blue-100 p-3 rounded-full">
              <Users className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800">Activities</h3>
          </div>
          <div className="space-y-4">
            {activities.map((activity, index) => (
              <div key={index} className="flex gap-3">
                <div className="flex-shrink-0 w-32 text-xs font-semibold text-blue-600 pt-1">
                  {activity.period}
                </div>
                <div className="flex-1 border-l-2 border-blue-200 pl-3">
                  <h4 className="font-semibold text-sm text-gray-800">{activity.title}</h4>
                  <p className="text-xs text-gray-500 mt-0.5">{activity.description}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
