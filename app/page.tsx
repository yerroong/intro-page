import HeroSection from "@/components/sections/HeroSection"
import Header from "@/components/layout/Header"
import SideNavigation from "@/components/layout/SideNavigation"
import Navigation from "@/components/layout/Navigation"
import ContactSection from "@/components/sections/ContactSection"
import AboutSection from "@/components/sections/AboutSection"
import ProjectsSection from "@/components/sections/ProjectsSection"
import AchievementsSection from "@/components/sections/AchievementsSection"
import Certifications from "@/components/certifications"
import Footer from "@/components/layout/Footer"
import AnimatedBackground from "@/components/layout/AnimatedBackground"

function SectionHeader({ title }: { title: string }) {
  return (
    <div className="text-center mb-8">
      <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">{title}</h2>
      <div className="w-16 sm:w-20 h-1 bg-blue-600 mt-2 mx-auto rounded-full" />
    </div>
  )
}

export default function Home() {
  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      <AnimatedBackground />
      <Header />
      <Navigation />
      <SideNavigation />

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 relative z-10">
        <section id="intro" className="py-12 sm:py-16">
          <HeroSection />
        </section>

        <section id="contact" className="py-6 sm:py-8">
          <ContactSection />
        </section>

        <section id="about" className="py-12 sm:py-16">
          <SectionHeader title="About Me" />
          <AboutSection />
        </section>

        <section id="certifications" className="py-12 sm:py-16">
          <SectionHeader title="Certifications" />
          <Certifications />
        </section>

        <section id="awards" className="py-12 sm:py-16">
          <SectionHeader title="Awards & Activities" />
          <AchievementsSection />
        </section>

        <section id="projects" className="py-12 sm:py-16">
          <SectionHeader title="Projects" />
          <ProjectsSection />
        </section>
      </main>

      <Footer />
    </div>
  )
}
