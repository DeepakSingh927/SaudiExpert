import React from "react";
import { ArrowRight } from "lucide-react";

export default function OurServices() {
  const servicesData = [
    {
      id: 1,
      title: "Exhibition Services",
      description: "Exhibition Services provides specialized expertise in planning, organizing, and managing exhibitions of all scales. From initial concept and design to seamless execution, our team ensures every detail is meticulously handled to create an engaging and impactful showcase that captivates audiences and achieves your strategic goals.",
      image: "/Assests/1000.webp",
    },
    {
      id: 2,
      title: "Event Services",
      description: "Event Services offers end-to-end solutions for planning, managing, and executing a diverse range of events. Our team ensures every aspect is meticulously organized, from concept development to on-site coordination, delivering seamless and memorable experiences tailored to your specific needs and objectives.",
      image: "/Assests/1001.webp",
    },
    {
      id: 3,
      title: "Branding & Promotion",
      description: "Branding and Promotion specializes in crafting and elevating brand identity through targeted marketing and promotional strategies. We develop comprehensive campaigns that enhance brand visibility, engage your audience, and drive growth, ensuring your brand stands out and resonates in a competitive market.",
      image: "/Assests/1002.webp",
    },
    {
      id: 4,
      title: "Digital Marketing",
      description: "Digital Marketing boosts online visibility and engagement with cutting-edge, data-driven strategies and campaigns. We tailor our approach to your audience, leveraging the latest digital tools and techniques to maximize impact, drive traffic, and foster meaningful connections with your brand.",
      image: "/Assests/1003.webp",
    },
  ];

  return (
    <div
      className="relative w-full min-h-screen bg-cover bg-center bg-fixed"
      style={{ backgroundImage: "url('/Assests/pexels-pixabay.jpg')" }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-70"></div>
      <div className="relative z-10 max-w-7xl mx-auto py-20 px-5">
        <h2 className="text-5xl font-bold text-white text-center mb-20 tracking-wide">
          Our Services
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {servicesData.map((service) => (
            <div
              key={service.id}
              className="group relative overflow-hidden rounded-xl shadow-2xl transition-all duration-300 hover:shadow-blue-500/100"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent opacity-100 group-hover:opacity-0 transition-opacity duration-300"></div>
              <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute inset-0 flex flex-col justify-between p-8">
                <h3 className="text-xl font-bold font-lato text-white mb-2 transition-opacity duration-300 group-hover:opacity-0">
                  {service.title}
                </h3>
                <p className="text-lg text-gray-200 opacity-100  font-sans group-hover:opacity-0 transition-opacity duration-300 line-clamp-2">
                  {service.description}
                </p>
                <div className="absolute inset-0 flex flex-col items-center justify-center p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-sm text-gray-400 font-serif mb-6 text-start">
                    {service.description}
                  </p>
                  <div className="text-sm text-white px-8 py-4 rounded-lg transition-all duration-300 ease-in-out flex items-center justify-center cursor-pointer">
                    Know More
                    <ArrowRight className="ml-3 h-6 w-6 transition-transform duration-300 group-hover:translate-x-2" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
