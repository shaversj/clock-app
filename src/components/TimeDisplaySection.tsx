import type { MenuState, WorldTimeAPIData } from "@/types/types";
import SunIcon from "@/components/icons/SunIcon";
import ArrowDownIcon from "@/components/icons/ArrowDownIcon";
import ArrowUpIcon from "@/components/icons/ArrowUpIcon";

const timeVarients = {
  base: "flex flex-col md:flex-col md:justify-start lg:flex-row lg:items-end lg:justify-between",
  initial: "pt-[226.33px] md:pt-[388px] lg:pt-[233px]",
  menuOpen: "-translate-y-[5px] md:-translate-y-[50px] lg:-translate-y-[120px] transition-all duration-1000",
  menuClosed: "pt-[20px] translate-y-[233px] pb-[98px] transition-all duration-1000",
};

type TimeDisplaySectionProps = {
  menuState: MenuState;
  data: WorldTimeAPIData;
  toggleMenu: () => void;
};

export default function TimeDisplaySection({ menuState, data, toggleMenu }: TimeDisplaySectionProps) {
  return (
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
            <h1 className={"md:text-h1-md text-h1 lg:text-h1-lg"}>
              {new Date(data.datetime).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", hour12: false })}
            </h1>
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
          className={"md:mr-[9px] md:size-[40px] mr-[4px] flex size-[32px] items-center justify-center rounded-full bg-dark-gray hover:bg-light-gray"}
        >
          {menuState === "initial" || menuState === "menuClosed" ? <ArrowDownIcon /> : <ArrowUpIcon />}
        </button>
      </div>
    </div>
  );
}
