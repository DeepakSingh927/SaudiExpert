import React, { useState, useEffect } from "react";
import { Mail, Phone, ChevronDown, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const navItems = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about-us" },
  { label: "Our Services", path: "/our-services" },
  { label: "Featured Projects", path: "/feature-projects" },
  { label: "Join Us", path: "/join-us" },
  { label: "Contact", path: "/contact-us" }
];

export default function Navbar({ language, setLanguage }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleLanguage = () => {
    setLanguage((prevLang) => (prevLang === "en" ? "ar" : "en"));
  };

  return (
    <div className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white text-black shadow-md" : "bg-transparent text-white"}`}>
      <div className="container mx-auto px-4">
        {!isScrolled && (
          <div className="hidden md:flex justify-between items-center pt-4">
            <div className="flex space-x-6">
              <div className="flex items-center font-bold space-x-2">
                <Mail size={16} />
                <span className="text-sm">hello@planninglabs.in</span>
              </div>
              <div className="flex items-center font-bold space-x-2">
                <Phone size={16} />
                <span className="text-sm">(+91) 84339-04441</span>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <button onClick={toggleLanguage} className="text-sm font-bold">
                {language === "en" ? "Switch to Arabic" : "Switch to English"}
              </button>
            </div>
          </div>
        )}
        <nav className={`flex justify-between items-center py-4`}>
          <div className={`text-2xl font-bold ${isScrolled ? "text-black" : "text-white"}`}>
            <div className="text-4xl font-extrabold">
              {language === "en" ? "Saudi Event Agency" : "وكالة الأحداث السعودية"}
            </div>
          </div>
          <div className="hidden md:flex space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.path}
                className={`text-sm hover:text-[#00adee] font-bold ${isScrolled ? "text-black hover:text-[#00adee]" : "text-white"}`}
              >
                {language === "en" ? item.label : getArabicTranslation(item.label)}
              </Link>
            ))}
          </div>
          <div className="md:hidden">
            <button onClick={toggleMenu} className="focus:outline-none">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>
        {isMenuOpen && (
          <div className="md:hidden">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.path}
                className={`block py-2 text-sm hover:text-[#00adee] font-bold ${isScrolled ? "text-black hover:text-[#00adee]" : "text-white"}`}
              >
                {language === "en" ? item.label : getArabicTranslation(item.label)}
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function getArabicTranslation(text) {
  const translations = {
    Home: "الصفحة الرئيسية",
    "About Us": "معلومات عنا",
    "Our Services": "خدماتنا",
    "Featured Projects": "مشاريع مميزة",
    "Join Us": "انضم إلينا",
    Contact: "اتصل بنا",
  };
  return translations[text] || text;
}