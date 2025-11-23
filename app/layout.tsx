import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "예린's introduction",
  description: "React 중심의 프론트엔드 개발자 김예린의 포트폴리오 웹사이트입니다.",
  icons: {
    icon: [
      {
        url: "data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 64 64%22><text x=%2232%22 y=%2240%22 fontSize=%2256%22 textAnchor=%22middle%22>🦄</text></svg>",
        type: "image/svg+xml",
        sizes: "32x32",
      },
      {
        url: "data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 64 64%22><text x=%2232%22 y=%2240%22 fontSize=%2256%22 textAnchor=%22middle%22>🦄</text></svg>",
        type: "image/svg+xml",
        sizes: "16x16",
      },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko" className="scroll-smooth">
      <head>
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 64 64%22><text x=%2232%22 y=%2240%22 fontSize=%2256%22 textAnchor=%22middle%22>🦄</text></svg>"
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}