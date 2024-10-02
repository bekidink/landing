import React from 'react';
import { motion } from 'framer-motion';
import FlightPath from './FlightPath';
import FlightIcon from '../assets/flight.png'
const FlightCard = () => {
  return (
    <motion.div 
      className="sm:w-96 sm:h-52 w-64 h-40 bg-[#2626264D] bg-opacity-90 rounded-xl p-2 text-white"
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div className="flex justify-between mb-1 sm:mb-4">
        <span className="text-sm">Dubai</span>
        <span className="text-sm">Emirates Airlines</span>
        <span className="text-sm">Paris</span>
      </div>
      
      <div className="flex items-center justify-between mb-1 sm:mb-4">
        <div className="text-left">
          <h3 className="sm:text-2xl text-lg font-bold">DXB</h3>
          <p className="sm:text-xs text-sm text-gray-400">Oct 4</p>
          <p className="sm:text-xs text-sm text-gray-400">8:20</p>
        </div>
        
        <div className="flex-1 flex flex-col items-center px-1">
          <div className=" items-center">
           <img src={FlightIcon} className=' w-[80%] ml-6'/>
          </div>
          <span className="text-xs mt-2">Non-Stop</span>
        </div>
        
        <div className="text-right">
          <h3 className="sm:text-2xl text-lg font-bold">CDG</h3>
          <p className="sm:text-xs text-sm text-gray-400">Oct 4</p>
          <p className="sm:text-xs text-sm text-gray-400">13:30</p>
        </div>
      </div>
      
      <div className="grid grid-cols-3 gap-1 sm:gap-4 text-sm">
        <div>
          <p className="text-gray-400">Flight</p>
          <p>EK073</p>
        </div>
        <div>
          <p className="text-gray-400">Class</p>
          <p>Guest</p>
        </div>
        <div>
          <p className="text-gray-400">Aircraft</p>
          <p>A380</p>
        </div>
      </div>
      
      <div className="mt-1 sm:mt-4 text-center text-sm">
        <p>7 hours 10 mins</p>
      </div>
    </motion.div>
  );
};

export default FlightCard;