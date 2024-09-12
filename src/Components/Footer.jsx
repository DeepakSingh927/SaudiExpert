// import React from "react";
// import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";

// export default function Footer() {
//   return (
//     <div className="flex flex-col bg-gray-100 text-gray-800 ">
//       {/* Newsletter Section */}
//       <div className="py-8 px-6 ">
//         <div className="flex flex-col md:flex-row max-w-7xl mx-auto justify-between items-center">
//           <div className="flex-1 mr-8 mb-4 md:mb-0">
//             <h2 className="text-2xl font-semibold mb-1">Join our newsletter</h2>
//             <p className="text-sm text-gray-600">
//               Get Exclusive Updates on Next-Gen 360° Concreting Solutions
//             </p>
//           </div>
//           <div className="flex-1 w-full md:w-auto">
//             <div className="flex gap-2">
//               <input
//                 type="email"
//                 placeholder="Enter your email"
//                 className="flex-grow p-2 border border-gray-300 text-sm"
//               />
//               <button className="bg-[#00063F] text-white px-6 py-2 text-sm font-semibold">
//                 Submit
//               </button>
//             </div>
//             <p className="text-xs mt-2 text-gray-500">
//               By subscribing you agree to with our Privacy Policy
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* Main Footer Content */}
//       <div className="flex-grow">
//         <div className="max-w-7xl mx-auto w-full px-4 py-8">
//           <div className="flex flex-wrap max-w-7xl mx-auto">
//             {/* Logo */}
//             <div className="w-full md:w-1/5 mb-6 md:mb-0">
//               <img src="/path-to-ajax-logo.png" alt="AJAX" className="h-12" />
//               <p className="mt-2 text-xs text-gray-600">MAKES CONCRETE SENSE</p>
//             </div>

//             {/* Footer Columns */}
//             {[
//               {
//                 title: "PRODUCTS",
//                 items: [
//                   "Self Loading Concrete Mixer",
//                   "Stationary Pumps",
//                   "Boom Pumps",
//                   "Transit Mixers",
//                   "Batching Plants",
//                   "Pavers",
//                   "Dumper",
//                 ],
//               },
//               {
//                 title: "RESOURCES",
//                 items: ["Customer Stories", "Showcase"],
//               },
//               {
//                 title: "COMPANY",
//                 items: ["About AJAX", "CSR", "Careers"],
//               },
//               {
//                 title: "SUPPORT",
//                 items: ["Service Solutions", "Support Network", "Spare Parts"],
//               },
//             ].map((column, index) => (
//               <div key={index} className="w-1/2 md:w-1/5 mb-6">
//                 <h3 className="font-semibold text-sm mb-4">{column.title}</h3>
//                 <ul>
//                   {column.items.map((item, idx) => (
//                     <li key={idx} className="mb-2">
//                       <a
//                         href="#"
//                         className="text-xs text-gray-600 hover:underline"
//                       >
//                         {item}
//                       </a>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             ))}
//           </div>

