"use client";

import { useEffect, useState } from "react";
import type { MenuState } from "@/types/types";
import TimeDisplaySection from "@/components/TimeDisplaySection";
import QuoteSection from "@/components/QuoteSection";
import SubMenuSection from "@/components/SubMenuSection";

export default function ClockContainer() {
  const [ipAddress, setIpAddress] = useState<string | null>(null);
  const [timeData, setTimeData] = useState<any>(null); // eslint-disable-line
  const [locationData, setLocationData] = useState<any>(null); // eslint-disable-line
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
        setIpAddress(data.ip);
      });
  }, []);

  useEffect(() => {
    if (ipAddress) {
      fetch(`https://timeapi.io/api/time/current/ip?ipAddress=${ipAddress}`)
        .then((res) => res.json())
        .then((data) => {
          setTimeData(data);
        });
    }
  }, [ipAddress]);

  useEffect(() => {
    if (timeData) {
      fetch(`https://api.ipbase.com/v2/info?ip=${ipAddress}`)
        .then((res) => res.json())
        .then((data) => {
          setLocationData(data);
        });
    }
  }, [timeData]);
  return (
    <div
      className={
        "relative h-[667px] w-[375px] overflow-hidden bg-black/40 bg-[url('/images/mobile/bg-image-daytime.jpg')] bg-auto pt-[31.67px] bg-blend-overlay md:h-[1024] md:w-[768px] md:bg-[url('/images/tablet/bg-image-daytime.jpg')] md:pt-[80px] lg:h-[800px] lg:w-[1440px] lg:bg-[url('/images/desktop/bg-image-daytime.jpg')] lg:pt-[56px]"
      }
    >
      <TimeDisplaySection menuState={menuState} timeData={timeData} locationData={locationData} toggleMenu={toggleMenu} />
      <div className="relative px-[26px] md:px-[64px] lg:px-[165px]">
        <QuoteSection menuState={menuState} />
      </div>
    </div>
  );
}
