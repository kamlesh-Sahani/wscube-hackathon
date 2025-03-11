"use client";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaMapMarker, FaPaperPlane, FaLinkedin, FaGithub } from "react-icons/fa";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-black text-white p-6">
      <div className="text-center mb-16 mt-12 max-w-4xl mx-auto">
        <motion.h1 
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-6"
        >
          Let's Connect
        </motion.h1>
        <motion.p 
          className="text-xl text-gray-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Have questions or want to collaborate? Reach out - we're here to help!
        </motion.p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-gray-900/50 p-8 rounded-2xl border border-white/10 backdrop-blur-xl hover:border-cyan-400/30 transition-all"
        >
          <div className="bg-gradient-to-r from-cyan-500 to-blue-500 w-fit p-4 rounded-xl mb-6">
            <FaEnvelope className="text-2xl" />
          </div>
          <h3 className="text-2xl font-bold mb-2">Email Us</h3>
          <p className="text-gray-400 mb-4">Typically replies within 2 hours</p>
          <a href="mailto:support@wscube.com" className="text-cyan-400 hover:text-cyan-300">
            support@wscube.com
          </a>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-gray-900/50 p-8 rounded-2xl border border-white/10 backdrop-blur-xl hover:border-purple-400/30 transition-all"
        >
          <div className="bg-gradient-to-r from-purple-500 to-indigo-500 w-fit p-4 rounded-xl mb-6">
            <FaPhone className="text-2xl" />
          </div>
          <h3 className="text-2xl font-bold mb-2">Call Us</h3>
          <p className="text-gray-400 mb-4">Mon-Fri from 9am to 5pm IST</p>
          <a href="tel:+911234567890" className="text-purple-400 hover:text-purple-300">
            +91 12345 67890
          </a>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-gray-900/50 p-8 rounded-2xl border border-white/10 backdrop-blur-xl hover:border-pink-400/30 transition-all"
        >
          <div className="bg-gradient-to-r from-pink-500 to-rose-500 w-fit p-4 rounded-xl mb-6">
            <FaMapMarker className="text-2xl" />
          </div>
          <h3 className="text-2xl font-bold mb-2">Visit Us</h3>
          <p className="text-gray-400">WSCube Tech Park</p>
          <p className="text-gray-400">Jaipur, India</p>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto mb-16">
        <motion.div 
          className="bg-gray-900/50 p-8 rounded-2xl border border-white/10 backdrop-blur-xl"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <h2 className="text-2xl font-bold mb-8">Send a Message</h2>
          <form className="space-y-6">
            <div>
              <label className="block text-gray-300 mb-2">Your Name</label>
              <input 
                type="text" 
                className="w-full bg-gray-800/30 border border-white/10 rounded-lg px-4 py-3 focus:border-cyan-400/50 focus:outline-none"
                required
              />
            </div>
            
            <div>
              <label className="block text-gray-300 mb-2">Email Address</label>
              <input 
                type="email" 
                className="w-full bg-gray-800/30 border border-white/10 rounded-lg px-4 py-3 focus:border-cyan-400/50 focus:outline-none"
                required
              />
            </div>

            <div>
              <label className="block text-gray-300 mb-2">Message</label>
              <textarea 
                rows={5}
                className="w-full bg-gray-800/30 border border-white/10 rounded-lg px-4 py-3 focus:border-cyan-400/50 focus:outline-none"
                required
              ></textarea>
            </div>

            <button 
              type="submit"
              className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 py-4 rounded-lg font-bold hover:from-cyan-600 hover:to-blue-600 transition-all flex items-center justify-center gap-2"
            >
              <FaPaperPlane /> Send Message
            </button>
          </form>
        </motion.div>
        <motion.div 
          className="bg-gray-900/50 rounded-2xl border border-white/10 backdrop-blur-xl overflow-hidden"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <div className="aspect-video bg-gray-800/30 flex items-center justify-center">
            <div className="text-center">
              <div className="text-4xl mb-4">🗺️</div>
              <p className="text-gray-400">Interactive Map Here</p>
            </div>
          </div>
        </motion.div>
      </div>
      <motion.div 
        className="text-center mb-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <h3 className="text-xl font-bold mb-6">Connect With Us</h3>
        <div className="flex justify-center gap-6">
          <a href="#" className="p-3 bg-gray-800/50 rounded-full hover:bg-cyan-500/20 transition-all">
            <FaLinkedin className="text-2xl text-cyan-400" />
          </a>
          <a href="#" className="p-3 bg-gray-800/50 rounded-full hover:bg-purple-500/20 transition-all">
            <FaGithub className="text-2xl text-purple-400" />
          </a>
        </div>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto text-center">
        {['24/7 Support', 'Secure Communication', 'Quick Response', '100% Satisfaction'].map((text, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 * index }}
            className="p-4 bg-gray-800/30 rounded-xl border border-white/10"
          >
            <div className="text-cyan-400 text-xl mb-2">
              {['🛡️', '🔒', '⚡', '💖'][index]}
            </div>
            <p className="text-sm">{text}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ContactPage;