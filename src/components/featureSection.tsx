"use client";
import { motion } from "framer-motion";

const features = [
  {
    title: "Points & Badges",
    description: "Earn points and unlock badges as you complete tasks.",
    icon: "🏆",
  },
  {
    title: "AI-Powered Personalization",
    description: "Get tailored recommendations based on your learning style.",
    icon: "🤖",
  },
  {
    title: "Leaderboards",
    description: "Compete with peers and climb the leaderboard.",
    icon: "📊",
  },
];

export default function FeaturesSection() {
  return (
    <div className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-white mb-12">
          Key Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-gray-800 p-6 rounded-lg shadow-lg text-center"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}