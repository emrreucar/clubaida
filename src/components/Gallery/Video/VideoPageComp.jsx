"use client";

import banner from "/public/videoPage_banner.jpg";

import Banner from "@/components/Banner";

import img1 from "/public/galeri_video1.jpg";
import img2 from "/public/galeri_video2.jpg";
import img3 from "/public/galeri_video3.jpg";
import img4 from "/public/galeri_video4.jpg";
import img5 from "/public/galeri_video5.jpg";
import img6 from "/public/galeri_video6.jpg";

import Image from "next/image";

import { FaYoutube } from "react-icons/fa";
import Link from "next/link";
import { useTranslation } from "react-i18next";

const VideoPage = () => {
  const { t } = useTranslation();

  const linkWay = [
    { href: "/", text: `${t("home page")}` },
    { href: "/", text: `${t("gallery")}` },
    { href: "/gallery/video", text: `${t("videoGallery")}` },
  ];

  const images = [
    { id: 1, src: img1, title: `${t("standard room")}` },
    { id: 2, src: img2, title: `${t("deluxe room")}` },
    { id: 3, src: img3, title: `${t("royal suite")}` },
    { id: 4, src: img4, title: `${t("honeymoon room")}` },
    { id: 5, src: img5, title: `${t("trailer")}` },
    { id: 6, src: img6, title: `${t("disabledHotelRoom")}` },
  ];
  return (
    <div>
      <Banner img={banner} title={`${t("videoGallery")}`} linkWay={linkWay} />

      <div className="p-10">
        <h1 className="text-4xl font-semibold text-indigo-500 ml-4">
          {t("videoGallery")}
        </h1>
        {/* large screen start */}
        <section className="hidden lg:block text-gray-600 body-font">
          <div className="container px-5 py-6 mx-auto flex flex-wrap">
            <div className="flex flex-wrap md:-m-2 -m-1">
              <div className="flex flex-wrap w-1/2">
                <div className="relative md:p-2 p-1 w-1/2">
                  <Link href={"/gallery/video/standart-oda"}>
                    <Image
                      alt="gallery"
                      className="gallery__video"
                      src={img1}
                    />
                  </Link>
                  <span className="absolute bottom-5 left-8 text-white font-bold text-xl z-50 bg-indigo-500 rounded-md px-3 py-px ">
                    {t("standard room")}
                  </span>
                  <div className="absolute top-5 right-5 rounded-full bg-white p-3 text-gray-500">
                    <FaYoutube size={20} />
                  </div>
                </div>
                <div className="relative md:p-2 p-1 w-1/2">
                  <Link href={"/gallery/video/deluxe-oda"}>
                    <Image
                      alt="gallery"
                      className="gallery__video"
                      src={img2}
                    />
                  </Link>
                  <span className="absolute bottom-5 left-8 text-white font-bold text-xl z-50 bg-indigo-500 rounded-md px-3 py-px ">
                    {t("deluxe room")}
                  </span>
                  <div className="absolute top-5 right-5 rounded-full bg-white p-3 text-gray-500">
                    <FaYoutube size={20} />
                  </div>
                </div>

                <div className="relative md:p-2 p-1 w-full">
                  <Link href={"/gallery/video/kral-dairesi"}>
                    <Image
                      alt="gallery"
                      className="gallery__video"
                      src={img3}
                    />
                  </Link>
                  <span className="absolute bottom-5 left-8 text-white font-bold text-xl z-50 bg-indigo-500 rounded-md px-3 py-px ">
                    {t("royal suite")}
                  </span>
                  <div className="absolute top-5 right-5 rounded-full bg-white p-3 text-gray-500">
                    <FaYoutube size={20} />
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap w-1/2">
                <div className="relative md:p-2 p-1 w-full">
                  <Link href={"/gallery/video/balayi-odasi"}>
                    <Image
                      alt="gallery"
                      className="gallery__video"
                      src={img4}
                    />
                  </Link>
                  <span className="absolute bottom-5 left-8 text-white font-bold text-xl z-50 bg-indigo-500 rounded-md px-3 py-px ">
                    {t("honeymoon room")}
                  </span>
                  <div className="absolute top-5 right-5 rounded-full bg-white p-3 text-gray-500">
                    <FaYoutube size={20} />
                  </div>
                </div>

                <div className="relative md:p-2 p-1 w-1/2">
                  <Link href={"/gallery/video/tanitim-videosu"}>
                    <Image
                      alt="gallery"
                      className="gallery__video"
                      src={img5}
                    />
                  </Link>
                  <span className="absolute bottom-5 left-8 text-white font-bold text-xl z-50 bg-indigo-500 rounded-md px-3 py-px ">
                    {t("trailer")}
                  </span>
                  <div className="absolute top-5 right-5 rounded-full bg-white p-3 text-gray-500">
                    <FaYoutube size={20} />
                  </div>
                </div>
                <div className="relative md:p-2 p-1 w-1/2">
                  <Link href={"/gallery/video/engelli-odasi"}>
                    <Image
                      alt="gallery"
                      className="gallery__video"
                      src={img6}
                    />
                  </Link>
                  <span className="absolute bottom-5 left-8 text-white font-bold text-xl z-50 bg-indigo-500 rounded-md px-3 py-px ">
                    {t("disabledHotelRoom")}
                  </span>
                  <div className="absolute top-5 right-5 rounded-full bg-white p-3 text-gray-500">
                    <FaYoutube size={20} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* large screen end */}

        {/* mobile start */}
        {images.map((img) => (
          <div className="lg:hidden group relative w-full lg:w-1/2 cursor-pointer mt-6 ">
            <Image
              key={img.id}
              src={img.src}
              height={400}
              className="rounded-tl-[40px] rounded-br-[40px] group-hover:scale-105 duration-300"
            />
            <div className="overlay absolute top-0 left-0 bg-black/30 w-full h-full rounded-tl-[40px] rounded-br-[40px] group-hover:scale-105 duration-300"></div>
            <div className="absolute top-5 right-5 rounded-full bg-white p-3 text-gray-500">
              <FaYoutube size={20} />
            </div>
            <span className="absolute bottom-5 left-10 text-3xl font-bold text-white">
              {" "}
              {img.title}{" "}
            </span>
          </div>
        ))}
        {/* mobile end */}
      </div>
    </div>
  );
};

export default VideoPage;
