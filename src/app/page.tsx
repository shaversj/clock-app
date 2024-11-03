"use client";

import SunIcon from "@/components/icons/SunIcon";
import ArrowDownIcon from "@/components/icons/ArrowDownIcon";
import { useState } from "react";
import ArrowUpIcon from "@/components/icons/ArrowUpIcon";
import RefreshIcon from "@/components/icons/RefreshIcon";

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
    base: "lg:w-[540px] grid grid-cols-[1fr,auto] text-mobile md:text-base font-normal text-white",
    initial: "",
    menuOpen: "w-[540px] opacity-0 transition-all duration-[1500ms]",
    menuClosed: "w-[540px] opacity-100 transition-all duration-[1000ms] ease-in",
  };

  const timeVarients = {
    base: "flex flex-col md:flex-row md:items-end",
    initial: "pt-[226.33px] md:pt-[388px] lg:pt-[233px]",
    menuOpen: "-translate-y-[5px] lg:-translate-y-[120px] transition-all duration-1000",
    menuClosed: "pt-[20px] translate-y-[233px] pb-[98px] transition-all duration-1000",
  };

  const subMenuVarients = {
    base: "bg-white/50 backdrop-blur-xl",
    initial: "lg:mt-[233px] translate-y-[70px]",
    menuOpen: "translate-y-[33px] lg:-translate-y-[70px] transition-all duration-1000",
    menuClosed: "mt-[233px] translate-y-[70px] transition-all duration-1000",
  };

  return (
    <div
      className={
        "h-[667px] w-[375px] overflow-hidden bg-black/40 bg-[url('/images/mobile/bg-image-daytime.jpg')] bg-auto pt-[31.67px] bg-blend-overlay md:pt-[80px] lg:h-[800px] lg:w-[1440px] lg:bg-[url('/images/desktop/bg-image-daytime.jpg')] lg:pt-[56px]"
      }
    >
      <div className="px-[26px] lg:px-[165px]">
        <div className={`${quoteVarients["base"]} ${quoteVarients[menuState]}`}>
          <div>
            <p>
              “The science of operations, as derived from mathematics more especially, is a science of itself, and has its own abstract truth and
              value.”
            </p>
            <p className={"pt-2 font-bold md:pt-[13px]"}>Ada Lovelace</p>
          </div>
          <button className={"size-[18px]"}>
            <RefreshIcon />
          </button>
        </div>

        <div className={`${timeVarients["base"]} ${timeVarients[menuState]}`}>
          <div>
            <div className={"flex items-center gap-x-4"}>
              <SunIcon />
              <h4 className={"text-h4-mobile md:text-h4 uppercase"}>
                GOOD MORNING<span className={"hidden md:block"}>, IT’S CURRENTLY</span>
              </h4>
            </div>

            <div className={"flex items-baseline pt-4"}>
              <div className={"flex items-end"}>
                <h1 className={"text-h1 md:text-h1-lg"}>11:37</h1>
              </div>
              <p className={"text-abbr md:text-abbr-md font-light"}>BST</p>
            </div>
            <h3 className={"text-h3 lg:text-h3-lg pt-4"}>IN LONDON, UK</h3>
          </div>
          <div
            className={
              "mt-[48px] flex h-[39px] w-[115px] items-center justify-end gap-x-[10px] rounded-[28px] bg-white md:ml-auto md:mt-0 md:h-[56px] md:w-[146px] md:gap-x-[13px]"
            }
          >
            <span className={"text-button md:text-button-md font-bold uppercase text-[#808080]"}>
              {menuState === "initial" || menuState === "menuClosed" ? "More" : "Less"}
            </span>
            <button
              onClick={() => toggleMenu()}
              className={
                "hover:bg-light-gray mr-[4px] flex size-[32px] items-center justify-center rounded-full bg-dark-gray md:mr-[9px] md:size-[40px]"
              }
            >
              {menuState === "initial" || menuState === "menuClosed" ? <ArrowDownIcon /> : <ArrowUpIcon />}
            </button>
          </div>
        </div>
      </div>
      <div className={`${subMenuVarients["base"]} ${subMenuVarients[menuState]} `}>
        <div className={"space-y-4 px-[26px] py-[48px] md:flex md:space-y-0 md:pl-[63px] lg:flex lg:px-[165px] lg:py-[74px]"}>
          <div className={"space-y-4 md:space-y-0"}>
            <div className={"flex items-center text-nowrap md:block lg:block"}>
              <h6 className={"text-h6 md:text-h6-md lg:text-h6-lg uppercase text-dark-gray"}>Current Timezone</h6>
              <h2 className={"text-h2 md:text-h2-md lg:text-h2-lg lg:pt-2.25 ml-auto text-dark-gray"}>Europe/London</h2>
            </div>
            <div className={"lg:pt-10.5 flex text-nowrap md:block md:pt-[48px] lg:block"}>
              <h6 className={"text-h6 md:text-h6-md lg:text-h6-lg uppercase text-dark-gray"}>Day of the Year</h6>
              <h2 className={"text-h2 md:text-h2-md lg:text-h2-lg lg:pt-2.25 ml-auto text-dark-gray"}>250</h2>
            </div>
          </div>

          <div className={"ml-36.75 mr-23.5 w-0.25 hidden bg-dark-gray md:block lg:block"}></div>

          <div className={"space-y-4 md:space-y-0"}>
            <div className={"flex text-nowrap md:block lg:block"}>
              <h6 className={"text-h6 md:text-h6-md lg:text-h6-lg uppercase text-dark-gray"}>Day of the Week</h6>
              <h2 className={"text-h2 md:text-h2-md lg:text-h2-lg lg:pt-2.25 ml-auto text-dark-gray"}>5</h2>
            </div>
            <div className={"lg:pt-10.5 flex text-nowrap md:block md:pt-[48px] lg:block"}>
              <h6 className={"text-h6 md:text-h6-md lg:text-h6-lg uppercase text-dark-gray"}>Week Number</h6>
              <h2 className={"text-h2 md:text-h2-md lg:text-h2-lg lg:pt-2.25 ml-auto text-dark-gray"}>36</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
