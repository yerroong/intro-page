"use client"

import { useEffect, useState } from "react"

export default function AnimatedBackground() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      <div className="absolute inset-0">
        <svg className="w-full h-full opacity-10" viewBox="0 0 1000 1000">
          <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3B82F6" />
              <stop offset="100%" stopColor="#8B5CF6" />
            </linearGradient>
          </defs>
          <path
            d="M0,200 Q250,100 500,200 T1000,200"
            stroke="url(#grad1)"
            strokeWidth="2"
            fill="none"
            className="animate-pulse"
          />
          <path
            d="M0,400 Q250,300 500,400 T1000,400"
            stroke="url(#grad1)"
            strokeWidth="1"
            fill="none"
            className="animate-pulse"
            style={{ animationDelay: "1s" }}
          />
          <path
            d="M0,600 Q250,500 500,600 T1000,600"
            stroke="url(#grad1)"
            strokeWidth="1.5"
            fill="none"
            className="animate-pulse"
            style={{ animationDelay: "2s" }}
          />
        </svg>
      </div>

      <div
        className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-br from-blue-200/20 to-transparent rounded-full blur-xl animate-pulse"
        style={{ animationDuration: "4s" }}
      />
      <div
        className="absolute bottom-32 left-20 w-40 h-40 bg-gradient-to-br from-purple-200/20 to-transparent rounded-full blur-xl animate-pulse"
        style={{ animationDuration: "6s", animationDelay: "2s" }}
      />

      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400/40 rounded-full animate-ping" />
      <div
        className="absolute top-3/4 right-1/3 w-1.5 h-1.5 bg-purple-400/40 rounded-full animate-ping"
        style={{ animationDelay: "1s" }}
      />
      <div
        className="absolute bottom-1/4 left-1/3 w-2.5 h-2.5 bg-pink-400/40 rounded-full animate-ping"
        style={{ animationDelay: "2s" }}
      />

      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: "100px 100px",
        }}
      />
    </div>
  )
}
