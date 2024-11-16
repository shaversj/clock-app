"use client";

import type { IpBaseResponse, MenuState, TimeAPIResponse } from "@/types/types";
import SunIcon from "@/components/icons/SunIcon";
import MoonIcon from "@/components/icons/MoonIcon";

const timeVarients = {
  base: "flex flex-col md:flex-col md:justify-start lg:flex-row lg:items-end lg:justify-between",
  initial: "absolute pt-[323px] md:pt-[510px] lg:pt-[358px]",
  menuOpen: "absolute translate-y-[75px] md:-translate-y-[50px] lg:-translate-y-[0px] transition-all duration-1000",
  menuClosed: "absolute pt-[323px] md:pt-[510px] lg:pt-[358px] translate-y-[0px] transition-all duration-1000",
};

function getShortTimeZone(timeZone: string): string {
  return new Intl.DateTimeFormat("en-US", {
    timeZone: timeZone,
    timeZoneName: "short",
  })
    .format(new Date())
    .split(" ")[1];
}

function getGreeting(hour: number): string {
  if (hour >= 5 && hour < 12) {
    return "GOOD MORNING";
  } else if (hour >= 12 && hour < 18) {
    return "GOOD AFTERNOON";
  } else {
    return "GOOD EVENING";
  }
}

type TimeDisplaySectionProps = {
  menuState: MenuState;
  timeData?: TimeAPIResponse;
  locationData?: IpBaseResponse;
  isDayTime: boolean;
  children?: React.ReactNode;
};

export default function TimeDisplay({ menuState, timeData, locationData, isDayTime, children }: TimeDisplaySectionProps) {
  return (
    <div className={`${timeVarients["base"]} ${timeVarients[menuState]} w-full px-[26px] md:px-[64px] lg:px-[165px]`}>
      <section>
        <div className={"flex items-center gap-x-4"}>
          {isDayTime ? <SunIcon /> : <MoonIcon />}{" "}
          <h4 className={"text-h4-mobile uppercase text-white md:text-h4"}>
            {timeData ? getGreeting(timeData.hour) : "GOOD MORNING"}
            <span className={"hidden md:inline-block"}>, IT’S CURRENTLY</span>
          </h4>
        </div>

        <>
          <div className={"flex items-baseline pt-4 text-white md:pt-0 lg:pt-4"}>
            <div className={"flex items-end"}>
              <h1 className={"text-h1 md:text-h1-md lg:text-h1-lg"}>
                {timeData
                  ? new Date(timeData.dateTime).toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                      hour12: false,
                    })
                  : "11:37"}
              </h1>
            </div>
            <p className={"text-abbr font-light uppercase md:text-abbr-md lg:pl-[11px] lg:text-abbr-lg"}>
              {timeData ? getShortTimeZone(timeData.timeZone) : "BST"}
            </p>
          </div>
          <h3 className={"pt-4 text-h3 text-white md:pt-0 md:text-h3-md lg:pt-4 lg:text-h3-lg"}>
            IN{" "}
            <span className={"uppercase"}>
              {" "}
              {locationData
                ? locationData.data.location.city.name
                  ? locationData.data.location.city.name + "," + locationData.data.location.region.name
                  : locationData && locationData.data.location.region.name
                : "LONDON, UK"}
            </span>{" "}
          </h3>
        </>
      </section>
      {children}
    </div>
  );
}
