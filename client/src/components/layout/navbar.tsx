import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download, Menu, X, Sparkles, Send } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "blob", label: "Featured" },
    { id: "experience", label: "Experience" },
    { id: "contact", label: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ["skills", "projects", "blob", "experience", "contact"];
      const scrollPos = window.scrollY + 120;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            return;
          }
        }
      }
      if (window.scrollY < 200) {
        setActiveSection("home");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (!element) return;
    const navbarHeight = 90;
    const elementPosition = element.offsetTop - navbarHeight;
    window.scrollTo({
      top: elementPosition,
      behavior: "smooth",
    });
    setMobileMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-3 sm:pt-4 pointer-events-none">
      <motion.nav
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`pointer-events-auto w-full max-w-5xl rounded-full transition-all duration-500 ${
          scrolled
            ? "glass-panel bg-black/60 border border-white/15 shadow-[0_12px_40px_rgba(0,0,0,0.6)] px-4 py-2.5 sm:px-6 sm:py-3"
            : "bg-black/30 backdrop-blur-md border border-white/10 px-4 py-3 sm:px-6 sm:py-3.5"
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Logo / Name */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 group text-left focus:outline-none"
          >
            <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-primary via-indigo-500 to-purple-500 p-[1.5px] transition-transform duration-300 group-hover:scale-110">
              <div className="w-full h-full bg-[#050811] rounded-full flex items-center justify-center">
                <span className="font-bold text-sm text-gradient-primary">TG</span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-bold tracking-tight text-sm sm:text-base font-[family-name:var(--font-display)] group-hover:text-primary transition-colors">
                Thirumalai <span className="text-primary font-mono text-xs font-semibold px-1.5 py-0.5 rounded-full bg-primary/10 border border-primary/20">AI</span>
              </span>
            </div>
          </button>

          {/* Desktop Nav Items */}
          <div className="hidden md:flex items-center gap-1.5 p-1 rounded-full bg-white/[0.03] border border-white/[0.06]">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative px-3.5 py-1.5 text-xs font-medium rounded-full transition-all duration-300 ${
                    isActive
                      ? "text-white font-semibold"
                      : "text-muted-foreground hover:text-white hover:bg-white/[0.05]"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="active-pill"
                      className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/80 to-purple-600/80 shadow-[0_0_15px_rgba(59,130,246,0.5)] -z-10"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  {item.label}
                </button>
              );
            })}
          </div>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-2.5">
            {/* Status chip */}
            <div className="hidden lg:flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[11px] font-medium text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Available to Hire
            </div>

            {/* Resume button */}
            <a href="/resume.pdf" download="Thirumalai_Resume.pdf">
              <Button
                variant="outline"
                size="sm"
                className="h-8 text-xs font-medium rounded-full border-white/15 bg-white/[0.04] hover:bg-white/[0.1] hover:border-primary/50 text-foreground transition-all duration-300 shadow-sm"
              >
                <Download className="w-3.5 h-3.5 mr-1.5 text-primary" />
                Resume
              </Button>
            </a>

            {/* Contact CTA */}
            <Button
              onClick={() => scrollToSection("contact")}
              size="sm"
              className="h-8 text-xs font-medium rounded-full bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 text-white shadow-[0_0_15px_rgba(59,130,246,0.3)] transition-all duration-300"
            >
              <Send className="w-3 h-3 mr-1.5" />
              Hire Me
            </Button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex items-center gap-2 md:hidden">
            <a href="/resume.pdf" download="Thirumalai_Resume.pdf">
              <Button
                variant="outline"
                size="sm"
                className="h-8 px-2.5 text-xs rounded-full border-white/15 bg-white/[0.04]"
              >
                <Download className="w-3.5 h-3.5" />
              </Button>
            </a>
            <Button
              variant="ghost"
              size="icon"
              className="w-8 h-8 rounded-full border border-white/10 bg-white/[0.05]"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </Button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0, marginTop: 0 }}
              animate={{ opacity: 1, height: "auto", marginTop: 12 }}
              exit={{ opacity: 0, height: 0, marginTop: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden pt-3 border-t border-white/10"
            >
              <div className="flex flex-col gap-1.5 pb-2">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="flex items-center justify-between w-full px-4 py-2 text-sm font-medium rounded-xl text-left text-muted-foreground hover:text-white hover:bg-white/[0.08] transition-colors"
                  >
                    <span>{item.label}</span>
                    <Sparkles className="w-3.5 h-3.5 text-primary opacity-60" />
                  </button>
                ))}
                <div className="pt-2 flex flex-col gap-2">
                  <Button
                    onClick={() => scrollToSection("contact")}
                    className="w-full rounded-xl bg-gradient-to-r from-primary to-purple-600 text-white text-xs h-9"
                  >
                    Get in Touch
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </header>
  );
}
