import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PlayCircle, Database, Smartphone, ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";

export default function ProjectsSection() {
  const projects = [
    {
      title: "Cartoon Returns",
      subtitle: "Kids OTT Platform",
      description: "A comprehensive OTT platform designed specifically for kids, featuring a safe and engaging environment for children's entertainment content.",
      technologies: ["Java", "Spring Boot", "Tailwind CSS"],
      icon: PlayCircle,
      gradient: "from-pink-400 via-purple-400 to-blue-400"
    },
    {
      title: "Ductile JDBC",
      subtitle: "Auto SQL Query Creator",
      description: "An intelligent SQL query generator that automates database operations, supporting CRUD operations and advanced features for enhanced productivity.",
      technologies: ["Java", "JDBC", "SQL"],
      icon: Database,
      gradient: "from-green-400 to-cyan-400"
    },
    {
      title: "Mobile RGB LED Controller",
      subtitle: "RGB Controller for POCO F3 GT",
      description: "A specialized Android application that provides RGB lighting control for POCO F3 GT devices, utilizing Magisk and SuperUser access for system-level customization.",
      technologies: ["Android Studio", "Magisk", "SuperUser"],
      icon: Smartphone,
      gradient: "from-red-400 via-yellow-400 to-pink-400"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-neutral-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-12 text-center">Featured Projects</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => {
              const IconComponent = project.icon;
              return (
                <Card key={index} className="bg-white shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden">
                  <div className={`h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center`}>
                    <IconComponent className="text-white w-16 h-16" />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-secondary mb-2">{project.title}</h3>
                    <p className="text-sm text-primary font-medium mb-3">{project.subtitle}</p>
                    <p className="text-text-primary mb-4 text-sm leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="secondary" className="bg-primary/10 text-primary text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex space-x-3">
                      <button className="text-primary hover:text-primary/80 transition-colors duration-200">
                        <ExternalLink className="w-4 h-4" />
                      </button>
                      <button className="text-primary hover:text-primary/80 transition-colors duration-200">
                        <FaGithub className="w-4 h-4" />
                      </button>
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
