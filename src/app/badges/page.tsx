"use client";
import { motion } from "framer-motion";
import { FaCrown, FaFire, FaLock } from "react-icons/fa";

const BadgePage = () => {
  const badges = [
    { name: "Code Ninja", icon: "💻", earned: true, type: "coding", xp: 500 },
    { name: "Streak Master", icon: "🔥", earned: true, type: "streak", xp: 300 },
    { name: "Quick Learner", icon: "🚀", earned: false, type: "progress", xp: 200 },
    { name: "Bug Hunter", icon: "🔍", earned: false, type: "debugging", xp: 400 },
    { name: "Speed Coder", icon: "⚡", earned: true, type: "efficiency", xp: 450 },
  ];

  const otherPlayers = [
    { name: "Kamlesh Kumar", badges: 8, level: 15, xp: 4200 },
    { name: "Aman Khowal", badges: 5, level: 12, xp: 3800 },
    { name: "Sameer Kumar", badges: 7, level: 14, xp: 4000 },
  ];

  const getBadgeGradient = (type: string) => {
    switch(type) {
      case 'coding': return 'from-purple-500 to-indigo-600';
      case 'streak': return 'from-orange-500 to-red-600';
      case 'progress': return 'from-blue-500 to-cyan-600';
      case 'debugging': return 'from-green-500 to-emerald-600';
      default: return 'from-pink-500 to-rose-600';
    }
  };

  return (
    <div className="min-h-screen bg-black text-white py-10 px-4 sm:px-8 lg:px-16">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center my-12 space-y-4"
      >
        <h1 className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
          <motion.span 
            animate={{ rotate: [0, 15, -15, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="inline-block mr-3"
          >
            🏆
          </motion.span>
          Achievement Hall
        </h1>
        <p className="text-gray-300 max-w-3xl mx-auto text-lg">
          Forge your legacy through challenges and skill mastery. Each badge tells a story of dedication.
        </p>
      </motion.div>
      <motion.div
        initial={{ scale: 0.95 }}
        animate={{ scale: 1 }}
        className="max-w-4xl mx-auto bg-gradient-to-br from-gray-800 to-gray-700 p-6 rounded-2xl shadow-2xl mb-12 backdrop-blur-lg border border-white/10"
      >
        <div className="flex items-center gap-6">
          <div className="relative">
            <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center text-3xl">
              👑
            </div>
            <div className="absolute -bottom-2 -right-2 bg-yellow-500 text-black px-2 py-1 rounded-full text-xs font-bold flex items-center">
              <FaCrown className="mr-1" /> TOP 5%
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold flex items-center gap-2">
             Saad Mehmood
              <span className="text-sm bg-green-500/20 text-green-400 px-2 py-1 rounded-full">
                🔥 Active Streak
              </span>
            </h2>
            <div className="flex gap-4 mt-2">
              <div className="bg-gray-700/50 px-3 py-1 rounded-full">
                <span className="text-cyan-400">Level 12</span>
              </div>
              <div className="bg-gray-700/50 px-3 py-1 rounded-full">
                ⚡ <span className="text-blue-400">3200 XP</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold text-cyan-400 mb-8 border-l-4 border-cyan-500 pl-4">
          Your Collected Honors
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {badges.map((badge, index) => (
            <motion.div
              key={badge.name}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`relative group overflow-hidden rounded-xl p-1 ${
                badge.earned ? 'cursor-pointer' : 'cursor-not-allowed'
              }`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${getBadgeGradient(badge.type)} opacity-30 blur-3xl`} />
              
              <div className={`relative rounded-xl p-6 backdrop-blur-lg border ${
                badge.earned 
                  ? `border-white/10 bg-gray-800/50 hover:bg-gray-700/50`
                  : 'border-red-500/30 bg-gray-900/50'
              }`}>
                {!badge.earned && (
                  <div className="absolute top-4 right-4 text-red-400">
                    <FaLock className="animate-pulse" />
                  </div>
                )}

                <div className="flex items-center gap-4">
                  <motion.div 
                    className={`text-5xl p-4 rounded-lg ${
                      badge.earned 
                        ? 'bg-gradient-to-br from-white/10 to-transparent'
                        : 'grayscale opacity-50'
                    }`}
                    whileHover={badge.earned ? { rotate: 15 } : {}}
                  >
                    {badge.icon}
                  </motion.div>
                  <div>
                    <h3 className={`text-xl font-bold ${
                      badge.earned 
                        ? 'text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400'
                        : 'text-gray-500'
                    }`}>
                      {badge.name}
                    </h3>
                    <p className="text-sm text-gray-400 mt-1">
                      {badge.earned ? 'Unlocked' : 'Locked'} • {badge.xp} XP
                    </p>
                  </div>
                </div>

                {badge.earned && (
                  <motion.div 
                    className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 to-blue-500"
                    animate={{ width: ['0%', '100%', '0%'] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-cyan-400 mb-8 border-l-4 border-cyan-500 pl-4">
          Champions Arena
        </h2>
        <div className="space-y-4">
          {otherPlayers.map((player, index) => (
            <motion.div
              key={player.name}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-gradient-to-r from-gray-800 to-gray-700/50 p-4 rounded-xl backdrop-blur-lg border border-white/10 hover:border-cyan-500/30 transition-all"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-500 rounded-full flex items-center justify-center font-bold">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="font-bold">{player.name}</h3>
                    <p className="text-sm text-gray-400">
                      Level {player.level} • {player.xp} XP
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2 bg-gray-900/50 px-3 py-1 rounded-full">
                  <FaFire className="text-orange-400" />
                  <span className="text-amber-400">{player.badges}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="text-center mt-16"
      >
        <p className="text-lg text-gray-300">
          Ready to carve your name in the halls of mastery?{'\u00A0'}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 font-bold">
            The next challenge awaits...
          </span>
        </p>
      </motion.div>
    </div>
  );
};

export default BadgePage;