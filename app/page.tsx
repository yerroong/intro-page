import HeroSection from "@/components/sections/HeroSection"
import Header from "@/components/layout/Header"
import SideNavigation from "@/components/layout/SideNavigation"
import ContactSection from "@/components/sections/ContactSection"
import AboutSection from "@/components/sections/AboutSection"
import ProjectsSection from "@/components/sections/ProjectsSection"
import AchievementsSection from "@/components/sections/AchievementsSection"
import Certifications from "@/components/certifications"
import Footer from "@/components/layout/Footer"
import AnimatedBackground from "@/components/layout/AnimatedBackground"

export default function Home() {
  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      <AnimatedBackground />
      <Header />
      <SideNavigation />
      <main className="container mx-auto px-4 py-8 relative z-10">
        <section id="intro" className="py-16">
          <HeroSection />
        </section>

        <section id="contact" className="py-8">
          <ContactSection />
        </section>

        <section id="about" className="py-16">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold text-gray-900">About Me</h2>
            <div className="w-20 h-1 bg-blue-600 mt-2 mx-auto"></div>
          </div>
          <AboutSection />
        </section>

        <section id="certifications" className="py-16">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold text-gray-900">Certifications</h2>
            <div className="w-20 h-1 bg-blue-600 mt-2 mx-auto"></div>
          </div>
          <Certifications />
        </section>

        <section id="awards" className="py-16">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold text-gray-900">Awards & Activities</h2>
            <div className="w-20 h-1 bg-blue-600 mt-2 mx-auto"></div>
          </div>
          <AchievementsSection />
        </section>

        <section id="projects" className="py-16">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold text-gray-900">Projects</h2>
            <div className="w-20 h-1 bg-blue-600 mt-2 mx-auto"></div>
          </div>
          <ProjectsSection />
        </section>
      </main>
      <Footer />
    </div>
  )
}
