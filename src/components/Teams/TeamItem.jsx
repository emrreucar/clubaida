import React from "react";

import Image from "next/image";

import { FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const TeamItem = ({ img, name, title }) => {
  return (
    <div className="p-10 mt-20">
      <div className="group border-[3px] border-black px-5">
        <div className="relative w-full h-[450px] transform -translate-y-10 group-hover:-translate-y-20 duration-300 z-50">
          <Image alt="image" src={img} fill />
        </div>
        <div className="relative bottom-[70px] flex items-center justify-center gap-x-6 group-hover:translate-y-5 duration-300 ">
          <FaInstagram size={25} className="cursor-pointer" />
          <FaXTwitter size={25} className="cursor-pointer" />
          <FaLinkedin size={25} className="cursor-pointer" />
          <FaFacebook size={25} className="cursor-pointer" />
        </div>
      </div>

      <div className="mt-3">
        <span className="text-center block text-2xl"> {name} </span>
        <span className="text-center block text-lg text-gray-400">
          {" "}
          {title}{" "}
        </span>
      </div>
    </div>
  );
};

export default TeamItem;
