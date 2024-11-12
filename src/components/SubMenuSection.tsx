import type { MenuState } from "@/types/types";
import type { WorldTimeAPIResponse } from "@/types/types";

const subMenuVarients = {
  base: "bg-white/50 backdrop-blur-xl",
  initial: "lg:mt-[233px] translate-y-[65px] translate-y-[70px]",
  menuOpen: "translate-y-[33px] md:-translate-y-[-14px] lg:-translate-y-[35px] transition-all duration-1000",
  menuClosed: "mt-[233px] md:translate-y-[101px] translate-y-[70px] transition-all duration-1000",
};

type SubMenuContainerProps = {
  menuState: MenuState;
  data: any;
};

function getDayOfYearFromTimestamp(timestamp: number): String {
  const date = new Date(timestamp);
  const start = new Date(date.getFullYear(), 0, 0);
  const diff = date.getTime() - start.getTime();
  const oneDay = 1000 * 60 * 60 * 24;
  return String(Math.floor(diff / oneDay));
}

function getWeekNumberFromTimestamp(timestamp: number): String {
  const date = new Date(timestamp);
  const oneJan = new Date(date.getFullYear(), 0, 1);
  const numberOfDays = Math.floor((date.getTime() - oneJan.getTime()) / (24 * 60 * 60 * 1000));
  return String(Math.ceil((date.getDay() + 1 + numberOfDays) / 7));
}

function getWeekDayNumberFromTimestamp(timestamp: number): String {
  const date = new Date(timestamp);
  return String(date.getDay());
}

export default function SubMenuSection({ menuState, data }: SubMenuContainerProps) {
  const menuIndices = [0, 1];
  return (
    <section className={`${subMenuVarients["base"]} ${subMenuVarients[menuState]}`}>
      <div
        className={"space-y-4 px-[26px] py-[48px] md:flex md:gap-x-[80px] md:space-y-0 md:py-[119px] md:pl-[63px] lg:flex lg:px-[165px] lg:py-[74px]"}
      >
        {menuIndices.map((menu, index) => (
          <div key={index} className={"space-y-4 md:space-y-0"}>
            <div className={"flex items-center text-nowrap md:block lg:block"}>
              <h6 className={"text-h6 uppercase text-dark-gray md:text-h6-md lg:text-h6-lg"}>
                {index === 0 ? "Current Timezone" : "Day of the Week"}
              </h6>
              <h2 className={"ml-auto text-h2 text-dark-gray md:text-h2-md lg:pt-2.25 lg:text-h2-lg"}>
                {data && index === 0 ? data?.timeZone : getWeekDayNumberFromTimestamp(data?.dateTime)}
              </h2>
            </div>
            <div className={"flex text-nowrap md:block md:pt-[70px] lg:block lg:pt-10.5"}>
              <h6 className={"text-h6 uppercase text-dark-gray md:text-h6-md lg:text-h6-lg"}>{index === 0 ? "Day of the Year" : "Week Number"}</h6>
              <h2 className={"ml-auto text-h2 text-dark-gray md:text-h2-md lg:pt-2.25 lg:text-h2-lg"}>
                {data && index === 0 ? getDayOfYearFromTimestamp(data?.dateTime) : getWeekNumberFromTimestamp(data?.dateTime)}
              </h2>
            </div>
            {index === 0 && <div className={"ml-36.75 mr-23.5 hidden w-0.25 bg-dark-gray lg:block"}></div>}
          </div>
        ))}
      </div>
    </section>
  );
}
