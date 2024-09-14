import HomeVideo from "../Components/HomeVideo";
import SimilerProductCard from "../Components/SimilerProductCard";
import MarcouCompo from "../Components/MarcouCompo";
import Navbar from "../Components/Navbar";
import { useState } from "react";
import WorldMap from "../Components/WorldMap";
import TextComponent from "../Components/TextComponent";
import Footer from "../Components/Footer";
import MainCard from "../Components/MainCard";
import CustomDivider from "../Components/CustomDiv";
import FourImageCard from "../Components/FourImageCard";
import FooterCard from "../Components/FooterCard";
import DubaiEventAboutUs from "../Components/DubaiEventAboutUs";
import Counter from "../Components/Counter ";

export default function Home() {
  const dataArray = [
    {
      key: "production",
      id: 1,
      title1: "ABOUT US",
      spanTitle: "Saudi Event Expert:",
      h1Title: "Crafting Memorable Moments",
      des: "We transform visions into unforgettable experiences. Our expert team blends creativity, precision, and local insight to elevate every event, from corporate functions to cultural celebrations across Saudi Arabia.",
      rightTitle: "Our Promise",
      rightDes:
        "Meticulous detail, cultural finesse, and innovative solutions that make your event extraordinary.",
      img: "/Assests/1.jpg",
      bgImage: "/Assests/2.jpg",
    },
  ];
  const companyData = {
    name: "Saudi Event Experts",
    tagline: "Crafting Unforgettable Experiences in the Heart of Dubai",
    description:
      "With years of experience in Dubai's dynamic event industry, we specialize in creating bespoke experiences that leave lasting impressions. From corporate gatherings to cultural celebrations, our team brings creativity, precision, and local insight to every event we manage.",
    imageUrl: "/path-to-your-image.jpg",
    imageCaption: "Bringing your vision to life in Dubai's most iconic venues",
  };

  const [language, setLanguage] = useState("en");
  return (
    <>
      <div className="relative">
        <Navbar language={language} setLanguage={setLanguage} />
        <HomeVideo />
        <div className="relative z-10 min-h-screen bg-white">
          {/* <SimilerProductCard dataArray={dataArray} /> */}
          <DubaiEventAboutUs companyData={companyData} />
        </div>
      </div>

      <MarcouCompo />
      <div className="relative z-10  bg-white  ">
        <TextComponent />
        <Counter/>
        <MainCard />
        <WorldMap />
        {/* <CustomDivider /> */}
        {/* <FourImageCard /> */}
        <FooterCard />
        <Footer />
      </div>
    </>
  );
}
