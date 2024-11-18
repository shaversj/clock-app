export type ProgrammingQuoteAPIResponse = {
  author: string;
  quote: string;
};

export type IpifyResponse = {
  ip: string;
};

export type MenuState = "initial" | "menuOpen" | "menuClosed";

export type TimeAPIResponse = {
  year: number;
  month: number;
  day: number;
  hour: number;
  minute: number;
  seconds: number;
  milliSeconds: number;
  dateTime: string;
  date: string;
  time: string;
  timeZone: string;
  dayOfWeek: string;
  dstActive: boolean;
};

export type IpBaseResponse = {
  data: {
    ip: string;
    hostname: string;
    type: string;
    range_type: {
      type: string;
      description: string;
    };
    connection: {
      asn: number;
      organization: string;
      isp: string;
      range: string;
    };
    location: {
      geonames_id: number;
      latitude: number;
      longitude: number;
      zip: string;
      continent: {
        code: string;
        name: string;
        name_translated: string;
        geonames_id: number;
        wikidata_id: string;
      };
      country: {
        alpha2: string;
        alpha3: string;
        calling_codes: string[];
        currencies: {
          symbol: string;
          name: string;
          symbol_native: string;
          decimal_digits: number;
          rounding: number;
          code: string;
          name_plural: string;
        }[];
        emoji: string;
        ioc: string;
        languages: {
          name: string;
          name_native: string;
        }[];
        name: string;
        name_translated: string;
        timezones: string[];
        is_in_european_union: boolean;
        fips: string;
        geonames_id: number;
        hasc_id: string;
        wikidata_id: string;
      };
      city: {
        fips: string;
        alpha2: string | null;
        geonames_id: number;
        hasc_id: string | null;
        wikidata_id: string;
        name: string;
        name_translated: string;
      };
      region: {
        fips: string;
        alpha2: string;
        geonames_id: number;
        hasc_id: string;
        wikidata_id: string;
        name: string;
        name_translated: string;
      };
    };
    tlds: string[];
    timezone: {
      id: string;
      current_time: string;
      code: string;
      is_daylight_saving: boolean;
      gmt_offset: number;
    };
    security: {
      is_anonymous: boolean;
      is_datacenter: boolean;
      is_vpn: boolean;
      is_bot: boolean;
      is_abuser: boolean;
      is_known_attacker: boolean;
      is_proxy: boolean;
      is_spam: boolean;
      is_tor: boolean;
      is_icloud_relay: boolean;
      threat_score: number;
    };
    domains: {
      count: number;
      domains: string[];
    };
  };
};
