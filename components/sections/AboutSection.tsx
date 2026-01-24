import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

export default function AboutSection() {
  const interests = [
    { title: "UI/UX Design", icon: "🎨", color: "from-pink-300 to-rose-400" },
    { title: "Frontend Development", icon: "💻", color: "from-blue-300 to-indigo-400" },
    { title: "Team Collaboration", icon: "🤝", color: "from-green-300 to-emerald-400" },
    { title: "Problem Solving", icon: "🧩", color: "from-purple-300 to-violet-400" },
  ]

  const techStack = {
    frontend: ["React", "Next.js", "TypeScript", "JavaScript", "HTML/CSS", "Tailwind CSS", "Styled-components", "Zustand"],
    backend: ["Node.js", "Express", "MySQL"],
    deployment: ["AWS S3", "AWS CloudFront", "Vercel"],
    tools: ["Git", "C++", "SQL", "Vite"],
    collaboration: ["GitHub", "Slack", "Jira", "Notion", "Figma"],
    office: ["한글", "Word", "PowerPoint"],
  }

  return (
    <div className="space-y-6">
      <Card className="shadow-lg border border-gray-200 bg-white/90 backdrop-blur-sm overflow-hidden">
        <CardContent className="p-6">
          <div className="space-y-6">
            <div className="text-center">
              <p className="text-base leading-relaxed text-gray-700">
                <span className="font-bold text-blue-600">
                  기술을 활용해 문제를 정의하고 해결할 수 있는 IT 인재가 되는 것을 목표
                </span>
                로 성장하고 있습니다.
                <br />
                프론트엔드는 그 출발점이며, 해커톤·프로젝트·대외활동을 통해 기획, 구현, 협업, 개선의 전 과정을 경험하고 있습니다.
                <br />
                <span className="font-semibold text-gray-600">
                  (멋쟁이사자처럼, AI/CV 학부연구생, LG U+ 유레카 등)
                </span>
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {interests.map((interest, index) => (
                <div
                  key={index}
                  className={`bg-gradient-to-r ${interest.color} p-4 rounded-lg text-white transform hover:scale-105 transition-all duration-300 hover:shadow-md`}
                >
                  <div className="flex flex-col items-center gap-2 text-center">
                    <span className="text-2xl">{interest.icon}</span>
                    <h3 className="font-semibold text-sm leading-tight">{interest.title}</h3>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-white p-6">
              <h3 className="text-2xl font-bold text-center text-gray-800 mb-3">기술 스택</h3>
              <div className="flex justify-center mb-6">
                <div className="w-20 h-0.5 bg-blue-200 rounded-full"></div>
              </div>
              <div className="space-y-6 max-w-6xl mx-auto">
                {/* 첫 번째 줄 - Frontend, Backend, Deployment */}
                <div className="grid grid-cols-1 md:grid-cols-10 gap-6">
                  <div className="md:col-span-4 bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                    <h4 className="text-sm font-bold text-blue-700 mb-3 text-center">Frontend</h4>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {techStack.frontend.map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-1.5 bg-blue-50 text-blue-700 rounded-lg text-xs font-medium hover:bg-blue-100 hover:scale-105 transition-all"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="md:col-span-3 bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                    <h4 className="text-sm font-bold text-green-700 mb-3 text-center">Backend</h4>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {techStack.backend.map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-1.5 bg-green-50 text-green-700 rounded-lg text-xs font-medium hover:bg-green-100 hover:scale-105 transition-all"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="md:col-span-3 bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                    <h4 className="text-sm font-bold text-orange-700 mb-3 text-center">Deployment</h4>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {techStack.deployment.map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-1.5 bg-orange-50 text-orange-700 rounded-lg text-xs font-medium hover:bg-orange-100 hover:scale-105 transition-all"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* 두 번째 줄 - Collaboration, Others, Office */}
                <div className="grid grid-cols-1 md:grid-cols-10 gap-6">
                  <div className="md:col-span-4 bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                    <h4 className="text-sm font-bold text-indigo-700 mb-3 text-center">Collaboration</h4>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {techStack.collaboration.map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-1.5 bg-indigo-50 text-indigo-700 rounded-lg text-xs font-medium hover:bg-indigo-100 hover:scale-105 transition-all"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="md:col-span-3 bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                    <h4 className="text-sm font-bold text-gray-700 mb-3 text-center">Others</h4>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {techStack.tools.map((tech, index) => (
                        <span
                          key={index}
                          className="px-2.5 py-1 bg-gray-50 text-gray-700 rounded-lg text-xs font-medium hover:bg-gray-100 hover:scale-105 transition-all"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="md:col-span-3 bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                    <h4 className="text-sm font-bold text-purple-700 mb-3 text-center">Office</h4>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {techStack.office.map((tech, index) => (
                        <span
                          key={index}
                          className="px-2.5 py-1 bg-purple-50 text-purple-700 rounded-lg text-xs font-medium hover:bg-purple-100 hover:scale-105 transition-all"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="shadow-lg border border-gray-200 bg-white/90 backdrop-blur-sm">
        <CardContent className="p-6">
          <div className="flex flex-col lg:flex-row items-center gap-6">
            {/* Left content */}
            <div className="flex-1 text-center lg:text-left">
              <p className="text-base leading-relaxed text-gray-700">
                <span className="font-semibold text-blue-500">서비스의 기능과 품질을 함께 고민하는 IT 인재 김예린입니다!</span>
                <br />
                현재 인하대학교 정보통신공학과 4학년 휴학 중이며,
                프론트엔드를 중심으로 데이터베이스, 컴퓨터비전, AI 등
                IT 전반에 관심을 가지고 학부 연구생 활동과
                다양한 프로젝트를 통해 폭넓은 경험을 쌓아왔습니다. 👊
              </p>
            </div>

            {/* Center floating image */}
            <div className="relative">
              <div className="w-40 h-40 relative animate-float">
                <Image
                  src="/yerin.png"
                  alt="Floating illustration"
                  width={160}
                  height={160}
                  className="object-cover rounded-full shadow-lg"
                />
              </div>
            </div>

            {/* Right content */}
            <div className="flex-1 text-center lg:text-right">
              <p className="text-base leading-relaxed text-gray-700">
                <span className="font-semibold text-purple-500">
                  문제를 구조적으로 분석하고 끝까지 해결하는
                </span>
                  성향을 바탕으로 작업합니다.  <br/>
                  학과 부회장 활동을 통해 소통과 조율의 중요성을 배웠으며,  
                  협업 과정에서 서비스의 완성도와 품질을 높이는 경험을 해왔습니다.

              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
