import type { WorldTimeAPIResponse, IpBaseResponse } from "@/types/types";

export async function fetchIpAddress(): Promise<any> {
  return new Promise((resolve, reject) => {
    fetch("https://api.ipify.org/?format=json")
      .then((res) => res.json())
      .then((data) => {
        resolve(data);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

export async function fetchTimeData(clientIp: string): Promise<WorldTimeAPIResponse> {
  // const response = await fetch(`https://worldtimeapi.org/api/ip/${clientIp}`);
  // return response.json();
  //
  return new Promise((resolve, reject) => {
    fetch(`https://worldtimeapi.org/api/ip/${clientIp}`)
      .then((res) => res.json())
      .then((data) => {
        resolve(data);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

export async function fetchTimefromTimeAPI(clientIp: string): Promise<any> {
  return new Promise((resolve, reject) => {
    fetch(`https://timeapi.io/api/time/current/ip?ipAddress=${clientIp}`)
      .then((res) => res.json())
      .then((data) => {
        resolve(data);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

export async function fetchLocationData(clientIp: string): Promise<IpBaseResponse> {
  console.log(clientIp);
  return new Promise((resolve, reject) => {
    fetch(`https://api.ipbase.com/v2/info?ip=${clientIp}`)
      .then((res) => res.json())
      .then((data) => {
        resolve(data);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

async function getShortTimeZone(timeZone: string): Promise<string> {
  return new Intl.DateTimeFormat("en-US", {
    timeZone: timeZone,
    timeZoneName: "short",
  })
    .format(new Date())
    .split("")[1];
}

export async function TimeAndLocationServer({ clientIp }: { clientIp: string }) {
  return <span></span>;
}
