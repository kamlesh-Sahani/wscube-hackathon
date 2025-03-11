"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { name: "Home", to: "hero" },
    { name: "Features", to: "features" },
    { name: "How It Works", to: "how-it-works" },
    { name: "Pricing", to: "pricing" },
    { name: "Contact", to: "contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-black/80 backdrop-blur-md z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-white text-2xl font-bold">
          <span className="text-pink-500">WSCube </span>LearnFlow
        </div>

        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex space-x-8">
          {navLinks.map((link, index) => (
            <li key={index}>
              <Link
                to={link.to}
                smooth={true}
                duration={500}
                className="text-white hover:text-blue-500 cursor-pointer transition-all"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Toggle */}
        <button
          onClick={toggleMenu}
          className="text-white md:hidden focus:outline-none"
        >
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-black/90 backdrop-blur-md w-full"
          >
            <ul className="flex flex-col space-y-4 p-4">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.to}
                    smooth={true}
                    duration={500}
                    onClick={toggleMenu}
                    className="text-white hover:text-blue-500 cursor-pointer transition-all"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}