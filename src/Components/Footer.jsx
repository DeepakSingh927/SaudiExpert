

// // import React from "react";
// // import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
// // import { FaXTwitter } from "react-icons/fa6";
// // export default function Footer() {
// //   return (
// //     <div className=" text-gray-800">
// //       {/* Newsletter Section */}
// //       <div className="bg-[#171616] py-6 px-4 text-white">
// //         <div className="flex flex-col sm:flex-row max-w-7xl mx-auto justify-between items-center">
// //           <div className="mb-4 sm:mb-0 sm:mr-4">
// //             <h2 className="text-xl font-semibold">Join our newsletter</h2>
// //             <p className="text-sm text-white  ">
// //               Get updates on Next-Gen Events Solutions
// //             </p>
// //           </div>
// //           <div className="w-full sm:w-auto ">
// //             <div className="flex gap-2">
// //               <input
// //                 type="email"
// //                 placeholder="Enter your email"
// //                 className="flex-grow p-2 border border-gray-300 text-sm"
// //               />
// //               <button className="bg-[#171616] px-4 py-2 text-sm text-white font-semibold hover:bg-white hover:text-black transition-colors">
// //                 Submit
// //               </button>
// //             </div>
// //           </div>
// //         </div>
// //       </div>

// //       {/* Main Footer Content */}
// //       <div className="bg-[#171616] py-8 px-4 text-white">
// //         <div className="max-w-7xl mx-auto">
// //           <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
// //             {/* Logo */}
// //             <div className="flex items-start justify-center md:col-span-1">
// //               <img src="/Assests/logo1-.png" alt="AJAX" loading="lazy" />
// //             </div>

// //             {/* Footer Columns */}
// //             {[
// //               {
// //                 title: "EVENTS",
// //                 items: [
// //                   "Self Loading Mixer",
// //                   "Stationary Pumps",
// //                   "Boom Pumps",
// //                   "Transit Mixers",
// //                   "Batching Plants",
// //                 ],
// //               },
// //               {
// //                 title: "RESOURCES",
// //                 items: ["Customer Stories", "Showcase"],
// //               },
// //               {
// //                 title: "COMPANY",
// //                 items: ["About SAUDI EVENT", "CSR", "Careers"],
// //               },
// //               {
// //                 title: "SUPPORT",
// //                 items: ["Event Solutions", "Support Network", "Spare Parts"],
// //               },
// //             ].map((column, index) => (
// //               <div key={index}>
// //                 <h3 className="font-semibold text-sm mb-2">{column.title}</h3>
// //                 <ul className="text-xs space-y-1 ">
// //                   {column.items.map((item, idx) => (
// //                     <li key={idx}>
// //                       <a href="#" className="text-white hover:underline">
// //                         {item}
// //                       </a>
// //                     </li>
// //                   ))}
// //                 </ul>
// //               </div>
// //             ))}
// //           </div>

