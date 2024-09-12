import React, { useState, useEffect } from "react";

export default function SimilerProductCard({ dataArray }) {
  const [selectedTab, setSelectedTab] = useState("production");
  const [isAnimating, setIsAnimating] = useState(false);

  const selectedData = dataArray.find((data) => data.key === selectedTab);

  const handleTabClick = (key) => {
    if (key !== selectedTab) {
      setIsAnimating(true);
      setTimeout(() => {
        setSelectedTab(key);
        setIsAnimating(false);
      }, 300);
    }
  };

  const backgroundStyle = {
    backgroundImage: `url(${selectedData.bgImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    transition: "background-image 0.3s ease-in-out",
  };

  return (
    <div className="relative bg-[#e1e1e1] flex justify-center align-center h-full">
      <div className="w-[70%] bg-[#e1e1e1] flex flex-col">
        <div className="w-[80%]  flex-grow flex flex-col justify-around p-20">
          <div
            className={`transition-opacity duration-300 ${
              isAnimating ? "opacity-0" : "opacity-100"
            }`}
          >
            <span className="text-white title-tag-tab blue-grad inline-block text-2xl font-bold border-2 nextcss">
              {selectedData.title1}
            </span>
            <h1 className="text-6xl text-[#ababab] font-extrabold mt-8 leading-[1.150]">
              <span className="text-weight-light text-black">
                {selectedData.spanTitle}
              </span>{" "}
              <br />
              {selectedData.h1Title}
            </h1>
            <p className="text-lg mt-6 w-[85%] nextcss">{selectedData.des}</p>

            <div className="inline-block p-1 border-black border-2 mt-8">
              <span className="text-xl text-white bg-[#00063f] inline-block font-bold p-2">
                View similar products →
              </span>
            </div>
          </div>

          <div className="mt-10">
            <ul className="flex space-x-4 text-sm uppercase justify-center align-center cursor-pointer">
              {dataArray.map((item, index) => (
                <React.Fragment key={item.key}>
                  <li
                    onClick={() => handleTabClick(item.key)}
                    className={`${
                      selectedTab === item.key
                        ? "text-blue-600 font-bold"
                        : "text-blue-600"
                    } transition-colors duration-300`}
                  >
                    {item.key.charAt(0).toUpperCase() + item.key.slice(1)}
                  </li>
                  {index < dataArray.length - 1 && (
                    <li className="border-r border-blue-900 h-7"></li>
                  )}
                </React.Fragment>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="w-[30%]" style={backgroundStyle}>
        <div
          className={`w-[35%] absolute text-white flex top-[7%] left-[65%] align-center transition-opacity duration-300 ${
            isAnimating ? "opacity-0" : "opacity-100"
          }`}
        >
          <div className="border-black border-2 w-[70%] p-[1.4rem] bg-[#00063f]">
            <h2 className="text-3xl font-bold">{selectedData.rightTitle}</h2>
            <p className="text-lg w-[90%] mt-2">{selectedData.rightDes}</p>
          </div>
        </div>
        <img
          src={selectedData.img}
          className={`absolute w-[40%] top-[35%] right-8 transition-opacity duration-300 ${
            isAnimating ? "opacity-0" : "opacity-100"
          }`}
          alt={selectedData.title1}
        />
      </div>
    </div>
  );
}
