"use client";
import { motion } from "framer-motion";
import { FaRocket, FaUsers, FaCode, FaChartLine, FaBrain, FaShieldAlt, FaMobileAlt, FaGraduationCap } from "react-icons/fa";

const FeaturesPage = () => {
  const features = [
    { 
      icon: <FaCode className="text-4xl" />,
      title: "Interactive Coding Environment",
      description: "Real-time code execution with built-in IDE, supporting multiple languages and frameworks",
      gradient: "from-purple-500 to-indigo-500"
    },
    { 
      icon: <FaUsers className="text-4xl" />,
      title: "Collaborative Learning",
      description: "Pair programming, group projects, and live code reviews with peers",
      gradient: "from-cyan-500 to-blue-500"
    },
    { 
      icon: <FaBrain className="text-4xl" />,
      title: "AI-Powered Mentorship",
      description: "Smart recommendations and instant feedback from our learning assistant",
      gradient: "from-green-500 to-emerald-500"
    },
    { 
      icon: <FaChartLine className="text-4xl" />,
      title: "Progress Analytics",
      description: "Detailed skill mapping and learning trajectory visualization",
      gradient: "from-pink-500 to-rose-500"
    },
    { 
      icon: <FaShieldAlt className="text-4xl" />,
      title: "Secure Environment",
      description: "Enterprise-grade security for all your code and learning data",
      gradient: "from-amber-500 to-orange-500"
    },
    { 
      icon: <FaMobileAlt className="text-4xl" />,
      title: "Mobile Optimization",
      description: "Continue learning on the go with full mobile support",
      gradient: "from-blue-500 to-indigo-600"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <div className="text-center mb-16 mt-12">
        <motion.h1 
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-6"
        >
          <FaRocket className="inline-block mr-4 mb-2" />
          Empower Your Learning Journey
        </motion.h1>
        <motion.p 
          className="text-xl text-gray-300 max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Discover cutting-edge features designed to accelerate your programming mastery
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
            className={`bg-gradient-to-br ${feature.gradient} rounded-2xl p-1 backdrop-blur-lg overflow-hidden`}
          >
            <div className="h-full bg-gray-900/80 p-6 rounded-2xl border border-white/10 hover:border-cyan-400/30 transition-all">
              <div className={`mb-4 inline-block p-4 rounded-xl bg-gradient-to-br ${feature.gradient}`}>
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div 
        className="bg-gradient-to-r from-purple-900/40 to-indigo-900/40 rounded-2xl p-8 mb-16 border border-white/10 backdrop-blur-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="flex-1">
            <h2 className="text-3xl font-bold mb-4">Structured Learning Paths</h2>
            <p className="text-gray-300 mb-6">
              Our curated roadmaps guide you from fundamentals to advanced specialization:
            </p>
            <div className="space-y-4">
              {['Foundations', 'Specialization', 'Projects', 'Career Prep'].map((stage, index) => (
                <div key={index} className="flex items-center gap-4 p-4 bg-gray-800/30 rounded-xl">
                  <div className="p-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500">
                    <FaGraduationCap className="text-xl" />
                  </div>
                  <div>
                    <h4 className="font-bold">{stage}</h4>
                    <p className="text-sm text-gray-400">
                      {['Core concepts', 'Advanced topics', 'Real-world projects', 'Interview prep'][index]}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex-1">
            <div className="aspect-video bg-gray-800/50 rounded-xl border border-dashed border-cyan-400/20 flex items-center justify-center">
              <span className="text-gray-400">Learning Path Visualization</span>
            </div>
          </div>
        </div>
      </motion.div>

      <div className="max-w-7xl mx-auto mb-16">
        <motion.div 
          className="bg-gradient-to-br from-cyan-900/40 to-blue-900/40 p-8 rounded-2xl border border-cyan-400/20 backdrop-blur-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <h2 className="text-3xl font-bold mb-8 text-center">Supported Technologies</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {['JavaScript', 'Python', 'Java', 'C++', 'React', 'Node.js', 'SQL', 'Git'].map((tech, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="p-4 bg-gray-800/30 rounded-xl text-center hover:border-cyan-400/30 border border-transparent transition-all"
              >
                <div className="text-4xl mb-2">
                  {['🚀', '🐍', '☕', '➕', '⚛️', '📦', '🗃️', '🔀'][index]}
                </div>
                <h3 className="font-bold">{tech}</h3>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto mb-16">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          {[
            { value: "10k+", label: "Active Learners", icon: "👨💻", color: "from-purple-500 to-indigo-500" },
            { value: "500+", label: "Learning Hours", icon: "⏳", color: "from-cyan-500 to-blue-500" },
            { value: "98%", label: "Satisfaction Rate", icon: "💖", color: "from-pink-500 to-rose-500" }
          ].map((stat, index) => (
            <div 
              key={index}
              className={`bg-gradient-to-br ${stat.color} p-1 rounded-2xl backdrop-blur-lg`}
            >
              <div className="h-full bg-gray-900/80 p-6 rounded-2xl border border-white/10 text-center">
                <div className="text-4xl mb-4">{stat.icon}</div>
                <p className="text-3xl font-bold mb-2">{stat.value}</p>
                <p className="text-gray-300">{stat.label}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      <motion.div 
        className="text-center mb-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Skills?</h2>
        <div className="flex justify-center gap-4">
          <button className="bg-gradient-to-r from-cyan-500 to-blue-500 px-8 py-4 rounded-xl text-lg hover:from-cyan-600 hover:to-blue-600 transition-all">
            Start Learning Free
          </button>
          <button className="border border-cyan-400/30 px-8 py-4 rounded-xl text-lg hover:bg-cyan-500/10 transition-all">
            Schedule Demo
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default FeaturesPage;