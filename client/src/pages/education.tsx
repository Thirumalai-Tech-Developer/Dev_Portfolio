import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Briefcase,
  GraduationCap,
  Sparkles,
} from "lucide-react";

export default function Education() {
    
  const experienceRef = useRef(null);
  const isExperienceInView = useInView(experienceRef, { once: true, margin: "-100px" });
  const experiences = [
    {
      title: "Web Developer",
      company: "ZFusionAI",
      location: "India",
      period: "Sep 2025 – Feb 2026",
      achievements: [
        "Developed and deployed the company website from scratch using modern web technologies.",
        "Improved website performance and loading speed through optimization.",
        "Implemented SEO strategies that improved Google search rankings."
      ]
    },
    {
      title: "Technical Intern",
      company: "Vcodez",
      location: "Chennai, India",
      period: "Mar 2025 – Jun 2025",
      achievements: [
        "Developed a complete client project within 3 days under tight deadlines.",
        "Built a web-based system for video upload and backend classification."
      ]
    }
  ];

  const education = [
    {
      degree: "B.Tech",
      institution: "Muthayammal College of Engineering",
      location: "Rasipuram",
      period: "Aug 2021 – May 2025",
      score: "CGPA: 7.86"
    },
    {
      degree: "HSC",
      institution: "New Power Matric Higher Secondary School",
      location: "Sankarapuram",
      period: "Aug 2020 – May 2021",
      score: "77.8%"
    },
    {
      degree: "SSLC",
      institution: "New Power Matric Higher Secondary School",
      location: "Sankarapuram",
      period: "Aug 2018 – May 2019",
      score: "72.2%"
    }
  ];

  const stats = [
    { label: "Projects Completed", value: 10, suffix: "+" },
    { label: "Deployed Projects", value: 3, suffix: "+" },
    { label: "Self Experience", value: 1, suffix: "+" }
  ];

  const [counters, setCounters] = useState(stats.map(() => 0));

  useEffect(() => {
    const intervals = stats.map((stat, index) => {
      const interval = setInterval(() => {
        setCounters((prev) => {
          const newCounters = [...prev];
          if (newCounters[index] < stat.value) {
            newCounters[index] = Math.min(newCounters[index] + 1, stat.value);
          }
          return newCounters;
        });
      }, 50);
      return interval;
    });

    return () => intervals.forEach(clearInterval);
  }, []);

  return(
    <section ref={experienceRef} className="py-24 px-6 bg-card/30" id="experience">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isExperienceInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 font-[family-name:var(--font-display)]">
              Experience
            </h2>
            <p className="text-muted-foreground text-lg">
              Building AI solutions across diverse domains
            </p>
          </motion.div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isExperienceInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Card className="hover-elevate transition-all duration-300" data-testid={`experience-card-${index}`}>
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-lg bg-primary/10 border border-primary/20">
                        <Briefcase className="w-8 h-8 text-primary" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-xl mb-1">{exp.title}</CardTitle>
                        <p className="text-muted-foreground">
                          {exp.company} • {exp.location}
                        </p>
                        <p className="text-sm text-muted-foreground mt-1">{exp.period}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="flex items-start gap-3">
                          <Sparkles className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                          <span className="text-muted-foreground">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isExperienceInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-16"
          >
            <h3 className="text-3xl font-bold mb-8 font-[family-name:var(--font-display)] flex items-center gap-3">
              <GraduationCap className="w-8 h-8 text-primary" />
              Education
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {education.map((edu, index) => (
                <Card key={index} className="hover-elevate transition-all" data-testid={`education-card-${index}`}>
                  <CardHeader>
                    <CardTitle className="text-lg">{edu.degree}</CardTitle>
                    <p className="text-sm text-muted-foreground">{edu.institution}</p>
                    <p className="text-xs text-muted-foreground">{edu.location}</p>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{edu.period}</p>
                    <p className="text-sm font-medium text-primary mt-2">{edu.score}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    );
}