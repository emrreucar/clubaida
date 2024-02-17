"use client";

import img1 from "/public/faq_banner.jpg";
import FAQ from "@/components/FAQs/FAQ";
import Banner from "@/components/Banner";
import { useTranslation } from "react-i18next";

const FaqPageComp = () => {
  const { t } = useTranslation();

  const linkWay = [
    { href: "/", text: `${t("home page")}` },
    { href: "/", text: `${t("institutional")}` },
    { href: "/institutional/faq", text: `${t("faq")}` },
  ];

  return (
    <div>
      <Banner title={`${t("faq")}`} img={img1} linkWay={linkWay} />
      <FAQ />
    </div>
  );
};

export default FaqPageComp;
