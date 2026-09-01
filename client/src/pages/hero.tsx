import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { 
  Brain, 
  Cpu, 
  Sparkles, 
  Terminal, 
  ArrowRight,
  Zap, 
  Database, 
  CheckCircle2, 
  Network,
  Bot,
  Layers,
  FileCode
} from "lucide-react";
import { SiPython, SiPytorch, SiLangchain, SiHuggingface, SiOpencv, SiLinux } from "react-icons/si";

export default function Hero() {
  const [typedText, setTypedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const text = "Thirumalai G";

  // Simulated Kratos Agent execution steps
  const [agentStep, setAgentStep] = useState(0);

  const kratosSteps = [
    { title: "Universal LLM Gateway", desc: "SSE streaming & multi-format tool-call parser (Claude XML / JSON)", status: "complete", tag: "LLM Brain" },
    { title: "RAG Vector Context", desc: "ChromaDB similarity search: 16 indexed context chunks retrieved", status: "complete", tag: "Vector RAG" },
    { title: "Autonomous Tool Forging", desc: "Agent generates new Python tools on-demand & hot-reloads session", status: "complete", tag: "Tool Forge" },
    { title: "Dynamic Step Planner", desc: "Multi-session memory active: 695+ indexed Claude Code prompts", status: "complete", tag: "Planner" },
    { title: "Tiered Execution Safety", desc: "Security audit passed (48+ unit tests passing) • Code Verified", status: "active", tag: "Verified ⚡" },
  ];

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    if (!isDeleting && typedText.length < text.length) {
      timeout = setTimeout(() => {
        setTypedText(text.slice(0, typedText.length + 1));
      }, 120);
    } else if (!isDeleting && typedText.length === text.length) {
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, 6000);
    } else if (isDeleting && typedText.length > 0) {
      timeout = setTimeout(() => {
        setTypedText(text.slice(0, typedText.length - 1));
      }, 80);
    } else if (isDeleting && typedText.length === 0) {
      setIsDeleting(false);
    }
    return () => clearTimeout(timeout);
  }, [typedText, isDeleting]);

  // Agent execution loop
  useEffect(() => {
    const interval = setInterval(() => {
      setAgentStep((prev) => (prev + 1) % kratosSteps.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  const stats = [
    { label: "Hands-on Experience", value: 1.5, suffix: "+ Yrs", icon: Zap, color: "text-blue-400" },
    { label: "AI Models & Agents", value: 10, suffix: "+", icon: Brain, color: "text-purple-400" },
    { label: "Claude Code Prompts", value: 695, suffix: "+", icon: Bot, color: "text-cyan-400" },
  ];

  const [counters, setCounters] = useState(stats.map((s) => (s.value < 10 ? 0 : 0)));

  useEffect(() => {
    const intervals = stats.map((stat, index) => {
      const target = stat.value;
      const step = target > 50 ? 15 : 1;
      const interval = setInterval(() => {
        setCounters((prev) => {
          const newCounters = [...prev];
          if (newCounters[index] < target) {
            newCounters[index] = Math.min(newCounters[index] + step, target);
          }
          return newCounters;
        });
      }, 40);
      return interval;
    });
    return () => intervals.forEach(clearInterval);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const navbarHeight = 90;
    window.scrollTo({
      top: el.offsetTop - navbarHeight,
      behavior: "smooth",
    });
  };

  return (
    <section 
      id="home"
      className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 overflow-hidden"
    >
      {/* Floating Ambient Glowing Blobs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden -z-10">
        <div className="absolute top-1/4 left-1/12 w-96 h-96 bg-blue-600/15 rounded-full blur-[120px] animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/12 w-[30rem] h-[30rem] bg-purple-600/15 rounded-full blur-[130px] animate-pulse-glow" style={{ animationDelay: "1.5s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-cyan-500/10 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Intro & Call to Action (7 cols) */}
          <div className="lg:col-span-7 space-y-7 text-left">
            
            {/* Top Status & Role Pill */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-wrap items-center gap-2.5"
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill border-primary/30 text-xs font-medium text-primary">
                <span className="w-2 h-2 rounded-full bg-primary animate-ping" />
                <span>AI / ML ENGINEER</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-xs font-medium text-purple-300">
                <Sparkles className="w-3.5 h-3.5 text-purple-400" />
                <span>LLMs • AI Agents • RAG Architecture</span>
              </div>
            </motion.div>

            {/* Main Headline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-2"
            >
              <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight font-[family-name:var(--font-display)] leading-[1.1]">
                <span className="text-foreground">Hello, I'm </span>
                <br className="hidden sm:inline" />
                <span className="text-gradient-primary">
                  {typedText}
                </span>
                <span className="text-primary animate-pulse font-mono">|</span>
              </h1>
            </motion.div>

            {/* Subtitle & Value Proposition */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl font-light"
            >
              AI/ML engineer with 1.5+ years of hands-on experience engineering 
              <span className="text-white font-medium"> Autonomous AI Agents, RAG Systems, and LLM Applications</span>. 
              Skilled in developing and fine-tuning models (LoRA, Stable Diffusion, GNNs), designing 
              <span className="text-primary font-medium"> automated multi-agent workflows, ComfyUI pipelines, and cloud MLOps</span>.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-4 pt-2"
            >
              <Button
                onClick={() => scrollToSection("projects")}
                size="lg"
                className="h-12 px-7 rounded-full bg-gradient-to-r from-primary via-indigo-600 to-purple-600 hover:opacity-95 text-white font-medium shadow-[0_0_25px_rgba(59,130,246,0.35)] group transition-all duration-300"
              >
                <span>Explore AI Projects</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1.5 transition-transform" />
              </Button>

              <Button
                onClick={() => scrollToSection("contact")}
                variant="outline"
                size="lg"
                className="h-12 px-7 rounded-full glass-card hover:border-primary/50 text-foreground font-medium transition-all duration-300"
              >
                Contact Me
              </Button>
            </motion.div>

            {/* Floating Metric Stats Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-3 gap-3 sm:gap-4 pt-6 border-t border-white/[0.08]"
            >
              {stats.map((stat, idx) => {
                const Icon = stat.icon;
                return (
                  <div 
                    key={idx} 
                    className="p-3 sm:p-4 rounded-2xl glass-card border border-white/[0.06] hover:border-primary/30 transition-all duration-300 group"
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <Icon className={`w-4 h-4 ${stat.color} group-hover:scale-110 transition-transform`} />
                      <div className="text-2xl sm:text-3xl font-bold font-[family-name:var(--font-display)] text-foreground">
                        {counters[idx]}{stat.suffix}
                      </div>
                    </div>
                    <div className="text-xs text-muted-foreground leading-tight">
                      {stat.label}
                    </div>
                  </div>
                );
              })}
            </motion.div>

          </div>

          {/* Right Column: Interactive Kratos AI Agent Simulator & Floating Badges (5 cols) */}
          <div className="lg:col-span-5 relative flex items-center justify-center pt-8 lg:pt-0">
            
            {/* Ambient Floating Tech Badges */}
            <div className="absolute -top-4 -left-6 z-20 animate-float-slow hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-2xl glass-panel border border-cyan-500/30 text-cyan-300 text-xs font-mono shadow-[0_8px_20px_rgba(6,182,212,0.2)]">
              <SiPython className="w-4 h-4 text-cyan-400" />
              <span>Python 3.11</span>
            </div>

            <div className="absolute top-1/4 -right-6 z-20 animate-float-medium hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-2xl glass-panel border border-purple-500/30 text-purple-300 text-xs font-mono shadow-[0_8px_20px_rgba(168,85,247,0.2)]">
              <SiLangchain className="w-4 h-4 text-purple-400" />
              <span>LangChain & RAG</span>
            </div>

            <div className="absolute -bottom-4 -left-4 z-20 animate-float-fast hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-2xl glass-panel border border-blue-500/30 text-blue-300 text-xs font-mono shadow-[0_8px_20px_rgba(59,130,246,0.2)]">
              <SiPytorch className="w-4 h-4 text-[#ee4c2c]" />
              <span>PyTorch & Deep Learning</span>
            </div>

            <div className="absolute -bottom-6 right-8 z-20 animate-float-reverse hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-2xl glass-panel border border-emerald-500/30 text-emerald-300 text-xs font-mono shadow-[0_8px_20px_rgba(16,185,129,0.2)]">
              <SiHuggingface className="w-4 h-4 text-[#ffd21e]" />
              <span>Hugging Face Transformers</span>
            </div>

            {/* Interactive Kratos Agent Terminal Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="w-full rounded-3xl glass-panel border border-white/15 p-5 shadow-[0_20px_50px_rgba(0,0,0,0.7)] backdrop-blur-2xl relative overflow-hidden"
            >
              {/* Top Terminal Header */}
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block" />
                  </div>
                  <div className="flex items-center gap-1.5 ml-2 text-xs font-mono text-muted-foreground">
                    <Terminal className="w-3.5 h-3.5 text-primary" />
                    <span>kratos-agent.py</span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-[10px] font-mono text-emerald-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                    AUTONOMOUS
                  </span>
                </div>
              </div>

              {/* Terminal Pipeline Steps */}
              <div className="space-y-3 font-mono text-xs">
                {kratosSteps.map((step, idx) => {
                  const isCurrent = agentStep === idx;
                  const isPast = agentStep > idx;

                  return (
                    <motion.div
                      key={idx}
                      animate={{
                        backgroundColor: isCurrent ? "rgba(59, 130, 246, 0.12)" : "rgba(255, 255, 255, 0.02)",
                        borderColor: isCurrent ? "rgba(99, 102, 241, 0.4)" : "rgba(255, 255, 255, 0.06)",
                      }}
                      className={`p-3 rounded-xl border transition-all duration-300 flex items-start gap-3`}
                    >
                      <div className="mt-0.5">
                        {isPast ? (
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                        ) : isCurrent ? (
                          <div className="w-4 h-4 rounded-full border-2 border-primary border-t-transparent animate-spin flex-shrink-0" />
                        ) : (
                          <div className="w-4 h-4 rounded-full border border-white/20 flex-shrink-0" />
                        )}
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-2 mb-0.5">
                          <span className={`font-semibold ${isCurrent ? "text-primary" : "text-foreground"}`}>
                            {step.title}
                          </span>
                          <span className="text-[10px] px-2 py-0.5 rounded-md bg-white/5 border border-white/10 text-muted-foreground">
                            {step.tag}
                          </span>
                        </div>
                        <p className="text-[11px] text-muted-foreground truncate">
                          {step.desc}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Terminal Bottom Controls */}
              <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-muted-foreground font-mono">
                <div className="flex items-center gap-2">
                  <Cpu className="w-3.5 h-3.5 text-primary" />
                  <span>Kratos SSE Stream: Active</span>
                </div>
                <div className="flex items-center gap-1.5 text-primary">
                  <span>Step {agentStep + 1} / 5</span>
                </div>
              </div>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
}
