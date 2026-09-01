import React from "react";
import { 
  SiPython, 
  SiPytorch, 
  SiHuggingface, 
  SiOpencv, 
  SiNumpy, 
  SiPandas, 
  SiLinux, 
  SiGit,
  SiOpenai,
  SiLangchain,
  SiFastapi
} from "react-icons/si";
import { Brain, Cpu, Sparkles, Workflow, Layers, Network, Bot, Database } from "lucide-react";

export default function TechMarquee() {
  const technologies = [
    { name: "Python 3.11", icon: SiPython, color: "#38bdf8" },
    { name: "PyTorch", icon: SiPytorch, color: "#ee4c2c" },
    { name: "LangChain", icon: SiLangchain, color: "#22c55e" },
    { name: "Hugging Face", icon: SiHuggingface, color: "#ffd21e" },
    { name: "ChromaDB", icon: Database, color: "#a855f7" },
    { name: "Transformers", icon: Brain, color: "#f59e0b" },
    { name: "OpenCV", icon: SiOpencv, color: "#ef4444" },
    { name: "ComfyUI Nodes", icon: Layers, color: "#06b6d4" },
    { name: "n8n Automation", icon: Workflow, color: "#ea580c" },
    { name: "LoRA & SD", icon: Sparkles, color: "#ec4899" },
    { name: "GNN (Graph Networks)", icon: Network, color: "#8b5cf6" },
    { name: "NumPy", icon: SiNumpy, color: "#4d77cf" },
    { name: "Pandas", icon: SiPandas, color: "#150458" },
    { name: "Claude Code CLI", icon: Bot, color: "#d97706" },
    { name: "Linux / CLI", icon: SiLinux, color: "#facc15" },
    { name: "MLOps Pipelines", icon: Cpu, color: "#10b981" },
  ];

  return (
    <div className="relative w-full overflow-hidden py-6 border-y border-white/[0.06] bg-black/20 backdrop-blur-sm">
      {/* Side gradient blur masks */}
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#050811] to-transparent z-10" />
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#050811] to-transparent z-10" />

      <div className="flex w-max animate-marquee space-x-6 hover:[animation-play-state:paused]">
        {[...technologies, ...technologies].map((tech, index) => {
          const Icon = tech.icon;
          return (
            <div
              key={index}
              className="flex items-center space-x-2.5 px-4 py-2 rounded-xl glass-pill transition-all duration-300 hover:scale-105 hover:border-primary/40 group cursor-default"
            >
              <Icon
                className="w-5 h-5 transition-transform duration-300 group-hover:rotate-12"
                style={{ color: tech.color }}
              />
              <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                {tech.name}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
