import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { 
  Briefcase,
  GraduationCap,
  Sparkles,
  Calendar,
  MapPin,
  Building,
  CheckCircle2,
  Award,
  Bot,
  Layers,
  Cpu,
  Video,
  Network
} from "lucide-react";
import TiltCard from "@/components/ui/tilt-card";

export default function Education() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  const experiences = [
    {
      title: "AI Developer",
      company: "ZFusionAI Tech Service",
      location: "Tamil Nadu, India",
      period: "Jun 2025 – May 2026",
      type: "Full-Time AI Role",
      achievements: [
        "AI Agent & RAG System: Developed autonomous AI agents to complete complex tasks without relying on paid APIs, utilizing custom RAG architecture and ChromaDB vector stores.",
        "AI Automation: Built a full frontend web-app builder combining semi-agentic workflows with rule-based automation pipelines.",
        "AI Video Generation Pipeline: Engineered an end-to-end video generation pipeline using only free and open-source models for story video and ad synthesis.",
        "ComfyUI Custom Nodes: Authored reusable ComfyUI nodes for persistent character consistency across multi-scene generations with copyright-safe reference embeddings.",
        "Cloud MLOps: Built an end-to-end MLOps pipeline covering automated dataset ingestion, feature engineering, distributed model training, performance tracking, and model export."
      ],
      skills: ["LangChain", "ChromaDB", "ComfyUI", "MLOps", "Python 3.11", "RAG", "Video AI"],
      glow: "purple" as const,
    },
    {
      title: "AI Intern",
      company: "Vcodez Tech Service",
      location: "Tamil Nadu, India",
      period: "May 2025 – Jun 2025",
      type: "AI & ML Internship",
      achievements: [
        "Machine Learning & Generative AI: Contributed to multiple ML and generative AI projects, including a high-end real-estate visualization solution built with Stable Diffusion (SD) and LoRA (Low-Rank Adaptation) fine-tuning.",
        "AI Sign Language Classification: Developed an AI gesture classification model using Graph Neural Networks (GNNs) and computer vision to support seamless communication with deaf individuals."
      ],
      skills: ["Stable Diffusion", "LoRA Fine-Tuning", "Graph Neural Networks (GNN)", "OpenCV", "PyTorch"],
      glow: "blue" as const,
    }
  ];

  const education = [
    {
      degree: "Bachelor of Technology (B.Tech), Artificial Intelligence & Data Science",
      institution: "Muthayammal College of Engineering",
      location: "Tamil Nadu, India",
      period: "2021 – 2025",
      score: "First Class with Distinction",
      badge: "Graduated",
      highlights: "Specialization in Machine Learning, Deep Learning, Computer Vision, and Natural Language Processing",
    }
  ];

  return (
    <section ref={sectionRef} className="relative py-16 sm:py-20 md:py-24 lg:py-28 px-3 xs:px-4 sm:px-6 lg:px-8 w-full max-w-full overflow-hidden" id="experience">
      {/* Background Ambient Glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden -z-10">
        <div className="absolute top-1/2 right-1/3 w-72 sm:w-[36rem] h-72 sm:h-[36rem] bg-blue-600/10 rounded-full blur-[100px] sm:blur-[150px]" />
      </div>

      <div className="max-w-7xl mx-auto space-y-12 sm:space-y-16 md:space-y-20">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto space-y-3 sm:space-y-4"
        >
          <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full glass-pill border-primary/30 text-[11px] sm:text-xs font-medium text-primary">
            <Briefcase className="w-3.5 h-3.5 text-primary" />
            <span>Professional Career</span>
          </div>

          <h2 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-extrabold font-[family-name:var(--font-display)] tracking-tight">
            Work Experience & <span className="text-gradient-primary">Education</span>
          </h2>

          <p className="text-muted-foreground text-xs xs:text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
            Hands-on track record building production AI agents, fine-tuning generative models, and engineering MLOps pipelines from my resume.
          </p>
        </motion.div>

        {/* Experience Timeline Section */}
        <div className="space-y-6 sm:space-y-8">
          <div className="flex items-center gap-2.5 sm:gap-3 mb-4 sm:mb-8">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
              <Briefcase className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-foreground">AI / ML Work Experience</h3>
              <p className="text-[11px] sm:text-xs text-muted-foreground">Engineering roles & production impact</p>
            </div>
          </div>

          {/* Timeline Container */}
          <div className="relative pl-5 xs:pl-6 sm:pl-10 space-y-6 sm:space-y-10">
            {/* Animated Laser Beam Vertical Line */}
            <div className="absolute left-[9px] xs:left-[11px] sm:left-[19px] top-4 bottom-4 w-[2px] bg-gradient-to-b from-primary via-purple-500 to-transparent" />

            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative"
              >
                {/* Milestone Node Dot */}
                <div className="absolute -left-[23px] xs:-left-[27px] sm:-left-[35px] top-6 w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-[#050811] border-2 border-primary flex items-center justify-center shadow-[0_0_12px_rgba(59,130,246,0.8)]">
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-primary animate-ping" />
                </div>

                {/* Experience Card */}
                <TiltCard glowColor={exp.glow} className="p-5 sm:p-7 md:p-8">
                  <div className="space-y-4 sm:space-y-5">
                    {/* Header: Title, Company, Period */}
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2.5 sm:gap-4">
                      <div>
                        <div className="flex flex-wrap items-center gap-2 mb-1">
                          <h4 className="text-lg sm:text-xl md:text-2xl font-bold text-foreground">{exp.title}</h4>
                          <span className="px-2.5 py-0.5 rounded-full text-[10px] sm:text-[11px] font-medium bg-primary/10 border border-primary/20 text-primary">
                            {exp.type}
                          </span>
                        </div>
                        <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs sm:text-sm text-muted-foreground font-medium">
                          <span className="text-foreground flex items-center gap-1.5">
                            <Building className="w-3.5 h-3.5 text-primary" />
                            {exp.company}
                          </span>
                          <span>•</span>
                          <span className="flex items-center gap-1.5">
                            <MapPin className="w-3.5 h-3.5 text-muted-foreground" />
                            {exp.location}
                          </span>
                        </div>
                      </div>

                      <div className="self-start sm:self-auto px-2.5 sm:px-3 py-1 rounded-full glass-pill border-white/10 text-[11px] sm:text-xs font-mono text-cyan-300 flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                        {exp.period}
                      </div>
                    </div>

                    {/* Bullet Points */}
                    <div className="space-y-2.5 sm:space-y-3 pt-1 sm:pt-2">
                      {exp.achievements.map((item, i) => (
                        <div key={i} className="flex items-start gap-2.5 sm:gap-3 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                          <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>

                    {/* Skill Tags */}
                    <div className="flex flex-wrap gap-1 sm:gap-1.5 pt-2 sm:pt-3 border-t border-white/[0.06]">
                      {exp.skills.map((skill, sIdx) => (
                        <span
                          key={sIdx}
                          className="px-2 sm:px-2.5 py-0.5 rounded-md text-[10px] sm:text-[11px] font-mono bg-white/[0.04] border border-white/[0.08] text-white/80"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Education Section */}
        <div className="space-y-6 sm:space-y-8 pt-4 sm:pt-8">
          <div className="flex items-center gap-2.5 sm:gap-3 mb-4 sm:mb-8">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center">
              <GraduationCap className="w-4 h-4 sm:w-5 sm:h-5 text-purple-400" />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-foreground">Academic Education</h3>
              <p className="text-[11px] sm:text-xs text-muted-foreground">Degree & foundational coursework</p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 max-w-4xl">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 25 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <TiltCard glowColor="purple" className="p-5 sm:p-7 md:p-8 flex flex-col justify-between h-full group">
                  <div className="space-y-3 sm:space-y-4">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center flex-shrink-0">
                          <Award className="w-5 h-5 sm:w-6 sm:h-6 text-purple-400 group-hover:scale-110 transition-transform" />
                        </div>
                        <div>
                          <h4 className="font-bold text-base sm:text-lg md:text-xl text-foreground group-hover:text-purple-300 transition-colors">
                            {edu.degree}
                          </h4>
                          <p className="text-xs sm:text-sm text-muted-foreground font-medium">
                            {edu.institution} • {edu.location}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 self-start sm:self-auto">
                        <span className="px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-xs font-mono font-medium bg-purple-500/15 text-purple-300 border border-purple-500/30">
                          {edu.period}
                        </span>
                        <span className="px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-xs font-mono font-medium bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">
                          {edu.badge}
                        </span>
                      </div>
                    </div>

                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed pt-1 sm:pt-2">
                      {edu.highlights}
                    </p>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}