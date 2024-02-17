"use client";

import Image from "next/image";

import img1 from "/public/about_banner.jpg";
import img3 from "/public/about_img3.jpg";

import ReviewsCarousel from "@/components/CustomersReviews/ReviewsCarousel";
import Banner from "@/components/Banner";
import Preference from "@/components/About/Preference";
import Trailer from "@/components/About/Trailer";
import { useTranslation } from "react-i18next";

const AboutPageComp = () => {
  const { t } = useTranslation();
  const linkWay = [
    { href: "/", text: `${t("home page")}` },
    { href: "/", text: `${t("institutional")}` },
    { href: "/institutional/about", text: `${t("about")}` },
  ];

  return (
    <div>
      <Banner title={`${t("about")}`} img={img1} linkWay={linkWay} />

      <div className="flex flex-col lg:flex-row p-10 lg:gap-x-20 ">
        {/* about content section */}
        <div className="flex-1 mt-12">
          <h1 className="text-4xl text-gray-700 mb-5 ">{t("about")} </h1>

          <div>
            <p>{t("about_desc")}</p>{" "}
          </div>
        </div>

        {/* about image section */}
        <div className="relative w-full mt-10 flex-1 ">
          <Image
            src={img3}
            alt="image"
            fill
            objectFit="cover"
            className="rounded-tl-[50px] rounded-br-[50px]"
          />
        </div>
      </div>

      <Preference />
      <Trailer />
      <ReviewsCarousel />
    </div>
  );
};

export default AboutPageComp;
