"use client"
import { motion } from 'framer-motion';

const BadgeGrid = () => {
  const badges = [
    { name: 'Code Ninja', icon: '💻', earned: true },
    { name: 'Streak Master', icon: '🔥', earned: true },
    { name: 'Quick Learner', icon: '🚀', earned: false },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
      {badges.map((badge) => (
        <motion.div
          key={badge.name}
          className={`relative p-6 rounded-2xl text-center transition-all duration-300 ${
            badge.earned 
              ? 'bg-gradient-to-br from-green-400 to-blue-500 shadow-2xl' 
              : 'bg-gray-200 opacity-70'
          }`}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={badge.earned ? { 
            scale: 1.08,
            rotate: [-5, 5],
            transition: { duration: 0.4, ease: 'easeInOut' }
          } : {}}
        >
          {badge.earned && (
            <motion.div
              className="absolute inset-0 rounded-2xl bg-gradient-to-br from-green-200/40 to-blue-200/40 blur-xl"
              animate={{ opacity: [0.4, 0.6, 0.4] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
          )}
          <motion.div 
            className={`relative inline-block mb-4 p-4 rounded-full ${
              badge.earned 
                ? 'bg-white/30 backdrop-blur-md' 
                : 'bg-gray-300'
            }`}
            whileTap={badge.earned ? { scale: 0.95 } : {}}
          >
            <div className="text-4xl relative z-10">
              {badge.icon}
              {badge.earned && (
                <motion.div
                  className="absolute -top-3 -right-3"
                  animate={{ 
                    y: [0, -12, 0],
                    scale: [1, 1.2, 1]
                  }}
                  transition={{ 
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  ✨
                </motion.div>
              )}
            </div>
          </motion.div>
          <motion.p
            className={`text-lg font-bold ${
              badge.earned 
                ? 'text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500' 
                : 'text-gray-600'
            }`}
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', delay: 0.1 }}
          >
            {badge.name}
          </motion.p>

          {/* Lock Animation */}
          {!badge.earned && (
            <motion.div
              className="absolute top-3 right-3 text-gray-500"
              animate={{ 
                scale: [1, 1.1, 1],
                rotate: [0, 10, -10, 0]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                repeatDelay: 1
              }}
            >
              🔒
            </motion.div>
          )}
        </motion.div>
      ))}
    </div>
  );
};

export default BadgeGrid;
