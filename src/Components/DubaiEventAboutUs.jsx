import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Sparkles, Calendar, Users, Award } from "lucide-react";

const eventTypes = [
  {
    icon: <Sparkles className="w-8 h-8" />,
    name: "Luxurious Galas",
    description:
      "Elevate your gala with unparalleled elegance and sophistication.",
  },
  {
    icon: <Calendar className="w-8 h-8" />,
    name: "Corporate Events",
    description:
      "Impress clients and motivate teams with our world-class corporate events.",
  },
  {
    icon: <Users className="w-8 h-8" />,
    name: "Cultural Celebrations",
    description:
      "Honor traditions and create new memories with our culturally-rich events.",
  },
  {
    icon: <Award className="w-8 h-8" />,
    name: "Award Ceremonies",
    description:
      "Recognize excellence with our meticulously planned award ceremonies.",
  },
];

export default function SaudiEventExpert({ companyData }) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % eventTypes.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative z-50 min-h-screen bg-gradient-to-r from-yellow-100 to-green-100 text-gray-800 p-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-6xl font-extrabold text-yellow-400 relative inline-block transform perspective-1000 rotateX-10 shadow-3d">
            {companyData.name}
          </h1>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-semibold text-green-600">
              {companyData.tagline}
            </h2>
            <p className="text-lg">{companyData.description}</p>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4 text-yellow-400">
                Our Expertise
              </h3>
              <ul className="space-y-4">
                {eventTypes.map((type, index) => (
                  <motion.li
                    key={type.name}
                    className={`flex items-center space-x-3 p-2 rounded ${
                      index === activeIndex ? "bg-green-500 text-white" : ""
                    }`}
                    animate={{ scale: index === activeIndex ? 1.05 : 1 }}
                    transition={{ duration: 1 }}
                  >
                    {type.icon}
                    <span>{type.name}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="relative"
          >
            <img
              src={companyData.imageUrl}
              alt="Saudi Event Showcase"
              className="w-full h-[500px] object-cover rounded-lg shadow-2xl"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6">
              <p className="text-white text-xl font-semibold">
                {companyData.imageCaption}
              </p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <h3 className="text-2xl font-semibold mb-4 text-green-600">
            Ready to create an unforgettable event?
          </h3>
          <a
            href="https://wa.me/9967253567"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-yellow-400 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-green-500 transition duration-300"
          >
            Contact Us
          </a>
        </motion.div>
      </div>
    </div>
  );
}
