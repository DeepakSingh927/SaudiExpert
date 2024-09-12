import React from 'react';
import { BsWhatsapp } from "react-icons/bs";
export default function Whatsapp() {
  const handleWhatsAppClick = () => {
    const phoneNumber = '9967253567';
    const whatsappUrl = `https://wa.me/${phoneNumber}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <button 
        onClick={handleWhatsAppClick}
        className="bg-green-500 hover:bg-green-600 text-white rounded-full p-3 shadow-lg transition-all duration-300 flex items-center justify-center"
        aria-label="Contact us on WhatsApp"
      >
       
        <BsWhatsapp className='w-8 h-8 m-1'/>
      </button>
    </div>
  );
}