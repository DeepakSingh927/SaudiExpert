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

export default function Home() {
  const dataArray = [
    {
      key: "production",
      id: 1,
      title1: "BATCHING PLANTS",
      spanTitle: "Batching Plant:",
      h1Title: "The Future of Construction",
      des: "Enhance your cement production capabilities with our precision-engineered machines, designed to meet the industry's highest standards for quality and performance, with products like the SLCM, concrete pumps, and boom pumps.",
      rightTitle: "CRB 60",
      rightDes:
        "Mixer Capacity -1500 ltr /1000 ltr Concrete Output - 60 cu m/hr...",
      img: "/Assests/1.jpg",
      bgImage: "/Assests/2.jpg",
    },
    {
      key: "transportation",
      id: 2,
      title1: "TRANSIT MIXERS",
      spanTitle: "Transit Mixer:",
      h1Title: "Revolutionising Construction Dynamics",
      des: "Discover our range of transport machines tailored for concrete construction projects. Our selection ensures reliable and efficient concrete transport from low-maintenance machinery to heavy-duty vehicles. With high-capacity trucks and durable equipment, your concrete logistics are in safe hands for large-scale projects.",
      rightTitle: "AF 10 XP",
      rightDes: "Drum Filling Capacity - 10 cu m",
      img: "/Assests/3.jpg",
      bgImage: "/Assests/7.jpg",
    },
    {
      key: "placement",
      id: 3,
      title1: "CONCRETE SLIP-FORM PAVERS",
      spanTitle: "SPBP:",
      h1Title: "A New Era in Construction",
      des: "Experience seamless concrete placement with our innovative equipment, ensuring precision and efficiency in your construction projects. Our low-maintenance placement machinery offers superior performance, making concrete placement easier and more cost-effective. Trust in our quality construction equipment to achieve accurate and reliable results, elevating the success of your concreting endeavours.",
      rightTitle: "A44 ZX",
      rightDes: "Concrete Output Max - 70 cu m/hr Boom reach - 29.15 mtr",
      img: "/Assests/4.jpg",
      bgImage: "/Assests/6.jpg",
    },
    {
      key: "paving",
      id: 4,
      title1: "CONCRETE SLIP-FORM PAVERS",
      spanTitle: "Ajax Paver:",
      h1Title: "Building roads to the future",
      des: "Fulfil your paving needs for seamless concreting projects. Our advanced paver selection ensures precision, efficiency, and durable results, elevating your construction endeavours with products like Slipform Pavers. Experience the power of cutting-edge technology and performance-driven solutions for superior pavement construction.",
      rightTitle: "SPX 754",
      rightDes: "Paving Width - 2.5 - 7.5 m Paving Thickness - Up to 500 mm",
      img: "/Assests/5.jpg",
      bgImage: "/Assests/6.jpg",
    },
  ];
  const [language, setLanguage] = useState("en");
  return (
    <>
      <div className="relative">
        <Navbar language={language} setLanguage={setLanguage} />
        <HomeVideo />
        <div className="relative z-10 min-h-screen bg-white">
          <SimilerProductCard dataArray={dataArray} />
        </div>
      </div>

      <MarcouCompo />
      <div className="relative z-10  bg-white  ">
        <TextComponent />
        <MainCard />
        <WorldMap />
        <CustomDivider />
        <FourImageCard/>
        <FooterCard/>
        <Footer />
      </div>
    </>
  );
}
