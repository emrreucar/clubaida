"use client";

import TeamItem from "@/components/Teams/TeamItem";
import img1 from "/public/teams_banner.jpg";
import Banner from "@/components/Banner";

import team1 from "/public/team1.jpg";
import team2 from "/public/team2.jpg";
import team3 from "/public/team3.jpg";
import team4 from "/public/team4.jpg";
import team5 from "/public/team5.jpg";
import { useTranslation } from "react-i18next";

const TeamsPageComp = () => {
  const { t } = useTranslation();

  const linkWay = [
    { href: "/", text: `${t("home page")}` },
    { href: "/", text: `${t("institutional")}` },
    { href: "/institutional/teams", text: `${t("teams")}` },
  ];
  return (
    <div>
      <Banner title={`${t("teams")}`} img={img1} linkWay={linkWay} />

      <div className="lg:grid lg:grid-cols-3 lg:place-content-center">
        <TeamItem
          img={team1}
          name="Taha Bilgin"
          title={`${t("general manager")}`}
        />
        <TeamItem img={team2} name="Vedat Bora" title={`${t("head chef")}`} />
        <TeamItem
          img={team3}
          name="Mehmet Yaşar"
          title={`${t("Assistant Cook, Pastry Chef")}`}
        />
        <TeamItem
          img={team4}
          name="Zeliha Kırık"
          title={`${t("Housekeeping Chef")}`}
        />
        <TeamItem
          img={team5}
          name="Melis Güler"
          title={`${t("Housekeeping Chef")}`}
        />
      </div>

      <span className="text-center block my-12 ">
        {t("Showing records 1-5 out of 5 records")}
      </span>
    </div>
  );
};

export default TeamsPageComp;
