"use client";

import Banner from "@/components/Banner";
import img1 from "/public/teams_banner.jpg";
import Image from "next/image";

import event1 from "/public/event1.jpg";
import event2 from "/public/event2.jpg";

import { useTranslation } from "react-i18next";

const SingleEventPageComp = ({ slug }) => {
  const { t } = useTranslation();

  const linkWay = [
    { href: "/", text: `${t("home page")}` },
    { href: "/events", text: `${t("activities")}` },
    { href: `/events/${slug}`, text: `${t("activity detail")}` },
  ];

  return (
    <div>
      <Banner img={img1} title={`${t("activity detail")}`} linkWay={linkWay} />
      {slug === "event-1" ? (
        <div className="p-10 flex flex-col ">
          <div className="lg:flex lg:flex-row lg:items-center p-5">
            <div className="lg:px-20 lg:mt-10">
              <h1 className="text-2xl font-bold mb-2">
                {" "}
                {t("turkish night")}{" "}
              </h1>
              <div className="text-gray-500">
                <p>{t("turkish_night_desc")}</p>
              </div>
            </div>
            <div className="relative w-full h-[300px] lg:h-[400px] mt-10 ">
              <Image
                src={event1}
                fill
                className="rounded-tl-[40px] rounded-br-[40px] "
              />
            </div>
          </div>

          <div className="flex flex-col items-center justify-center mt-10">
            <h1 className="text-2xl font-bold mb-4">
              {" "}
              {t("other activities")}{" "}
            </h1>

            <div>
              <Image
                src={event2}
                className="rounded-xl hover:scale-105 duration-200"
                width={300}
                height={300}
              />
            </div>
          </div>
        </div>
      ) : slug === "event-2" ? (
        <div className="p-10 flex flex-col ">
          <div className="lg:flex lg:flex-row lg:items-center p-5">
            <div className="lg:px-20 lg:mt-10">
              <h1 className="text-2xl font-bold mb-2"> {t("turkish pop")} </h1>
              <div className="text-gray-500">
                <p>{t("turkish_pop_desc")}</p>
              </div>
            </div>
            <div className="relative w-full h-[300px] lg:h-[400px] mt-10 ">
              <Image
                src={event2}
                fill
                className="rounded-tl-[40px] rounded-br-[40px] "
              />
            </div>
          </div>

          <div className="flex flex-col items-center justify-center mt-10">
            <h1 className="text-2xl font-bold mb-4">
              {" "}
              {t("other activities")}{" "}
            </h1>

            <div>
              <Image
                src={event1}
                className="rounded-xl hover:scale-105 duration-200"
                width={300}
                height={300}
              />
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default SingleEventPageComp;
