import React, { useRef, useState } from 'react'
import { motion, AnimatePresence } from "framer-motion"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import unionIcon from "../assets/Union.png"
import scroll from "../assets/scroll.png"
import RestaurantCard from '../components/RestaurantCard'
import EventCard from '../components/EventCard'
import FlightCard from '../components/FlightCard'
import ReservationCard from '../components/ReservationCard'
import phone1 from "../assets/phonen.png"
import phone2 from "../assets/phonen1.png"
import phone3 from "../assets/phonen2.png"
import phone4 from "../assets/phonen3.png"
import phonebg from "../assets/iPhone XS Mockup 13.png"
import image1 from "../assets/image1.png"
import { Plus } from 'lucide-react';
import { Menu, X } from 'lucide-react';
import uae from "../assets/uae.png"
import usa from "../assets/usa.png"
import poland from "../assets/poland.png"
import france from "../assets/france.png"
import mask from "../assets/Mask group.png"

const Sidebar = ({ isOpen, toggleSidebar }) => (
  <motion.div
    className="fixed inset-y-0 left-0 w-64 bg-black text-white z-50"
    initial={{ x: "-100%" }}
    animate={{ x: isOpen ? 0 : "-100%" }}
    transition={{ duration: 0.5 }}
  >
    <div className="p-4 flex justify-between items-center">
      <h2 className="text-lg">Menu</h2>
      <button onClick={toggleSidebar}>
        <X className="w-6 h-6" />
      </button>
    </div>
    <div className="flex flex-col gap-4 p-4">
      <a href="#what-we-believe">What we believe</a>
      <a href="#our-features">Our Features</a>
      <a href="#faqs">FAQs</a>
      <a href="#waitlist">The Waitlist</a>
    </div>
  </motion.div>
);
const Card = ({ children, className, isLeft }) => (
  <motion.div
    className={`rounded-lg ${className}`}
    initial={{ opacity: 0, x: isLeft ? -100 : 100 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ delay: 0.5, duration: 0.5 }}
    whileHover={{ scale: 1.05 }}
  >
    {children}
  </motion.div>
);

