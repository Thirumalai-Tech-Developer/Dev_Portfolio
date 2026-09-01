import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import TiltCard from "@/components/ui/tilt-card";
import { 
  Bot,
  Brain,
  Sparkles,
  Layers,
  Video,
  Building,
  Network,
  Cpu,
  Search,
  ArrowUpRight,
  Github,
  Terminal,
  ShieldCheck,
  Zap
} from "lucide-react";

export default function Projects() {
  const projectsRef = useRef(null);
  const isProjectsInView = useInView(projectsRef, { once: true, margin: "-80px" });
  const [activeCategory, setActiveCategory] = useState("All");

  const projects = [
    {
      title: "Kratos Agent — Autonomous Terminal AI Coding Agent",
      description: "Full autonomous terminal-based AI coding agent in Python that plans, writes, edits, and verifies code end-to-end. Features a proxy-free Universal LLM Brain with SSE streaming, autonomous tool forging (agent writes and hot-reloads new tools on demand), dynamic step planner with multi-session memory, and 695+ Claude Code indexed prompts.",
      icon: Terminal,
      tags: ["Python", "AI Agent", "Tool Forging", "SSE Streaming", "Dynamic Memory", "Claude Code"],
      gradient: "from-blue-600/20 via-indigo-600/10 to-transparent",
      glowColor: "blue" as const,
      link: "https://github.com/Thirumalai-Tech-Developer",
      github: "https://github.com/Thirumalai-Tech-Developer",
      category: "Autonomous Agents",
      badge: "🌟 Signature Project",
      metric: "695+ Sub-Agents • 48+ Tests",
      isFeatured: true,
    },
    {
      title: "ComfyUI Custom Nodes (Character Consistency)",
      description: "Reusable custom ComfyUI nodes for maintaining persistent character identity across multi-scene narrative generations without copyright infringement, sourcing reference image embeddings automatically.",
      icon: Layers,
      tags: ["ComfyUI", "Python", "Generative AI", "Custom Nodes", "Stable Diffusion"],
      gradient: "from-purple-500/20 via-pink-500/10 to-transparent",
      glowColor: "purple" as const,
      link: "https://github.com/Thirumalai-Tech-Developer",
      github: "https://github.com/Thirumalai-Tech-Developer",
      category: "Generative AI & Vision",
      badge: "🎨 Generative AI",
      metric: "Zero Character Drift",
      isFeatured: false,
    },
    {
      title: "AI Video Generation Pipeline (Free Resources)",
      description: "End-to-end automated video generation pipeline built entirely using open-source, free resources. Enables AI-generated story videos, marketing advertisements, and multi-modal media creation without paid API overhead.",
      icon: Video,
      tags: ["Python", "Open-Source Models", "Video AI", "Automation Pipeline", "ComfyUI"],
      gradient: "from-cyan-500/20 via-blue-500/10 to-transparent",
      glowColor: "cyan" as const,
      link: "https://github.com/Thirumalai-Tech-Developer",
      github: "https://github.com/Thirumalai-Tech-Developer",
      category: "Generative AI & Vision",
      badge: "🎬 Video Generation",
      metric: "100% Free Open Pipeline",
      isFeatured: false,
    },
    {
      title: "Real-Estate Generative AI Visualization",
      description: "High-resolution architectural and interior real-estate visualization system powered by Stable Diffusion (SD) and customized LoRA (Low-Rank Adaptation) fine-tuning for photo-realistic renders.",
      icon: Building,
      tags: ["Stable Diffusion", "LoRA Fine-Tuning", "PyTorch", "Computer Vision", "Architecture AI"],
      gradient: "from-amber-500/20 via-orange-500/10 to-transparent",
      glowColor: "purple" as const,
      link: "https://github.com/Thirumalai-Tech-Developer",
      github: "https://github.com/Thirumalai-Tech-Developer",
      category: "Generative AI & Vision",
      badge: "🏡 LoRA Fine-Tuning",
      metric: "Photo-Realistic Renderings",
      isFeatured: false,
    },
    {
      title: "AI Sign Language Classification (GNN)",
      description: "Deep learning computer vision platform utilizing Graph Neural Networks (GNNs) for video gesture detection, spatial landmark tracking, and real-time bidirectional translation for deaf communication.",
      icon: Network,
      tags: ["Graph Neural Networks", "PyTorch", "OpenCV", "Computer Vision", "Landmark Tracking"],
      gradient: "from-emerald-500/20 via-teal-500/10 to-transparent",
      glowColor: "emerald" as const,
      link: "https://github.com/Thirumalai-Tech-Developer/Sign_Language_FullStack",
      github: "https://github.com/Thirumalai-Tech-Developer/Sign_Language_FullStack",
      category: "Deep Learning & Vision",
      badge: "🦾 GNN Computer Vision",
      metric: "85%+ Classification Accuracy",
      isFeatured: false,
    },
    {
      title: "End-to-End Cloud MLOps Pipeline",
      description: "Automated dataset ingestion, feature engineering, distributed training, and model export pipeline built for scalable production deployment of AI models.",
      icon: Cpu,
      tags: ["MLOps", "Python", "Docker", "Model Registry", "Distributed Training"],
      gradient: "from-blue-500/20 via-cyan-500/10 to-transparent",
      glowColor: "blue" as const,
      link: "https://github.com/Thirumalai-Tech-Developer",
      github: "https://github.com/Thirumalai-Tech-Developer",
      category: "Workflows & MLOps",
      badge: "⚡ MLOps Engineering",
      metric: "CI/CD Model Pipeline",
      isFeatured: false,
    },
    {
      title: "MCP Web Search Anti-Hallucination Agent",
      description: "Model Context Protocol (MCP) tool integration connecting DuckDuckGo web search with fine-tuned LoRA models to perform live fact-checking and eliminate LLM hallucinations.",
      icon: Search,
      tags: ["MCP Protocol", "DuckDuckGo", "LoRA", "Anti-Hallucination", "Tool Calling"],
      gradient: "from-indigo-500/20 via-purple-500/10 to-transparent",
      glowColor: "purple" as const,
      link: "https://github.com/Thirumalai-Tech-Developer",
      github: "https://github.com/Thirumalai-Tech-Developer",
      category: "Autonomous Agents",
      badge: "🔍 MCP Protocol",
      metric: "Live Verified Fact Retrieval",
      isFeatured: false,
    },
    {
      title: "Autonomous AI Frontend Web-App Builder",
      description: "Semi-agentic and rule-based automation engine that builds complete frontend web applications directly from natural language specifications with self-healing syntax correction.",
      icon: Bot,
      tags: ["Semi-Agentic", "Rule Engine", "Python", "Code Synthesis", "Self-Healing"],
      gradient: "from-teal-500/20 via-emerald-500/10 to-transparent",
      glowColor: "emerald" as const,
      link: "https://github.com/Thirumalai-Tech-Developer/AI-Agent",
      github: "https://github.com/Thirumalai-Tech-Developer/AI-Agent",
      category: "Autonomous Agents",
      badge: "🤖 Semi-Agentic AI",
      metric: "70% Faster App Scaffolding",
      isFeatured: false,
    },
  ];

  const categories = ["All", "Autonomous Agents", "Generative AI & Vision", "Deep Learning & Vision", "Workflows & MLOps"];

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section ref={projectsRef} className="relative py-16 sm:py-20 md:py-24 lg:py-28 px-3 xs:px-4 sm:px-6 lg:px-8 w-full max-w-full overflow-hidden" id="projects">
      {/* Ambient background glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden -z-10">
        <div className="absolute top-1/3 right-1/4 w-72 sm:w-[40rem] h-72 sm:h-[40rem] bg-blue-600/10 rounded-full blur-[100px] sm:blur-[160px]" />
        <div className="absolute bottom-1/4 left-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-purple-600/10 rounded-full blur-[90px] sm:blur-[140px]" />
      </div>

      <div className="max-w-7xl mx-auto space-y-10 sm:space-y-12 md:space-y-16">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={isProjectsInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto space-y-3 sm:space-y-4"
        >
          <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full glass-pill border-primary/30 text-[11px] sm:text-xs font-medium text-primary">
            <Sparkles className="w-3.5 h-3.5 text-primary" />
            <span>AI / ML Portfolio Projects</span>
          </div>

          <h2 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-extrabold font-[family-name:var(--font-display)] tracking-tight">
            Featured <span className="text-gradient-primary">AI Systems & Agents</span>
          </h2>

          <p className="text-muted-foreground text-xs xs:text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
            Autonomous terminal agents, custom ComfyUI generative nodes, GNN gesture classification models, and cloud MLOps pipelines.
          </p>
        </motion.div>

        {/* Category Switcher Tabs */}
        <div className="flex flex-wrap justify-center gap-1.5 sm:gap-2.5 md:gap-3">
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`relative px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-[11px] sm:text-xs md:text-sm font-medium transition-all duration-300 ${
                  isActive
                    ? "text-white font-semibold shadow-[0_0_20px_rgba(59,130,246,0.4)]"
                    : "glass-pill text-muted-foreground hover:text-white hover:border-white/20"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="active-project-cat"
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-purple-600 -z-10"
                    transition={{ type: "spring", stiffness: 350, damping: 28 }}
                  />
                )}
                {cat}
              </button>
            );
          })}
        </div>

        {/* Projects 3D Tilt Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-7"
        >
          {filteredProjects.map((project, index) => {
            const Icon = project.icon;
            return (
              <motion.div
                layout
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isProjectsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className={project.isFeatured ? "col-span-1 md:col-span-2 lg:col-span-2" : "col-span-1"}
              >
                <TiltCard
                  glowColor={project.glowColor}
                  className={`flex flex-col justify-between p-5 sm:p-7 h-full group ${
                    project.isFeatured ? "border-primary/40 bg-blue-950/20" : ""
                  }`}
                >
                  <div className="space-y-4 sm:space-y-5">
                    {/* Top Row: Icon & Status Badge */}
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-white/[0.08] border border-white/15 flex items-center justify-center backdrop-blur-md group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary group-hover:text-cyan-400 transition-colors" />
                      </div>

                      <span className="px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-[11px] font-medium bg-white/[0.06] border border-white/10 text-white/90">
                        {project.badge}
                      </span>
                    </div>

                    {/* Title & Description */}
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-foreground group-hover:text-primary transition-colors flex items-center gap-1.5">
                        {project.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-muted-foreground mt-1.5 sm:mt-2 leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    {/* Metric Chip */}
                    <div className="p-2 sm:p-2.5 rounded-xl bg-white/[0.03] border border-white/[0.06] text-[11px] sm:text-xs font-mono text-cyan-300 flex items-center gap-2">
                      <Sparkles className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0" />
                      <span className="truncate">{project.metric}</span>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1 sm:gap-1.5 pt-1">
                      {project.tags.map((tag, tIndex) => (
                        <span
                          key={tIndex}
                          className="px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-md text-[10px] sm:text-[11px] font-medium bg-white/[0.04] border border-white/[0.08] text-muted-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Action Links */}
                  <div className="flex items-center gap-2 sm:gap-3 pt-4 sm:pt-6 mt-4 sm:mt-6 border-t border-white/[0.08]">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 min-w-0"
                    >
                      <Button
                        size="sm"
                        className="w-full h-8 sm:h-9 rounded-xl bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 text-white text-[11px] sm:text-xs font-medium shadow-[0_0_15px_rgba(59,130,246,0.3)] transition-all duration-300 group/btn"
                      >
                        <span className="truncate">View Architecture</span>
                        <ArrowUpRight className="w-3.5 h-3.5 ml-1.5 flex-shrink-0 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                      </Button>
                    </a>

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-shrink-0"
                    >
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8 sm:h-9 sm:w-9 rounded-xl glass-pill hover:text-white hover:border-white/30"
                      >
                        <Github className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                      </Button>
                    </a>
                  </div>
                </TiltCard>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}