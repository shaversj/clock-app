"use client";

import SunIcon from "@/components/icons/SunIcon";
import ArrowDownIcon from "@/components/icons/ArrowDownIcon";
import { useState } from "react";
import ArrowUpIcon from "@/components/icons/ArrowUpIcon";

type MenuState = "initial" | "menuOpen" | "menuClosed";

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

  const quoteVarients = {
    base: "w-[540px] text-base font-normal text-white",
    initial: "w-[540px] text-base font-normal text-white",
    menuOpen: "w-[540px] opacity-0 transition-all duration-[1500ms]",
    menuClosed: "w-[540px] opacity-100 transition-all duration-[1000ms] ease-in",
  };

  const timeVarients = {
    base: "flex items-end",
    initial: "pt-[233px]",
    menuOpen: "-translate-y-[120px] transition-all duration-1000",
    menuClosed: "pt-[20px] translate-y-[233px] pb-[98px] transition-all duration-1000",
  };

  const subMenuVarients = {
    base: "bg-white/50 backdrop-blur-xl",
    initial: "mt-[233px] translate-y-[70px]",
    menuOpen: "-translate-y-[70px] transition-all duration-1000",
    menuClosed: "mt-[233px] translate-y-[70px] transition-all duration-1000",
  };

  return (
    <div
      className={
        "h-[800px] w-[1440px] overflow-hidden bg-black/40 bg-[url('/images/desktop/bg-image-daytime.jpg')] bg-auto pt-[56px] bg-blend-overlay"
      }
    >
      <div className="px-[165px]">
        <div className={`${quoteVarients["base"]} ${quoteVarients[menuState]}`}>
          <p>
            “The science of operations, as derived from mathematics more especially, is a science of itself, and has its own abstract truth and
            value.”
          </p>
          <p className={"pt-[13px] font-bold"}>Ada Lovelace</p>
        </div>

        <div className={`${timeVarients["base"]} ${timeVarients[menuState]}`}>
          <div>
            <div className={"flex items-center gap-x-4"}>
              <SunIcon />
              <p className={"text-[20px] uppercase leading-[28px] tracking-[4px]"}>GOOD MORNING, IT’S CURRENTLY</p>
            </div>

            <div className={"flex items-baseline pt-4"}>
              <div className={"flex items-end"}>
                <h2 className={"text-[200px] font-bold leading-[200px] -tracking-[5px]"}>11:37</h2>
              </div>
              <p className={"text-[40px] font-light leading-[28px]"}>BST</p>
            </div>
            <p className={"pt-4 text-[24px] font-bold leading-[28px] tracking-[4.8px]"}>IN LONDON, UK</p>
          </div>
          <div className={"ml-auto flex h-[56px] w-[146px] items-center justify-end gap-x-[13px] rounded-[28px] bg-white"}>
            <span className={"text-[16px] font-bold uppercase leading-[28px] tracking-[5px] text-[#808080]"}>
              {menuState === "initial" || menuState === "menuClosed" ? "More" : "Less"}
            </span>
            <button
              onClick={() => toggleMenu()}
              className={"hover:bg-light-gray mr-[9px] flex size-[40px] items-center justify-center rounded-full bg-dark-gray"}
            >
              {menuState === "initial" || menuState === "menuClosed" ? <ArrowDownIcon /> : <ArrowUpIcon />}
            </button>
          </div>
        </div>
      </div>
      <div className={`${subMenuVarients["base"]} ${subMenuVarients[menuState]}`}>
        <div className={"flex px-[165px] py-[74px]"}>
          <div>
            <div>
              <h6 className={"text-h6 uppercase text-dark-gray"}>Current Timezone</h6>
              <h2 className={"text-h2 pt-2.25 text-dark-gray"}>Europe/London</h2>
            </div>
            <div className={"pt-10.5"}>
              <h6 className={"text-h6 uppercase text-dark-gray"}>Day of the Year</h6>
              <h2 className={"text-h2 pt-2.25 text-dark-gray"}>250</h2>
            </div>
          </div>

          <div className={"ml-36.75 mr-23.5 w-0.25 bg-dark-gray"}></div>

          <div>
            <div>
              <h6 className={"text-h6 uppercase text-dark-gray"}>Day of the Week</h6>
              <h2 className={"text-h2 pt-2.25 text-dark-gray"}>5</h2>
            </div>
            <div className={"pt-10.5"}>
              <h6 className={"text-h6 uppercase text-dark-gray"}>Week Number</h6>
              <h2 className={"text-h2 pt-2.25 text-dark-gray"}>36</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
