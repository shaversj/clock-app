"use client";

import type { MenuState } from "@/types/types";
import RefreshIcon from "@/components/icons/RefreshIcon";
import useProgrammingQuote from "@/hooks/useProgrammingQuote";

const quoteVarients = {
  base: "flex gap-x-[15.67px] min-w-fit flex-wrap items-start text-mobile md:text-base font-normal text-white",
  initial: "",
  menuOpen: "min-w-fit lg:max-w-[540px] opacity-0 transition-all duration-[1500ms]",
  menuClosed: "min-w-fit lg:max-w-[540px] opacity-100 transition-all duration-[1000ms] ease-in",
};

type QuoteSectionProps = {
  menuState: MenuState;
};

export default function QuoteSection({ menuState }: QuoteSectionProps) {
  const { quoteData, fetchQuoteData } = useProgrammingQuote();

  return (
    <section className={`${quoteVarients["base"]} ${quoteVarients[menuState]}`}>
      <div className={"lg:max-w-[540px]"}>
        <p>{quoteData && quoteData.quote}</p>
        <p className={"pt-2 font-bold md:pt-[13px]"}>{quoteData && quoteData.author}</p>
      </div>
      <button onClick={fetchQuoteData} className={"md:pt-1"}>
        <RefreshIcon />
      </button>
    </section>
  );
}