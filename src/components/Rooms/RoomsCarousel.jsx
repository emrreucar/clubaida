"use client";

import img1 from "/public/rooms_carousel_img1.jpg";
import img2 from "/public/rooms_carousel_img2.jpg";
import img3 from "/public/rooms_carousel_img3.jpg";
import img4 from "/public/rooms_carousel_img4.jpg";
import img5 from "/public/rooms_carousel_img5.jpg";
import img6 from "/public/rooms_carousel_img6.jpg";
import img7 from "/public/rooms_carousel_img7.jpg";
import img8 from "/public/rooms_carousel_img8.jpg";
import img9 from "/public/rooms_carousel_img9.jpg";
import img10 from "/public/rooms_carousel_img10.jpg";
import img11 from "/public/rooms_carousel_img11.jpg";
import img12 from "/public/rooms_carousel_img12.jpg";
import img13 from "/public/rooms_carousel_img13.jpg";
import img14 from "/public/rooms_carousel_img14.jpg";

import RoomsCarouselItem from "./RoomsCarouselItem";
import { useTranslation } from "react-i18next";

const images1 = [img1, img2, img3, img4, img5];
const images2 = [img6, img7, img8, img9, img10];
const images3 = [img11, img12, img13, img14];

const RoomsCarousel = () => {
  const { t } = useTranslation();

  return (
    <div className="p-10 bg-gray-200 lg:grid lg:grid-cols-3 lg:gap-x-10 ">
      <RoomsCarouselItem
        images={images1}
        price={`1000₺ / ${t("perNight")}`}
        title={`${t("disabledHotelRoom")}`}
        person="1"
        area="60"
        description={`${t("disabled_hotel_room_content")}`}
        href="/rooms/engelli-otel-odasi"
      />
      <RoomsCarouselItem
        images={images2}
        price={`1500₺ / ${t("perNight")}`}
        title={`${t("1+1 apart hotel room")}`}
        person="2"
        area="45"
        description={`${t("1+1_hotel_room_content")}`}
        href="/rooms/1-1-apart-otel-odasi"
      />
      <RoomsCarouselItem
        images={images3}
        price={`2000₺ / ${t("perNight")}`}
        title={`${t("2+1 apart hotel room")}`}
        person="3"
        area="50"
        description={`${t("1+1_hotel_room_content")}`}
        href="/rooms/2-1-apart-otel-odasi"
      />
    </div>
  );
};

export default RoomsCarousel;
