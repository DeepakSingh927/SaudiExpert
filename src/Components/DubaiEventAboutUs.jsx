import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Sparkles, Calendar, Users, Award, ArrowRight } from "lucide-react";
import ImageCube from "../Components/ImageCube .jsx";

const eventTypes = [
  {
    icon: <Sparkles className="w-8 h-8 md:w-12 md:h-12" />,
    name: "Luxurious Galas",
    description: "Elevate your gala with unparalleled elegance and sophistication.",
  },
  {
    icon: <Calendar className="w-8 h-8 md:w-12 md:h-12" />,
    name: "Corporate Events",
    description: "Impress clients and motivate teams with our world-class corporate events.",
  },
  {
    icon: <Users className="w-8 h-8 md:w-12 md:h-12" />,
    name: "Cultural Celebrations",
    description: "Honor traditions and create new memories with our culturally-rich events.",
  },
  {
    icon: <Award className="w-8 h-8 md:w-12 md:h-12" />,
    name: "Award Ceremonies",
    description: "Recognize excellence with our meticulously planned award ceremonies.",
  },
];

export default function DubaiEventAboutUs({ companyData }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    if (!isHovering) {
      const timer = setInterval(() => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % eventTypes.length);
      }, 5000);
      return () => clearInterval(timer);
    }
  }, [isHovering]);

  return (
    <div className="relative z-50 min-h-screen bg-[#173a24] text-white p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="lg:col-span-2 space-y-6 md:space-y-8"
          >
            <h2 className="heading text-3xl md:text-4xl font-semibold text-white">
              {companyData.tagline}
            </h2>
            <p className="para text-white">{companyData.description}</p>
            
            <div className="bg-[#004E25] p-6 md:p-8 rounded-2xl shadow-2xl">
              <h3 className="heading text-2xl md:text-3xl font-semibold mb-4 md:mb-6 text-white">
                Our Expertise
              </h3>
              <div 
                className="grid grid-cols-2 gap-4 md:gap-6"
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              >
                {eventTypes.map((type, index) => (
                  <motion.div
                    key={type.name}
                    className={`flex flex-col items-center justify-center p-4 md:p-6 rounded-xl transition-all duration-300 ${
                      index === activeIndex ? "bg-[#9ee772] text-[#006C35]" : "bg-[#004E25] text-white"
                    }`}
                    animate={{ 
                      scale: index === activeIndex ? 1.05 : 1,
                      rotate: index === activeIndex ? 360 : 0
                    }}
                    transition={{ duration: 0.2 }}
                    onClick={() => setActiveIndex(index)}
                  >
                    {type.icon}
                    <h4 className="heading text-lg md:text-xl font-bold mt-3 md:mt-4 mb-2">{type.name}</h4>
                    <p className="para text-xs md:text-sm text-center">{type.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="relative h-[400px] md:h-[500px] lg:h-full"
          >
            <div className="sticky top-8 w-full h-[80%]">
              <ImageCube 
                images={companyData.imageUrl} 
                caption={companyData.imageCaption}
              />
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-12 md:mt-16 text-center"
        >
          <h3 className="text-2xl md:text-3xl font-semibold mb-4 md:mb-6 text-white">
            Ready to create an unforgettable event?
          </h3>
          <motion.a
            href="https://wa.me/9967253567"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-white text-[#006C35] px-6 md:px-8 py-3 md:py-4 rounded-full text-lg md:text-xl font-bold hover:bg-[#b18d1e] transition duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Us
            <ArrowRight className="ml-2 w-5 h-5 md:w-6 md:h-6" />
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
}