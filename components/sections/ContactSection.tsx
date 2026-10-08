import { Mail, Instagram, Github, FileText, Phone } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

type ContactItem = {
  icon: React.ReactNode
  label: string
  value: string
  href?: string
  color: string
}

const contactInfo: ContactItem[] = [
  {
    icon: <Phone className="h-6 w-6" />,
    label: "Phone",
    value: "010-2384-9319",
    color: "bg-gradient-to-r from-green-400 to-emerald-500",
  },
  {
    icon: <Mail className="h-6 w-6" />,
    label: "Email",
    value: "wbflqldks90@naver.com",
    color: "bg-gradient-to-r from-blue-400 to-indigo-500",
  },
  {
    icon: <Instagram className="h-6 w-6" />,
    label: "Instagram",
    value: "@yerin1412",
    color: "bg-gradient-to-r from-pink-500 to-purple-600",
  },
  {
    icon: <Github className="h-6 w-6" />,
    label: "GitHub",
    value: "github.com/yerroong",
    href: "https://github.com/yerroong",
    color: "bg-gradient-to-r from-gray-700 to-gray-900",
  },
  {
    icon: <FileText className="h-6 w-6" />,
    label: "Notion",
    value: "자기소개 notion",
    href: "https://www.notion.so/yerin1412/s-Introduction-616b565939a34ca19cacfc0efa979746",
    color: "bg-gradient-to-r from-orange-400 to-red-500",
  },
]

export default function ContactSection() {
  return (
    <Card className="shadow-md border border-gray-200 bg-white">
      <CardContent className="p-4 sm:p-6">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
          {contactInfo.map((contact) => {
            const inner = (
              <>
                <div className={`${contact.color} p-3 rounded-full text-white shadow-md group-hover:shadow-lg transition-shadow duration-300`}>
                  {contact.icon}
                </div>
                <div className="text-center">
                  <p className="text-sm text-gray-600 font-semibold mb-1">{contact.label}</p>
                  <p className={`font-semibold text-gray-800 text-sm transition-colors ${contact.href ? "group-hover:text-blue-600" : ""}`}>
                    {contact.value}
                  </p>
                </div>
              </>
            )

            return contact.href ? (
              <a
                key={contact.label}
                href={contact.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center gap-3 p-4 rounded-lg hover:shadow-lg transition-all duration-300"
              >
                {inner}
              </a>
            ) : (
              <div
                key={contact.label}
                className="group flex flex-col items-center gap-3 p-4 rounded-lg"
              >
                {inner}
              </div>
            )
          })}
        </div>
      </CardContent>
    </Card>
  )
}
