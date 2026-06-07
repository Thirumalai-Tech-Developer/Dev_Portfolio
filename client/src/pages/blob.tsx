import { motion } from "framer-motion";
import { ExternalLink, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "AI Website Builder",
    description:
      "Multi-agent AI system capable of generating complete websites from natural language prompts. Automates planning, content generation, component selection, code generation, validation, and debugging workflows.",
    tech: [
      "Python",
      "LangChain",
      "React",
      "TailwindCSS",
      "AI Agents",
      "Selenium",
      "TypeScript",
    ],
    achievement: "Reduced website development time by 70%",
    source: "https://github.com/Thirumalai-Tech-Developer/AI-Agent",
    article: "/blob/aiwebsite",
  },
  {
    title: "Sign Language with Full Stack",
    description:
      "AI-powered sign language classification platform with full-stack integration and real-time prediction capabilities.",
    tech: [
      "Python",
      "Django",
      "TailwindCSS",
      "Deep Learning",
      "Graph Neural Networks",
    ],
    achievement: "Achieved 85%+ classification accuracy",
    source: "https://github.com/Thirumalai-Tech-Developer/Sign_Language_FullStack",
    article: "/blob/signlanguage",
  },
];

export default function Blob() {
  return (
    <section
      id="blob"
      className="relative py-32 px-6 overflow-hidden"
    >
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute bottom-20 right-20 h-72 w-72 rounded-full bg-purple-500/10 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary uppercase tracking-widest text-sm mb-3">
            Featured Work
          </p>

          <h2 className="text-5xl font-bold">
            Blob of Projects
          </h2>

          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            A collection of AI systems, full-stack applications,
            and automation solutions built to solve real-world problems.
            Here the article will be updated with new projects and case studies showcasing the impact of my work in applied AI and full-stack development.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              whileHover={{ y: -8 }}
              className="
                group
                relative
                overflow-hidden
                rounded-3xl
                border
                border-white/10
                bg-white/5
                backdrop-blur-xl
                p-8
                shadow-2xl
              "
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-purple-500/5" />

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="rounded-xl bg-primary/10 p-3">
                    <Sparkles className="h-5 w-5 text-primary" />
                  </div>

                  <h3 className="text-2xl font-bold">
                    {project.title}
                  </h3>
                </div>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  {project.description}
                </p>

                <div className="mb-6">
                  <p className="text-primary font-medium mb-2">
                    Key Achievement
                  </p>

                  <p className="text-sm text-muted-foreground">
                    {project.achievement}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="
                        px-3
                        py-1
                        rounded-full
                        text-xs
                        border
                        border-primary/20
                        bg-primary/10
                        text-primary
                      "
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3 flex-wrap">
                    <Button
                        variant="outline"
                        className="group/button"
                        onClick={() => window.open(project.source, "_blank")}
                    >
                        Source Code
                        <ExternalLink className="ml-2 h-4 w-4 group-hover/button:translate-x-1 transition-transform" />
                    </Button>

                    <Button
                        className="group/button"
                        onClick={() => (window.location.href = project.article)}
                    >
                        Full Article
                        <ExternalLink className="ml-2 h-4 w-4 group-hover/button:translate-x-1 transition-transform" />
                    </Button>
                    </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}