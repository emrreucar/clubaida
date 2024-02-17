"use client";

import Banner from "@/components/Banner";
import banner from "/public/photo_banner.jpg";
import Link from "next/link";

import otel1 from "/public/otelimiz1.jpg";
import otel2 from "/public/otelimiz2.png";
import otel3 from "/public/otelimiz3.jpg";
import otel4 from "/public/otelimiz4.png";

import room1 from "/public/rooms_carousel_img1.jpg";
import room2 from "/public/rooms_carousel_img2.jpg";
import room3 from "/public/rooms_carousel_img3.jpg";
import room4 from "/public/rooms_carousel_img4.jpg";
import room5 from "/public/rooms_carousel_img5.jpg";
import room6 from "/public/rooms_carousel_img6.jpg";

import act1 from "/public/aktivite1.jpg";
import act2 from "/public/aktivite2.jpg";
import act3 from "/public/aktivite3.jpg";
import act4 from "/public/aktivite4.jpg";
import act5 from "/public/aktivite5.jpg";

import y1 from "/public/yemeicme1.jpg";
import y2 from "/public/yemeicme2.jpg";
import y3 from "/public/yemeicme3.webp";
import y4 from "/public/yemeicme4.jpg";

import h1 from "/public/havuz1.jpg";
import h2 from "/public/havuz2.jpg";
import h3 from "/public/havuz3.jpg";
import h4 from "/public/havuz4.jpg";

import s1 from "/public/spor1.avif";
import s2 from "/public/spor2.avif";
import s3 from "/public/spor3.avif";
import s4 from "/public/spor4.avif";

import Image from "next/image";
import { useTranslation } from "react-i18next";

