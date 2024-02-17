"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useTranslation } from "react-i18next";

const Banner = ({ title, img, linkWay }) => {
  const { t } = useTranslation();

  return (
    <div className="relative w-full h-[400px]">
      <Image alt="image" src={img} fill className="object-cover" />
      <div className="overlay absolute top-0 left-0 w-full h-full bg-black/50 "></div>
      <div className="absolute top-1/2 left-1/2 transfrom -translate-x-1/2 -translate-y-1/2 flex items-center justify-center flex-col w-full">
        <p className="text-white text-3xl font-bold text-center">
          {" "}
          {t(`${title}`)}{" "}
        </p>
        <small className="text-white mt-3 text-center text-[12px]">
          {linkWay.map((link, index) => (
            <React.Fragment key={index}>
              <Link href={link.href}> {link.text} </Link>
              {index !== linkWay.length - 1 && " / "}
            </React.Fragment>
          ))}
        </small>
      </div>
    </div>
  );
};

export default Banner;
