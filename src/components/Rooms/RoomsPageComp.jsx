"use client";

import img1 from "/public/rooms_banner.jpg";
import RoomsCarousel from "@/components/Rooms/RoomsCarousel";
import Banner from "@/components/Banner";
import { useTranslation } from "react-i18next";

const RoomsPageComp = () => {
  const { t } = useTranslation();

  const linkWay = [
    { href: "/", text: `${t("institutional")}` },
    { href: "/rooms", text: `${t("rooms")}` },
  ];
  return (
    <div>
      <Banner img={img1} title={`${t("rooms")}`} linkWay={linkWay} />
      <RoomsCarousel />
    </div>
  );
};

export default RoomsPageComp;
