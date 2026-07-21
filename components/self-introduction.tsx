import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

export default function SelfIntroduction() {
  return (
    <Card className="shadow-xl border-0 bg-white/80 backdrop-blur-sm">
      <CardContent className="p-8">
        <div className="flex flex-col lg:flex-row items-center gap-8">
          <div className="flex-1 text-center lg:text-left">
            <p className="text-lg leading-relaxed text-gray-700">
              안녕하세요! 저는 김예린입니다!
              <br />
              현재 IBK기업은행 it인턴을 진행중이며 IT 엔지니어를 꿈꾸고 있습니다
            </p>
          </div>

          <div className="relative">
            <div className="w-48 h-48 relative animate-float">
              <Image
                src="/placeholder.svg?height=200&width=200"
                alt="Floating illustration"
                width={200}
                height={200}
                className="object-cover rounded-full shadow-lg"
              />
            </div>
          </div>

          <div className="flex-1 text-center lg:text-right">
            <p className="text-lg leading-relaxed text-gray-700">
              MBTI는 INFJ로 한가지 일에 빠지면 체계적으로 탐구하는 성격이에요! 😆 😆<br />
              다양한 분야도 꾸준히 공부하며 더욱 더 성장해가기 위해 노력중입니다🤍
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
