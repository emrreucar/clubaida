"use client";

import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import Image from "next/image";

import { useState } from "react";
import {
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
  MdPerson,
} from "react-icons/md";
import { RiHotelLine } from "react-icons/ri";
import { FaWifi } from "react-icons/fa6";
import { TbAirConditioning } from "react-icons/tb";
import { GiShower } from "react-icons/gi";
import { IoIosWine } from "react-icons/io";
import { PiTelevisionSimpleLight } from "react-icons/pi";
import { FaPhoneAlt } from "react-icons/fa";
import Link from "next/link";
import { useTranslation } from "react-i18next";

const RoomsCarouselItem = ({
  images,
  price,
  title,
  person,
  area,
  description,
  href,
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prevSlide) => (prevSlide - 1 + images.length) % images.length
    );
  };

  const { t } = useTranslation();

  return (
    <div className="mb-10 bg-white pb-4 rounded-b-xl">
      <div className="relative w-full h-[350px] overflow-hidden bg-fixed">
        {images.map((image, index) => (
          <Image
            key={index}
            src={image}
            alt="image"
            fill
            className={`rounded-t-xl object-cover transition-opacity duration-1000 ${
              index !== currentSlide && "opacity-0"
            }`}
          />
        ))}

        <div className="overlay absolute top-0 left-0 w-full h-[350px] lg:h-screen bg-black/10"></div>

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

        <span className="absolute bottom-6 right-6 bg-slate-500 text-white px-4 py-1 font-bold rounded-md ">
          {price}
        </span>
      </div>

      <div className="p-5 lg:min-h-[350px] ">
        <h1 className="font-semibold text-xl mb-2"> {title} </h1>

        <div className="flex items-center gap-x-6 text-gray-400 ">
          <div className="flex items-center gap-x-2 ">
            <MdPerson />
            <span>
              {person} {t("person")}{" "}
            </span>
          </div>

          <div className="flex items-center gap-x-2 ">
            <RiHotelLine />
            <span>
              {area} m<sup>2</sup>{" "}
            </span>
          </div>
        </div>

        <p className="mt-4 text-gray-500 max-w-[500px] ">{description}</p>

        <div className="icons flex items-center justify-center mt-5 gap-x-6 text-gray-400 ">
          <FaWifi
            size={18}
            data-tooltip-id="my-tooltip"
            data-tooltip-content={`${t("free wifi")}`}
            data-tooltip-place="top"
          />
          <TbAirConditioning
            size={18}
            data-tooltip-id="my-tooltip"
            data-tooltip-content={`${t("air conditioning")}`}
            data-tooltip-place="top"
          />
          <GiShower
            size={18}
            data-tooltip-id="my-tooltip"
            data-tooltip-content={`${t("Jacuzzi")}`}
            data-tooltip-place="top"
          />
          <IoIosWine
            size={18}
            data-tooltip-id="my-tooltip"
            data-tooltip-content="Mini Bar"
            data-tooltip-place="top"
          />
          <PiTelevisionSimpleLight
            size={18}
            data-tooltip-id="my-tooltip"
            data-tooltip-content="TV"
            data-tooltip-place="top"
          />
          <FaPhoneAlt
            size={18}
            data-tooltip-id="my-tooltip"
            data-tooltip-content={`${t("Phone")}`}
            data-tooltip-place="top"
          />
        </div>
        <Tooltip id="my-tooltip" />
        <Link
          href={href}
          className="text-white bg-indigo-500 px-6 py-1.5 cursor-pointer duration-300 rounded-md flex items-center gap-x-2 hover:bg-indigo-800 uppercase text-center mt-12 w-[fit-content] mx-auto"
        >
          {t("review")}
        </Link>
      </div>
    </div>
  );
};

export default RoomsCarouselItem;
