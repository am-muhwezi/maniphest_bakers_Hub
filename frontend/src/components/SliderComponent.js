/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
/* eslint-disable arrow-body-style */
import React, { useState, useEffect } from 'react';

const SliderComponent = ({ slides, interval }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, interval);

    return () => clearInterval(timer);
  }, [slides.length, interval]);
  return (
    <div className="slider-container">
      {slides.map((slide, index) => (
        <div
          key={index + 1}
          className={`slide ${index === currentSlide ? 'active' : ''}`}
        >
          {slide}
        </div>
      ))}
    </div>
  );
};

export default SliderComponent;