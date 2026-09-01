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
    { cmd: "kratos audit --security --strict", desc: "Runs senior-level code audit & vulnerability vulnerability scans" },
    { cmd: "kratos session switch --id 'core-agent'", desc: "Instantly switches multi-session memory workspace" },
  ];

  return (
    <div className="relative min-h-screen bg-[#050811] text-foreground selection:bg-primary/30 selection:text-white overflow-x-hidden">
      {/* Particle constellation starfield */}
      <ParticleBackground quantity={40} staticity={50} ease={40} className="z-0" />

      {/* Top Ambient Glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden -z-10">
        <div className="absolute top-10 left-1/4 w-[40rem] h-[40rem] bg-blue-600/15 rounded-full blur-[160px]" />
        <div className="absolute top-1/2 right-1/4 w-[35rem] h-[35rem] bg-purple-600/10 rounded-full blur-[150px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-16 space-y-16">
        
        {/* Navigation & Header */}
        <div>
          <Link href="/#blob">
            <Button
              variant="outline"
              size="sm"
              className="rounded-full glass-pill hover:border-primary/50 text-xs font-medium gap-2 mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Portfolio
            </Button>
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="flex flex-wrap items-center gap-3">
              <span className="px-3.5 py-1 rounded-full text-xs font-mono font-medium bg-primary/10 border border-primary/20 text-primary">
                🌟 Signature Architecture
              </span>
              <span className="px-3.5 py-1 rounded-full text-xs font-mono bg-purple-500/10 border border-purple-500/20 text-purple-300">
                Python 3.11 CLI • Autonomous Agent
              </span>
            </div>

            <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight font-[family-name:var(--font-display)] leading-[1.1]">
              Kratos Agent: <span className="text-gradient-primary">Autonomous Terminal AI Coding Agent</span>
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-3xl font-light">
              A fully autonomous terminal-based AI coding agent built in Python that plans, writes, edits, tests, and verifies software end-to-end with minimal human intervention.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="https://github.com/Thirumalai-Tech-Developer"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="h-11 px-6 rounded-full bg-gradient-to-r from-primary via-indigo-600 to-purple-600 hover:from-primary/90 text-white text-xs font-medium shadow-[0_0_20px_rgba(59,130,246,0.35)]">
                  <Github className="w-4 h-4 mr-2" />
                  View GitHub Repository
                  <ExternalLink className="w-3.5 h-3.5 ml-2" />
                </Button>
              </a>
            </div>
          </motion.div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl glass-card border border-white/10 text-center space-y-1 group hover:border-primary/40 transition-colors"
            >
              <div className="text-3xl sm:text-4xl font-extrabold text-gradient-primary font-[family-name:var(--font-display)]">
                {stat.value}
              </div>
              <div className="text-xs text-muted-foreground font-medium">
                {stat.title}
              </div>
            </div>
          ))}
        </div>

        {/* Architectural Overview */}
        <div className="space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground flex items-center gap-2.5">
            <Terminal className="w-7 h-7 text-primary" />
            Core System Architecture
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {coreFeatures.map((feat, index) => {
              const Icon = feat.icon;
              return (
                <TiltCard key={index} glowColor="blue" className="p-7 flex flex-col justify-between h-full">
                  <div className="space-y-4">
                    <div className={`w-12 h-12 rounded-xl bg-white/[0.06] border flex items-center justify-center ${feat.color}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground">{feat.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {feat.description}
                    </p>
                  </div>
                </TiltCard>
              );
            })}
          </div>
        </div>

        {/* Live Terminal Simulation Card */}
        <div className="space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground flex items-center gap-2.5">
            <Cpu className="w-7 h-7 text-purple-400" />
            CLI Workflow & Tool Execution
          </h2>

          <div className="rounded-3xl glass-panel border border-white/15 p-6 sm:p-8 shadow-2xl space-y-6 font-mono">
            <div className="flex items-center justify-between pb-4 border-b border-white/10 text-xs text-muted-foreground">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block" />
                <span className="ml-2 font-semibold text-white">kratos-cli (v2.4.0-prod)</span>
              </div>
              <span className="text-emerald-400 flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                ACTIVE ENGINE
              </span>
            </div>

            <div className="space-y-4 text-xs sm:text-sm">
              {cliCommands.map((item, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-black/40 border border-white/[0.08] space-y-1">
                  <div className="text-cyan-300 font-semibold flex items-center gap-2">
                    <span className="text-primary">$</span> {item.cmd}
                  </div>
                  <div className="text-xs text-muted-foreground pl-4">
                    ➔ {item.desc}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Technical Highlights Checklist */}
        <div className="p-8 sm:p-10 rounded-3xl glass-card border border-white/10 space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground flex items-center gap-2.5">
            <Sparkles className="w-7 h-7 text-primary" />
            Key Engineering Milestones
          </h2>

          <div className="grid sm:grid-cols-2 gap-4 text-sm text-muted-foreground">
            {[
              "Universal parser translating Harmony, Hermes, Claude XML, and JSON tool schemas",
              "Hot-reloading tool forge: generates Python code, lints, and injects runtime capabilities",
              "695+ Claude Code sub-agent prompts indexing complex engineering reasoning",
              "Tiered approval modes protecting terminal commands with sandbox verification",
              "Isolated multi-session workspaces with instantaneous branch-style context switching",
              "48+ passing automated tests verifying tool execution and parser robustness",
            ].map((text, i) => (
              <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                <span>{text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Call to Action */}
        <div className="text-center pt-8 pb-12">
          <Link href="/#contact">
            <Button size="lg" className="rounded-full bg-gradient-to-r from-primary to-purple-600 text-white font-medium px-8 shadow-xl">
              Discuss Kratos Architecture with Thirumalai
            </Button>
          </Link>
        </div>

      </div>
    </div>
  );
}
