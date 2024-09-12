import React from "react";
import Carousel from "./Carousel.jsx";
// import Carousel from "./carousel";

const CustomDivider = () => {
  return (
    <div className="w-full flex justify-end items-center bg-[#00063f] relative ">
      <div className="w-[90%]">
        <div className="flex flex-col justify-center gap-8">
          <img src="/Assests/40.png" alt="Divider"  loading="lazy" className="w-full h-full " />
          <p className="inline-block text-white text-xl font-bold  px-2">
            BEYOND EVENTS SOLUTIONS
          </p>
      <Carousel/>
        </div>
      </div>
    </div>
  );
};

export default CustomDivider;
