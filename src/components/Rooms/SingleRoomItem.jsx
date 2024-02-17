"use client";

import Image from "next/image";
import { BsTextarea } from "react-icons/bs";
import { BiSolidLandscape } from "react-icons/bi";
import { useEffect, useState } from "react";

import { MdOutlineBed, MdPerson } from "react-icons/md";
import RoomCarousel from "../Home/RoomCarousel";
import { useTranslation } from "react-i18next";

const SingleRoomItem = ({
  title,
  images,
  roomFeatures,
  description,
  bedCount,
  person,
  area,
  landscape,
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 1500);

    return () => clearInterval(interval);
  }, [currentSlide]);

  const { t } = useTranslation();

  return (
    <div>
      <h1 className="text-center text-3xl font-bold mt-10"> {title} </h1>
      {/* carousel start */}
      <div className="relative w-[35%] h-[300px] overflow-hidden mx-auto my-12 rounded-2xl">
        {images.map((image, index) => (
          <Image
            alt="image"
            key={index}
            src={image}
            fill
            className={`object-fill transition-opacity duration-1000 ${
              index !== currentSlide && "opacity-0"
            }`}
          />
        ))}
      </div>
      {/* carousel end */}

      {/* content start */}
      <div>
        <div className="shadow-xl shadow-black/30 flex flex-col lg:flex-row items-center justify-between p-10 max-w-3xl mx-auto rounded-xl mt-6 gap-y-4">
          <div className="flex flex-col items-center justify-center">
            <MdOutlineBed size={50} fill="gray" />
            <span>{bedCount}</span>
          </div>

          <div className="flex flex-col items-center justify-center">
            <MdPerson size={50} fill="gray" />
            {person} {t("person")}
          </div>

          <div className="flex flex-col items-center justify-center">
            <BsTextarea size={50} fill="gray" />
            <span>
              {area} m<sup>2</sup>{" "}
            </span>
          </div>

          <div className="flex flex-col items-center justify-center">
            <BiSolidLandscape size={50} fill="gray" />
            {landscape}
          </div>
        </div>

        <div className="py-10 px-20">
          <h1 className="text-2xl font-bold mb-4"> {t("Description")} </h1>
          <p className="text-gray-500"> {description} </p>
        </div>

        <div className="py-10 px-20">
          <h1 className="text-2xl font-bold mb-4 "> {t("room features")} </h1>
          <ul className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 ">
            {roomFeatures.map((feature, index) => (
              <li
                key={index}
                className="flex items-center gap-x-4 text-gray-600 m-4"
              >
                <span> {feature.icon} </span>
                <span> {feature.description} </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* content end */}

      {/* other rooms start */}
      <h1 className="uppercase text-2xl text-center font-bold my-4">
        {t("Have you checked our other rooms?")}
      </h1>
      <RoomCarousel />
      {/* other rooms end */}
    </div>
  );
};

export default SingleRoomItem;
