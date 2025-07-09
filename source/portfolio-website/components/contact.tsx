"use client"

import { Phone, Mail, Instagram, Github, FileText } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function Contact() {
  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6" />,
      label: "Phone",
      value: "010-2384-9319",
      color: "from-green-400 to-green-600",
      emoji: "📞",
      clickable: false,
    },
    {
      icon: <Mail className="h-6 w-6" />,
      label: "Email",
      value: "wbflqldks90@inha.edu",
      color: "from-blue-400 to-blue-600",
      emoji: "📧",
      clickable: false,
    },
    {
      icon: <Instagram className="h-6 w-6" />,
      label: "Instagram",
      value: "@yerin1412",
      color: "from-pink-400 to-purple-600",
      emoji: "📸",
      clickable: false,
    },
    {
      icon: <Github className="h-6 w-6" />,
      label: "GitHub",
      value: "github.com/yerroong",
      href: "https://github.com/yerroong",
      color: "from-gray-600 to-gray-800",
      emoji: "💻",
      clickable: true,
    },
    {
      icon: <FileText className="h-6 w-6" />,
      label: "Notion",
      value: "자기소개 notion",
      href: "https://www.notion.so/yerin1412/s-Introduction-616b565939a34ca19cacfc0efa979746",
      color: "from-orange-400 to-orange-600",
      emoji: "📝",
      clickable: true,
    },
  ]

  return (
    <Card className="shadow-xl border-0 bg-white/90 backdrop-blur-sm">
      <CardContent className="p-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6">
          {contactInfo.map((contact, index) => (
            <div
              key={index}
              className={`group flex flex-col items-center gap-3 p-4 rounded-xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 ${
                contact.clickable ? "cursor-pointer hover:shadow-lg" : "cursor-default"
              }`}
              onClick={contact.clickable && contact.href ? () => window.open(contact.href, "_blank") : undefined}
            >
              <div
                className={`bg-gradient-to-r ${contact.color} p-4 rounded-full text-white shadow-lg group-hover:shadow-xl transition-all duration-300 relative`}
              >
                {contact.icon}
                <span className="absolute -top-1 -right-1 text-lg">{contact.emoji}</span>
              </div>
              <div className="text-center">
                <p className="text-sm text-gray-500 font-medium">{contact.label}</p>
                <p
                  className={`font-semibold text-gray-800 transition-colors text-sm ${
                    contact.clickable ? "group-hover:text-blue-600" : ""
                  }`}
                >
                  {contact.value}
                </p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
