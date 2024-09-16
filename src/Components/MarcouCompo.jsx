import React from "react";


const MarcouCompo = () => {
  const imgArr = [
    "/Assests/80.png", "/Assests/81.png", "/Assests/82.png", "/Assests/83.png",
    "/Assests/84.png", "/Assests/85.png", "/Assests/87.png", "/Assests/88.png",
   "/Assests/89.png","/Assests/90.jpg","/Assests/88.png",
  ];


 



  const half = Math.ceil(imgArr.length / 2);
  const firstHalf = imgArr.slice(0, half);
  const secondHalf = imgArr.slice(half);

  return (
    <div className="relative z-10 bg-white overflow-hidden">
      <div className="relative z-20 py-12"
       
              // style={{
              //    backgroundImage: "url('/Assests/saudi-al-ula.jpg')",
              //    backgroundAttachment: "fixed",
              //   backgroundPosition: "center",
              //    backgroundSize: "cover",
              //    backgroundRepeat: "no-repeat"
              //  }}
              >
        <h2 className="text-4xl font-serif text-center text-white mb-8">OUR CLIENTS</h2>
        <div className="relative overflow-hidden">
          <div className="flex flex-col ">
            <div className="flex animate-scroll">
              {[...firstHalf, ...firstHalf].map((img, index) => (
                <div key={index} className="flex-shrink-0 mx-4">
                  <div className="w-[300px] h-[140px] p-3 bg-white bg-opacity-20 backdrop-blur-sm  rounded hover:scale-105 transition-transform duration-300">
                    <div className="w-full h-full overflow-hidden border-4 border-white border-opacity-30">
                      <img
                        src={img}
                        alt={`Client ${index % firstHalf.length + 1}`}
                        className="w-full h-full object-contain"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex animate-scroll-reverse">
              {[...secondHalf, ...secondHalf].map((img, index) => (
                <div key={index} className="flex-shrink-0 mx-4">
                  <div className="w-[300px] h-[170px] p-3 bg-white bg-opacity-20 backdrop-blur-sm  rounded hover:scale-105 transition-transform duration-300">
                    <div className="w-full h-full overflow-hidden border-4 border-white border-opacity-30">
                      <img
                        src={img}
                        loading="lazy"
                        alt={`Client ${index % secondHalf.length + half + 1}`}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarcouCompo;
   
// import React, { useState } from "react";

// const MarcouCompo = () => {
//   const imgArr2 = [
//     {
//       colorImage: "/Assests/11.png",
//       blackAndWhiteImage: "/Assests/a.png"
//     },
//     {
//       colorImage: "/Assests/12.png",
//       blackAndWhiteImage: "/Assests/b.png"
//     },
//     {
//       colorImage: "/Assests/13.png",
//       blackAndWhiteImage: "/Assests/c.png"
//     },
//     {
//       colorImage: "/Assests/14.png",
//       blackAndWhiteImage: "/Assests/d.png"
//     },
//     {
//       colorImage: "/Assests/15.png",
//       blackAndWhiteImage: "/Assests/e.png"
//     },
//     {
//       colorImage: "/Assests/16.png",
//       blackAndWhiteImage: "/Assests/f.png"
//     },
//     {
//       colorImage: "/Assests/17.png",
//       blackAndWhiteImage: "/Assests/g.png"
//     },
//     {
//       colorImage: "/Assests/18.png",
//       blackAndWhiteImage: "/Assests/h.png"
//     },
//     {
//       colorImage: "/Assests/19.png",
//       blackAndWhiteImage: "/Assests/i.png"
//     },
//     {
//       colorImage: "/Assests/20.png",
//       blackAndWhiteImage: "/Assests/j.png"
//     },
//     {
//       colorImage: "/Assests/21.png",
//       blackAndWhiteImage: "/Assests/k.png"
//     },
//     {
//       colorImage: "/Assests/22.png",
//       blackAndWhiteImage: "/Assests/l.png"
//     },
//     {
//       colorImage: "/Assests/23.png",
//       blackAndWhiteImage: "/Assests/m.png"
//     },
//     {
//       colorImage: "/Assests/24.png",
//       blackAndWhiteImage: "/Assests/n.png"
//     },
//     {
//       colorImage: "/Assests/25.png",
//       blackAndWhiteImage: "/Assests/o.png"
//     },
//     {
//       colorImage: "/Assests/26.png",
//       blackAndWhiteImage: "/Assests/p.png"
//     },
//     {
//       colorImage: "/Assests/27.png",
//       blackAndWhiteImage: "/Assests/r.png"
//     },
//     {
//       colorImage: "/Assests/28.png",
//       blackAndWhiteImage: "/Assests/s.png"
//     },
//   ];

//   const half = Math.ceil(imgArr2.length / 2);
//   const firstHalf = imgArr2.slice(0, half);
//   const secondHalf = imgArr2.slice(half);

//   const ImageCard = ({ img }) => {
//     const [isHovered, setIsHovered] = useState(false);

//     return (
//       <div
//         className="flex-shrink-0 mx-4"
//         onMouseEnter={() => setIsHovered(true)}
//         onMouseLeave={() => setIsHovered(false)}
//       >
//         <div className="w-[300px] h-[130px] p-3 bg-white bg-opacity-20 backdrop-blur-sm rounded hover:scale-105 transition-transform duration-300">
//           <div className="w-full h-full overflow-hidden border-4 border-white border-opacity-30">
//             <img
//               src={isHovered ? img.colorImage : img.blackAndWhiteImage}
//               alt="Client"
//               className="w-full h-full object-contain transition-opacity duration-300"
//               loading="lazy"
//             />
//           </div>
//         </div>
//       </div>
//     );
//   };

//   return (
//     <div className="relative  bg-white z-10  overflow-hidden">
//       <div
//         className="relative z-20 py-16"
//         // style={{
//         //   backgroundImage: "url('/Assests/saudi-al-ula.jpg')",
//         //   backgroundAttachment: "fixed",
//         //   backgroundPosition: "center",
//         //   backgroundSize: "cover",
//         //   backgroundRepeat: "no-repeat"
//         // }}
//       >
//         <h2 className="text-4xl font-bold text-center mb-8 text-white">OUR CLIENTS</h2>
//         <div className="relative overflow-hidden">
//           <div className="flex flex-col gap-4">
//             <div className="flex animate-scroll">
//               {[...firstHalf, ...firstHalf].map((img, index) => (
//                 <ImageCard key={index} img={img} />
//               ))}
//             </div>
//             <div className="flex animate-scroll-reverse">
//               {[...secondHalf, ...secondHalf].map((img, index) => (
//                 <ImageCard key={index} img={img} />
//               ))}
//             </div>
//           </div>
//           {/* <div className="absolute top-0 left-0 w-64 h-full bg-gradient-to-r from-white via-white to-transparent pointer-events-none"></div>
//           <div className="absolute top-0 right-0 w-64 h-full bg-gradient-to-l from-white via-white to-transparent pointer-events-none"></div> */}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MarcouCompo;
