"use client";

import { useTranslation } from "react-i18next";
import Accordion from "./Accordion";

const FAQ = () => {
  const { t } = useTranslation();

  return (
    <div className="p-4 rounded-lg max-w-6xl mx-auto my-12 flex flex-col gap-y-4 ">
      <Accordion title={`${t("faq_title1")}`} answer={`${t("faq_answer1")}`} />
      <div className="border-b border-black/20"></div>

      <Accordion title={`${t("faq_title2")}`} answer={`${t("faq_answer2")}`} />
      <div className="border-b border-black/20"></div>

      <Accordion title={`${t("faq_title3")}`} answer={`${t("faq_answer3")}`} />
      <div className="border-b border-black/20"></div>

      <Accordion title={`${t("faq_title4")}`} answer={`${t("faq_answer4")}`} />
      <div className="border-b border-black/20"></div>

      <Accordion title={`${t("faq_title5")}`} answer={`${t("faq_answer5")}`} />
      <div className="border-b border-black/20"></div>
    </div>
  );
};

export default FAQ;
