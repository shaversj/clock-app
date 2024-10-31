import SunIcon from "@/components/icons/SunIcon";
import ArrowDownIcon from "@/components/icons/ArrowDownIcon";

export default function Home() {
  return (
    <div className={"min-h-screen bg-black/40 bg-[url('/images/bg-image-daytime.jpg')] bg-cover bg-no-repeat bg-blend-overlay"}>
      <div className="px-[165px] pt-[56px]">
        <div className={"font-inter w-[540px] text-base font-normal text-white"}>
          <p>
            “The science of operations, as derived from mathematics more especially, is a science of itself, and has its own abstract truth and
            value.”
          </p>
          <p className={"pt-[13px] font-bold"}>Ada Lovelace</p>
        </div>

        <div className={"flex items-end pt-[232px]"}>
          <div>
            <div className={"flex items-center gap-x-4"}>
              <SunIcon />
              <p className={"text-[20px] uppercase leading-[28px] tracking-[4px]"}>GOOD MORNING, IT’S CURRENTLY</p>
            </div>

            <div className={"space-x-[11px]"}>
              <span className={"text-[200px] font-bold leading-[200px] -tracking-[5px]"}>11:25</span>
              <span className={"inline-block text-[40px] font-light leading-[28px]"}>BST</span>
            </div>
            <p className={"pt-4 text-[24px] font-bold leading-[28px] tracking-[4.8px]"}>IN LONDON, UK</p>
          </div>
          <div className={"ml-auto flex h-[56px] w-[146px] items-center justify-end gap-x-[13px] rounded-[28px] bg-white"}>
            <span className={"text-[16px] font-bold uppercase leading-[28px] tracking-[5px] text-[#808080]"}>More</span>
            <button className={"hover:bg-light-gray mr-[9px] flex size-[40px] items-center justify-center rounded-full bg-dark-gray"}>
              <ArrowDownIcon />
            </button>
          </div>
        </div>

        <div>
          <div>
            <div>
              <h3>Current Timezone</h3>
              <p>Europe/London</p>
            </div>
            <div>
              <h3>Day of the Year</h3>
              <p>250</p>
            </div>
          </div>

          <div>
            <div>
              <h3>Day of the Week</h3>
              <p>Thursday</p>
            </div>
            <div>
              <h3>Week Number</h3>
              <p>36</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
