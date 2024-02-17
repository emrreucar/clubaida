"use client";

import React from "react";
import banner from "/public/video_banner.jpg";

import Banner from "@/components/Banner";
import { useTranslation } from "react-i18next";

const SingleVideoPage = ({ slug }) => {

  const { t } = useTranslation();

  const linkWay = [
    { href: "/", text: `${t("home page")}` },
    { href: "/", text: `${t("gallery")}` },
    { href: "/gallery/video", text: `${t("videoGallery")}` },
  ];
  return (
    <div>
      <Banner img={banner} title={`${t("videoGallery")}`} linkWay={linkWay} />
    </div>
  );
};

export default SingleVideoPage;
