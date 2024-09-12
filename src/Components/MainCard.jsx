  import React, { useState, useEffect } from "react";
  import { ArrowRight } from "lucide-react";

  export default function MainCard() {
    const imgArray = ["/Assests/61.png","/Assests/56-.png","/Assests/59-.png","/Assests/62.png","/Assests/57-.png"];
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
      <div className="h-screen relative overflow-hidden">
      
        <div className="absolute top-0 left-0 right-0 h-1/2 bg-gray-900"></div>

      
        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-[#6a8dcf] to-transparent"></div>


        <div className="relative z-10 h-full flex flex-col justify-between">
          <div className="p-20 max-w-2xl text-white">
            <h2 className="text-5xl font-bold mb-2">EXHIBITIONS STALL </h2>
            <h2 className="text-3xl font-bold mb-4">INNOVATING EXCELLENCE</h2>
            <p className="text-sm mb-6 font-serif nextcss">
              <b>Saudi Event : </b>The Global Leader in EVENTS with Over{" "}
              <b>2000</b> Deliveries Worldwide. Trust Our Expertise to Elevate
              Your Projects.
            </p>
            <div className=" inline-block p-1  border-2 hover:bg-gray-800 border-white ">
              <button className="bg-gray-900 text-white px-5 py-2 flex items-center text-sm gap-1  ">
                View More Stalls
                <ArrowRight className="ml-2" size={24} />
              </button>
            </div>
          </div>

          <div className="absolute z-50 bottom-11 right-0 h-[87%] w-[65%] overflow-hidden">
            <img
              src={imgArray[currentImageIndex]}
              alt={`Event Image ${currentImageIndex + 1}`}
              loading="lazy"
              className={`w-full h-full object-cover object-center transition-opacity duration-1000 ${
                fadeOut ? "opacity-0" : "opacity-100"
              }`}
            />
          </div>

          <div className="absolute pl-16 bottom-0 left-0 text-gray-800 text-[20vw] font-bold leading-none opacity-20">
            EVENTS
          </div>
        </div>
      </div>
    );
  }
