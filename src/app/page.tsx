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
    base: "lg:w-[540px] grid grid-cols-[1fr,auto] items-start text-mobile md:text-base font-normal text-white",
    initial: "",
    menuOpen: "w-[540px] opacity-0 transition-all duration-[1500ms]",
    menuClosed: "w-[540px] opacity-100 transition-all duration-[1000ms] ease-in",
  };

  const timeVarients = {
    base: "flex flex-col md:flex-col md:justify-start lg:flex-row lg:items-end lg:justify-between",
    initial: "pt-[226.33px] md:pt-[388px] lg:pt-[233px]",
    menuOpen: "-translate-y-[5px] md:-translate-y-[50px] lg:-translate-y-[120px] transition-all duration-1000",
    menuClosed: "pt-[20px] translate-y-[233px] pb-[98px] transition-all duration-1000",
  };

  const subMenuVarients = {
    base: "bg-white/50 backdrop-blur-xl",
    initial: "lg:mt-[233px] translate-y-[65px] translate-y-[70px]",
    menuOpen: "translate-y-[33px] md:-translate-y-[-14px] lg:-translate-y-[35px] transition-all duration-1000",
    menuClosed: "mt-[233px] md:translate-y-[101px] translate-y-[70px] transition-all duration-1000",
  };

  return (
    <div
      className={
        "md:w-[768px] md:h-[1024] md:pt-[80px] md:bg-[url('/images/tablet/bg-image-daytime.jpg')] h-[667px] w-[375px] overflow-hidden bg-black/40 bg-[url('/images/mobile/bg-image-daytime.jpg')] bg-auto pt-[31.67px] bg-blend-overlay lg:h-[800px] lg:w-[1440px] lg:bg-[url('/images/desktop/bg-image-daytime.jpg')] lg:pt-[56px]"
      }
    >
      <div className="md:px-[64px] px-[26px] lg:px-[165px]">
        <div className={`${quoteVarients["base"]} ${quoteVarients[menuState]}`}>
          <div className={""}>
            <p>
              “The science of operations, as derived from mathematics more especially, is a science of itself, and has its own abstract truth and
              value.”
            </p>
            <p className={"md:pt-[13px] pt-2 font-bold"}>Ada Lovelace</p>
          </div>
          <button className={"md:pt-1"}>
            <RefreshIcon />
          </button>
        </div>

        <div className={`${timeVarients["base"]} ${timeVarients[menuState]}`}>
          <div>
            <div className={"flex items-center gap-x-4"}>
              <SunIcon />
              <h4 className={"md:text-h4 text-h4-mobile uppercase"}>
                GOOD MORNING<span className={"md:inline-block hidden"}>, IT’S CURRENTLY</span>
              </h4>
            </div>

            <div className={"md:pt-0 flex items-baseline pt-4"}>
              <div className={"flex items-end"}>
                <h1 className={"md:text-h1-md text-h1 lg:text-h1-lg"}>11:37</h1>
              </div>
              <p className={"md:text-abbr-md lg:text-abbr-lg text-abbr font-light"}>BST</p>
            </div>
            <h3 className={"md:text-h3-md md:pt-0 pt-4 text-h3 lg:text-h3-lg"}>IN LONDON, UK</h3>
          </div>
          <div
            className={
              "md:mt-[80px] md:h-[56px] md:w-[146px] md:gap-x-[13px] mt-[48px] flex h-[39px] w-[115px] items-center justify-end gap-x-[10px] rounded-[28px] bg-white"
            }
          >
            <span className={"md:text-button-md text-button font-bold uppercase text-[#808080]"}>
              {menuState === "initial" || menuState === "menuClosed" ? "More" : "Less"}
            </span>
            <button
              onClick={() => toggleMenu()}
              className={
                "md:mr-[9px] md:size-[40px] mr-[4px] flex size-[32px] items-center justify-center rounded-full bg-dark-gray hover:bg-light-gray"
              }
            >
              {menuState === "initial" || menuState === "menuClosed" ? <ArrowDownIcon /> : <ArrowUpIcon />}
            </button>
          </div>
        </div>
      </div>
      <div className={`${subMenuVarients["base"]} ${subMenuVarients[menuState]} `}>
        <div
          className={
            "md:flex md:space-y-0 md:pl-[63px] md:py-[119px] md:gap-x-[80px] space-y-4 px-[26px] py-[48px] lg:flex lg:px-[165px] lg:py-[74px]"
          }
        >
          <div className={"md:space-y-0 space-y-4"}>
            <div className={"md:block flex items-center text-nowrap lg:block"}>
              <h6 className={"md:text-h6-md text-h6 uppercase text-dark-gray lg:text-h6-lg"}>Current Timezone</h6>
              <h2 className={"md:text-h2-md ml-auto text-h2 text-dark-gray lg:pt-2.25 lg:text-h2-lg"}>Europe/London</h2>
            </div>
            <div className={"md:block md:pt-[70px] flex text-nowrap lg:block lg:pt-10.5"}>
              <h6 className={"md:text-h6-md text-h6 uppercase text-dark-gray lg:text-h6-lg"}>Day of the Year</h6>
              <h2 className={"md:text-h2-md ml-auto text-h2 text-dark-gray lg:pt-2.25 lg:text-h2-lg"}>250</h2>
            </div>
          </div>

          <div className={"ml-36.75 mr-23.5 hidden w-0.25 bg-dark-gray lg:block"}></div>

          <div className={"md:space-y-0 h-full space-y-4"}>
            <div className={"md:block flex text-nowrap lg:block"}>
              <h6 className={"md:text-h6-md text-h6 uppercase text-dark-gray lg:text-h6-lg"}>Day of the Week</h6>
              <h2 className={"md:text-h2-md ml-auto text-h2 text-dark-gray lg:pt-2.25 lg:text-h2-lg"}>5</h2>
            </div>
            <div className={"md:block md:pt-[70px] flex text-nowrap lg:block lg:pt-10.5"}>
              <h6 className={"md:text-h6-md text-h6 uppercase text-dark-gray lg:text-h6-lg"}>Week Number</h6>
              <h2 className={"md:text-h2-md ml-auto text-h2 text-dark-gray lg:pt-2.25 lg:text-h2-lg"}>36</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