// //           {/* Contact Section with Map */}
// //           <div className="mt-8 grid md:grid-cols-2 gap-6">
// //             <div className="grid grid-cols-2 gap-4 text-xs">
// //               {[
// //                 {
// //                   title: "HEADQUARTERS",
// //                   address:
// //                     "AJAX Engineering Pvt. Ltd., No. 253/1, 11th Main, 3rd Phase, Peenya Industrial Area, Bangalore - 560058, KARNATAKA, INDIA",
// //                 },
// //                 {
// //                   title: "PLANT I",
// //                   address:
// //                     "AJAX Engineering Pvt. Ltd., Plot Nos: 149, 150 & 151, KIADB Ind. Area, Phase III Obedenhalli Village, Kasaba Hobli, Doddaballapur Bengaluru - 561203, Karnataka, INDIA",
// //                 },
// //                 {
// //                   title: "PLANT II",
// //                   address:
// //                     "AJAX Engineering Pvt. Ltd., Plot Nos: 3, 16 & 17, KIADB Industrial Area, Bashettyhally Doddaballapur Taluk, Bengaluru Rural - 561203 Karnataka, INDIA",
// //                 },
// //                 {
// //                   title: "PLANT III",
// //                   address:
// //                     "AJAX Engineering Pvt. Ltd., Plot Nos: IP 9-11, 17 & 18, KIADB Industrial Area Gowribidanur Industrial Area, Kudumalakunte Village Gowribidanur - 561208, Karnataka, INDIA",
// //                 },
// //               ].map((location, index) => (
// //                 <div key={index} className="bg-white p-3 rounded-lg shadow-sm">
// //                   <h4 className="font-semibold mb-1 text-black">
// //                     {location.title}
// //                   </h4>
// //                   <p className="text-gray-600">{location.address}</p>
// //                 </div>
// //               ))}
// //             </div>
// //             <div className="h-[250px] bg-gray-200 rounded-lg overflow-hidden">
// //               <iframe
// //                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1632.3380078509665!2d55.357061374897235!3d25.28456134685277!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5ceeee0a04e1%3A0xfe0a7b6f2fd4e315!2sDubai%20-%20Sharjah%20Rd%20-%20United%20Arab%20Emirates!5e1!3m2!1sen!2sin!4v1726037964727!5m2!1sen!2sin"
// //                 width="100%"
// //                 height="100%"
// //                 style={{ border: 0 }}
// //                 allowFullScreen=""
// //                 loading="lazy"
// //               ></iframe>
// //             </div>
// //           </div>
// //         </div>
// //       </div>

// //       {/* Footer Bottom */}
// //       <div className="bg-[#171616] text-white py-4 px-4 border-t-2">
// //         <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center">
// //           <div className="text-xs text-white mb-4 sm:mb-0">
// //             © 2024 Saudi Event Pvt. Ltd.
// //             <a href="#" className="ml-4 hover:underline">
// //               Privacy Policy
// //             </a>
// //             <a href="#" className="ml-4 hover:underline">
// //               Terms and Conditions
// //             </a>
// //           </div>
// //           <div className="flex space-x-4 cursor-pointer">
// //             <Facebook
// //               size={16}
// //               className="hover:text-blue-400 transition-colors"
// //             />
// //             <Instagram
// //               size={16}
// //               className="hover:text-pink-400 transition-colors"
// //             />
// //             <FaXTwitter />
// //             <Youtube
// //               size={16}
// //               className="hover:text-red-500 transition-colors"
// //             />
// //             <Linkedin
// //               size={16}
// //               className="hover:text-blue-500 transition-colors"
// //             />
// //           </div>
// //         </div>
// //         <div className="text-xs text-white mt-2 text-center sm:text-left max-w-7xl mx-auto">
// //           Website by C4E and Web Design Agency | Everything Design
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// import React from "react";
// import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
// import { FaXTwitter } from "react-icons/fa6";

// export default function Footer() {
//   return (
//     <footer className="bg-white text-black py-8 px-4">
//       <div className="max-w-7xl mx-auto">
//         <div className="flex flex-col md:flex-row justify-between items-start mb-8">
//           <div className="mb-6 md:mb-0">
//             <h1 className="text-4xl font-bold mb-4">EYE-OPENING PRESENTATIONS</h1>
//             <img src="/path-to-your-logo.png" alt="Company Logo" className="h-8" />
//           </div>
//           <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
//             <div>
//               <h3 className="font-semibold mb-2">S:</h3>
//               <ul className="space-y-1">
//                 <li><a href="#" className="hover:underline">Instagram</a></li>
//                 <li><a href="#" className="hover:underline">Behance</a></li>
//                 <li><a href="#" className="hover:underline">Facebook</a></li>
//                 <li><a href="#" className="hover:underline">Linkedin</a></li>
//               </ul>
//             </div>
//             <div>
//               <h3 className="font-semibold mb-2">L:</h3>
//               <p>202-1965 W 4th Ave<br />Vancouver, Canada</p>
//               <p className="mt-4">30 Chukarina St<br />Lviv, Ukraine</p>
//             </div>
//             <div>
//               <h3 className="font-semibold mb-2">M:</h3>
//               <ul className="space-y-1">
//                 <li><a href="#" className="hover:underline">Home</a></li>
//                 <li><a href="#" className="hover:underline">Services</a></li>
//                 <li><a href="#" className="hover:underline">Our work</a></li>
//                 <li><a href="#" className="hover:underline">About us</a></li>
//                 <li><a href="#" className="hover:underline">Insights</a></li>
//                 <li><a href="#" className="hover:underline">Contact us</a></li>
//               </ul>
//             </div>
//           </div>
//         </div>
        
