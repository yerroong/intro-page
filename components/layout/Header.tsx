"use client"

import Link from "next/link"

export default function Header() {
  const menuItems = [
    { name: "About", href: "#about" },
    { name: "Certifications", href: "#certifications" },
    { name: "Awards", href: "#awards" },
    { name: "Projects", href: "#projects" },
  ]

  return (
    <header className="w-full bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            예린's Introduction
          </Link>

          <nav className="hidden md:flex gap-8">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  )
}
