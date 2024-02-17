"use client";

import Form from "@/components/HumanResourcesForm/Form";
import img1 from "/public/humanResources_banner.jpg";
import Banner from "@/components/Banner";
import { useTranslation } from "react-i18next";

const HumanResourcesFormPageComp = () => {
  const { t } = useTranslation();

  const linkWay = [
    { href: "/", text: `${t("home page")}` },
    { href: "/", text: `${t("institutional")}` },
    {
      href: "/institutional/humanResourcesForm",
      text: `${t("humanResourcesForm")}`,
    },
  ];
  return (
    <div>
      <Banner
        title={`${t("humanResourcesForm")}`}
        img={img1}
        linkWay={linkWay}
      />

      <div className="lg:flex">
        <Form />

        <div className="bg-slate-200/50 p-10 flex flex-col items-start justify-center lg:flex-[1] ">
          <h1 className="text-xl text-center w-full">
            Club Aida Hotel Marmaris
          </h1>
          <p className="w-full text-center mt-4 text-gray-500 ">
            Siteler, 212 Sk. No: 11, 48700 <br /> Marmaris/Muğla
          </p>

          <div className="mt-6 w-full text-center text-gray-500 ">
            <p className=""> {t("Phone")} : 0(252) 417 66 30 </p>
            <p className=""> Fax: 0(000) 000 00 00 </p>
            <p className=""> Email: info@clubaida.com.tr </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HumanResourcesFormPageComp;
