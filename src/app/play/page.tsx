"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { FaCode, FaBook, FaChartLine, FaLightbulb, FaCheckCircle, FaUsers } from "react-icons/fa";

export default function LearningModulesPage() {
  // Dummy data for tasks
  const [tasks] = useState([
    {
      id: 1,
      type: "mcq",
      title: "JavaScript Basics Quiz",
      description: "Test your knowledge of JavaScript fundamentals.",
      difficulty: "Beginner",
      questions: [
        {
          question: "What is the output of `2 + '2'` in JavaScript?",
          options: ["4", "22", "NaN", "Error"],
          answer: "22",
        },
        {
          question: "Which keyword is used to declare a variable in JavaScript?",
          options: ["var", "let", "const", "all of the above"],
          answer: "all of the above",
        },
      ],
    },
    {
      id: 2,
      type: "code",
      title: "Build a To-Do App",
      description: "Create a simple to-do app using React.js.",
      difficulty: "Intermediate",
      starterCode: "// Write your React code here",
      expectedOutput: "A functional to-do app with add and delete features.",
    },
    {
      id: 3,
      type: "multiplayer",
      title: "Collaborative Design Challenge",
      description: "Work with a team to design a logo for a fictional company.",
      difficulty: "Advanced",
      teamSize: 3,
    },
    {
      id: 4,
      type: "ai-analysis",
      title: "AI Model Training",
      description: "Train a simple AI model using TensorFlow.js.",
      difficulty: "Advanced",
      dataset: "https://example.com/dataset.csv",
      expectedAccuracy: "85%",
    },
  ]);

  // Dummy data for user progress
  const [userProgress] = useState({
    1: { status: "completed", score: 95 },
    2: { status: "in-progress", score: 0 },
  });

  // Dummy data for AI recommendations
  const [aiRecommendations] = useState([
    {
      id: 1,
      title: "Advanced React Concepts",
      description: "Learn about hooks, context, and performance optimization.",
    },
    {
      id: 2,
      title: "Machine Learning Basics",
      description: "Get started with the fundamentals of machine learning.",
    },
    {
      id: 3,
      title: "UI/UX Design Principles",
      description: "Understand the key principles of designing user interfaces.",
    },
  ]);

  const [selectedTask, setSelectedTask] = useState(null);
  const [mcqAnswers, setMcqAnswers] = useState({});
  const [codeSubmission, setCodeSubmission] = useState("");
  const [multiplayerTeam, setMultiplayerTeam] = useState([]);

  // Handle task selection
  const handleTaskClick = (task) => {
    setSelectedTask(task);
    setMcqAnswers({});
    setCodeSubmission("");
    setMultiplayerTeam([]);
  };

  // Handle MCQ submission
  const handleMcqSubmit = () => {
    let score = 0;
    selectedTask.questions.forEach((q, index) => {
      if (mcqAnswers[index] === q.answer) score += 50; // 50 points per correct answer
    });
    alert(`You scored ${score}% on the quiz!`);
    setSelectedTask(null);
  };

  // Handle code submission
  const handleCodeSubmit = () => {
    alert(`Code submitted: ${codeSubmission}`);
    setSelectedTask(null);
  };

  // Handle multiplayer task submission
  const handleMultiplayerSubmit = () => {
    alert(`Team members: ${multiplayerTeam.join(", ")}`);
    setSelectedTask(null);
  };

  // Handle AI analysis task submission
  const handleAiAnalysisSubmit = () => {
    alert("AI model training submitted for evaluation.");
    setSelectedTask(null);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold">Learning Modules</h1>
        <p className="text-gray-400 mt-2">
          Explore interactive tasks and challenges tailored just for you.
        </p>
      </div>

      {/* Task List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {tasks.map((task) => (
          <motion.div
            key={task.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
            onClick={() => handleTaskClick(task)}
            className="bg-gray-800 p-6 rounded-lg shadow-lg cursor-pointer"
          >
            <div className="flex items-center mb-4">
              {task.type === "mcq" && <FaBook className="w-8 h-8 text-green-500" />}
              {task.type === "code" && <FaCode className="w-8 h-8 text-blue-500" />}
              {task.type === "multiplayer" && <FaUsers className="w-8 h-8 text-purple-500" />}
              {task.type === "ai-analysis" && <FaChartLine className="w-8 h-8 text-yellow-500" />}
            </div>
            <h2 className="text-xl font-semibold mb-2">{task.title}</h2>
            <p className="text-gray-400">{task.description}</p>
            <div className="mt-4 flex items-center justify-between">
              <span className="text-sm text-gray-400">{task.difficulty}</span>
              {userProgress[task.id]?.status === "completed" && (
                <FaCheckCircle className="w-6 h-6 text-green-500" />
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {/* AI Recommendations */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-4">AI-Powered Recommendations</h2>
        <Swiper
          spaceBetween={30}
          slidesPerView={3}
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          modules={[Autoplay, Pagination]}
          className="mySwiper"
        >
          {aiRecommendations.map((recommendation) => (
            <SwiperSlide key={recommendation.id}>
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-2">{recommendation.title}</h3>
                <p className="text-gray-400">{recommendation.description}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Task Details Modal */}
      <AnimatePresence>
        {selectedTask && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 flex items-center justify-center p-8"
            onClick={() => setSelectedTask(null)}
          >
            <motion.div
              initial={{ y: -50 }}
              animate={{ y: 0 }}
              exit={{ y: -50 }}
              className="bg-gray-800 p-8 rounded-lg w-full max-w-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <h2 className="text-2xl font-bold mb-4">{selectedTask.title}</h2>
              <p className="text-gray-400 mb-4">{selectedTask.description}</p>

              {/* MCQ Task */}
              {selectedTask.type === "mcq" && (
                <div>
                  {selectedTask.questions.map((q, index) => (
                    <div key={index} className="mb-4">
                      <h3 className="text-lg font-semibold">{q.question}</h3>
                      <div className="mt-2">
                        {q.options.map((option, i) => (
                          <label key={i} className="block mb-2">
                            <input
                              type="radio"
                              name={`question-${index}`}
                              value={option}
                              onChange={(e) =>
                                setMcqAnswers({ ...mcqAnswers, [index]: e.target.value })
                              }
                              className="mr-2"
                            />
                            {option}
                          </label>
                        ))}
                      </div>
                    </div>
                  ))}
                  <button
                    onClick={handleMcqSubmit}
                    className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all"
                  >
                    Submit Quiz
                  </button>
                </div>
              )}

              {/* Code Task */}
              {selectedTask.type === "code" && (
                <div>
                  <h3 className="text-lg font-semibold mb-2">Starter Code</h3>
                  <textarea
                    className="w-full bg-gray-700 text-white p-2 rounded-lg mb-4"
                    rows="6"
                    value={codeSubmission}
                    onChange={(e) => setCodeSubmission(e.target.value)}
                    placeholder={selectedTask.starterCode}
                  ></textarea>
                  <button
                    onClick={handleCodeSubmit}
                    className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all"
                  >
                    Submit Code
                  </button>
                </div>
              )}

              {/* Multiplayer Task */}
              {selectedTask.type === "multiplayer" && (
                <div>
                  <h3 className="text-lg font-semibold mb-2">Invite Team Members</h3>
                  <input
                    type="text"
                    className="w-full bg-gray-700 text-white p-2 rounded-lg mb-4"
                    placeholder="Enter team member's email"
                    onKeyDown={(e) => {
                      if (e.key === "Enter" && e.target.value) {
                        setMultiplayerTeam([...multiplayerTeam, e.target.value]);
                        e.target.value = "";
                      }
                    }}
                  />
                  <div className="mb-4">
                    {multiplayerTeam.map((member, index) => (
                      <div key={index} className="text-gray-400">
                        {member}
                      </div>
                    ))}
                  </div>
                  <button
                    onClick={handleMultiplayerSubmit}
                    className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all"
                  >
                    Start Collaboration
                  </button>
                </div>
              )}

              {/* AI Analysis Task */}
              {selectedTask.type === "ai-analysis" && (
                <div>
                  <h3 className="text-lg font-semibold mb-2">Dataset</h3>
                  <a
                    href={selectedTask.dataset}
                    className="text-blue-500 hover:underline"
                  >
                    Download Dataset
                  </a>
                  <button
                    onClick={handleAiAnalysisSubmit}
                    className="mt-4 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all"
                  >
                    Submit AI Model
                  </button>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}