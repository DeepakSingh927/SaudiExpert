import React, { useState, useEffect } from "react";
import { ArrowRight, ChevronRight, Star, ChevronLeft, ChevronRightIcon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Tech Innovation Summit",
    description: "A global conference showcasing cutting-edge technologies.",
    image: "/Assests/61.png",
  },
  {
    id: 2,
    title: "Green Energy Expo",
    description: "Promoting sustainable energy solutions for a greener future.",
    image: "/Assests/56-.png",
  },
  {
    id: 3,
    title: "Art & Culture Festival",
    description: "Celebrating diversity through art, music, and cultural exhibitions.",
    image: "/Assests/59-.png",
  },
  {
    id: 4,
    title: "Sports Gala",
    description: "An international sports event bringing athletes together.",
    image: "/Assests/62.png",
  },
  {
    id: 5,
    title: "Business Leadership Conference",
    description: "Empowering future leaders with insights from industry experts.",
    image: "/Assests/57-.png",
  },
];

export default function CurrentProjectsHero() {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentProjectIndex((prevIndex) => (prevIndex + 1) % projectsData.length);
    }, 4000);

    return () => clearInterval(intervalId);
  }, []);

  const currentProject = projectsData[currentProjectIndex];

  const handlePrevProject = () => {
    setCurrentProjectIndex((prevIndex) => 
      prevIndex === 0 ? projectsData.length - 1 : prevIndex - 1
    );
  };

  const handleNextProject = () => {
    setCurrentProjectIndex((prevIndex) => 
      (prevIndex + 1) % projectsData.length
    );
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-purple-900 via-indigo-800 to-blue-600">
      <div className="absolute inset-0 bg-black opacity-30"></div>
      <div className="absolute inset-0 bg-[url('/path/to/texture.png')] opacity-20"></div>

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
            FEATURED <span className="text-yellow-400 italic">PROJECTS</span>
          </motion.h1>
          <AnimatePresence mode="wait">
            <motion.h2 
              key={currentProjectIndex + "-title"}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-yellow-400 tracking-wide"
            >
              {currentProject.title.toUpperCase()}
            </motion.h2>
          </AnimatePresence>
          <AnimatePresence mode="wait">
            <motion.p 
              key={currentProjectIndex + "-description"}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-base sm:text-lg mb-6 sm:mb-8 font-serif leading-relaxed"
            >
              {currentProject.description}
            </motion.p>
          </AnimatePresence>
          <motion.div 
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
          >
            <button className="bg-yellow-400 text-purple-900 px-8 py-4 rounded-full flex items-center justify-center text-sm font-bold transition duration-300 hover:bg-yellow-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              View Project Details
              <ArrowRight className="ml-2" size={20} />
            </button>
            <a 
             href="https://wa.me/9967253567"
             target="_blank"
             rel="noopener noreferrer">

            
            <button className="border-2 border-white text-white px-8 py-4 rounded-full flex items-center justify-center text-sm font-bold transition duration-300 hover:bg-white hover:text-purple-900 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              Contact Us
              <ChevronRight className="ml-2" size={20} />
            </button>
            </a>
          
          </motion.div>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="absolute z-20 bottom-0 right-0 h-[50%] sm:h-[60%] md:h-[70%] lg:h-[80%] w-full sm:w-[70%] md:w-[65%] lg:w-[60%] overflow-hidden rounded-tl-[50px] sm:rounded-tl-[75px] lg:rounded-tl-[100px] shadow-2xl"
      >
        <AnimatePresence mode="wait">
          <motion.img
            key={currentProjectIndex}
            src={currentProject.image}
            alt={currentProject.title}
            loading="lazy"
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5 }}
            className="w-full h-full object-cover object-center"
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-t from-purple-900 via-transparent to-transparent opacity-50"></div>
      </motion.div>

      <div className="absolute bottom-0 left-0 text-white text-[15vw] sm:text-[20vw] font-bold leading-none opacity-5 select-none">
        PROJECTS
      </div>

      <div className="absolute top-4 right-4 z-30 flex items-center space-x-2 text-white">
        <Star className="text-yellow-400" size={20} />
        <span className="text-sm font-semibold">4.9/5 Client Rating</span>
      </div>

      <div className="absolute bottom-4 sm:bottom-8 left-4 sm:left-8 md:left-20 z-30">
        <div className="flex items-center space-x-2">
          {projectsData.map((_, index) => (
            <motion.div
              key={index}
              className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full ${
                index === currentProjectIndex ? "bg-yellow-400" : "bg-white opacity-50"
              }`}
              whileHover={{ scale: 1.2 }}
            ></motion.div>
          ))}
        </div>
      </div>

      <button 
        onClick={handlePrevProject}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-30 bg-white bg-opacity-20 hover:bg-opacity-30 text-white rounded-full p-2 transition duration-300"
      >
        <ChevronLeft size={24} />
      </button>
      <button 
        onClick={handleNextProject}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-30 bg-white bg-opacity-20 hover:bg-opacity-30 text-white rounded-full p-2 transition duration-300"
      >
        <ChevronRightIcon size={24} />
      </button>
    </div>
  );
}