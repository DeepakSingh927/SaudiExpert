import React, { useState, useEffect } from "react";
import { ArrowRight, ChevronRight, Star } from "lucide-react";
import { motion } from "framer-motion";

export default function EventOrganizerHero() {
  const imgArray = ["/Assests/61.png", "/Assests/56-.png", "/Assests/59-.png", "/Assests/62.png", "/Assests/57-.png"];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [nextImageIndex, setNextImageIndex] = useState(1);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setFadeOut(true);
      setTimeout(() => {
        setCurrentImageIndex(nextImageIndex);
        setNextImageIndex((nextImageIndex + 1) % imgArray.length);
        setFadeOut(false);
      }, 1000);
    }, 5000);

    return () => clearInterval(intervalId);
  }, [nextImageIndex]);

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-b from-gray-900 via-gray-800 to-[#6a8dcf]">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="absolute inset-0 bg-[url('/path/to/texture.png')] opacity-10"></div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative z-10 min-h-screen flex flex-col justify-center items-start px-4 sm:px-6 md:px-8 lg:px-20"
      >
        <div className="max-w-2xl text-white">
          <motion.h1 
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-5xl lg:text-7xl font-extrabold mb-2 leading-tight tracking-tight"
          >
            EXHIBITIONS <span className="text-[#6a8dcf] italic">STALL</span>
          </motion.h1>
          <motion.h2 
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-[#6a8dcf] tracking-wide"
          >
            INNOVATING EXCELLENCE
          </motion.h2>
          <motion.p 
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-base sm:text-lg mb-6 sm:mb-8 font-serif leading-relaxed"
          >
            <span className="font-bold text-[#6a8dcf]">Saudi Event:</span> The Global Leader in EVENTS with Over{" "}
            <span className="font-bold text-[#6a8dcf]">2000</span> Deliveries Worldwide. Trust Our Expertise to Elevate
            Your Projects.
          </motion.p>
          <motion.div 
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
          >
            <button className="bg-[#6a8dcf] text-white px-8 py-4 rounded-full flex items-center justify-center text-sm font-bold transition duration-300 hover:bg-[#5a7dbf] shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              View More Stalls
              <ArrowRight className="ml-2" size={20} />
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full flex items-center justify-center text-sm font-bold transition duration-300 hover:bg-white hover:text-gray-900 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              Contact Us
              <ChevronRight className="ml-2" size={20} />
            </button>
          </motion.div>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="absolute z-20 bottom-0 right-0 h-[50%] sm:h-[60%] md:h-[70%] lg:h-[80%] w-full sm:w-[70%] md:w-[65%] lg:w-[60%] overflow-hidden rounded-tl-[50px] sm:rounded-tl-[75px] lg:rounded-tl-[100px] shadow-2xl"
      >
        <img
          src={imgArray[currentImageIndex]}
          alt={`Event Image ${currentImageIndex + 1}`}
          loading="lazy"
          className={`w-full h-full object-cover object-center transition-opacity duration-1000 ${
            fadeOut ? "opacity-0" : "opacity-100"
          }`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-50"></div>
      </motion.div>

      <div className="absolute bottom-0 left-0 text-white text-[15vw] sm:text-[20vw] font-bold leading-none opacity-5 select-none">
        EVENTS
      </div>

      <div className="absolute top-4 right-4 z-30 flex items-center space-x-2 text-white">
        <Star className="text-yellow-400" size={20} />
        <span className="text-sm font-semibold">4.9/5 Client Rating</span>
      </div>

      <div className="absolute bottom-4 sm:bottom-8 left-4 sm:left-8 md:left-20 z-30">
        <div className="flex items-center space-x-2">
          {imgArray.map((_, index) => (
            <motion.div
              key={index}
              className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full ${
                index === currentImageIndex ? "bg-[#6a8dcf]" : "bg-white opacity-50"
              }`}
              whileHover={{ scale: 1.2 }}
            ></motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}