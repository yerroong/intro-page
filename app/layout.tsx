import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
}

export const metadata: Metadata = {
  title: "예린's 포트폴리오",
  description: "개발자 김예린의 포트폴리오 웹사이트입니다.",
  icons: {
    icon: "/logo.png",
  },
  openGraph: {
    title: "예린's 포트폴리오",
    description: "개발자 김예린의 포트폴리오 웹사이트입니다.",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko" className={`scroll-smooth ${inter.variable}`}>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
