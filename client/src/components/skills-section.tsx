import { Card, CardContent } from "@/components/ui/card";
import { Code, Wrench, Layers, Users } from "lucide-react";

export default function SkillsSection() {
  const skillCategories = [
    {
      title: "Languages",
      icon: Code,
      iconBg: "bg-blue-500",
      color: "bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800",
      skills: ["Java", "SQL"]
    },
    {
      title: "Tools & Frameworks",
      icon: Wrench,
      iconBg: "bg-green-500",
      color: "bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800",
      skills: ["Spring Boot", "Android Studio"]
    },
    {
      title: "Domains",
      icon: Layers,
      iconBg: "bg-purple-500",
      color: "bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800",
      skills: ["Application Development", "Web Development"]
    },
    {
      title: "Soft Skills",
      icon: Users,
      iconBg: "bg-pink-500",
      color: "bg-pink-50 dark:bg-pink-900/20 border border-pink-200 dark:border-pink-800",
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
                  <div className={`w-16 h-16 ${category.iconBg} rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-4">{category.title}</h3>
                  <div className="space-y-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Card key={skillIndex} className={`${category.color} hover:shadow-md transition-shadow duration-200`}>
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
