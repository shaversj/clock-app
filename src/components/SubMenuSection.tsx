import type { MenuState } from "@/types/types";
import type { WorldTimeAPIData } from "@/types/types";

const subMenuVarients = {
  base: "bg-white/50 backdrop-blur-xl",
  initial: "lg:mt-[233px] translate-y-[65px] translate-y-[70px]",
  menuOpen: "translate-y-[33px] md:-translate-y-[-14px] lg:-translate-y-[35px] transition-all duration-1000",
  menuClosed: "mt-[233px] md:translate-y-[101px] translate-y-[70px] transition-all duration-1000",
};

type SubMenuContainerProps = {
  menuState: MenuState;
  data: WorldTimeAPIData;
};

export default function SubMenuSection({ menuState, data }: SubMenuContainerProps) {
  const menuIndices = [0, 1];
  return (
    <section className={`${subMenuVarients["base"]} ${subMenuVarients[menuState]}`}>
      <div
        className={"md:flex md:space-y-0 md:pl-[63px] md:py-[119px] md:gap-x-[80px] space-y-4 px-[26px] py-[48px] lg:flex lg:px-[165px] lg:py-[74px]"}
      >
        {menuIndices.map((menu, index) => (
          <div key={index} className={"md:space-y-0 space-y-4"}>
            <div className={"md:block flex items-center text-nowrap lg:block"}>
              <h6 className={"md:text-h6-md text-h6 uppercase text-dark-gray lg:text-h6-lg"}>
                {index === 0 ? "Current Timezone" : "Day of the Week"}
              </h6>
              <h2 className={"md:text-h2-md ml-auto text-h2 text-dark-gray lg:pt-2.25 lg:text-h2-lg"}>
                {index === 0 ? data.timezone : data.day_of_week}
              </h2>
            </div>
            <div className={"md:block md:pt-[70px] flex text-nowrap lg:block lg:pt-10.5"}>
              <h6 className={"md:text-h6-md text-h6 uppercase text-dark-gray lg:text-h6-lg"}>{index === 0 ? "Day of the Year" : "Week Number"}</h6>
              <h2 className={"md:text-h2-md ml-auto text-h2 text-dark-gray lg:pt-2.25 lg:text-h2-lg"}>
                {index === 0 ? data.day_of_year : data.week_number}
              </h2>
            </div>
            {index === 0 && <div className={"ml-36.75 mr-23.5 hidden w-0.25 bg-dark-gray lg:block"}></div>}
          </div>
        ))}
      </div>
    </section>
  );
}
