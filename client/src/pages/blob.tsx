import { motion } from "framer-motion";
import { ExternalLink, Sparkles, ArrowRight, BookOpen, Code2, CheckCircle2, Terminal, Bot, Network } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import TiltCard from "@/components/ui/tilt-card";

const featuredArticles = [
  {
    title: "Kratos Agent: Autonomous Terminal AI Coding Agent",
    subtitle: "Self-Extending Python Tool Forging & Universal LLM Gateway",
    description:
      "Autonomous terminal AI coding agent in Python that plans, writes, edits, and verifies code end-to-end. Designed a proxy-free gateway layer with SSE streaming, multi-format tool-call parser (Harmony/OpenAI-OSS, Hermes/Qwen/Claude XML, JSON), dynamic step planner with multi-session memory, and 695+ Claude Code sub-agent prompts.",
    tech: [
      "Python 3.11",
      "AI Agents",
      "Tool Forging",
      "SSE Streaming",
      "Dynamic Step Planner",
      "Claude Code CLI",
    ],
    achievements: [
      "Autonomous Tool Forging: Agent writes new Python tools on demand & hot-reloads live",
      "Universal LLM Brain with multi-format streaming tool-call parser",
      "Tiered approval execution safety modes (suggest, auto-edit, full-auto)",
      "695+ indexed Claude Code prompts, 148+ skills, and 48+ passing tests",
    ],
    source: "https://github.com/Thirumalai-Tech-Developer",
    article: "/blob/kratos",
    glowColor: "blue" as const,
    badge: "🌟 Signature AI Project",
    icon: Terminal,
  },
  {
    title: "Semi-Agentic AI Frontend Builder",
    subtitle: "Rule-Based Automation & Deterministic Component Synthesis",
    description:
      "A semi-agentic code generation engine that automates frontend scaffolding, design token injection, layout generation, and self-healing error detection directly from natural language prompts.",
    tech: [
      "Python",
      "AI Agents",
      "Rule Automation",
      "Code Synthesis",
      "AST Validation",
      "TypeScript",
    ],
    achievements: [
      "Reduced frontend development setup time by 70%",
      "Automated self-healing build error correction loop",
      "Deterministic AST validation ensuring zero broken imports",
    ],
    source: "https://github.com/Thirumalai-Tech-Developer/AI-Agent",
    article: "/blob/aiwebsite",
    glowColor: "purple" as const,
    badge: "🤖 Semi-Agentic System",
    icon: Bot,
  },
  {
    title: "Sign Language AI Platform (GNN)",
    subtitle: "Real-Time Landmark Tracking & Bidirectional Gesture Translation",
    description:
      "Deep learning computer vision platform utilizing Graph Neural Networks (GNNs) for video gesture detection, spatial landmark tracking, and real-time bidirectional translation for seamless deaf communication.",
    tech: [
      "Python",
      "Graph Neural Networks",
      "PyTorch",
      "OpenCV",
      "Computer Vision",
      "Deep Learning",
    ],
    achievements: [
      "85%+ gesture classification accuracy across live video streams",
      "Spatial landmark graph construction with sub-second latency",
      "Real-time bidirectional speech/text-to-gesture animation synthesis",
    ],
    source: "https://github.com/Thirumalai-Tech-Developer/Sign_Language_FullStack",
    article: "/blob/signlanguage",
    glowColor: "emerald" as const,
    badge: "🦾 Computer Vision",
    icon: Network,
  },
];

export default function Blob() {
  return (
    <section id="blob" className="relative py-16 sm:py-20 md:py-24 lg:py-28 px-3 xs:px-4 sm:px-6 lg:px-8 w-full max-w-full overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden -z-10">
        <div className="absolute top-1/2 left-1/4 w-72 sm:w-[40rem] h-72 sm:h-[40rem] bg-purple-600/10 rounded-full blur-[100px] sm:blur-[160px]" />
        <div className="absolute bottom-10 right-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-blue-600/10 rounded-full blur-[90px] sm:blur-[140px]" />
      </div>

      <div className="max-w-7xl mx-auto space-y-10 sm:space-y-12 md:space-y-16">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto space-y-3 sm:space-y-4"
        >
          <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full glass-pill border-primary/30 text-[11px] sm:text-xs font-medium text-primary">
            <Sparkles className="w-3.5 h-3.5 text-primary" />
            <span>In-Depth Engineering Research</span>
          </div>

          <h2 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-extrabold font-[family-name:var(--font-display)] tracking-tight">
            Featured <span className="text-gradient-purple">Architecture & Articles</span>
          </h2>

          <p className="text-muted-foreground text-xs xs:text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
            Detailed engineering breakdowns of autonomous AI agents, semi-agentic builders, and deep learning vision platforms.
          </p>
        </motion.div>

        {/* 3 Responsive Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-7">
          {featuredArticles.map((article, index) => {
            const Icon = article.icon;
            return (
              <motion.div
                key={article.title}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="h-full"
              >
                <TiltCard glowColor={article.glowColor} className="p-5 sm:p-7 md:p-8 flex flex-col justify-between h-full group">
                  <div className="space-y-4 sm:space-y-5">
                    {/* Top Badge */}
                    <div className="flex items-center justify-between">
                      <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-white/[0.06] border border-white/10 flex items-center justify-center">
                        <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                      </div>
                      <span className="px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-xs font-mono font-medium bg-primary/10 border border-primary/20 text-primary">
                        {article.badge}
                      </span>
                    </div>

                    {/* Title & Subtitle */}
                    <div>
                      <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {article.title}
                      </h3>
                      <p className="text-[11px] sm:text-xs font-medium text-cyan-300 mt-1 font-mono">
                        {article.subtitle}
                      </p>
                    </div>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed line-clamp-3">
                      {article.description}
                    </p>

                    {/* Achievements List */}
                    <div className="space-y-1.5 p-3 sm:p-3.5 rounded-2xl bg-white/[0.03] border border-white/[0.06]">
                      {article.achievements.slice(0, 2).map((item, i) => (
                        <div key={i} className="flex items-start gap-2 text-[11px] sm:text-xs text-muted-foreground">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0 mt-0.5" />
                          <span className="line-clamp-1">{item}</span>
                        </div>
                      ))}
                    </div>

                    {/* Tech stack */}
                    <div className="flex flex-wrap gap-1 sm:gap-1.5 pt-1">
                      {article.tech.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 sm:px-2.5 py-0.5 rounded-full text-[10px] sm:text-[11px] font-mono bg-white/[0.04] border border-white/[0.08] text-white/80"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Actions */}
                  <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-2.5 pt-4 sm:pt-6 mt-4 sm:mt-6 border-t border-white/[0.08]">
                    <a
                      href={article.source}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto"
                    >
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full h-8 sm:h-9 rounded-xl glass-pill hover:border-white/30 text-[11px] sm:text-xs font-medium"
                      >
                        <Code2 className="w-3.5 h-3.5 mr-1.5 text-primary" />
                        Source
                      </Button>
                    </a>

                    <Link href={article.article} className="w-full sm:flex-1">
                      <Button
                        size="sm"
                        className="w-full h-8 sm:h-9 rounded-xl bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 text-white text-[11px] sm:text-xs font-medium shadow-[0_0_15px_rgba(59,130,246,0.3)] group/read"
                      >
                        <BookOpen className="w-3.5 h-3.5 mr-1.5" />
                        Read Article
                        <ArrowRight className="w-3.5 h-3.5 ml-1.5 group-hover/read:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </div>
                </TiltCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}