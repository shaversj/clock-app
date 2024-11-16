"use client";

import { useState } from "react";
import { useClockData } from "@/hooks/UseClockData";
import type { MenuState } from "@/types/types";
import TimeDisplay from "@/components/TimeDisplay";
import QuoteDisplay from "@/components/QuoteDisplay";
import SubMenuSection from "@/components/SubMenuSection";
import ToggleMenu from "@/components/ToggleMenu";
import QuoteSection from "@/components/QuoteSection";

const clockVarients = {
  base: "relative min-h-screen min-w-full bg-no-repeat overflow-hidden bg-black/40 bg-cover pt-[calc(4.75%)] bg-blend-overlay md:h-[calc(100vh-59rem)] md:pt-[calc(7.81%)] lg:h-[calc(100vh-46.5rem)] lg:w-[90rem] lg:pt-[calc(7%)]",
  daytime:
    "bg-[url('/images/mobile/bg-image-daytime.jpg')] md:bg-[url('/images/tablet/bg-image-daytime.jpg')] lg:bg-[url('/images/desktop/bg-image-daytime.jpg')]",
  nighttime:
    "bg-[url('/images/mobile/bg-image-nighttime.jpg')] md:bg-[url('/images/tablet/bg-image-nighttime.jpg')] lg:bg-[url('/images/desktop/bg-image-nighttime.jpg')]",
};

export default function ClockDisplay() {
  const { timeData, locationData, isDayTime } = useClockData();
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

  return (
    <div className={`${clockVarients["base"]} ${isDayTime ? clockVarients["daytime"] : clockVarients["nighttime"]}`}>
      <TimeDisplay menuState={menuState} timeData={timeData} locationData={locationData} isDayTime={isDayTime}>
        <ToggleMenu menuState={menuState} toggleMenu={toggleMenu} />
        <SubMenuSection menuState={menuState} timeData={timeData} isDayTime={isDayTime} />
      </TimeDisplay>
      <QuoteSection>
        <QuoteDisplay menuState={menuState} />
      </QuoteSection>
    </div>
  );
}
