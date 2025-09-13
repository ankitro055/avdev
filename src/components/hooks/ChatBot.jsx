"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiSend, FiX } from "react-icons/fi";
import { FaRobot } from "react-icons/fa";

// Predefined service details
const services = {
  "web development": {
    keywords: ["web development", "website", "web dev", "website cost", "web packages", "web pricing"],
    description: "We create responsive, high-performance websites with modern frameworks like Next.js, React, and Node.js.",
    packages: [
      "Basic Website: ₹25,000 - ₹50,000",
      "E-commerce: ₹75,000 - ₹2,00,000",
      "Custom Web App: ₹1,50,000+"
    ],
    timeline: "2-8 weeks depending on complexity"
  },
  "app development": {
    keywords: ["app development", "mobile app", "app dev", "app cost", "app pricing", "app timeline"],
    description: "Native and cross-platform mobile app development for iOS and Android.",
    packages: [
      "Basic App: ₹1,00,000 - ₹2,50,000",
      "Enterprise App: ₹3,00,000+"
    ],
    timeline: "3-12 weeks"
  },
  "seo": {
    keywords: ["seo", "search engine optimization", "seo services", "seo packages", "improve ranking"],
    description: "Comprehensive SEO services to improve your search rankings and organic traffic.",
    packages: [
      "Basic SEO: ₹15,000/month",
      "E-commerce SEO: ₹25,000/month",
      "Enterprise SEO: ₹50,000+/month"
    ],
    timeline: "Visible results in 3-6 months"
  },
  "marketing": {
    keywords: ["marketing", "digital marketing", "social media", "ppc", "content marketing"],
    description: "Digital marketing strategies including social media, PPC, and content marketing.",
    packages: [
      "Social Media Management: ₹20,000/month",
      "PPC Campaigns: ₹15,000+ ad spend",
      "Full Service: ₹50,000+/month"
    ]
  },
  "video editing": {
    keywords: ["video editing", "video production", "animation", "ad video"],
    description: "Professional video editing for ads, social media, and corporate videos.",
    packages: [
      "Basic Editing: ₹5,000/video",
      "Advanced Editing: ₹15,000/video",
      "Animation: ₹25,000+/video"
    ],
    timeline: "1-5 days per video"
  },
  "support": {
    keywords: ["support", "maintenance", "help", "customer support"],
    description: "24/7 customer support and maintenance services.",
    packages: [
      "Basic Support: ₹10,000/month",
      "Priority Support: ₹25,000/month"
    ]
  }
};

// Predefined FAQ knowledge base
const knowledgeBase = [
  { keywords: ["services", "what you do", "offer"], answer: "We offer: Web Development, App Development, SEO, Digital Marketing, Video Editing, and Support Services." },
  { keywords: ["portfolio", "work", "projects"], answer: "You can view our portfolio at https://agency.com/portfolio" },
  { keywords: ["team", "employees", "staff"], answer: "We have a team of 25+ experts including developers, designers, and marketers." },
  { keywords: ["contact", "call", "email", "get in touch", "phone", "number"], answer: "📧 Email: ankitroy5575@gmail.com\n📞 Phone: +91 9718659236\n📍 Location: Mumbai, India" },
  { keywords: ["process", "workflow", "how you work"], answer: "Our process: 1) Discovery 2) Design 3) Development 4) Testing 5) Launch" }
];

export default function AIChatBot() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [open, setOpen] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const addBotMessage = (text) => {
    setIsTyping(true);
    setTimeout(() => {
      setMessages((prev) => [...prev, { sender: "bot", text }]);
      setIsTyping(false);
    }, Math.min(text.length * 20, 1000));
  };

  const processQuery = (query) => {
    const lowerQuery = query.toLowerCase();

    for (const [service, details] of Object.entries(services)) {
      if (details.keywords.some((keyword) => lowerQuery.includes(keyword))) {
        let response = `SERVICE: ${service.toUpperCase()}\n\n${details.description}\n\nPACKAGES:\n${details.packages.join("\n")}`;
        if (details.timeline) response += `\n\nTIMELINE: ${details.timeline}`;
        return response;
      }
    }

    const found = knowledgeBase.find((item) => item.keywords.some((keyword) => lowerQuery.includes(keyword)));
    if (found) return found.answer;

    return "I’m still learning! Please email 📧 ankitroy5575@gmail.com or call 📞 +91 9718659236 for details.";
  };

  const sendMessage = () => {
    if (!input.trim()) return;
    const userMsg = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMsg]);
    const botResponse = processQuery(input);
    setInput("");
    setTimeout(() => addBotMessage(botResponse), 500);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Floating Button */}
      {!open && (
        <motion.button
          onClick={() => setOpen(true)}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
          className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-600 to-blue-500 text-white flex items-center justify-center shadow-xl"
        >
          <FaRobot className="text-2xl" />
        </motion.button>
      )}

      {/* Chat Window */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="w-80 h-[500px] bg-white rounded-xl shadow-2xl overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-purple-600 to-blue-500 p-4 text-white flex justify-between items-center">
              <div className="flex items-center space-x-2">
                <FaRobot className="text-xl" />
                <h3 className="font-semibold">Agency Assistant</h3>
              </div>
              <button onClick={() => setOpen(false)} className="p-1 rounded-full hover:bg-white/20">
                <FiX className="text-lg" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 p-4 overflow-y-auto bg-gray-50">
              {messages.map((msg, i) => (
                <div key={i} className={`mb-3 flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`max-w-[80%] rounded-lg px-4 py-2 whitespace-pre-wrap ${
                      msg.sender === "user" ? "bg-blue-500 text-white" : "bg-white text-gray-800 shadow-sm"
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
              {isTyping && <div className="text-sm text-gray-500">Typing...</div>}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="border-t p-3 bg-white">
              <div className="flex items-center space-x-2">
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                  placeholder="Ask about our services..."
                  className="flex-1 border border-gray-300 rounded-full px-4 py-2"
                />
                <motion.button
                  onClick={sendMessage}
                  whileHover={{ scale: 1.05 }}
                  className="w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center"
                >
                  <FiSend />
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
