"use client";
import { motion } from "framer-motion";
import { FaRocket, FaUser, FaBuilding, FaCheck, FaCrown } from "react-icons/fa";

const PricingPage = () => {
  const tiers = [
    {
      name: "Starter",
      price: { monthly: "0", annually: "0" },
      features: ["Basic Coding Challenges", "Community Support", "3 Projects", "Daily Streaks"],
      cta: "Get Started",
      gradient: "from-gray-500 to-gray-700",
      icon: <FaUser />
    },
    {
      name: "Developer",
      price: { monthly: "29", annually: "25" },
      features: ["All Starter Features", "Pro Challenges", "Unlimited Projects", "1:1 Code Reviews", "Priority Support"],
      cta: "Go Pro",
      gradient: "from-cyan-500 to-blue-500",
      icon: <FaRocket />,
      popular: true
    },
    {
      name: "Enterprise",
      price: { monthly: "99", annually: "89" },
      features: ["All Pro Features", "Team Management", "Custom Content", "SSO & Security", "Dedicated Support"],
      cta: "Contact Sales",
      gradient: "from-purple-500 to-indigo-500",
      icon: <FaBuilding />
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <div className="text-center mb-16 mt-12 max-w-4xl mx-auto">
        <motion.h1 
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-6"
        >
          <FaCrown className="inline-block mr-3 mb-2" />
          Simple, Transparent Pricing
        </motion.h1>
        <motion.p 
          className="text-xl text-gray-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Start learning for free, upgrade when you're ready
        </motion.p>
        <motion.div 
          className="inline-flex items-center bg-gray-800/50 p-1 rounded-xl mt-8 backdrop-blur-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <button className="px-6 py-2 rounded-xl bg-cyan-500/20 text-cyan-400">Monthly</button>
          <button className="px-6 py-2 rounded-xl hover:bg-gray-700/30 transition-all">Annual (Save 20%)</button>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16">
        {tiers.map((tier, index) => (
          <motion.div
            key={tier.name}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: tier.popular ? 1.05 : 1.02 }}
            className={`relative bg-gradient-to-br ${tier.gradient} rounded-2xl p-1 backdrop-blur-lg ${tier.popular ? "shadow-2xl shadow-cyan-500/30" : ""}`}
          >
            {tier.popular && (
              <div className="absolute top-0 right-0 bg-cyan-500 text-black px-4 py-1 rounded-bl-xl rounded-tr-xl text-sm font-bold">
                Most Popular
              </div>
            )}
            
            <div className="h-full bg-gray-900/80 p-8 rounded-2xl border border-white/10">
              <div className={`mb-6 inline-block p-4 rounded-xl bg-gradient-to-br ${tier.gradient}`}>
                {tier.icon}
              </div>
              
              <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
              <div className="flex items-baseline gap-2 mb-6">
                <span className="text-4xl font-bold">${tier.price.monthly}</span>
                <span className="text-gray-400">/month</span>
              </div>

              <ul className="space-y-3 mb-8">
                {tier.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <FaCheck className="text-green-400" />
                    {feature}
                  </li>
                ))}
              </ul>

              <button 
                className={`w-full py-3 rounded-xl transition-all ${
                  tier.popular 
                    ? "bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600"
                    : "bg-gray-800 hover:bg-gray-700"
                }`}
              >
                {tier.cta}
              </button>
            </div>
          </motion.div>
        ))}
      </div>
      <motion.div 
        className="max-w-7xl mx-auto mb-16 bg-gray-900/50 rounded-2xl border border-white/10 backdrop-blur-xl p-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <h2 className="text-2xl font-bold mb-8">Plan Comparison</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-left border-b border-white/10">
                <th className="pb-4">Feature</th>
                <th className="pb-4">Starter</th>
                <th className="pb-4">Developer</th>
                <th className="pb-4">Enterprise</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Code Challenges", "✓", "✓", "✓"],
                ["Projects", "3", "Unlimited", "Unlimited"],
                ["Code Reviews", "×", "✓", "✓"],
                ["Priority Support", "×", "✓", "✓"],
                ["Team Management", "×", "×", "✓"],
              ].map((row, idx) => (
                <tr key={idx} className="border-b border-white/10">
                  {row.map((cell, cellIdx) => (
                    <td key={cellIdx} className="py-4">
                      {cell === "✓" ? <FaCheck className="text-green-400" /> : 
                       cell === "×" ? <span className="text-red-400">×</span> : cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
      <div className="max-w-7xl mx-auto mb-16">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <div className="p-6 bg-gray-800/50 rounded-2xl border border-white/10">
            <div className="text-3xl font-bold mb-2">1M+</div>
            <div className="text-gray-400">Developers Trained</div>
          </div>
          <div className="p-6 bg-cyan-500/20 rounded-2xl border border-cyan-400/30">
            <div className="text-3xl font-bold mb-2">4.9/5</div>
            <div className="text-cyan-400">Average Rating</div>
          </div>
          <div className="p-6 bg-gray-800/50 rounded-2xl border border-white/10">
            <div className="text-3xl font-bold mb-2">30-day</div>
            <div className="text-gray-400">Money Back Guarantee</div>
          </div>
        </motion.div>
      </div>
      <motion.div 
        className="text-center mb-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <h2 className="text-2xl font-bold mb-6">Still have questions?</h2>
        <div className="flex justify-center gap-4">
          <button className="bg-gradient-to-r from-cyan-500 to-blue-500 px-8 py-4 rounded-xl text-lg hover:from-cyan-600 hover:to-blue-600 transition-all">
            Contact Support
          </button>
          <button className="border border-cyan-400/30 px-8 py-4 rounded-xl text-lg hover:bg-cyan-500/10 transition-all">
            Read FAQs
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default PricingPage;