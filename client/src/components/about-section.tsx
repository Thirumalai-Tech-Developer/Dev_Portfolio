import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-12 text-center">About Me</h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-text-primary leading-relaxed mb-6">
                I'm a dedicated Java Developer with expertise in building robust backend systems and web applications. 
                My experience spans across Spring Boot, JSP/Servlets, and database management with a strong focus 
                on creating scalable and maintainable solutions.
              </p>
              <p className="text-lg text-text-primary leading-relaxed mb-6">
                Currently completing my B.Tech in Engineering with a CGPA of 8.1, I combine academic knowledge 
                with practical experience gained through internships and personal projects. I'm passionate about 
                clean code practices and continuous learning in the ever-evolving tech landscape.
              </p>
              
              <div className="flex flex-wrap gap-3">
                <Badge variant="secondary" className="bg-primary/10 text-primary">Problem Solver</Badge>
                <Badge variant="secondary" className="bg-primary/10 text-primary">Team Player</Badge>
                <Badge variant="secondary" className="bg-primary/10 text-primary">Fast Learner</Badge>
                <Badge variant="secondary" className="bg-primary/10 text-primary">Creative Thinker</Badge>
              </div>
            </div>
            
            <div className="space-y-6">
              <Card className="bg-neutral-50">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-secondary mb-4">Contact Information</h3>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <Mail className="text-primary w-5 h-5 mr-3" />
                      <span>thirutechdeveloper@gmail.com</span>
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
                  className="bg-primary text-white p-3 rounded-lg hover:bg-primary/90 transition-colors duration-200"
                >
                  <FaLinkedin className="w-5 h-5" />
                </a>
                <a 
                  href="https://github.com/Thirumalai-Tech-Developer" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-secondary text-white p-3 rounded-lg hover:bg-secondary/90 transition-colors duration-200"
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
