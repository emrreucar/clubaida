"use client";

import turkey from "/public/turkey.png";
import eng from "/public/eng.png";

import { BiArrowBack, BiArrowFromBottom } from "react-icons/bi";

import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { useTranslation } from "react-i18next";
import i18nConfig from "../../i18nConfig";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function LanguageChanger() {
  const { i18n } = useTranslation();
  const currentLocale = i18n.language;
  const router = useRouter();
  const currentPathname = usePathname();

  const handleChange = (e) => {
    const newLocale = e.target.value;

    // set cookie for next-i18n-router
    const days = 30;
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    const expires = date.toUTCString();
    document.cookie = `NEXT_LOCALE=${newLocale};expires=${expires};path=/`;

    // redirect to the new locale path
    if (
      currentLocale === i18nConfig.defaultLocale &&
      !i18nConfig.prefixDefault
    ) {
      router.push("/" + newLocale + currentPathname);
    } else {
      router.push(
        currentPathname.replace(`/${currentLocale}`, `/${newLocale}`)
      );
    }

    router.refresh();
  };

  const [isOpen, setIsOpen] = useState(false);

  const clickHandle = (newLocale) => {
    i18n.changeLanguage(newLocale);

    // set cookie for next-i18n-router
    const days = 30;
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    const expires = date.toUTCString();
    document.cookie = `NEXT_LOCALE=${newLocale};expires=${expires};path=/`;

    // redirect to the new locale path
    if (
      currentLocale === i18nConfig.defaultLocale &&
      !i18nConfig.prefixDefault
    ) {
      router.push("/" + newLocale + currentPathname);
    } else {
      router.push(
        currentPathname.replace(`/${currentLocale}`, `/${newLocale}`)
      );
    }

    router.refresh();

    setIsOpen(false);
  };

  return (
    <div className="relative">
      <Image
        src={i18n.language === "tr" ? turkey : eng}
        width={40}
        height={40}
        className="cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      />
      {isOpen && (
        <div className="absolute top-10 right-0 bg-white text-black shadow-md rounded w-[120px] ">
          <button
            value={currentLocale}
            onClick={() => clickHandle("tr")}
            className="flex items-center gap-x-2 w-full py-2 px-4 text-left hover:bg-gray-200 duration-100"
          >
            Türkçe <Image src={turkey} width={30} height={30} />
          </button>
          <button
            value={currentLocale}
            onClick={() => clickHandle("en")}
            className="flex items-center gap-x-2 w-full py-2 px-4 text-left hover:bg-gray-200 duration-100"
          >
            English <Image src={eng} width={30} height={30} />
          </button>
        </div>
      )}
    </div>
  );
}
