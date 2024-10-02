import React from 'react';
import { motion } from 'framer-motion';
import RestaurantCard from './RestaurantCard';
import logo from "../assets/fai.png"
import EventCard from './EventCard';
import FlightCard from './FlightCard';
import ReservationCard from './ReservationCard';
import unionIcon from "../assets/Union.png"
import fai from "../assets/Fluid AI.png"
const Card = ({ children, className, isLeft }) => (
  <motion.div
    className={` ${className}`}
    initial={{ opacity: 0, x: isLeft ? -100 : 100 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ delay: 1, duration: 0.5 }}
    whileHover={{ scale: 1.05 }}
  >
    {children}
  </motion.div>
);

const Button = ({ children, className }) => (
  <motion.button
    className={`rounded-full ${className}`}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    {children}
  </motion.button>
);

const FluidAIPage = ({ onBackClick }) => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black from-20% via-[#612B10] via-55% to-[#F3C78B]" onClick={ onBackClick }>
      

      <div className="relative">
        <Card className="absolute rounded-lg -top-14 left-64" isLeft={true}>
          <RestaurantCard/>
        </Card>
        <Card className="absolute rounded-lg flex flex-col items-start bg-[#2626264D] bg-opacity-40 p-2 top-14 right-96" isLeft={false}>
          <h3 className="text-[#FFFFFF99] font-bold text-[18px]">Next To-Do</h3>
          <p className="text-white  text-[24px]">Renew Car insurance</p>
        </Card>
        <Card className="absolute rounded-lg flex flex-col items-start bg-[#2626264D] bg-opacity-40 bottom-40 -left-24 p-2" isLeft={true}>
          <h3 className="text-[#FFFFFF99] font-bold text-[18px]">Next To-Do</h3>
          <p className="text-white font- text-[24px]">Renew Car insurance</p>
        </Card>
        <Card className="absolute rounded-lg top-32 right-28" isLeft={false}>
          <EventCard/>
        </Card>
        <Card className="absolute  -bottom-10 left-96 bg-[#2626264D] bg-opacity-70 rounded-2xl px-4 py-1" isLeft={true}>
          <h3 className="text-white font-bold">Café nearby</h3>
        </Card>
        <Card className="absolute rounded-lg -bottom-10 left-0" isLeft={true}>
          <EventCard/>
        </Card>
        <Card className="absolute rounded-lg -bottom-80 left-60" isLeft={true}>
          <FlightCard/>
        </Card>
        <Card className="absolute rounded-lg -bottom-64 right-80" isLeft={false}>
          <ReservationCard/>
        </Card>
        <Card className="absolute  bottom-4 right-40 bg-[#2626264D] bg-opacity-70 rounded-2xl px-4 py-1 mt-8" isLeft={false}>
          <h3 className="text-white font-bold">Trip ideas</h3>
        </Card>
        <Card className="absolute rounded-2xl bottom-16 bg-[#2626264D] bg-opacity-70 right-24 px-4 py-1" isLeft={false}>
          <h3 className="text-white font-bold">Book a flight</h3>
        </Card>
        <div className="text-center flex flex-col items-center my-24 pt-10">
            <div className='flex flex-row items-center mb-10'>
            <img src={unionIcon} className='w-7 h-7 text-center mt-24'/>
          <h2 className='text-white text-[30px] text-center mt-24 ml-3'>Fluid AI</h2> 
            </div>

          
          <h1 className="text-6xl flex flex-col font-bold text-white py-4 mb-4">Unlock Seamless <span>Efficiency</span></h1>
          <motion.button
            className="bg-white text-black px-6 py-2 rounded-full font-bold"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Join Waitlist
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default FluidAIPage;