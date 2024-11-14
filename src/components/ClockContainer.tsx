"use client";

import { useEffect, useState } from "react";
import type { IpBaseResponse, IpifyResponse, MenuState, TimeAPIResponse } from "@/types/types";
import TimeDisplaySection from "@/components/TimeDisplaySection";
import QuoteSection from "@/components/QuoteSection";

const clockVarients = {
  base: "relative h-[667px] w-[375px] overflow-hidden bg-black/40 bg-auto pt-[31.67px] bg-blend-overlay md:h-[1024] md:w-[768px] md:pt-[80px] lg:h-[800px] lg:w-[1440px] lg:pt-[56px]",
  daytime:
    "bg-[url('/images/mobile/bg-image-daytime.jpg')] md:bg-[url('/images/tablet/bg-image-daytime.jpg')] lg:bg-[url('/images/desktop/bg-image-daytime.jpg')]",
  nighttime:
    "bg-[url('/images/mobile/bg-image-nighttime.jpg')] md:bg-[url('/images/tablet/bg-image-nighttime.jpg')] lg:bg-[url('/images/desktop/bg-image-nighttime.jpg')]",
};

export default function ClockContainer() {
  const [ipData, setIpData] = useState<IpifyResponse | undefined>(undefined);
  const [timeData, setTimeData] = useState<TimeAPIResponse | undefined>(undefined); // eslint-disable-line
  const [locationData, setLocationData] = useState<IpBaseResponse | undefined>(undefined); // eslint-disable-line
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

  useEffect(() => {
    fetch("https://api.ipify.org/?format=json")
      .then((res) => res.json())
      .then((data) => {
        setIpData(data);
      });
  }, []);

  useEffect(() => {
    if (ipData) {
      fetch(`https://timeapi.io/api/time/current/ip?ipAddress=${ipData.ip}`)
        .then((res) => res.json())
        .then((data) => {
          setTimeData(data);
        });
    }
  }, [ipData]);

  useEffect(() => {
    if (timeData && ipData) {
      fetch(`https://api.ipbase.com/v2/info?ip=${ipData.ip}`)
        .then((res) => res.json())
        .then((data) => {
          setLocationData(data);
        });
    }
  }, [timeData]);

  return (
    <div
      className={`${clockVarients["base"]} ${timeData ? (timeData.hour < 18 && timeData.hour >= 6 ? clockVarients["daytime"] : clockVarients["nighttime"]) : clockVarients["daytime"]}`}
    >
      <TimeDisplaySection menuState={menuState} timeData={timeData} locationData={locationData} toggleMenu={toggleMenu} />
      <div className="px-[26px] md:px-[64px] lg:px-[165px]">
        <QuoteSection menuState={menuState} />
      </div>
    </div>
  );
}
