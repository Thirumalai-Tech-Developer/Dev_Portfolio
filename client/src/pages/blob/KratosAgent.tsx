import { motion } from "framer-motion";
import {
  Terminal,
  Brain,
  Cpu,
  ShieldCheck,
  Zap,
  ArrowLeft,
  CheckCircle2,
  ExternalLink,
  Github,
  Sparkles,
  Layers,
  FileCode2,
  Workflow,
  Key,
  RotateCw,
  Lock
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import ParticleBackground from "@/components/ui/particle-background";
import TiltCard from "@/components/ui/tilt-card";

export default function KratosAgent() {
  const stats = [
    { title: "Indexed Prompts & Sub-Agents", value: "695+" },
    { title: "Modular Agent Skills", value: "148+" },
    { title: "Automated Passing Tests", value: "48+" },
    { title: "Autonomous Tool Forging", value: "100%" },
  ];

  const coreFeatures = [
    {
      title: "Universal LLM Brain",
      icon: Brain,
      color: "from-blue-500/20 to-indigo-500/20 text-blue-400 border-blue-500/30",
      description:
        "Engineered a proxy-free gateway layer featuring Server-Sent Events (SSE) streaming and a robust multi-format tool-call parser supporting Harmony/OpenAI-OSS, Hermes/Qwen/Claude XML, and raw JSON for seamless compatibility across any LLM backend.",
    },
    {
      title: "Autonomous Tool Forging",
      icon: Zap,
      color: "from-purple-500/20 to-pink-500/20 text-purple-400 border-purple-500/30",
      description:
        "A self-extending tool generation engine where the agent autonomously writes new Python tools on the fly, registers their OpenAPI/JSON schemas, and dynamically hot-reloads them into the active session without restarting.",
    },
    {
      title: "Dynamic Planner & Memory",
      icon: Workflow,
      color: "from-cyan-500/20 to-blue-500/20 text-cyan-400 border-cyan-500/30",
      description:
        "Dynamic step planner with live dependency graphs, task tracking, and isolated multi-session memory architecture supporting zero-latency session switching and persistent cross-session history.",
    },
    {
      title: "Tiered Execution Safety",
      icon: ShieldCheck,
      color: "from-emerald-500/20 to-teal-500/20 text-emerald-400 border-emerald-500/30",
      description:
        "Granular autonomy controls with tiered approval modes ('suggest', 'auto-edit', 'full-auto') guarding file operations, shell command executions, and terminal modifications with automatic rollback safety.",
    },
  ];

  const cliCommands = [
    { cmd: "kratos plan 'Build RAG search engine'", desc: "Synthesizes multi-step architectural execution blueprint" },
    { cmd: "kratos forge --tool 'vector_cluster.py'", desc: "Autonomously writes, validates, and hot-reloads custom Python tool" },
    { cmd: "kratos audit --security --strict", desc: "Runs senior-level code audit & vulnerability scans" },
    { cmd: "kratos session switch --id 'core-agent'", desc: "Instantly switches multi-session memory workspace" },
  ];

  return (
    <div className="relative min-h-screen bg-[#050811] text-foreground selection:bg-primary/30 selection:text-white overflow-x-hidden w-full max-w-full">
      {/* Particle constellation starfield */}
      <ParticleBackground quantity={30} staticity={50} ease={40} className="z-0" />

      {/* Top Ambient Glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden -z-10">
        <div className="absolute top-10 left-1/4 w-72 sm:w-[40rem] h-72 sm:h-[40rem] bg-blue-600/15 rounded-full blur-[100px] sm:blur-[160px]" />
        <div className="absolute top-1/2 right-1/4 w-64 sm:w-[35rem] h-64 sm:h-[35rem] bg-purple-600/10 rounded-full blur-[90px] sm:blur-[150px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-3 xs:px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16 space-y-10 sm:space-y-12 md:space-y-16">
        
        {/* Navigation & Header */}
        <div>
          <Link href="/#blob">
            <Button
              variant="outline"
              size="sm"
              className="rounded-full glass-pill hover:border-primary/50 text-[11px] sm:text-xs font-medium gap-2 mb-6 sm:mb-8 h-8"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              Back to Portfolio
            </Button>
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4 sm:space-y-6"
          >
            <div className="flex flex-wrap items-center gap-2 sm:gap-3">
              <span className="px-3 py-1 rounded-full text-[10px] sm:text-xs font-mono font-medium bg-primary/10 border border-primary/20 text-primary">
                🌟 Signature Architecture
              </span>
              <span className="px-3 py-1 rounded-full text-[10px] sm:text-xs font-mono bg-purple-500/10 border border-purple-500/20 text-purple-300">
                Python 3.11 CLI • Autonomous Agent
              </span>
            </div>

            <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight font-[family-name:var(--font-display)] leading-[1.15] break-words">
              Kratos Agent: <span className="text-gradient-primary">Autonomous Terminal AI Coding Agent</span>
            </h1>

            <p className="text-xs xs:text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed max-w-3xl font-light">
              A fully autonomous terminal-based AI coding agent built in Python that plans, writes, edits, tests, and verifies software end-to-end with minimal human intervention.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-1 sm:pt-2">
              <a
                href="https://github.com/Thirumalai-Tech-Developer"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="h-10 sm:h-11 px-5 sm:px-6 rounded-full bg-gradient-to-r from-primary via-indigo-600 to-purple-600 hover:from-primary/90 text-white text-xs sm:text-sm font-medium shadow-[0_0_20px_rgba(59,130,246,0.35)]">
                  <Github className="w-4 h-4 mr-2" />
                  View GitHub Repository
                  <ExternalLink className="w-3.5 h-3.5 ml-2" />
                </Button>
              </a>
            </div>
          </motion.div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="p-4 sm:p-6 rounded-2xl glass-card border border-white/10 text-center space-y-1 group hover:border-primary/40 transition-colors"
            >
              <div className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gradient-primary font-[family-name:var(--font-display)]">
                {stat.value}
              </div>
              <div className="text-[11px] sm:text-xs text-muted-foreground font-medium">
                {stat.title}
              </div>
            </div>
          ))}
        </div>

        {/* Architectural Overview */}
        <div className="space-y-4 sm:space-y-6">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground flex items-center gap-2.5">
            <Terminal className="w-6 h-6 sm:w-7 sm:h-7 text-primary" />
            Core System Architecture
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {coreFeatures.map((feat, index) => {
              const Icon = feat.icon;
              return (
                <TiltCard key={index} glowColor="blue" className="p-5 sm:p-7 flex flex-col justify-between h-full">
                  <div className="space-y-3 sm:space-y-4">
                    <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-white/[0.06] border flex items-center justify-center ${feat.color}`}>
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-foreground">{feat.title}</h3>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      {feat.description}
                    </p>
                  </div>
                </TiltCard>
              );
            })}
          </div>
        </div>

        {/* Live Terminal Simulation Card */}
        <div className="space-y-4 sm:space-y-6">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground flex items-center gap-2.5">
            <Cpu className="w-6 h-6 sm:w-7 sm:h-7 text-purple-400" />
            CLI Workflow & Tool Execution
          </h2>

          <div className="rounded-2xl sm:rounded-3xl glass-panel border border-white/15 p-4 sm:p-6 md:p-8 shadow-2xl space-y-4 sm:space-y-6 font-mono w-full max-w-full overflow-hidden">
            <div className="flex items-center justify-between pb-3 sm:pb-4 border-b border-white/10 text-[11px] sm:text-xs text-muted-foreground">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80 inline-block" />
                <span className="w-2.5 h-2.5 rounded-full bg-green-500/80 inline-block" />
                <span className="ml-1 sm:ml-2 font-semibold text-white">kratos-cli</span>
              </div>
              <span className="text-emerald-400 flex items-center gap-1 text-[10px] sm:text-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                ACTIVE ENGINE
              </span>
            </div>

            <div className="space-y-3 text-xs sm:text-sm">
              {cliCommands.map((item, idx) => (
                <div key={idx} className="p-3 sm:p-4 rounded-xl bg-black/40 border border-white/[0.08] space-y-1">
                  <div className="text-cyan-300 font-semibold flex items-center gap-2 break-all">
                    <span className="text-primary">$</span> {item.cmd}
                  </div>
                  <div className="text-[11px] sm:text-xs text-muted-foreground pl-3 sm:pl-4">
                    ➔ {item.desc}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Technical Highlights Checklist */}
        <div className="p-5 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl glass-card border border-white/10 space-y-4 sm:space-y-6">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground flex items-center gap-2.5">
            <Sparkles className="w-6 h-6 sm:w-7 sm:h-7 text-primary" />
            Key Engineering Milestones
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 text-xs sm:text-sm text-muted-foreground">
            {[
              "Universal parser translating Harmony, Hermes, Claude XML, and JSON tool schemas",
              "Hot-reloading tool forge: generates Python code, lints, and injects runtime capabilities",
              "695+ Claude Code sub-agent prompts indexing complex engineering reasoning",
              "Tiered approval modes protecting terminal commands with sandbox verification",
              "Isolated multi-session workspaces with instantaneous branch-style context switching",
              "48+ passing automated tests verifying tool execution and parser robustness",
            ].map((text, i) => (
              <div key={i} className="flex items-start gap-2.5 sm:gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                <span>{text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Call to Action */}
        <div className="text-center pt-4 sm:pt-8 pb-8 sm:pb-12">
          <Link href="/#contact">
            <Button size="lg" className="h-11 sm:h-12 rounded-full bg-gradient-to-r from-primary to-purple-600 text-white font-medium px-6 sm:px-8 text-xs sm:text-sm shadow-xl">
              Discuss Kratos Architecture with Thirumalai
            </Button>
          </Link>
        </div>

      </div>
    </div>
  );
}
