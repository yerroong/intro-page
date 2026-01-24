"use client"

import { Mail, Instagram, Github, FileText, Phone } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function ContactSection() {
  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6" />,
      label: "Phone",
      value: "010-2384-9319",
      color: "bg-gradient-to-r from-green-400 to-emerald-500",
      textColor: "text-white",
      clickable: false,
    },
    {
      icon: <Mail className="h-6 w-6" />,
      label: "Email",
      value: "wbflqldks90@inha.edu",
      color: "bg-gradient-to-r from-blue-400 to-indigo-500",
      textColor: "text-white",
      clickable: false,
    },
    {
      icon: <Instagram className="h-6 w-6" />,
      label: "Instagram",
      value: "@yerin1412",
      color: "bg-gradient-to-r from-pink-500 to-purple-600",
      textColor: "text-white",
      clickable: false,
    },
    {
      icon: <Github className="h-6 w-6" />,
      label: "GitHub",
      value: "github.com/yerroong",
      href: "https://github.com/yerroong",
      color: "bg-gradient-to-r from-gray-700 to-gray-900",
      textColor: "text-white",
      clickable: true,
    },
    {
      icon: <FileText className="h-6 w-6" />,
      label: "Notion",
      value: "자기소개 notion",
      href: "https://www.notion.so/yerin1412/s-Introduction-616b565939a34ca19cacfc0efa979746",
      color: "bg-gradient-to-r from-orange-400 to-red-500",
      textColor: "text-white",
      clickable: true,
    },
  ]

  return (
    <Card className="shadow-md border border-gray-200 bg-white">
      <CardContent className="p-6">
        <div className="grid grid-cols-5 gap-4">
          {contactInfo.map((contact, index) => (
            <div
              key={index}
              className={`group flex flex-col items-center gap-3 p-4 rounded-lg transition-all duration-300 ${
                contact.clickable ? "cursor-pointer hover:shadow-lg" : "cursor-default"
              }`}
              onClick={contact.clickable && contact.href ? () => window.open(contact.href, "_blank") : undefined}
            >
              <div className={`${contact.color} p-3 rounded-full ${contact.textColor} shadow-md group-hover:shadow-lg transition-all duration-300`}>
                {contact.icon}
              </div>
              <div className="text-center">
                <p className="text-sm text-gray-600 font-semibold mb-1">{contact.label}</p>
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
