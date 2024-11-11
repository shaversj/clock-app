import type { MenuState } from "@/types/types";

export function getMenuState(prevState: MenuState): MenuState {
  if (prevState === "initial" || prevState === "menuClosed") {
    return "menuOpen";
  } else {
    return "menuClosed";
  }
}

// export async function fetchTimeData(clientIp: string): Promise<Response> {
//   return fetch(`https://worldtimeapi.org/api/ip/${clientIp}`);
// }

export async function fetchTimeData(clientIp: string): Promise<Response> {
  return fetch(`https://timeapi.io/api/time/current/ip?ipAddress=${clientIp}`);
}

export async function fetchLocationData(clientIp: string): Promise<Response> {
  return fetch(`https://api.ipbase.com/v2/info?ip=${clientIp}`);
}
