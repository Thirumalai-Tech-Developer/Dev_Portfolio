import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

export default function Skills() {
  
  const skillsRef = useRef(null);
  const isSkillsInView = useInView(skillsRef, { once: true, margin: "-100px" });

  const skills = [
    { name: "HTML", level: 95, category: "Frontend" },
    { name: "CSS", level: 90, category: "Frontend" },
    { name: "JavaScript", level: 90, category: "Frontend" },
    { name: "TypeScript", level: 85, category: "Frontend" },
    { name: "React", level: 90, category: "Framework" },
    { name: "Tailwind CSS", level: 90, category: "Framework" },
    { name: "Node.js", level: 80, category: "Backend" },
    { name: "Django", level: 75, category: "Backend" },
    { name: "Flask", level: 75, category: "Backend" },
    { name: "MySQL", level: 80, category: "Database" },
    { name: "MongoDB", level: 75, category: "Database" },
    { name: "JWT Authentication", level: 80, category: "Security" },
    { name: "CSRF Protection", level: 75, category: "Security" }
  ];

  const stats = [
    { label: "Projects Completed", value: 10, suffix: "+" },
    { label: "Deployed Projects", value: 3, suffix: "+" },
    { label: "Self Experience", value: 1, suffix: "+" }
  ];


  return(
    <section ref={skillsRef} className="py-24 px-6" id="skills">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isSkillsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 font-[family-name:var(--font-display)]">
              Skills & Expertise
            </h2>
            <p className="text-muted-foreground text-lg">
              Technologies and frameworks I work with
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isSkillsInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <Card className="hover-elevate active-elevate-2 transition-all" data-testid={`skill-card-${index}`}>
                  <CardContent className="pt-6 rounded-xl">
                    <div className="flex items-center justify-between mb-3">
                      <span className="font-semibold">{skill.name}</span>
                      <Badge variant="outline" className="text-xs">
                        {skill.category}
                      </Badge>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-primary to-purple-500"
                        initial={{ width: 0 }}
                        animate={isSkillsInView ? { width: `${skill.level}%` } : {}}
                        transition={{ duration: 1, delay: index * 0.05 }}
                      />
                    </div>
                    <p className="text-xs text-muted-foreground mt-2 text-right">
                      {skill.level}%
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
    </section>
    );
}