import React from 'react';
import { motion } from 'framer-motion';
import image1 from '../assets/Ellipse 26.png'
import image2 from '../assets/Ellipse 26 (1).png'
import image3 from '../assets/Ellipse 26 (2).png'
const EventCard = () => {
  return (
    <motion.div 
      className="sm:w-[282.18px] w-[173px] h-[130px] sm:h-[153.96px] relative flex flex-col justify-between bg-[#2626264D]  bg-opacity-80 rounded-xl "
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div className="flex items-center justify-end mb-3 mt-3 mx-4">
        <div className="flex top-[18.71px] left-[171.49px] -space-x-2 overflow-hidden">
          <img className="inline-block h-8 w-8 rounded-full ring-2 ring-gray-800" src={image3} alt=""/>
          <img className="inline-block h-8 w-8 rounded-full ring-2 ring-gray-800" src={image2} alt=""/>
          <img className="inline-block h-8 w-8 rounded-full ring-2 ring-gray-800" src={image1} alt=""/>
        </div>
      </div>
      <div className='flex flex-col top-[77.95px] left-[18.71px] w-[138.75px] h-[88.03px] bottom-0 mx-3'>
      <h3 className="text-[#FFFFFF99] text-start text-sm font-semibold mb-1">Upcoming Events</h3>
      <p className="text-white text-start text-lg font-bold mb-1">Kite Beach</p>
      <div className="flex items-center text-gray-400 text-sm">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <span>10:00 - 14:00</span>
      </div>
      </div>
      
    </motion.div>
  );
};

export default EventCard;