
import { useEffect, useRef, useState } from "react";

import Button from "./Button";
import PartnershipSlider from "./PartnershipSlider";


const Hero = () => {
 

  return (
    <section id="#home" className='min-h-screen w-full flex flex-col border-2 gap-10
    '>
     
      <div className="w-full mx-auto flex flex-col sm:mt-30 mt-20 c-space gap-3">
      
        <p className='hero_tag text-gray_gradient'>Launch your brand. <br /> On your terms</p>
        <p className='text-sm md:text-base text-neutral-400 text-center  font-generalsans'>Join over 50,000 creators using Outside Eden</p>
      </div>
      
      <div className=' p-2  '>
      
          <Button name="Start Now" isBeam containerClass="sm:w-fit text-white" href="#contact" />
       
      
        <p className='text-sm text-neutral-400 text-center font-generalsans'>No monthly fees. No credit card required</p>
      </div>
     

      <PartnershipSlider />
    </section>

    

      
  );
};

export default Hero;
