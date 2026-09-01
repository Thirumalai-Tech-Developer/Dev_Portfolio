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
    <section ref={contactRef} className="relative py-16 sm:py-20 md:py-24 lg:py-28 px-3 xs:px-4 sm:px-6 lg:px-8 w-full max-w-full overflow-hidden" id="contact">
      {/* Background Ambient Glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden -z-10">
        <div className="absolute bottom-10 left-1/3 w-72 sm:w-[36rem] h-72 sm:h-[36rem] bg-purple-600/10 rounded-full blur-[100px] sm:blur-[150px]" />
        <div className="absolute top-1/4 right-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-blue-600/10 rounded-full blur-[90px] sm:blur-[140px]" />
      </div>

      <div className="max-w-7xl mx-auto space-y-10 sm:space-y-12 md:space-y-16">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={isContactInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto space-y-3 sm:space-y-4"
        >
          <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full glass-pill border-primary/30 text-[11px] sm:text-xs font-medium text-primary">
            <Sparkles className="w-3.5 h-3.5 text-primary" />
            <span>Let's Build Something Intelligent</span>
          </div>

          <h2 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-extrabold font-[family-name:var(--font-display)] tracking-tight">
            Get In <span className="text-gradient-primary">Touch</span>
          </h2>

          <p className="text-muted-foreground text-xs xs:text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
            Available for full-time AI/ML engineering roles, autonomous agent development, and generative AI consultations.
          </p>
        </motion.div>

        {/* Contact Grid: Info & Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
          
          {/* Left Column: Direct Info Cards (5 cols on lg) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isContactInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-4 sm:space-y-5"
          >
            {/* 1-Click Copy Email Card */}
            <div className="p-5 sm:p-6 rounded-2xl sm:rounded-3xl glass-card border border-white/10 space-y-3 group hover:border-primary/40 transition-colors">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5 sm:gap-3">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                    <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-xs sm:text-sm text-foreground">Direct Email</h4>
                    <p className="text-[11px] sm:text-xs text-muted-foreground">Click to copy or compose</p>
                  </div>
                </div>

                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => copyToClipboard("thirutechdeveloper@gmail.com")}
                  className="rounded-full glass-pill hover:border-primary/50 text-[11px] sm:text-xs font-medium gap-1.5 h-8"
                >
                  {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-primary" />}
                  <span>{copiedEmail ? "Copied!" : "Copy"}</span>
                </Button>
              </div>

              <div className="pt-2 border-t border-white/[0.06]">
                <a
                  href="mailto:thirutechdeveloper@gmail.com"
                  className="font-mono text-xs sm:text-sm text-primary hover:underline break-all"
                >
                  thirutechdeveloper@gmail.com
                </a>
              </div>
            </div>

            {/* Location & Real-Time Dubai Clock */}
            <div className="p-5 sm:p-6 rounded-2xl sm:rounded-3xl glass-card border border-white/10 space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5 sm:gap-3">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center">
                    <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-purple-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-xs sm:text-sm text-foreground">Current Location</h4>
                    <p className="text-[11px] sm:text-xs text-muted-foreground">Dubai, United Arab Emirates</p>
                  </div>
                </div>

                <div className="px-2.5 sm:px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-[10px] sm:text-xs font-mono text-purple-300 flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-purple-400" />
                  <span>{dubaiTime || "GST (UTC+4)"}</span>
                </div>
              </div>

              <div className="pt-2 border-t border-white/[0.06] text-xs text-muted-foreground">
                <span>Phone: </span>
                <a href="tel:+971542026653" className="font-mono text-foreground hover:text-primary">
                  +971 54 202 6653
                </a>
              </div>
            </div>

            {/* Social Links Cards */}
            <div className="grid grid-cols-3 gap-2.5 sm:gap-3">
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/thirumalai-g007"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 sm:p-4 rounded-2xl glass-card border border-white/10 hover:border-[#0A66C2]/60 transition-colors text-center group"
              >
                <Linkedin className="w-5 h-5 mx-auto text-[#0A66C2] group-hover:scale-110 transition-transform mb-1.5" />
                <span className="text-[11px] sm:text-xs font-medium text-muted-foreground group-hover:text-white transition-colors block">
                  LinkedIn
                </span>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/Thirumalai-Tech-Developer"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 sm:p-4 rounded-2xl glass-card border border-white/10 hover:border-white/40 transition-colors text-center group"
              >
                <Github className="w-5 h-5 mx-auto text-white group-hover:scale-110 transition-transform mb-1.5" />
                <span className="text-[11px] sm:text-xs font-medium text-muted-foreground group-hover:text-white transition-colors block">
                  GitHub
                </span>
              </a>

              {/* Hugging Face */}
              <a
                href="https://huggingface.co/GTKING"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 sm:p-4 rounded-2xl glass-card border border-white/10 hover:border-[#FFD21E]/60 transition-colors text-center group"
              >
                <SiHuggingface className="w-5 h-5 mx-auto text-[#FFD21E] group-hover:scale-110 transition-transform mb-1.5" />
                <span className="text-[11px] sm:text-xs font-medium text-muted-foreground group-hover:text-white transition-colors block">
                  HF Models
                </span>
              </a>
            </div>

          </motion.div>

          {/* Right Column: Direct Message Form (7 cols on lg) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isContactInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <div className="p-5 sm:p-7 md:p-8 rounded-2xl sm:rounded-3xl glass-panel border border-white/15 shadow-2xl">
              <div className="flex items-center gap-2.5 sm:gap-3 pb-4 sm:pb-6 mb-4 sm:mb-6 border-b border-white/10">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-tr from-primary to-purple-600 p-[1.5px]">
                  <div className="w-full h-full bg-[#050811] rounded-xl flex items-center justify-center">
                    <MessageSquare className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-base sm:text-lg md:text-xl text-foreground">Send a Direct Message</h3>
                  <p className="text-[11px] sm:text-xs text-muted-foreground">Dispatched directly to Thirumalai's inbox</p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-3.5 sm:space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div className="space-y-1.5">
                    <label className="text-[11px] sm:text-xs font-medium text-muted-foreground font-mono">Your Name *</label>
                    <Input
                      required
                      placeholder="Jane Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="bg-white/[0.04] border-white/10 rounded-xl focus:border-primary h-10 sm:h-11 text-xs sm:text-sm"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[11px] sm:text-xs font-medium text-muted-foreground font-mono">Your Email</label>
                    <Input
                      type="email"
                      placeholder="jane@company.ai"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="bg-white/[0.04] border-white/10 rounded-xl focus:border-primary h-10 sm:h-11 text-xs sm:text-sm"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[11px] sm:text-xs font-medium text-muted-foreground font-mono">Message / Project Details *</label>
                  <Textarea
                    required
                    rows={4}
                    placeholder="Describe your AI project, agent workflow requirements, or role details..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="bg-white/[0.04] border-white/10 rounded-xl focus:border-primary resize-none text-xs sm:text-sm"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full h-11 sm:h-12 rounded-xl bg-gradient-to-r from-primary via-indigo-600 to-purple-600 hover:opacity-95 text-white text-xs sm:text-sm font-medium shadow-[0_0_20px_rgba(59,130,246,0.35)] transition-all duration-300"
                >
                  {loading ? (
                    <div className="flex items-center gap-2">
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Sending Message...</span>
                    </div>
                  ) : (
                    <div className="flex items-center gap-2">
                      <Send className="w-4 h-4" />
                      <span>Send Direct Message</span>
                    </div>
                  )}
                </Button>
              </form>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}