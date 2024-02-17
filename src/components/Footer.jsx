"use client";

import Link from "next/link";
import { FaFacebookF, FaXTwitter } from "react-icons/fa6";
import { FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import Image from "next/image";

import logo from "/public/vLogo2.webp";
import logo_aida from "/public/logo.png";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-[#3d3f54] pt-4 ">
      {/* footer top start */}
      <div className="flex flex-col items-center lg:flex-row lg:items-center lg:justify-between w-full max-w-6xl mx-auto ">
        <div className="text-white text-[30px] mb-4 ">
          <Link href={"/"}>
            <Image alt="image" src={logo_aida} />
          </Link>
        </div>

        {/* social icons */}
        <div className="flex gap-x-2">
          <div className="footer__social__icons">
            <FaFacebookF fill="white" />
          </div>
          <div className="footer__social__icons">
            <FaXTwitter fill="white" />
          </div>
          <div className="footer__social__icons">
            <FaInstagram fill="white" />
          </div>
          <div className="footer__social__icons">
            <FaLinkedin fill="white" />
          </div>
          <div className="footer__social__icons">
            <FaYoutube fill="white" />
          </div>
        </div>
      </div>
      <div className="border-b border-gray-500/70 w-full my-4"></div>

      {/* footer top end */}

      {/* footer bottom start */}
      <div className="lg:grid lg:grid-cols-4 max-w-6xl mx-auto ">
        <div className="flex flex-col items-center lg:items-start justify-center lg:justify-start gap-y-2 text-[13px]">
          <span className="text-white font-bold"> 0 (252) 417 66 30 </span>
          <span className="text-gray-400 text-center lg:text-start">
            Siteler, 212 Sk. No: 11, 48700 <br /> Marmaris/Muğla
          </span>
          <Link href={"/"} className="text-[#c42b2a] underline mt-4">
            {t("map")}
          </Link>
          <span className="text-gray-400">info@clubaida.com.tr</span>
        </div>

        <div className="flex flex-col items-center lg:items-start justify-center lg:justify-start mt-10 lg:mt-0 gap-y-3">
          <h1 className="text-white font-bold text-[20px] ">{t("links")}</h1>
          <ul className="flex flex-col items-center lg:items-start justify-center gap-y-2 text-[13px]">
            <li className="footer__links">
              <Link href={"/institutional/about"}>{t("about")}</Link>
            </li>
            <li className="footer__links">
              <Link href={"/services"}>{t("services")}</Link>
            </li>
            <li className="footer__links">
              <Link href={"/events"}>{t("activities")}</Link>
            </li>
            <li className="footer__links">
              <Link href={"/gallery/photo"}>{t("photoGallery")}</Link>
            </li>
            <li className="footer__links">
              <Link href={"/gallery/video"}>{t("videoGallery")}</Link>
            </li>
            <li className="footer__links">
              <Link href={"/contact"}>{t("contact")}</Link>
            </li>
          </ul>
        </div>

        <div className="flex flex-col items-center lg:items-start justify-center lg:justify-start mt-10 lg:mt-0">
          <h1 className="text-white font-bold text-[20px] mb-3 ">
            {t("rooms")}
          </h1>
          <ul className="flex flex-col items-center lg:items-start justify-center gap-y-2 text-[13px]">
            <li className="footer__links">
              <Link href={"/"}>{t("1+1 apart hotel room")}</Link>
            </li>
            <li className="footer__links">
              <Link href={"/"}>{t("2+1 apart hotel room")}</Link>
            </li>
            <li className="footer__links">
              <Link href={"/"}>{t("royal suite")}</Link>
            </li>
          </ul>
        </div>

        <div className="flex flex-col items-center lg:items-start justify-center my-10 lg:my-0">
          <h1 className="text-white font-bold text-[20px] mb-4 ">
            {t("sustainability")}
          </h1>
          <ul className="flex flex-col items-center lg:items-start justify-center gap-y-2 text-[13px] pr-4">
            <li className="footer__links">
              <Link href={"/"}>{t("sustainability reporting")}</Link>
            </li>
            <li className="footer__links">
              <Link href={"/"}>
                {t("environmental protection and waste management policy")}
              </Link>
            </li>
            <li className="footer__links">
              <Link href={"/"}>{t("energy efficiency policy")}</Link>
            </li>
            <li className="footer__links">
              <Link href={"/"}>{t("food management policy")} - AIDA</Link>
            </li>
            <li className="footer__links">
              <Link href={"/"}>
                {t("occupational health and safety policy")}
              </Link>
            </li>
            <li className="footer__links">
              <Link href={"/"}>
                {t("women's rights and gender equality policy")}
              </Link>
            </li>
            <li className="footer__links">
              <Link href={"/"}>{t("child rights policy")}</Link>
            </li>
            <li className="footer__links">
              <Link href={"/"}>{t("water saving policy")}</Link>
            </li>
          </ul>
        </div>
      </div>
      {/* footer bottom end */}

      {/* copyright start */}
      <div className="bg-[#0e1222] text-gray-400 p-5 mt-10 w-full">
        <div className="text-center flex items-center justify-center gap-x-2 ">
          <span>{t("copyright")} 2024.</span>
          <Link href={"https://www.vihobook.com/tr"} target="_blank">
            <Image
              alt="image"
              src={logo}
              width={100}
              height={100}
              className=""
            />{" "}
          </Link>
          <span>{t("all rights reserved")} .</span>
        </div>
      </div>
      {/* copyright end */}
    </footer>
  );
};

export default Footer;
