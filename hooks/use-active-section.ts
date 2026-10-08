"use client"

import { useState, useEffect, useCallback } from "react"

const SECTIONS = ["about", "certifications", "awards", "projects"] as const
type Section = (typeof SECTIONS)[number]

/** 현재 뷰포트에 걸쳐 있는 섹션 id를 반환하는 훅 */
export function useActiveSection(offset = 200): Section {
  const [activeSection, setActiveSection] = useState<Section>("about")

  const detect = useCallback(() => {
    const scrollPosition = window.scrollY + offset
    for (const id of SECTIONS) {
      const el = document.getElementById(id)
      if (el) {
        const top = el.offsetTop
        const bottom = top + el.offsetHeight
        if (scrollPosition >= top && scrollPosition < bottom) {
          setActiveSection(id)
          break
        }
      }
    }
  }, [offset])

  useEffect(() => {
    window.addEventListener("scroll", detect, { passive: true })
    detect()
    return () => window.removeEventListener("scroll", detect)
  }, [detect])

  return activeSection
}
