"use client"

import { useState, useEffect, useCallback } from "react"
import Link from "next/link"
import { useActiveSection } from "@/hooks/use-active-section"

const menuItems = [
  { name: "About",          href: "#about",           id: "about"          },
  { name: "Certifications", href: "#certifications",  id: "certifications" },
  { name: "Projects",       href: "#projects",        id: "projects"       },
  { name: "Awards",         href: "#awards",          id: "awards"         },
] as const

export default function SideNavigation() {
  const [isVisible, setIsVisible] = useState(false)
  const activeSection = useActiveSection()

  const handleScroll = useCallback(() => {
    const header = document.querySelector("header")
    if (header) {
      setIsVisible(window.scrollY > header.offsetHeight + 100)
    }
  }, [])

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [handleScroll])

  if (!isVisible) return null

  return (
    <nav
      aria-label="섹션 바로가기"
      className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden lg:block"
    >
      <div className="bg-white rounded-full shadow-lg border border-gray-200 py-3 px-2">
        <div className="flex flex-col gap-3">
          {menuItems.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className="group relative flex items-center justify-center"
              title={item.name}
            >
              <div
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  activeSection === item.id
                    ? "bg-blue-600 scale-150"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
              />
              <span className="absolute right-6 top-1/2 -translate-y-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                {item.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}
