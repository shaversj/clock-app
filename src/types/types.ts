export type WorldTimeAPIResponse = {
  utc_offset: string;
  timezone: string;
  day_of_week: number;
  day_of_year: number;
  datetime: string;
  utc_datetime: string;
  unixtime: number;
  raw_offset: number;
  week_number: number;
  dst: boolean;
  abbreviation: string;
  dst_offset: number;
  dst_from: string | null;
  dst_until: string | null;
  client_ip: string;
};

export type ProgrammingQuoteAPIResponse = {
  author: string;
  quote: string;
};

export type MenuState = "initial" | "menuOpen" | "menuClosed";
