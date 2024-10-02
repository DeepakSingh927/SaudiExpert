import React, { useState, useEffect } from 'react';

const Carousel = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    '/exhibitions/53.jpeg',
    '/exhibitions/54.jpeg',
    // ... add all your exhibition images here
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="carousel">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Exhibition ${index + 1}`}
          className={index === currentImage ? 'active' : ''}
          style={{ display: index === currentImage ? 'block' : 'none' }}
        />
      ))}
    </div>
  );
};

export default Carousel;