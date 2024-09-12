import React from "react";
import vid from "/Assests/9.mp4"

export default function HomeVideo() {
  return (
    <div className="relative w-full h-screen">
      <div className="fixed top-0 left-0 w-full h-screen overflow-hidden z-[-1]">
        <video
          src={vid}
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto transform -translate-x-1/2 -translate-y-1/2 object-cover"
        />
      </div>
      <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-0"></div>
      <div className="fixed top-1/4 left-4 sm:left-8 md:left-16 lg:left-24 z-10 w-full sm:w-auto px-4 sm:px-0">
        <h1 className="text-white font-sans font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl ">
          Saudi Event
          <br />
          <span className="relative inline-block">
            management
            <span className="absolute -bottom-1 sm:-bottom-2 left-0 w-16 sm:w-20 md:w-24 h-0.5 sm:h-1 bg-red-500"></span>
          </span>
          <br />
          Agency
        </h1>
      </div>
    </div>
  );
}