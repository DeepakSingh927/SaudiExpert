import React from "react";
import { ChevronRight } from "lucide-react";

export default function FooterCard() {
  return (
    <div className="w-full bg-white">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="w-full md:w-1/2 mb-8 md:mb-0 md:pr-8">
            <img
              src="/Assests/aboutusImage.jpg"
              alt="Professional team"
              loading="lazy"
              className="w-full h-[400px] object-cover rounded-lg shadow-md"
            />
          </div>
          <div className="w-full md:w-1/2 md:pl-8">
            <h2 className="text-green-700 text-lg font-semibold mb-2">CAREER OPPORTUNITIES</h2>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Join Our Innovative <span className="text-yellow-500">Exhibition</span> Team
            </h1>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Be part of a dynamic team that's shaping the future of event solutions. We offer exciting challenges, growth opportunities, and a collaborative work environment.
            </p>
            <div className="space-y-4">
              <a 
                href="/careers"
                className="inline-block text-green-700 font-semibold hover:text-green-800 transition-colors duration-300"
              >
                View All Openings <ChevronRight className="inline ml-1" size={18} />
              </a>
              <div>
                <a 
                  href="https://wa.me/9967253567"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block"
                >
                  <button className="bg-yellow-500 text-white px-6 py-3 rounded-full text-lg font-semibold flex items-center transition-all duration-300 hover:bg-yellow-600 hover:shadow-lg">
                    Contact Us
                    <ChevronRight className="ml-2" size={20} />
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}