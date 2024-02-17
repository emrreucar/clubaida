import Image from "next/image";
import Link from "next/link";

const EventItem = ({ day, month, year, imgSrc, title, description, href }) => {
  return (
    <div className="py-10 px-5">
      <Link className="!bg-red-500" href={href}>
        <div className="shadow-xl shadow-black/20 w-full lg:w-[66%] lg:mx-auto rounded-xl flex flex-col hover:-translate-y-5 duration-300 lg:flex-row lg:p-10 ">
          <div className="flex justify-around lg:justify-start items-center lg:gap-10">
            <div className="flex flex-col items-center">
              <span className="text-orange-500 text-[50px]"> {day} </span>
              <span className="bg-black/70 px-8 text-white rounded-md ">
                {month}
              </span>
              <span className="text-gray-800 font-bold text-[50px]">
                {" "}
                {year}{" "}
              </span>
            </div>
            <div className="relative w-[200px] h-[200px]">
              <Image alt="image" className="rounded-md" src={imgSrc} fill />
            </div>
          </div>

          <div className="flex flex-col items-start justify-center p-6">
            <h1 className="font-bold text-gray-600"> {title} </h1>
            <p className="text-gray-400 mt-1">{description}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default EventItem;
