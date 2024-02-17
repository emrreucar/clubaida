"use client";

import banner from "/public/photoPage_banner.jpg";

import Banner from "@/components/Banner";

import img1 from "/public/galeri_photo1.jpg";
import img2 from "/public/galeri_photo2.jpg";
import img3 from "/public/galeri_photo3.jpg";
import img4 from "/public/galeri_photo4.jpg";
import img5 from "/public/galeri_photo5.jpg";
import img6 from "/public/galeri_photo6.jpg";

import Image from "next/image";

import { IoMdPhotos } from "react-icons/io";
import Link from "next/link";

import { useTranslation } from "react-i18next";

const PhotoPageComp = () => {
  const { t } = useTranslation();

  const linkWay = [
    { href: "/", text: `${t("home page")}` },
    { href: "/", text: `${t("gallery")}` },
    { href: "/gallery/photo", text: `${t("photoGallery")}` },
  ];

  const images = [
    { id: 1, src: img1, title: `${t("our hotel")}` },
    { id: 2, src: img2, title: `${t("rooms")}` },
    { id: 3, src: img3, title: `${t("eating & drinking")}` },
    { id: 4, src: img4, title: `${t("activities")}` },
    { id: 5, src: img5, title: `${t("Pools")}` },
    { id: 6, src: img6, title: `${t("fitness")}` },
  ];
  return (
    <div>
      <Banner img={banner} title={`${t("photoGallery")}`} linkWay={linkWay} />

      <div className="p-10">
        <h1 className="text-4xl font-semibold text-indigo-500 ml-4">
          {t("photoGallery")}
        </h1>
        {/* large screen start */}
        <section className="hidden lg:block text-gray-600 body-font">
          <div className="container px-5 py-6 mx-auto flex flex-wrap">
            <div className="flex flex-wrap md:-m-2 -m-1">
              <div className="flex flex-wrap w-1/2">
                <div className="relative md:p-2 p-1 w-1/2">
                  <Link href={"/gallery/photo/otelimiz"}>
                    <Image
                      alt="gallery"
                      className="gallery__photo"
                      src={img1}
                    />
                  </Link>
                  <span className="absolute bottom-5 left-8 text-white font-bold text-xl z-50 bg-indigo-500 rounded-md px-3 py-px ">
                    {t("our hotel")}
                  </span>
                  <div className="absolute top-5 right-5 rounded-full bg-white p-3 text-gray-500">
                    <IoMdPhotos size={20} />
                  </div>
                </div>
                <div className="relative md:p-2 p-1 w-1/2">
                  <Link href={"/gallery/photo/odalar"}>
                    <Image
                      alt="gallery"
                      className="gallery__photo"
                      src={img2}
                    />
                  </Link>
                  <span className="absolute bottom-5 left-8 text-white font-bold text-xl z-50 bg-indigo-500 rounded-md px-3 py-px ">
                    {t("rooms")}
                  </span>
                  <div className="absolute top-5 right-5 rounded-full bg-white p-3 text-gray-500">
                    <IoMdPhotos size={20} />
                  </div>
                </div>
                <div className="relative md:p-2 p-1 w-full">
                  <Link href={"/gallery/photo/yeme-icme"}>
                    <Image
                      alt="gallery"
                      className="gallery__photo"
                      src={img3}
                    />
                  </Link>
                  <span className="absolute bottom-5 left-8 text-white font-bold text-xl z-50 bg-indigo-500 rounded-md px-3 py-px ">
                    {t("eating & drinking")}
                  </span>
                  <div className="absolute top-5 right-5 rounded-full bg-white p-3 text-gray-500">
                    <IoMdPhotos size={20} />
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap w-1/2">
                <div className="relative md:p-2 p-1 w-full">
                  <Link href={"/gallery/photo/aktiviteler"}>
                    <Image
                      alt="gallery"
                      className="gallery__photo"
                      src={img4}
                    />
                  </Link>
                  <span className="absolute bottom-5 left-8 text-white font-bold text-xl z-50 bg-indigo-500 rounded-md px-3 py-px ">
                    {t("activities")}
                  </span>
                  <div className="absolute top-5 right-5 rounded-full bg-white p-3 text-gray-500">
                    <IoMdPhotos size={20} />
                  </div>
                </div>
                <div className="relative md:p-2 p-1 w-1/2">
                  <Link href={"/gallery/photo/havuzlar"}>
                    <Image
                      alt="gallery"
                      className="gallery__photo"
                      src={img5}
                    />
                  </Link>
                  <span className="absolute bottom-5 left-8 text-white font-bold text-xl z-50 bg-indigo-500 rounded-md px-3 py-px ">
                    {t("Pools")}
                  </span>
                  <div className="absolute top-5 right-5 rounded-full bg-white p-3 text-gray-500">
                    <IoMdPhotos size={20} />
                  </div>
                </div>
                <div className="relative md:p-2 p-1 w-1/2">
                  <Link href={"/gallery/photo/spor"}>
                    <Image
                      alt="gallery"
                      className="gallery__photo"
                      src={img6}
                    />
                  </Link>
                  <span className="absolute bottom-5 left-8 text-white font-bold text-xl z-50 bg-indigo-500 rounded-md px-3 py-px ">
                    {t("fitness")}
                  </span>
                  <div className="absolute top-5 right-5 rounded-full bg-white p-3 text-gray-500">
                    <IoMdPhotos size={20} />
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
              alt="image"
            />
            <div className="overlay absolute top-0 left-0 bg-black/30 w-full h-full rounded-tl-[40px] rounded-br-[40px] group-hover:scale-105 duration-300"></div>
            <div className="absolute top-5 right-5 rounded-full bg-white p-3 text-gray-500">
              <IoMdPhotos size={20} />
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

export default PhotoPageComp;
