import type { WorldTimeAPIResponse, IpBaseResponse } from "@/types/types";

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

async function fetchLocationData(clientIp: string): Promise<IpBaseResponse> {
  console.log(`clientIp:`, clientIp);
  const response = await fetch(`https://api.ipbase.com/v2/info?ip=${clientIp}`);
  console.log(`LocationResponse:`, response);
  return response.json();
}

export default async function TimeAndLocationServer({ clientIp }: { clientIp: string }) {
  const timeData = await fetchTimeData(clientIp);
  console.log(`timeData:`, timeData);
  const locationData = timeData.client_ip ? await fetchLocationData(timeData.client_ip) : null;

  return (
    <>
      <div className={"flex items-baseline pt-4 md:pt-0 lg:pt-4"}>
        <div className={"flex items-end"}>
          <h1 className={"text-h1 md:text-h1-md lg:text-h1-lg"}>
            {timeData &&
              new Date(timeData.datetime).toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
                hour12: false,
              })}
          </h1>
        </div>
        <p className={"text-abbr font-light uppercase md:text-abbr-md lg:pl-[11px] lg:text-abbr-lg"}>{timeData?.abbreviation}</p>
      </div>
      <h3 className={"pt-4 text-h3 md:pt-0 md:text-h3-md lg:pt-4 lg:text-h3-lg"}>
        IN{" "}
        <span className={"uppercase"}>
          {" "}
          {locationData && locationData.data.location.city.name
            ? locationData.data.location.city.name + "," + locationData.data.location.region.name
            : locationData && locationData.data.location.region.name}
        </span>{" "}
      </h3>
    </>
  );
}
