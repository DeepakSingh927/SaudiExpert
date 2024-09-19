// import React, { useEffect, useState } from "react";

// const FlagPopup = ({ country }) => {
//   if (!country) return null;

//   return (
//     <div
//       className="absolute top-36 flex justify-center items-center left-[40%] z-20 h-[20%] bg-gray-900 rounded-md overflow-hidden shadow-lg"
//       style={{ width: "380px" }}
//     >
//       <div className="flex items-center px-5 py-3 w-[50%]">
//         <div className="w-4 h-4 bg-red-500 rounded-full mr-4"></div>
//         <div className="text-white font-bold uppercase text-lg">
//           {country.name}
//         </div>
//       </div>
//       <div className="p-2 w-[50%]">
//         <img
//           src={country.img}
//           loading="lazy"
//           alt={`${country.name} flag`}
//           className="w-full h-auto"
//         />
//       </div>
//     </div>
//   );
// };

// export default function WorldMap() {
//   const [scrollPercentage, setScrollPercentage] = useState(0);
//   const [hoveredCountry, setHoveredCountry] = useState(null);

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollPosition = window.scrollY;
//       const maxScroll =
//         document.documentElement.scrollHeight - window.innerHeight;
//       const percentage = (scrollPosition / maxScroll) * 100;
//       setScrollPercentage(Math.min(percentage, 100));
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const gradientStyle = {
//     background: `linear-gradient(to bottom,
//       rgba(110, 105, 160, 0.2) 0%,
//       rgba(60, 80, 140, 0.5) 30%,
//       rgba(40, 60, 120, 0.75) 60%,
//      rgba(0, 1, 30, 1) 100%


// `,
//     position: "absolute",
//     top: 0,
//     left: 0,
//     right: 0,
//     bottom: 0,
//     pointerEvents: "none",
//     opacity: 0.7 + scrollPercentage / 300,
//   };

//   const dataArray = [
//     { id: "dubai", img: "/Assests/dubai.png", name: "Dubai" },
//     { id: "kuwait", img: "/Assests/kuwait.png", name: "Kuwait" },
//     { id: "Qatar", img: "/Assests/qatar.png", name: "Qatar" },
//     { id: "oman", img: "/Assests/oman.png", name: "Oman" },
//     { id: "saudi arabia", img: "/Assests/saudi.png", name: "Saudi Arabia" },
//     { id: "spain", img: "/Assests/spain.png", name: "Spain" },
//     { id: "germany", img: "/Assests/germany.png", name: "Germany" },
//     { id: "sweden", img: "/Assests/sweden.png", name: "Sweden" },
//     { id: "Norway", img: "/Assests/norway.png", name: "Norway" },
//     { id: "poland", img: "/Assests/poland.png", name: "Poland" },
//     { id: "Turkey", img: "/Assests/turkey.png", name: "Turkey" },
//     { id: "France", img: "/Assests/france.png", name: "France" },
//     { id: "Finland", img: "/Assests/finland.png", name: "Finland" },
//     { id: "China", img: "/Assests/China.webp", name: "China" },
//     { id: "Japan", img: "/Assests/Japan.webp", name: "Japan" },
//     { id: "Philippines", img: "/Assests/Philipins.webp", name: "Philippines" },
//     { id: "Singapore", img: "/Assests/Singapore.webp", name: "Singapore" },
//     { id: "Malaysia", img: "/Assests/Malaysia.webp", name: "Malaysia" },
//     { id: "Indonesia", img: "/Assests/Indonesia.webp", name: "Indonesia" },
//     { id: "Thailand", img: "/Assests/Thailand.webp", name: "Thailand" },
//     { id: "HongKong", img: "/Assests/HongKong.webp", name: "HongKong" },
//     { id: "India", img: "/Assests/India.webp", name: "India" },

//   ];

//   const positionMap = {
//     dubai: { top: "53%", left: "34.5%" },
//     kuwait: { top: "49%", left: "31%" },
//     Qatar: { top: "51.5%", left: "32%" },
//     oman: { top: "56%", left: "33.5%" },
//     "saudi arabia": { top: "53%", left: "29%" },
//     spain: { top: "40%", left: "5%" },
//     germany: { top: "31%", left: "14%" },
//     sweden: { top: "18%", left: "16.5%" },
//     Norway: { top: "22%", left: "12%" },
//     poland: { top: "30%", left: "17%" },
//     Turkey: { top: "41%", left: "23%" },
//     France: { top: "34%", left: "8%" },
//     Finland: { top: "21%", left: "20%" },
//     China: { top: "50%", left: "63%" },
//     Japan: { top: "43%", left: "75%" },
//     Philippines: { top: "60%", left: "67%" },
//     Singapore: { top: "66%", left: "57%" },
//     Malaysia: { top: "67%", left: "62%" },
//     Indonesia: { top: "71%", left: "68%" },
//     Thailand: { top: "57%", left: "56%" },
//     HongKong: { top: "53.5%", left: "63.3%" },
//     India: { top: "55.7%", left: "43.5%" },
//   };

//   const handleDotHover = (countryId) => {
//     setHoveredCountry(countryId);
//   };

//   const handleDotLeave = () => {
//     setHoveredCountry(null);
//   };

//   return (
//     <div className="relative flex flex-col items-center justify-center ">
//       <div className="relative w-full flex flex-col items-center">
//         <p className="text-center text-2xl font-serif  uppercase tracking-wider text-blue-900 my-8">
//           Saudi Event making an impact across the world
//         </p>
//         <h2 className="text-center text-4xl md:text-5xl font-extrabold uppercase tracking-widest text-blue-900">
//           The trusted global standard
//         </h2>
//         <div className="relative">
//           <img
//             src="/Assests/8.jpg"
//             alt="World Map"
//             loading="lazy"
//             className="w-full h-screen object-cover"
//           />
//           {dataArray.map((country) => (
//             <div
//               key={country.id}
//               className="absolute w-3 h-3 z-50 bg-white rounded-full hover:bg-red-900 cursor-pointer"
//               style={{
//                 top: positionMap[country.id]?.top || "0%",
//                 left: positionMap[country.id]?.left || "0%",
//               }}
//               onMouseEnter={() => handleDotHover(country.id)}
//               onMouseLeave={handleDotLeave}
//             />
//           ))}
//         </div>
//         {hoveredCountry && (
//           <FlagPopup
//             country={dataArray.find((country) => country.id === hoveredCountry)}
//           />
//         )}
//         <div style={gradientStyle} />
//       </div>
//     </div>
//   );
// }

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const FlagPopup = ({ country }) => {
  if (!country) return null;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      className="absolute top-36 md:top-40 lg:top-44 flex justify-center items-center left-1/2 transform -translate-x-1/2 z-20 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg overflow-hidden shadow-2xl"
      style={{ width: "90%", maxWidth: "380px" }}
    >
      <div className="flex items-center px-5 py-3 w-[50%]">
        <div className="w-4 h-4 bg-yellow-400 rounded-full mr-4 animate-pulse"></div>
        <div className="text-white font-bold uppercase text-sm md:text-lg">
          {country.name}
        </div>
      </div>
      <div className="p-2 w-[50%]">
        <img
          src={country.img}
          loading="lazy"
          alt={`${country.name} flag`}
          className="w-full h-auto rounded-md"
        />
      </div>
    </motion.div>
  );
};

