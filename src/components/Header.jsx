"use client";

import { useState, useEffect } from "react";

import { useTranslation } from "react-i18next";

import LanguageChanger from "./LanguageChanger";

import { FaWpforms, FaQq, FaServicestack, FaBath } from "react-icons/fa";
import { CiMenuFries } from "react-icons/ci";
import {
  MdCorporateFare,
  MdOutlineRoundaboutRight,
  MdBedroomParent,
  MdOutlineRoomService,
  MdOutlineFitnessCenter,
  MdAddAPhoto,
  MdConnectWithoutContact,
} from "react-icons/md";
import { IoDocumentText, IoClose } from "react-icons/io5";
import { SiMicrosoftteams } from "react-icons/si";
import { RiCustomerService2Fill } from "react-icons/ri";
import { IoMdRestaurant, IoIosVideocam, IoIosArrowDown } from "react-icons/io";
import { TfiGallery } from "react-icons/tfi";

import Link from "next/link";

import logo from "/public/logo.png";
import Image from "next/image";

// i18nexus pull

const Header = () => {
  const { t } = useTranslation();
  const [openMenu, setOpenMenu] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const header = document.querySelector(".sticky-header");
      if (window.scrollY > 0) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }
    });
  }, []);

  return (
    <div id="header" className="sticky-header">
      {!openMenu ? (
        <>
          {/* header bottom start */}
          <div className="w-full flex justify-between items-center">
            {/* logo */}
            <Link href={"/"} className="ml-2">
              <Image alt="image" src={logo} width={100} height={50} />
            </Link>
            {/* hamburger button */}
            <div className="lg:hidden" onClick={() => setOpenMenu(true)}>
              <CiMenuFries size={35} fill="white" className="cursor-pointer" />
            </div>
            {/* menu items start */}
            <div className="lg:block hidden">
              <ul className="demo-dropdown">
                <li className="duration-300">
                  <Link
                    href={"/"}
                    className="!flex !items-center !gap-x-1 uppercase"
                  >
                    {t("institutional")} <IoIosArrowDown />{" "}
                  </Link>
                  <ul>
                    <li>
                      <Link href={"/institutional/about"}> {t("about")}</Link>
                    </li>
                    <li>
                      <Link href={"/institutional/documents"}>
                        {" "}
                        {t("documents")}
                      </Link>
                    </li>
                    <li>
                      <Link href={"/institutional/faq"}>{t("faq")}</Link>
                    </li>
                    <li>
                      <Link href={"/institutional/teams"}> {t("teams")}</Link>
                    </li>
                    <li>
                      <Link href={"/institutional/customersReviews"}>
                        {t("customersReviews")}
                      </Link>
                    </li>
                    <li>
                      <Link href={"/institutional/humanResourcesForm"}>
                        {t("humanResourcesForm")}
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="uppercase duration-300">
                  <Link href={"/rooms"}>{t("rooms")}</Link>
                </li>
                <li className=" duration-300">
                  <Link
                    href={"/"}
                    className="!flex !items-center !gap-x-1 uppercase"
                  >
                    {t("services")} <IoIosArrowDown />{" "}
                  </Link>
                  <ul>
                    <li>
                      <Link href={"/services/roomService"}>
                        {t("roomService")}
                      </Link>
                    </li>
                    <li>
                      <Link href={"/services/restaurant"}>
                        {" "}
                        {t("restaurant")}
                      </Link>
                    </li>
                    <li>
                      <Link href={"/services/hammam"}>
                        {" "}
                        {t("turkishHammam")}
                      </Link>
                    </li>
                    <li>
                      <Link href={"/services/fitness"}> {t("fitness")}</Link>
                    </li>
                  </ul>
                </li>
                <li className="uppercase  duration-300">
                  <Link href={"/events"}>{t("activities")}</Link>
                </li>
                <li className=" duration-300">
                  <Link
                    href={"/"}
                    className="!flex !items-center !gap-x-1 uppercase"
                  >
                    {t("gallery")} <IoIosArrowDown />{" "}
                  </Link>
                  <ul>
                    <li>
                      <Link href={"/gallery/photo"}>{t("photoGallery")}</Link>
                    </li>
                    <li>
                      <Link href={"/gallery/video"}> {t("videoGallery")}</Link>
                    </li>
                  </ul>
                </li>
                <li className="uppercase  duration-300">
                  <Link href={"/contact"}>{t("contact")}</Link>
                </li>

                {/* language start */}
                <LanguageChanger />
                {/* language end */}
              </ul>
            </div>
            {/* menu items end */}
          </div>
          {/* header bottom end */}
        </>
      ) : (
        <>
          {/* responsive menu start */}
          <div className="fixed text-white top-0 left-0 w-full h-full bg-[#0e1222] z-[99] overflow-auto">
            {/* header start */}
            <div className="flex justify-between items-center py-4 px-8">
              <Link href={"/"}>
                <Image alt="image" src={logo} width={100} height={50} />
              </Link>
              <LanguageChanger />
              <IoClose
                onClick={() => setOpenMenu(false)}
                size={30}
                fill="white"
                className="cursor-pointer"
              />
            </div>
            {/* header end */}

            {/* line start */}
            <div className="border-b border-gray-500/70 mb-8"></div>
            {/* line end */}

            <span className="px-10 text-[13px] font-bold">
              {" "}
              0(252) 417 66 30{" "}
            </span>

            {/* menu start */}
            <ul className={`flex flex-col gap-2 mt-8 px-8`}>
              {/* menu item start */}
              <li>
                <details className="group">
                  <summary className="flex items-center justify-between gap-2 p-2 font-medium hover:cursor-pointer">
                    <span className="flex items-center gap-2">
                      <MdCorporateFare size={30} />
                      <span> {t("institutional")} </span>
                    </span>
                    <svg
                      className="w-5 h-5 text-gray-500 transition group-open:rotate-90"
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                      ></path>
                    </svg>
                  </summary>

                  <article className="px-4 pb-4">
                    <ul className="flex flex-col gap-4 pl-2 mt-4">
                      <li className="flex items-center gap-2">
                        <MdOutlineRoundaboutRight size={20} />
                        <Link
                          onClick={() => setOpenMenu(false)}
                          href={"/institutional/about"}
                        >
                          {t("about")}
                        </Link>
                      </li>

                      <li className="flex gap-2">
                        <IoDocumentText size={20} />

                        <Link
                          onClick={() => setOpenMenu(false)}
                          href={"/institutional/documents"}
                        >
                          {t("documents")}
                        </Link>
                      </li>

                      <li className="flex items-center gap-2">
                        <FaQq size={20} />
                        <Link
                          onClick={() => setOpenMenu(false)}
                          href={"/institutional/faq"}
                        >
                          {t("faq")}
                        </Link>
                      </li>

                      <li className="flex items-center gap-2">
                        <SiMicrosoftteams size={20} />
                        <Link
                          onClick={() => setOpenMenu(false)}
                          href={"/institutional/teams"}
                        >
                          {t("teams")}
                        </Link>
                      </li>

                      <li className="flex items-center gap-2">
                        <RiCustomerService2Fill size={20} />
                        <Link
                          onClick={() => setOpenMenu(false)}
                          href={"/institutional/customersReviews"}
                        >
                          {t("customersReviews")}
                        </Link>
                      </li>
                      <li className="flex items-center gap-2">
                        <FaWpforms size={20} />
                        <Link
                          onClick={() => setOpenMenu(false)}
                          href={"/institutional/humanResourcesForm"}
                        >
                          {t("humanResourcesForm")}
                        </Link>
                      </li>
                    </ul>
                  </article>
                </details>
              </li>
              {/* menu item end */}

              {/* menu item start */}
              <li>
                <details className="group">
                  <summary className="flex items-center justify-between gap-2 p-2 font-medium hover:cursor-pointer">
                    <span className="flex items-center gap-2">
                      <MdBedroomParent size={30} />
                      <Link onClick={() => setOpenMenu(false)} href={"/rooms"}>
                        {t("rooms")}
                      </Link>
                    </span>
                  </summary>
                </details>
              </li>
              {/* menu item end */}

              {/* menu item start */}
              <li>
                <details className="group">
                  <summary className="flex items-center justify-between gap-2 p-2 font-medium hover:cursor-pointer">
                    <span className="flex items-center gap-2">
                      <FaServicestack size={30} />
                      <span>{t("services")}</span>
                    </span>
                    <svg
                      className="w-5 h-5 text-gray-500 transition group-open:rotate-90"
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                      ></path>
                    </svg>
                  </summary>

                  <article className="px-4 pb-4">
                    <ul className="flex flex-col gap-4 pl-2 mt-4">
                      <li className="flex items-center gap-2">
                        <MdOutlineRoomService size={20} />
                        <Link
                          onClick={() => setOpenMenu(false)}
                          href="/services/roomService"
                        >
                          {t("roomService")}
                        </Link>
                      </li>

                      <li className="flex items-center gap-2">
                        <IoMdRestaurant size={20} />
                        <Link
                          onClick={() => setOpenMenu(false)}
                          href="/services/restaurant"
                        >
                          {t("restaurant")}
                        </Link>
                      </li>

                      <li className="flex items-center gap-2">
                        <FaBath size={20} />
                        <Link
                          onClick={() => setOpenMenu(false)}
                          href="/services/hammam"
                        >
                          {t("turkishHammam")}
                        </Link>
                      </li>

                      <li className="flex items-center gap-2">
                        <MdOutlineFitnessCenter size={20} />
                        <Link
                          onClick={() => setOpenMenu(false)}
                          href="/services/fitness"
                        >
                          {t("fitness")}
                        </Link>
                      </li>
                    </ul>
                  </article>
                </details>
              </li>
              {/* menu item end */}

              {/* menu item start */}
              <li>
                <details className="group">
                  <summary className="flex items-center justify-between gap-2 p-2 font-medium hover:cursor-pointer">
                    <span className="flex items-center gap-2">
                      <MdBedroomParent size={30} />
                      <Link onClick={() => setOpenMenu(false)} href={"/events"}>
                        {t("activities")}
                      </Link>
                    </span>
                  </summary>
                </details>
              </li>
              {/* menu item end */}

              {/* menu item start */}
              <li>
                <details className="group">
                  <summary className="flex items-center justify-between gap-2 p-2 font-medium hover:cursor-pointer">
                    <span className="flex items-center gap-2">
                      <TfiGallery size={30} />
                      <span>{t("gallery")}</span>
                    </span>
                    <svg
                      className="w-5 h-5 text-gray-500 transition group-open:rotate-90"
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                      ></path>
                    </svg>
                  </summary>

                  <article className="px-4 pb-4">
                    <ul className="flex flex-col gap-4 pl-2 mt-4">
                      <li className="flex items-center gap-2">
                        <MdAddAPhoto size={20} />
                        <Link
                          onClick={() => setOpenMenu(false)}
                          href={"/gallery/photo"}
                        >
                          {t("photoGallery")}
                        </Link>
                      </li>

                      <li className="flex items-center gap-2">
                        <IoIosVideocam size={20} />
                        <Link
                          onClick={() => setOpenMenu(false)}
                          href={"/gallery/video"}
                        >
                          {t("videoGallery")}
                        </Link>
                      </li>
                    </ul>
                  </article>
                </details>
              </li>
              {/* menu item end */}

              {/* menu item start */}
              <li>
                <details className="group">
                  <summary className="flex items-center justify-between gap-2 p-2 font-medium hover:cursor-pointer">
                    <span className="flex items-center gap-2">
                      <MdConnectWithoutContact size={30} />
                      <Link
                        onClick={() => setOpenMenu(false)}
                        href={"/contact"}
                      >
                        {t("contact")}
                      </Link>
                    </span>
                  </summary>
                </details>
              </li>
              {/* menu item end */}
            </ul>
            {/* menu end */}

            <footer className="px-10 mt-20 text-[12px] flex flex-col">
              <span className="text-gray-400">
                Siteler, 212. Sk. No: 11, 48700 Marmaris/Muğla
              </span>

              <Link
                onClick={() => setOpenMenu(false)}
                className="mt-6 text-red-500 underline"
                href={"/"}
              >
                {t("map")}
              </Link>

              <span className="mt-6 text-gray-400">info@clubaida.com.tr</span>
            </footer>
          </div>
          {/* responsive menu end */}
        </>
      )}
    </div>
  );
};

export default Header;
