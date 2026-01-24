"use client"

import { useState, useEffect } from "react"
import Link from "next/link"

export default function SideNavigation() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeSection, setActiveSection] = useState("about")

  useEffect(() => {
    const handleScroll = () => {
      // 헤더를 지나면 사이드 네비게이션 표시
      const header = document.querySelector("header")
      if (header) {
        const headerBottom = header.offsetHeight
        setIsVisible(window.scrollY > headerBottom + 100)
      }

      // 현재 활성 섹션 감지
      const sections = ["about", "certifications", "awards", "projects"]
      const scrollPosition = window.scrollY + 200

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const top = element.offsetTop
          const bottom = top + element.offsetHeight
          if (scrollPosition >= top && scrollPosition < bottom) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const menuItems = [
    { name: "About", href: "#about", id: "about" },
    { name: "Certifications", href: "#certifications", id: "certifications" },
    { name: "Awards", href: "#awards", id: "awards" },
    { name: "Projects", href: "#projects", id: "projects" },
  ]

  if (!isVisible) return null

  return (
    <nav className="fixed right-8 top-1/2 transform -translate-y-1/2 z-40 hidden lg:block">
      <div className="bg-white rounded-full shadow-lg border border-gray-200 py-3 px-2">
        <div className="flex flex-col gap-3">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="group relative"
              title={item.name}
            >
              <div
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  activeSection === item.id
                    ? "bg-blue-600 scale-150"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
              />
              <span className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                {item.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}
