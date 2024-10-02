import React from "react";
import { motion } from "framer-motion";
import image from "../assets/Rectangle 149996.png";
const ReservationCard = () => {
  return (
    <div className="relative rounded-lg  w-[160px] h-[170px] sm:h-[239.98px] sm:w-[228.15px]">
      <img
        src={image}
        alt="Clap Dubai Restaurant"
        className="w-full h-full object-cover rounded-lg"
      />

      <div className="absolute bottom-0 ">
        <div className="flex flex-col items-start">
          <div className="text-xs text-gray-700 ">Reservations</div>
          <h2 className="font-bold text-lg text-white mb-2">
            Restaurant Le Bous
          </h2>
          <div className="flex  text-gray-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 mr-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <p className="text-sm font-bold">4 Oct 20:00</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReservationCard;
