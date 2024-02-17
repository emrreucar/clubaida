"use client";

import { useTranslation } from "react-i18next";

import EventItem from "@/components/Events/EventItem";
import img1 from "/public/events_banner.jpg";
import Banner from "@/components/Banner";

import event1 from "/public/event1.jpg";
import event2 from "/public/event2.jpg";

const EventsPageComp = () => {
  const { t } = useTranslation();

  const linkWay = [
    { href: "/", text: `${t("home page")}` },
    { href: "/events", text: `${t("activities")}` },
  ];
  return (
    <div>
      <Banner img={img1} title={`${t("activities")}`} linkWay={linkWay} />
      <EventItem
        day={"26"}
        month={`${t("October")}`}
        year={"2024"}
        imgSrc={event1}
        title={`${t("turkish night")}`}
        description={`${t("turkish_night_desc")}`}
        href={"/events/event-1"}
      />

      <EventItem
        day={"28"}
        month={`${t("October")}`}
        year={"2024"}
        imgSrc={event2}
        title={`${t("turkish pop")}`}
        description={`${t("turkish_pop_desc")}`}
        href={"/events/event-2"}
      />

      <span className="block text-center mb-6">
        {t("Showing records 1-2 out of 2 records")}
      </span>
    </div>
  );
};

export default EventsPageComp;
