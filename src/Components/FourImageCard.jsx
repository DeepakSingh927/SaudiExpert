import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const eventData = [
  {
    events: [
      { image: "/Assests/44.webp", title: "Tech Conference", description: "Annual gathering of tech innovators" },
      { image: "/Assests/45.webp", title: "Music Festival", description: "Three-day celebration of diverse musical genres" },
      { image: "/Assests/46.webp", title: "Art Exhibition", description: "Showcase of contemporary visual arts" }
    ],
    bgColor: "bg-blue-200"
  },
  {
    events: [
      { image: "/Assests/47.webp", title: "Food Fair", description: "Culinary delights from around the world" },
      { image: "/Assests/48.webp", title: "Sports Tournament", description: "Competitive games across various sports" },
      { image: "/Assests/49.webp", title: "Fashion Show", description: "Unveiling the latest fashion trends" }
    ],
    bgColor: "bg-green-200"
  },
  {
    events: [
      { image: "/Assests/50.webp", title: "Film Festival", description: "Celebrating independent cinema" },
      { image: "/Assests/51.webp", title: "Book Fair", description: "A paradise for book lovers and authors" },
      { image: "/Assests/52.webp", title: "Science Expo", description: "Exploring cutting-edge scientific discoveries" }
    ],
    bgColor: "bg-purple-200"
  }
];

const EventCard = ({ image, title, description, bgColor }) => (
  <div className={`relative overflow-hidden group`}>
    <div className="bg-white p-4 transition-all duration-300 group-hover:translate-y-[-100%]">
      <img src={image} alt={title} className="w-full object-cover h-64" />
      <div className="mt-2">
        <h3 className="text-lg font-bold text-blue-900">{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </div>
    <div className={`absolute inset-0 ${bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 flex flex-col justify-center`}>
      <h3 className="text-lg font-bold text-blue-900">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  </div>
);

export default function ProductRangeComponent() {
  const [currentArrayIndex, setCurrentArrayIndex] = useState(0);

  const handleNext = () => {
    setCurrentArrayIndex((prevIndex) => 
      prevIndex === eventData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentArrayIndex((prevIndex) => 
      prevIndex === 0 ? eventData.length - 1 : prevIndex - 1
    );
  };

  const currentEventSet = eventData[currentArrayIndex];

  return (
    <div className="w-full flex justify-center items-center relative py-20 ">
      <div className="w-full max-w-6xl ">
        <div className="flex justify-between items-center mb-4">
          <div>
            <h2 className="text-2xl font-bold text-blue-900">OUR RANGE</h2>
            <h3 className="text-xl text-blue-900">OF EVENTS</h3>
          </div>
          <div className="flex gap-2">
            <button className="p-2 bg-gray-200 rounded-full" onClick={handlePrev}>
              <ChevronLeft size={24} />
            </button>
            <button className="p-2 bg-gray-200 rounded-full" onClick={handleNext}>
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-4">
          {currentEventSet.events.map((event, index) => (
            <EventCard key={index} {...event} bgColor={currentEventSet.bgColor} />
          ))}
        </div>
      </div>
    </div>
  );
}