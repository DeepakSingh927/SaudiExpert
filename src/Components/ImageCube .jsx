import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';

const ImageCarousel = ({ images, caption }) => {
  const [rotation, setRotation] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoRotating, setIsAutoRotating] = useState(true);

  const rotateToNext = useCallback(() => {
    setRotation(prev => prev - 90);
    setCurrentIndex(prev => (prev + 1) % images.length);
  }, [images.length]);

  const rotateToPrevious = useCallback(() => {
    setRotation(prev => prev + 90);
    setCurrentIndex(prev => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  useEffect(() => {
    let interval;
    if (isAutoRotating) {
      interval = setInterval(rotateToNext, 4000);
    }
    return () => clearInterval(interval);
  }, [isAutoRotating, rotateToNext]);

  const getImageStyle = (index) => ({
    transform: `rotateY(${index * 90}deg) translateZ(250px)`,
    backgroundImage: `url(${images[index]})`,
  });

  return (
    <div className="w-full h-full perspective-1000 relative group overflow-hidden">
      <div className="scene w-full h-full relative">
        <div 
          className="carousel w-full h-full absolute transform-style-3d transition-transform duration-1000 ease-in-out"
          style={{ transform: `rotateY(${rotation}deg)` }}
        >
          {images.map((_, index) => (
            <div 
              key={index} 
              className="image-face absolute w-full h-full bg-cover bg-center rounded-lg shadow-lg"
              style={getImageStyle(index)}
            />
          ))}
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
        <p className="text-white text-base font-semibold text-center">
          {caption}
        </p>
      </div>
      <button
        className="absolute top-1/2 left-2 -translate-y-1/2 bg-white/20 hover:bg-white/40 rounded-full p-2 transition-opacity opacity-0 group-hover:opacity-100"
        onClick={rotateToPrevious}
      >
        <ChevronLeft className="text-white" size={24} />
      </button>
      <button
        className="absolute top-1/2 right-2 -translate-y-1/2 bg-white/20 hover:bg-white/40 rounded-full p-2 transition-opacity opacity-0 group-hover:opacity-100"
        onClick={rotateToNext}
      >
        <ChevronRight className="text-white" size={24} />
      </button>
      <button
        className="absolute top-2 right-2 bg-white/20 hover:bg-white/40 rounded-full p-2 transition-opacity opacity-0 group-hover:opacity-100"
        onClick={() => setIsAutoRotating(!isAutoRotating)}
      >
        {isAutoRotating ? <Pause className="text-white" size={24} /> : <Play className="text-white" size={24} />}
      </button>
    </div>
  );
};

export default ImageCarousel;