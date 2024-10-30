export default function Home() {
  return (
    <div className={"min-h-screen bg-black/40 bg-[url('/images/bg-image-daytime.jpg')] bg-cover bg-no-repeat bg-blend-overlay"}>
      <div className="pl-[165px] pt-[56px]">
        <div className={"font-inter w-[540px] text-base font-normal text-white"}>
          <p>
            “The science of operations, as derived from mathematics more especially, is a science of itself, and has its own abstract truth and
            value.”
          </p>
          <p className={"pt-[13px] font-bold"}>Ada Lovelace</p>
        </div>

        <div className={"pt-[232px]"}>
          <div>
            <p>GOOD MORNING, IT’S CURRENTLY</p>
            <div>
              <p>11:25</p>
              <p>BST</p>
            </div>
            <p>IN LONDON, UK</p>
          </div>
          <button>MORE</button>
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
