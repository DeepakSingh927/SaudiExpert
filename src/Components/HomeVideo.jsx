import React from "react";
import vid from "/Assests/HeaderVideo.mp4";
import { Link } from "react-router-dom";

export default function HomeVideo() {
  return (
    <div className="relative z-[-10]w-full h-screen font-sans">
      <div className="fixed top-0 left-0 w-full h-full">
        <video
          src={vid}
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto transform -translate-x-1/2 -translate-y-1/2 object-cover"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-90"></div>
      </div>
      <div className="fixed top-20 inset-0 flex items-center justify-center z-10">
        <div className="text-center px-4 sm:px-6 lg:px-8">
          <h1 className="font-montserrat text-white font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight mb-6 tracking-wide animate-fadeInUp opacity-0 delay-100">
            <span className="block mb-2">EVENT MANAGEMENT</span>
            <span className="block mb-2">LEADER IN</span>
            <span className="relative inline-block">
              KSA
              <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-1/2 h-1 bg-yellow-400 animate-expand"></span>
            </span>
          </h1>
          <p className="font-lato text-yellow-400 font-light text-xl sm:text-2xl mt-8 animate-fadeInUp opacity-0 delay-200">
            Crafting transformative experiences
          </p>
          <p className="font-lato text-white font-light text-lg sm:text-xl mt-4 animate-fadeInUp opacity-0 delay-300">
            Saudi Event Expert - A Division of Planning Labs
          </p>
          <a href="#services" >
          <button className="font-poppins mt-12 px-8 py-3 bg-yellow-400 text-black font-semibold text-lg rounded-full hover:bg-white hover:text-yellow-400 transition duration-300 animate-fadeInUp opacity-0 delay-400">
            Explore Our Services
          </button>
          </a>
          
        </div>
      </div>
    </div>
  );
}
