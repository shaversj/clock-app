"use client";

import type { MenuState } from "@/types/types";
import { useState } from "react";
import SubMenuSection from "@/components/SubMenuSection";
import TimeDisplaySection from "@/components/TimeDisplaySection";
import QuoteSection from "@/components/QuoteSection";

export default function Home() {
  const [menuState, setMenuState] = useState<MenuState>("initial");

  const toggleMenu = () => {
    setMenuState((prevState: MenuState) => {
      if (prevState === "initial" || prevState === "menuClosed") {
        return "menuOpen";
      } else {
        return "menuClosed";
      }
    });
  };

  const menuData = {
    utc_offset: "-06:00",
    timezone: "America/Chicago",
    day_of_week: 2,
    day_of_year: 310,
    datetime: "2024-11-05T07:39:41.482314-06:00",
    utc_datetime: "2024-11-05T13:39:41.482314+00:00",
    unixtime: 1730813981,
    raw_offset: -21600,
    week_number: 45,
    dst: false,
    abbreviation: "CST",
    dst_offset: 0,
    dst_from: null,
    dst_until: null,
    client_ip: "70.57.86.134",
  };

  return (
    <div
      className={
        "relative h-[667px] w-[375px] overflow-hidden bg-black/40 bg-[url('/images/mobile/bg-image-daytime.jpg')] bg-auto pt-[31.67px] bg-blend-overlay md:h-[1024] md:w-[768px] md:bg-[url('/images/tablet/bg-image-daytime.jpg')] md:pt-[80px] lg:h-[800px] lg:w-[1440px] lg:bg-[url('/images/desktop/bg-image-daytime.jpg')] lg:pt-[56px]"
      }
    >
      <TimeDisplaySection menuState={menuState} data={menuData} toggleMenu={toggleMenu} />

      <div className="px-[26px] md:px-[64px] lg:px-[165px]">
        <QuoteSection menuState={menuState} />
      </div>

      {/*<SubMenuSection menuState={menuState} data={menuData} />*/}
    </div>
  );
}
