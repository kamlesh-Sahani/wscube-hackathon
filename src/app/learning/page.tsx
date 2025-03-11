"use client";
import { motion } from "framer-motion";
import {
  FaBook,
  FaChartLine,
  FaTrophy,
  FaTasks,
  FaUsers,
  FaRegClock,
  FaLockOpen,
  FaRegCheckCircle,
} from "react-icons/fa";

const LearningPathPage = () => {
  const modules = [
    {
      title: "Programming Fundamentals",
      status: "completed",
      duration: "2h",
      progress: 100,
      xp: 200,
    },
    {
      title: "Object-Oriented Programming",
      status: "current",
      duration: "4h",
      progress: 65,
      xp: 400,
    },
    {
      title: "Data Structures & Algorithms",
      status: "upcoming",
      duration: "6h",
      progress: 0,
      xp: 600,
    },
    {
      title: "Web Development Basics",
      status: "upcoming",
      duration: "5h",
      progress: 0,
      xp: 500,
    },
    {
      title: "Database Design",
      status: "upcoming",
      duration: "3h",
      progress: 0,
      xp: 300,
    },
  ];

  const achievements = [
    { name: "Fast Learner", icon: "🚀", earned: true, xp: 150 },
    { name: "Code Master", icon: "💻", earned: false, xp: 300 },
    { name: "Bug Hunter", icon: "🐞", earned: true, xp: 200 },
    { name: "Streak Champion", icon: "🔥", earned: true, xp: 250 },
  ];

  const resources = [
    { type: "Cheatsheet", title: "Python Syntax Guide", format: "PDF" },
    { type: "Exercise", title: "30 Coding Challenges", format: "Interactive" },
    { type: "Project", title: "Build a Calculator", format: "Tutorial" },
  ];

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <div className="text-center my-12">
        <motion.h1
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-4"
        >
          <FaBook className="inline-block mr-3" />
          Full-Stack Development Path
        </motion.h1>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Master full-stack development through this structured learning
          journey. Track your progress, earn achievements, and become job-ready.
        </p>
      </div>

      <motion.div
        className="bg-gradient-to-r from-purple-900/40 to-indigo-900/40 p-6 rounded-2xl border border-cyan-400/20 backdrop-blur-xl mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-cyan-400">
              <FaChartLine className="text-xl" />
              <span className="font-bold">Your Progress</span>
            </div>
            <div className="h-2 bg-gray-700/50 rounded-full w-64">
              <div
                className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full transition-all duration-500"
                style={{ width: "30%" }}
              />
            </div>
            <p className="text-gray-400 text-sm">30% Complete</p>
          </div>

          <div className="grid grid-cols-2 gap-4 text-center">
            <div className="bg-gray-800/30 p-4 rounded-xl">
              <p className="text-2xl font-bold text-cyan-400">Lv. 12</p>
              <p className="text-sm text-gray-400">Current Level</p>
            </div>
            <div className="bg-gray-800/30 p-4 rounded-xl">
              <p className="text-2xl font-bold text-purple-400">🔥 7d</p>
              <p className="text-sm text-gray-400">Learning Streak</p>
            </div>
          </div>
        </div>
      </motion.div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
        {modules.map((module, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-6 rounded-2xl border border-white/10 backdrop-blur-lg hover:border-cyan-400/30 transition-all"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <div
                    className={`p-2 rounded-lg ${
                      module.status === "completed"
                        ? "bg-green-500/20"
                        : module.status === "current"
                        ? "bg-cyan-500/20"
                        : "bg-gray-700/50"
                    }`}
                  >
                    {module.status === "completed" ? (
                      <FaRegCheckCircle className="text-green-400" />
                    ) : module.status === "current" ? (
                      <FaRegClock className="text-cyan-400" />
                    ) : (
                      <FaLockOpen className="text-gray-400" />
                    )}
                  </div>
                  <h3 className="text-lg font-bold">{module.title}</h3>
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <p className="text-sm text-gray-400">{module.duration}</p>
                    <div className="flex items-center gap-2 text-sm">
                      <span className="text-cyan-400">+{module.xp} XP</span>
                    </div>
                  </div>
                  <button
                    className={`px-4 py-2 rounded-lg flex items-center gap-2 ${
                      module.status === "completed"
                        ? "bg-green-600/30 text-green-400"
                        : module.status === "current"
                        ? "bg-cyan-600/30 text-cyan-400"
                        : "bg-gray-700/50 text-gray-400"
                    }`}
                  >
                    {module.status === "completed"
                      ? "Review"
                      : module.status === "current"
                      ? "Continue"
                      : "Start"}
                  </button>
                </div>
              </div>
            </div>

            {module.status === "current" && (
              <div className="mt-4">
                <div className="h-1 bg-gray-700/50 rounded-full">
                  <div
                    className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full transition-all duration-500"
                    style={{ width: `${module.progress}%` }}
                  />
                </div>
              </div>
            )}
          </motion.div>
        ))}
      </div>
      <div className="grid grid-cols-1 gap-8 mb-16">
      <motion.div
        className="bg-gradient-to-br from-emerald-900/40 to-cyan-900/40 p-8 rounded-3xl border border-emerald-400/30 backdrop-blur-xl shadow-lg"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold flex items-center gap-3 text-emerald-300">
            <FaTasks className="text-emerald-400" size={24} />
            Learning Resources
          </h2>
          <button className="bg-cyan-600 hover:bg-cyan-700 px-4 py-2 rounded-xl text-white text-sm transition-all">
            View All
          </button>
        </div>

        <div className="space-y-4">
          {resources.map((resource, index) => (
            <motion.div
              key={index}
              className="p-5 bg-gray-800/40 rounded-2xl hover:bg-gray-800/60 transition-all cursor-pointer flex items-center justify-between"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >

              <div>
                <h3 className="font-semibold text-lg text-white/90">{resource.title}</h3>
                <p className="text-sm text-gray-400 mt-1">
                  {resource.type} • {resource.format}
                </p>
              </div>
              <button className="bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 px-4 py-2 rounded-lg text-sm transition-all">
                Open
              </button>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
      <motion.div
        className="bg-gradient-to-br from-amber-900/40 to-orange-900/40 p-6 rounded-2xl border border-amber-400/20 backdrop-blur-xl mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <h2 className="text-xl font-bold mb-6 flex items-center gap-2 text-amber-300">
          <FaUsers className="text-amber-400" /> Study Groups
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {["Beginner Group", "Intermediate Squad", "Advanced Team"].map(
            (group, index) => (
              <div key={index} className="p-4 bg-gray-800/30 rounded-xl">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-semibold">{group}</h3>
                  <span className="text-sm bg-amber-500/20 text-amber-400 px-2 py-1 rounded-full">
                    {["3", "7", "5"][index]} members
                  </span>
                </div>
                <button className="w-full bg-amber-500/20 text-amber-400 py-2 rounded-lg hover:bg-amber-500/30 transition-all">
                  Join Community
                </button>
              </div>
            )
          )}
        </div>
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <motion.div
          className="bg-gray-800/30 p-6 rounded-2xl backdrop-blur-xl border border-white/10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <h2 className="text-xl font-bold mb-6">📈 Learning Statistics</h2>
          <div className="grid grid-cols-2 gap-4">
            {[
              { label: "Completed Modules", value: "8", icon: "✅" },
              { label: "Total XP Earned", value: "3200", icon: "⚡" },
              { label: "Avg. Score", value: "92%", icon: "📊" },
              { label: "Hours Spent", value: "45h", icon: "⏳" },
            ].map((stat, index) => (
              <div key={index} className="p-4 bg-gray-700/20 rounded-xl">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{stat.icon}</span>
                  <div>
                    <p className="text-2xl font-bold">{stat.value}</p>
                    <p className="text-sm text-gray-400">{stat.label}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
        <motion.div
          className="bg-gradient-to-br from-cyan-900/40 to-blue-900/40 p-6 rounded-2xl border border-cyan-400/20 backdrop-blur-xl text-center flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <div>
            <h2 className="text-2xl font-bold mb-4">Ready to Level Up? 🚀</h2>
            <p className="text-gray-300 mb-6">
              Continue your learning journey and unlock new skills
            </p>
            <button className="bg-gradient-to-r from-cyan-500 to-blue-500 px-8 py-3 rounded-xl hover:from-cyan-600 hover:to-blue-600 transition-all flex items-center gap-2 mx-auto">
              <FaBook /> Resume Learning
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default LearningPathPage;
