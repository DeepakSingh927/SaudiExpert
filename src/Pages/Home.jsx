import HomeVideo from "../Components/HomeVideo";

import Navbar from "../Components/Navbar";
import { useState } from "react";
import WorldMap from "../Components/WorldMap";
import TextComponent from "../Components/TextComponent";
import Footer from "../Components/Footer";
import MainCard from "../Components/MainCard";
import FooterCard from "../Components/FooterCard";
import DubaiEventAboutUs from "../Components/DubaiEventAboutUs";
import Counter from "../Components/Counter ";
import OurSevices from "../Components/OurSevices";
import AboutCompany from "../Components/AboutCompany";

export default function Home() {
  const companyData = {
    name: "Saudi Event Experts",
    middlename: ["Event", "DegitleMArketing,Blogger"],
    tagline:"Crafting unforgettable experiences in the heart of Saudi ",

    description:
      "With years of experience in Gulf's dynamic event industry, we specialize in creating bespoke experiences that leave lasting impressions. From corporate gatherings to cultural celebrations, our team brings creativity, precision, and local insight to every event we manage.",
    imageUrl: "/Assests/111.jpg",
    imageCaption: "Bringing your vision to life in Saudi's most iconic venues",
  };

  const [language, setLanguage] = useState("en");
  return (
    <>
      <div className="relative">
        <Navbar language={language} setLanguage={setLanguage} />
        <HomeVideo />
        <div className="relative z-10 min-h-screen bg-white" id="about-us">
          <DubaiEventAboutUs companyData={companyData} />
        </div>
      </div>
      <div className="relative z-10  bg-white " >

      <AboutCompany/>
      </div>
      <div className="relative z-10  bg-white " id="about-us">
        <TextComponent />
      </div>
      <div className="relative z-10  bg-white  ">
        <Counter />
      </div>
      <div className="relative z-10  bg-white  " id="Featured-Projects">
        <MainCard />
      </div>
      <div className="relative z-10  bg-white  " id="services">
        <OurSevices />
      </div>
      <div className="relative z-10  bg-white  " >
        <WorldMap />
      </div>
      <div className="relative z-10  bg-white  " id="contact-us">
        <FooterCard />
      </div>

      <div className="relative z-10  bg-white  ">
        <Footer />
      </div>
    </>
  );
}
