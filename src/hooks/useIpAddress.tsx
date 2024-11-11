"use client";
import { useEffect, useState } from "react";

export function useIpAddress() {
  const [ipAddress, setIpAddress] = useState<string | null>(null);

  useEffect(() => {
    fetch("https://api.ipify.org/?format=json")
      .then((res) => res.json())
      .then((data) => {
        setIpAddress(data.ip);
      });
  }, []);

  return { ipAddress };
}
