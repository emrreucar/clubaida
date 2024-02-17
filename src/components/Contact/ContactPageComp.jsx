"use client";

import img1 from "/public/contact_banner.jpg";
import Banner from "@/components/Banner";

import { FaLocationDot, FaPhone } from "react-icons/fa6";
import { FaFax } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { useTranslation } from "react-i18next";

const ContactPageComp = () => {
  const { t } = useTranslation();

  const linkWay = [
    { href: "/", text: `${t("home page")}` },
    { href: "/contact", text: `${t("contact")}` },
  ];
  return (
    <div>
      <Banner img={img1} title={`${t("contact")}`} linkWay={linkWay} />

      <section className="text-gray-600 body-font relative">
        <div className="absolute inset-0 bg-gray-300">
          <iframe
            width="100%"
            height="100%"
            frameborder="0"
            marginheight="0"
            marginwidth="0"
            title="map"
            scrolling="no"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2684.8100819715323!2d28.24776167272093!3d36.84737937500881!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14bfbe81850b44cb%3A0x1e60049d6e93f2a7!2sClub%20Aida!5e0!3m2!1str!2str!4v1707820138835!5m2!1str!2str"
            // style={{
            //   filter: "grayscale(1) contrast(1.2) opacity(0.6)",
            // }}
          ></iframe>
        </div>
        <div className="container px-5 py-20 mx-auto flex">
          <div className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
            <h2 className="text-gray-900 text-2xl mb-1 font-medium title-font ">
              {t("contact information")}
            </h2>
            <div className="mt-6 flex flex-col gap-y-5 items-start justify-center">
              <div className="flex items-center gap-x-3">
                <FaLocationDot size={25} />
                <span>
                  Siteler, 212. Sk. No: 11, 48700 <br /> Marmaris/Muğla
                </span>
              </div>

              <div className="flex items-center gap-x-2">
                <FaPhone size={25} />
                <span>0 (252) 417 66 30</span>
              </div>

              <div className="flex items-center gap-x-2">
                <FaFax size={25} />
                <span>0 (000) 000 00 00</span>
              </div>

              <div className="flex items-center gap-x-2">
                <IoIosMail size={25} />
                <span>info@clubaida.com.tr</span>
              </div>
            </div>

            <div className="border-b border-black/50 mt-4"></div>
            <div>
              <h1 className="text-center text-2xl font-bold mt-4 ">
                {t("send us a message")}
              </h1>
              <p className="text-sm text-center">{t("contact_desc")}</p>
            </div>

            <form className="mt-4" action="">
              <div className="flex lg:flex-row flex-col gap-x-10 gap-y-10">
                <input
                  className="contact__input"
                  type="text"
                  placeholder={`${t("Name / Surname")}`}
                />
                <input
                  className="contact__input"
                  type="text"
                  placeholder={`${t("your email address")}`}
                />
              </div>

              <div className="flex lg:flex-row flex-col gap-x-10 gap-y-10 mt-12 lg:mt-6">
                <input
                  className="contact__input"
                  type="number"
                  placeholder={`${t("Phone")}`}
                />
                <input
                  className="contact__input"
                  type="text"
                  placeholder={`${t("Description")}`}
                />
              </div>

              <textarea
                className="w-full mt-6 border-b border-black outline-none"
                placeholder={`${t("message")}`}
              />

              <button className="bg-indigo-500 hover:bg-indigo-800 duration-300 px-5 py-1 mt-2 text-white rounded-md mx-auto block">
                {t("send message")}
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPageComp;
