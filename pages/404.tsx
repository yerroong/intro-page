// pages/404.tsx
export default function NotFound() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        backgroundColor: "#f8fafc",
        padding: "20px",
      }}
    >
      <h1 style={{ fontSize: "2rem", marginBottom: "16px", color: "#333" }}>
        페이지를 찾을 수 없습니다.
      </h1>

      <a
        href="/"
        style={{
          padding: "10px 20px",
          backgroundColor: "#2563eb",
          color: "white",
          borderRadius: "8px",
          textDecoration: "none",
          fontSize: "1rem",
          marginTop: "10px",
          transition: "0.2s",
        }}
      >
        예린's page로 돌아가기
      </a>
    </div>
  )
}