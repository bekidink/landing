// src/FluidAiLanding.js
import React from 'react';
import { motion } from 'framer-motion';

const cards = [
  { title: "Restaurant", description: "Clap Dubai", time: "4.4 · $$$$ · Japanese", style: "top-[10%] left-[10%]" },
  { title: "Upcoming Events", description: "Kite Beach", time: "10:00 - 14:00", style: "top-[40%] left-[20%]" },
  { title: "Next To-Do", description: "Renew Car Insurance", style: "top-[30%] right-[10%]" },
  { title: "Flight", description: "DXB to CDG", time: "7 hours 10 mins", style: "bottom-[10%] left-[30%]" },
  { title: "Reservations", description: "Restaurant Le Bous", time: "4 Oct 20:00", style: "bottom-[5%] right-[10%]" },
];

export default function FluidAiLanding() {
  return (
    <div className="relative min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-orange-300 via-orange-200 to-blue-300 overflow-hidden text-white">
      <motion.h1
        className="text-4xl sm:text-6xl font-bold text-center mb-6"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Unlock Seamless Efficiency
      </motion.h1>

      <motion.button
        className="px-4 sm:px-6 py-2 sm:py-3 bg-white text-black rounded-full font-semibold shadow-lg"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Join Waitlist
      </motion.button>

      {/* Cards layout */}
      {cards.map((card, index) => (
        <motion.div
          key={index}
          className={`absolute p-2 sm:p-4 bg-gray-800 rounded-xl shadow-lg w-[150px] sm:w-[200px] ${card.style}`}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: index * 0.3 }}
        >
          <h2 className="font-semibold text-lg sm:text-xl mb-2">{card.title}</h2>
          <p className="text-xs sm:text-sm">{card.description}</p>
          {card.time && <p className="text-xs text-gray-400 mt-1">{card.time}</p>}
        </motion.div>
      ))}

      <motion.p
        className="absolute bottom-10 text-white text-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        Scroll down
      </motion.p>
    </div>
  );
}
