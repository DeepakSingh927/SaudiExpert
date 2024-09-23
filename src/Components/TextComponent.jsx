// // import React, { useState, useEffect } from "react";
// // import { motion, AnimatePresence } from "framer-motion";
// // import { ChevronRight, ChevronDown, Check } from "lucide-react";

// // const eventTypes = [
// //   { name: "Launches", icon: "🚀" },
// //   { name: "Workshops", icon: "🛠️" },
// //   { name: "Open Days", icon: "🌟" },
// //   { name: "Exhibitions", icon: "🎨" },
// //   { name: "Conferences", icon: "🎤" },
// //   { name: "Seminars", icon: "📚" },
// //   { name: "Festivals", icon: "🎉" },
// //   { name: "Gatherings", icon: "👥" },
// // ];

// // const services = [
// //   "Event Planning",
// //   "Venue Selection",
// //   "Catering Management",
// //   "Audio-Visual Production",
// //   "Guest Management",
// //   "Marketing & Promotion",
// // ];

// // export default function FullyInteractiveEventSolutions() {
// //   const [currentIndex, setCurrentIndex] = useState(0);
// //   const [selectedEvent, setSelectedEvent] = useState(null);
// //   const [isServicesOpen, setIsServicesOpen] = useState(false);

// //   useEffect(() => {
// //     const interval = setInterval(() => {
// //       setCurrentIndex((prevIndex) => (prevIndex + 1) % eventTypes.length);
// //     }, 3000);
// //     return () => clearInterval(interval);
// //   }, []);

// //   return (
// //     <div className="w-full bg-gradient-to-b from-[#f4f4f4] to-white py-20">
// //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// //         <motion.h1
// //           initial={{ opacity: 0, y: -50 }}
// //           animate={{ opacity: 1, y: 0 }}
// //           transition={{ duration: 0.5 }}
// //           className="text-5xl font-bold text-center mb-16"
// //         >
// //           Saudi Arabia's Premier Event Solutions
// //         </motion.h1>

// //         <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
// //           <div className="space-y-12">
// //             <div className="relative h-32">
// //               <motion.h2
// //                 initial={{ opacity: 0 }}
// //                 animate={{ opacity: 1 }}
// //                 transition={{ duration: 0.5 }}
// //                 className="text-3xl font-bold mb-4"
// //               >
// //                 Event Solutions for
// //               </motion.h2>
// //               <AnimatePresence mode="wait">
// //                 <motion.div
// //                   key={currentIndex}
// //                   initial={{ y: 50, opacity: 0 }}
// //                   animate={{ y: 0, opacity: 1 }}
// //                   exit={{ y: -50, opacity: 0 }}
// //                   transition={{ duration: 0.5 }}
// //                   className="absolute"
// //                 >
// //                   <span className="text-5xl font-bold text-red-600">
// //                     {eventTypes[currentIndex].icon} {eventTypes[currentIndex].name}
// //                   </span>
// //                 </motion.div>
// //               </AnimatePresence>
// //             </div>

// //             <motion.div
// //               initial={{ opacity: 0, y: 20 }}
// //               animate={{ opacity: 1, y: 0 }}
// //               transition={{ duration: 0.5, delay: 0.2 }}
// //               className="bg-white rounded-xl shadow-2xl p-8 space-y-6"
// //             >
// //               <h3 className="text-2xl font-semibold">Explore Our Event Types</h3>
// //               <div className="grid grid-cols-2 gap-4">
// //                 {eventTypes.map((event, index) => (
// //                   <motion.button
// //                     key={event.name}
// //                     whileHover={{ scale: 1.05 }}
// //                     whileTap={{ scale: 0.95 }}
// //                     className={`p-4 rounded-lg text-left transition-colors ${
// //                       selectedEvent === index ? 'bg-red-600 text-white' : 'bg-gray-100 text-gray-800'
// //                     }`}
// //                     onClick={() => setSelectedEvent(index)}
// //                   >
// //                     <span className="text-2xl mr-2">{event.icon}</span>
// //                     {event.name}
// //                   </motion.button>
// //                 ))}
// //               </div>
// //             </motion.div>
// //           </div>

