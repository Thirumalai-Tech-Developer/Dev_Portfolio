import { motion } from "framer-motion";
import {
  Brain,
  Code2,
  Cpu,
  Database,
  Rocket,
  ArrowLeft,
  CheckCircle2,
  ExternalLink,
  Github,
  Sparkles,
  Layers,
  FileCode2,
  Workflow
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import ParticleBackground from "@/components/ui/particle-background";
import TiltCard from "@/components/ui/tilt-card";

export default function Aiwebsite() {
  const stats = [
    { title: "Development Time Saved", value: "70%" },
    { title: "Lines of Python & TS", value: "2,130+" },
    { title: "Pipeline Automation Stages", value: "4 Stages" },
    { title: "Manual Interventions Required", value: "< 2" },
  ];

  const stages = [
    {
      title: "1. Intent & Planning Stage",
      description: "Transforms natural language prompts into a structured architecture plan with component tree definitions, design tokens, and routing schemas.",
      badge: "LLM Planning Engine",
      color: "from-blue-500/20 to-indigo-500/20 text-blue-400 border-blue-500/30",
      icon: Brain,
    },
    {
      title: "2. Component Synthesis & Rule Engine",
      description: "Generates fully functional, type-safe React/Tailwind components and API endpoints using deterministic templates combined with LLM code synthesis.",
      badge: "Semi-Agentic Engine",
      color: "from-purple-500/20 to-pink-500/20 text-purple-400 border-purple-500/30",
      icon: Code2,
    },
    {
      title: "3. Safe File Tree Assignment",
      description: "Safely writes, links imports, formats dependencies, and integrates state management into the target workspace without race conditions.",
      badge: "Workspace Manager",
      color: "from-cyan-500/20 to-blue-500/20 text-cyan-400 border-cyan-500/30",
      icon: Layers,
    },
    {
      title: "4. Build Validation & Self-Healing",
      description: "Runs instant TypeScript and AST lint checks, captures compilation issues, and applies automated self-correcting patches before final export.",
      badge: "Auto-Healing",
      color: "from-emerald-500/20 to-teal-500/20 text-emerald-400 border-emerald-500/30",
      icon: CheckCircle2,
    },
  ];

  const codeStats = [
    { lang: "Python (Agent Core)", lines: "1,594", pct: "75%" },
    { lang: "Tailwind CSS & Styling", lines: "295", pct: "14%" },
    { lang: "Schema & JSON AST", lines: "137", pct: "6%" },
    { lang: "TypeScript / TSX", lines: "66", pct: "3%" },
    { lang: "SVG & Asset Injection", lines: "40", pct: "2%" },
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
                🤖 Semi-Agentic System
              </span>
              <span className="px-3.5 py-1 rounded-full text-xs font-mono bg-purple-500/10 border border-purple-500/20 text-purple-300">
                Rule-Based Automation + LLM Synthesis
              </span>
            </div>

            <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight font-[family-name:var(--font-display)] leading-[1.1]">
              Autonomous <span className="text-gradient-primary">AI Frontend Builder</span>
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-3xl font-light">
              A semi-agentic code generation engine that automates frontend scaffolding, design token injection, layout generation, and self-healing error detection directly from natural language prompts.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="https://github.com/Thirumalai-Tech-Developer/AI-Agent"
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

        {/* Video Showcase Player */}
        <div className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-foreground flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-primary" />
            Live Demo & Execution Recording
          </h2>
          <div className="w-full aspect-video rounded-3xl overflow-hidden border border-white/15 bg-black/60 shadow-2xl">
            <iframe
              className="h-full w-full"
              src="https://www.youtube.com/embed/WYMLbc10btU?si=HIKowquwihc_oKVe"
              title="Autonomous AI Website Builder Demo"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
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

        {/* Multi-Agent Pipeline Stages */}
        <div className="space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground flex items-center gap-2.5">
            <Workflow className="w-7 h-7 text-primary" />
            4-Stage Semi-Agentic Generation Pipeline
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {stages.map((stage, index) => {
              const Icon = stage.icon;
              return (
                <TiltCard key={index} glowColor="purple" className="p-7 flex flex-col justify-between h-full">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className={`w-12 h-12 rounded-xl bg-white/[0.06] border flex items-center justify-center ${stage.color}`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-medium bg-white/[0.05] border border-white/10 text-muted-foreground">
                        {stage.badge}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-foreground">{stage.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {stage.description}
                    </p>
                  </div>
                </TiltCard>
              );
            })}
          </div>
        </div>

        {/* Code Composition Breakdown */}
        <div className="p-8 sm:p-10 rounded-3xl glass-card border border-white/10 space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground flex items-center gap-2.5">
            <FileCode2 className="w-7 h-7 text-primary" />
            Codebase Composition & Implementation
          </h2>

          <div className="space-y-4">
            {codeStats.map((item, i) => (
              <div key={i} className="space-y-1.5">
                <div className="flex justify-between text-xs font-mono">
                  <span className="text-foreground font-semibold">{item.lang}</span>
                  <span className="text-primary font-bold">{item.lines} lines ({item.pct})</span>
                </div>
                <div className="w-full bg-white/[0.08] rounded-full h-2 overflow-hidden">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-blue-500 to-purple-500"
                    style={{ width: item.pct }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Problem vs Solution Comparison */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Problem */}
          <div className="p-8 rounded-3xl glass-card border border-red-500/20 bg-red-950/10 space-y-4">
            <h3 className="text-xl font-bold text-red-400">The Problem: Manual Frontend Overhead</h3>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-red-400 font-bold">✕</span>
                <span>Configuring boilerplates, routing, and styling takes hours.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-400 font-bold">✕</span>
                <span>LLMs frequently hallucinate broken imports and invalid CSS tokens.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-400 font-bold">✕</span>
                <span>Repetitive setup slows down rapid client prototyping.</span>
              </li>
            </ul>
          </div>

          {/* Solution */}
          <div className="p-8 rounded-3xl glass-card border border-emerald-500/20 bg-emerald-950/10 space-y-4">
            <h3 className="text-xl font-bold text-emerald-400">The Solution: Semi-Agentic Orchestration</h3>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-emerald-400 font-bold">✓</span>
                <span>Deterministic rules guarantee valid AST structure and type safety.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-400 font-bold">✓</span>
                <span>Self-healing loop catches syntax errors and auto-patches before export.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-400 font-bold">✓</span>
                <span>Cuts boilerplate generation time by over 70%.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center pt-8 pb-12">
          <Link href="/#contact">
            <Button size="lg" className="rounded-full bg-gradient-to-r from-primary to-purple-600 text-white font-medium px-8 shadow-xl">
              Collaborate on AI Automation with Thirumalai
            </Button>
          </Link>
        </div>

      </div>
    </div>
  );
}