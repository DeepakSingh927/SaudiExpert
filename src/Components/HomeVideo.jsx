import React, { useState, useEffect } from "react";
import vid from "/Assests/Home.mp4";
import { Link } from "react-router-dom";

const AnimatedSingleWord = ({ words }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const wordInterval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
        setIsAnimating(false);
      }, 1000); // Full animation duration
    }, 2000); // Change word every 2 seconds

    return () => clearInterval(wordInterval);
  }, [words.length]);

  return (
    <span className="relative inline-block min-w-[120px] overflow-hidden">
      <span
        className={`text-[#bc9a4c] inline-block transition-opacity duration-500 ease-in-out ${
          isAnimating ? 'opacity-0' : 'opacity-100'
        }`}
      >
        {words[currentIndex]}
      </span>
      <span 
        className={`absolute top-0 bottom-0 w-[2px] bg-[#cdab56] transition-all duration-1000 ease-in-out ${
          isAnimating ? 'left-0' : 'left-full'
        }`}
      ></span>
    </span>
  );
};

export default function HomeVideo() {
  const dataArray = ["Planner", "Exhibition", "Product", "Designer", "Tech"];

  return (
    <div className="relative w-full h-screen font-sans">
      <div className="fixed top-0 left-0 w-full h-full">
        <video
          src={vid}
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto transform -translate-x-1/2 -translate-y-1/2 object-cover"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50"></div>
      </div>
      <div className="fixed top-17 inset-0 flex items-center justify-center z-10">
        <div className="text-center px-4 sm:px-6 lg:px-8">
          <h1 className="check text-white font-semibold text-7xl sm:text-7xl md:text-8xl lg:text-8xl leading-tight mb-6 tracking-wide animate-fadeInUp opacity-0 delay-100">
            <span className="block mb-2">EVENT AND EXHIBITIONS</span>
            <span className="block mb-2">LEADER IN</span>
            <span className="relative inline-block">
              SAUDI
              <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-1/2 h-1 bg-[#cdab56] animate-expand"></span>
            </span>
          </h1>

          <p className=" para font-lato text-[#cdab56] font-light text-xl sm:text-2xl mt-8 animate-fadeInUp opacity-0 delay-200">
            One Of The Best Event <span className="text-white font-bold">Exhibitions</span> In Saudi
          </p>
          
          <a href="https://planninglabs.in/" target="blank">
          <p className="font-lato inline-block text-white font-light text-lg sm:text-xl mt-4 animate-fadeInUp opacity-0 delay-300 cursor-pointer ">
            Saudi Event Expert - A Division of{" "}
            <span className="relative inline-block">
              <span className="relative z-10">Planning Labs</span>
              <span className="absolute inset-0 bg-[#006bf8] opacity-60 blur-sm transform -skew-x-12"></span>
            </span>
          </p>
          </a>
         
        </div>
         {/* Scroll Indicator */}
      <div className="absolute bottom-4 flex justify-center w-full">
        <div className="flex flex-col items-center">
          <div className="relative h-16 w-12 border-2 border-[#cdab56] rounded-3xl flex justify-center items-center">
            <div className="h-4 w-2 bg-[#004E25] rounded-full animate-bounce"></div>
          </div>
          <p className="text-white mt-2">Scroll</p>
        </div>
      </div>
      </div>
    </div>
  );
}