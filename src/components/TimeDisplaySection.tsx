"use client";

import type { MenuState } from "@/types/types";
import SunIcon from "@/components/icons/SunIcon";
import ArrowDownIcon from "@/components/icons/ArrowDownIcon";
import ArrowUpIcon from "@/components/icons/ArrowUpIcon";
import SubMenuSection from "@/components/SubMenuSection";

const timeVarients = {
  base: "flex flex-col md:flex-col md:justify-start lg:flex-row lg:items-end lg:justify-between",
  initial: "absolute pt-[323px] md:pt-[510px] lg:pt-[358px]",
  menuOpen: "absolute translate-y-[75px] md:-translate-y-[50px] lg:-translate-y-[0px] transition-all duration-1000",
  menuClosed: "absolute pt-[323px] md:pt-[510px] lg:pt-[358px] translate-y-[0px] transition-all duration-1000",
};

function getShortTimeZone(timeZone: string): string {
  return new Intl.DateTimeFormat("en-US", {
    timeZone: timeZone,
    timeZoneName: "short",
  })
    .format(new Date())
    .split(" ")[1];
}

type TimeDisplaySectionProps = {
  menuState: MenuState;
  timeData: any;
  locationData: any;
  toggleMenu: () => void;
};

export default function TimeDisplaySection({ menuState, timeData, locationData, toggleMenu }: TimeDisplaySectionProps) {
  return (
    <div className={`${timeVarients["base"]} ${timeVarients[menuState]} w-full px-[26px] md:px-[64px] lg:px-[165px]`}>
      <div>
        <div className={"flex items-center gap-x-4"}>
          <SunIcon />
          <h4 className={"text-h4-mobile uppercase md:text-h4"}>
            GOOD MORNING<span className={"hidden md:inline-block"}>, IT’S CURRENTLY</span>
          </h4>
        </div>

        {timeData && (
          <>
            <div className={"flex items-baseline pt-4 md:pt-0 lg:pt-4"}>
              <div className={"flex items-end"}>
                <h1 className={"text-h1 md:text-h1-md lg:text-h1-lg"}>
                  {timeData &&
                    new Date(timeData.dateTime).toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                      hour12: false,
                    })}
                </h1>
              </div>
              <p className={"text-abbr font-light uppercase md:text-abbr-md lg:pl-[11px] lg:text-abbr-lg"}>
                {timeData && getShortTimeZone(timeData.timeZone)}
              </p>
            </div>
            <h3 className={"pt-4 text-h3 md:pt-0 md:text-h3-md lg:pt-4 lg:text-h3-lg"}>
              IN{" "}
              <span className={"uppercase"}>
                {" "}
                {locationData && locationData.data.location.city.name
                  ? locationData.data.location.city.name + "," + locationData.data.location.region.name
                  : locationData && locationData.data.location.region.name}
              </span>{" "}
            </h3>
          </>
        )}
      </div>
      <div
        className={
          "mt-[48px] flex h-[39px] w-[115px] items-center justify-end gap-x-[10px] rounded-[28px] bg-white md:mt-[80px] md:h-[56px] md:w-[146px] md:gap-x-[13px]"
        }
      >
        <span className={"text-button font-bold uppercase text-[#808080] md:text-button-md"}>
          {menuState === "initial" || menuState === "menuClosed" ? "More" : "Less"}
        </span>
        <button
          onClick={() => toggleMenu()}
          className={"mr-[4px] flex size-[32px] items-center justify-center rounded-full bg-dark-gray hover:bg-light-gray md:mr-[9px] md:size-[40px]"}
        >
          {menuState === "initial" || menuState === "menuClosed" ? <ArrowDownIcon /> : <ArrowUpIcon />}
        </button>
      </div>

      <SubMenuSection menuState={menuState} data={timeData} />
    </div>
  );
}
