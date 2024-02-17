"use client";

import React, { useState } from "react";
import { IoPlayCircle } from "react-icons/io5";
import VideoModal from "../../components/About/VideoModal";
import img2 from "/public/trailer_banner.jpg";

import Image from "next/image";
import { useTranslation } from "react-i18next";

const Trailer = () => {
  const { t } = useTranslation();

  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };
  return (
    <div>
      <div className="relative w-full h-[500px] ">
        <Image alt="image" src={img2} fill />
        <div className="absolute top-0 left-0 h-full w-full bg-black/40"></div>

        <div className="absolute top-1/2 left-1/2 transfrom -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center w-full ">
          <span className="text-3xl text-white font-bold uppercase">
            {" "}
            {t("trailer")}{" "}
          </span>
          <span className="text-white">LUXURY HOTEL & BEST RESORT</span>
          <IoPlayCircle
            onClick={openModal}
            size={40}
            fill="white"
            className="cursor-pointer hover:text-black mt-3"
          />
        </div>
      </div>
      {isOpen && <VideoModal onClose={closeModal} />}
    </div>
  );
};

export default Trailer;