//           {/* Contact Section */}
//           <div className="mt-8">
//             <h3 className="font-bold text-blue-900 mb-4">CONTACT</h3>
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
//               {[
//                 {
//                   title: "HEADQUARTERS",
//                   address: [
//                     "AJAX Engineering Pvt. Ltd.",
//                     "No. 253/1, 11th Main, 3rd Phase, Peenya",
//                     "Industrial Area, Bangalore - 560058",
//                     "KARNATAKA, INDIA",
//                   ],
//                 },
//                 {
//                   title: "PLANT I",
//                   address: [
//                     "AJAX Engineering Pvt. Ltd.",
//                     "Plot Nos: 149, 150 & 151, KIADB Ind. Area,",
//                     "Phase III Obedenhalli Village, Kasaba Hobli,",
//                     "Doddaballapur Bengaluru - 561203,",
//                     "Karnataka, INDIA",
//                   ],
//                 },
//                 {
//                   title: "PLANT II",
//                   address: [
//                     "AJAX Engineering Pvt. Ltd.",
//                     "Plot Nos: 3, 16 & 17, KIADB Industrial Area",
//                     "Bashettyhally Doddaballapur Taluk,",
//                     "Bengaluru Rural - 561203 Karnataka, INDIA",
//                   ],
//                 },
//                 {
//                   title: "PLANT III",
//                   address: [
//                     "AJAX Engineering Pvt. Ltd.",
//                     "Plot Nos: IP 9-11, 17 & 18, KIADB Industrial",
//                     "Area Gowribidanur Industrial Area,",
//                     "Kudumalakunte Village Gowribidanur -",
//                     "561208, Karnataka, INDIA",
//                   ],
//                 },
//               ].map((location, index) => (
//                 <div key={index}>
//                   <h4 className="font-semibold text-sm mb-2">
//                     {location.title}
//                   </h4>
//                   <p className="text-xs text-gray-600">
//                     {location.address.map((line, idx) => (
//                       <React.Fragment key={idx}>
//                         {line}
//                         <br />
//                       </React.Fragment>
//                     ))}
//                   </p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Footer Bottom */}
//       <div className="bg-[#171616] text-white">
//         <div className="max-w-7xl mx-auto px-4 py-4">
//           <div className="border-t pt-4 flex flex-col md:flex-row justify-between items-center">
//             <div className="text-xs text-white mb-4 md:mb-0">
//               © 2024 AJAX Engineering Pvt. Ltd.
//               <a href="#" className="ml-4 hover:underline">
//                 Privacy Policy
//               </a>
//               <a href="#" className="ml-4 hover:underline">
//                 Terms and Conditions
//               </a>
//             </div>
//             <div className="flex space-x-4 cursor-pointer">
//               <Facebook size={20} />
//               <Instagram size={20} />
//               <Twitter size={20} />
//               <Youtube size={20} />
//               <Linkedin size={20} />
//             </div>
//           </div>
//           <div className="text-xs text-white mt-2 text-center md:text-left">
//             Website by C4E and Web Design Agency | Everything Design
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// import React from "react";
// import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";

// export default function Footer() {
//   return (
//     <div className="flex flex-col bg-gray-100 text-gray-800">
//       {/* Newsletter Section */}
//       <div className="bg-white py-8 px-6">
//         <div className="flex flex-col md:flex-row max-w-7xl mx-auto justify-between items-center">
//           <div className="flex-1 mr-8 mb-4 md:mb-0">
//             <h2 className="text-2xl font-semibold mb-1">Join our newsletter</h2>
//             <p className="text-sm text-gray-600">
//               Get Exclusive Updates on Next-Gen 360° Concreting Solutions
//             </p>
//           </div>
//           <div className="flex-1 w-full md:w-auto">
//             <div className="flex gap-2">
//               <input
//                 type="email"
//                 placeholder="Enter your email"
//                 className="flex-grow p-2 border border-gray-300 text-sm"
//               />
//               <button className="bg-[#00063F] text-white px-6 py-2 text-sm font-semibold hover:bg-[#000852] transition-colors">
//                 Submit
//               </button>
//             </div>
//             <p className="text-xs mt-2 text-gray-500">
//               By subscribing you agree to with our Privacy Policy
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* Main Footer Content */}
//       <div className="flex-grow bg-gray-50">
//         <div className="max-w-7xl mx-auto w-full px-4 py-12">
//           <div className="flex flex-wrap max-w-7xl mx-auto">
//             {/* Logo */}
//             <div className="w-full md:w-1/5 mb-6 md:mb-0">
//               <img src="/path-to-ajax-logo.png" alt="AJAX" className="h-12" />
//               <p className="mt-2 text-xs text-gray-600">MAKES CONCRETE SENSE</p>
//             </div>

//             {/* Footer Columns */}
//             {[
//               {
//                 title: "PRODUCTS",
//                 items: [
//                   "Self Loading Concrete Mixer",
//                   "Stationary Pumps",
//                   "Boom Pumps",
//                   "Transit Mixers",
//                   "Batching Plants",
//                   "Pavers",
//                   "Dumper",
//                 ],
//               },
//               {
//                 title: "RESOURCES",
//                 items: ["Customer Stories", "Showcase"],
//               },
//               {
//                 title: "COMPANY",
//                 items: ["About AJAX", "CSR", "Careers"],
//               },
//               {
//                 title: "SUPPORT",
//                 items: ["Service Solutions", "Support Network", "Spare Parts"],
//               },
//             ].map((column, index) => (
//               <div key={index} className="w-1/2 md:w-1/5 mb-6">
//                 <h3 className="font-semibold text-sm mb-4">{column.title}</h3>
//                 <ul>
//                   {column.items.map((item, idx) => (
//                     <li key={idx} className="mb-2">
//                       <a
//                         href="#"
//                         className="text-xs text-gray-600 hover:underline"
//                       >
//                         {item}
//                       </a>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             ))}
//           </div>

