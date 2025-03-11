"use client"
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export default function RecommendationCard({
  title,
  difficulty,
  xp,
}: {
  title: string;
  difficulty: string;
  xp: number;
}) {
  const cardGradients = [
    "from-indigo-500 to-purple-600",
    "from-emerald-500 to-teal-500",
    "from-pink-500 to-rose-500",
    "from-blue-500 to-sky-500",
    "from-orange-500 to-amber-500",
    "from-cyan-500 to-blue-600",
    "from-lime-500 to-green-500",
    "from-red-500 to-pink-600",
    "from-yellow-400 to-orange-500",
    "from-teal-400 to-cyan-500",
    "from-violet-500 to-fuchsia-500",
    "from-rose-400 to-pink-500",
    "from-sky-400 to-indigo-500",
    "from-amber-400 to-yellow-500",
    "from-purple-500 to-pink-500",
    "from-gray-500 to-zinc-600",
    "from-stone-500 to-neutral-600",
  ];

  const getRandomGradient = () => {
    const randomIndex = Math.floor(Math.random() * cardGradients.length);
    return cardGradients[randomIndex];
  };
  const getDifficultyColor = (level: string) => {
    switch (level.toLowerCase()) {
      case "easy":
        return "from-green-400 to-emerald-500";
      case "medium":
        return "from-yellow-400 to-amber-500";
      case "hard":
        return "from-red-400 to-rose-500";
      default:
        return "from-gray-400 to-gray-500";
    }
  };

  return (
    <motion.div
      className={`relative overflow-hidden rounded-3xl p-5 md:p-6 cursor-pointer shadow-2xl bg-gradient-to-br ${getRandomGradient()} w-full max-w-md border border-white/10`}
      initial={{ scale: 0.8, opacity: 0, y: 20 }}
      animate={{ scale: 1, opacity: 1, y: 0 }}
      whileHover={{
        y: -10,
        scale: 1.02,
        rotate: -1,
        transition: { type: "spring", stiffness: 300 },
      }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
        duration: 0.3,
      }}
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent opacity-30"
        animate={{
          x: ["-150%", "150%"],
          rotate: "12deg",
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      <div className="relative z-10 flex justify-between flex-col gap-2 items-start">
        <div className="space-y-3">
          <h3 className="font-bold text-xl md:text-2xl text-white drop-shadow-md">
            {title}
          </h3>
          <motion.span
            className={`inline-block px-4 py-1.5 rounded-full text-sm font-semibold bg-gradient-to-r ${getDifficultyColor(
              difficulty
            )} text-white shadow-md`}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <span className="drop-shadow-md">{difficulty}</span>
          </motion.span>
        </div>
        <motion.span
          className="flex items-center gap-2 px-4 py-2 rounded-full backdrop-blur-sm border border-white/20 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 relative overflow-hidden shadow-md"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400 }}
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
            animate={{ x: ["-100%", "100%"] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
          <Sparkles className="h-5 w-5 text-cyan-300" />
          <span className="font-bold md:w-28 w-20 max-md:text-sm text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 to-blue-200">
            +{xp} XP
          </span>
        </motion.span>
      </div>
      <motion.div
        className="absolute -bottom-20 -right-20 opacity-20 pointer-events-none"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2],
          rotate: [0, 180],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className="w-40 h-40 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/40 to-transparent rounded-full blur-3xl" />
      </motion.div>
      <motion.div
        className="absolute inset-0 rounded-3xl"
        initial={{ opacity: 0 }}
        whileHover={{
          opacity: 1,
          boxShadow: "0 0 30px rgba(255, 255, 255, 0.3)",
        }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
}
