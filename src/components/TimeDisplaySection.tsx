import type { MenuState, WorldTimeAPIResponse } from "@/types/types";
import SunIcon from "@/components/icons/SunIcon";
import ArrowDownIcon from "@/components/icons/ArrowDownIcon";
import ArrowUpIcon from "@/components/icons/ArrowUpIcon";

// "pt-[226.33px] md:pt-[388px] lg:pt-[233px]"
const timeVarients = {
  base: "flex flex-col md:flex-col md:justify-start lg:flex-row lg:items-end lg:justify-between",
  initial: "absolute lg:pt-[358px]",
  menuOpen: "absolute -translate-y-[5px] md:-translate-y-[50px] lg:-translate-y-[0px] transition-all duration-1000",
  menuClosed: "absolute lg:pt-[358px] translate-y-[0px] transition-all duration-1000",
};

type TimeDisplaySectionProps = {
  menuState: MenuState;
  data: WorldTimeAPIResponse;
  toggleMenu: () => void;
};

export default function TimeDisplaySection({ menuState, data, toggleMenu }: TimeDisplaySectionProps) {
  return (
    <div className={`${timeVarients["base"]} ${timeVarients[menuState]} w-full px-[26px] md:px-[64px] lg:px-[165px]`}>
      <div>
        <div className={"flex items-center gap-x-4"}>
          <SunIcon />
          <h4 className={"text-h4-mobile uppercase md:text-h4"}>
            GOOD MORNING<span className={"hidden md:inline-block"}>, IT’S CURRENTLY</span>
          </h4>
        </div>

        <div className={"flex items-baseline pt-4 md:pt-0 lg:pt-4"}>
          <div className={"flex items-end"}>
            <h1 className={"text-h1 md:text-h1-md lg:text-h1-lg"}>
              {new Date(data.datetime).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", hour12: false })}
            </h1>
          </div>
          <p className={"text-abbr font-light md:text-abbr-md lg:pl-[11px] lg:text-abbr-lg"}>BST</p>
        </div>
        <h3 className={"pt-4 text-h3 md:pt-0 md:text-h3-md lg:pt-4 lg:text-h3-lg"}>IN LONDON, UK</h3>
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
    </div>
  );
}
