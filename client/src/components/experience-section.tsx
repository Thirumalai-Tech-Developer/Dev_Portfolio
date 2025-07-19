import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, CheckCircle, Calendar, MapPin } from "lucide-react";

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20 bg-neutral-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-12 text-center">Experience</h2>
          
          <div className="relative">
            <div className="absolute left-4 md:left-8 top-0 bottom-0 w-0.5 bg-primary/20"></div>
            
            <div className="relative">
              <div className="flex items-start mb-8">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center mr-6 mt-1 relative z-10">
                  <Briefcase className="text-white w-4 h-4" />
                </div>
                <Card className="flex-1 shadow-sm">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-secondary">Technical Intern</h3>
                        <p className="text-primary font-medium">Vcodez</p>
                      </div>
                      <div className="text-text-primary/70 text-sm mt-2 md:mt-0 flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        <span className="mr-4">Mar 2025 – Jun 2025</span>
                        <MapPin className="w-4 h-4 mr-1" />
                        <span>Chennai</span>
                      </div>
                    </div>
                    <ul className="text-text-primary space-y-2">
                      <li className="flex items-start">
                        <CheckCircle className="text-accent w-4 h-4 mt-1 mr-3 flex-shrink-0" />
                        Worked on 5+ projects involving full-stack development
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="text-accent w-4 h-4 mt-1 mr-3 flex-shrink-0" />
                        Collaborated with clients to resolve technical issues and optimize performance
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="text-accent w-4 h-4 mt-1 mr-3 flex-shrink-0" />
                        Enhanced system performance through code optimization and best practices
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
