import React, { useState, useEffect } from "react";
import { Mail, Phone, ChevronDown, Menu, X } from "lucide-react";

const navItems = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "#about-us" },
  { label: "Our Services", path: "#services" },
  { label: "Featured Projects", path: "#Featured-Projects" },
  { label: "Join Us", path: "#contact-us" },
  { label: "Contact", path: "#contact-us" },
];

const languages = [
  { code: "en", name: "English", flag: "/Assests/america.png" },
  { code: "ar", name: "العربية", flag: "/Assests/saudi.png" }
];

export default function Navbar({ language, setLanguage }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);

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

  const toggleLangDropdown = () => {
    setIsLangDropdownOpen(!isLangDropdownOpen);
  };

  const changeLanguage = (langCode) => {
    setLanguage(langCode);
    setIsLangDropdownOpen(false);
  };

  const currentLang = languages.find((lang) => lang.code === language);

  return (
    <>
    
    <div
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-black  text-[#cdab56]shadow-md"
          : "bg-transparent text-[#cdab56]"
      }`}
    >
      <div className="container mx-auto px-4">
        {!isScrolled && (
          <div className="hidden md:flex justify-between items-center pt-4">
            <div className="flex space-x-6">
              <div className="flex items-center font-bold space-x-2">
                <Mail size={16} color="#d2ab2f" />
                <span className="text-sm">hello@saudievent.in</span>
              </div>
              <div className="flex items-center font-bold space-x-2">
                <Phone size={16} color="#d2ab2f" />
                <span className="text-sm">(+971) 501234567</span>
              </div>
            </div>

            <div className="relative">
              <button
                onClick={toggleLangDropdown}
                className="flex items-center space-x-2 text-sm font-bold focus:outline-none"
              >
                <img
                  src={currentLang.flag}
                  alt={`${currentLang.name} flag`}
                  className="w-4 h-4"
                />
                <span>{currentLang.name}</span>
                <ChevronDown size={16} color="#d2ab2f" />
              </button>
              {isLangDropdownOpen && (
                <div className="  font-poppins  absolute right-0 mt-2 w-40 bg-black border border-[#cdab56] rounded-md overflow-hidden z-50">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => changeLanguage(lang.code)}
                      className="  font-poppins  w-full text-left px-4 py-2 text-sm text-[#cdab56] hover:bg-[#cdab56] hover:text-black flex items-center space-x-2"
                    >
                      <img
                        src={lang.flag}
                        alt={`${lang.name} flag`}
                        className="w-4 h-4"
                      />
                      <span>{lang.name}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
        <nav className="flex justify-between items-center py-4">
          <div className="text-4xl font-extrabold text-[#cdab56]">
            {language === "en"
              ? "SAUDI EVENT EXPERT"
              : "وكالة الأحداث السعودية"}
          </div>
          <div className="hidden md:flex space-x-6">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.path}
                className=" font-poppins text-sm font-bold text-[#cdab56] hover:text-white relative group"
              >
                {language === "en"
                  ? item.label
                  : getArabicTranslation(item.label)}
                <span className="  absolute left-0 bottom-0 w-full h-0.5 bg-[#cdab56] transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
              </a>
            ))}
          </div>
          <div className="md:hidden">
            <button onClick={toggleMenu} className="focus:outline-none">
              {isMenuOpen ? (
                <X size={24} color="#d2ab2f" />
              ) : (
                <Menu size={24} color="#d2ab2f" />
              )}
            </button>
          </div>
        </nav>
        {isMenuOpen && (
          <div className="md:hidden bg-black">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.path}
                className="block py-2 text-sm hover:text-white font-bold text-[#cdab56] relative group"
              >
                {language === "en"
                  ? item.label
                  : getArabicTranslation(item.label)}
                <span className="absolute left-0 bottom-0 w-full h-0.5 bg-[#cdab56] transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
    </>
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