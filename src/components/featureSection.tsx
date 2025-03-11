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
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    },
    {
      title: "AI-Powered Personalization",
      description: "Get tailored recommendations based on your learning style and progress.",
      icon: <FaRobot className="w-12 h-12 mb-4 text-green-500" />,
      gradient: "from-green-600 to-teal-600",
      slogan: "Learn Smarter, Not Harder!",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    },
    {
      title: "Leaderboards",
      description: "Compete with peers and climb the leaderboard to showcase your skills.",
      icon: <FaChartLine className="w-12 h-12 mb-4 text-yellow-500" />,
      gradient: "from-yellow-600 to-orange-600",
      slogan: "Climb to the Top!",
      image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    },
    {
      title: "Personalized Learning",
      description: "Receive content and feedback tailored to your individual learning style.",
      icon: <FaUserGraduate className="w-12 h-12 mb-4 text-pink-500" />,
      gradient: "from-pink-600 to-red-600",
      slogan: "Your Learning, Your Way!",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    },
  ];

  return (
    <div className="relative py-20 bg-black overflow-hidden">
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