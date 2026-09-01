import { useState, useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import emailjs from "@emailjs/browser";
import TiltCard from "@/components/ui/tilt-card";
import { 
  Github, 
  Linkedin, 
  Mail, 
  MapPin, 
  Send,
  Sparkles,
  MessageSquare,
  Phone,
  Copy,
  Check,
  Clock,
  ExternalLink,
  Loader2
} from "lucide-react";
import { SiHuggingface } from "react-icons/si";

export default function Contact() {
  const { toast } = useToast();
  const contactRef = useRef(null);
  const isContactInView = useInView(contactRef, { once: true, margin: "-80px" });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  // Live Dubai Time Clock
  const [dubaiTime, setDubaiTime] = useState("");
  useEffect(() => {
    const updateTime = () => {
      const options: Intl.DateTimeFormatOptions = {
        timeZone: "Asia/Dubai",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      };
      setDubaiTime(new Intl.DateTimeFormat("en-US", options).format(new Date()));
    };
    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedEmail(true);
    toast({
      title: "Copied to clipboard!",
      description: text,
    });
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.message.trim()) {
      toast({
        title: "Please fill in all required fields",
        description: "Name and message are required.",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);
    const templateParams = {
      from_name: formData.name,
      reply_to: formData.email,
      message: formData.message,
    };

    try {
      await emailjs.send(
        "service_rp58y17",
        "template_qpjd0ep",
        templateParams,
        "kwkLCLo2I3x6SItHL"
      );
      toast({
        title: "Message Sent Successfully! 🚀",
        description: "Thank you for reaching out. I'll get back to you shortly!",
      });
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      toast({
        title: "Submission Error",
        description: "Could not send message directly. Please email thirutechdeveloper@gmail.com",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section ref={contactRef} className="relative py-28 px-4 sm:px-6" id="contact">
      {/* Background Ambient Glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden -z-10">
        <div className="absolute bottom-10 left-1/3 w-[36rem] h-[36rem] bg-purple-600/10 rounded-full blur-[150px]" />
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[140px]" />
      </div>

      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={isContactInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill border-primary/30 text-xs font-medium text-primary">
            <MessageSquare className="w-3.5 h-3.5 text-primary" />
            <span>Collaboration & Inquiries</span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-extrabold font-[family-name:var(--font-display)] tracking-tight">
            Let's Build Something <span className="text-gradient-primary">Extraordinary</span>
          </h2>

          <p className="text-muted-foreground text-base sm:text-lg">
            Have a project in mind, an engineering opening, or an AI concept to explore? I'm actively open to full-time roles, contracts, and exciting collaborations.
          </p>
        </motion.div>

        {/* 2 Column Layout: Left Form, Right Contact Cards */}
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Modern Glass Contact Form (7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isContactInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <TiltCard glowColor="blue" className="p-8 sm:p-10">
              <div className="space-y-6">
                <div className="flex items-center justify-between pb-4 border-b border-white/10">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                      <Send className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground">Send a Message</h3>
                      <p className="text-xs text-muted-foreground">Direct response within 24 hours</p>
                    </div>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="space-y-2">
                    <label className="text-xs font-medium text-muted-foreground">Your Name *</label>
                    <Input
                      required
                      placeholder="e.g. Alex Johnson"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="h-11 rounded-xl bg-white/[0.04] border-white/10 focus:border-primary/50 text-foreground placeholder:text-muted-foreground/50 transition-all"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-medium text-muted-foreground">Your Email Address</label>
                    <Input
                      type="email"
                      placeholder="e.g. alex@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="h-11 rounded-xl bg-white/[0.04] border-white/10 focus:border-primary/50 text-foreground placeholder:text-muted-foreground/50 transition-all"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-medium text-muted-foreground">Project Details / Message *</label>
                    <Textarea
                      required
                      rows={5}
                      placeholder="Tell me about your project, timeline, or engineering opportunity..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="rounded-xl bg-white/[0.04] border-white/10 focus:border-primary/50 text-foreground placeholder:text-muted-foreground/50 resize-none transition-all"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={loading}
                    className="w-full h-12 rounded-xl bg-gradient-to-r from-primary via-indigo-600 to-purple-600 hover:from-primary/90 hover:to-purple-600/90 text-white font-medium shadow-[0_0_25px_rgba(59,130,246,0.35)] transition-all duration-300 group"
                  >
                    {loading ? (
                      <Loader2 className="w-5 h-5 animate-spin" />
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </TiltCard>
          </motion.div>

          {/* Right Column: Direct Info & Social Hub (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isContactInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-5"
          >
            {/* 1-Click Copy Email Card */}
            <div className="p-6 rounded-2xl glass-card border border-white/10 hover:border-primary/40 transition-all duration-300 group flex items-center justify-between gap-4">
              <div className="flex items-center gap-4 min-w-0">
                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs text-muted-foreground font-mono">Email Address</p>
                  <p className="font-semibold text-sm text-foreground truncate">
                    thirutechdeveloper@gmail.com
                  </p>
                </div>
              </div>

              <Button
                variant="outline"
                size="icon"
                onClick={() => copyToClipboard("thirutechdeveloper@gmail.com")}
                className="h-10 w-10 rounded-xl glass-pill hover:bg-primary/20 flex-shrink-0"
              >
                {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 text-muted-foreground" />}
              </Button>
            </div>

            {/* Direct Phone / WhatsApp Card */}
            <a href="tel:+971542026653" className="block">
              <div className="p-6 rounded-2xl glass-card border border-white/10 hover:border-purple-500/40 transition-all duration-300 group flex items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-purple-400 group-hover:scale-110 transition-transform" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground font-mono">Direct Phone / WhatsApp</p>
                    <p className="font-semibold text-sm text-foreground">+971 54 202 6653</p>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-purple-400 transition-colors" />
              </div>
            </a>

            {/* Location & Dubai Real-Time Clock */}
            <div className="p-6 rounded-2xl glass-card border border-white/10 flex items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground font-mono">Location & Local Time</p>
                  <p className="font-semibold text-sm text-foreground">Dubai, UAE</p>
                </div>
              </div>

              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/[0.04] border border-white/[0.08] text-xs font-mono text-cyan-300">
                <Clock className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
                <span>{dubaiTime || "12:00 PM"}</span>
              </div>
            </div>

            {/* Social Connection Badges */}
            <div className="p-6 rounded-2xl glass-card border border-white/10 space-y-3">
              <p className="text-xs text-muted-foreground font-mono font-medium">Connect & Verify Profile</p>
              <div className="grid grid-cols-3 gap-3">
                <a
                  href="https://www.linkedin.com/in/thirumalai-g007"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 p-3 rounded-xl glass-pill hover:border-[#0A66C2]/60 hover:bg-[#0A66C2]/10 transition-all duration-300 group"
                >
                  <Linkedin className="w-5 h-5 text-muted-foreground group-hover:text-[#0A66C2] transition-colors" />
                  <span className="text-xs font-medium text-muted-foreground group-hover:text-foreground">LinkedIn</span>
                </a>

                <a
                  href="https://github.com/Thirumalai-Tech-Developer"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 p-3 rounded-xl glass-pill hover:border-white/50 hover:bg-white/10 transition-all duration-300 group"
                >
                  <Github className="w-5 h-5 text-muted-foreground group-hover:text-white transition-colors" />
                  <span className="text-xs font-medium text-muted-foreground group-hover:text-foreground">GitHub</span>
                </a>

                <a
                  href="https://huggingface.co/GTKING"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 p-3 rounded-xl glass-pill hover:border-[#FFD21E]/60 hover:bg-[#FFD21E]/10 transition-all duration-300 group"
                >
                  <SiHuggingface className="w-5 h-5 text-muted-foreground group-hover:text-[#FFD21E] transition-colors" />
                  <span className="text-xs font-medium text-muted-foreground group-hover:text-foreground">Models</span>
                </a>
              </div>
            </div>

            {/* Availability Banner */}
            <div className="p-5 rounded-2xl bg-gradient-to-r from-primary/15 via-purple-600/15 to-pink-500/15 border border-primary/30 flex items-center gap-3.5 shadow-[0_0_25px_rgba(59,130,246,0.15)]">
              <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                <Sparkles className="w-5 h-5 text-primary animate-pulse" />
              </div>
              <div>
                <p className="font-bold text-sm text-foreground">Available for Immediate Hire</p>
                <p className="text-xs text-muted-foreground">AI / ML Engineer • Autonomous Agents, LLMs & RAG</p>
              </div>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}