export default function Home() {
    const [isLogoExpanded, setIsLogoExpanded] = useState(true);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
    const swiperRef = useRef(null);
    const toggleLogoExpansion = () => {
        setIsLogoExpanded(!isLogoExpanded);
    };
    const handleScroll = () => {
      const target = document.getElementById("target-section");
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    };
    const CustomPrevButton = ({ onClick }) => (
      <button className="bg-[#6464644D] text-white py-2 px-4 rounded-full shadow-md" onClick={onClick}>
        &#10094; {/* Left arrow */}
      </button>
    );
    
    const CustomNextButton = ({ onClick }) => (
      <button className="bg-[#6464644D]  py-2 px-4 text-white p-2 rounded-full shadow-md" onClick={onClick}>
        &#10095; {/* Right arrow */}
      </button>
    );
    const countries = [
      { name: 'United Arab Emirates', code: 'US', flag: uae },
      { name: 'USA ', code: 'CA', flag: usa },
      { name: 'Poland', code: 'GB', flag: poland },
      { name: 'France', code: 'DE', flag: france },
      // Add more countries as needed
    ];
    const [selectedCountry, setSelectedCountry] = useState(countries[0]);

  const handleSelect = (event) => {
    const selected = countries.find(country => country.code === event.target.value);
    setSelectedCountry(selected);
  };
    return (
        <div className={'bg-black sm:min-h-screen flex flex-col  text-white'}>
             <div className="sm:hidden fixed top-0 left-0 z-50 p-4">
        <button onClick={toggleSidebar}>
          <Menu className="w-6 h-6 text-white" />
        </button>
      </div>

      {/* Sidebar for mobile */}
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
            <div className='hidden sm:flex justify-between items-center mt-5 px-10'>
                <div className='grid grid-cols-2 gap-10 mx-10'>
                    <h2 className='text-white'>What we believe</h2>
                    <h2 className='text-white'>OurFeatures</h2>
                </div>
                <div className='grid grid-cols-2 gap-10 mx-5'>
                    <h2 className='text-white'>FAQS</h2>
                    <h2 className='text-white'>The Waitlist</h2>
                </div>
            </div>
<section className='bg-gradient-to-b justify-center flex flex-col from-black from-60% via-[#612B10] via-85% to-[#F3C78B] to-100% sm:py-10'>
<div className="flex flex-col items-center justify-center  sm:relative min-h-screen">
                <motion.div
                    className={"flex  items-center cursor-pointer"}
                    initial={{ opacity: 1, scale: 1, y: 0 }}
                    animate={isLogoExpanded ? 
                        { opacity: 1, scale: 1, y: 0 } : 
                        { opacity: 1, scale: 0.5, y: 100 }}
                    transition={{ duration: 0.5 }}
                    onClick={toggleLogoExpansion}
                >
                    <img src={unionIcon} className={' sm:w-36 sm:h-36 w-[55.16px] h-[51.29px]'}/>
                    <h2 className={'text-white sm:text-[150px] text-[50px]  ml-3'}>Fluid AI</h2> 
                </motion.div>
                
                
            </div>
            <div className=" bottom-96">
                    <div className="flex flex-col items-center" onClick={handleScroll}>
                        <img src={scroll} className='w-4 h-4 object-cover'/>
                        <p className="text-[18px] pt-5">Scroll down</p>
                    </div>
                </div>
</section>
            
          <section id='target-section' className='bg-fluid-gradient min-h-screen'>
          <motion.div
                            className="absolute  w-full min-h-screen  "
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                             <div className="relative" onClick={toggleLogoExpansion}>
        <Card className="absolute rounded-lg -top-10 sm:top-0 -left-4 sm:left-64" isLeft={true}>
          <RestaurantCard/>
        </Card>
        <Card className="absolute rounded-lg flex flex-col items-start p-2 bg-opacity-40 w-[90%] -right-64 sm:w-auto sm:-top-8 sm:right-96" isLeft={false}>
          <h3 className="text-[#FFFFFF99] font-bold text-[12px] sm:text-[18px]">Next To-Do</h3>
          <p className="text-white text-[16px] sm:text-[24px]">Renew Car insurance</p>
        </Card>
        <Card className="absolute rounded-lg flex flex-col items-start bg-[#2626264D] bg-opacity-40 bottom-10 sm:bottom-32 sm:-left-24 -left-20  p-2" isLeft={true}>
          <h3 className="text-[#FFFFFF99] font-bold text-[18px]">Next To-Do</h3>
          <p className="text-white text-[16px] sm:text-[24px]">Renew Car insurance</p>
        </Card>
        <Card className="absolute rounded-lg top-12 -right-28 sm:right-28" isLeft={false}>
          <EventCard/>
        </Card>
        <Card className="absolute -bottom-44 sm:-bottom-16 left-20 sm:left-80 bg-[#2626264D] bg-opacity-70 rounded-2xl px-4 py-1" isLeft={true}>
          <h3 className="text-white font-bold">Café nearby</h3>
        </Card>
        <Card className="absolute rounded-lg -bottom-32 sm:-bottom-16 -left-10 sm:left-0" isLeft={true}>
          <EventCard/>
        </Card>
        <Card className="absolute rounded-lg -bottom-96 sm:-bottom-80 left-0 sm:left-60" isLeft={true}>
          <FlightCard/>
        </Card>
        <Card className="absolute rounded-lg -bottom-64 right-0 sm:right-80 " isLeft={false}>
          <ReservationCard/>
        </Card>
        <Card className="absolute -bottom-16  sm:bottom-4 right-20 sm:right-40 bg-[#2626264D] bg-opacity-70 rounded-2xl px-4 py-1 mt-8" isLeft={false}>
          <h3 className="text-white font-bold text-[12px] sm:text-[20px]">Trip ideas</h3>
        </Card>
        <Card className="absolute rounded-2xl -bottom-5 sm:bottom-24 bg-[#2626264D] bg-opacity-70 right-5 sm:right-24 px-4 py-1" isLeft={false}>
          <h3 className="text-white text-[12px] sm:text-[20px] font-bold">Book a flight</h3>
        </Card>
        <div className="text-center flex flex-col items-center mt-12 mb-24 pt-10">
            <div className='flex flex-row items-center '>
            <img src={unionIcon} className='w-7 h-7 text-center mt-14'/>
          <h2 className='text-white text-[30px] text-center mt-14 ml-3'>Fluid AI</h2> 
            </div>
<motion.h1
                  className="sm:text-[52px] text-[32px] flex flex-col font-bold text-white mt-6  mb-4"
                  initial={{ y: 100, opacity: 0 }}  
                  animate={{ y: 0, opacity: 1 }}    
                  transition={{ duration: 1 }}      
                >
                  Unlock Seamless <span>Efficiency</span>
                </motion.h1>
          
          {/* <h1 className="text-[80px] flex flex-col font-bold text-white mt-16 py-4 mb-4">Unlock Seamless <span>Efficiency</span></h1> */}
          <motion.button
            className="bg-white text-black px-6 py-2 rounded-full font-bold"
            initial={{ y: 100, opacity: 0 }}  
                  animate={{ y: 0, opacity: 1 }}    
                  transition={{ duration: 1 }}
          >
            Join Waitlist
          </motion.button>
        </div>
      </div>
                        </motion.div>
          </section>
            
            {/* our services */}
             <section className=" sm:mt-12 mt-24">
    <h2 className="sm:text-[18px]  text-[16px] text-center ">Our Features</h2>
    <div className='flex flex-col items-center sm:text-center sm:font-semibold  sm:text-[40px] text-[20px] px-4'>
      <h2 className=''>Fluid AI was born out of a</h2>
      <h2 className=''>desire to simplify and</h2>
      <h2 className=''>streamline modern life</h2>
    </div>
    {/* <h2 className="sm:text-center flex flex-col sm:text-[80px] text-[32px]">Fluid AI was born out of a <span>desire to simplify and</span>  <span>streamline modern life</span> </h2> */}
    <div className='flex flex-col gap-6 mt-3 sm:mt-6'>
      <div className=' flex sm:flex-row flex-col-reverse  sm:justify-start gap-y-4 sm:gap-10'>
      <div className=' flex flex-col justify-center sm:items-start mx-5 sm:mx-16'>
          <div className='sm:mt-52 mt-5 text-center flex flex-col '>
            
          <h2 className='sm:text-3xl text-center text-lg font-semibold flex flex-col sm:items-start'>Fluid AI: Simplify, Organize,<span>
and Achieve More
  </span> </h2>
  <h6 className='sm:text-[18px] text-[13px] items-start flex flex-col mt-3'> In a world where daily tasks, communication, and <span>goals often become overwhelming, Fluid AI offers</span> <span>an innovative solution. Combining advanced AI</span> <span></span><span>technology with a user-friendly interface, it brings</span> <span>together to-do lists, chats, saved items, and bucket</span> lists into one seamless platform.</h6>
          </div>
<h2 className='text-[#FFFFFF80] text-center sm:text-start text-[18px] mt-1 sm:mt-36'>4/4</h2>

        </div>
        <img src={phone1} className='sm:w-[326px] w-[250px] justify-center sm:justify-normal h-[500px] sm:h-[633px] ml-14 sm:ml-0 object-fill'/> 

      </div>
      <div className=' flex sm:flex-row flex-col sm:justify-end sm:gap-10'>
      <img src={phone2} className='sm:w-[326px] w-[250px] justify-center sm:justify-normal h-[500px] sm:h-[633px] ml-14 sm:ml-0 object-fill'/>
      <div className=' flex flex-col justify-center sm:items-start mx-5 sm:mx-20'>
          <div className='sm:mt-52 mt-5 text-center flex flex-col '>
            
          <h2 className='sm:text-3xl text-lg font-semibold flex flex-col sm:items-start'>Fluid AI: Simplify, Organize,<span>
and Achieve More
  </span> </h2>
  <h6 className='sm:text-[18px] text-[13px] items-start flex flex-col mt-3'> In a world where daily tasks, communication, and <span>goals often become overwhelming, Fluid AI offers</span> <span>an innovative solution. Combining advanced AI</span> <span></span><span>technology with a user-friendly interface, it brings</span> <span>together to-do lists, chats, saved items, and bucket</span> lists into one seamless platform.</h6>
          </div>
<h2 className='text-[#FFFFFF80] text-center sm:text-start text-[18px] mt-1 sm:mt-36'>4/4</h2>

        </div>

        
       

      </div>
      <div className=' flex sm:flex-row flex-col-reverse sm:justify-start sm:gap-10'>
     
      <div className=' flex flex-col justify-center sm:items-start mx-5 sm:mx-20'>
          <div className='sm:mt-52 mt-5 text-center flex flex-col '>
            
          <h2 className='sm:text-3xl text-lg font-semibold flex flex-col sm:items-start'>Fluid AI: Simplify, Organize,<span>
and Achieve More
  </span> </h2>
  <h6 className='sm:text-[18px] text-[13px] items-start flex flex-col mt-3'> In a world where daily tasks, communication, and <span>goals often become overwhelming, Fluid AI offers</span> <span>an innovative solution. Combining advanced AI</span> <span></span><span>technology with a user-friendly interface, it brings</span> <span>together to-do lists, chats, saved items, and bucket</span> lists into one seamless platform.</h6>
          </div>
<h2 className='text-[#FFFFFF80] text-center sm:text-start text-[18px] mt-1 sm:mt-36'>4/4</h2>

        </div>
        <img src={phone3} className='sm:w-[326px] w-[250px] justify-center sm:justify-normal h-[500px] sm:h-[633px] ml-14 sm:ml-0 object-fill'/>

      </div>
      <div className=' flex sm:flex-row flex-col sm:justify-end sm:gap-10'>
      <img src={phone4} className='sm:w-[326px] w-[250px] justify-center sm:justify-normal h-[500px] sm:h-[633px] ml-14 sm:ml-0 object-fill'/>
      <div className=' flex flex-col justify-center sm:items-start mx-5 sm:mx-16'>
          <div className='sm:mt-52 mt-5 text-center flex flex-col '>
            
          <h2 className='sm:text-3xl text-lg font-semibold flex flex-col sm:items-start'>Fluid AI: Simplify, Organize,<span>
and Achieve More
  </span> </h2>
  <h6 className='sm:text-[18px] text-[13px] items-start flex flex-col mt-3'> In a world where daily tasks, communication, and <span>goals often become overwhelming, Fluid AI offers</span> <span>an innovative solution. Combining advanced AI</span> <span></span><span>technology with a user-friendly interface, it brings</span> <span>together to-do lists, chats, saved items, and bucket</span> lists into one seamless platform.</h6>
          </div>
<h2 className='text-[#FFFFFF80] text-center sm:text-start text-[18px] mt-1 sm:mt-36'>4/4</h2>

        </div>
       

      </div>
    </div>
</section>
{/* swiper */}
<section className="my-10 flex flex-col">
    <div className='flex flex-col items-start text-[20px] sm:text-[36px] my-3 mx-2 sm:my-5 sm:mx-4 '>
   <h1> Fluid AI was born out of a desire to </h1>
    <h1>simplify and streamline modern life</h1>
    </div>
    <Swiper
      ref={swiperRef}
      loop={true}
      navigation={{
        prevEl: '.custom-prev-button',
        nextEl: '.custom-next-button',
      }}
      pagination={{ clickable: true }}
      modules={[Navigation, Pagination]}
      className="w-full bg-black"
    >
      {/* Slide 1 */}
      <SwiperSlide>
        <div className="relative h-[400px] md:h-[600px] bg-cover bg-center" style={{ backgroundImage: 'url(/image1.png)' }}>
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
            <div className="mr-2 sm:mr-4 transform -translate-y-1/2 custom-prev-button">
              <CustomPrevButton onClick={() => swiperRef.current.swiper.slidePrev()} />
            </div>
            <div className="text-center bg-[#6464644D] rounded-2xl text-white justify-between">
              <div className='flex flex-col items-start text-sm sm:text-[24px] sm:mr-16 sm:py-2 sm:px-4 md:text-2xl px-2 py-3 font-light mb-3 mr-10'>
                <h2>Fluid has Internet access, so</h2>
                <h2>you can get up-to-date</h2>
                <h2>information from it.</h2>
              </div>  
              <h1 className="text-xl text-start mt-40 sm:mt-52 px-2 py-3 sm:px-4 sm:py-4 md:text-3xl font-bold">Time fo work</h1>
            </div>
            <div className="ml-2 sm:ml-4 transform -translate-y-1/2 custom-next-button">
              <CustomNextButton onClick={() => swiperRef.current.swiper.slideNext()} />
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="relative h-[400px] md:h-[600px] bg-cover bg-center" style={{ backgroundImage: 'url(/image2.png)' }}>
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
            <div className="mr-2 sm:mr-4 transform -translate-y-1/2 custom-prev-button">
              <CustomPrevButton onClick={() => swiperRef.current.swiper.slidePrev()} />
            </div>
            <div className="text-center bg-[#6464644D] rounded-2xl text-white justify-between">
              <div className='flex flex-col items-start text-sm sm:text-[24px]  sm:mr-16 sm:py-2 sm:px-4 md:text-2xl px-2 py-3 font-light mb-3 mr-10'>
                <h2>You can use Fluid as an</h2>
                <h2>assistant to save time -</h2>
                <h2>and save your sanity.</h2>
              </div>
              <h1 className="text-xl text-start mt-40 px-2 py-3 sm:mt-52 sm:px-4 sm:py-4 md:text-3xl font-bold">Time for family</h1>
            </div>
            <div className="ml-2 sm:ml-4 transform -translate-y-1/2 custom-next-button">
              <CustomNextButton onClick={() => swiperRef.current.swiper.slideNext()} />
            </div>
          </div>
        </div>
      </SwiperSlide>
      {/* Slide 2 */}
      <SwiperSlide>
        <div className="relative h-[400px] md:h-[600px] bg-cover bg-center" style={{ backgroundImage: 'url(/image3.png)' }}>
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
            <div className="mr-2 sm:mr-4 transform -translate-y-1/2 custom-prev-button">
              <CustomPrevButton onClick={() => swiperRef.current.swiper.slidePrev()} />
            </div>
            <div className="text-center bg-[#6464644D] rounded-2xl text-white justify-between">
              <div className='flex flex-col items-start text-sm text-[24px] sm:mr-16 sm:py-2 px-2 sm:px-4 md:text-2xl py-3 font-light mb-3 mr-10'>
                <h2>Fluid easily integrates</h2>
                <h2>with your friends'</h2>
                <h2>calendars</h2>
              </div>  
              <h1 className="text-xl text-start mt-40 px-2 py-3 sm:mt-52 sm:px-4 sm:py-4 md:text-3xl font-bold">Time for friends</h1>
            </div>
            <div className="ml-2 sm:ml-4 transform -translate-y-1/2 custom-next-button">
              <CustomNextButton onClick={() => swiperRef.current.swiper.slideNext()} />
            </div>
          </div>
        </div>
      </SwiperSlide>

      {/* Slide 3 */}
      
    </Swiper>
</section>
{/* faqs */}
<section className="my-10">
    {/* <h2 className="text-4xl font-bold text-center">Section 3 Title</h2> */}
    <div className='flex flex-col md:flex-row'>
      <div className='flex flex-col w-[353px] md:w-[484px] h-auto md:h-[271px] mx-4 md:mx-10 justify-center'>
        <div className='flex flex-col text-lg sm:text-2xl font-semibold'>
<h2>
What can curiosity, 
</h2>
<h2>wonder, and awe</h2>
<h2> do for you?</h2>
        </div>
        {/* <h2 className='text-[20px] md:text-[56px] leading-tight'></h2> */}
        <h2 className='text-[12px] md:text-[18px] mt-4'>Research shows that experiencing curiosity and awe can immensely benefit our mental, physical, and professional health. Here’s a brief overview of what curiosity and awe can do for you.</h2>
      </div>
      <div className='flex flex-col mx-6 md:mx-10 w-full md:w-[665px] gap-y-4 mt-8 md:mt-0'>
    {[...Array(6)].map((_, idx) => (
      <div key={idx} className='flex flex-row  sm:justify-between flex-grow border-b pb-2 border-[#FFFFFF66]'>
        <h2 className='text-[12px] md:text-[18px] leading-tight'>
          Does Fluid AI increase wellbeing and meaning in life?
        </h2>
        <Plus className='w-4 h-4 ml-10 sm:ml-0'/> {/* Show on md and up, hidden on mobile */}
      </div>
    ))}
  </div>
    </div>
</section>
{/* waitlist */}
<section className='mt-10 bg-gradient-to-br sm:bg-gradient-to-tr flex sm:flex-row flex-col  from-black from-25% via-[#612B10] via-75% to-[#F3C78B] to-100%'>
<div className='flex flex-col gap-y-2 w-1/2 sm:w-1/3 mx-6 sm:ml-20'>
  <div className='flex flex-col text-xl  mt-10   sm:text-2xl'>
  <h2 className=' '>Join the Fluid AI </h2>
  <h2>Waitlist Today!</h2>
  </div>
  
  <div className='flex flex-col border-b border-gray-50 '>
    <h2 className='text-[#FFFFFF66]'>Name</h2>
    <input id='name' className="appearance-none bg-transparent w-2/3  focus:outline-none"/>
  </div>
  <div className='flex flex-col border-b border-gray-50 '>
    <h2 className='text-[#FFFFFF66]'>Email</h2>
    <input id='email' className="appearance-none bg-transparent w-2/3  focus:outline-none"/>
  </div>
  <div className="text-white border-b border-gray-50  py-2   ">
      {/* <label htmlFor="country" className="block text-sm font-medium text-gray-700">Select a country</label> */}
      <div className="relative mt-1">
        <div className="flex items-center    ">
          <img src={selectedCountry.flag} alt={selectedCountry.name} className="w-6 h-6 mr-2" />
          <select
            id="country"
            value={selectedCountry.code}
            onChange={handleSelect}
            className="appearance-none bg-transparent w-full  focus:outline-none"
          >
            {countries.map((country) => (
              <option key={country.code} value={country.code} className='bg-[#232323]'>
                <div className='flex justify-between'>
                <img src={country.flag} alt={country.name} className="w-4 h-4 mr-2" />
                {country.name}
                </div>

              </option>
            ))}
          </select>
          <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
            <svg className="h-4 w-4 fill-current text-gray-400" viewBox="0 0 20 20">
              <path d="M7 10l5 5 5-5H7z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  <motion.button
            className="bg-white  h-[52px] w-[167px] text-black mt-4 sm:mt-5 px-6 py-2 rounded-full font-bold"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Join Waitlist
          </motion.button>
</div>
<div>
  <div className='w-2/3'>
  <img src={mask} className='w-full h-[300px] sm:h-[639.81px]  object-fill mr-20 justify-end'/>
  </div>

</div>
</section>
{/* Footer */}
<section className='mt-10 flex flex-col sm:flex-row justify-between  sm:justify-between'>
<div className='flex flex-col gap-2 pt-10 mx-5 sm:mx-10'>
<div className='flex flex-row items-center'>
<img src={unionIcon} className={' w-[48px] h-[44px]'}/>
<h2 className={'text-white text-[50px] ml-3'}>Fluid AI</h2> 
</div>
<div className='flex flex-row '>
  <h6>
  2024 Fluid AI
  </h6>
</div>
</div>
<div className='flex sm:mx-10 mx-5  sm:gap-x-52 gap-x-20 pt-10'>
<div className='flex flex-col gap-y-4'>
<h6 className='text-[16px] text-[#FFFFFF80]'>Our Features</h6>
<h6 className='text-[16px] text-[#FFFFFF80]'>Areas</h6>
<h6 className='text-[16px] text-[#FFFFFF80]'>FAQs</h6>
<h6 className='text-[16px] text-[#FFFFFF80]'>The Waitlist</h6>
<h6 className='text-[16px] text-[#FFFFFF80]'>Contact us</h6>

</div>
<div>
  <div className='flex flex-col gap-y-6'>
<h6 className='text-[16px] text-[#FFFFFF80]' >Terms of Service</h6>
<h6 className='text-[16px] text-[#FFFFFF80]'>Privacy Policy</h6>
  </div>
</div>
</div>
</section>
            
           

            {/* {isLogoExpanded && (
                <div className="mb-10">
                    <div className="flex flex-col items-center" onClick={toggleLogoExpansion}>
                        <img src={scroll} className='w-4 h-4 object-cover'/>
                        <p className="text-[18px] pt-5">Scroll down</p>
                    </div>
                </div>
            )} */}
        </div>
    )
}