//           {/* Contact Section with Map */}
//           <div className="mt-12">
//             <h3 className="font-bold text-blue-900 mb-6 text-lg">CONTACT</h3>
//             <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 {[
//                   {
//                     title: "HEADQUARTERS",
//                     address: [
//                       "AJAX Engineering Pvt. Ltd.",
//                       "No. 253/1, 11th Main, 3rd Phase, Peenya",
//                       "Industrial Area, Bangalore - 560058",
//                       "KARNATAKA, INDIA",
//                     ],
//                   },
//                   {
//                     title: "PLANT I",
//                     address: [
//                       "AJAX Engineering Pvt. Ltd.",
//                       "Plot Nos: 149, 150 & 151, KIADB Ind. Area,",
//                       "Phase III Obedenhalli Village, Kasaba Hobli,",
//                       "Doddaballapur Bengaluru - 561203,",
//                       "Karnataka, INDIA",
//                     ],
//                   },
//                   {
//                     title: "PLANT II",
//                     address: [
//                       "AJAX Engineering Pvt. Ltd.",
//                       "Plot Nos: 3, 16 & 17, KIADB Industrial Area",
//                       "Bashettyhally Doddaballapur Taluk,",
//                       "Bengaluru Rural - 561203 Karnataka, INDIA",
//                     ],
//                   },
//                   {
//                     title: "PLANT III",
//                     address: [
//                       "AJAX Engineering Pvt. Ltd.",
//                       "Plot Nos: IP 9-11, 17 & 18, KIADB Industrial",
//                       "Area Gowribidanur Industrial Area,",
//                       "Kudumalakunte Village Gowribidanur -",
//                       "561208, Karnataka, INDIA",
//                     ],
//                   },
//                 ].map((location, index) => (
//                   <div key={index} className="bg-white p-4 rounded-lg shadow-sm">
//                     <h4 className="font-semibold text-sm mb-2">
//                       {location.title}
//                     </h4>
//                     <p className="text-xs text-gray-600">
//                       {location.address.map((line, idx) => (
//                         <React.Fragment key={idx}>
//                           {line}
//                           <br />
//                         </React.Fragment>
//                       ))}
//                     </p>
//                   </div>
//                 ))}
//               </div>
//               <div className="w-full h-[400px] bg-gray-200 rounded-lg overflow-hidden">
//                 <iframe
//                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1632.3380078509665!2d55.357061374897235!3d25.28456134685277!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5ceeee0a04e1%3A0xfe0a7b6f2fd4e315!2sDubai%20-%20Sharjah%20Rd%20-%20United%20Arab%20Emirates!5e1!3m2!1sen!2sin!4v1726037964727!5m2!1sen!2sin"
//                   width="100%"
//                   height="100%"
//                   style={{ border: 0 }}
//                   allowFullScreen=""
//                   loading="lazy"
//                 ></iframe>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Footer Bottom */}
//       <div className="bg-[#171616] text-white">
//         <div className="max-w-7xl mx-auto px-4 py-6">
//           <div className="border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center">
//             <div className="text-xs text-gray-300 mb-4 md:mb-0">
//               © 2024 AJAX Engineering Pvt. Ltd.
//               <a href="#" className="ml-4 hover:underline">
//                 Privacy Policy
//               </a>
//               <a href="#" className="ml-4 hover:underline">
//                 Terms and Conditions
//               </a>
//             </div>
//             <div className="flex space-x-6 cursor-pointer">
//               <Facebook size={20} className="hover:text-blue-400 transition-colors" />
//               <Instagram size={20} className="hover:text-pink-400 transition-colors" />
//               <Twitter size={20} className="hover:text-blue-300 transition-colors" />
//               <Youtube size={20} className="hover:text-red-500 transition-colors" />
//               <Linkedin size={20} className="hover:text-blue-500 transition-colors" />
//             </div>
//           </div>
//           <div className="text-xs text-gray-400 mt-4 text-center md:text-left">
//             Website by C4E and Web Design Agency | Everything Design
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import React from "react";
import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import { FaXTwitter } from "react-icons/fa6";
export default function Footer() {
  return (
    <div className=" text-gray-800">
      {/* Newsletter Section */}
      <div className="bg-[#171616] py-6 px-4 text-white">
        <div className="flex flex-col sm:flex-row max-w-7xl mx-auto justify-between items-center">
          <div className="mb-4 sm:mb-0 sm:mr-4">
            <h2 className="text-xl font-semibold">Join our newsletter</h2>
            <p className="text-sm text-white  ">
              Get updates on Next-Gen Events Solutions
            </p>
          </div>
          <div className="w-full sm:w-auto ">
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-grow p-2 border border-gray-300 text-sm"
              />
              <button className="bg-[#171616] px-4 py-2 text-sm text-white font-semibold hover:bg-white hover:text-black transition-colors">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="bg-[#171616] py-8 px-4 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {/* Logo */}
            <div className="flex items-start justify-center md:col-span-1">
              <img src="/Assests/logo1-.png" alt="AJAX" />
            </div>

            {/* Footer Columns */}
            {[
              {
                title: "EVENTS",
                items: [
                  "Self Loading Mixer",
                  "Stationary Pumps",
                  "Boom Pumps",
                  "Transit Mixers",
                  "Batching Plants",
                ],
              },
              {
                title: "RESOURCES",
                items: ["Customer Stories", "Showcase"],
              },
              {
                title: "COMPANY",
                items: ["About SAUDI EVENT", "CSR", "Careers"],
              },
              {
                title: "SUPPORT",
                items: ["Event Solutions", "Support Network", "Spare Parts"],
              },
            ].map((column, index) => (
              <div key={index}>
                <h3 className="font-semibold text-sm mb-2">{column.title}</h3>
                <ul className="text-xs space-y-1 ">
                  {column.items.map((item, idx) => (
                    <li key={idx}>
                      <a href="#" className="text-white hover:underline">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Contact Section with Map */}
          <div className="mt-8 grid md:grid-cols-2 gap-6">
            <div className="grid grid-cols-2 gap-4 text-xs">
              {[
                {
                  title: "HEADQUARTERS",
                  address:
                    "AJAX Engineering Pvt. Ltd., No. 253/1, 11th Main, 3rd Phase, Peenya Industrial Area, Bangalore - 560058, KARNATAKA, INDIA",
                },
                {
                  title: "PLANT I",
                  address:
                    "AJAX Engineering Pvt. Ltd., Plot Nos: 149, 150 & 151, KIADB Ind. Area, Phase III Obedenhalli Village, Kasaba Hobli, Doddaballapur Bengaluru - 561203, Karnataka, INDIA",
                },
                {
                  title: "PLANT II",
                  address:
                    "AJAX Engineering Pvt. Ltd., Plot Nos: 3, 16 & 17, KIADB Industrial Area, Bashettyhally Doddaballapur Taluk, Bengaluru Rural - 561203 Karnataka, INDIA",
                },
                {
                  title: "PLANT III",
                  address:
                    "AJAX Engineering Pvt. Ltd., Plot Nos: IP 9-11, 17 & 18, KIADB Industrial Area Gowribidanur Industrial Area, Kudumalakunte Village Gowribidanur - 561208, Karnataka, INDIA",
                },
              ].map((location, index) => (
                <div key={index} className="bg-white p-3 rounded-lg shadow-sm">
                  <h4 className="font-semibold mb-1 text-black">
                    {location.title}
                  </h4>
                  <p className="text-gray-600">{location.address}</p>
                </div>
              ))}
            </div>
            <div className="h-[250px] bg-gray-200 rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1632.3380078509665!2d55.357061374897235!3d25.28456134685277!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5ceeee0a04e1%3A0xfe0a7b6f2fd4e315!2sDubai%20-%20Sharjah%20Rd%20-%20United%20Arab%20Emirates!5e1!3m2!1sen!2sin!4v1726037964727!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="bg-[#171616] text-white py-4 px-4 border-t-2">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center">
          <div className="text-xs text-white mb-4 sm:mb-0">
            © 2024 Saudi Event Pvt. Ltd.
            <a href="#" className="ml-4 hover:underline">
              Privacy Policy
            </a>
            <a href="#" className="ml-4 hover:underline">
              Terms and Conditions
            </a>
          </div>
          <div className="flex space-x-4 cursor-pointer">
            <Facebook
              size={16}
              className="hover:text-blue-400 transition-colors"
            />
            <Instagram
              size={16}
              className="hover:text-pink-400 transition-colors"
            />
            <FaXTwitter />
            <Youtube
              size={16}
              className="hover:text-red-500 transition-colors"
            />
            <Linkedin
              size={16}
              className="hover:text-blue-500 transition-colors"
            />
          </div>
        </div>
        <div className="text-xs text-white mt-2 text-center sm:text-left max-w-7xl mx-auto">
          Website by C4E and Web Design Agency | Everything Design
        </div>
      </div>
    </div>
  );
}
