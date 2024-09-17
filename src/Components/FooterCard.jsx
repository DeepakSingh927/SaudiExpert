
import { ChevronRight } from "lucide-react";
import React from "react";

export default function FooterCard() {
  return (
    <div className="relative w-full">
      <div className="w-full h-[50vh] sm:h-[60vh] lg:h-[75vh]">
        <img
          src="/Assests/66.webp"
          alt="Ajax office"
          loading="lazy"
          className="w-full h-full object-cover"
        />
        <div className="absolute top-[20%] sm:top-[25%] lg:top-[30%] right-[10%] sm:right-[12%] lg:right-[15%] flex flex-col gap-5">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-blue-900">
            JOIN THE TEAM
          </h2>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900">
            SEE ALL <br /> OPENINGS
          </h1>
          <a 
           href="https://wa.me/9967253567"
           target="_blank"
           rel="noopener noreferrer"
          >
          <button className="bg-gray-900 text-white px-4 py-2 mt-4 flex items-center w-fit">
            Contact Us
            <ChevronRight className="ml-2" size={20} />
              
          </button>
          </a>
          
        </div>
      </div>
    </div>
  );
}
