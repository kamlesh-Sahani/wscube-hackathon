"use client";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { FaTrophy, FaRobot, FaChartLine, FaUserGraduate } from "react-icons/fa";

export default function FeaturesSection() {
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
    <div className="relative py-16 bg-black overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl font-bold text-center text-white mb-12"
        >
          Key Features
        </motion.h2>

        {/* Image Slider */}
        <div className="mb-12">
          <Swiper
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            modules={[Autoplay, Pagination]}
            className="mySwiper"
          >
            {features.map((feature, index) => (
              <SwiperSlide key={index}>
                <div className="relative h-96 rounded-lg overflow-hidden">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 1 }}
                      className="text-center"
                    >
                      <h3 className="text-3xl font-bold text-white mb-4">
                        {feature.slogan}
                      </h3>
                      <p className="text-gray-300 text-lg">{feature.description}</p>
                    </motion.div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
              className={`bg-gradient-to-r ${feature.gradient} p-1 rounded-lg shadow-2xl`}
            >
              <div className="bg-gray-900 p-6 rounded-lg h-full flex flex-col items-center text-center">
                {/* Icon */}
                {feature.icon}

                {/* Title */}
                <h3 className="text-xl font-semibold text-white mb-2">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}