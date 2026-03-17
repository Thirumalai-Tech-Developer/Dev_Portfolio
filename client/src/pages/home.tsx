import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import Hero from "@/pages/hero";
import Skills from "@/pages/skills";
import Contact from "@/pages/contact";
import Education from "@/pages/education";
import Projects from "@/pages/projects";
import KidoAI from "@/components/layout/kidoAI";

export default function Home() {
  return (
    <>
      <div className="overflow-x-hidden w-full">
        <Navbar />
        <KidoAI />
        <Hero />
        <Skills />
        <Projects />
        <Education />
        <Contact />
        <Footer />
      </div>
    </>
  );
}