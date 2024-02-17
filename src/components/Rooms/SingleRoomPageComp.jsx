"use client";

import Banner from "@/components/Banner";
import banner from "/public/singleRoom_banner.jpg";
import SingleRoomItem from "@/components/Rooms/SingleRoomItem";

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

import {
  FaHotTub,
  FaWifi,
  FaTv,
  FaHamburger,
  FaToilet,
  FaCoffee,
  FaPhone,
} from "react-icons/fa";
import {
  MdHearingDisabled,
  MdOutlineWifiProtectedSetup,
  MdBathtub,
} from "react-icons/md";
import { TbAirConditioning } from "react-icons/tb";
import { IoMdWine } from "react-icons/io";
import { RiLuggageDepositFill } from "react-icons/ri";
import { useTranslation } from "react-i18next";

const SingleRoomPageComp = ({ slug }) => {
  const images1 = [img1, img2, img3, img4, img5];
  const images2 = [img6, img7, img8, img9, img10];
  const images3 = [img11, img12, img13, img14];

  const { t } = useTranslation();

  const linkWay = [
    { href: "/", text: `${t("institutional")}` },
    { href: "/rooms", text: `${t("rooms")}` },
    { href: `/rooms/${slug}`, text: `${t("room detail")}` },
  ];

  return (
    <div>
      <Banner img={banner} title={`${t("room detail")}`} linkWay={linkWay} />
      {slug === "engelli-otel-odasi" ? (
        <SingleRoomItem
          title={`${t("disabledHotelRoom")}`}
          images={images1}
          description={`${t("disabled_hotel_room_content")}`}
          bedCount={`1 ${t("Bed")}`}
          person="2"
          area="60"
          landscape={`${t("nature view")}`}
          roomFeatures={[
            { icon: <FaWifi />, description: "WiFi" },
            { icon: <FaHotTub />, description: `${t("Jacuzzi")}` },
            { icon: <FaTv />, description: "TV" },
            {
              icon: <FaHamburger />,
              description: `${t("24 hour room service")}`,
            },
            {
              icon: <FaToilet />,
              description: `${t("double bathroom and wc")}`,
            },
            {
              icon: <MdHearingDisabled />,
              description: `${t("special soundproof designs")}`,
            },
            { icon: <FaCoffee />, description: `${t("tea and coffee maker")}` },
            {
              icon: <TbAirConditioning />,
              description: `${t("air conditioning")}`,
            },
            { icon: <IoMdWine />, description: "Mini Bar" },
            { icon: <FaPhone />, description: `${t("Phone")}` },
            {
              icon: <MdOutlineWifiProtectedSetup />,
              description: `${t("hair dryer")}`,
            },
            {
              icon: <RiLuggageDepositFill />,
              description: `${t("Electronic Safe Deposit Box")}`,
            },
            { icon: <MdBathtub />, description: `${t("bathtub")}` },
          ]}
        />
      ) : slug === "1-1-apart-otel-odasi" ? (
        <SingleRoomItem
          title={`${t("1+1 apart hotel room")}`}
          images={images2}
          description={`${t("1+1_hotel_room_content")}`}
          bedCount={`2 ${t("Bed")}`}
          person="2"
          area="60"
          landscape={`${t("nature view")}`}
          roomFeatures={[
            { icon: <FaWifi />, description: "WiFi" },
            { icon: <FaHotTub />, description: `${t("Jacuzzi")}` },
            { icon: <FaTv />, description: "TV" },
            {
              icon: <FaHamburger />,
              description: `${t("24 hour room service")}`,
            },
            {
              icon: <FaToilet />,
              description: `${t("double bathroom and wc")}`,
            },
            {
              icon: <MdHearingDisabled />,
              description: `${t("special soundproof designs")}`,
            },
            { icon: <FaCoffee />, description: `${t("tea and coffee maker")}` },
            {
              icon: <TbAirConditioning />,
              description: `${t("air conditioning")}`,
            },
            { icon: <IoMdWine />, description: "Mini Bar" },
            { icon: <FaPhone />, description: `${t("Phone")}` },
            {
              icon: <MdOutlineWifiProtectedSetup />,
              description: `${t("hair dryer")}`,
            },
            {
              icon: <RiLuggageDepositFill />,
              description: `${t("Electronic Safe Deposit Box")}`,
            },
            { icon: <MdBathtub />, description: `${t("bathtub")}` },
          ]}
        />
      ) : slug === "2-1-apart-otel-odasi" ? (
        <SingleRoomItem
          title={`${t("2+1 apart hotel room")}`}
          images={images3}
          description={`${t("2+1_hotel_room_content")}`}
          bedCount={`3 ${t("Bed")}`}
          person="3"
          area="60"
          landscape={`${t("nature view")}`}
          roomFeatures={[
            { icon: <FaWifi />, description: "WiFi" },
            { icon: <FaHotTub />, description: `${t("Jacuzzi")}` },
            { icon: <FaTv />, description: "TV" },
            {
              icon: <FaHamburger />,
              description: `${t("24 hour room service")}`,
            },
            {
              icon: <FaToilet />,
              description: `${t("double bathroom and wc")}`,
            },
            {
              icon: <MdHearingDisabled />,
              description: `${t("special soundproof designs")}`,
            },
            { icon: <FaCoffee />, description: `${t("tea and coffee maker")}` },
            {
              icon: <TbAirConditioning />,
              description: `${t("air conditioning")}`,
            },
            { icon: <IoMdWine />, description: "Mini Bar" },
            { icon: <FaPhone />, description: `${t("Phone")}` },
            {
              icon: <MdOutlineWifiProtectedSetup />,
              description: `${t("hair dryer")}`,
            },
            {
              icon: <RiLuggageDepositFill />,
              description: `${t("Electronic Safe Deposit Box")}`,
            },
            { icon: <MdBathtub />, description: `${t("bathtub")}` },
          ]}
        />
      ) : (
        <></>
      )}
    </div>
  );
};

export default SingleRoomPageComp;
