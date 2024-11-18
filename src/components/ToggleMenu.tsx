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
        "mt-[3rem] flex h-[2.438rem] w-[7.188rem] items-center justify-end gap-x-[0.625rem] rounded-[1.75rem] bg-white md:mt-[5rem] md:h-[3.5rem] md:w-[9.125rem] md:gap-x-[0.813rem]"
      }
    >
      <span className={"text-button font-bold uppercase text-[#808080] md:text-button-md"}>
        {menuState === "initial" || menuState === "menuClosed" ? "More" : "Less"}
      </span>
      <button
        aria-label="Toggle Menu"
        onClick={() => toggleMenu()}
        className={
          "mr-[0.25rem] flex size-[2rem] items-center justify-center rounded-full bg-dark-gray hover:bg-light-gray md:mr-[0.563rem] md:size-[2.5rem]"
        }
      >
        {menuState === "initial" || menuState === "menuClosed" ? <ArrowDownIcon /> : <ArrowUpIcon />}
      </button>
    </div>
  );
}
