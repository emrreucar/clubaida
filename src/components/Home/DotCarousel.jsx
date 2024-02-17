"use client";
import { useState } from "react";
import { PiDotOutlineFill } from "react-icons/pi";

import Image from "next/image";
import img1 from "/public/abt_img1.jpg";
import img2 from "/public/abt_img2.jpg";
import img3 from "/public/abt_img3.jpg";
import img4 from "/public/abt_img4.jpg";

import Link from "next/link";

const images = [img1, img2, img3, img4];

const DotCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="my-10">
      <div className="relative w-full h-[350px] lg:h-[500px] lg:w-[80%] overflow-hidden">
        {images.map((image, index) => (
          <Image
            key={index}
            src={image}
            fill
            objectFit="cover"
            alt="test"
            className={`rounded-[10px] transition-opacity duration-1000 ${
              index !== currentSlide && "opacity-0"
            }`}
          />
        ))}
        <div
          className={`overlay rounded-[10px] absolute top-0 left-0 w-full h-[350px] lg:h-[500px] bg-black/40 duration-300 transform group-hover:scale-105`}
        />

        <div className="absolute bottom-0 left-[50%] transform -translate-x-1/2 flex">
          {images.map((_, index) => (
            <PiDotOutlineFill
              key={index}
              fill="white"
              size={45}
              className={`cursor-pointer ${
                index === currentSlide ? "opacity-100" : "opacity-50"
              }`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DotCarousel;
