"use client";
import { motion } from "framer-motion";

export default function CallToActionSection() {
  return (
    <div className="py-20 bg-black">
      <div className="container mx-auto px-4 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-3xl font-bold text-white mb-6"
        >
          Ready to Transform Your Learning?
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="flex justify-center gap-4"
        >
          <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all">
            Sign Up
          </button>
          <button className="px-6 py-3 bg-transparent border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition-all">
            Log In
          </button>
        </motion.div>
      </div>
    </div>
  );
}