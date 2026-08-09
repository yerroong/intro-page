"use client"

import { useState } from "react"
import Image from "next/image"
import { ExternalLink, ArrowUpDown } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import ProjectModal from "../project-modal"

type SortOption = "importance" | "newest" | "oldest"

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<any>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [sortBy, setSortBy] = useState<SortOption>("importance")

  const projects = [
    {
      title: "POOLI - LG U+ 가족 데이터 통합 관리 앱",
      year: "2026",
      sortDate: "2026.03",
      importance: 0,
      role: "프론트엔드 / UI 구현 및 API 연동, Figma 설계",
      description: "LG U+ 유레카 3기 SW 최종융합프로젝트 최우수상 1등🏆️ - 가족 결합 사용자를 위한 실시간 데이터 통합 관리 및 스마트 제약 시스템",
      detailedDescription:
        "LG U+ 유레카에서 주어진 주제를 바탕으로 총 8명이 진행한 팀 프로젝트입니다. POOLI는 LG유플러스 가족 결합 상품 사용자를 위한 실시간 가족 데이터 통합 관리 및 스마트 제약 시스템으로, 가족 구성원별 데이터 사용량을 실시간으로 모니터링하고 앱별 사용량 제한·속도 제한·차단 정책을 설정할 수 있습니다. 공유 데이터풀 관리, 알림 발송, 문의 관리 등 관리자 기능도 함께 제공합니다.\n\nReact, TypeScript 기반으로 공유풀, 상세페이지, 설정, 문의, 어드민 페이지까지 전체 사용자 흐름을 고려한 UI를 개발하고, REST API 연동을 통해 데이터 흐름을 안정적으로 처리했습니다. Jira를 활용해 스프린트를 직접 설계하고, Figma를 기반으로 기획 의도를 반영한 UI를 구현했으며, GitHub 환경 세팅 및 브랜치 전략을 구성하여 협업 효율을 높였습니다. 코드 리뷰와 리팩토링을 통해 컴포넌트 구조를 개선하고 재사용성을 높였습니다.",
      githubUrl: "https://github.com/pooli-dev/pooli-fe",
      notionUrl: "https://www.notion.so/yerin1412/1-2c3389b3e03981e2a56bdaa42ff24264",
      image: "/pooli2.png",
      images: [
        "/pooli2.png",
        "/pooli3.png",
        "/pooli4.png",
        "/pooli5.png",
        "/pooli6.png",
        "/pooli7.png",
        "/pooli8.png",
        "/pooli9.png",
      ],
      technologies: ["React", "TypeScript", "REST API", "Figma", "Jira"],
      color: "from-blue-300 to-blue-500",
      isMobileApp: true,
      isImportant: true,
    },
    {
      title: "쇼티 - 숏폼 영상 서비스",
      year: "2024",
      sortDate: "2024.05",
      importance: 7,
      role: "프론트엔드 / 기획", 
      description: "프로메테우스 해커톤. 롱폼 영상을 숏폼으로 만들어주는 ai 사이트 (현재 비공개 상태)",
      detailedDescription:
        "프로메테우스 해커톤 출품을 위해 개발한 AI 기반 편집 웹 서비스입니다. 사용자가 업로드한 롱폼 영상을 AI가 분석하여 자동으로 하이라이트를 추출하고 숏폼 영상으로 변환해주는 플랫폼입니다. React와 Python을 활용하여 프론트엔드와 AI 모델을 연동했습니다. 프론트엔드 파트를 맡아 제작했지만 현재 깃허브 사이트는 비공개 상태입니다.",
      url: "https://github.com/infoelectric/test.git",
      image: "/쇼티1.png",
      images: [
        "/쇼티1.png",
        "/쇼티2.png",
        "/쇼티3.png",
      ],
      technologies: ["React", "Python", "AI/ML", "Video Processing"],
      color: "from-purple-400 to-purple-600",
    },
    {
      title: "가스/화재 안전 통합 시스템",
      year: "2024",
      sortDate: "2024.09",
      importance: 9,
      role: "프론트엔드 / 기획", 
      description: "인하대 이노씽크 메이커톤 본선에서 진행한 가스 및 화재 안전 관리를 위한 통합 안전 시스템 (with.임베디드)",
      detailedDescription:
        "IoT 센서와 연동된 실시간 가스 및 화재 감지 시스템입니다. 총 5명의 팀원(프론트1, 백엔드1, 임베디드2, 디자인1)로 진행했으며 센서 데이터를 실시간으로 모니터링하고, 위험 상황 발생 시 즉시 알림을 전송하며, 대응 매뉴얼을 제공합니다. 하드웨어와 소프트웨어를 통합한 종합적인 안전 관리 솔루션입니다. 직접 주거 모형을 제작하여 센서가 사이트에서 실제로 잘 동작하나 확인도 완료하였으며 본선 진출하였습니다.",
      url: "https://github.com/yerroong/2024innosafe",
      githubUrl: "https://github.com/yerroong/2024innosafe",
      notionUrl: "https://www.notion.so/yerin1412/2024-12b389b3e039807f86b3d1fef0e89e98",
      image: "/maker1.png",
      images: [
        "/maker1.png",
        "/maker2.png",
        "/maker3.png",
        "/maker4.png",
      ],
      technologies: ["React", "Arduino", "IoT", "Firebase"],
      color: "from-red-400 to-red-600",
    },
    {
      title: "With - 사회적 고립청년 대상 서비스",
      year: "2024",
      sortDate: "2024.08",
      importance: 8,
      role: "(팀장)프론트엔드 / 기획 / 디자인", 
      description: "멋쟁이사자처럼 중앙 해커톤에서 진행한 사회적 고립청년을 위한 커뮤니티 사이트",
      detailedDescription:
        "멋쟁이사자처럼 중앙 해커톤에 제출한 프로젝트입니다. 총 5명(프론트3, 백엔드2)의 팀원과 진행했습니다. 사회적 고립을 겪고 있는 청년들을 위한 온라인 커뮤니티 플랫폼입니다. 익명성을 보장하면서도 안전한 소통 공간을 제공하며, 전문가 상담, 그룹 활동, 멘토링 프로그램 등을 통해 사회 복귀를 지원합니다. 사용자 경험을 중시한 UI/UX 디자인에 특히 신경을 썼습니다.",
      githubUrl: "https://github.com/yerroong/Reverseinha_team_front.git",
      image: "/with2.png",
      images: [
        "/with1.png",
        "/with2.png",
        "/with3.png",
        "/with4.png",
        "/with5.png",
      ],
      technologies: ["React", "JavaScript","SpringBoot", "Figma"],
      color: "from-pink-400 to-pink-600",
    },
    {
      title: "Makourse - 메이코스",
      year: "2024",
      sortDate: "2024.11",
      importance: 5,
      role: "프론트엔드", 
      description: "(서버 닫음) 일정 공유를 위한 앱 제작 팀 프로젝트 '메이코스'",
      detailedDescription:
        "출시를 목표로 3개월간 진행한 팀 프로젝트입니다(실제 출시 X, 현재 백엔드 서버 닫혀있음). 총 6명(프론트3, 백엔드2, 디자이너1)에서 진행했으며, 메이코스 서비스는 개인간의 계획성 약속의 확실함을 제공해주고자 합니다. 약속 날짜와 장소를 짜고 구성하는데에 불편함을 해결해주는 어플리케이션입니다. 서비스 이름은 make + course(일정 코스, 데이트 코스할 때의 코스)로 React를 활용하여 반응형 인터페이스를 구현했으며, 주요 기능은 일행과 같이 약속 계획 짜기가 가능하며 특정 장소 및 계획에 시간설정/메모/대안 설정이 가능합니다.",
      githubUrl: "https://github.com/orgs/Makourse/repositories",
      image: "/makourse1.png",
      images: [
        "/makourse1.png",
        "/makourse2.png",
        "/makourse3.png",
        "/makourse4.png",
        "/makourse5.png",
      ],
      technologies: ["React", "JavaScript","SpringBoot", "Figma"],
      color: "from-teal-400 to-teal-600",
      isMobileApp: true,
    },
    {
      title: "HackDoc",
      year: "2025",
      sortDate: "2025.04",
      importance: 6,
      role: "프론트엔드", 
      description: "BUIDL AI 2025 Upstage 트랙 3등 수상🏆️",
      detailedDescription:
        "HackDoc은 Upstage의 문서 파싱 및 정보 추출 기능을 활용해, 초보 개발자가 기술 문서를 더 쉽고 빠르게 이해하고 활용할 수 있도록 돕는 AI 도우미입니다. 총 5명(기획3, 프론트1, 백엔드1)에서 2박 3일로 진행했으며, 트랙 3등을 수상했습니다. devfolio 사이트에서 시연 영상과 디테일한 내용을 확인할 수 있습니다.",
      githubUrl: "https://github.com/yerroong/BuildAI_Hackathon",
      devfolioUrl: "https://devfolio.co/projects/hack-doc-8415",
      image: "/HackDoc.png",
      images: [
        "/HackDoc.png",
      ],
      technologies: ["React", "TypeScript", "Python", "Upstage API"],
      color: "from-yellow-400 to-yellow-600",
    },
    {
      title: "[출시 완료] 인천시 외국인 근로자산재 보험 가이드 앱",
      year: "2025",
      sortDate: "2025.06",
      importance: 1,
      role: "(개발팀장)프론트엔드 / 웹 배포", 
      description:
        "인천시 외국인 종합지원센터에서 3000만원 예산을 받아 진행하며 현재 웹사이트, 플레이스토어, 앱스토어에 출시 완료",
      detailedDescription:
        "인하대학교 지역상생 아이디어 후속 프로젝트인 '인솔루션 프로젝트'입니다. 지역상생 아이디어 총장상을 받은 아이디어를 현실화하는 작업입니다. 예산을 지원받아 인천시 외국인 종합지원센터를 주체로 진행하며 총 7명(기획 2, 프론트 2, 백엔드 2, 디자인 1)의 인하대 학생이 함께하며, 최종적으로 <With IN> 인천 외국인 근로자 전용 산재 보험 가이드라인 앱을 개발하여 외국인이 산재 보험을 편리하게 신청할 수 있도록 하는 것을 목표로 합니다. 5~8월 기획 및 예산 선정 과정과 9~12월 개발 및 베타테스트를 거쳐 현재 출시되었습니다.",
      url:  "https://github.com/WithIN-Incheon/WithIN-FE",
      githubUrl: "https://github.com/WithIN-Incheon/WithIN-FE",
      liveUrl: "https://www.iscfr-iaga.com/",
      image: "/within4.jpg",
      images: [
        "/within1.png",
        "/within2.png",
        "/within3.png",
        "/within4.png",
        "/within5.png",
        "/within6.png",
      ],
      technologies: ["React", "TypeScript", "Vite", "zustand", "GA4", "AWS S3", "AWS CloudFront"],
      color: "from-indigo-400 to-indigo-600",
      isMobileApp: true,
      isImportant: true,
    },
    {
      title: "CookingLog - 쿠킹로그",
      year: "2025",
      sortDate: "2025.10",
      importance: 3,
      role: "(팀장)프론트엔드 / 기획 / 디자인", 
      description: "LG U+ 유레카 3기 프론트엔드 부트캠프 팀프로젝트로 진행한 레시피 기록/공유, AI 챗봇 웹사이트  ",
      detailedDescription:
       "LG U+ 유레카 3기 프론트엔드 과정에서 진행한 팀 프로젝트로, 개인의 요리 경험을 단순 소비가 아닌 '기록 자산'으로 남길 수 있도록 기획한 레시피 플랫폼입니다. 사용자는 자신만의 레시피를 기록하고 공유할 수 있으며, AI 챗봇을 통해 요리 과정 중 궁금한 점을 즉시 해결할 수 있도록 설계했습니다. 총 4명(프론트엔드 중심 팀 구성)으로 진행했으며, 팀장을 맡아 서비스 기획, UI/UX 디자인, 로그인/회원가입/홈/AI 챗봇 전반을 개발했습니다. 특히 사용자 흐름(레시피 작성 → 저장 → 공유 → 재활용)에 집중해 직관적인 UI를 구현했고, 컴포넌트 구조화와 상태 관리에 신경 써 유지보수성을 고려한 개발을 진행했습니다. Next 환경에서 개발을 진행함으로써 Next의 라우팅과 폴더구조를 학습합니다. ",
      githubUrl: "https://github.com/yerroong/cookinglog",
      notionUrl: "https://www.notion.so/yerin1412/2-1-2-2c3389b3e03980f59fe8e2e81e321dcb",
      image: "/cookinglog1.png",
      images: [
        "/cookinglog1.png",
        "/cookinglog2.png",
        "/cookinglog3.png",
        "/cookinglog4.png",
      ],
      technologies: ["Next.js", "TypeScript", "Google Cloud Vision API", "Groq LLM"],
      color: "from-yellow-400 to-yellow-600",
    },
    {
      title: "다무너 - 실시간 상담 및 AI 기반 상담 요약 통신사 플랫폼",
      year: "2026",
      sortDate: "2025.12",
      importance: 2,
      role: "(팀장) 프론트엔드 / 기획 / 디자인", 
      description: "LG U+ 유레카 부트캠프 프론트 3기 종합프로젝트로 진행한, 실시간 상담 및 AI 기반 상담 요약 통신사 플랫폼",
      detailedDescription:
        "LG U+ 유레카 부트캠프 프론트엔드 3기 종합 프로젝트입니다. 실시간 상담 기능과 AI 기반 상담 요약 기능을 제공하는 통신사 플랫폼을 개발했습니다. 사용자는 실시간으로 상담원과 채팅할 수 있으며, AI가 상담 내용을 자동으로 요약해주는 기능을 구현했습니다. React와 TypeScript를 활용하여 개발했으며, 실시간 통신을 위해 WebSocket을 활용했습니다.",
      githubUrl: "https://github.com/Da-Moono/DaMoono-Frontend",
      liveUrl: "https://da-moono-frontend-deploy.vercel.app/",
      notionUrl: "https://www.notion.so/yerin1412/2e6389b3e03980139704d1442c4c341e",
      image: "/damoono1.png",
      images: [
        "/damoono1.png",
        "/damoono6.png",
        "/damoono2.png",
        "/damoono3.png",
        "/damoono7.png",
        "/damoono4.png",
        "/damoono5.png",
      ],
      technologies: ["React", "TypeScript", "WebSocket", "OpenAI"],
      color: "from-green-400 to-green-600",
      isMobileApp: true,
      isImportant: true,
    },
    {
      title: "YAKKAN - 약관이 '약간' 이상할 때",
      year: "2026",
      sortDate: "2026.01",
      importance: 4,
      role: "프론트엔드", 
      description: "ASCII-THON SW 서비스 개발트랙 장려상🏆️",
      detailedDescription:
        "ASCII-THON 해커톤에서 SW 서비스 개발 트랙 장려상을 수상한 프로젝트입니다. 복잡하고 어려운 약관을 쉽게 이해할 수 있도록 도와주는 서비스를 개발했습니다. 사용자가 약관을 업로드하면 AI가 분석하여 핵심 내용을 요약하고, 주의해야 할 부분을 하이라이트해주는 기능을 구현했습니다. React와 TypeScript를 활용하여 직관적인 UI/UX를 제공합니다.",
      githubUrl: "https://github.com/DooZzonSa/DooZzonSa-FE",
      liveUrl: "https://doo-zzon-sa-fe.vercel.app/",
      image: "/yakkan4.png",
      images: [
        "/yakkan1.png",
        "/yakkan2.png",
        "/yakkan3.png",
        "/yakkan4.png",
      ],
      technologies: ["Next.js", "TypeScript"],
      color: "from-orange-400 to-red-600",
    },
  ]

  const getSortedProjects = () => {
    const sorted = [...projects]
    
    switch (sortBy) {
      case "importance":
        return sorted.sort((a, b) => a.importance - b.importance)
      case "newest":
        return sorted.sort((a, b) => b.sortDate.localeCompare(a.sortDate))
      case "oldest":
        return sorted.sort((a, b) => a.sortDate.localeCompare(b.sortDate))
      default:
        return sorted
    }
  }

  const sortedProjects = getSortedProjects()

  const openModal = (project: any) => {
    const withPrefix = {
      ...project,
    };
    setSelectedProject(withPrefix);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <>
      <div className="mb-6 flex justify-center md:justify-end gap-2 flex-wrap">
        <Button
          variant={sortBy === "importance" ? "default" : "outline"}
          size="sm"
          onClick={() => setSortBy("importance")}
          className="flex items-center gap-2"
        >
          <ArrowUpDown className="h-4 w-4" />
          중요도순
        </Button>
        <Button
          variant={sortBy === "newest" ? "default" : "outline"}
          size="sm"
          onClick={() => setSortBy("newest")}
          className="flex items-center gap-2"
        >
          <ArrowUpDown className="h-4 w-4" />
          최신순
        </Button>
        <Button
          variant={sortBy === "oldest" ? "default" : "outline"}
          size="sm"
          onClick={() => setSortBy("oldest")}
          className="flex items-center gap-2"
        >
          <ArrowUpDown className="h-4 w-4" />
          오래된순
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {sortedProjects.map((project, index) => (
          <Card
            key={index}
            onClick={() => openModal(project)}
            className="group overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 border-0 bg-white cursor-pointer relative"
          >
            <div
              className={`relative overflow-hidden ${
                project.isMobileApp ? "h-64" : "h-56"
              }`}
            >
              {project.isMobileApp ? (
                <div className="w-full h-full flex items-center justify-center">
                  <Image
                    src={project.image ||"/placeholder.svg"}
                    alt={project.title}
                    width={400}
                    height={850}
                    className="object-contain max-h-full max-w-full group-hover:scale-105 transition-transform duration-500"
                    priority={index < 6}
                    loading={index < 6 ? "eager" : "lazy"}
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
              ) : (
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  priority={index < 6}
                  loading={index < 6 ? "eager" : "lazy"}
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              )}
              <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
                {project.isImportant && (
                  <div className="bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-md">
                    Featured
                  </div>
                )}
                <div className={`bg-white/90 px-3 py-1 rounded-full text-sm font-medium text-gray-700 shadow-sm ${!project.isImportant ? 'ml-auto' : ''}`}>
                  {project.year}
                </div>
              </div>
            </div>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                {project.title}
              </h3>
              <p className="text-sm font-bold text-gray-800 mb-1">
                담당 역할: <span className="font-medium">{project.role}</span>
              </p>
              <p className="text-gray-600 mb-4 text-sm line-clamp-3">{project.description}</p>

              {project.githubUrl && project.liveUrl && project.notionUrl ? (
                <div className="flex gap-2 flex-wrap">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-3 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded-full hover:shadow-lg transition-all duration-300 transform hover:scale-105 text-sm"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <span className="mr-2">GitHub</span>
                    <ExternalLink className="h-4 w-4" />
                  </a>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-3 py-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white rounded-full hover:shadow-lg transition-all duration-300 transform hover:scale-105 text-sm"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <span className="mr-2">Live Demo</span>
                    <ExternalLink className="h-4 w-4" />
                  </a>
                  <a
                    href={project.notionUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-3 py-2 bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white rounded-full hover:shadow-lg transition-all duration-300 transform hover:scale-105 text-sm"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <span className="mr-2">Notion</span>
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              ) : project.githubUrl && project.liveUrl ? (
                <div className="flex gap-2 flex-wrap">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-3 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded-full hover:shadow-lg transition-all duration-300 transform hover:scale-105 text-sm"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <span className="mr-2">GitHub</span>
                    <ExternalLink className="h-4 w-4" />
                  </a>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-3 py-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white rounded-full hover:shadow-lg transition-all duration-300 transform hover:scale-105 text-sm"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <span className="mr-2">Live Demo</span>
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              ) : project.githubUrl && project.notionUrl ? (
                <div className="flex gap-2 flex-wrap">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-3 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded-full hover:shadow-lg transition-all duration-300 transform hover:scale-105 text-sm"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <span className="mr-2">GitHub</span>
                    <ExternalLink className="h-4 w-4" />
                  </a>
                  <a
                    href={project.notionUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-3 py-2 bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white rounded-full hover:shadow-lg transition-all duration-300 transform hover:scale-105 text-sm"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <span className="mr-2">Notion</span>
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              ) :  project.githubUrl && project.devfolioUrl ? (
                <div className="flex gap-2 flex-wrap">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-3 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded-full hover:shadow-lg transition-all duration-300 transform hover:scale-105 text-sm"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <span className="mr-2">GitHub</span>
                    <ExternalLink className="h-4 w-4" />
                  </a>
                  <a
                    href={project.devfolioUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-3 py-2 bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white rounded-full hover:shadow-lg transition-all duration-300 transform hover:scale-105 text-sm"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <span className="mr-2">Devfolio</span>
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              ) : (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded-full hover:shadow-lg transition-all duration-300 transform hover:scale-105 text-sm"
                  onClick={(e) => e.stopPropagation()}
                >
                  <span className="mr-2">GitHub Link</span>
                  <ExternalLink className="h-4 w-4" />
                </a>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      {selectedProject && <ProjectModal isOpen={isModalOpen} onClose={closeModal} project={selectedProject} />}
    </>
  )
}
