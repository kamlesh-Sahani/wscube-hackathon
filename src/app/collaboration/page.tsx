"use client";
import { motion } from "framer-motion";
import {
  FaVideo,
  FaCode,
  FaUsers,
  FaComments,
  FaShare,
  FaGit,
  FaFileCode,
  FaBrain,
} from "react-icons/fa";

const CollaborationPage = () => {
  const activeSessions = [
    { name: "React Masters", members: 8, topic: "State Management" },
    { name: "Python Pros", members: 12, topic: "Data Analysis" },
    { name: "UI/UX Design", members: 5, topic: "Figma Workflow" },
  ];

  const studyGroups = [
    { name: "Algorithms Club", schedule: "Mon/Wed 8 PM", level: "Advanced" },
    { name: "Web Dev 101", schedule: "Daily 6 PM", level: "Beginner" },
    { name: "ML Study Group", schedule: "Fri 7 PM", level: "Intermediate" },
  ];
  return (
    <div className="min-h-screen z-[1] bg-gradient-to-br from-gray-900 via-indigo-900/20 to-purple-900/30 text-white p-6">
      <div className="text-center my-12">
        <motion.h1
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-4xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent mb-4"
        >
          <FaUsers className="inline-block mr-3 text-purple-400" />
          Collaborative Learning Hub
        </motion.h1>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Connect, code, and create with peers in real-time. Pair programming,
          group sessions, and knowledge sharing made seamless.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        <motion.div
          className="lg:col-span-2 bg-gradient-to-br from-indigo-900/40 to-purple-900/40 rounded-xl p-6 border border-cyan-400/20 backdrop-blur-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold flex items-center gap-2 text-cyan-300">
              <FaVideo className="text-cyan-400" /> Live Session
            </h2>
            <button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 px-4 py-2 rounded-lg flex items-center gap-2 transition-all">
              Start Meeting <FaShare className="text-sm" />
            </button>
          </div>
          <div className="aspect-video bg-gradient-to-br from-gray-800/60 to-gray-900/60 rounded-xl border border-cyan-400/20 flex items-center justify-center">
            <div className="text-center">
              <p className="text-gray-400 mb-4">Waiting to start session...</p>
              <button className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 px-6 py-3 rounded-xl flex items-center gap-2 mx-auto transition-all">
                <FaVideo /> Begin Broadcast
              </button>
            </div>
          </div>
        </motion.div>
        <div className="space-y-6">
          <div className="bg-gradient-to-br from-purple-900/40 to-indigo-900/40 p-6 rounded-xl border border-purple-400/20 backdrop-blur-xl">
            <h3 className="text-lg font-bold mb-4 flex items-center gap-2 text-purple-300">
              <FaUsers className="text-purple-400" /> Active Sessions
            </h3>
            <div className="space-y-4">
              {activeSessions.map((session, idx) => (
                <motion.div
                  key={idx}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: idx * 0.1 }}
                  className="p-4 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-lg border border-white/10 hover:border-cyan-400/30 cursor-pointer transition-all"
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-semibold text-gray-100">
                        {session.name}
                      </p>
                      <p className="text-sm text-gray-400">{session.topic}</p>
                    </div>
                    <div className="flex items-center gap-2 bg-cyan-500/20 px-2 py-1 rounded-full">
                      <span className="text-cyan-400">●</span>
                      <span className="text-gray-100">{session.members}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        <motion.div
          className="bg-gradient-to-br from-emerald-900/40 to-cyan-900/40 p-6 rounded-xl border border-emerald-400/20 backdrop-blur-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold flex items-center gap-2 text-emerald-300">
              <FaCode className="text-emerald-400" /> Shared Code Editor
            </h2>
            <div className="flex gap-2">
              <button className="bg-gray-700/50 hover:bg-emerald-500/20 px-4 py-2 rounded-lg transition-all">
                Fork
              </button>
              <button className="bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 px-4 py-2 rounded-lg transition-all">
                Share
              </button>
            </div>
          </div>
          <div className="h-96 bg-gray-900/60 rounded-xl overflow-hidden border border-emerald-400/20">
            <div className="mockup-code bg-transparent">
              <pre>
                <code className="text-emerald-400">
                  // Collaborative coding space
                </code>
              </pre>
              <pre>
                <code className="text-gray-400">{`const collaboration = () => {\n  return "Build together!"\n}`}</code>
              </pre>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="bg-gradient-to-br from-amber-900/40 to-orange-900/40 p-6 rounded-xl border border-amber-400/20 backdrop-blur-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold flex items-center gap-2 text-amber-300">
              <FaBrain className="text-amber-400" /> Shared Whiteboard
            </h2>
            <button className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 px-4 py-2 rounded-lg transition-all">
              Export
            </button>
          </div>
          <div className="h-96 bg-gray-900/60 rounded-xl border border-dashed border-amber-400/30 flex items-center justify-center">
            <p className="text-gray-400">Whiteboard canvas area</p>
          </div>
        </motion.div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {studyGroups.map((group, idx) => (
          <motion.div
            key={idx}
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: idx * 0.1 }}
            className="bg-gradient-to-br from-purple-900/40 to-indigo-900/40 p-6 rounded-xl border border-purple-400/20 backdrop-blur-xl hover:border-cyan-400/30 transition-all"
          >
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-lg font-bold text-gray-100">
                  {group.name}
                </h3>
                <p className="text-sm text-purple-300">{group.schedule}</p>
              </div>
              <span className="bg-cyan-500/20 text-cyan-400 px-2 py-1 rounded-full text-xs">
                {group.level}
              </span>
            </div>
            <div className="flex gap-2">
              <button className="bg-gray-700/50 hover:bg-cyan-500/20 px-3 py-1 rounded-lg text-sm transition-all">
                View Schedule
              </button>
              <button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 px-3 py-1 rounded-lg text-sm flex items-center gap-1 transition-all">
                <FaComments /> Join
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <motion.div
          className="bg-gradient-to-br from-orange-900/40 to-amber-900/40 p-6 rounded-xl border border-amber-400/20 backdrop-blur-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2 text-amber-300">
            <FaGit className="text-amber-400" /> Pair Programming
          </h2>
          <div className="space-y-4">
            <div className="bg-gray-700/30 p-4 rounded-lg">
              <p className="font-semibold mb-2">Find a Pair</p>
              <div className="flex max-md:flex-col gap-2">
                <input
                  type="text"
                  placeholder="Language/Technology"
                  className="bg-gray-900/50 px-4 py-2 rounded-lg flex-1"
                />
                <button className="bg-orange-600 hover:bg-orange-700 px-4 py-2 rounded-lg">
                  Match
                </button>
              </div>
            </div>
            <div className="bg-gray-700/30 p-4 rounded-lg">
              <p className="font-semibold mb-2">Current Matches</p>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span>JavaScript Expert</span>
                  <button className="text-sm bg-green-600/20 text-green-400 px-2 py-1 rounded">
                    Connect
                  </button>
                </div>
                <div className="flex items-center justify-between">
                  <span>Python Mentor</span>
                  <button className="text-sm bg-green-600/20 text-green-400 px-2 py-1 rounded">
                    Connect
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="bg-gradient-to-br from-pink-900/40 to-rose-900/40 p-6 rounded-xl border border-pink-400/20 backdrop-blur-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2 text-pink-300">
            <FaFileCode className="text-pink-400" /> Shared Resources
          </h2>
          <div className="space-y-4">
            <div className="bg-gray-700/30 p-4 rounded-lg flex items-center gap-4">
              <div className="bg-purple-600/20 p-2 rounded-lg">
                <FaFileCode className="text-purple-400" />
              </div>
              <div>
                <p className="font-semibold">Project Documentation</p>
                <p className="text-sm text-gray-400">Updated 2h ago</p>
              </div>
            </div>
            <div className="bg-gray-700/30 p-4 rounded-lg flex items-center gap-4">
              <div className="bg-blue-600/20 p-2 rounded-lg">
                <FaCode className="text-blue-400" />
              </div>
              <div>
                <p className="font-semibold">Code Snippets Library</p>
                <p className="text-sm text-gray-400">15 contributors</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      <div className="mt-12 p-6 bg-gradient-to-r from-cyan-900/40 to-blue-900/40 rounded-xl border border-cyan-400/30 backdrop-blur-xl">
        <h2 className="text-xl font-bold mb-4 text-cyan-300">
          Collaboration Stats
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center p-4 bg-gray-800/50 rounded-lg">
            <p className="text-2xl font-bold text-cyan-400">142</p>
            <p className="text-sm text-gray-300">Active Sessions</p>
          </div>
          <div className="text-center p-4 bg-gray-800/50 rounded-lg">
            <p className="text-2xl font-bold text-purple-400">892</p>
            <p className="text-sm text-gray-300">Code Collaborations</p>
          </div>
          <div className="text-center p-4 bg-gray-800/50 rounded-lg">
            <p className="text-2xl font-bold text-green-400">356</p>
            <p className="text-sm text-gray-300">Peer Matches</p>
          </div>
          <div className="text-center p-4 bg-gray-800/50 rounded-lg">
            <p className="text-2xl font-bold text-yellow-400">1.2k</p>
            <p className="text-sm text-gray-300">Shared Resources</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollaborationPage;
