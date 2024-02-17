"use client";

import { useState } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { GoCommentDiscussion } from "react-icons/go";

import { RiDoubleQuotesL } from "react-icons/ri";
import { useTranslation } from "react-i18next";

const ReviewsCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % comments.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prevSlide) => (prevSlide - 1 + comments.length) % comments.length
    );
  };

  const { t } = useTranslation();

  const comments = [
    {
      title: "Emre Uçar",
      job: `${t("engineer / software developer")}`,
      content: `${t("reviews_content")}`,
    },
    {
      title: "Hayri Yılmaz",
      job: `${t("engineer")}`,
      content: `${t("reviews_content")}`,
    },
  ];

  return (
    <div className="w-full bg-slate-100">
      <h1 className="text-4xl text-center font-bold py-10 mb-5 ">
        {t("customersReviews")}
      </h1>
      {comments.map((comment, index) => (
        <div
          key={index}
          className={`relative flex flex-col items-center justify-center duration-1000 ease-in-out  p-10 lg:max-w-6xl lg:mx-auto !h-[400px] lg:!h-[250px] bg-white rounded-xl ${
            index !== currentSlide && "hidden"
          }`}
          style={{
            overflow: index === currentSlide ? "visible" : "hidden",
            height: index === currentSlide ? "auto" : "0",
          }}
        >
          <div className="absolute -top-10 left-[41%] lg:left-[46.5%] bg-gradient-to-tr from-[#006f50] to-[#00a476] text-white p-5 rounded-full">
            <GoCommentDiscussion size={30} />
          </div>

          <div className="absolute top-5 left-5 text-gray-300 ">
            <RiDoubleQuotesL size={50} />
          </div>

          <div className="flex flex-col items-center justify-center w-full ">
            <p className="font-bold"> {comment.title} </p>
            <p className="mt-2 text-red-500"> {comment.job} </p>
            <p className="text-gray-400 mt-2 w-full text-center ">
              {" "}
              {comment.content}{" "}
            </p>
          </div>

          <div className="absolute top-[43%] right-1/2 transform translate-x-1/2 translate-y-1/2 flex justify-between w-full">
            <MdKeyboardArrowLeft
              size={40}
              fill="black"
              className="cursor-pointer"
              onClick={prevSlide}
            />
            <MdKeyboardArrowRight
              size={40}
              fill="black"
              className="cursor-pointer"
              onClick={nextSlide}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ReviewsCarousel;
