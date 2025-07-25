import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, CheckCircle, Calendar, MapPin } from "lucide-react";

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20 bg-muted/50 dark:bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">Experience</h2>
          
          <div className="relative">
            <div className="absolute left-4 md:left-8 top-0 bottom-0 w-0.5 bg-primary/20"></div>
            
            <div className="relative">
              <div className="flex items-start mb-8">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center mr-6 mt-1 relative z-10">
                  <Briefcase className="text-white w-4 h-4" />
                </div>
                <Card className="flex-1 shadow-sm bg-background dark:bg-card">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-foreground">Technical Intern</h3>
                        <p className="text-primary font-medium">Vcodez</p>
                      </div>
                      <div className="text-muted-foreground text-sm mt-2 md:mt-0 flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        <span className="mr-4">Mar 2025 – Jun 2025</span>
                        <MapPin className="w-4 h-4 mr-1" />
                        <span>Chennai</span>
                      </div>
                    </div>
                    <ul className="text-foreground space-y-2">
                      <li className="flex items-start">
                        <CheckCircle className="text-accent w-4 h-4 mt-1 mr-3 flex-shrink-0" />
                        Contributed to 5+ client-facing web applications using modern web technologies
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="text-accent w-4 h-4 mt-1 mr-3 flex-shrink-0" />
                        Built reusable React Components and optimized frontend performance
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="text-accent w-4 h-4 mt-1 mr-3 flex-shrink-0" />
                        Collaborated with teams to deliver high-quality user experiences
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
              
              <div className="flex items-start mb-8">
                <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center mr-6 mt-1 relative z-10">
                  <Briefcase className="text-white w-4 h-4" />
                </div>
                <Card className="flex-1 shadow-sm bg-background dark:bg-card">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-foreground">Freelance Developer</h3>
                        <p className="text-primary font-medium">Remote</p>
                      </div>
                      <div className="text-muted-foreground text-sm mt-2 md:mt-0 flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        <span>Nov 2024 – Dec 2024</span>
                      </div>
                    </div>
                    <ul className="text-foreground space-y-2">
                      <li className="flex items-start">
                        <CheckCircle className="text-accent w-4 h-4 mt-1 mr-3 flex-shrink-0" />
                        Designed and delivered 4 custom web applications using React, HTML/CSS, and Tailwind
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="text-accent w-4 h-4 mt-1 mr-3 flex-shrink-0" />
                        Integrated public APIs and improved client UX through visual enhancements
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="text-accent w-4 h-4 mt-1 mr-3 flex-shrink-0" />
                        Delivered projects on time with focus on responsive design and performance
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
