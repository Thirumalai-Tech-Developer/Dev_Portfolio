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
  Network,
  Hand,
  Menu,
  X
} from "lucide-react";
import { SiHuggingface } from "react-icons/si";

export default function Home() {

  const { toast } = useToast();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const form = useForm<InsertContactMessage>({
    resolver: zodResolver(insertContactMessageSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });
  
  const heroRef = useRef(null);
  const projectsRef = useRef(null);
  const experienceRef = useRef(null);
  const skillsRef = useRef(null);
  const contactRef = useRef(null);
  
  const isProjectsInView = useInView(projectsRef, { once: true, margin: "-100px" });
  const isExperienceInView = useInView(experienceRef, { once: true, margin: "-100px" });
  const isSkillsInView = useInView(skillsRef, { once: true, margin: "-100px" });
  const isContactInView = useInView(contactRef, { once: true, margin: "-100px" });

  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  const [formData, setFormData] = useState({
    name: "",
    message: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive"
      });
      return;
    }

    const templateParams = {
      from_name: formData.name,
      message: formData.message,
    };

    emailjs
      .send("service_rp58y17", "template_qpjd0ep", templateParams, "kwkLCLo2I3x6SItHL")
      .then(() => {
        toast({
          title: "Message Sent!",
          description: "Thank you for your message. I'll get back to you soon!",
        });
        setFormData({ name: "", message: "" });
      })
      .catch(() => {
        toast({
          title: "Error",
          description: "Failed to send message. Please try again later.",
          variant: "destructive"
        });
      });
  };

  const scrollToSection = (ref: React.RefObject<HTMLElement>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  const contactMutation = useMutation({
    mutationFn: async (data: InsertContactMessage) => {
      return await apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. I'll get back to you soon!",
      });
      form.reset();
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: InsertContactMessage) => {
    contactMutation.mutate(data);
  };

  const projects = [
    {
      title: "End-To-End AI/ML Cloud platform",
      description: "Developed a complete cloud-based automation system for AI/ML workflows.",
      icon: <LucideCloudy className="w-8 h-8" />,
      tags: ["PyTorch", "LLM", "Machine Learning", "Cloud"],
      gradient: "from-purple-500/20 to-pink-500/20",
      link: "https://github.com/Thirumalai-Tech-Developer/END-END_AI-ML_Cloud"
    },
    {
      title: "Sign Language Classification",
      description: "Graph neural network to identify sign language words and letters with high accuracy.",
      icon: <Hand className="w-8 h-8" />,
      tags: ["PyTorch", "GNN", "Computer Vision"],
      gradient: "from-blue-500/20 to-purple-500/20",
      link: "https://github.com/Thirumalai-Tech-Developer/Sign_Language"
    },
    // {
    //   title: "Voice-To-Voice AI Agent",
    //   description: "The system recognizes speech, converts to text, sends to LLM, and converts response back to speech.",
    //   icon: <Mic className="w-8 h-8" />,
    //   tags: ["LLM", "Speech Recognition", "AI Agent"],
    //   gradient: "from-pink-500/20 to-red-500/20"
    // },
    {
      title: "YouTube Video AI Agent",
      description: "Takes keywords, generates a story, creates image prompts for Stable Diffusion, converts to speech, and combines into a complete video.",
      icon: <Video className="w-8 h-8" />,
      tags: ["Stable Diffusion", "LLM", "Automation"],
      gradient: "from-red-500/20 to-orange-500/20",
      link: "https://github.com/Thirumalai-Tech-Developer/Youtube-Video-AI-Agents"
    }
  ];

  const experiences = [
    {
      title: "AI/ML Developer",
      company: "Vcodez",
      location: "Chennai",
      period: "Mar 2025 – Jun 2025",
      achievements: [
        "Worked on 5+ AI/ML projects including LLM-based and vision-based tools",
        "Collaborated with clients to resolve technical issues and optimize performance of deployed models"
      ]
    }
  ];

  const education = [
    {
      degree: "B.Tech",
      institution: "Muthayammal College of Engineering",
      location: "Rasipuram",
      period: "Aug 2021 – May 2025",
      score: "CGPA: 8.1 (Approx)"
    },
    {
      degree: "HSC",
      institution: "New Power Matric Higher Secondary School",
      location: "Sankarapuram",
      period: "Aug 2020 – May 2021",
      score: "77.8%"
    },
    {
      degree: "SSLC",
      institution: "New Power Matric Higher Secondary School",
      location: "Sankarapuram",
      period: "Aug 2018 – May 2019",
      score: "72.2%"
    }
  ];

  const skills = [
    { name: "Python", level: 100, category: "Language" },
    { name: "PyTorch", level: 80, category: "Framework" },
    { name: "LangChain", level: 85, category: "Framework" },
    { name: "LangGraph", level: 80, category: "Framework" },
    { name: "LLM", level: 100, category: "Domain" },
    { name: "VLM", level: 90, category: "Domain" },
    { name: "AI Agent", level: 95, category: "Domain" },
    { name: "n8n", level: 75, category: "Tool" },
    { name: "Comfy UI", level: 90, category: "Tool" }
  ];

  const stats = [
    { label: "Projects Completed", value: 9, suffix: "+" },
    { label: "Technologies Mastered", value: 8, suffix: "+" },
    { label: "Total Experience", value: 1, suffix: "+" }
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
      {/* Navigation */}
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
                onClick={() => scrollToSection(projectsRef)}
                className="text-sm font-medium hover-elevate transition-colors px-3 py-2 rounded-md"
                data-testid="nav-projects"
              >
                Projects
              </button>
              <button 
                onClick={() => scrollToSection(experienceRef)}
                className="text-sm font-medium hover-elevate transition-colors px-3 py-2 rounded-md"
                data-testid="nav-experience"
              >
                Experience
              </button>
              <button 
                onClick={() => scrollToSection(skillsRef)}
                className="text-sm font-medium hover-elevate transition-colors px-3 py-2 rounded-md"
                data-testid="nav-skills"
              >
                Skills
              </button>
              <button 
                onClick={() => scrollToSection(contactRef)}
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
                    scrollToSection(projectsRef);
                    setMobileMenuOpen(false);
                  }}
                  className="block w-full text-left text-sm font-medium hover-elevate transition-colors px-3 py-2 rounded-md"
                  data-testid="nav-projects-mobile"
                >
                  Projects
                </button>
                <button 
                  onClick={() => {
                    scrollToSection(experienceRef);
                    setMobileMenuOpen(false);
                  }}
                  className="block w-full text-left text-sm font-medium hover-elevate transition-colors px-3 py-2 rounded-md"
                  data-testid="nav-experience-mobile"
                >
                  Experience
                </button>
                <button 
                  onClick={() => {
                    scrollToSection(skillsRef);
                    setMobileMenuOpen(false);
                  }}
                  className="block w-full text-left text-sm font-medium hover-elevate transition-colors px-3 py-2 rounded-md"
                  data-testid="nav-skills-mobile"
                >
                  Skills
                </button>
                <button 
                  onClick={() => {
                    scrollToSection(contactRef);
                    setMobileMenuOpen(false);
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
                AI/ML Developer
              </p>
              <h1 className="text-6xl md:text-7xl font-bold leading-tight font-[family-name:var(--font-display)]">
                <span className="text-foreground">Thirumalai</span>{" "}
                <span className="text-primary">G</span>
              </h1>
            </motion.div>

            <motion.p
              className="text-xl text-muted-foreground leading-relaxed font-light"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Building intelligent systems with <span className="text-primary font-medium">PyTorch</span>, <span className="text-primary font-medium">LangChain</span>, and cutting-edge AI technologies. 
              Passionate about solving real-world problems through artificial intelligence.
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

      {/* Projects Section */}
      <section ref={projectsRef} className="py-24 px-6" id="projects">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isProjectsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 font-[family-name:var(--font-display)]">
              Featured Projects
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Innovative AI/ML solutions built with cutting-edge technologies
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <a href={project.link}>
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isProjectsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card 
                    className={`group hover-elevate active-elevate-2 cursor-pointer transition-all duration-300 hover:shadow-lg h-full bg-gradient-to-br ${project.gradient}`}
                    data-testid={`project-card-${index}`}
                  >
                    <CardHeader>
                      <div className="flex items-start justify-between mb-4">
                        <div className="p-3 rounded-lg bg-card/80 backdrop-blur-sm border border-border">
                          {project.icon}
                        </div>
                      </div>
                      <CardTitle className="text-2xl group-hover:text-primary transition-colors">
                        {project.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-muted-foreground leading-relaxed">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag, tagIndex) => (
                          <Badge 
                            key={tagIndex} 
                            variant="secondary" 
                            className="text-xs"
                            data-testid={`project-${index}-tag-${tagIndex}`}
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section ref={experienceRef} className="py-24 px-6 bg-card/30" id="experience">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isExperienceInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 font-[family-name:var(--font-display)]">
              Experience
            </h2>
            <p className="text-muted-foreground text-lg">
              Building AI solutions across diverse domains
            </p>
          </motion.div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isExperienceInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Card className="hover-elevate transition-all duration-300" data-testid={`experience-card-${index}`}>
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-lg bg-primary/10 border border-primary/20">
                        <Briefcase className="w-8 h-8 text-primary" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-xl mb-1">{exp.title}</CardTitle>
                        <p className="text-muted-foreground">
                          {exp.company} • {exp.location}
                        </p>
                        <p className="text-sm text-muted-foreground mt-1">{exp.period}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="flex items-start gap-3">
                          <Sparkles className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                          <span className="text-muted-foreground">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isExperienceInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-16"
          >
            <h3 className="text-3xl font-bold mb-8 font-[family-name:var(--font-display)] flex items-center gap-3">
              <GraduationCap className="w-8 h-8 text-primary" />
              Education
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {education.map((edu, index) => (
                <Card key={index} className="hover-elevate transition-all" data-testid={`education-card-${index}`}>
                  <CardHeader>
                    <CardTitle className="text-lg">{edu.degree}</CardTitle>
                    <p className="text-sm text-muted-foreground">{edu.institution}</p>
                    <p className="text-xs text-muted-foreground">{edu.location}</p>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{edu.period}</p>
                    <p className="text-sm font-medium text-primary mt-2">{edu.score}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section ref={skillsRef} className="py-24 px-6" id="skills">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isSkillsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 font-[family-name:var(--font-display)]">
              Skills & Expertise
            </h2>
            <p className="text-muted-foreground text-lg">
              Technologies and frameworks I work with
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isSkillsInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <Card className="hover-elevate active-elevate-2 transition-all" data-testid={`skill-card-${index}`}>
                  <CardContent className="pt-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="font-semibold">{skill.name}</span>
                      <Badge variant="outline" className="text-xs">
                        {skill.category}
                      </Badge>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-primary to-purple-500"
                        initial={{ width: 0 }}
                        animate={isSkillsInView ? { width: `${skill.level}%` } : {}}
                        transition={{ duration: 1, delay: index * 0.05 }}
                      />
                    </div>
                    <p className="text-xs text-muted-foreground mt-2 text-right">
                      {skill.level}%
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section ref={contactRef} className="py-24 px-6 bg-card/30" id="contact">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isContactInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 font-[family-name:var(--font-display)]">
              Get In Touch
            </h2>
            <p className="text-muted-foreground text-lg">
              If you are thinking to give a opportunity!. My inbox is always open.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isContactInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MessageSquare className="w-5 h-5 text-primary" />
                    Send a Message
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Form {...form}>
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <FormField
                        name="name"
                        render={() => (
                          <FormItem>
                            <FormLabel>Company Name</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Company name"
                                value={formData.name}
                                onChange={(e) =>
                                  setFormData({ ...formData, name: e.target.value })
                                }
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        name="message"
                        render={() => (
                          <FormItem>
                            <FormLabel>What impressed you?</FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="Your Answer..."
                                rows={5}
                                value={formData.message}
                                onChange={(e) =>
                                  setFormData({ ...formData, message: e.target.value })
                                }
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <Button
                        type="submit"
                        className="w-full"
                      >
                        <Send className="w-4 h-4 mr-2" />
                        Send Message
                      </Button>
                    </form>
                  </Form>
                </CardContent>
              </Card>
            </motion.div>


            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isContactInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <Card className="hover-elevate transition-all" data-testid="contact-email">
                <CardContent className="flex items-center gap-4 pt-6">
                  <div className="p-3 rounded-lg bg-primary/10 border border-primary/20">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <a href="mailto:thirutechdeveloper@gmail.com" className="font-medium hover:text-primary transition-colors">
                      thirutechdeveloper@gmail.com
                    </a>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover-elevate transition-all" data-testid="contact-location">
                <CardContent className="flex items-center gap-4 pt-6">
                  <div className="p-3 rounded-lg bg-purple-500/10 border border-purple-500/20">
                    <MapPin className="w-6 h-6 text-purple-500" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Location</p>
                    <p className="font-medium">Kallakurichi, Tamil Nadu</p>
                  </div>
                </CardContent>
              </Card>

              <div className="space-y-3">
                <p className="text-sm text-muted-foreground font-medium">Connect with me</p>
                <div className="flex gap-3">
                  <a 
                    href="https://www.linkedin.com/in/thirumalai-g007" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    data-testid="link-linkedin"
                  >
                    <Button variant="outline" size="icon" className="hover-elevate">
                      <Linkedin className="w-5 h-5" />
                    </Button>
                  </a>
                  <a 
                    href="https://github.com/Thirumalai-Tech-Developer" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    data-testid="link-github"
                  >
                    <Button variant="outline" size="icon" className="hover-elevate">
                      <Github className="w-5 h-5" />
                    </Button>
                  </a>
                  <a 
                    href="https://huggingface.co/GTKING" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    data-testid="link-huggingface"
                  >
                    <Button variant="outline" size="icon" className="hover-elevate">
                      <SiHuggingface className="w-5 h-5" />
                    </Button>
                  </a>
                </div>
              </div>

              <Card className="bg-gradient-to-br from-primary/10 to-purple-500/10 border-primary/20">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-3">
                    <Sparkles className="w-5 h-5 text-primary mt-1" />
                    <div>
                      <p className="font-semibold mb-1">Available for Opportunities</p>
                      <p className="text-sm text-muted-foreground">
                        Open to Work as AI/ML Engineer 
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-border">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-muted-foreground">
            © 2025 Thirumalai G. Built with React, Python, and lots of{" "}
            <span className="text-primary">AI magic</span> ✨
          </p>
        </div>
      </footer>
    </div>
  );
}
