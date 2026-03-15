import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { insertContactMessageSchema, type InsertContactMessage } from "@shared/schema";
import emailjs from '@emailjs/browser';
import { 
  Github, 
  Linkedin, 
  Mail, 
  MapPin, 
  Send,
  Sparkles,
  MessageSquare,
} from "lucide-react";
import { SiHuggingface } from "react-icons/si";

export default function Contact() {
    
    
  const { toast } = useToast();
  
  const form = useForm<InsertContactMessage>({
    resolver: zodResolver(insertContactMessageSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });
  
  const contactRef = useRef(null);
  const isContactInView = useInView(contactRef, { once: true, margin: "-100px" });

  const [formData, setFormData] = useState({
    name: "",
    message: ""
  });

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    if (!formData.name || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive"
      });
      return;
    }

    const templateParams = {
      from_name: formData.name,
      message: formData.message,
    };

    emailjs
      .send("service_rp58y17", "template_qpjd0ep", templateParams, "kwkLCLo2I3x6SItHL")
      .then(() => {
        toast({
          title: "Message Sent!",
          description: "Thank you for your message. I'll get back to you soon!",
        });
        setFormData({ name: "", message: "" });
      })
      .catch(() => {
        toast({
          title: "Error",
          description: "Failed to send message. Please try again later.",
          variant: "destructive"
        });
      });
  };

  return(
    <section ref={contactRef} className="py-24 px-6 bg-card/30" id="contact">
        <div className="max-w-7xl mx-auto">
            <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isContactInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
            >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 font-[family-name:var(--font-display)]">
                Get In Touch
            </h2>
            <p className="text-muted-foreground text-lg">
                If you have an opportunity or project in mind, feel free to reach out. I'm always open to collaboration.
            </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={isContactInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6 }}
            >
                <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                    <MessageSquare className="w-5 h-5 text-primary" />
                    Send a Message
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <Form {...form}>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <FormField
                        name="name"
                        render={() => (
                            <FormItem>
                            <FormLabel>Name</FormLabel>
                            <FormControl>
                                <Input
                                placeholder="Your Name"
                                value={formData.name}
                                onChange={(e) =>
                                    setFormData({ ...formData, name: e.target.value })
                                }
                                />
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                        />

                        <FormField
                        name="message"
                        render={() => (
                            <FormItem>
                            <FormLabel>Message</FormLabel>
                            <FormControl>
                                <Textarea
                                placeholder="Your Answer..."
                                rows={5}
                                value={formData.message}
                                onChange={(e) =>
                                    setFormData({ ...formData, message: e.target.value })
                                }
                                />
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                        />

                        <Button
                        type="submit"
                        className="w-full"
                        >
                        <Send className="w-4 h-4 mr-2" />
                        Send Message
                        </Button>
                    </form>
                    </Form>
                </CardContent>
                </Card>
            </motion.div>


            {/* Contact Info */}
            <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={isContactInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6 }}
                className="space-y-6"
            >
                <Card className="hover-elevate transition-all" data-testid="contact-email">
                <CardContent className="flex items-center gap-4 pt-6">
                    <div className="p-3 rounded-lg bg-primary/10 border border-primary/20">
                    <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <a href="mailto:thirutechdeveloper@gmail.com" className="font-medium hover:text-primary transition-colors">
                        thirutechdeveloper@gmail.com
                    </a>
                    </div>
                </CardContent>
                </Card>

                <Card className="hover-elevate transition-all" data-testid="contact-location">
                <CardContent className="flex items-center gap-4 pt-6">
                    <div className="p-3 rounded-lg bg-purple-500/10 border border-purple-500/20">
                    <MapPin className="w-6 h-6 text-purple-500" />
                    </div>
                    <div>
                    <p className="text-sm text-muted-foreground">Location</p>
                    <p className="font-medium">Dubai, UAE</p>
                    </div>
                </CardContent>
                </Card>

                <div className="space-y-3">
                <p className="text-sm text-muted-foreground font-medium">Connect with me</p>
                <div className="flex gap-3">
                    <a 
                    href="https://www.linkedin.com/in/thirumalai-g007" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    data-testid="link-linkedin"
                    >
                    <Button variant="outline" size="icon" className="hover-elevate">
                        <Linkedin className="w-5 h-5" />
                    </Button>
                    </a>
                    <a 
                    href="https://github.com/Thirumalai-Tech-Developer" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    data-testid="link-github"
                    >
                    <Button variant="outline" size="icon" className="hover-elevate">
                        <Github className="w-5 h-5" />
                    </Button>
                    </a>
                    <a 
                    href="https://huggingface.co/GTKING" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    data-testid="link-huggingface"
                    >
                    <Button variant="outline" size="icon" className="hover-elevate">
                        <SiHuggingface className="w-5 h-5" />
                    </Button>
                    </a>
                </div>
                </div>

                <Card className="bg-gradient-to-br from-primary/10 to-purple-500/10 border-primary/20">
                <CardContent className="pt-6">
                    <div className="flex items-start gap-3">
                    <Sparkles className="w-5 h-5 text-primary mt-1" />
                    <div>
                        <p className="font-semibold mb-1">Available for Opportunities</p>
                        <p className="text-sm text-muted-foreground">
                        Open to Work as Web Developer 
                        </p>
                    </div>
                    </div>
                </CardContent>
                </Card>
            </motion.div>
            </div>
        </div>
    </section>
    );
}