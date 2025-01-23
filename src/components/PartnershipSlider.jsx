import React from "react";

const PartnershipSlider = () => {
  const images = [
    "img/slider1.jpg",
    "img/slider2.jpg",
    "img/slider3.jpg",
    "img/slider4.jpg",
    "img/slider5.jpg",
    "img/slider6.jpg",
    "img/slider7.jpg",
    "img/slider8.jpg",

  ];

  return (
    <div className="overflow-hidden bg-transparent py-4 w-full h-[400px]">
      <div className="flex gap-2 animate-scroll">
    
          <img
        
            src="img/slider1.jpg"
           alt="slider-img"
            className="h-full w-[300px] object-contain"
          />
          <img
        
            src="img/slider2.jpg"
           alt="slider-img"
            className="h-full w-[300px] object-contain"
          />
          <img
            src="img/slider3.jpg"
            alt="slider-img"
            className="h-full w-[300px] object-contain"
          />
          <img
            src="img/slider4.jpg"
            alt="slider-img"
             className="h-full w-[300px] object-contain"
          />
          <img
        
            src="img/slider5.jpg"
           alt="slider-img"
             className="h-full w-[300px] object-contain"
          />
          <img
        
            src="img/slider6.jpg"
           alt="slider-img"
             className="h-full w-[300px] object-contain"
          />
          <img
           src="img/slider7.jpg"
           alt="slider-img"
            className="h-full w-[300px] object-contain"
          />
          <img
            src="img/slider8.jpg"
            alt="slider-img"
            className="h-full w-[300px] object-contain"
          />
    
      </div>
    </div>
  );
};

export default PartnershipSlider;
