import React, { useEffect, useState } from "react";
import { Sparkles, Calendar, Users, Award } from "lucide-react";
import AOS from "aos";
import "./animation.css";
import "aos/dist/aos.css";

const eventTypes = [
  {
    icon: <Sparkles className="w-8 h-8" />,
    name: "Exhibitions",
    description:
      "Explore our curated exhibitions showcasing innovative designs and creative talents from around the world.",
  },
  {
    icon: <Calendar className="w-8 h-8" />,
    name: "Corporate Events",
    description:
      "Impress clients and motivate teams with our world-class corporate events.",
  },
  {
    icon: <Users className="w-8 h-8" />,
    name: "Advertising and Promotion",
    description:
      "Maximize your brand's reach with our targeted advertising and promotion strategies.",
  },
  {
    icon: <Award className="w-8 h-8" />,
    name: "Digital Marketing",
    description:
      "Accelerate your growth with our data-driven digital marketing strategies.",
  },
];

export default function DubaiEventAboutUs({ companyData }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    AOS.init({ duration: 2000 });

    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex + 1) % companyData.imageUrl.length
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [companyData.imageUrl.length]);

  return (
    <div
      className="bg-[#0a0203] text-white py-16 relative min-h-screen"
      style={{
        backgroundImage: "url('/Assests/RIYADH.jpg')",
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="absolute inset-0 bg-[#0a0203] opacity-30"></div>
      <div className="relative mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex flex-col space-y-16" data-aos="zoom-in">
          <div className="flex flex-col lg:flex-row justify-between items-center">
            <div className="w-full lg:w-1/2 pr-0 lg:pr-8 mb-8 lg:mb-0">
              <h2 className="font-serif text-3xl font-extrabold text-[#cdab56] sm:text-4xl mb-4">
                {companyData.tagline}
              </h2>
              <p className= " text-lg text-gray-300 mb-8">
                {companyData.description}
              </p>
              <a
                href="#contact"
                className="inline-flex items-center px-6 py-3 border border-[#cdab56] text-base font-medium rounded-full text-black bg-[#cdab56] hover:bg-[#cdab56] transition duration-300"
              >
                Contact Us
              </a>
            </div>
            <div className="w-full lg:w-1/2 relative border-4 border-[#cdab56] rounded-xl">
              <img
                className="w-full h-64 rounded-xl lg:h-96 object-cover relative z-10 transition-opacity duration-500"
                src={companyData.imageUrl[currentImageIndex]}
                alt={companyData.imageCaption}
              />
            </div>
          </div>

          <div className="w-full">
            <h3 className="text-2xl font-extrabold text-[#cdab56] mb-8">
              Our Expertise
            </h3>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {eventTypes.map((type) => (
                <div
                  key={type.name}
                  className="bg-gray-900 p-5 rounded-lg border border-[#cdab56]"
                >
                  <h4 className="text-lg font-semibold mb-2 text-[#cdab56]">
                    {type.name}
                  </h4>
                  <p className="text-gray-300">{type.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}