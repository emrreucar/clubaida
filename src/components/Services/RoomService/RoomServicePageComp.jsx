"use client";

import Image from "next/image";
import img1 from "/public/roomService.jpg";
import Banner from "@/components/Banner";
import Preference from "@/components/About/Preference";
import Trailer from "@/components/About/Trailer";
import ReviewsCarousel from "@/components/CustomersReviews/ReviewsCarousel";
import { useTranslation } from "react-i18next";

const RoomServicePageComp = () => {
  const { t } = useTranslation();

  const linkWay = [
    { href: "/", text: `${t("institutional")}` },
    { href: "/", text: `${t("services")}` },
    { href: "/services/roomService", text: `${t("roomService")}` },
  ];

  return (
    <div>
      <Banner img={img1} title={`${"roomService"}`} linkWay={linkWay} />

      <div className="lg:flex lg:mt-12 lg:px-10 ">
        <div className="p-8 lg:flex-1 lg:flex lg:flex-col lg:items-start lg:justify-center ">
          <h1 className="text-2xl font-semibold"> {t("roomService")} </h1>
          <p className="text-gray-400 mt-2">{t("room_service_desc")}</p>
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

export default RoomServicePageComp;
