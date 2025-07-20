import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-background dark:bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">About Me</h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-foreground leading-relaxed mb-6">
                I'm a full-stack developer with expertise spanning modern frontend technologies (React, Tailwind CSS) 
                and Java backend development (Spring Boot, SQL). My experience includes building production-ready 
                web applications, mobile applications, and scalable backend systems with clean architecture.
              </p>
              <p className="text-lg text-foreground leading-relaxed mb-6">
                Currently completing my B.Tech in Engineering with a CGPA of 8.1, I combine academic knowledge 
                with practical freelance and internship experience. I'm a fast learner, team collaborator, and 
                passionate about delivering high-quality solutions across the full technology stack.
              </p>
              
              <div className="flex flex-wrap gap-3">
                <Badge variant="secondary" className="bg-primary/10 text-primary dark:bg-primary/20">Problem Solver</Badge>
                <Badge variant="secondary" className="bg-primary/10 text-primary dark:bg-primary/20">Team Player</Badge>
                <Badge variant="secondary" className="bg-primary/10 text-primary dark:bg-primary/20">Fast Learner</Badge>
                <Badge variant="secondary" className="bg-primary/10 text-primary dark:bg-primary/20">Creative Thinker</Badge>
              </div>
            </div>
            
            <div className="space-y-6">
              <Card className="bg-muted dark:bg-card">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-4">Contact Information</h3>
                  <div className="space-y-3 text-foreground">
                    <div className="flex items-center">
                      <Mail className="text-primary w-5 h-5 mr-3" />
                      <span>thirumalaideveloper@gmail.com</span>
                    </div>
                    <div className="flex items-center">
                      <Phone className="text-primary w-5 h-5 mr-3" />
                      <span>+91 9342389728</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="text-primary w-5 h-5 mr-3" />
                      <span>Kallakurichi, Tamil Nadu</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <div className="flex space-x-4">
                <a 
                  href="https://linkedin.com/in/thirumalai-g" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-primary text-primary-foreground p-3 rounded-lg hover:bg-primary/90 transition-colors duration-200"
                >
                  <FaLinkedin className="w-5 h-5" />
                </a>
                <a 
                  href="https://github.com/Thirumalai-Tech-Developer" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-secondary text-secondary-foreground p-3 rounded-lg hover:bg-secondary/90 transition-colors duration-200"
                >
                  <FaGithub className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
