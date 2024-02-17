"use client";

import { GoCommentDiscussion } from "react-icons/go";
import img1 from "/public/customersReviews_banner.jpg";
import Banner from "@/components/Banner";
import { useTranslation } from "react-i18next";

const CustomersReviewsPageComp = () => {
  const { t } = useTranslation();

  const linkWay = [
    { href: "/", text: `${t("home page")}` },
    { href: "/", text: `${t("institutional")}` },
    {
      href: "/institutional/customersReviews",
      text: `${t("customersReviews")}`,
    },
  ];
  return (
    <div>
      <Banner title={`${t("customersReviews")}`} img={img1} linkWay={linkWay} />

      <div>
        {/* item start */}
        <div className="flex flex-col lg:flex-row items-center justify-center mx-auto p-10 gap-x-12 mt-12 w-[65%] shadow-xl shadow-black/20 rounded-xl mb-6">
          <div className="w-[50px] h-[50px] p-3 rounded-full flex justify-center items-center bg-gradient-to-tr from-[#006f50] to-[#00a476]">
            <GoCommentDiscussion size={30} fill="white" />
          </div>
          <div>
            <div className="flex lg:flex-row flex-col items-center gap-x-4 mb-2 lg:mt-0 mt-2">
              <h1 className="text-2xl font-bold lg:text-start text-center">
                Emre Uçar - {t("engineer / software developer")}
              </h1>
              <span className="text-gray-400">
                13 {t("february")} 2024, 10.39
              </span>
            </div>
            <p className="lg:text-start text-center">{t("reviews_content")}</p>
          </div>
        </div>
        {/* item end */}

        {/* item start */}
        <div className="flex flex-col lg:flex-row items-center justify-center mx-auto p-10 gap-x-12 mt-12 w-[65%] shadow-xl shadow-black/20 rounded-xl mb-6">
          <div className="w-[50px] h-[50px] p-3 rounded-full flex justify-center items-center bg-gradient-to-tr from-[#006f50] to-[#00a476]">
            <GoCommentDiscussion size={30} fill="white" />
          </div>
          <div>
            <div className="flex lg:flex-row flex-col items-center gap-x-4 mb-2 lg:mt-0 mt-2">
              <h1 className="text-2xl font-bold lg:text-start text-center">
                Hayri Yılmaz - {t("engineer")}
              </h1>
              <span className="text-gray-400">
                13 {t("february")} 2024, 10.39
              </span>
            </div>
            <p className="lg:text-start text-center">{t("reviews_content")}</p>
          </div>
        </div>
        {/* item end */}
      </div>

      <span className="block text-center text-gray-400 py-4 ">
        {t("Showing records 1-2 out of 2 records")}
      </span>
    </div>
  );
};

export default CustomersReviewsPageComp;
