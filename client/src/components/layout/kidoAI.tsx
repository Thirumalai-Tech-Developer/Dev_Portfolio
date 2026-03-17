import { useState, useEffect, useRef } from "react";
import hljs from "highlight.js";
import "highlight.js/styles/github-dark.css";
import Kaido from "./Kaido.webp"

type Message = {
  role: "user" | "bot";
  text: string;
};

export default function KidoAI() {
  const [open, setOpen] = useState<boolean>(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const chatRef = useRef<HTMLDivElement | null>(null);

  const sendQuery = async (): Promise<void> => {
    if (!input.trim()) return;

    const userMsg: Message = { role: "user", text: input };
    setMessages((prev) => [...prev, userMsg]);

    const queryText = input;
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("https://kido-rag.onrender.com/quiz", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ query: queryText }),
      });

      const data: { answer?: string } = await res.json();

      const botMsg: Message = {
        role: "bot",
        text: data.answer || "No response",
      };

      setMessages((prev) => [...prev, botMsg]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        { role: "bot", text: "Server error 🚨" },
      ]);
    }

    setLoading(false);
  };

  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }

    document.querySelectorAll("pre code").forEach((block) => {
      hljs.highlightElement(block as HTMLElement);
    });
  }, [messages]);

  return (
    <>
      {/* Floating Button */}
      <div
        onClick={() => setOpen(!open)}
        className={`fixed bottom-4 right-4 sm:bottom-6 sm:right-6 
        z-[99999] w-14 h-14 sm:w-16 sm:h-16 
        rounded-full cursor-pointer shadow-lg overflow-hidden 
        border-2 border-purple-500 transition ${
        loading 
            ? "animate-pulse ring-4 ring-purple-500/40" 
            : "hover:scale-110"
        }`}
        >
        <img
          src={Kaido}
          alt="Kaido"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Chat Box */}
      {open && (
        <div 
        className="
        fixed z-[99999] 
        bottom-20 right-4 left-4   /* mobile full width */
        sm:left-auto sm:right-6 sm:w-80  /* desktop */
        bg-black/95 text-white 
        rounded-2xl shadow-2xl 
        flex flex-col overflow-hidden 
        border border-purple-600
        ">
    
          {/* Header */}
          <div className="p-3 font-bold border-b border-gray-700 flex items-center gap-2">
            <span className="text-purple-400">Kaido AI</span>
            <span className="text-xs text-gray-400">⚡ powered by OpenRouter</span>
          </div>

          {/* Messages */}
          <div
            ref={chatRef}
            className="h-72 overflow-y-auto p-3 space-y-2 text-sm"
          >
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`p-2 rounded-lg ${
                  msg.role === "user"
                    ? "bg-purple-600 text-right ml-auto max-w-[80%]"
                    : "bg-gray-800 max-w-[80%]"
                }`}
              >
                <div
                  dangerouslySetInnerHTML={{ __html: msg.text }}
                />
              </div>
            ))}

            {loading && (
              <div className="text-gray-400 text-xs">
                Kaido is thinking... ⚡
              </div>
            )}
          </div>

          {/* Input */}
          <div className="flex border-t border-gray-700">
            <input
              className="flex-1 p-2 bg-black outline-none text-sm"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about me..."
              onKeyDown={(e) => {
                if (e.key === "Enter") sendQuery();
              }}
            />
            <button
              onClick={sendQuery}
              className="px-4 bg-purple-600 hover:bg-purple-700 text-sm"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
}