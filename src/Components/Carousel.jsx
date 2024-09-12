
import React, { useState, useEffect } from "react";
import { ArrowRight, ArrowLeft } from "lucide-react";

const content = {
  HISTORY: {
    title: "HISTORY",
    text: "Founded in 1992, AJAX is a global leader in Self-Loading Concrete Mixers, renowned for engineering excellence. Based in Bangalore, we provide 360° concreting solutions, from mixers to pumps. With advanced manufacturing facilities in Doddaballapur and Gowribidanur, we are committed to innovation and customer-centric excellence, defining our legacy.",
    image: "/Assests/43.webp"
  },
  TRAINING: {
    title: "TRAINING",
    text: "At AJAX, we prioritize workplace safety and efficiency. Our comprehensive training programs cover machine operation and maintenance, including classroom sessions at our Bangalore Training Centre, factory visits, and on-site training by our Service & Training Department. We've partnered with the Infrastructure Equipment Skill Council of India (IESC) to elevate India's workforce skills. Interested customers can schedule on-site training lasting 2-3 days, with facilities provided by the customer. Our commitment is to continually enhance skills for safer and more efficient practices.",
    image: "/Assests/42.webp"
  },
  SERVICE: {
    title: "SERVICE & SUPPORT",
    text: "AJAX's extensive support network covers the entire country, ensuring timely service whenever you need it. Our skilled engineering team is equipped to handle both preventive and reactive maintenance on-site, even during emergencies. For round-the-clock support, our 24/7 Customer Care is just a call away to address all your queries and requests. AJAX offers various service options to maximize machine availability and enhance customer satisfaction.",
    image: "/Assests/41.webp"
  }
};

export default function Carousel() {
  const [activeSection, setActiveSection] = useState("TRAINING");
  const [direction, setDirection] = useState("right");
  const [isTransitioning, setIsTransitioning] = useState(false);
  const sections = ["HISTORY", "TRAINING", "SERVICE"];

  useEffect(() => {
    if (isTransitioning) {
      const timer = setTimeout(() => setIsTransitioning(false), 300);
      return () => clearTimeout(timer);
    }
  }, [isTransitioning]);

  const changeSection = (newSection) => {
    setDirection(sections.indexOf(newSection) > sections.indexOf(activeSection) ? "right" : "left");
    setIsTransitioning(true);
    setTimeout(() => setActiveSection(newSection), 150);
  };

  const handleNext = () => {
    const currentIndex = sections.indexOf(activeSection);
    changeSection(sections[(currentIndex + 1) % sections.length]);
  };

  const handlePrev = () => {
    const currentIndex = sections.indexOf(activeSection);
    changeSection(sections[(currentIndex - 1 + sections.length) % sections.length]);
  };

  return (
    <div>
      <div className="flex items-center gap-10 mb-10">
        <h2 className="w-[20%] text-5xl font-bold text-white">{content[activeSection].title}</h2>
        <div className="w-[53%] h-1 bg-white"></div>
      </div>
      <div className={`w-full md:w-2/3 mb-10 transition-all duration-300 ${
        isTransitioning
          ? direction === "right"
            ? "-translate-x-full opacity-0"
            : "translate-x-full opacity-0"
          : "translate-x-0 opacity-100"
      }`}>
        <p className="text-white text-sm">{content[activeSection].text}</p>
      </div>
      <div className="text-white flex flex-wrap justify-start items-center py-3 gap-6">
        <button className="border-2 rounded-full w-12 h-12" onClick={handlePrev}>
          <ArrowLeft className="ml-2" size={24} />
        </button>
        {sections.map((section) => (
          <span
            key={section}
            className={`cursor-pointer ${activeSection === section ? 'font-bold' : ''}`}
            onClick={() => changeSection(section)}
          >
            {section === "SERVICE" ? "SERVICE & SUPPORT" : section}
          </span>
        ))}
        <button className="border-2 rounded-full w-12 h-12" onClick={handleNext}>
          <ArrowRight className="ml-2" size={24} />
        </button>
      </div>
      <div className={`w-[75%] h-full transition-all py-10 duration-300 ${
        isTransitioning
          ? direction === "right"
            ? "-translate-x-full opacity-0"
            : "translate-x-full opacity-0"
          : "translate-x-0 opacity-100"
      }`}>
        <img src={content[activeSection].image} alt={content[activeSection].title} className="w-full h-full object-cover"/>
      </div>
    </div>
  );
}