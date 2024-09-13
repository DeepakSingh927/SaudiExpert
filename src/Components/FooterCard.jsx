import React from "react";

export default function FooterCard() {
  return (
    <div className="relative w-full ">
        <div className="w-full h-[75vh]">
        <img src="/Assests/66.webp" alt="Ajax office" loading="lazy" className="w-full h-full" />
      <div className="absolute top-[30%] right-[15%] flex flex-col gap-5">
        <h2 className="text-3xl font-bold text-blue-900">JOIN THE TEAM</h2>
        <h1 className="text-6xl font-extrabold text-gray-900">
          SEE ALL <br />OPENINGS
        </h1>
        <button className="bg-gray-900 text-white px-6 py-2 mt-4 flex items-center w-fit">
          Join Us
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
        </div>
    
    </div>
  );
}