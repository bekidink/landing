import { motion } from 'framer-motion';
const Card = ({ children, className, isVisible }) => (
    <motion.div
      className={`bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-4 ${className}`}
      initial={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
      animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
  export default Card

//   <AnimatePresence>
//                     {!isLogoExpanded && (
//                         <motion.div
//                             className="absolute  w-full min-h-screen bg-fluid-gradient "
//                             initial={{ opacity: 0 }}
//                             animate={{ opacity: 1 }}
//                             exit={{ opacity: 0 }}
//                             transition={{ duration: 0.5 }}
//                         >
//                              <div className="relative" onClick={toggleLogoExpansion}>
//         <Card className="absolute rounded-lg -top-44 left-64" isLeft={true}>
//           <RestaurantCard/>
//         </Card>
//         <Card className="absolute rounded-lg flex flex-col items-start p-2 bg-opacity-40 w-[90%] sm:w-auto sm:-top-16 sm:right-96" isLeft={false}>
//           <h3 className="text-[#FFFFFF99] font-bold text-[18px]">Next To-Do</h3>
//           <p className="text-white  text-[24px]">Renew Car insurance</p>
//         </Card>
//         <Card className="absolute rounded-lg flex flex-col items-start bg-[#2626264D] bg-opacity-40 sm:bottom-40 sm:-left-24 -left-52 top-0 p-2" isLeft={true}>
//           <h3 className="text-[#FFFFFF99] font-bold text-[18px]">Next To-Do</h3>
//           <p className="text-white font- text-[24px]">Renew Car insurance</p>
//         </Card>
//         <Card className="absolute rounded-lg top-12 right-28" isLeft={false}>
//           <EventCard/>
//         </Card>
//         <Card className="absolute  -bottom-10 left-96 bg-[#2626264D] bg-opacity-70 rounded-2xl px-4 py-1" isLeft={true}>
//           <h3 className="text-white font-bold">Café nearby</h3>
//         </Card>
//         <Card className="absolute rounded-lg -bottom-10 left-0" isLeft={true}>
//           <EventCard/>
//         </Card>
//         <Card className="absolute rounded-lg -bottom-80 left-60" isLeft={true}>
//           <FlightCard/>
//         </Card>
//         <Card className="absolute rounded-lg -bottom-64 right-80" isLeft={false}>
//           <ReservationCard/>
//         </Card>
//         <Card className="absolute  bottom-4 right-40 bg-[#2626264D] bg-opacity-70 rounded-2xl px-4 py-1 mt-8" isLeft={false}>
//           <h3 className="text-white font-bold text-[20px]">Trip ideas</h3>
//         </Card>
//         <Card className="absolute rounded-2xl bottom-24 bg-[#2626264D] bg-opacity-70 right-24 px-4 py-1" isLeft={false}>
//           <h3 className="text-white text-[20px] font-bold">Book a flight</h3>
//         </Card>
//         <div className="text-center flex flex-col items-center mt-52 mb-24 pt-10">
//             {/* <div className='flex flex-row items-center mb-10'>
//             <img src={unionIcon} className='w-7 h-7 text-center mt-24'/>
//           <h2 className='text-white text-[30px] text-center mt-24 ml-3'>Fluid AI</h2> 
//             </div> */}
// <motion.h1
//                   className="text-[80px] flex flex-col font-bold text-white mt-16 py-4 mb-4"
//                   initial={{ y: 100, opacity: 0 }}  
//                   animate={{ y: 0, opacity: 1 }}    
//                   transition={{ duration: 1 }}      
//                 >
//                   Unlock Seamless <span>Efficiency</span>
//                 </motion.h1>
          
//           {/* <h1 className="text-[80px] flex flex-col font-bold text-white mt-16 py-4 mb-4">Unlock Seamless <span>Efficiency</span></h1> */}
//           <motion.button
//             className="bg-white text-black px-6 py-2 rounded-full font-bold"
//             initial={{ y: 100, opacity: 0 }}  
//                   animate={{ y: 0, opacity: 1 }}    
//                   transition={{ duration: 1 }}
//           >
//             Join Waitlist
//           </motion.button>
//         </div>
//       </div>
//                         </motion.div>
//                     )}
//                 </AnimatePresence>