"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isSticky, setIsSticky] = useState(false)
  const [activeSection, setActiveSection] = useState("about")

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  useEffect(() => {
    const handleScroll = () => {
      // Contact 섹션을 지나면 네비게이션 고정
      const contactSection = document.getElementById("contact")
      if (contactSection) {
        const contactBottom = contactSection.offsetTop + contactSection.offsetHeight
        setIsSticky(window.scrollY > contactBottom)
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
    { name: "기술", href: "#about", id: "about" },
    { name: "경력", href: "#certifications", id: "certifications" },
    { name: "프로젝트", href: "#projects", id: "projects" },
    { name: "블로그", href: "#awards", id: "awards" },
  ]

  if (!isSticky) return null

  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-300">
      <div className="bg-gray-100/90 backdrop-blur-md rounded-full px-6 py-3 shadow-lg">
        <div className="flex items-center gap-4">
          {/* macOS 스타일 버튼 */}
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-400"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
            <div className="w-3 h-3 rounded-full bg-green-400"></div>
          </div>

          {/* 데스크톱 메뉴 */}
          <div className="hidden md:flex gap-2">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
                  activeSection === item.id
                    ? "bg-white text-gray-900 shadow-sm"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* 모바일 메뉴 버튼 */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={toggleMenu} className="h-8 w-8">
              {isOpen ? <X size={18} /> : <Menu size={18} />}
            </Button>
          </div>
        </div>

        {/* 모바일 메뉴 */}
        {isOpen && (
          <div className="md:hidden mt-3 pt-3 border-t border-gray-300">
            <div className="flex flex-col gap-2">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    activeSection === item.id
                      ? "bg-white text-gray-900 shadow-sm"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                  onClick={toggleMenu}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
