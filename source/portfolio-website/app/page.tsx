import Header from "@/components/header"
import Navbar from "@/components/navbar"
import Contact from "@/components/contact"
import AboutCombined from "@/components/about-combined"
import Projects from "@/components/projects"
import Awards from "@/components/awards"
import TechStack from "@/components/tech-stack"
import Certifications from "@/components/certifications"
import Footer from "@/components/footer"
import AnimatedBackground from "@/components/animated-background"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">
      <AnimatedBackground />
      <Navbar />
      <main className="container mx-auto px-4 py-8 relative z-10">
        <section id="header" className="py-16">
          <Header />
        </section>

        <section id="contact" className="py-8">
          <Contact />
        </section>

        <section id="about" className="py-16">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold text-gray-800">About Me</h2>
          </div>
          <AboutCombined />
        </section>

        <section id="projects" className="py-16">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold text-gray-800">Projects</h2>
          </div>
          <Projects />
        </section>

        <section id="awards" className="py-16">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold text-gray-800">Awards & Activities</h2>
          </div>
          <Awards />
        </section>

        <section id="certifications" className="py-16">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold text-gray-800">Certifications</h2>
          </div>
          <Certifications />
        </section>

        <section id="tech-stack" className="py-16">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold text-gray-800">Technical Stack</h2>
          </div>
          <TechStack />
        </section>
      </main>
      <Footer />
    </div>
  )
}
