"use client";

import Image from "next/image";
import img1 from "/public/documents_banner.jpg";

import belge1 from "/public/belge1.jpg";
import belge2 from "/public/belge2.png";
import belge3 from "/public/belge3.png";
import belge4 from "/public/belge4.jpg";
import belge5 from "/public/belge5.jpg";
import belge6 from "/public/belge6.jpg";
import Banner from "@/components/Banner";
import { useTranslation } from "react-i18next";

const DocumentsPageComp = () => {
  const { t } = useTranslation();

  const linkWay = [
    { href: "/", text: `${t("home page")}` },
    { href: "/", text: `${t("institutional")}` },
    { href: "/institutional/documents", text: `${t("documents")}` },
  ];
  return (
    <div>
      <Banner title={`${t("documents")}`} img={img1} linkWay={linkWay} />

      <div className="p-10 gap-y-6 ">
        <h1 className="text-4xl font-bold w-full px-5 "> {t("documents")} </h1>

        <div className="flex flex-col items-center justify-center gap-y-10 lg:grid lg:grid-cols-3 lg:gap-y-10 lg:gap-x-6 lg:mt-10  ">
          {/* item start */}
          <div className="relative w-full h-[500px] lg:h-[400px] mt-12 lg:mt-0 ">
            <div className="group">
              <Image
                src={belge1}
                alt="image"
                fill
                className="group-hover:scale-90 duration-300 overflow-hidden rounded-xl"
              />
              <div className="group-hover:scale-95 duration-300 overlay absolute top-0 left-0 w-full h-full bg-black/40 rounded-xl"></div>
            </div>

            <div className="absolute bottom-4 left-4 z-50">
              <span className="text-white font-bold text-center text-2xl capitalize">
                {t("certificate of competence")}
              </span>
            </div>
          </div>
          {/* item end */}

          {/* item start */}
          <div className="relative w-full h-[500px] lg:h-[400px]">
            <div className="group">
              <Image
                src={belge2}
                alt="image"
                fill
                className="group-hover:scale-90 duration-300 overflow-hidden rounded-xl"
              />
              <div className="group-hover:scale-95 duration-300 overlay absolute top-0 left-0 w-full h-full bg-black/40 rounded-xl"></div>
            </div>

            <div className="absolute bottom-4 left-4 z-50">
              <span className="text-white font-bold text-center text-2xl capitalize">
                {t("trademark registration certificate")}
              </span>
            </div>
          </div>
          {/* item end */}

          {/* item start */}
          <div className="relative w-full h-[500px] lg:h-[400px]">
            <div className="group">
              <Image
                src={belge3}
                alt="image"
                fill
                className="group-hover:scale-90 duration-300 overflow-hidden rounded-xl"
              />
              <div className="group-hover:scale-95 duration-300 overlay absolute top-0 left-0 w-full h-full bg-black/40 rounded-xl"></div>
            </div>

            <div className="absolute bottom-4 left-4 z-50">
              <span className="text-white font-bold text-center text-2xl capitalize">
                {t("ISO 27001 Quality Competence Certificate")}
              </span>
            </div>
          </div>
          {/* item end */}

          {/* item start */}
          <div className="relative w-full h-[500px] lg:h-[400px]">
            <div className="group">
              <Image
                src={belge4}
                alt="image"
                fill
                className="group-hover:scale-90 duration-300 overflow-hidden rounded-xl"
              />
              <div className="group-hover:scale-95 duration-300 overlay absolute top-0 left-0 w-full h-full bg-black/40 rounded-xl"></div>
            </div>

            <div className="absolute bottom-4 left-4 z-50">
              <span className="text-white font-bold text-center text-2xl capitalize">
                {t("service qualification certificate")}
              </span>
            </div>
          </div>
          {/* item end */}

          {/* item start */}
          <div className="relative w-full h-[500px] lg:h-[400px]">
            <div className="group">
              <Image
                src={belge5}
                alt="image"
                fill
                className="group-hover:scale-90 duration-300 overflow-hidden rounded-xl"
              />
              <div className="group-hover:scale-95 duration-300 overlay absolute top-0 left-0 w-full h-full bg-black/40 rounded-xl"></div>
            </div>

            <div className="absolute bottom-4 left-4 z-50">
              <span className="text-white font-bold text-center text-2xl capitalize">
                {t("TSE Service Competence Certificate")}
              </span>
            </div>
          </div>
          {/* item end */}

          {/* item start */}
          <div className="relative w-full h-[500px] lg:h-[400px]">
            <div className="group">
              <Image
                src={belge6}
                alt="image"
                fill
                className="group-hover:scale-90 duration-300 overflow-hidden rounded-xl"
              />
              <div className="group-hover:scale-95 duration-300 overlay absolute top-0 left-0 w-full h-full bg-black/40 rounded-xl"></div>
            </div>

            <div className="absolute bottom-4 left-4 z-50">
              <span className="text-white font-bold text-center text-2xl capitalize">
                {t("ISO 27001 Quality Certificate")}
              </span>
            </div>
          </div>
          {/* item end */}
        </div>
      </div>

      <span className="text-center block my-12 ">
        {t("Showing records 1-6 out of 6 records")}
      </span>
    </div>
  );
};

export default DocumentsPageComp;
