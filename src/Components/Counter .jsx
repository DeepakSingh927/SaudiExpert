import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSmile, faTools, faUserTie } from "@fortawesome/free-solid-svg-icons"; 

const Counter = () => {
  const counters = [
    { label: "Happy Customers", value: 170, icon: faSmile },
    { label: "Successful Projects", value: 1300, icon: faTools },
    { label: "Years of Experience", value: 18, icon: faUserTie },
  ];

  const [visible, setVisible] = useState(false);
  const counterRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.3 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }
  }, []);

  const animateCounter = (endValue) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (visible) {
        let start = 0;
        const duration = 2000; 
        const increment = endValue / (duration / 10);

        const animate = () => {
          start += increment;
          if (start < endValue) {
            setCount(Math.ceil(start));
          } else {
            setCount(endValue);
            clearInterval(interval);
          }
        };

        const interval = setInterval(animate, 10);
        return () => clearInterval(interval);
      }
    }, [visible, endValue]);

    return count;
  };

  return (
    <div
      ref={counterRef}
      className="counter-section bg-cover bg-fixed"
      style={{
        backgroundImage: `url('/Assests/RIYADH.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="container mx-auto py-24 text-center text-white">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {counters.map((counter, index) => (
            <div key={index} className="counter-box flex flex-col items-center">
              <div className="icon text-6xl mb-4 text ">
                <FontAwesomeIcon icon={counter.icon} size="2x" color="white" />
              </div>
              <div className="text-7xl font-extrabold">
                {animateCounter(counter.value)}
              </div>
              <p className="text-xl font-semibold mt-2 ">{counter.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Counter;
