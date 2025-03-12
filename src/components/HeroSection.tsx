"use client";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import { FaTrophy, FaRobot, FaChartLine, FaUserGraduate } from "react-icons/fa";
import { BiChevronRight } from "react-icons/bi";
import Link from "next/link";

export default function HeroSection() {
  const images = [
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80", // AI Learning
    "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80", // Gamification
    "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Leaderboard
    "https://plus.unsplash.com/premium_photo-1661882403999-46081e67c401?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGNvZGV8ZW58MHx8MHx8fDA%3D", // Personalized Learning
    "https://plus.unsplash.com/premium_photo-1663100722417-6e36673fe0ed?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Personalized Learning
    "https://plus.unsplash.com/premium_photo-1682756540097-6a887bbcf9b0?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];
    const features = [
      {
        title: "Points & Badges",
        description: "Earn points and unlock badges as you complete tasks and challenges.",
        icon: <FaTrophy className="w-12 h-12 mb-4 text-blue-500" />,
        gradient: "from-blue-600 to-purple-600",
        slogan: "Level Up Your Learning!",
        image: "https://plus.unsplash.com/premium_photo-1682756540097-6a887bbcf9b0?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        title: "AI-Powered Personalization",
        description: "Get tailored recommendations based on your learning style and progress.",
        icon: <FaRobot className="w-12 h-12 mb-4 text-green-500" />,
        gradient: "from-green-600 to-teal-600",
        slogan: "Learn Smarter, Not Harder!",
        image: "https://plus.unsplash.com/premium_photo-1663100722417-6e36673fe0ed?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        title: "Leaderboards",
        description: "Compete with peers and climb the leaderboard to showcase your skills.",
        icon: <FaChartLine className="w-12 h-12 mb-4 text-yellow-500" />,
        gradient: "from-yellow-600 to-orange-600",
        slogan: "Climb to the Top!",
        image: "https://plus.unsplash.com/premium_photo-1661882403999-46081e67c401?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGNvZGV8ZW58MHx8MHx8fDA%3D",
      },
      {
        title: "Personalized Learning",
        description: "Receive content and feedback tailored to your individual learning style.",
        icon: <FaUserGraduate className="w-12 h-12 mb-4 text-pink-500" />,
        gradient: "from-pink-600 to-red-600",
        slogan: "Your Learning, Your Way!",
        image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
    ];

  return (
    <div className="relative h-screen flex flex-col items-center justify-center overflow-hidden inset-0 w-full bg-black bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)]">
      {/* Background Image with Gradient Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('/images/hero-bg.jpg')` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/80"></div>
      </div>

      {/* Horizontal Image Slider */}
      <div className="relative z-10 w-full max-w-6xl px-4">
        <Swiper
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={3}
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
          }}
          modules={[EffectCoverflow, Autoplay]}
          className="mySwiper"
        >
          {features.map((feature, index) => (
            <SwiperSlide key={index}>
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="relative overflow-hidden rounded-lg shadow-2xl"
              >
                <img
                  src={feature.image}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                  <p className="text-white text-lg font-semibold">
                    {feature.slogan}
                  </p>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Animated Text */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="relative z-10 text-center mt-12"
      >
        <h1 className="text-6xl font-bold text-white mb-6">
          Learn. Play.{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-600">
            Master.
          </span>
        </h1>
        <p className="text-gray-300 text-lg">
          Engage, learn, and grow with AI-powered gamification.
        </p>
      </motion.div>

      {/* Call-to-Action Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1 }}
        className="relative z-10 mt-8 flex gap-4"
      >
        <Link href='/play'>
        <button className="bg-gradient-to-r from-purple-500 cursor-pointer to-pink-500 text-white px-5 py-6 flex rounded-full font-bold text-lg hover:scale-105 transition-transform duration-300 items-center mx-auto">
          Get Started
          <BiChevronRight className="ml-2" />
        </button>
        </Link>
      </motion.div>
    </div>
  );
}
