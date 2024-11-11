// function getShortTimeZone(timeZone: string): string {
//   return new Intl.DateTimeFormat("en-US", {
//     timeZone: timeZone,
//     timeZoneName: "short",
//   })
//     .format(new Date())
//     .split(" ")[1];
// }

export default async function TimeSection({ ipAddress }: { ipAddress: string }) {
  const data = await fetch(`https://timeapi.io/api/time/current/ip?ipAddress=${ipAddress}`);
  const timeData = await data.json();

  console.log(timeData);

  // const locationData = timeData && fetchLocationData(ipAddress).then((res) => res.json());

  return (
    <>
      <div></div>
      {/*<div className={"flex items-baseline pt-4 md:pt-0 lg:pt-4"}>*/}
      {/*  <div className={"flex items-end"}>*/}
      {/*    <h1 className={"text-h1 md:text-h1-md lg:text-h1-lg"}>*/}
      {/*      {timeData &&*/}
      {/*        new Date(timeData.dateTime).toLocaleTimeString([], {*/}
      {/*          hour: "2-digit",*/}
      {/*          minute: "2-digit",*/}
      {/*          hour12: false,*/}
      {/*        })}*/}
      {/*    </h1>*/}
      {/*  </div>*/}
      {/*  <p className={"text-abbr font-light uppercase md:text-abbr-md lg:pl-[11px] lg:text-abbr-lg"}>*/}
      {/*    {timeData && getShortTimeZone(timeData.timeZone)}*/}
      {/*  </p>*/}
      {/*</div>*/}
      {/*<h3 className={"pt-4 text-h3 md:pt-0 md:text-h3-md lg:pt-4 lg:text-h3-lg"}>*/}
      {/*  IN{" "}*/}
      {/*  <span className={"uppercase"}>*/}
      {/*    {" "}*/}
      {/*    {locationData && locationData.data.location.city.name*/}
      {/*      ? locationData.data.location.city.name + "," + locationData.data.location.region.name*/}
      {/*      : locationData && locationData.data.location.region.name}*/}
      {/*  </span>{" "}*/}
      {/*</h3>*/}
    </>
  );
}
