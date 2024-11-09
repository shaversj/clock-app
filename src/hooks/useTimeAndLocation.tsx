"use client";

import { useState, useEffect } from "react";
import type { WorldTimeAPIResponse, IpBaseResponse } from "@/types/types";

export function useTimeAndLocation() {
  const [timeData, setTimeData] = useState<WorldTimeAPIResponse | null>(null);
  const [locationData, setLocationData] = useState<IpBaseResponse | null>(null);

  async function fetchTimeData() {
    const response = await fetch("https://worldtimeapi.org/api/ip", {
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    }).then((res) => res.json());
    console.log(`response:`, response);
    setTimeData(response);
  }

  useEffect(() => {
    fetchTimeData();
  }, []);

  useEffect(() => {
    if (timeData) {
      async function fetchLocationData() {
        if (timeData?.client_ip) {
          const response = await fetch(`https://api.ipbase.com/v2/info?ip=${timeData.client_ip}`, {
            mode: "no-cors",
            headers: {
              "Access-Control-Allow-Origin": "*",
            },
          }).then((res) => res.json());
          setLocationData(response);
        }
      }
      fetchLocationData();
    }
  }, [timeData]);

  return { timeData, locationData };
}
