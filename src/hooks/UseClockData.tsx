import { useState, useEffect } from "react";
import type { IpBaseResponse, IpifyResponse, MenuState, TimeAPIResponse } from "@/types/types";

export function useClockData() {
  const [ipData, setIpData] = useState<IpifyResponse | undefined>(undefined);
  const [timeData, setTimeData] = useState<TimeAPIResponse | undefined>(undefined);
  const [locationData, setLocationData] = useState<IpBaseResponse | undefined>(undefined);
  const [isDayTime, setIsDayTime] = useState<boolean>(true);

  useEffect(() => {
    fetch("https://api.ipify.org/?format=json")
      .then((res) => res.json())
      .then((data) => {
        setIpData(data);
      });
  }, []);

  useEffect(() => {
    if (ipData) {
      fetch(`https://timeapi.io/api/time/current/ip?ipAddress=${ipData.ip}`)
        .then((res) => res.json())
        .then((data) => {
          setTimeData(data);
        });
    }
  }, [ipData]);

  useEffect(() => {
    if (timeData && ipData) {
      fetch(`https://api.ipbase.com/v2/info?ip=${ipData.ip}`)
        .then((res) => res.json())
        .then((data) => {
          setLocationData(data);
        });
    }
  }, [timeData]);

  useEffect(() => {
    if (timeData) {
      setIsDayTime(timeData.hour < 18 && timeData.hour >= 6);
    }
  }, [timeData]);

  return { timeData, locationData, isDayTime };
}
