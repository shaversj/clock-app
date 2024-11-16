"use client";

import type { MenuState, ProgrammingQuoteAPIResponse } from "@/types/types";
import RefreshIcon from "@/components/icons/RefreshIcon";
import { useEffect, useState } from "react";

const quoteVarients = {
  base: "relative flex gap-x-[0.979rem] min-w-fit flex-wrap items-start text-mobile md:text-base font-normal text-white",
  initial: "",
  menuOpen: "min-w-fit lg:max-w-[33.75rem] opacity-0 transition-all duration-[1500ms] pointer-events-none",
  menuClosed: "min-w-fit lg:max-w-[33.75rem] opacity-100 transition-all duration-[1000ms] ease-in",
};

type QuoteSectionProps = {
  menuState: MenuState;
};

export default function QuoteDisplay({ menuState }: QuoteSectionProps) {
  const [quoteData, setQuoteData] = useState<ProgrammingQuoteAPIResponse | null>(null);

  async function fetchQuoteData() {
    const response = await fetch("https://programming-quotesapi.vercel.app/api/random").then((res) => res.json());
    setQuoteData(response);
  }

  useEffect(() => {
    fetchQuoteData();
  }, []);

  return (
    <section className={`${quoteVarients["base"]} ${quoteVarients[menuState]}`}>
      <div className={"lg:max-w-[33.75rem]"}>
        <p>
          {quoteData
            ? quoteData.quote
            : "“The science of operations, as derived from mathematics more especially, is a science of itself, and has its own abstract truth and value.”"}
        </p>
        <p className={"pt-2 font-bold md:pt-[0.813rem]"}>{quoteData ? quoteData.author : "Ada Lovelace"}</p>
      </div>
      <button onClick={fetchQuoteData} className={"md:pt-1"}>
        <RefreshIcon />
      </button>
    </section>
  );
}
