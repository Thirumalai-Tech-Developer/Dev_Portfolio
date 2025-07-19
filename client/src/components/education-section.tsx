import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, School, Award, Calendar, MapPin } from "lucide-react";

export default function EducationSection() {
  const educationData = [
    {
      degree: "Bachelor of Technology (B.Tech)",
      institution: "Muthayammal College of Engineering",
      location: "Rasipuram",
      duration: "Aug 2021 – May 2025",
      grade: "CGPA: 8.1",
      icon: GraduationCap,
      color: "bg-primary"
    },
    {
      degree: "Higher Secondary Certificate (HSC)",
      institution: "New Power Matric Higher Secondary School",
      location: "Sankarapuram",
      duration: "Aug 2020 – May 2021",
      grade: "77.8%",
      icon: School,
      color: "bg-accent"
    },
    {
      degree: "Secondary School Leaving Certificate (SSLC)",
      institution: "New Power Matric Higher Secondary School",
      location: "Sankarapuram",
      duration: "Aug 2018 – May 2019",
      grade: "72.2%",
      icon: Award,
      color: "bg-secondary"
    }
  ];

  return (
    <section id="education" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-12 text-center">Education</h2>
          
          <div className="space-y-8">
            {educationData.map((edu, index) => {
              const IconComponent = edu.icon;
              return (
                <Card key={index} className="bg-neutral-50 shadow-sm">
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <div className={`w-12 h-12 ${edu.color} rounded-lg flex items-center justify-center mr-6 flex-shrink-0`}>
                        <IconComponent className="text-white w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                          <h3 className="text-xl font-semibold text-secondary">{edu.degree}</h3>
                          <Badge variant="secondary" className="bg-accent/10 text-accent mt-2 md:mt-0 self-start">
                            {edu.grade}
                          </Badge>
                        </div>
                        <p className="text-primary font-medium mb-2">{edu.institution}</p>
                        <div className="flex flex-col sm:flex-row sm:items-center text-text-primary/70 text-sm gap-2 sm:gap-4">
                          <div className="flex items-center">
                            <MapPin className="w-4 h-4 mr-1" />
                            <span>{edu.location}</span>
                          </div>
                          <div className="flex items-center">
                            <Calendar className="w-4 h-4 mr-1" />
                            <span>{edu.duration}</span>
                          </div>
                        </div>
                      </div>
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
