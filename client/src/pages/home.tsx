import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import Hero from "@/pages/hero";
import Skills from "@/pages/skills";
import Contact from "@/pages/contact";
import Education from "@/pages/education";
import Projects from "@/pages/projects";
import Blob from "@/pages/blob";
import KidoAI from "@/components/layout/kidoAI";
import ParticleBackground from "@/components/ui/particle-background";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#050811] text-foreground selection:bg-primary/30 selection:text-white overflow-x-hidden w-full">
      {/* Interactive Particle Constellation Starfield */}
      <ParticleBackground quantity={55} staticity={45} ease={40} className="z-0" />

      {/* Floating Dynamic Island Navigation */}
      <Navbar />

      {/* Floating Kido AI Assistant */}
      <KidoAI />

      {/* Main Portfolio Sections */}
      <main className="relative z-10">
        <Hero />
        <Skills />
        <Projects />
        <Blob />
        <Education />
        <Contact />
      </main>

      {/* Modern Glass Footer */}
      <Footer />
    </div>
  );
}