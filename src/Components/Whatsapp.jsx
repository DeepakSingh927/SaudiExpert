import React, { useState, useRef, useEffect } from 'react';
import { BsWhatsapp } from "react-icons/bs";

export default function Whatsapp() {
  const [isHovered, setIsHovered] = useState(false);
  const [ripple, setRipple] = useState({ x: 0, y: 0, show: false });
  const buttonRef = useRef(null);

  const handleWhatsAppClick = () => {
    const phoneNumber = '9967253567';
    const whatsappUrl = `https://wa.me/${phoneNumber}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleMouseEnter = (e) => {
    setIsHovered(true);
    const rect = buttonRef.current.getBoundingClientRect();
    setRipple({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      show: true
    });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRipple({ ...ripple, show: false });
  };

  useEffect(() => {
    if (ripple.show) {
      const timer = setTimeout(() => setRipple({ ...ripple, show: false }), 500);
      return () => clearTimeout(timer);
    }
  }, [ripple.show]);

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <div className="absolute inset-0 bg-green-400 rounded-full animate-ping opacity-75"></div>
      <button 
        ref={buttonRef}
        onClick={handleWhatsAppClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={`
          relative bg-green-500 hover:bg-green-600 text-white rounded-full p-3 
          shadow-lg transition-all duration-300 flex items-center justify-center
          transform hover:scale-105 animate-float overflow-hidden
          ${isHovered ? 'ring-4 ring-green-300 ring-opacity-50' : ''}
        `}
        aria-label="Contact us on WhatsApp"
      >
        <BsWhatsapp className={`w-8 h-8 m-1 transition-transform duration-300 ${isHovered ? 'scale-110' : ''}`}/>
        {ripple.show && (
          <span 
            className="absolute bg-white opacity-25 rounded-full animate-ripple"
            style={{
              top: ripple.y, 
              left: ripple.x,
              width: '200px',
              height: '200px',
              transform: 'translate(-50%, -50%)'
            }}
          />
        )}
      </button>
    </div>
  );
}