import type { MenuState } from "@/types/types";
import RefreshIcon from "@/components/icons/RefreshIcon";

const quoteVarients = {
  base: "lg:w-[540px] grid grid-cols-[1fr,auto] items-start text-mobile md:text-base font-normal text-white",
  initial: "",
  menuOpen: "w-[540px] opacity-0 transition-all duration-[1500ms]",
  menuClosed: "w-[540px] opacity-100 transition-all duration-[1000ms] ease-in",
};

type QuoteSectionProps = {
  menuState: MenuState;
};

export default function QuoteSection({ menuState }: QuoteSectionProps) {
  return (
    <section className={`${quoteVarients["base"]} ${quoteVarients[menuState]}`}>
      <div className={""}>
        <p>
          “The science of operations, as derived from mathematics more especially, is a science of itself, and has its own abstract truth and value.”
        </p>
        <p className={"md:pt-[13px] pt-2 font-bold"}>Ada Lovelace</p>
      </div>
      <button className={"md:pt-1"}>
        <RefreshIcon />
      </button>
    </section>
  );
}
