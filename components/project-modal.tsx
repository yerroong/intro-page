"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface ProjectModalProps {
  isOpen: boolean
  onClose: () => void
  project: {
    title: string
    year: string
    description: string
    detailedDescription: string
    images: string[]
    technologies: string[]
    isMobileApp?: boolean
  }
}

export default function ProjectModal({ onClose, project }: ProjectModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % project.images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length)
  }

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-4xl max-h-[90vh] overflow-hidden">
        <CardContent className="p-0 max-h-[90vh] overflow-y-auto">
          <div className="sticky top-0 z-10 bg-white flex justify-between items-center p-6 border-b">
            <div>
              <h2 className="text-2xl font-bold text-gray-800">{project.title}</h2>
              <p className="text-gray-600">{project.year}</p>
            </div>
            <Button variant="ghost" size="icon" onClick={onClose}>
              <X className="h-6 w-6" />
            </Button>
          </div>

          <div className="relative">
            {project.isMobileApp ? (
              /* 모바일 앱 스크린샷용 - 고정 크기 컨테이너 */
              <div className="w-full h-96 bg-gray-300 flex items-center justify-center relative overflow-hidden">
                <div className="w-48 h-full bg-gray-200 flex items-center justify-center">
                  <Image
                    src={project.images[currentImageIndex] || "/placeholder.svg"}
                    alt={`${project.title} screenshot ${currentImageIndex + 1}`}
                    width={400}
                    height={850}
                    className="object-contain max-h-full max-w-full"
                  />
                </div>
              </div>
            ) : (
              /* 일반 웹사이트 스크린샷용 */
              <div className="aspect-video relative overflow-hidden">
                <Image
                  src={project.images[currentImageIndex] || "/placeholder.svg"}
                  alt={`${project.title} screenshot ${currentImageIndex + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            )}

            {project.images.length > 1 && (
              <>
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white"
                  onClick={prevImage}
                >
                  <ChevronLeft className="h-6 w-6" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white"
                  onClick={nextImage}
                >
                  <ChevronRight className="h-6 w-6" />
                </Button>
              </>
            )}

            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {project.images.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentImageIndex ? "bg-gray-800" : "bg-gray-400"
                  }`}
                  onClick={() => setCurrentImageIndex(index)}
                />
              ))}
            </div>
          </div>

          {/* Content */}
          <div className="p-6 space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-2">프로젝트 소개</h3>
              <p className="text-gray-700 leading-relaxed">{project.detailedDescription}</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">사용 기술</h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}