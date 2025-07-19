import { Card, CardContent } from "@/components/ui/card";
import { Code, Wrench, Layers, Users } from "lucide-react";

export default function SkillsSection() {
  const skillCategories = [
    {
      title: "Languages",
      icon: Code,
      color: "bg-primary/10 text-primary",
      skills: ["Java", "SQL"]
    },
    {
      title: "Tools & Frameworks",
      icon: Wrench,
      color: "bg-accent/10 text-accent",
      skills: ["Spring Boot", "Android Studio"]
    },
    {
      title: "Domains",
      icon: Layers,
      color: "bg-secondary/10 text-secondary",
      skills: ["Application Development", "Web Development"]
    },
    {
      title: "Soft Skills",
      icon: Users,
      color: "bg-pink-100 text-pink-500",
      skills: ["Problem Solving", "Teamwork", "Fast Learner"]
    }
  ];

  const languages = [
    { name: "Tamil", level: "Native", color: "bg-primary" },
    { name: "English", level: "Fluent", color: "bg-accent" }
  ];

  return (
    <section id="skills" className="py-20 bg-background dark:bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">Skills & Technologies</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skillCategories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <div key={index} className="text-center">
                  <div className={`w-16 h-16 ${category.color} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                    <IconComponent className="w-8 h-8" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-4">{category.title}</h3>
                  <div className="space-y-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Card key={skillIndex} className="bg-muted dark:bg-card">
                        <CardContent className="px-4 py-2">
                          <span className="font-medium text-sm text-foreground">{skill}</span>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Languages Spoken */}
          <div className="mt-16 text-center">
            <h3 className="text-xl font-semibold text-foreground mb-6">Languages Spoken</h3>
            <div className="flex justify-center space-x-6">
              {languages.map((lang, index) => (
                <div key={index} className="flex items-center">
                  <div className={`w-3 h-3 ${lang.color} rounded-full mr-2`}></div>
                  <span className="font-medium text-foreground">{lang.name} ({lang.level})</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
