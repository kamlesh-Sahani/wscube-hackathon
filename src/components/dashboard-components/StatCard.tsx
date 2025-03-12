"use client"
import { motion } from 'framer-motion';
import { ArrowUp, Zap, Rocket, Activity } from 'lucide-react';
export default function StatCard({ label, value }: { label: string; value: string }) {
  const getCardTheme = (label: string) => {
    switch (label.toLowerCase().replace(/[^a-z]/gi, '')) {
      case 'currentstreak':
        return {
          icon: <Rocket className="h-8 w-8 md:h-10 md:w-10" />,
          gradient: 'from-orange-500/30 to-amber-600/40',
          iconColor: 'text-orange-400',
          glow: 'rgba(251, 146, 60, 0.3)',
        };
      case 'weeklyxp':
        return {
          icon: <Zap className="h-8 w-8 md:h-10 md:w-10" />,
          gradient: 'from-indigo-500/30 to-blue-600/40',
          iconColor: 'text-indigo-400',
          glow: 'rgba(129, 140, 248, 0.3)',
        };
      case 'completedmodules':
        return {
          icon: <Activity className="h-8 w-8 md:h-10 md:w-10" />,
          gradient: 'from-emerald-500/30 to-teal-600/40',
          iconColor: 'text-emerald-400',
          glow: 'rgba(52, 211, 153, 0.3)',
        };
      case 'totalpoints':
        return {
          icon: <ArrowUp className="h-8 w-8 md:h-10 md:w-10" />,
          gradient: 'from-purple-500/30 to-fuchsia-600/40',
          iconColor: 'text-purple-400',
          glow: 'rgba(192, 132, 252, 0.3)',
        };
      default:
        return {
          icon: <ArrowUp className="h-8 w-8 md:h-10 md:w-10" />,
          gradient: 'from-rose-500/30 to-pink-600/40',
          iconColor: 'text-rose-400',
          glow: 'rgba(244, 114, 182, 0.3)',
        };
    }
  };

  const theme = getCardTheme(label);

  return (
    <motion.div
      className={`relative overflow-hidden rounded-3xl p-5 md:p-6 cursor-pointer shadow-2xl backdrop-blur-xl border border-white/10 w-full max-w-xs md:max-w-sm lg:max-w-md bg-gradient-to-br from-white to-blue-200`}
      initial={{ scale: 0.8, opacity: 0, y: 20 }}
      animate={{ scale: 1, opacity: 1, y: 0 }}
      whileHover={{
        y: -15,
        rotate: -1,
        transition: { type: 'spring', stiffness: 300 },
      }}
      transition={{
        type: 'spring',
        stiffness: 260,
        damping: 20,
        duration: 0.3,
      }}
    >

      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent opacity-20"
        animate={{
          x: ['-150%', '150%'],
          rotate: '12deg',
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: 'linear',
        }}
      />
      <motion.div
        className="absolute top-[-30px] right-[-30px] opacity-20 pointer-events-none"
        animate={{
          y: [0, 20, 0],
          x: [0, 20, 0],
          rotate: [0, 90, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        <div
          className={`w-40 h-40 rounded-full blur-3xl bg-gradient-to-br from-white to-blue-200`}
        />
      </motion.div>
      <div className="relative z-10">
        <div className="flex items-center justify-between">
          <span className="text-sm md:text-lg font-semibold bg-clip-text bg-gradient-to-r from-blue-950 to-blue-700">
            {label}
          </span>
          <motion.div
            className={theme.iconColor}
            animate={{
              y: [0, -5, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            {theme.icon}
          </motion.div>
        </div>
        <motion.p
          className="mt-4 md:mt-6 text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-400 via-cyan-600 to-blue-500 bg-clip-text text-transparent relative"
          animate={{
            backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'linear',
          }}
          style={{
            backgroundSize: '200% auto',
          }}
        >
          {value}
          <span className="absolute inset-0 bg-gradient-to-r from-white via-cyan-300 to-white bg-clip-text text-transparent blur-xl opacity-30">
            {value}
          </span>
        </motion.p>
      </div>
      <motion.div
        className="absolute inset-0 rounded-3xl"
        initial={{ opacity: 0 }}
        whileHover={{
          opacity: 1,
          boxShadow: `0 0 40px ${theme.glow}`,
        }}
        transition={{ duration: 0.3 }}
      />
      <motion.div
        className="absolute bottom-0 left-0 w-full h-16 opacity-20 pointer-events-none"
        animate={{
          opacity: [0.1, 0.3, 0.1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
      >
        <div className="w-full h-full bg-gradient-to-t from-white to-transparent" />
      </motion.div>
    </motion.div>
  );
}