//         <div className="mb-8">
//           <h3 className="font-semibold mb-2">E:</h3>
//           <a href="mailto:hello@saudi-event.design" className="hover:underline">hello@saudi-event.design</a>
//         </div>

//         <div className="h-[250px] bg-gray-200 rounded-lg overflow-hidden mb-8">
//           <iframe
//             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1632.3380078509665!2d55.357061374897235!3d25.28456134685277!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5ceeee0a04e1%3A0xfe0a7b6f2fd4e315!2sDubai%20-%20Sharjah%20Rd%20-%20United%20Arab%20Emirates!5e1!3m2!1sen!2sin!4v1726037964727!5m2!1sen!2sin"
//             width="100%"
//             height="100%"
//             style={{ border: 0 }}
//             allowFullScreen=""
//             loading="lazy"
//           ></iframe>
//         </div>

//         <div className="flex flex-col md:flex-row justify-between items-center">
//           <p className="text-sm mb-4 md:mb-0">&copy; Saudi Event design 2024. <a href="#" className="hover:underline">Legal Terms</a></p>
//           <div className="flex space-x-4">
//             <Facebook size={16} className="cursor-pointer hover:text-gray-600" />
//             <Instagram size={16} className="cursor-pointer hover:text-gray-600" />
//             <FaXTwitter size={16} className="cursor-pointer hover:text-gray-600" />
//             <Youtube size={16} className="cursor-pointer hover:text-gray-600" />
//             <Linkedin size={16} className="cursor-pointer hover:text-gray-600" />
//           </div>
//         </div>
//         <div className="text-sm text-center md:text-right mt-4">
//           Website by C4E and Web Design Agency | Everything Design
//         </div>
//       </div>
//     </footer>
//   );
// }


import React from "react";
import "./Footer.css";
export default function () {
  return (
    <footer className="bg-black text-white py-14 h-full">
      <div className="deep">
        <div className="coloum1 ">
          <div className="logo">
            {/* <img src="/Assests/eventana.png" alt="" className="deepak" /> */}
            <h1>SAUDI EVENT EXPERT</h1>
          </div>

          <div className="w-[50vw] mt-16">
            <h3 className=" pera ">
              Don’t hesitate to drop us a line if you need consultancy with your
              project, our team will always be there to help you reach your goal
              by proposing the right choices to reach your goal.
            </h3>
          </div>

          <div className=" icons mt-4 text-center">
            <div className=" flex justify-center mt-2 space-x-2">
              <a href="#" className="icon text-gray-300 hover:text-white">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="icon text-gray-300 hover:text-white">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="#" className="icon text-gray-300 hover:text-white">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="icon text-gray-300 hover:text-white">
              <i class="fa-brands fa-x-twitter"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="coloum2">
          {" "}
          <div className="flex  flex-col md:flex-row justify-between">
            <div className="flex flex-col md:flex-row space-x-4">
              <div className="company">
                <h3 className="text-2xl font-semibold mb-2">Company</h3>
                <ul className="space-y-4">
                  <li>
                    <a href="#" className="hover:text-gray-300">
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-gray-300">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-gray-300">
                      Our   Services
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-gray-300">
                      Featured Projects
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-gray-300">
                      Join Us
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-gray-300">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
              <div className="services">
                <h3 className="text-2xl font-semibold mb-2">Services</h3>
                <ul className="space-y-4">
                  <li>
                    <a href="#" className="hover:text-gray-300">
                    Exhibition Services
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-gray-300">
                    Event Services
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-gray-300">
                    Branding & Promotion
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-gray-300">
                    Digital Marketing
                    </a>
                  </li>
                 
                </ul>
              </div>
            </div>
          </div>
        </div>
        
      </div>
      <div className=" copyright text-gray-400">
          Copyright © 2024 Eventana Services.
        </div>
    </footer>
  );
}