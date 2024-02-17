"use client";

import { useState } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { FaLongArrowAltRight } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";

import Image from "next/image";
import img1 from "/public/room_img1.jpg";
import img2 from "/public/room_img2.jpg";
import img3 from "/public/room_img3.jpg";

import Link from "next/link";
import { useTranslation } from "react-i18next";

const images = [img1, img2, img3];

const RoomCarousel = () => {
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

  return (
    <div className="">
      {/* for mobile start */}
      <div className="lg:hidden relative w-full h-[350px] overflow-hidden">
        {images.map((image, index) => (
          <div>
            <div className="group">
              <Image
                key={index}
                src={image}
                alt="image"
                fill
                objectFit="cover"
                className={`group-hover:scale-95 transition-opacity duration-300 ${
                  index !== currentSlide && "opacity-0"
                }`}
              />
            </div>

            <div
              className={`absolute top-6 left-12 z-50 ${
                index === currentSlide ? "" : "hidden"
              }`}
            >
              {index === 0 && (
                <div className="flex flex-col">
                  <span className="text-white font-bold">
                    {t("perNight")} 1000₺
                  </span>
                  <span className="text-white font-bold">
                    {t("disabledHotelRoom")}
                  </span>
                </div>
              )}
              {index === 1 && (
                <div className="flex flex-col">
                  <span className="text-white font-bold">
                    {t("perNight")} 2000₺
                  </span>
                  <span className="text-white font-bold">
                    {t("2+1 apart hotel room")}
                  </span>
                </div>
              )}
              {index === 2 && (
                <div className="flex flex-col">
                  <span className="text-white font-bold">
                    {t("perNight")} 1500₺
                  </span>
                  <span className="text-white font-bold">
                    {t("1+1 apart hotel room")}
                  </span>
                </div>
              )}
            </div>
            <Link
              href={"/"}
              className="absolute bottom-6 left-12 text-white bg-indigo-600 px-4 py-1 cursor-pointer duration-300 rounded-md flex items-center gap-x-2 hover:bg-indigo-800 z-50"
            >
              {t("review")} <FaLongArrowAltRight />
            </Link>
          </div>
        ))}

        <div className="overlay absolute top-0 left-0 h-full w-full bg-black/40"></div>

        <div className="absolute top-1/2 right-1/2 transform translate-x-1/2 -translate-y-1/2 flex justify-between w-full z-50">
          <MdKeyboardArrowLeft
            size={40}
            fill="white"
            className="cursor-pointer hover:bg-[#ff6d5e] duration-300"
            onClick={prevSlide}
          />
          <MdKeyboardArrowRight
            size={40}
            fill="white"
            className="cursor-pointer hover:bg-[#ff6d5e] duration-300"
            onClick={nextSlide}
          />
        </div>
      </div>
      {/* for mobile end */}

      {/* for large screen start */}
      <div className="hidden lg:flex w-full">
        {/* room item start */}
        <div className="relative w-full h-[400px]">
          <div className="group">
            <Image
              src={img1}
              alt="image"
              fill
              className="group-hover:scale-95 duration-300 overflow-hidden"
            />
            <div className="overlay absolute top-0 left-0 w-full h-full bg-black/60 duration-300 group-hover:scale-95"></div>
          </div>

          <div className="flex flex-col h-[50%] absolute top-12 left-12">
            <div>
              <p className="text-white">{t("perNight")} 1000₺</p>
              <p className="font-bold text-white text-[30px] ">
                {t("disabledHotelRoom")}
              </p>
            </div>
            <Link
              href={"/rooms/engelli-otel-odasi"}
              className="text-white uppercase mt-auto flex items-center gap-x-2 w-[fit-content] "
            >
              {t("review")}
              <FaArrowRightLong />
            </Link>
          </div>
        </div>
        {/* room item end */}

        {/* room item start */}
        <div className="relative w-full h-[400px]">
          <div className="group">
            <Image
              src={img2}
              alt="image"
              fill
              className="group-hover:scale-95 duration-300 overflow-hidden"
            />
            <div className=" group-hover:scale-95 duration-300 overlay absolute top-0 left-0 w-full h-full bg-black/40"></div>
          </div>

          <div className="flex flex-col h-[50%] absolute top-12 left-12">
            <div>
              <p className="text-white">{t("perNight")} 2000₺</p>
              <p className="font-bold text-white text-[30px] ">
                {t("2+1 apart hotel room")}
              </p>
            </div>
            <Link
              href={"/rooms/2-1-apart-otel-odasi"}
              className="text-white uppercase mt-auto flex items-center gap-x-2 w-[fit-content]"
            >
              {t("review")}
              <FaArrowRightLong />
            </Link>
          </div>
        </div>
        {/* room item end */}

        {/* room item start */}
        <div className="relative w-full h-[400px]">
          <div className="group">
            <Image
              src={img3}
              alt="image"
              fill
              className="group-hover:scale-95 duration-300 overflow-hidden"
            />
            <div className="group-hover:scale-95 duration-300 overlay absolute top-0 left-0 w-full h-full bg-black/40"></div>
          </div>
          <div className="flex flex-col h-[50%] absolute top-12 left-12">
            <div>
              <p className="text-white">{t("perNight")} 1500₺</p>
              <p className="font-bold text-white text-[30px] ">
                {t("1+1 apart hotel room")}
              </p>
            </div>
            <Link
              href={"/rooms/1-1-apart-otel-odasi"}
              className="text-white uppercase mt-auto flex items-center gap-x-2 w-[fit-content]"
            >
              {t("review")}
              <FaArrowRightLong />
            </Link>
          </div>
        </div>
        {/* room item end */}
      </div>
      {/* for large screen end */}
    </div>
  );
};

export default RoomCarousel;
