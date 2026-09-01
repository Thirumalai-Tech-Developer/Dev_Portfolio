import { useState, useEffect, useRef } from "react";
import hljs from "highlight.js";
import "highlight.js/styles/github-dark.css";
import { marked } from "marked";
import Kaido from "./Kaido.webp";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Bot, 
  X, 
  Send, 
  Sparkles, 
  RotateCcw, 
  MessageSquare, 
  Zap, 
  Terminal,
  ChevronDown
} from "lucide-react";
import { Button } from "@/components/ui/button";

type Message = {
  role: "user" | "bot";
  text: string;
};

export default function KidoAI() {
  const [open, setOpen] = useState<boolean>(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "bot",
      text: "👋 Hi there! I'm **Kaido AI**, Thirumalai's personal AI assistant. Ask me anything about his **Kratos AI Agent**, ComfyUI custom nodes, LoRA fine-tuning, RAG architectures, or how to hire him as an **AI / ML Engineer**!",
    },
  ]);
  const [input, setInput] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const chatRef = useRef<HTMLDivElement | null>(null);

  const quickPrompts = [
    "Tell me about Kratos AI Agent",
    "What AI & RAG systems have you built?",
    "What is your experience with ComfyUI & LoRA?",
    "How can I get in touch to hire you?",
  ];

  const sendQuery = async (queryOverride?: string): Promise<void> => {
    const textToSend = queryOverride || input;
    if (!textToSend.trim()) return;

    const userMsg: Message = { role: "user", text: textToSend };
    setMessages((prev) => [...prev, userMsg]);

    setInput("");
    setLoading(true);

    try {
      const res = await fetch("https://kido-rag.onrender.com/quiz", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ query: textToSend }),
      });

      const data: { answer?: string } = await res.json();
      const formatted = marked.parse(data.answer || "No response received.");

      const botMsg: Message = {
        role: "bot",
        text: formatted as string,
      };

      setMessages((prev) => [...prev, botMsg]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        { 
          role: "bot", 
          text: "⚡ *Note:* Thirumalai is an **AI / ML Engineer** with 1.5+ years of hands-on experience in Python, LangChain, Autonomous Agents, ComfyUI, and RAG architectures. Feel free to contact him directly at [thirutechdeveloper@gmail.com](mailto:thirutechdeveloper@gmail.com)!" 
        },
      ]);
    }

    setLoading(false);
  };

  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }

    setTimeout(() => {
      hljs.highlightAll();
    }, 50);
  }, [messages, loading]);

  const clearChat = () => {
    setMessages([
      {
        role: "bot",
        text: "👋 Chat cleared! How else can I assist you with Thirumalai's portfolio?",
      },
    ]);
  };

  return (
    <>
      {/* Floating Kaido AI Avatar Trigger */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
        className="fixed bottom-5 right-5 sm:bottom-7 sm:right-7 z-50 flex items-center gap-3"
      >
        {/* Floating Tooltip Pill */}
        {!open && (
          <motion.div
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 1.5 }}
            onClick={() => setOpen(true)}
            className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full glass-panel border-purple-500/30 text-xs font-mono text-purple-300 shadow-xl cursor-pointer hover:border-purple-500/60 transition-colors"
          >
            <Sparkles className="w-3.5 h-3.5 text-purple-400 animate-pulse" />
            <span>Ask Kaido AI</span>
          </motion.div>
        )}

        {/* Floating Circular Trigger */}
        <div
          onClick={() => setOpen(!open)}
          className="relative group cursor-pointer"
        >
          {/* Pulsing ring aura */}
          <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-primary via-purple-600 to-pink-500 opacity-75 blur-md group-hover:opacity-100 transition duration-500 group-hover:scale-110 animate-pulse-glow" />

          <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full overflow-hidden border-2 border-purple-400/80 bg-black/80 shadow-2xl p-[2px]">
            <img
              src={Kaido}
              alt="Kaido AI"
              className="w-full h-full object-cover rounded-full group-hover:scale-110 transition-transform duration-300"
            />

            {/* Online green indicator badge */}
            <span className="absolute bottom-0.5 right-0.5 w-3.5 h-3.5 rounded-full bg-emerald-500 border-2 border-black" />
          </div>
        </div>
      </motion.div>

      {/* Floating Chat Modal */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.95 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="
              fixed z-[9999]
              bottom-24 right-4 left-4
              sm:left-auto sm:right-7 sm:w-[26rem]
              glass-panel bg-black/90
              rounded-3xl shadow-[0_25px_60px_rgba(0,0,0,0.8)]
              border border-purple-500/40
              flex flex-col overflow-hidden
              backdrop-blur-2xl
            "
          >
            {/* Chat Modal Header */}
            <div className="p-4 border-b border-white/10 bg-white/[0.03] flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full overflow-hidden border border-purple-400/50">
                  <img src={Kaido} alt="Kaido" className="w-full h-full object-cover" />
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="font-bold text-sm text-foreground">Kaido AI Assistant</span>
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  </div>
                  <span className="text-[10px] text-purple-300 font-mono">
                    ⚡ RAG Powered Agent
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-1">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={clearChat}
                  title="Clear Chat"
                  className="w-8 h-8 rounded-full text-muted-foreground hover:text-white"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setOpen(false)}
                  className="w-8 h-8 rounded-full text-muted-foreground hover:text-white"
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Chat Messages Container */}
            <div
              ref={chatRef}
              className="h-80 overflow-y-auto p-4 space-y-3.5 text-xs font-sans"
            >
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`flex gap-2.5 ${
                    msg.role === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  {msg.role === "bot" && (
                    <div className="w-6 h-6 rounded-full overflow-hidden flex-shrink-0 border border-purple-400/30 mt-0.5">
                      <img src={Kaido} alt="Kaido" className="w-full h-full object-cover" />
                    </div>
                  )}

                  <div
                    className={`p-3 rounded-2xl max-w-[85%] leading-relaxed ${
                      msg.role === "user"
                        ? "bg-gradient-to-r from-primary to-purple-600 text-white rounded-br-none shadow-md"
                        : "glass-card bg-white/[0.05] border border-white/10 text-foreground/90 rounded-bl-none prose prose-invert prose-xs max-w-none"
                    }`}
                  >
                    <div
                      dangerouslySetInnerHTML={{ __html: msg.text }}
                    />
                  </div>
                </div>
              ))}

              {loading && (
                <div className="flex gap-2.5 items-center text-muted-foreground text-xs font-mono">
                  <div className="w-6 h-6 rounded-full overflow-hidden flex-shrink-0 border border-purple-400/30">
                    <img src={Kaido} alt="Kaido" className="w-full h-full object-cover" />
                  </div>
                  <div className="px-3 py-2 rounded-2xl glass-card border border-white/10 flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-bounce" style={{ animationDelay: "0ms" }} />
                    <div className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-bounce" style={{ animationDelay: "150ms" }} />
                    <div className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-bounce" style={{ animationDelay: "300ms" }} />
                  </div>
                </div>
              )}
            </div>

            {/* Quick Prompts Chips */}
            <div className="px-3 py-2 border-t border-white/[0.06] bg-white/[0.01] flex gap-1.5 overflow-x-auto no-scrollbar">
              {quickPrompts.map((prompt, idx) => (
                <button
                  key={idx}
                  onClick={() => sendQuery(prompt)}
                  className="px-2.5 py-1 rounded-full text-[11px] font-mono whitespace-nowrap bg-white/[0.04] hover:bg-purple-500/20 hover:border-purple-500/40 border border-white/10 text-muted-foreground hover:text-purple-300 transition-all flex-shrink-0"
                >
                  {prompt}
                </button>
              ))}
            </div>

            {/* Input Bar */}
            <div className="p-3 border-t border-white/10 bg-black/60 flex items-center gap-2">
              <input
                className="flex-1 px-3.5 py-2.5 bg-white/[0.05] border border-white/10 rounded-xl outline-none text-xs text-foreground placeholder:text-muted-foreground/60 focus:border-purple-500/60 transition-colors"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about projects, AI skills, or experience..."
                onKeyDown={(e) => {
                  if (e.key === "Enter") sendQuery();
                }}
              />
              <Button
                size="icon"
                onClick={() => sendQuery()}
                disabled={loading || !input.trim()}
                className="h-9 w-9 rounded-xl bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 text-white flex-shrink-0"
              >
                <Send className="w-3.5 h-3.5" />
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}