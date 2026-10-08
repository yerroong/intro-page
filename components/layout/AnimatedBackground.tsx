"use client"

// AnimatedBackground는 순수 장식 요소이므로 SSR에서 렌더해도 무방.
// mounted 상태 제거 → 불필요한 리렌더 1회 제거.
// will-change: transform 으로 GPU 레이어 분리, 애니메이션 레이어 최소화.
export default function AnimatedBackground() {
  return (
    <div
      className="fixed inset-0 pointer-events-none overflow-hidden"
      aria-hidden="true"
    >
      {/* 웨이브 SVG */}
      <svg
        className="absolute inset-0 w-full h-full opacity-10"
        viewBox="0 0 1000 1000"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="wave-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3B82F6" />
            <stop offset="100%" stopColor="#8B5CF6" />
          </linearGradient>
        </defs>
        <path
          d="M0,200 Q250,100 500,200 T1000,200"
          stroke="url(#wave-grad)"
          strokeWidth="2"
          fill="none"
          className="animate-pulse"
        />
        <path
          d="M0,400 Q250,300 500,400 T1000,400"
          stroke="url(#wave-grad)"
          strokeWidth="1"
          fill="none"
          className="animate-pulse"
          style={{ animationDelay: "1s" }}
        />
        <path
          d="M0,600 Q250,500 500,600 T1000,600"
          stroke="url(#wave-grad)"
          strokeWidth="1.5"
          fill="none"
          className="animate-pulse"
          style={{ animationDelay: "2s" }}
        />
      </svg>

      {/* 블러 원형 — will-change로 GPU 레이어 분리 */}
      <div
        className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-br from-blue-200/20 to-transparent rounded-full blur-xl animate-pulse"
        style={{ animationDuration: "4s", willChange: "opacity" }}
      />
      <div
        className="absolute bottom-32 left-20 w-40 h-40 bg-gradient-to-br from-purple-200/20 to-transparent rounded-full blur-xl animate-pulse"
        style={{ animationDuration: "6s", animationDelay: "2s", willChange: "opacity" }}
      />

      {/* 핑 닷 */}
      <div
        className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400/40 rounded-full animate-ping"
        style={{ willChange: "transform, opacity" }}
      />
      <div
        className="absolute top-3/4 right-1/3 w-1.5 h-1.5 bg-purple-400/40 rounded-full animate-ping"
        style={{ animationDelay: "1s", willChange: "transform, opacity" }}
      />
      <div
        className="absolute bottom-1/4 left-1/3 w-2.5 h-2.5 bg-pink-400/40 rounded-full animate-ping"
        style={{ animationDelay: "2s", willChange: "transform, opacity" }}
      />

      {/* 그리드 오버레이 */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "linear-gradient(rgba(59,130,246,0.3) 1px,transparent 1px)," +
            "linear-gradient(90deg,rgba(59,130,246,0.3) 1px,transparent 1px)",
          backgroundSize: "100px 100px",
        }}
      />
    </div>
  )
}
