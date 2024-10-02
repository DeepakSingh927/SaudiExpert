import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, ChevronDown, Check } from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "./footer"; // Add this line to import the Footer component
// Remove this line: import { Link as ScrollLink } from 'react-scroll';
import OurSevices from "./oursevices"; // Corrected import statement
const eventTypes = [
  "LAUNCHES",
  "WORKSHOPS",
  "EXHIBITIONS",
  "CONFERENCES",
  "SEMINARS",
  "FESTIVALS",
  "GATHERINGS",
];

const services = [
  "Exhibitions Services",
  "Event Services",
  "Digital Marketing",
  "Branding & Promotion",
];

const TextComponent = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  useEffect(() => {
    let timeout;
    if (isTyping) {
      if (displayText.length < eventTypes[currentIndex].length) {
        timeout = setTimeout(() => {
          setDisplayText(
            eventTypes[currentIndex].slice(0, displayText.length + 1)
          );
        }, 100);
      } else {
        // Word is fully typed, wait before moving to next word
        timeout = setTimeout(() => {
          setIsTyping(false);
          setDisplayText("");
          setCurrentIndex((prevIndex) => (prevIndex + 1) % eventTypes.length);
        }, 1500);
      }
    } else {
      // Start typing the next word after a short pause
      timeout = setTimeout(() => {
        setIsTyping(true);
      }, 500);
    }
    return () => clearTimeout(timeout);
  }, [currentIndex, displayText, isTyping]);

  const scrollToFooter = () => {
    const footer = document.getElementById("footer");
    if (footer) {
      footer.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="w-full bg-[#0a0203] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="heading text-6xl font-bold text-center mb-16 text-[#bc9a4c] uppercase drop-shadow-lg"
        >
          Saudi Arabia's Best Agency
        </motion.h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-12">
            <div className="relative h-32">
              <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="heading text-2xl font-extrabold mb-4 text-[#bc9a4c]"
              >
                EVENT SOLUTIONS FOR
              </motion.h2>
              <div className="absolute">
                <span className="text-5xl font-bold text-white">
                  {displayText}
                  <span className="relative">
                    <span className="animate-blink text-[#cdab56]">|</span>
                    <span className="spark-container">
                      <span className="spark"></span>
                      <span className="spark"></span>
                      <span className="spark"></span>
                    </span>
                  </span>
                </span>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-gray-900 rounded-xl shadow-2xl p-8 space-y-6"
            >
              <h3 className="heading text-2xl font-semibold text-[#bc9a4c]">
                Explore Our Event Types
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {eventTypes.map((event, index) => (
                  <motion.button
                    key={event}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`p-4 para rounded-lg text-left transition-colors ${
                      selectedEvent === index
                        ? "bg-[#bc9a4c] text-black"
                        : "bg-gray-800 text-white hover:bg-gray-700"
                    }`}
                    onClick={() => setSelectedEvent(index)}
                    aria-pressed={selectedEvent === index}
                  >
                    <span className="text-xl font-bold">{event}</span>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </div>

          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="bg-gray-900 rounded-xl shadow-2xl p-8 space-y-6"
            >
              <h3 className=" heading text-2xl font-semibold text-[#bc9a4c]">
                How We Work
              </h3>
              <p className="para text-gray-300">
                Our approach focuses on understanding the unique needs of every
                client and event. From consultation to execution, we prioritize
                attention to detail, efficiency, and creativity.
              </p>
              <p>
                <a
                  href="#sevices" // Keep this as is
                  onClick={(e) => {
                    e.preventDefault();
                    const servicesSection = document.getElementById("sevices"); // Use "sevices" here
                    if (servicesSection) {
                      servicesSection.scrollIntoView({ behavior: "smooth" });
                    } else {
                      console.error("Services section not found");
                    }
                  }}
                  className="cursor-pointer text-[#bc9a4c] hover:underline"
                >
                  learn more
                </a>
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-[#bc9a4c] text-black rounded-xl shadow-2xl p-8 space-y-6"
            >
              <h3 className=" heading text-2xl font-semibold">
                What is Different in Us
              </h3>
              <p className="para text-lg font-[400]">
                We go beyond just planning events—we create unforgettable
                experiences. Our team is always up-to-date with the latest
                trends, ensuring your event is innovative and impactful.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className="flex items-center justify-between w-full bg-black text-[#bc9a4c] rounded-lg px-4 py-2 font-semibold"
                aria-expanded={isServicesOpen}
              >
                <span className="heading">Our Services</span>
                <ChevronDown
                  size={20}
                  style={{
                    transform: isServicesOpen
                      ? "rotate(180deg)"
                      : "rotate(0deg)",
                    transition: "transform 0.3s ease-in-out",
                  }}
                />
              </motion.button>
              <AnimatePresence>
                {isServicesOpen && (
                  <motion.ul
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className=" para space-y-2 mt-4 max-h-40 overflow-y-auto"
                  >
                    {services.map((service, index) => (
                      <motion.li
                        key={service}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        className="flex items-center space-x-2"
                      >
                        <Check size={16} />
                        <span>{service}</span>
                      </motion.li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TextComponent;
