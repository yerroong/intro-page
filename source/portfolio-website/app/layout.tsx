import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "김예린 - 프론트엔드 개발자 포트폴리오",
  description: "React 중심의 프론트엔드 개발자 김예린의 포트폴리오 웹사이트입니다.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
