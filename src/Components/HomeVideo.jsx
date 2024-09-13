import React from "react";
import vid from "/Assests/HeaderVideo.mp4";

export default function HomeVideo() {
  return (
    <div className="relative w-full h-screen">
      {/* Video Background */}
      <div className="absolute top-0 left-0 w-full h-full">
        <video
          src={vid}
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto transform -translate-x-1/2 -translate-y-1/2 object-cover"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black via-black/70 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="absolute top-10 left-10 w-full h-full flex items-center z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-white font-serif font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight mb-6 tracking-wide animate-fadeInUp opacity-0 delay-100">
              <span className="block mb-2">CRAFTING</span>
              <span className="block mb-2">TRANSFORMATIVE</span>
              <span className="relative inline-block">
                EXPERIENCES
                <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-yellow-400 animate-expand"></span>
              </span>
            </h1>
            <p className="text-yellow-400 font-light text-xl sm:text-2xl mt-8 animate-fadeInUp opacity-0 delay-200">
              Event Management Leader In KSA
            </p>
            <p className="text-white font-light text-lg sm:text-xl mt-4 animate-fadeInUp opacity-0 delay-300">
              Saudi Event Expert - A Division of Planning Lab
            </p>
            <button className="mt-12 px-8 py-3 bg-yellow-400 text-black font-semibold text-lg rounded-full hover:bg-white hover:text-yellow-400 transition duration-300 animate-fadeInUp opacity-0 delay-400">
              Explore Our Services
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator - Repositioned to bottom center */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <div className="w-8 h-16 border-2 border-yellow-400 rounded-full flex justify-center items-start">
          <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 animate-scrollBounce"></div>
        </div>
        <p className="text-yellow-400 mt-2 text-center font-light">Scroll</p>
      </div>
    </div>
  );
}