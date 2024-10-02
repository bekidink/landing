import React from 'react';

const FlightPath = () => {
  return (
    <svg width="192" height="24" viewBox="0 0 192 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* First half - solid curved path (ascending) */}
      <path
        d="M4 12C50 12 96 4 96 4"
        stroke="#D1D5DB"
        strokeWidth="2"
        strokeLinecap="round"
      />
      
      {/* Second half - dashed curved path (descending) */}
      <path
        d="M96 4C96 4 142 4 188 12"
        stroke="#D1D5DB"
        strokeWidth="2"
        strokeLinecap="round"
        strokeDasharray="4 4"
      />
      
      {/* Start circle */}
      <circle cx="4" cy="12" r="4" fill="#D1D5DB" />
      
      {/* End circle */}
      <circle cx="188" cy="12" r="4" fill="#D1D5DB" />
      
      {/* Airplane icon */}
      <g transform="translate(88, -2) scale(0.5)">
        <path d="M21 16V7H5V16H21Z M21 4C21.5304 4 22.0391 4.21071 22.4142 4.58579C22.7893 4.96086 23 5.46957 23 6V17C23 17.5304 22.7893 18.0391 22.4142 18.4142C22.0391 18.7893 21.5304 19 21 19H5C4.46957 19 3.96086 18.7893 3.58579 18.4142C3.21071 18.0391 3 17.5304 3 17V6C3 5.46957 3.21071 4.96086 3.58579 4.58579C3.96086 4.21071 4.46957 4 5 4H21Z M14.5 11C14.5 11.663 14.2366 12.2989 13.7678 12.7678C13.2989 13.2366 12.663 13.5 12 13.5C11.337 13.5 10.7011 13.2366 10.2322 12.7678C9.76339 12.2989 9.5 11.663 9.5 11C9.5 10.337 9.76339 9.70107 10.2322 9.23223C10.7011 8.76339 11.337 8.5 12 8.5C12.663 8.5 13.2989 8.76339 13.7678 9.23223C14.2366 9.70107 14.5 10.337 14.5 11Z" fill="#4B5563"/>
      </g>
    </svg>
  );
};

export default FlightPath;