import type { MenuState, TimeAPIResponse } from "@/types/types";

const subMenuVarients = {
  base: "absolute backdrop-blur-xl -ml-[1.625rem] pr-[100vw] md:-mx-[4rem] md:pr-[100vw] lg:-mx-[10.313rem] lg:pr-[100vw]",
  initial: "md:mt-[51.563rem] mt-[40.625rem] translate-y-[31.25rem] opacity-0",
  menuOpen: "translate-y-[19.063rem] md:translate-y-[34.375rem] pb-[100vw] lg:translate-y-[28.625rem] transition-all duration-1000 opacity-100",
  menuClosed: "mt-[40.625rem] md:translate-y-[10.938rem] translate-y-[4.375rem] lg:translate-y-[31.25rem] transition-all duration-1000 opacity-0",
};

function getDayOfYearFromTimestamp(timestamp: string): string {
  const date = new Date(timestamp);
  const start = new Date(date.getFullYear(), 0, 0);
  const diff = date.getTime() - start.getTime();
  const oneDay = 1000 * 60 * 60 * 24;
  return String(Math.floor(diff / oneDay));
}

function getWeekNumberFromTimestamp(timestamp: string): string {
  const date = new Date(timestamp);
  const oneJan = new Date(date.getFullYear(), 0, 1);
  const numberOfDays = Math.floor((date.getTime() - oneJan.getTime()) / (24 * 60 * 60 * 1000));
  return String(Math.ceil((date.getDay() + 1 + numberOfDays) / 7));
}

function getWeekDayNumberFromTimestamp(timestamp: string): string {
  const date = new Date(timestamp);
  return String(date.getDay());
}

type SubMenuContainerProps = {
  menuState: MenuState;
  timeData?: TimeAPIResponse;
  isDayTime: boolean;
};

export default function SubMenuSection({ menuState, timeData, isDayTime }: SubMenuContainerProps) {
  const menuIndices = [0, 1];
  return (
    <section className={`${subMenuVarients["base"]} ${subMenuVarients[menuState]} ${isDayTime ? "bg-white/50" : "bg-black/75"}`}>
      <div
        className={
          "space-y-4 px-[1.625rem] py-[3rem] md:flex md:gap-x-[5rem] md:space-y-0 md:py-[7.438rem] md:pl-[3.938rem] lg:flex lg:px-[10.313rem] lg:py-[4.625rem]"
        }
      >
        {menuIndices.map((menu, index) => (
          <div key={index} className={`space-y-4 md:space-y-0 ${isDayTime ? "text-dark-gray" : "text-white"}`}>
            <div className={"flex items-center text-nowrap md:block lg:block"}>
              <h6 className={`text-h6 uppercase md:text-h6-md lg:text-h6-lg`}>{index === 0 ? "Current Timezone" : "Day of the Week"}</h6>
              <h2 className={"ml-auto text-h2 md:text-h2-md lg:pt-2.25 lg:text-h2-lg"}>
                {timeData && index === 0 ? timeData?.timeZone : getWeekDayNumberFromTimestamp(timeData?.dateTime ?? "")}
              </h2>
            </div>
            <div className={"flex text-nowrap md:block md:pt-[4.375rem] lg:block lg:pt-10.5"}>
              <h6 className={"text-h6 uppercase md:text-h6-md lg:text-h6-lg"}>{index === 0 ? "Day of the Year" : "Week Number"}</h6>
              <h2 className={"ml-auto text-h2 md:text-h2-md lg:pt-2.25 lg:text-h2-lg"}>
                {timeData && index === 0 ? getDayOfYearFromTimestamp(timeData?.dateTime) : getWeekNumberFromTimestamp(timeData?.dateTime ?? "")}
              </h2>
            </div>
            {index === 0 && <div className={`ml-36.75 mr-23.5 hidden w-0.25 lg:block ${isDayTime ? "bg-dark-gray" : "bg-white"}`}></div>}
          </div>
        ))}
      </div>
    </section>
  );
}
