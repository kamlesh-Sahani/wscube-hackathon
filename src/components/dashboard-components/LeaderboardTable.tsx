"use client";
import { motion } from "framer-motion";

const LeaderboardTable = () => {
  const entries = [
    { rank: 1, name: "Saad Mehmood", xp: 2450, badges: 12 },
    { rank: 2, name: "Aman Khowal", xp: 2150, badges: 9 },
    { rank: 3, name: "Kamlesh Kumar", xp: 1950, badges: 11 },
    { rank: 4, name: "Sameer Kumar", xp: 1750, badges: 8 }, 
  ];

  return (
    <div className="max-w-3xl mx-auto mt-8 shadow-2xl rounded-2xl overflow-hidden bg-white/60 backdrop-blur-md">
      <div className="overflow-x-auto">
        <table className="min-w-full bg-gradient-to-br from-blue-50 to-purple-100">
          <thead>
            <tr className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white text-xs sm:text-sm uppercase tracking-wider">
              <th className="text-left p-3 sm:p-4">Rank</th>
              <th className="text-left p-3 sm:p-4">Name</th>
              <th className="text-right p-3 sm:p-4">XP</th>
              <th className="text-right p-3 sm:p-4">Badges</th>
            </tr>
          </thead>
          <tbody>
            {entries.map((entry, idx) => (
              <motion.tr
                key={entry.rank}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1, duration: 0.6, type: "spring" }}
                whileHover={{
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  transition: { type: "spring", stiffness: 300 },
                }}
                className="border-t border-gray-200 hover:bg-white/70 transition-all duration-200"
              >
                <td className="py-3 px-3 sm:px-4 font-bold text-gray-700 whitespace-nowrap">
                  #{entry.rank}
                </td>
                <td className="py-3 px-3 sm:px-4 font-semibold text-gray-800 flex items-center gap-2 whitespace-nowrap">
                  {entry.rank === 1 && (
                    <span className="text-yellow-400 text-xl">🥇</span>
                  )}
                  {entry.rank === 2 && (
                    <span className="text-gray-400 text-xl">🥈</span>
                  )}
                  {entry.rank === 3 && (
                    <span className="text-yellow-700 text-xl">🥉</span>
                  )}
                  {entry.rank > 3 && (
                    <span className="text-gray-400 text-xl">🎖️</span>
                  )}
                  {entry.name}
                </td>
                <td className="py-3 px-3 sm:px-4 text-right font-medium text-blue-600 whitespace-nowrap">
                  {entry.xp} XP
                </td>
                <td className="py-3 px-3 sm:px-4 text-right whitespace-nowrap">
                  <span className="inline-flex items-center gap-1 bg-yellow-100 text-yellow-700 px-2 sm:px-3 py-1 rounded-full text-xs font-semibold shadow-sm">
                    {entry.badges} <span className="text-lg">🏅</span>
                  </span>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LeaderboardTable;
