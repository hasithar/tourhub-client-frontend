"use client";

import React from "react";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import Image from "next/image";

const Slider = () => {
  const [sliderRef, instanceRef] = useKeenSlider(
    {
      slideChanged() {
        console.log("slide changed");
      },
    },
    [
      // add plugins here
    ]
  );

  return (
    <>
      <div ref={sliderRef} className="keen-slider">
        <div className="keen-slider__slide">
          <Image
            src="/images/tours/ancient-temples-historical-sites-sri-lanka.jpg"
            alt=""
            width={1024}
            height={768}
          />
        </div>
        <div className="keen-slider__slide">2</div>
        <div className="keen-slider__slide">3</div>
      </div>
    </>
  );
};

export default Slider;
