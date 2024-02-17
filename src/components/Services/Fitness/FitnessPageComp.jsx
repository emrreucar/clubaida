"use client";

import Image from "next/image";
import img1 from "/public/fitness.jpg";
import Banner from "@/components/Banner";
import Preference from "@/components/About/Preference";
import Trailer from "@/components/About/Trailer";
import ReviewsCarousel from "@/components/CustomersReviews/ReviewsCarousel";
import { useTranslation } from "react-i18next";

const FitnessPageComp = () => {
  const { t } = useTranslation();

  const linkWay = [
    { href: "/", text: `${t("institutional")}` },
    { href: "/", text: `${t("services")}` },
    { href: "/services/fitness", text: `${t("fitness")}` },
  ];

  return (
    <div>
      <Banner img={img1} title={`${"fitness"}`} linkWay={linkWay} />

      <div className="lg:flex lg:mt-12 lg:px-10 ">
        <div className="p-8 lg:flex-1 lg:flex lg:flex-col lg:items-start lg:justify-center ">
          <h1 className="text-2xl font-semibold"> {t("fitness")} </h1>
          <p className="text-gray-400 mt-2">{t("fitness_desc")}</p>
        </div>

        <div className="relative w-full lg:flex-1 ">
          <Image
            src={img1}
            alt="image"
            className="rounded-tl-[50px] rounded-br-[50px] "
          />
        </div>
      </div>

      <Preference />
      <Trailer />
      <ReviewsCarousel />
    </div>
  );
};

export default FitnessPageComp;
