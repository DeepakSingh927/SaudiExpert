import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

const FlagPopup = ({ country, position }) => {
  if (!country) return null;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 10 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.8, y: 10 }}
      className="absolute flex items-center bg-white rounded-lg overflow-hidden shadow-lg"
      style={{
        bottom: `calc(100% + 10px)`, // Position above the icon
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 20, // Increased z-index to be above icons
        minWidth: "150px",
        maxWidth: "200px",
      }}
    >
      <div className="p-3 flex items-center w-full">
        <img
          src={country.img}
          alt={`${country.name} flag`}
          className="w-10 h-8 object-cover mr-3 flex-shrink-0"
        />
        <span className="text-black text-sm font-bold truncate">
          {country.name}
        </span>
      </div>
    </motion.div>
  );
};

export default function WorldMap() {
  const [scrollPercentage, setScrollPercentage] = useState(0);
  const [highlightedCountry, setHighlightedCountry] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % dataArray.length);
    }, 2000); // Change highlight every 2 seconds

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setHighlightedCountry(dataArray[currentIndex].id);
  }, [currentIndex]);

  const gradientStyle = {
    background: `linear-gradient(to bottom,
      rgba(79, 70, 229, 0) 0%,
      rgba(109, 40, 217, 0) 100%
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
    { id: "canada", img: "/Assests/canada.png", name: "canada" },
  ];

  const positionMap = {
    dubai: { top: "53%", left: "58%" },
    kuwait: { top: "50%", left: "55.5%" },
    Qatar: { top: "51.5%", left: "56.5%" },
    oman: { top: "55%", left: "57.4%" },
    "saudi arabia": { top: "53%", left: "55%" },
    spain: { top: "45.5%", left: "45%" },
    germany: { top: "39%", left: "47.7%" },
    sweden: { top: "32%", left: "49%" }, //
    Norway: { top: "35%", left: "47%" },
    poland: { top: "39.5%", left: "49%" },
    Turkey: { top: "46.3%", left: "52%" },
    France: { top: "42.3%", left: "46%" },
    Finland: { top: "32%", left: "50.5%" }, //
    China: { top: "50%", left: "68%" },
    Japan: { top: "46.5%", left: "74.5%" },
    Philippines: { top: "60%", left: "67%" },
    Singapore: { top: "61%", left: "68.2%" },
    Malaysia: { top: "61%", left: "70.3%" },
    Indonesia: { top: "63.5%", left: "68.3%" },
    Thailand: { top: "57%", left: "56%" },
    HongKong: { top: "53%", left: "70.3%" },
    India: { top: "52.7%", left: "62.5%" },
    canada: { top: "38%", left: "28%" },
  };

  return (
    <div className="relative flex flex-col items-center justify-center bg-black py-12 pb-0 overflow-hidden">
      <div className="relative w-full max-w-7xl mx-auto px-4">
        {/* Text above the map */}
        <div className="text-center mb-8">
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="heading text-xl md:text-3xl uppercase tracking-wider text-white mb-2"
          >
            Saudi Event making an impact across the world
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="heading text-2xl md:text-4xl lg:text-5xl font-extrabold uppercase tracking-widest text-[#cdab56]"
          >
            The trusted global standard
          </motion.h2>
        </div>

        <div className="relative w-full aspect-[16/9] overflow-hidden rounded-3xl shadow-2xl border-4 border-[#cdab56]">
          <img
            src="/Assests/worldMapp.jpeg"
            alt="World Map"
            loading="lazy"
            className="w-full h-full object-cover object-center"
            style={{
              filter: "contrast(1.1) saturate(1.1) brightness(1.1)",
              imageRendering: "crisp-edges",
            }}
          />
          {dataArray.map((country) => (
            <div
              key={country.id}
              className="absolute"
              style={{
                top: positionMap[country.id]?.top || "0%",
                left: positionMap[country.id]?.left || "0%",
                transform: "translate(-50%, -50%)",
              }}
            >
              <div className="relative"> {/* Added wrapper div */}
                <motion.div
                  animate={
                    highlightedCountry === country.id
                      ? {
                          scale: [1, 1.3, 1],
                          color: ["#FFF7D1", "#FF0000", "#FFF7D1"], // Changed to red
                          filter: [
                            "drop-shadow(0 0 0 rgba(255, 0, 0, 0)) blur(0px)",
                            "drop-shadow(0 0 12px rgba(255, 0, 0, 1)) blur(1.5px)",
                            "drop-shadow(0 0 0 rgba(255, 0, 0, 0)) blur(0px)"
                          ],
                      }
                      : { scale: 1, color: "#FFF7D1", filter: "none" }
                  }
                  transition={{
                    duration: 2,
                    ease: "easeInOut",
                    repeat: highlightedCountry === country.id ? Infinity : 0,
                    repeatType: "reverse",
                  }}
                  style={{
                    position: 'relative',
                    zIndex: 2,
                  }}
                >
                  <FontAwesomeIcon
                    icon={faLocationDot}
                    className="w-4 h-4 md:w-5 md:h-5"
                  />
                  {highlightedCountry === country.id && (
                    <motion.div
                      className="absolute inset-0 z-[-1]"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.5 }}
                      style={{
                        background: 'radial-gradient(circle, rgba(255, 0, 0, 0.3) 0%, rgba(255, 0, 0, 0) 60%)', // Changed to red and reduced spread
                        filter: 'blur(4px)', // Reduced blur
                        transform: 'scale(1.8)', // Slightly reduced scale
                      }}
                    />
                  )}
                </motion.div>
                <AnimatePresence>
                  {highlightedCountry === country.id && (
                    <FlagPopup
                      country={country}
                      position={positionMap[country.id]}
                    />
                  )}
                </AnimatePresence>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}