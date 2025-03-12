
"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
 
import {
  FaCode,
  FaBook,
  FaChartLine,
  FaUsers,
  FaBrain,
  FaPuzzlePiece,
  FaMedal,
} from "react-icons/fa";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";


const programmingLanguageLogos = [
  { name: "JavaScript", logo: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" },
  { name: "Python", logo: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg" },
  { name: "Java", logo: "https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg" },
  { name: "C++", logo: "https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg" },
];

export default function LearningModulesPage() {
  const [tasks] = useState([
    { id: 2, type: "code", title: "Build a To-Do App", difficulty: "Intermediate", points: 100 },
    { id: 3, type: "multiplayer", title: "Collaborative Coding Challenge", difficulty: "Hard", points: 150 },
    { id: 4, type: "ai-analysis", title: "Train an AI Model", difficulty: "Expert", points: 200 },
    { id: 5, type: "puzzle", title: "Logic Puzzle", difficulty: "Medium", points: 75 },
    { id: 6, type: "brain", title: "Algorithm Optimization", difficulty: "Advanced", points: 120 },
  ]);

  return (
    <div className="min-h-screen text-white p-8  pt-40">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold">Learning & Earning Modules</h1>
        <p className="text-gray-400 mt-2">Complete tasks, earn points, and level up your skills!</p>
      </div>

      {/* Programming Language Swiper */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold mb-6">Learn Languages with Quizzes</h2>
        <Swiper
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={3}
          loop={true}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          coverflowEffect={{ rotate: 1, stretch: 0, depth: 100, modifier: 2.5 }}
          modules={[EffectCoverflow, Autoplay]}
          className="mySwiper"
        >
          {programmingLanguageLogos.map((l) => (
            <SwiperSlide key={l.name} className="w-[200px]">
                <Link href={`/play/quiz/${l.name}`}>
              <div className="flex flex-col items-center gap-3 w-[200px]">
                <img src={l.logo} alt={l.name} className="w-40 h-40 rounded-full" />
                <p className="font-bold text-2xl border-b-2">{l.name}</p>
              </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Task List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tasks.map((task) => (
          <Card key={task.id} className="hover:shadow-lg transition-shadow bg-black text-white">
            <CardHeader>
              <CardTitle>{task.title}</CardTitle>
              <CardDescription>{task.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-sm font-medium">Points: {task.points}</span>
                  <span className="text-sm font-medium">{task.progress}%</span>
                </div>
                {/* <Progress value={task.progress} className="h-2" /> */}
                <button className="w-full bg-pink-500 text-white py-2 rounded-md hover:bg-pink-600 transition-colors">
                  Start Task
                </button>
              </div>
            </CardContent>
          </Card>

        ))}
      </div>
    </div>
  );
}
