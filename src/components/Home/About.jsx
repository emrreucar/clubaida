"use client";

import { MdOutlineArrowRightAlt } from "react-icons/md";
import DotCarousel from "./DotCarousel";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();

  return (
    <div className="px-10 mt-12 lg:flex lg:items-center lg:gap-x-12 lg:mb-12">
      <div className="lg:flex-[2]">
        <h1 className="text-[30px] lg:text-[42px] text-gray-400 uppercase mb-12">
          Club Aida Hotel Marmaris
        </h1>
        <h1 className="text-[40px]"> {t("about")}</h1>
        <p className="text-gray-600 tracking-wide leading-6">
          {t("about_desc")}
        </p>
        <button className="mt-5 bg-[#ff6d5e] hover:bg-[#a43b2f] text-white py-2 px-4 duration-300 rounded-md flex items-center justify-center">
          {t("about")}
          <MdOutlineArrowRightAlt size={25} className="ml-2" />
        </button>
      </div>
      <div className="lg:flex-1">
        <DotCarousel />
      </div>
    </div>
  );
};

export default About;
