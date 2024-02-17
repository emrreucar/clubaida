import React from "react";

import { FaWifi, FaFilterCircleDollar } from "react-icons/fa6";
import { FaConciergeBell, FaLeaf } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const Preference = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h1 className="text-3xl text-gray-600 text-center mt-12 uppercase font-bold ">
        {t("preference")}
      </h1>

      <div className="flex flex-col lg:flex-row lg:gap-x-20 items-center justify-center mt-6">
        {/* item start */}
        <div className="flex flex-col items-center justify-center mb-6 ">
          <span className="p-5 bg-indigo-500/20 rounded-full hover:bg-indigo-500 duration-300 hover:text-white">
            <FaWifi size={30} />
          </span>
          <span className="font-bold mt-2 "> {t("free wifi")} </span>
          <span className="text-gray-400 text-sm">
            {" "}
            {t("7/24 free internet")}{" "}
          </span>
        </div>
        {/* item end */}

        {/* item start */}
        <div className="flex flex-col items-center justify-center mb-6 ">
          <span className="p-5 bg-indigo-500/20 rounded-full hover:bg-indigo-500 duration-300 hover:text-white">
            <FaConciergeBell size={30} />
          </span>
          <span className="font-bold mt-2 "> {t("our services")} </span>
          <span className="text-gray-400 text-sm">
            {t("roomService")}, {t("housekeeping")}
          </span>
        </div>
        {/* item end */}

        {/* item start */}
        <div className="flex flex-col items-center justify-center mb-6 ">
          <span className="p-5 bg-indigo-500/20 rounded-full hover:bg-indigo-500 duration-300 hover:text-white">
            <FaLeaf size={30} />
          </span>
          <span className="font-bold mt-2 capitalize">
            {t("eco friendly hotel")}
          </span>
          <span className="text-gray-400 text-sm capitalize">
            {t("our hotel is environmentally friendly")}
          </span>
        </div>
        {/* item end */}

        {/* item start */}
        <div className="flex flex-col items-center justify-center mb-6 ">
          <span className="p-5 bg-indigo-500/20 rounded-full hover:bg-indigo-500 duration-300 hover:text-white">
            <FaFilterCircleDollar size={30} />
          </span>
          <span className="font-bold mt-2 capitalize">
            {t("customized options for you")}
          </span>

          <span className="text-gray-400 text-sm capitalize">
            {" "}
            {t("special rooms for our customers")}
          </span>
        </div>
        {/* item end */}
      </div>
    </div>
  );
};

export default Preference;
