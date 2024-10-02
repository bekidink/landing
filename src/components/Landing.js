import React from 'react';
import { motion } from 'framer-motion';
import logo from "../assets/fai.png"
const FluidAILanding = () => {
  return (
    <div className="relative h-screen w-full bg-gradient-to-b from-black via-orange-600 to-white">
    {/* Navbar */}
    <nav className="absolute top-0 left-0 right-0 p-6 flex justify-between text-white">
      <div className="space-x-8">
        <a href="#" className="hover:text-gray-300">What we believe</a>
        <a href="#" className="hover:text-gray-300">Our features</a>
      </div>
      <div className="space-x-8">
        <a href="#" className="hover:text-gray-300">Our story</a>
        <a href="#" className="hover:text-gray-300">The waitlist</a>
      </div>
    </nav>

    {/* Hero Section */}
    <div className="flex items-center justify-center h-full">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="text-center text-white"
      >
        {/* Logo */}
        <div className="mb-8">
          <motion.img
            src={logo} // replace with the actual logo source
            alt="FluidAI"
            className="mx-auto"
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8 }}
          />
        </div>

        {/* Headline */}
        <motion.h1
          className="text-5xl md:text-6xl font-bold mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Unlock Seamless Efficiency
        </motion.h1>

        {/* Button */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <a
            href="#"
            className="inline-block px-6 py-3 bg-white text-black font-medium rounded-full shadow-lg"
          >
            Join Waitlist
          </a>
        </motion.div>
      </motion.div>
    </div>
  </div>
  );
};

export default FluidAILanding;