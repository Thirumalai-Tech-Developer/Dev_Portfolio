import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

export default function Skills() {

  const skillsRef = useRef(null);
  const isSkillsInView = useInView(skillsRef, { once: true, margin: "-100px" });

  const [activeCategory, setActiveCategory] = useState("All");

  const skills = [
    { name: "HTML", level: 95, category: "Languages", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "CSS", level: 90, category: "Languages", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    { name: "JavaScript", level: 90, category: "Languages", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "TypeScript", level: 85, category: "Languages", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
    { name: "Python", level: 95, category: "Languages", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },

    { name: "React", level: 90, category: "Frameworks", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Tailwind CSS", level: 90, category: "Frameworks", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },

    { name: "Node.js", level: 80, category: "Backend", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "Django", level: 75, category: "Backend", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" },
    { name: "Flask", level: 75, category: "Backend", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg" },

    { name: "MySQL", level: 80, category: "Database", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    { name: "MongoDB", level: 75, category: "Database", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },

    { name: "JWT Authentication", level: 80, category: "Security", icon: "https://cdn-icons-png.flaticon.com/512/2092/2092663.png" },
    { name: "CSRF Protection", level: 75, category: "Security", icon: "https://cdn-icons-png.flaticon.com/512/2913/2913465.png" }
  ];

  const categories = ["All", "Languages", "Frameworks", "Backend", "Database", "Security"];

  const filteredSkills =
    activeCategory === "All"
      ? skills
      : skills.filter(skill => skill.category === activeCategory);

  return (
    <section ref={skillsRef} className="py-24 px-6" id="skills">
      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isSkillsInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Skills & Expertise
          </h2>
          <p className="text-muted-foreground text-lg">
            Technologies and frameworks I work with
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

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">

          {filteredSkills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isSkillsInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <Card className="bg-white/10 backdrop-blur-lg border border-white/20 hover:scale-[1.03] transition">

                <CardContent className="pt-6">

                  <div className="flex items-center justify-between mb-4">

                    <div className="flex items-center gap-3">
                      <img
                        src={skill.icon}
                        className="w-8 h-8"
                      />
                      <span className="font-semibold">{skill.name}</span>
                    </div>

                    <Badge variant="outline" className="text-xs">
                      {skill.category}
                    </Badge>

                  </div>

                  <div className="w-full bg-white/10 rounded-full h-2 overflow-hidden">

                    <motion.div
                      className="h-full bg-gradient-to-r from-purple-500 to-indigo-500"
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