export default function WorldMap() {
  const [scrollPercentage, setScrollPercentage] = useState(0);
  const [hoveredCountry, setHoveredCountry] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight;
      const percentage = (scrollPosition / maxScroll) * 100;
      setScrollPercentage(Math.min(percentage, 100));
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const gradientStyle = {
    background: `linear-gradient(to bottom,
      rgba(79, 70, 229, 0.1) ${scrollPercentage}%,
      rgba(109, 40, 217, 0.4) ${scrollPercentage + 20}%,
      rgba(124, 58, 237, 0.7) ${scrollPercentage + 40}%,
      rgba(139, 92, 246, 1) 100%
    )`,
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    pointerEvents: "none",
  };

  const dataArray = [
    { id: "dubai", img: "/Assests/dubai.png", name: "Dubai" },
    { id: "kuwait", img: "/Assests/kuwait.png", name: "Kuwait" },
    { id: "Qatar", img: "/Assests/qatar.png", name: "Qatar" },
    { id: "oman", img: "/Assests/oman.png", name: "Oman" },
    { id: "saudi arabia", img: "/Assests/saudi.png", name: "Saudi Arabia" },
    { id: "spain", img: "/Assests/spain.png", name: "Spain" },
    { id: "germany", img: "/Assests/germany.png", name: "Germany" },
    { id: "sweden", img: "/Assests/sweden.png", name: "Sweden" },
    { id: "Norway", img: "/Assests/norway.png", name: "Norway" },
    { id: "poland", img: "/Assests/poland.png", name: "Poland" },
    { id: "Turkey", img: "/Assests/turkey.png", name: "Turkey" },
    { id: "France", img: "/Assests/france.png", name: "France" },
    { id: "Finland", img: "/Assests/finland.png", name: "Finland" },
    { id: "China", img: "/Assests/China.webp", name: "China" },
    { id: "Japan", img: "/Assests/Japan.webp", name: "Japan" },
    { id: "Philippines", img: "/Assests/Philipins.webp", name: "Philippines" },
    { id: "Singapore", img: "/Assests/Singapore.webp", name: "Singapore" },
    { id: "Malaysia", img: "/Assests/Malaysia.webp", name: "Malaysia" },
    { id: "Indonesia", img: "/Assests/Indonesia.webp", name: "Indonesia" },
    { id: "Thailand", img: "/Assests/Thailand.webp", name: "Thailand" },
    { id: "HongKong", img: "/Assests/HongKong.webp", name: "HongKong" },
    { id: "India", img: "/Assests/India.webp", name: "India" },
  ];

  const positionMap = {
    dubai: { top: "53%", left: "34.5%" },
    kuwait: { top: "49%", left: "31%" },
    Qatar: { top: "51.5%", left: "32%" },
    oman: { top: "56%", left: "33.5%" },
    "saudi arabia": { top: "53%", left: "29%" },
    spain: { top: "40%", left: "5%" },
    germany: { top: "31%", left: "14%" },
    sweden: { top: "18%", left: "16.5%" },
    Norway: { top: "22%", left: "12%" },
    poland: { top: "30%", left: "17%" },
    Turkey: { top: "41%", left: "23%" },
    France: { top: "34%", left: "8%" },
    Finland: { top: "21%", left: "20%" },
    China: { top: "50%", left: "63%" },
    Japan: { top: "43%", left: "75%" },
    Philippines: { top: "60%", left: "67%" },
    Singapore: { top: "66%", left: "57%" },
    Malaysia: { top: "67%", left: "62%" },
    Indonesia: { top: "71%", left: "68%" },
    Thailand: { top: "57%", left: "56%" },
    HongKong: { top: "53.5%", left: "63.3%" },
    India: { top: "55.7%", left: "43.5%" },
  };

  const handleDotHover = (countryId) => {
    setHoveredCountry(countryId);
  };

  const handleDotLeave = () => {
    setHoveredCountry(null);
  };

  return (
    <div className="relative flex flex-col items-center justify-center">
      <div className="relative w-full flex flex-col items-center">
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className=" heading text-center text-lg md:text-2xl  uppercase tracking-wider text-indigo-600 my-4 md:my-8"
        >
          Saudi Event making an impact across the world
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className=" heading text-center text-2xl md:text-4xl lg:text-5xl font-extrabold uppercase tracking-widest text-purple-800"
        >
          The trusted global standard
        </motion.h2>
        <div className="relative">
          <img
            src="/Assests/8.jpg"
            alt="World Map"
            loading="lazy"
            className="w-full h-screen object-cover"
          />
          {dataArray.map((country) => (
            <motion.div
              key={country.id}
              className="absolute w-2 h-2 md:w-3 md:h-3 z-50 bg-yellow-400 rounded-full hover:bg-red-500 cursor-pointer"
              style={{
                top: positionMap[country.id]?.top || "0%",
                left: positionMap[country.id]?.left || "0%",
              }}
              onMouseEnter={() => handleDotHover(country.id)}
              onMouseLeave={handleDotLeave}
              whileHover={{ scale: 1.5 }}
              whileTap={{ scale: 0.9 }}
            />
          ))}
        </div>
        {hoveredCountry && (
          <FlagPopup
            country={dataArray.find((country) => country.id === hoveredCountry)}
          />
        )}
        <div style={gradientStyle} />
      </div>
    </div>
  );
}