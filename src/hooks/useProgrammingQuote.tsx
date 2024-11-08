import { useState, useEffect } from "react";
import type { ProgrammingQuoteAPIResponse } from "@/types/types";

export default function useProgrammingQuote() {
  const [quoteData, setQuoteData] = useState<ProgrammingQuoteAPIResponse | null>(null);

  async function fetchQuoteData() {
    const response = await fetch("https://programming-quotesapi.vercel.app/api/random").then((res) => res.json());
    setQuoteData(response);
  }

  useEffect(() => {
    fetchQuoteData();
  }, []);

  return { quoteData, fetchQuoteData };
}