const SinglePhotoPageComp = ({ slug }) => {
  const { t } = useTranslation();

  const linkWay = [
    { href: "/", text: `${t("home page")}` },
    { href: "/gallery", text: `${t("gallery")}` },
    { href: `/gallery/photo`, text: `${t("photoGallery")}` },
  ];
  return (
    <div>
      <Banner
        img={banner}
        title={`${t("photo_gallery_detail")}`}
        linkWay={linkWay}
      />

      {slug === "otelimiz" ? (
        <div>
          <div className="bg-white dark:bg-gray-800 h-full py-6 sm:py-8 lg:py-12">
            <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
              <div className="mb-4 flex items-center justify-between gap-8 sm:mb-8 md:mb-12">
                <div className="flex items-center gap-12">
                  <h2 className="text-2xl font-bold text-gray-800 lg:text-3xl dark:text-white">
                    {t("our hotel")}
                  </h2>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8">
                <Link
                  href="/"
                  className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80"
                >
                  <Image
                    src={otel1}
                    loading="lazy"
                    alt="Photo by Minh Pham"
                    className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                  />

                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
                </Link>

                <Link
                  href="#"
                  className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80"
                >
                  <Image
                    src={otel2}
                    loading="lazy"
                    alt="Photo by Magicle"
                    className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                  />

                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
                </Link>

                <Link
                  href="#"
                  className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80"
                >
                  <Image
                    src={otel3}
                    loading="lazy"
                    alt="Photo by Martin Sanchez"
                    className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                  />

                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
                </Link>

                <Link
                  href="#"
                  className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80"
                >
                  <Image
                    src={otel4}
                    loading="lazy"
                    alt="Photo by Lorenzo Herrera"
                    className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                  />

                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ) : slug === "odalar" ? (
        <div>
          <div className="bg-white dark:bg-gray-800 h-full py-6 sm:py-8 lg:py-12">
            <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
              <div className="mb-4 flex items-center justify-between gap-8 sm:mb-8 md:mb-12">
                <div className="flex items-center gap-12">
                  <h2 className="text-2xl font-bold text-gray-800 lg:text-3xl dark:text-white">
                    {t("rooms")}
                  </h2>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8">
                <Link
                  href="/"
                  className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80"
                >
                  <Image
                    src={room1}
                    loading="lazy"
                    alt="Photo by Minh Pham"
                    className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                  />

                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
                </Link>

                <Link
                  href="#"
                  className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80"
                >
                  <Image
                    src={room2}
                    loading="lazy"
                    alt="Photo by Magicle"
                    className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                  />

                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
                </Link>

                <Link
                  href="#"
                  className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80"
                >
                  <Image
                    src={room3}
                    loading="lazy"
                    alt="Photo by Martin Sanchez"
                    className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                  />

                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
                </Link>

                <Link
                  href="#"
                  className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80"
                >
                  <Image
                    src={room4}
                    loading="lazy"
                    alt="Photo by Lorenzo Herrera"
                    className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                  />

                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
                </Link>

                <Link
                  href="#"
                  className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80"
                >
                  <Image
                    src={room5}
                    loading="lazy"
                    alt="Photo by Lorenzo Herrera"
                    className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                  />

                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
                </Link>

                <Link
                  href="#"
                  className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80"
                >
                  <Image
                    src={room6}
                    loading="lazy"
                    alt="Photo by Lorenzo Herrera"
                    className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                  />

                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ) : slug === "aktiviteler" ? (
        <div>
          <div className="bg-white dark:bg-gray-800 h-full py-6 sm:py-8 lg:py-12">
            <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
              <div className="mb-4 flex items-center justify-between gap-8 sm:mb-8 md:mb-12">
                <div className="flex items-center gap-12">
                  <h2 className="text-2xl font-bold text-gray-800 lg:text-3xl dark:text-white">
                    {t("activities")}
                  </h2>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8">
                <Link
                  href="/"
                  className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80"
                >
                  <Image
                    src={act1}
                    loading="lazy"
                    alt="Photo by Minh Pham"
                    className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                  />

                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
                </Link>

                <Link
                  href="#"
                  className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80"
                >
                  <Image
                    src={act2}
                    loading="lazy"
                    alt="Photo by Magicle"
                    className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                  />

                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
                </Link>

                <Link
                  href="#"
                  className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80"
                >
                  <Image
                    src={act3}
                    loading="lazy"
                    alt="Photo by Martin Sanchez"
                    className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                  />

                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
                </Link>

                <Link
                  href="#"
                  className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80"
                >
                  <Image
                    src={act4}
                    loading="lazy"
                    alt="Photo by Lorenzo Herrera"
                    className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                  />

                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
                </Link>

                <Link
                  href="#"
                  className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80"
                >
                  <Image
                    src={act5}
                    loading="lazy"
                    alt="Photo by Lorenzo Herrera"
                    className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                  />

                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ) : slug === "yeme-icme" ? (
        <div>
          <div className="bg-white dark:bg-gray-800 h-full py-6 sm:py-8 lg:py-12">
            <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
              <div className="mb-4 flex items-center justify-between gap-8 sm:mb-8 md:mb-12">
                <div className="flex items-center gap-12">
                  <h2 className="text-2xl font-bold text-gray-800 lg:text-3xl dark:text-white">
                    {t("eating & drinking")}
                  </h2>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8">
                <Link
                  href="/"
                  className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80"
                >
                  <Image
                    src={y1}
                    loading="lazy"
                    alt="Photo by Minh Pham"
                    className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                  />

                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
                </Link>

                <Link
                  href="#"
                  className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80"
                >
                  <Image
                    src={y2}
                    loading="lazy"
                    alt="Photo by Magicle"
                    className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                  />

                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
                </Link>

                <Link
                  href="#"
                  className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80"
                >
                  <Image
                    src={y3}
                    loading="lazy"
                    alt="Photo by Martin Sanchez"
                    className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                  />

                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
                </Link>

                <Link
                  href="#"
                  className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80"
                >
                  <Image
                    src={y4}
                    loading="lazy"
                    alt="Photo by Lorenzo Herrera"
                    className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                  />

                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ) : slug === "havuzlar" ? (
        <div>
          <div className="bg-white dark:bg-gray-800 h-full py-6 sm:py-8 lg:py-12">
            <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
              <div className="mb-4 flex items-center justify-between gap-8 sm:mb-8 md:mb-12">
                <div className="flex items-center gap-12">
                  <h2 className="text-2xl font-bold text-gray-800 lg:text-3xl dark:text-white">
                    {t("Pools")}
                  </h2>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8">
                <Link
                  href="/"
                  className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80"
                >
                  <Image
                    src={h1}
                    loading="lazy"
                    alt="Photo by Minh Pham"
                    className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                  />

                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
                </Link>

                <Link
                  href="#"
                  className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80"
                >
                  <Image
                    src={h2}
                    loading="lazy"
                    alt="Photo by Magicle"
                    className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                  />

                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
                </Link>

                <Link
                  href="#"
                  className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80"
                >
                  <Image
                    src={h3}
                    loading="lazy"
                    alt="Photo by Martin Sanchez"
                    className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                  />

                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
                </Link>

                <Link
                  href="#"
                  className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80"
                >
                  <Image
                    src={h4}
                    loading="lazy"
                    alt="Photo by Lorenzo Herrera"
                    className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                  />

                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ) : slug === "spor" ? (
        <div>
          <div className="bg-white dark:bg-gray-800 h-full py-6 sm:py-8 lg:py-12">
            <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
              <div className="mb-4 flex items-center justify-between gap-8 sm:mb-8 md:mb-12">
                <div className="flex items-center gap-12">
                  <h2 className="text-2xl font-bold text-gray-800 lg:text-3xl dark:text-white">
                    {t("fitness")}
                  </h2>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8">
                <Link
                  href="/"
                  className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80"
                >
                  <Image
                    src={s1}
                    loading="lazy"
                    alt="Photo by Minh Pham"
                    className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                  />

                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
                </Link>

                <Link
                  href="#"
                  className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80"
                >
                  <Image
                    src={s2}
                    loading="lazy"
                    alt="Photo by Magicle"
                    className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                  />

                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
                </Link>

                <Link
                  href="#"
                  className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80"
                >
                  <Image
                    src={s3}
                    loading="lazy"
                    alt="Photo by Martin Sanchez"
                    className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                  />

                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
                </Link>

                <Link
                  href="#"
                  className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80"
                >
                  <Image
                    src={s4}
                    loading="lazy"
                    alt="Photo by Lorenzo Herrera"
                    className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                  />

                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default SinglePhotoPageComp;
