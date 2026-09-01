import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import TiltCard from "@/components/ui/tilt-card";
import TechMarquee from "@/components/ui/tech-marquee";
import { 
  Brain, 
  Cpu, 
  Sparkles,
  Layers,
  Network,
  Bot,
  Database,
  Workflow,
  Eye,
  Terminal,
  Activity
} from "lucide-react";
import { 
  SiPython, 
  SiPytorch, 
  SiHuggingface, 
  SiOpencv, 
  SiNumpy, 
  SiPandas, 
  SiLinux, 
  SiGit,
  SiLangchain
} from "react-icons/si";

export default function Skills() {
  const skillsRef = useRef(null);
  const isSkillsInView = useInView(skillsRef, { once: true, margin: "-80px" });
  const [activeCategory, setActiveCategory] = useState("All");

  const skills = [
    // LLM, VLM & Generative AI
    { 
      name: "Large Language Models (LLM)", 
      level: 96, 
      category: "LLM & VLM", 
      icon: "https://raw.githubusercontent.com/run-llama/llama_index/main/docs/_static/favicon.ico", 
      glow: "purple" as const, 
      experience: "Llama, Qwen, Claude, GPT",
      iconComponent: Brain
    },
    { 
      name: "Vision Language Models (VLM)", 
      level: 90, 
      category: "LLM & VLM", 
      icon: "", 
      glow: "cyan" as const, 
      experience: "Multimodal Vision Reasoning",
      iconComponent: Eye
    },
    { 
      name: "HF Transformers", 
      level: 94, 
      category: "LLM & VLM", 
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", 
      glow: "purple" as const, 
      experience: "Model Fine-Tuning & Inference",
      iconComponent: SiHuggingface
    },
    { 
      name: "Stable Diffusion & LoRA", 
      level: 92, 
      category: "LLM & VLM", 
      icon: "", 
      glow: "cyan" as const, 
      experience: "Low-Rank Adaptation & Synthesis",
      iconComponent: Sparkles
    },

    // AI Agents & RAG
    { 
      name: "Autonomous AI Agents", 
      level: 98, 
      category: "Agents & RAG", 
      icon: "", 
      glow: "blue" as const, 
      experience: "Tool Forging, Planning & Memory",
      iconComponent: Bot
    },
    { 
      name: "RAG Architecture", 
      level: 95, 
      category: "Agents & RAG", 
      icon: "", 
      glow: "blue" as const, 
      experience: "Vector Search & Chunking",
      iconComponent: Database
    },
    { 
      name: "LangChain", 
      level: 94, 
      category: "Agents & RAG", 
      icon: "", 
      glow: "emerald" as const, 
      experience: "Chains, Tools & Evaluators",
      iconComponent: SiLangchain
    },
    { 
      name: "ChromaDB Vector Store", 
      level: 92, 
      category: "Agents & RAG", 
      icon: "", 
      glow: "purple" as const, 
      experience: "Embeddings & Semantic Search",
      iconComponent: Database
    },

    // Computer Vision & Core ML
    { 
      name: "PyTorch", 
      level: 92, 
      category: "Vision & Deep Learning", 
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg", 
      glow: "purple" as const, 
      experience: "Deep Learning & Neural Networks",
      iconComponent: SiPytorch
    },
    { 
      name: "Graph Neural Networks (GNN)", 
      level: 88, 
      category: "Vision & Deep Learning", 
      icon: "", 
      glow: "blue" as const, 
      experience: "Sign Gesture Recognition",
      iconComponent: Network
    },
    { 
      name: "OpenCV", 
      level: 90, 
      category: "Vision & Deep Learning", 
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg", 
      glow: "cyan" as const, 
      experience: "Real-Time Video & Frame Processing",
      iconComponent: SiOpencv
    },
    { 
      name: "NumPy & Pandas", 
      level: 95, 
      category: "Vision & Deep Learning", 
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg", 
      glow: "blue" as const, 
      experience: "Tensor Manipulation & Feature Eng.",
      iconComponent: SiNumpy
    },

    // Workflows, MLOps & Tooling
    { 
      name: "Python 3.11", 
      level: 98, 
      category: "Workflows & MLOps", 
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", 
      glow: "cyan" as const, 
      experience: "Core AI Language & Async CLI",
      iconComponent: SiPython
    },
    { 
      name: "ComfyUI Custom Nodes", 
      level: 92, 
      category: "Workflows & MLOps", 
      icon: "", 
      glow: "purple" as const, 
      experience: "Character Consistency Nodes",
      iconComponent: Layers
    },
    { 
      name: "n8n AI Workflows", 
      level: 90, 
      category: "Workflows & MLOps", 
      icon: "", 
      glow: "emerald" as const, 
      experience: "Automated Orchestration",
      iconComponent: Workflow
    },
    { 
      name: "Claude Code & CLI Linux", 
      level: 94, 
      category: "Workflows & MLOps", 
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg", 
      glow: "blue" as const, 
      experience: "Sub-Agents & Autonomous Shell",
      iconComponent: Terminal
    },
  ];

  const categories = ["All", "Agents & RAG", "LLM & VLM", "Vision & Deep Learning", "Workflows & MLOps"];

  const filteredSkills =
    activeCategory === "All"
      ? skills
      : skills.filter((skill) => skill.category === activeCategory);

  const skillHighlights = [
    {
      title: "Autonomous AI Agents & RAG",
      desc: "Architecting self-extending AI agents, tool forging, multi-session memory, and zero-hallucination RAG pipelines.",
      icon: Bot,
      color: "from-blue-500/20 to-indigo-500/20 border-blue-500/30 text-blue-400",
    },
    {
      title: "Generative AI & Model Fine-Tuning",
      desc: "Expertise in LLMs, VLMs, Hugging Face Transformers, LoRA adapters, Stable Diffusion, and custom ComfyUI pipelines.",
      icon: Brain,
      color: "from-purple-500/20 to-pink-500/20 border-purple-500/30 text-purple-400",
    },
    {
      title: "Computer Vision & Cloud MLOps",
      desc: "Building Graph Neural Networks (GNNs), real-time OpenCV processing, automated dataset ingestion, and MLOps deployment.",
      icon: Cpu,
      color: "from-cyan-500/20 to-emerald-500/20 border-cyan-500/30 text-cyan-400",
    },
  ];

  return (
    <section ref={skillsRef} className="relative py-28 px-4 sm:px-6" id="skills">
      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden -z-10">
        <div className="absolute top-1/2 left-1/3 w-[36rem] h-[36rem] bg-indigo-600/10 rounded-full blur-[140px]" />
      </div>

      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={isSkillsInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill border-primary/30 text-xs font-medium text-primary">
            <Sparkles className="w-3.5 h-3.5 text-primary" />
            <span>AI & Machine Learning Matrix</span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-extrabold font-[family-name:var(--font-display)] tracking-tight">
            AI / ML Technical <span className="text-gradient-primary">Skills & Tooling</span>
          </h2>

          <p className="text-muted-foreground text-base sm:text-lg">
            Specialized toolkits, neural network architectures, vector databases, and autonomous agent frameworks powering intelligent systems.
          </p>
        </motion.div>

        {/* 3 Core Highlight Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {skillHighlights.map((hl, index) => {
            const Icon = hl.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isSkillsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className={`p-6 rounded-2xl glass-card border bg-gradient-to-br ${hl.color} hover:scale-[1.02] transition-transform duration-300 h-full flex flex-col justify-between`}>
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-md flex items-center justify-center mb-4 border border-white/15">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2">{hl.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{hl.desc}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Infinite Tech Marquee Ticker */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isSkillsInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="rounded-2xl overflow-hidden shadow-2xl"
        >
          <TechMarquee />
        </motion.div>

        {/* Category Switcher Tabs */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`relative px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${
                  isActive
                    ? "text-white font-semibold shadow-[0_0_20px_rgba(59,130,246,0.4)]"
                    : "glass-pill text-muted-foreground hover:text-white hover:border-white/20"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="active-skill-cat"
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-purple-600 -z-10"
                    transition={{ type: "spring", stiffness: 350, damping: 28 }}
                  />
                )}
                {cat}
              </button>
            );
          })}
        </div>

        {/* Floating Skill Matrix Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
        >
          {filteredSkills.map((skill, index) => {
            const Icon = skill.iconComponent;
            return (
              <motion.div
                layout
                key={skill.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isSkillsInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: index * 0.04 }}
              >
                <TiltCard glowColor={skill.glow} className="p-5 flex flex-col justify-between h-full">
                  <div>
                    {/* Top row: Icon, Name & Category */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-white/[0.06] border border-white/10 p-2 flex items-center justify-center backdrop-blur-md">
                          <Icon className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-sm text-foreground">{skill.name}</h4>
                          <span className="text-[11px] text-muted-foreground">{skill.experience}</span>
                        </div>
                      </div>

                      <Badge variant="outline" className="text-[10px] px-2 py-0.5 border-white/10 bg-white/5 text-muted-foreground">
                        {skill.category.split(" ")[0]}
                      </Badge>
                    </div>

                    {/* Level meter bar */}
                    <div className="space-y-1.5">
                      <div className="flex justify-between text-xs font-mono">
                        <span className="text-muted-foreground">Proficiency</span>
                        <span className="text-primary font-bold">{skill.level}%</span>
                      </div>
                      
                      <div className="w-full bg-white/[0.08] rounded-full h-2 overflow-hidden p-[1px]">
                        <motion.div
                          className="h-full rounded-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 shadow-[0_0_10px_rgba(99,102,241,0.5)]"
                          initial={{ width: 0 }}
                          animate={isSkillsInView ? { width: `${skill.level}%` } : {}}
                          transition={{ duration: 1, delay: index * 0.05 + 0.2 }}
                        />
                      </div>
                    </div>
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