import React from "react";
import restaurant from "../assets/restaurant.png";

const RestaurantCard = () => {
  return (
    <div className="relative rounded-lg w-full max-w-[234.46px] h-[188px] sm:h-[208px] sm:w-full">
      <img
        src={restaurant}
        alt="Clap Dubai Restaurant"
        className="w-full h-full object-cover rounded-lg"
      />

      <div className="absolute top-2 left-2">
        <span className="text-white text-xs sm:text-sm font-semibold bg-black/50 px-2 py-1 rounded">
          Restaurant
        </span>
      </div>

      <div className="absolute top-2 right-2">
        <button className="text-white opacity-50 hover:opacity-100">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 sm:h-6 sm:w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
            />
          </svg>
        </button>
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 bg-gradient-to-t from-black/70 to-transparent">
        <h3 className="text-white text-lg sm:text-xl font-bold mb-1">
          Clap Dubai
        </h3>
        <div className="flex items-center text-xs sm:text-sm">
          <span className="text-[#FFFFFF99] mr-1">4.4</span>
          <span className="text-[#FFFFFF99] mr-2">•</span>
          <span className="text-[#FFFFFF99] mr-2">$$$$</span>
          <span className="text-[#FFFFFF99]">•</span>
          <span className="text-[#FFFFFF99] ml-2">Japanese</span>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