// //           <div className="space-y-8">
// //             <motion.div
// //               initial={{ opacity: 0, scale: 0.9 }}
// //               animate={{ opacity: 1, scale: 1 }}
// //               transition={{ duration: 0.5 }}
// //               className="bg-white rounded-xl shadow-2xl p-8 space-y-6"
// //             >
// //               <h3 className="text-2xl font-semibold text-gray-800">About Saudi Event Expert</h3>
// //               <p className="text-gray-600">
// //                 Established in 2007 and based in Riyadh, we are an integrated event management and brand
// //                 activation agency. Our expertise spans planning, developing, managing, organizing,
// //                 executing, and evaluating a wide variety of events and below-the-line promotional activities.
// //               </p>
// //               <motion.button
// //                 whileHover={{ scale: 1.05 }}
// //                 whileTap={{ scale: 0.95 }}
// //                 className="flex items-center space-x-2 text-red-600 font-semibold"
// //               >
// //                 <span>Learn More About Us</span>
// //                 <ChevronRight size={20} />
// //               </motion.button>
// //             </motion.div>

// //             <motion.div
// //               initial={{ opacity: 0, scale: 0.9 }}
// //               animate={{ opacity: 1, scale: 1 }}
// //               transition={{ duration: 0.5, delay: 0.2 }}
// //               className="bg-red-600 text-white rounded-xl shadow-2xl p-8 space-y-6"
// //             >
// //               <h3 className="text-2xl font-semibold">Our Commitment</h3>
// //               <p>
// //                 We are dedicated to delivering top-notch service that ensures maximum client satisfaction.
// //                 Our core values of integrity and transparency guide all our interactions.
// //               </p>
// //               <motion.button
// //                 whileHover={{ scale: 1.05 }}
// //                 whileTap={{ scale: 0.95 }}
// //                 onClick={() => setIsServicesOpen(!isServicesOpen)}
// //                 className="flex items-center justify-between w-full bg-white text-red-600 rounded-lg px-4 py-2 font-semibold"
// //               >
// //                 <span>Our Services</span>
// //                 <ChevronDown
// //                   size={20}
// //                   style={{
// //                     transform: isServicesOpen ? 'rotate(180deg)' : 'rotate(0deg)',
// //                     transition: 'transform 0.3s ease-in-out'
// //                   }}
// //                 />
// //               </motion.button>
// //               <AnimatePresence>
// //                 {isServicesOpen && (
// //                   <motion.ul
// //                     initial={{ opacity: 0, height: 0 }}
// //                     animate={{ opacity: 1, height: 'auto' }}
// //                     exit={{ opacity: 0, height: 0 }}
// //                     transition={{ duration: 0.3 }}
// //                     className="space-y-2 mt-4"
// //                   >
// //                     {services.map((service, index) => (
// //                       <motion.li
// //                         key={service}
// //                         initial={{ opacity: 0, x: -20 }}
// //                         animate={{ opacity: 1, x: 0 }}
// //                         transition={{ duration: 0.3, delay: index * 0.1 }}
// //                         className="flex items-center space-x-2"
// //                       >
// //                         <Check size={16} />
// //                         <span>{service}</span>
// //                       </motion.li>
// //                     ))}
// //                   </motion.ul>
// //                 )}
// //               </AnimatePresence>
// //             </motion.div>
// //           </div>
// //         </div>

// //         <motion.div
// //           initial={{ opacity: 0, y: 50 }}
// //           animate={{ opacity: 1, y: 0 }}
// //           transition={{ duration: 0.5, delay: 0.4 }}
// //           className="mt-16 text-center"
// //         >
// //           <h3 className="text-3xl font-bold mb-8">Ready to Create an Unforgettable Event?</h3>
// //           <motion.button
// //             whileHover={{ scale: 1.05 }}
// //             whileTap={{ scale: 0.95 }}
// //             className="bg-red-600 text-white px-8 py-4 rounded-full text-xl font-semibold hover:bg-red-700 transition duration-300"
// //           >
// //             Contact Us Now
// //           </motion.button>
// //         </motion.div>
// //       </div>
// //     </div>
// //   );
// // }



import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, ChevronDown, Check } from "lucide-react";

const eventTypes = [
  { name: "LAUNCHES", icon: "🚀" },
  { name: "WORKSHOPS", icon: "🛠️" },
  { name: "EXHIBITIONS", icon: "🎨" },
  { name: "CONFERENCES", icon: "🎤" },
  { name: "SEMINARS", icon: "📚" },
  { name: "FESTIVALS", icon: "🎉" },
  { name: "GATHERINGS", icon: "👥" },
];

