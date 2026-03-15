import { useEffect, useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";

import { 
  Brain, 
  Code, 
  Cpu, 
  ExternalLink,
} from "lucide-react";
// import { setTimeout } from "timers/promises";

export default function Hero() {

  const heroRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);
  
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  const scrollToSection = (ref: React.RefObject<HTMLElement>) => {
    if (!ref.current) return;

    const navbarHeight = 80;

    const elementPosition = ref.current.getBoundingClientRect().top + window.scrollY;

    const offsetPosition = elementPosition - navbarHeight;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  };

  const text = "Thirumalai G";

  const [typedText, setTypedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {

    let timeout: NodeJS.Timeout;

    if (!isDeleting && typedText.length < text.length) {

      timeout = setTimeout(() => {
        setTypedText(text.slice(0, typedText.length + 1));
      }, 140);

    } 
    else if (!isDeleting && typedText.length === text.length) {

      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, 5000);

    } 
    else if (isDeleting && typedText.length > 0) {

      timeout = setTimeout(() => {
        setTypedText(text.slice(0, typedText.length - 1));
      }, 120);

    } 
    else if (isDeleting && typedText.length === 0) {

      setIsDeleting(false);

    }

    return () => clearTimeout(timeout);

  }, [typedText, isDeleting]);


  const stats = [
    { label: "Projects Completed", value: 10, suffix: "+" },
    { label: "Deployed Projects", value: 3, suffix: "+" },
    { label: "Self Experience", value: 1, suffix: "+" }
  ];

  const [counters, setCounters] = useState(stats.map(() => 0));

  useEffect(() => {
    const intervals = stats.map((stat, index) => {
      const interval = setInterval(() => {
        setCounters((prev) => {
          const newCounters = [...prev];
          if (newCounters[index] < stat.value) {
            newCounters[index] = Math.min(newCounters[index] + 1, stat.value);
          }
          return newCounters;
        });
      }, 50);
      return interval;
    });

    return () => intervals.forEach(clearInterval);
  }, []);

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
      >
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div 
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div 
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.5, 0.3, 0.5],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          />
        </div>

        <motion.div 
          className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10"
          style={{ opacity }}
        >
          {/* Left Column */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p className="text-sm font-medium tracking-wide uppercase text-muted-foreground mb-4">
                Applied AI & Full Stack Developer
              </p>
              <h1 className="text-6xl md:text-7xl font-bold leading-tight font-[family-name:var(--font-display)]">
                <span className="text-foreground">{typedText.split(" ")[0]}</span>{" "}
                <span className="text-primary">{typedText.split(" ")[1]}</span>
                <span className="animate-pulse">|</span>
              </h1>
            </motion.div>

            <motion.p
              className="text-xl text-muted-foreground leading-relaxed font-light"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Applied AI & Full Stack Developer specializing in
              <span className="text-primary font-medium">
              {" "}Full-Stack Web Development, LLM systems, RAG architecture, and AI automation.
              </span> 
              {" "}Experienced in building production-ready AI agents and scalable web apps using 
              <span className="text-primary font-medium">
              {" "}Python, React, Node.js, Express.js, JWT Auth, CSRF Protection, LangChain and TailwindCSS.
              </span>
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Button 
                onClick={() => scrollToSection(projectsRef)}
                size="lg"
                className="group"
                data-testid="button-view-projects"
              >
                View Projects
                <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                onClick={() => scrollToSection(contactRef)}
                variant="outline" 
                size="lg"
                data-testid="button-get-in-touch"
              >
                Get in Touch
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="grid grid-cols-3 gap-6 pt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-primary" data-testid={`stat-${index}-value`}>
                    {counters[index]}{stat.suffix}
                  </div>
                  <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Column - Animated Geometric Shape */}
          <motion.div
            className="hidden md:flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="relative w-80 h-80">
              {/* Rotating Cube */}
              <motion.div
                className="absolute inset-0"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <div className="w-full h-full border-2 border-primary/30 rounded-lg backdrop-blur-sm bg-card/50" 
                     style={{ transform: "rotateX(45deg) rotateY(45deg)" }}>
                  <div className="absolute inset-4 border border-primary/20 rounded-lg" />
                  <div className="absolute inset-8 border border-primary/10 rounded-lg" />
                </div>
              </motion.div>

              {/* Floating Icons */}
              <motion.div
                className="absolute top-0 left-0 bg-primary/10 backdrop-blur-sm rounded-lg p-3 border border-primary/20"
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <Brain className="w-8 h-8 text-primary" />
              </motion.div>
              <motion.div
                className="absolute bottom-0 right-0 bg-purple-500/10 backdrop-blur-sm rounded-lg p-3 border border-purple-500/20"
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              >
                <Cpu className="w-8 h-8 text-purple-500" />
              </motion.div>
              <motion.div
                className="absolute top-1/2 right-0 bg-blue-500/10 backdrop-blur-sm rounded-lg p-3 border border-blue-500/20"
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 2 }}
              >
                <Code className="w-8 h-8 text-blue-500" />
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}
