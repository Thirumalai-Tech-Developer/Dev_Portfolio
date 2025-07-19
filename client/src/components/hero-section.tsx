import { Button } from "@/components/ui/button";
import { Code, Mail } from "lucide-react";

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.offsetTop;
      const offsetPosition = elementPosition - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/5 to-accent/5 dark:from-primary/10 dark:to-accent/10 pt-20">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Professional Avatar */}
          <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg">
            <span className="text-white text-4xl font-bold">TG</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            Thirumalai G
          </h1>
          <h2 className="text-2xl md:text-3xl text-primary font-medium mb-6">
            Full Stack Web Developer
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
            Full-stack developer with expertise in both modern frontend technologies (React, Tailwind CSS) and Java backend development (Spring Boot, SQL). 
            Built and delivered production-ready web applications with modern UI, reusable components, API integration, and scalable backend systems. 
            Passionate about clean, maintainable code and exceptional user experiences.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => scrollToSection("projects")}
              className="bg-primary text-primary-foreground px-8 py-3 hover:bg-primary/90"
            >
              <Code className="mr-2 h-4 w-4" />
              View My Work
            </Button>
            <Button 
              variant="outline"
              onClick={() => scrollToSection("contact")}
              className="border-2 border-primary text-primary px-8 py-3 hover:bg-primary hover:text-primary-foreground"
            >
              <Mail className="mr-2 h-4 w-4" />
              Get In Touch
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