const services = [
  "Exhibitions Services",
  "Event Services",
  "Digital Marketing",
  "Branding & Promotion",
];

export default function EnhancedEventSolutions() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % eventTypes.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full bg-[#0a0203] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className=" heading text-6xl font-bold text-center mb-16 text-[#bc9a4c] drop-shadow-lg"
        >
          Saudi Arabia's Premier Event Solutions
        </motion.h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-12">
            <div className="  relative h-32">
              <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className=" heading text-2xl font-extrabold mb-4 text-[#bc9a4c]"
              >
                EVENT SOLUTIONS FOR
              </motion.h2>
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -50, opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="absolute"
                >
                  <span className="text-5xl font-bold text-white">
                    {eventTypes[currentIndex].icon} {eventTypes[currentIndex].name}
                  </span>
                </motion.div>
              </AnimatePresence>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-gray-900 rounded-xl shadow-2xl p-8 space-y-6"
            >
              <h3 className=" heading text-2xl font-semibold text-[#bc9a4c]">Explore Our Event Types</h3>
              <div className="grid grid-cols-2 gap-4">
                {eventTypes.map((event, index) => (
                  <motion.button
                    key={event.name}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`p-4 para rounded-lg text-left transition-colors ${
                      selectedEvent === index
                        ? "bg-[#bc9a4c] text-black"
                        : "bg-gray-800 text-white hover:bg-gray-700"
                    }`}
                    onClick={() => setSelectedEvent(index)}
                    aria-pressed={selectedEvent === index}
                  >
                    <span className="text-2xl mr-2">{event.icon}</span>
                    {event.name}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </div>

          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="bg-gray-900 rounded-xl shadow-2xl p-8 space-y-6"
            >
              <h3 className=" heading text-2xl font-semibold text-[#bc9a4c]">How We Work</h3>
              <p className="para text-gray-300">
                Our approach focuses on understanding the unique needs of every client and event.
                From consultation to execution, we prioritize attention to detail, efficiency, and creativity.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center space-x-2 text-[#bc9a4c] font-semibold"
              >
                <span>Learn More About Our Process</span>
                <ChevronRight size={20} />
              </motion.button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-[#bc9a4c] text-black rounded-xl shadow-2xl p-8 space-y-6"
            >
              <h3 className=" heading text-2xl font-semibold">What is Different in Us</h3>
              <p className="para">
                We go beyond just planning events—we create unforgettable experiences.
                Our team is always up-to-date with the latest trends, ensuring your event is innovative and impactful.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className="flex items-center justify-between w-full bg-black text-[#bc9a4c] rounded-lg px-4 py-2 font-semibold"
                aria-expanded={isServicesOpen}
              >
                <span className="heading">Our Services</span>
                <ChevronDown
                  size={20}
                  style={{
                    transform: isServicesOpen ? "rotate(180deg)" : "rotate(0deg)",
                    transition: "transform 0.3s ease-in-out",
                  }}
                />
              </motion.button>
              <AnimatePresence>
                {isServicesOpen && (
                  <motion.ul
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className=" para space-y-2 mt-4 max-h-40 overflow-y-auto"
                  >
                    {services.map((service, index) => (
                      <motion.li
                        key={service}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        className="flex items-center space-x-2"
                      >
                        <Check size={16} />
                        <span>{service}</span>
                      </motion.li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
 }




// import axios from 'axios'
// import React, { useEffect, useState } from 'react'

// export default function TextComponent() {
//     const [users,setUsers]=useState([])
//     const [loading ,setLoading]=useState(true)
//     const [error ,setError]=useState(null)
//     useEffect(()=>{
//       const fetchUsers= async()=>{
//         try{
//          const response= await axios.get("https://jsonplaceholder.typicode.com/users");
//          setUsers(response.data)
//       }catch(err){
//        setError(err.message)
//       }finally{
//        setLoading(false)
//       };
//       }
//       fetchUsers();
//     },[]);
//     if(loading) return <div>LOAADING.....</div>
//     if(error) return <div>Error:{error}</div>
//   return (
//     <div>
//       <ul>
//         <li>
//           { users.map(user => <li key={user.id}>{user.name}</li>) }
//         </li>
//       </ul>

//     </div>

//   )
// }
