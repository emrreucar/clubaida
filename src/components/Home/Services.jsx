"use client";

import Image from "next/image";
import Link from "next/link";

import { FaLongArrowAltRight } from "react-icons/fa";

import img1 from "/public/services_img1.png";
import img2 from "/public/services_img2.jpg";
import img3 from "/public/services_img3.png";
import img4 from "/public/services_img4.jpg";
import { useTranslation } from "react-i18next";

const Services = () => {
  const { t } = useTranslation();

  return (
    <div className="max-w-5xl mx-auto">
      <h1 className="text-center text-4xl my-12 uppercase">
        {" "}
        {t("services")}{" "}
      </h1>
      <div className="service__item__container lg:flex lg:flex-col ">
        {/* service item start */}
        <div className="services__cart__item">
          <div className="lg:p-10 lg:flex lg:flex-col lg:items-start lg:justify-center lg:flex-[2] ">
            <h1 className="text-indigo-700 capitalize font-semibold">
              {t("room_service")}
            </h1>
            <p className="mt-2 text-gray-600 ">{t("room_service_desc")}</p>

            <Link
              href={"/"}
              className="w-[fit-content] text-white bg-indigo-500 px-4 py-1 cursor-pointer duration-300 rounded-md flex items-center gap-x-2 hover:bg-indigo-800 mt-3 mb-6"
            >
              {t("review")} <FaLongArrowAltRight />
            </Link>
          </div>

          <div className="relative w-full h-[250px] lg:mr-6 lg:my-auto lg:flex-1">
            <Image alt="image" src={img1} fill className="rounded-2xl" />
          </div>
        </div>
        {/* service item end */}

        {/* service item start */}
        <div className="services__cart__item">
          <div className="relative w-full h-[250px] lg:my-auto lg:ml-6 lg:flex-1">
            <Image alt="image" src={img2} fill className="rounded-2xl" />
          </div>
          <div className="lg:p-10 lg:flex lg:flex-col lg:items-start lg:justify-center lg:flex-[2]">
            <h1 className="text-indigo-700 capitalize font-semibold mt-6">
              {t("restaurant")}
            </h1>
            <p className="mt-2 text-gray-600 ">{t("restaurant_desc")}</p>

            <Link
              href={"/"}
              className="w-[fit-content] text-white bg-indigo-500 px-4 py-1 cursor-pointer duration-300 rounded-md flex items-center gap-x-2 hover:bg-indigo-800 mt-3"
            >
              {t("review")} <FaLongArrowAltRight />
            </Link>
          </div>
        </div>
        {/* service item end */}

        {/* service item start */}
        <div className="services__cart__item">
          <div className="lg:p-10 lg:flex lg:flex-col lg:items-start lg:justify-center lg:flex-[2]">
            <h1 className="text-indigo-700 capitalize font-semibold">
              {t("turkishHammam")}
            </h1>
            <p className="mt-2 text-gray-600 ">{t("hammam_desc")}</p>

            <Link
              href={"/"}
              className="w-[fit-content] text-white bg-indigo-500 px-4 py-1 cursor-pointer duration-300 rounded-md flex items-center gap-x-2 hover:bg-indigo-800 mt-3 mb-6"
            >
              {t("review")} <FaLongArrowAltRight />
            </Link>
          </div>

          <div className="relative w-full h-[250px] lg:my-auto lg:mr-6 lg:flex-1">
            <Image alt="image" src={img3} fill className="rounded-2xl" />
          </div>
        </div>
        {/* service item end */}

        {/* service item start */}
        <div className="services__cart__item">
          <div className="relative w-full h-[250px] lg:my-auto lg:ml-6 lg:flex-1">
            <Image alt="image" src={img4} fill className="rounded-2xl" />
          </div>
          <div className="lg:p-10 lg:flex lg:flex-col lg:items-start lg:justify-center lg:flex-[1.5]">
            <h1 className="text-indigo-700 capitalize font-semibold mt-6">
              {t("fitness")}
            </h1>
            <p className="mt-2 text-gray-600 ">{t("fitness_desc")}</p>

            <Link
              href={"/"}
              className="w-[fit-content] text-white bg-indigo-500 px-4 py-1 cursor-pointer duration-300 rounded-md flex items-center gap-x-2 hover:bg-indigo-800 mt-3"
            >
              {t("review")} <FaLongArrowAltRight />
            </Link>
          </div>
        </div>
        {/* service item end */}
      </div>
    </div>
  );
};

export default Services;
