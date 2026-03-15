import { useRef } from "react";
import { motion, useInView} from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  LucideCloudy,
  Construction,
  Network,
} from "lucide-react";

export default function Projects() {

  const projectsRef = useRef(null);
  const isProjectsInView = useInView(projectsRef, { once: true, margin: "-100px" });

  const projects = [
    {
      title: "ABC Contracting LLC",
      description: "Developed and deployed a high-quality company website with modern technologies and SEO optimization.",
      icon: <Construction className="w-8 h-8" />,
      tags: ["React", "TypeScript", "SEO", "Tailwind"],
      gradient: "from-yellow-500/20 to-orange-500/20",
      link: "https://abccont.com"
    },
    {
      title: "ZFusionAI Website",
      description: "Rebuilt and deployed the official AI company website with performance improvements and faster loading speeds.",
      icon: <LucideCloudy className="w-8 h-8" />,
      tags: ["React", "AI", "SEO", "Hosting"],
      gradient: "from-purple-500/20 to-pink-500/20",
      link: "https://zfusionai.info"
    },
    {
      title: "Upstand Technical Service LLC",
      description: "Developed and deployed a professional company website within 2 days using modern technologies.",
      icon: <Network className="w-8 h-8" />,
      tags: ["React", "Tailwind", "Deployment"],
      gradient: "from-blue-500/20 to-purple-500/20",
      link: "https://upstanduae.com"
    }
  ];

  return(
    <section ref={projectsRef} className="py-24 px-6" id="projects">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isProjectsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 font-[family-name:var(--font-display)]">
              Featured Projects
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Innovative AI/ML solutions built with cutting-edge technologies
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <a key={index} href={project.link} target="_blank" rel="noopener noreferrer">
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isProjectsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card 
                    className={`group hover-elevate active-elevate-2 cursor-pointer transition-all duration-300 hover:shadow-lg h-full bg-gradient-to-br ${project.gradient}`}
                    data-testid={`project-card-${index}`}
                  >
                    <CardHeader>
                      <div className="flex items-start justify-between mb-4">
                        <div className="p-3 rounded-lg bg-card/80 backdrop-blur-sm border border-border">
                          {project.icon}
                        </div>
                      </div>
                      <CardTitle className="text-2xl group-hover:text-primary transition-colors">
                        {project.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-muted-foreground leading-relaxed">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag, tagIndex) => (
                          <Badge 
                            key={tagIndex} 
                            variant="secondary" 
                            className="text-xs"
                            data-testid={`project-${index}-tag-${tagIndex}`}
                          >
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