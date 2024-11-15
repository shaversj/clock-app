"use client";

import { useEffect, useState } from "react";
import type { IpBaseResponse, IpifyResponse, MenuState, TimeAPIResponse } from "@/types/types";
import TimeDisplaySection from "@/components/TimeDisplaySection";
import QuoteSection from "@/components/QuoteSection";

const clockVarients = {
  base: "relative min-h-screen min-w-full bg-no-repeat overflow-hidden bg-black/40 bg-cover pt-[calc(4.75%)] bg-blend-overlay md:h-[calc(100vh-59rem)] md:pt-[calc(7.81%)] lg:h-[calc(100vh-46.5rem)] lg:w-[90rem] lg:pt-[calc(7%)]",
  daytime:
    "bg-[url('/images/mobile/bg-image-daytime.jpg')] md:bg-[url('/images/tablet/bg-image-daytime.jpg')] lg:bg-[url('/images/desktop/bg-image-daytime.jpg')]",
  nighttime:
    "bg-[url('/images/mobile/bg-image-nighttime.jpg')] md:bg-[url('/images/tablet/bg-image-nighttime.jpg')] lg:bg-[url('/images/desktop/bg-image-nighttime.jpg')]",
};

export default function ClockContainer() {
  const [ipData, setIpData] = useState<IpifyResponse | undefined>(undefined);
  const [timeData, setTimeData] = useState<TimeAPIResponse | undefined>(undefined);
  const [locationData, setLocationData] = useState<IpBaseResponse | undefined>(undefined);
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
      <div className="px-[1.625rem] md:px-[4rem] lg:px-[10.313rem]">
        <QuoteSection menuState={menuState} />
      </div>
    </div>
  );
}
