import React, { useState, useEffect } from 'react';

export default function EventSolutionsComponent() {
    const dataArray = ["Launches", "Workshops", "Open Days", "Exhibitions", "Conferences", "Seminars", "Festivals", "Gatherings"];
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % dataArray.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <>
        <div className='w-full bg-[#f4f4f4]'>
        <div className='w-full flex justify-center items-center '>
      <div className='w-[90%] flex flex-col justify-center pt-20 items-start gap-10'>
      <div >
       <h2 className="text-6xl font-bold">
        Saudi Arabia’s leading event management company
        </h2>
       </div>
       <p className='text-xl w-[80%] text-gray-500'>
       Eventana is an integrated event management and brand activation agency, established in 2007 and based in Riyadh, Saudi Arabia. We provide planning, development, management, organization, implementation, and evaluation of events and below-the-line promotional activities of all varieties.
       </p>
       <p className='text-xl w-[80%] text-gray-500'>
       At Eventana , we aim to provide the highest quality service that guarantees maximum client satisfaction through our values of honesty and transparency in dealing with clients, punctuality on meeting deadlines and competitively priced services. We constantly review and appraise our own performance to assure that your event is perfect.
       </p>

      </div>
      </div>
        <div className="flex items-center justify-center w-full pt-20 ">
            <div className="text-5xl font-bold mr-4">Event Solutions for</div>
            <div className="relative h-64 w-96 overflow-hidden">
                {dataArray.map((item, index) => {
                    const offset = (index - currentIndex + dataArray.length) % dataArray.length;
                    const isActive = offset === 0;
                    return (
                        <div
                            key={index}
                            className={`absolute w-full text-5xl font-bold transition-all duration-500 ease-in-out ${
                                isActive ? 'text-red-600' : 'text-gray-300'
                            }`}
                            style={{
                                transform: `translateY(${offset * 100}%)`,
                                filter: isActive ? 'blur(0)' : 'blur(4px)',
                                opacity: Math.max(1 - Math.abs(offset) * 0.5, 0),
                            }}
                        >
                            {item}
                        </div>
                    );
                })}
            </div>
        </div>
        </div>
          
        </>
        
    );
}