import React from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function OurServices() {
  const servicesData = [
    {
      id: 1,
      title: "Exhibition Services",
      description:
        "Specialized expertise in planning, organizing, and managing exhibitions of all scales. We ensure every detail is meticulously handled to create engaging and impactful showcases.",
    },
    {
      id: 2,
      title: "Event Services",
      description:
        "End-to-end solutions for planning, managing, and executing diverse events. We deliver seamless and memorable experiences tailored to your specific needs and objectives.",
    },
    {
      id: 3,
      title: "Branding & Promotion",
      description:
        "Crafting and elevating brand identity through targeted marketing and promotional strategies. We enhance brand visibility, engage your audience, and drive growth.",
    },
    {
      id: 4,
      title: "Digital Marketing",
      description:
        "Boosting online visibility and engagement with cutting-edge, data-driven strategies and campaigns. We maximize impact, drive traffic, and foster meaningful brand connections.",
    },
  ];

  return (
    <div id="services" className="bg-black min-h-screen py-20 px-5">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-6xl font-bold text-[#cdab56] text-center mb-4"
        >
          SOLUTIONS
        </motion.h2>
        <motion.h3
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-4xl font-semibold text-[#cdab56] text-center mb-20"
        >
          EVENT SOLUTIONS FOR YOU
        </motion.h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {servicesData.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-105 group"
            >
              <div className="p-8 h-full flex flex-col bg-[#cdab56] justify-between">
                <div>
                  <div className="text-6xl mb-6 transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold  text-black mb-4 group-hover:text-white transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-lg text-black mb-6 group-hover:text-gray transition-colors duration-300  font-[400]">
                    {service.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
