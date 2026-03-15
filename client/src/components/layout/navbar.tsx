import { useEffect, useState, useRef } from "react";
import { motion, useInView, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { insertContactMessageSchema, type InsertContactMessage } from "@shared/schema";
import emailjs from '@emailjs/browser';
import { 
  Brain, 
  Code, 
  Cpu, 
  Github, 
  Linkedin, 
  Mail, 
  MapPin, 
  ExternalLink,
  Briefcase,
  GraduationCap,
  Download,
  Send,
  Sparkles,
  MessageSquare,
  Video,
  Mic,
  LucideCloudy,
  Construction,
  Network,
  Hand,
  Menu,
  X
} from "lucide-react";

export default function Navbar() {

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);

    if (!element) return;

    const navbarHeight = 80;

    const elementPosition = element.offsetTop - navbarHeight;

    window.scrollTo({
      top: elementPosition,
      behavior: "smooth",
    });
  };

  return (

      <motion.nav 
        className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg bg-background/80 border-b border-border"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.div 
              className="text-xl font-bold font-[family-name:var(--font-display)]"
              whileHover={{ scale: 1.05 }}
            >
              <span className="text-primary">THIRUMALAI</span> G
            </motion.div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <button 
                onClick={() => scrollToSection("skills")}
                className="text-sm font-medium hover-elevate transition-colors px-3 py-2 rounded-md"
                data-testid="nav-skills"
              >
                Skills
              </button>
              <button 
                onClick={() => scrollToSection("projects")}
                className="text-sm font-medium hover-elevate transition-colors px-3 py-2 rounded-md"
                data-testid="nav-projects"
              >
                Projects
              </button>
              <button 
                onClick={() => scrollToSection("experience")}
                className="text-sm font-medium hover-elevate transition-colors px-3 py-2 rounded-md"
                data-testid="nav-experience"
              >
                Experience
              </button>
              <button 
                onClick={() => scrollToSection("contact")}
                className="text-sm font-medium hover-elevate transition-colors px-3 py-2 rounded-md"
                data-testid="nav-contact"
              >
                Contact
              </button>
              <a href="/resume.pdf" download>
                <Button variant="outline" size="sm" data-testid="button-download-resume">
                  <Download className="w-4 h-4 mr-2" />
                  Resume
                </Button>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              data-testid="button-mobile-menu-toggle"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden border-t border-border bg-background"
            >
              <div className="px-6 py-4 space-y-4">
                <button 
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setTimeout(() => scrollToSection("skills"), 100);
                  }}
                  className="block w-full text-left text-sm font-medium hover-elevate transition-colors px-3 py-2 rounded-md"
                  data-testid="nav-skills-mobile"
                >
                  Skills
                </button>
                <button 
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setTimeout(() => scrollToSection("projects"), 100);
                  }}
                  className="block w-full text-left text-sm font-medium hover-elevate transition-colors px-3 py-2 rounded-md"
                  data-testid="nav-projects-mobile"
                >
                  Projects
                </button>
                <button 
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setTimeout(() => scrollToSection("experience"), 100);
                  }}
                  className="block w-full text-left text-sm font-medium hover-elevate transition-colors px-3 py-2 rounded-md"
                  data-testid="nav-experience-mobile"
                >
                  Experience
                </button>
                <button 
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setTimeout(() => scrollToSection("contact"), 100);
                  }}
                  className="block w-full text-left text-sm font-medium hover-elevate transition-colors px-3 py-2 rounded-md"
                  data-testid="nav-contact-mobile"
                >
                  Contact
                </button>
                <a href="/resume.pdf" download="Thirumalai_Resume.pdf" className="w-full">
                  <Button variant="outline" size="sm" className="w-full" data-testid="button-download-resume-mobile">
                    <Download className="w-4 h-4 mr-2" />
                    Resume
                  </Button>
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
  );
}
