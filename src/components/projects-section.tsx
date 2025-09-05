import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PlayCircle, Database, Smartphone, ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";

export default function ProjectsSection() {
  const projects = [
    {
      title: "ZFusionAI",
      subtitle: "Company Website",
      description: "Created a fully responsive company website using React + Vite in 2 days. Applied Tailwind for fast UI styling and smooth layout handling with focus on component reusability and performance optimization.",
      technologies: ["React", "Vite", "Tailwind CSS"],
      icon: PlayCircle,
      gradient: "from-blue-400 via-purple-400 to-pink-400",
      github: "https://github.com/Thirumalai-Tech-Developer/Z_Fusion_AI",
      demo: "https://zfusionai.vercel.app"
    },
    {
      title: "Cartoon Returns",
      subtitle: "Kids OTT Platform",
      description: "Built a comprehensive OTT platform for kids using Java and Spring Boot. Features safe content management, user authentication, and scalable backend architecture for streaming services.",
      technologies: ["Java", "Spring Boot", "Tailwind CSS"],
      icon: PlayCircle,
      gradient: "from-pink-400 via-purple-400 to-blue-400",
      github: "https://github.com/Thirumalai-Tech-Developer/Cartoon_FullStack",
      demo: ""
    },
    {
      title: "Ductile JDBC",
      subtitle: "Auto SQL Query Creator",
      description: "Developed an intelligent SQL query generator using Java and JDBC. Automates database operations with CRUD functionality and advanced features for enhanced developer productivity.",
      technologies: ["Java", "JDBC", "SQL"],
      icon: Database,
      gradient: "from-green-400 to-cyan-400",
      github: "https://github.com/Thirumalai-Tech-Developer/DucTile_jdbc",
      demo: ""
    },
    {
      title: "Developer Search Engine",
      subtitle: "Content Discovery Platform",
      description: "Built a search platform to fetch YouTube videos and web articles by keyword. Used React for frontend and Node.js for backend API communication with focus on user experience.",
      technologies: ["React", "Node.js", "API Integration"],
      icon: Database,
      gradient: "from-cyan-400 to-blue-400",
      github: "https://github.com/Thirumalai-Tech-Developer/Focus_SearchEngine-FrontEnd",
      demo: ""
    },
    {
      title: "Mobile RGB LED Controller",
      subtitle: "Android Application",
      description: "Developed a specialized Android app for RGB lighting control on POCO F3 GT devices. Utilizes system-level access through Magisk and SuperUser permissions for hardware customization.",
      technologies: ["Android Studio", "Java", "System Integration"],
      icon: Smartphone,
      gradient: "from-red-400 via-yellow-400 to-pink-400",
      github: "https://github.com/Thirumalai-Tech-Developer",
      demo: ""
    },
    {
      title: "Portfolio Projects",
      subtitle: "Custom Web Applications",
      description: "Designed and delivered 4 custom web applications for freelance clients using modern web technologies. Integrated public APIs and improved client UX through visual enhancements.",
      technologies: ["React", "HTML/CSS", "Tailwind"],
      icon: Smartphone,
      gradient: "from-orange-400 via-red-400 to-pink-400",
      github: "https://github.com/Thirumalai-Tech-Developer/Dev_Portfolio",
      demo: ""
    },
    // --- AI/ML Projects from Resume ---
    {
      title: "Sign Language Classification",
      subtitle: "Graph Neural Network",
      description: "Built a system using Graph Neural Networks (GNN) to classify and identify sign language words or letters, improving accessibility and communication.",
      technologies: ["Python", "PyTorch", "GNN"],
      icon: Database,
      gradient: "from-purple-400 via-pink-400 to-red-400",
      github: "https://github.com/Thirumalai-Tech-Developer", // update if repo exists
      demo: ""
    },
    {
      title: "Voice-to-Voice AI Agent",
      subtitle: "LLM Speech Assistant",
      description: "Developed an AI agent that recognizes speech, converts it into text, processes it with an LLM, and returns the response as speech in real-time.",
      technologies: ["LangChain", "LLM", "Speech Recognition"],
      icon: PlayCircle,
      gradient: "from-green-400 via-blue-400 to-purple-400",
      github: "https://github.com/Thirumalai-Tech-Developer", // update if repo exists
      demo: ""
    },
    {
      title: "YouTube Video AI Agent",
      subtitle: "Automated Content Generator",
      description: "AI-powered pipeline that generates stories from keywords, creates Stable Diffusion images, adds AI narration, and produces complete YouTube videos automatically.",
      technologies: ["Python", "Stable Diffusion", "LangChain"],
      icon: PlayCircle,
      gradient: "from-yellow-400 via-orange-400 to-pink-400",
      github: "https://github.com/Thirumalai-Tech-Developer", // update if repo exists
      demo: ""
    }
  ];

  return (
    <section id="projects" className="py-20 bg-muted/50 dark:bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">Featured Projects</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => {
              const IconComponent = project.icon;
              return (
                <Card
                  key={index}
                  className="bg-background dark:bg-card shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden"
                >
                  <div className={`h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center`}>
                    <IconComponent className="text-white w-16 h-16" />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-foreground mb-2">{project.title}</h3>
                    <p className="text-sm text-primary font-medium mb-3">{project.subtitle}</p>
                    <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge
                          key={techIndex}
                          variant="secondary"
                          className="bg-primary/10 text-primary dark:bg-primary/20 text-xs"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex space-x-3">
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:text-primary/80 transition-colors duration-200"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:text-primary/80 transition-colors duration-200"
                        >
                          <FaGithub className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
