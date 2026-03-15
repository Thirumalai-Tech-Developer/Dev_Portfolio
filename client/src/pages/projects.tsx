import { useRef, useState } from "react";
import { motion, useInView} from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Globe,
  Building2,
  Cloud,
  Brain,
  Bot
} from "lucide-react";

export default function Projects() {

  const projectsRef = useRef(null);
  const isProjectsInView = useInView(projectsRef, { once: true, margin: "-100px" });

  const [activeCategory, setActiveCategory] = useState("All");

  const projects = [
    {
      title: "ABC Contracting LLC",
      description: "Developed and deployed a high-quality company website with modern technologies and SEO optimization.",
      icon: <Building2 className="w-8 h-8 text-orange-400" />,
      tags: ["React", "TypeScript", "SEO", "Tailwind"],
      gradient: "from-orange-500/10 to-amber-500/10",
      link: "https://abccont.com",
      category: "Production Live"
    },
    {
      title: "ZFusionAI Website",
      description: "Rebuilt and deployed the official AI company website with performance improvements and faster loading speeds.",
      icon: <Cloud className="w-8 h-8 text-purple-400" />,
      tags: ["React", "AI", "SEO", "Hosting"],
      gradient: "from-purple-500/10 to-indigo-500/10",
      link: "https://zfusionai.info",
      category: "Production Live"
    },
    {
      title: "Upstand Technical Service LLC",
      description: "Developed and deployed a professional company website within 2 days using modern technologies.",
      icon: <Globe className="w-8 h-8 text-blue-400" />,
      tags: ["React", "Tailwind", "Deployment"],
      gradient: "from-blue-500/10 to-cyan-500/10",
      link: "https://upstanduae.com",
      category: "Production Live"
    },

    {
      title: "MCP Web Search Anti-Hallucination",
      description: "LLM system that integrates DuckDuckGo search to reduce hallucination and improve factual responses.",
      icon: <Bot className="w-8 h-8 text-purple-400" />,
      tags: ["Python", "LLM", "DuckDuckGo", "LoRA"],
      gradient: "from-violet-500/10 to-purple-500/10",
      link: "https://github.com/Thirumalai-Tech-Developer/MCP_backend_usecase",
      category: "AI Projects"
    },

    {
      title: "End-to-End AI ML Cloud Platform",
      description: "AI cloud platform supporting Gemini API chat, local LLM chat, RAG pipelines and automated ML training.",
      icon: <Brain className="w-8 h-8 text-indigo-400" />,
      tags: ["React", "LLM", "RAG", "API"],
      gradient: "from-indigo-500/10 to-purple-500/10",
      link: "https://github.com/Thirumalai-Tech-Developer/END-END_AI-ML_Cloud",
      category: "AI Projects"
    },

    {
      title: "Sign Language AI Translator",
      description: "Full-stack AI system that detects sign language from uploaded videos and converts text into sign language animations.",
      icon: <Brain className="w-8 h-8 text-pink-400" />,
      tags: ["Django", "Python", "Deep Learning"],
      gradient: "from-pink-500/10 to-purple-500/10",
      link: "https://github.com/Thirumalai-Tech-Developer/Sign_Language_FullStack",
      category: "AI Projects"
    }
  ];

  const categories = ["All", "AI Projects", "Production Live"];

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter(p => p.category === activeCategory);

  return(
    <section ref={projectsRef} className="py-24 px-6" id="projects">
      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isProjectsInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured Projects
          </h2>
          <p className="text-muted-foreground text-lg">
            Production websites and AI research projects
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-sm transition
              ${activeCategory === cat
                ? "bg-primary text-white"
                : "bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20"}`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <a key={index} href={project.link} target="_blank" rel="noopener noreferrer">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isProjectsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className={`group hover:shadow-lg transition-all duration-300 h-full bg-gradient-to-br ${project.gradient}`}>

                  <CardHeader>
                    <div className="flex items-start justify-between mb-4">
                      <div className="p-3 rounded-lg bg-card/80 backdrop-blur-sm border border-border">
                        {project.icon}
                      </div>
                    </div>

                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                      {project.title}
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="space-y-4">

                    <p className="text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <Badge key={tagIndex} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                  </CardContent>

                </Card>
              </motion.div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}