"use client";

import type { MenuState } from "@/types/types";
import { useState } from "react";
// import SubMenuSection from "@/components/SubMenuSection";
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

  return (
    <div
      className={
        "relative h-[667px] w-[375px] overflow-hidden bg-black/40 bg-[url('/images/mobile/bg-image-daytime.jpg')] bg-auto pt-[31.67px] bg-blend-overlay md:h-[1024] md:w-[768px] md:bg-[url('/images/tablet/bg-image-daytime.jpg')] md:pt-[80px] lg:h-[800px] lg:w-[1440px] lg:bg-[url('/images/desktop/bg-image-daytime.jpg')] lg:pt-[56px]"
      }
    >
      <TimeDisplaySection menuState={menuState} toggleMenu={toggleMenu} />

      <div className="relative px-[26px] md:px-[64px] lg:px-[165px]">
        <QuoteSection menuState={menuState} />
      </div>

      {/*<SubMenuSection menuState={menuState} data={menuData} />*/}
    </div>
  );
}
