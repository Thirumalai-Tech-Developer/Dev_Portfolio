import { motion } from "framer-motion";
import {
  ArrowLeft,
  Brain,
  Database,
  Mic,
  Hand,
  Cpu,
  CheckCircle2,
  Rocket,
  Github,
  ExternalLink,
  Sparkles,
  Network,
  Activity,
  Layers
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import ParticleBackground from "@/components/ui/particle-background";
import TiltCard from "@/components/ui/tilt-card";

export default function SignLanguage() {
  const stats = [
    { title: "Gesture Classification Accuracy", value: "85%+" },
    { title: "Annotated Video Frames", value: "10,000+" },
    { title: "Deep Learning Framework", value: "PyTorch GNN" },
    { title: "Prediction Latency", value: "< 45ms" },
  ];

  const features = [
    "Real-Time Video Gesture Recognition",
    "Graph Neural Network (GNN) Spatial Modeling",
    "Bidirectional Text & Voice Generation",
    "Full-Stack Django & REST Inference API",
    "Automated Hand Landmark Extraction",
    "Zero-Drift Temporal Frame Preprocessing",
  ];

  const architecture = [
    {
      title: "1. Spatial Landmark Extraction",
      description: "Extracts 21 3D hand keypoints per frame using OpenCV & MediaPipe computer vision pipelines.",
      icon: Hand,
      color: "from-blue-500/20 to-indigo-500/20 text-blue-400 border-blue-500/30",
    },
    {
      title: "2. Graph Neural Network (GNN)",
      description: "Constructs spatial-temporal landmark graphs to model joint relationships and temporal transitions.",
      icon: Network,
      color: "from-purple-500/20 to-pink-500/20 text-purple-400 border-purple-500/30",
    },
    {
      title: "3. Gesture Classification Engine",
      description: "PyTorch deep learning model classifies dynamic sign language gestures with 85%+ validation accuracy.",
      icon: Brain,
      color: "from-cyan-500/20 to-blue-500/20 text-cyan-400 border-cyan-500/30",
    },
    {
      title: "4. Bidirectional Synthesis",
      description: "Converts classified gestures to synthesized speech and text, plus text-to-animated 3D avatar gestures.",
      icon: Mic,
      color: "from-emerald-500/20 to-teal-500/20 text-emerald-400 border-emerald-500/30",
    },
  ];

  return (
    <div className="relative min-h-screen bg-[#050811] text-foreground selection:bg-primary/30 selection:text-white overflow-x-hidden">
      {/* Particle constellation starfield */}
      <ParticleBackground quantity={40} staticity={50} ease={40} className="z-0" />

      {/* Top Ambient Glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden -z-10">
        <div className="absolute top-10 left-1/4 w-[40rem] h-[40rem] bg-emerald-600/15 rounded-full blur-[160px]" />
        <div className="absolute top-1/2 right-1/4 w-[35rem] h-[35rem] bg-blue-600/10 rounded-full blur-[150px]" />
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
              <span className="px-3.5 py-1 rounded-full text-xs font-mono font-medium bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                🦾 Computer Vision & Deep Learning
              </span>
              <span className="px-3.5 py-1 rounded-full text-xs font-mono bg-blue-500/10 border border-blue-500/20 text-blue-300">
                Graph Neural Networks (GNN) • PyTorch
              </span>
            </div>

            <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight font-[family-name:var(--font-display)] leading-[1.1]">
              Sign Language <span className="text-gradient-primary">AI Platform (GNN)</span>
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-3xl font-light">
              An end-to-end deep learning system utilizing Graph Neural Networks to detect, track, and translate video-based sign language gestures into natural speech and text with sub-second latency.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="https://github.com/Thirumalai-Tech-Developer/Sign_Language_FullStack"
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
              className="p-6 rounded-2xl glass-card border border-white/10 text-center space-y-1 group hover:border-emerald-500/40 transition-colors"
            >
              <div className="text-3xl sm:text-4xl font-extrabold text-gradient-cyan font-[family-name:var(--font-display)]">
                {stat.value}
              </div>
              <div className="text-xs text-muted-foreground font-medium">
                {stat.title}
              </div>
            </div>
          ))}
        </div>

        {/* Multi-Stage Architecture */}
        <div className="space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground flex items-center gap-2.5">
            <Network className="w-7 h-7 text-emerald-400" />
            GNN & Computer Vision Pipeline
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {architecture.map((stage, index) => {
              const Icon = stage.icon;
              return (
                <TiltCard key={index} glowColor="emerald" className="p-7 flex flex-col justify-between h-full">
                  <div className="space-y-4">
                    <div className={`w-12 h-12 rounded-xl bg-white/[0.06] border flex items-center justify-center ${stage.color}`}>
                      <Icon className="w-6 h-6" />
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

        {/* Feature Grid */}
        <div className="p-8 sm:p-10 rounded-3xl glass-card border border-white/10 space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground flex items-center gap-2.5">
            <Sparkles className="w-7 h-7 text-primary" />
            Core Capabilities & Technical Feats
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {features.map((feat, i) => (
              <div key={i} className="flex items-center gap-3 p-4 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                <span className="text-sm text-muted-foreground font-medium">{feat}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center pt-8 pb-12">
          <Link href="/#contact">
            <Button size="lg" className="rounded-full bg-gradient-to-r from-primary to-purple-600 text-white font-medium px-8 shadow-xl">
              Discuss Computer Vision Systems with Thirumalai
            </Button>
          </Link>
        </div>

      </div>
    </div>
  );
}