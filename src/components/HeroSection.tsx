"use client";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { BiChevronRight } from "react-icons/bi";

export default function HeroSection() {
  const images = [
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80", // AI Learning
    "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80", // Gamification
    "https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80", // Leaderboard
    "https://images.unsplash.com/photo-1522202176988-66273c2fd55a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80", // Personalized Learning
    "https://images.unsplash.com/photo-1522202176988-66273c2fd55a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80", // Personalized Learning
    "https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
  ];

  return (
    <div className="relative h-screen flex flex-col items-center justify-center bg-black overflow-hidden">
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
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="relative overflow-hidden rounded-lg shadow-2xl"
              >
                <img
                  src={image}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                  <p className="text-white text-lg font-semibold">
                    Feature {index + 1}
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
        <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform duration-300 flex items-center mx-auto">
          Get Started
          <BiChevronRight className="ml-2" />
        </button>

        <button className="px-6 py-3 bg-transparent border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition-all flex items-center">
          Learn More <FaArrowLeft className="ml-2" />
        </button>
      </motion.div>
    </div>
  );
}
