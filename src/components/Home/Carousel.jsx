"use client";

import { useTranslation } from "react-i18next";

import { useState, useEffect } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

import Image from "next/image";
import img1 from "/public/img1.jpg";
import img2 from "/public/img2.jpg";
import img3 from "/public/img3.jpg";
import img4 from "/public/img4.jpg";
import img5 from "/public/img5.jpg";
import img6 from "/public/img6.jpeg";

import Link from "next/link";

const images = [img1, img2, img3, img4, img5, img6];

const Carousel = () => {
  const { t } = useTranslation();

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prevSlide) => (prevSlide - 1 + images.length) % images.length
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentSlide]);

  return (
    <div>
      <div className="relative w-full h-[350px] lg:h-screen overflow-hidden">
        {images.map((image, index) => (
          <Image
            alt="image"
            key={index}
            src={image}
            fill
            className={`object-cover transition-opacity duration-1000 ${
              index !== currentSlide && "opacity-0"
            }`}
          />
        ))}

        <div className="overlay absolute top-0 left-0 w-full h-[350px] lg:h-screen bg-black/65"></div>

        <div className="absolute top-1/2 right-1/2 transform translate-x-1/2 -translate-y-1/2 flex justify-between w-full">
          <MdKeyboardArrowLeft
            size={40}
            fill="white"
            className="cursor-pointer"
            onClick={prevSlide}
          />
          <MdKeyboardArrowRight
            size={40}
            fill="white"
            className="cursor-pointer"
            onClick={nextSlide}
          />
        </div>
      </div>

      <div className="w-[80%] absolute top-[30%] lg:top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col">
        <span className="text-center text-[35px] lg:text-[50px] text-white font-bold">
          {t("aUniqueHoliday")}
        </span>
        <span className="text-white text-center lowercase">
          {t("aUniqueExperience")}
        </span>

        <Link
          className="text-white text-center font-bold mt-8 hover:text-rose-500 duration-300 w-[fit-content] mx-auto uppercase lg:text-xl"
          href={"/details"}
        >
          {t("details")}
        </Link>
      </div>
    </div>
  );
};

export default Carousel;
