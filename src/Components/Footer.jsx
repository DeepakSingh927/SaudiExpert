import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer id="footer" className="bg-black text-[#cdab56] py-8 md:py-14">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-8 md:mb-0 md:w-1/2">
            <div className="logo mb-4">
              <h1 className="text-3xl md:text-4xl font-bold">SAUDI EVENT EXPERT</h1>
            </div>
            <p className="text-white text-sm md:text-base mb-6 md:w-3/4">
              Don't hesitate to drop us a line if you need consultancy with your
              project. Our team will always be there to help you reach your goal
              by proposing the right choices.
            </p>
            <div className="flex justify-start space-x-4">
              <a href="#" className="text-[#cdab56] hover:text-white text-2xl">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-[#cdab56] hover:text-white text-2xl">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="#" className="text-[#cdab56] hover:text-white text-2xl">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-[#cdab56] hover:text-white text-2xl">
                <i className="fa-brands fa-x-twitter"></i>
              </a>
            </div>
          </div>
          <div className="flex flex-col md:flex-row md:w-1/2">
            <div className="mb-6 md:mb-0 md:w-1/2">
              <h3 className="text-xl font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-white">
                <li><a href="/" className="hover:text-gray-300">Home</a></li>
                <li><a href="#about-us" className="hover:text-gray-300">About Us</a></li>
                <li><a href="#sevices" className="hover:text-gray-300">Our Services</a></li>
                <li><a href="#Featured-Projects" className="hover:text-gray-300">Featured Projects</a></li>
                <li><a href="#contact-us" className="hover:text-gray-300">Contact</a></li>
              </ul>
            </div>
            <div className="md:w-1/2">
              <h3 className="text-xl font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-white">
                <li><a href="#sevices" className="hover:text-gray-300">Exhibition Services</a></li>
                <li><a href="#sevices" className="hover:text-gray-300">Event Services</a></li>
                <li><a href="#sevices" className="hover:text-gray-300">Branding & Promotion</a></li>
                <li><a href="#sevices" className="hover:text-gray-300">Digital Marketing</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700">
          <p className="text-white font-bold text-sm">
            Address:
            <span className="font-normal block mt-2">
              80.1/B, Barsha Heights 1812, B-Tower, Al Shaib Tower Dubai,
              <br className="hidden md:inline" /> Al Barsha Heights, Tecom, United Arab Emirates
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
