import ArrowDownIcon from "@/components/icons/ArrowDownIcon";
import ArrowUpIcon from "@/components/icons/ArrowUpIcon";
import { MenuState } from "@/types/types";

type ToggleMenuProps = {
  menuState: MenuState;
  toggleMenu: () => void;
};
export default function ToggleMenu({ menuState, toggleMenu }: ToggleMenuProps) {
  return (
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
  );
}
