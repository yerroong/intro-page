"use client"

import { useState, useEffect, useCallback } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useActiveSection } from "@/hooks/use-active-section"

const menuItems = [
  { name: "기술",      href: "#about",          id: "about"          },
  { name: "경력",      href: "#certifications", id: "certifications" },
  { name: "활동",      href: "#awards",         id: "awards"         },
  { name: "프로젝트",  href: "#projects",       id: "projects"       },
] as const

export default function Navigation() {
  const [isOpen, setIsOpen]     = useState(false)
  const [isSticky, setIsSticky] = useState(false)
  const activeSection = useActiveSection()

  const handleScroll = useCallback(() => {
    const contact = document.getElementById("contact")
    if (contact) {
      setIsSticky(window.scrollY > contact.offsetTop + contact.offsetHeight)
    }
  }, [])

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [handleScroll])

  if (!isSticky) return null

  return (
    <nav
      aria-label="주요 섹션 네비게이션"
      className="fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-300"
    >
      <div className="bg-gray-100/90 backdrop-blur-md rounded-full px-6 py-3 shadow-lg">
        <div className="flex items-center gap-4">
          {/* macOS 스타일 닷 */}
          <div className="flex gap-2" aria-hidden="true">
            <div className="w-3 h-3 rounded-full bg-red-400" />
            <div className="w-3 h-3 rounded-full bg-yellow-400" />
            <div className="w-3 h-3 rounded-full bg-green-400" />
          </div>

          {/* 데스크톱 메뉴 */}
          <div className="hidden md:flex gap-2">
            {menuItems.map((item) => (
              <Link
                key={item.id}
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

          {/* 모바일 토글 */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen((v) => !v)}
              aria-label={isOpen ? "메뉴 닫기" : "메뉴 열기"}
              className="h-8 w-8"
            >
              {isOpen ? <X size={18} /> : <Menu size={18} />}
            </Button>
          </div>
        </div>

        {/* 모바일 드롭다운 */}
        {isOpen && (
          <div className="md:hidden mt-3 pt-3 border-t border-gray-300">
            <div className="flex flex-col gap-2">
              {menuItems.map((item) => (
                <Link
                  key={item.id}
                  href={item.href}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    activeSection === item.id
                      ? "bg-white text-gray-900 shadow-sm"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                  onClick={() => setIsOpen(false)}
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
