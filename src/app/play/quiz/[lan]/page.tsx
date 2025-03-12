"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const quizzes = {
  javascript: [
    { type: "multiple-choice", question: "What is `typeof null` in JavaScript?", options: ["Object", "Null", "Undefined", "Number"], answer: "Object" },
    { type: "true-false", question: "JavaScript is a statically typed language.", options: ["True", "False"], answer: "False" },
    { type: "fill-in-the-blank", question: "The `===` operator in JavaScript checks for both value and ______.", answer: "type" },
  ],
  python: [
    { type: "multiple-choice", question: "What is the output of `print(2 ** 3)` in Python?", options: ["5", "6", "8", "9"], answer: "8" },
    { type: "true-false", question: "Python uses indentation to define code blocks.", options: ["True", "False"], answer: "True" },
    { type: "fill-in-the-blank", question: "The `len()` function in Python returns the ______ of an object.", answer: "length" },
  ],
  java: [
    { type: "multiple-choice", question: "Which keyword is used to create a subclass?", options: ["extends", "implements", "inherits", "super"], answer: "extends" },
    { type: "true-false", question: "Java supports multiple inheritance.", options: ["True", "False"], answer: "False" },
    { type: "fill-in-the-blank", question: "The `boolean` data type in Java can have values of ______ or false.", answer: "true" },
  ],
  cplusplus: [
    { type: "multiple-choice", question: "Which operator is used for dereferencing a pointer?", options: ["*", "&", "->", "::"], answer: "*" },
    { type: "true-false", question: "C++ is an object-oriented programming language.", options: ["True", "False"], answer: "True" },
    { type: "fill-in-the-blank", question: "The `std::` namespace is used for the ______ Library.", answer: "Standard" },
  ],
};

export default function QuizPage() {
  const router = useRouter();
  const language = "python".toLocaleLowerCase();
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [quizCompleted, setQuizCompleted] = useState(false);

  useEffect(() => {
    if (quizzes[language]) {
      setQuestions(quizzes[language]);
    } else {
      router.push("/404");
    }
  }, [language]);

  const handleAnswer = (option) => {
    setSelectedAnswer(option);
    const currentQ = questions[currentQuestion];
    if (currentQ.type === "fill-in-the-blank" && option.toLowerCase() === currentQ.answer.toLowerCase()) {
      setScore(score + 10);
    } else if (currentQ.type !== "fill-in-the-blank" && option === currentQ.answer) {
      setScore(score + 10);
    }

    setTimeout(() => {
      if (currentQuestion + 1 < questions.length) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer(null);
      } else {
        setQuizCompleted(true);
      }
    }, 1000); // Delay for feedback
  };

  if (!questions.length) return <div className="text-center p-8 text-white">Loading...</div>;

  return (
    <div className="min-h-screen  pt-10 bg-gradient-to-br from-gray-900 to-gray-800 text-white flex">
      {/* Sidebar */}
      <div className="w-1/4 bg-gray-800 p-6 border-r border-gray-700">
        <h2 className="text-2xl font-bold mb-6">Quiz Progress</h2>
        <div className="space-y-4">
          <div className="bg-gray-700 p-4 rounded-lg">
            <p className="text-lg font-semibold">Score</p>
            <p className="text-2xl text-green-400">{score} Points</p>
          </div>
          <div className="bg-gray-700 p-4 rounded-lg">
            <p className="text-lg font-semibold">Progress</p>
            <p className="text-xl">
              {currentQuestion + 1} / {questions.length}
            </p>
          </div>
          <div className="bg-gray-700 p-4 rounded-lg">
            <p className="text-lg font-semibold">Language</p>
            <p className="text-xl text-blue-400">{language.toUpperCase()}</p>
          </div>
        </div>
      </div>

      {/* Main Quiz Content */}
      <div className="w-3/4 p-8">
        <h1 className="text-5xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
          Quiz: {language.toUpperCase()}
        </h1>

        {quizCompleted ? (
          <div className="text-center mt-10">
            <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
              Quiz Completed!
            </h2>
            <p className="text-2xl mt-4">
              Your Score: <span className="font-bold text-green-400">{score}</span> Points
            </p>
            <button
              onClick={() => router.push("/")}
              className="mt-8 bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-4 rounded-lg text-xl font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
            >
              Back to Learning Modules
            </button>
          </div>
        ) : (
          <div className="max-w-2xl mx-auto mt-10 p-8 bg-gray-800 rounded-xl shadow-2xl">
            <h2 className="text-3xl mb-8 font-semibold text-gray-100">
              {questions[currentQuestion].question}
            </h2>

            {questions[currentQuestion].type === "multiple-choice" && (
              <div className="grid grid-cols-1 gap-6">
                {questions[currentQuestion].options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswer(option)}
                    className={`p-4 rounded-xl text-xl font-semibold transition-all duration-300 ${
                      selectedAnswer === option
                        ? option === questions[currentQuestion].answer
                          ? "bg-green-500 hover:bg-green-600"
                          : "bg-red-500 hover:bg-red-600"
                        : "bg-gray-700 hover:bg-gray-600"
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            )}

            {questions[currentQuestion].type === "true-false" && (
              <div className="grid grid-cols-2 gap-6">
                {questions[currentQuestion].options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswer(option)}
                    className={`p-4 rounded-xl text-xl font-semibold transition-all duration-300 ${
                      selectedAnswer === option
                        ? option === questions[currentQuestion].answer
                          ? "bg-green-500 hover:bg-green-600"
                          : "bg-red-500 hover:bg-red-600"
                        : "bg-gray-700 hover:bg-gray-600"
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            )}

            {questions[currentQuestion].type === "fill-in-the-blank" && (
              <div className="flex flex-col gap-6">
                <input
                  type="text"
                  placeholder="Type your answer here..."
                  className="p-4 rounded-xl text-xl bg-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  onChange={(e) => setSelectedAnswer(e.target.value)}
                />
                <button
                  onClick={() => handleAnswer(selectedAnswer)}
                  className="p-4 rounded-xl text-xl font-semibold bg-blue-500 hover:bg-blue-600 transition-all duration-300"
                >
                  Submit Answer
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}