import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import Hero from "@/pages/hero";
import Skills from "@/pages/skills";
import Contact from "@/pages/contact";
import Education from "@/pages/education";
import Projects from "@/pages/projects";

export default function Home() {

  return (
    <>
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <Education />
      <Contact />
      <Footer />
    </>
  );
}
