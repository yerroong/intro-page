"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronDown } from "lucide-react"

export default function Header() {
  const [displayText, setDisplayText] = useState("")
  const [showScrollIndicator, setShowScrollIndicator] = useState(true)
  const fullText =
    "안녕하세요! 성장해가고 있는 개발자 김예린입니다. 현재 프론트엔드 파트 중점으로 각종 프로젝트 및 해커톤을 진행하는 등 프론트엔드 웹 개발자로 성장하고 있습니다."

  useEffect(() => {
    let index = 0
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setDisplayText(fullText.slice(0, index + 1))
        index++
      } else {
        clearInterval(timer)
      }
    }, 50)

    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowScrollIndicator(false)
      } else {
        setShowScrollIndicator(true)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="relative">
      <Card className="overflow-hidden shadow-xl border-0 bg-white/90 backdrop-blur-sm hover:shadow-2xl transition-all duration-500">
        <CardContent className="p-0">
          <div className="flex flex-col md:flex-row items-center p-8 gap-8">
            <div className="flex flex-col items-center">
              <div className="relative group mb-4">
                <div className="w-40 h-52 relative rounded-lg overflow-hidden border-2 border-gray-200 shadow-lg group-hover:scale-105 transition-transform duration-300">
                  <Image
                    src="/intro-page/profile.png"
                    alt="Profile picture of Yerin Kim"
                    width={160}
                    height={208}
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
              <div className="text-center text-sm text-gray-600 space-y-1">
                <p className="font-medium">인하대 정보통신공학과 22학번 (재학중)</p>
              </div>
            </div>
            <div className="text-center md:text-left flex-1">
              <h1 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                김예린's Introduction
              </h1>
              <p className="text-lg leading-relaxed min-h-[4rem]">
                <span className="text-gray-700">{displayText}</span>
                <span className="animate-pulse text-blue-500">|</span>
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {showScrollIndicator && (
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="flex flex-col items-center text-gray-500">
            <span className="text-sm mb-2">Scroll Down</span>
            <ChevronDown className="h-6 w-6" />
          </div>
        </div>
      )}
    </div>
  )
}
