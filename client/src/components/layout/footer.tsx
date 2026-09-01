import { ArrowUp, Github, Linkedin, Sparkles } from "lucide-react";
import { SiHuggingface } from "react-icons/si";
import { Button } from "@/components/ui/button";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative py-12 px-4 sm:px-6 border-t border-white/[0.08] bg-black/40 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        
        {/* Left Side: Brand & Note */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-primary to-purple-600 p-[1.5px]">
            <div className="w-full h-full bg-[#050811] rounded-full flex items-center justify-center">
              <span className="font-bold text-xs text-gradient-primary">TG</span>
            </div>
          </div>
          <div className="text-left">
            <p className="text-xs font-semibold text-foreground">
              Thirumalai G • <span className="text-primary font-mono">AI / ML Engineer</span>
            </p>
            <p className="text-[11px] text-muted-foreground mt-0.5">
              © {new Date().getFullYear()} All rights reserved. Specialized in Autonomous Agents, LLMs & MLOps.
            </p>
          </div>
        </div>

        {/* Center: Social Links */}
        <div className="flex items-center gap-2">
          <a
            href="https://www.linkedin.com/in/thirumalai-g007"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="ghost" size="icon" className="w-8 h-8 rounded-full glass-pill hover:text-[#0A66C2]">
              <Linkedin className="w-4 h-4" />
            </Button>
          </a>

          <a
            href="https://github.com/Thirumalai-Tech-Developer"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="ghost" size="icon" className="w-8 h-8 rounded-full glass-pill hover:text-white">
              <Github className="w-4 h-4" />
            </Button>
          </a>

          <a
            href="https://huggingface.co/GTKING"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="ghost" size="icon" className="w-8 h-8 rounded-full glass-pill hover:text-[#FFD21E]">
              <SiHuggingface className="w-4 h-4" />
            </Button>
          </a>
        </div>

        {/* Right Side: Back to Top Button */}
        <div>
          <Button
            variant="outline"
            size="sm"
            onClick={scrollToTop}
            className="rounded-full glass-pill hover:border-primary/50 text-xs font-medium gap-1.5"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5 text-primary" />
          </Button>
        </div>

      </div>
    </footer>
  );
}
