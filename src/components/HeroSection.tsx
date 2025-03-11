"use client";
import { motion } from "framer-motion";
import { TypewriterEffect } from "./ui/typewriter-effect"; // Aceternity UI component

export default function HeroSection() {
  const words = [
    { text: "Transform" },
    { text: "your" },
    { text: "learning" },
    { text: "with" },
    { text: "AI-powered", className: "text-blue-500" },
    { text: "gamification." },
  ];

  return (
    <div className="flex flex-col items-center justify-center h-[40rem] bg-black">
      <TypewriterEffect words={words} />
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="text-gray-400 text-lg mt-4"
      >
        Engage, learn, and grow with personalized gamified experiences.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 2 }}
        className="mt-8"
      >
        <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all">
          Get Started
        </button>
      </motion.div>
    </div>
  );
}