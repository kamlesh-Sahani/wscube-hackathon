"use client";
import { motion } from "framer-motion";

const LeaderboardPage = () => {
  const entries = [
    { rank: 1, name: "Saad Mehmood", xp: 2450, badges: 12 },
    { rank: 2, name: "Aman Khowal", xp: 2150, badges: 9 },
    { rank: 3, name: "Kamlesh Kumar", xp: 1950, badges: 11 },
    { rank: 4, name: "Sameer Kumar", xp: 1750, badges: 8 },
  ];

  return (
    <div className="min-h-screen bg-black py-8 px-4 sm:px-8 lg:px-16">
      <div className="text-center my-10">
        <h1 className="text-4xl font-extrabold text-white mb-4 tracking-tight">
          🏆 Leaderboard
        </h1>
        <p className="text-gray-300 max-w-2xl mx-auto text-base sm:text-lg">
          Discover the top performers and their achievements. Keep earning XP and badges to climb higher!
        </p>
      </div>

      <div className="max-w-5xl mx-auto overflow-x-auto shadow-2xl rounded-3xl bg-gradient-to-br from-gray-800 to-gray-900 backdrop-blur-md border border-gray-700">
        <table className="min-w-full">
          <thead>
            <tr className="bg-gradient-to-r from-indigo-700 to-purple-700 text-white text-xs sm:text-sm uppercase tracking-wider">
              <th className="text-left p-4">Rank</th>
              <th className="text-left p-4">Name</th>
              <th className="text-right p-4">XP</th>
              <th className="text-right p-4">Badges</th>
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
                className="border-t border-gray-700 hover:shadow-lg transition-all duration-300"
              >
                <td className="py-4 px-4 font-bold text-gray-300 whitespace-nowrap">
                  #{entry.rank}
                </td>
                <td className="py-4 px-4 font-semibold text-gray-200 flex items-center gap-2 whitespace-nowrap">
                  {entry.rank === 1 && <span className="text-yellow-400 text-xl">🥇</span>}
                  {entry.rank === 2 && <span className="text-gray-300 text-xl">🥈</span>}
                  {entry.rank === 3 && <span className="text-orange-400 text-xl">🥉</span>}
                  {entry.rank > 3 && <span className="text-gray-400 text-xl">🎖️</span>}
                  {entry.name}
                </td>
                <td className="py-4 px-4 text-right font-medium text-blue-400 whitespace-nowrap">
                  {entry.xp} XP
                </td>
                <td className="py-4 px-4 text-right whitespace-nowrap">
                  <span className="inline-flex items-center gap-1 bg-yellow-200/20 text-yellow-400 px-3 py-1 rounded-full text-xs font-semibold shadow-inner">
                    {entry.badges} <span className="text-lg">🏅</span>
                  </span>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="text-center mt-10 sm:mt-14">
        <p className="text-gray-400 text-sm sm:text-base">
          Want to be on top?{" "}
          <span className="font-semibold text-indigo-400">Keep practicing and earning badges!</span> 🚀
        </p>
      </div>
    </div>
  );
};

export default LeaderboardPage;
