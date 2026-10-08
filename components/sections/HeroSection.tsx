"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronDown } from "lucide-react"

const FULL_TEXT =
  "안녕하세요! 성장해가고 있는 개발자 김예린입니다. 플랫폼 개발·서비스 기획을 중점으로 각종 프로젝트 및 해커톤을 진행하였으며 현재 LG U+ 유레카 부트캠프, IBK기업은행 IT인턴을 통해 IT인재로 성장하고 있습니다."

export default function HeroSection() {
  const [displayText, setDisplayText] = useState("")
  const [showScrollIndicator, setShowScrollIndicator] = useState(true)

  // 타이핑 애니메이션 — FULL_TEXT는 모듈 상수라 의존성 불필요
  useEffect(() => {
    let index = 0
    const timer = setInterval(() => {
      index++
      setDisplayText(FULL_TEXT.slice(0, index))
      if (index >= FULL_TEXT.length) clearInterval(timer)
    }, 50)

    return () => clearInterval(timer)
  }, [])

  // 스크롤 인디케이터 — useCallback으로 참조 안정화
  const handleScroll = useCallback(() => {
    setShowScrollIndicator(window.scrollY <= 100)
  }, [])

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [handleScroll])

  return (
    <div className="relative">
      <Card className="overflow-hidden shadow-xl border-0 bg-white/90 backdrop-blur-sm hover:shadow-2xl transition-all duration-500">
        <CardContent className="p-0">
          <div className="flex flex-col md:flex-row items-center p-6 sm:p-8 gap-6 sm:gap-8">
            {/* 프로필 이미지 */}
            <div className="flex flex-col items-center shrink-0">
              <div className="relative group mb-4">
                <div className="w-32 h-44 sm:w-40 sm:h-52 relative rounded-lg overflow-hidden border-2 border-gray-200 shadow-lg group-hover:scale-105 transition-transform duration-300">
                  <Image
                    src="/profile.png"
                    alt="김예린 프로필 사진"
                    width={160}
                    height={208}
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
              <p className="text-center text-sm text-gray-600 font-medium">
                인하대 정보통신공학과 졸업 (26.8)
              </p>
            </div>

            {/* 텍스트 */}
            <div className="text-center md:text-left flex-1">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                김예린&apos;s Introduction
              </h1>
              <p className="text-base sm:text-lg leading-relaxed min-h-[4rem]">
                <span className="text-gray-700">{displayText}</span>
                <span className="animate-pulse text-blue-500" aria-hidden="true">|</span>
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* 스크롤 인디케이터 */}
      {showScrollIndicator && (
        <div className="absolute bottom-[-32px] left-1/2 -translate-x-1/2 animate-bounce">
          <div className="flex flex-col items-center text-gray-400 select-none">
            <span className="text-xs mb-1">Scroll Down</span>
            <ChevronDown className="h-5 w-5" />
          </div>
        </div>
      )}
    </div>
  )
}
