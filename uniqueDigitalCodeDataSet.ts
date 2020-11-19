import uniqDigitalCodes from "./data/uniqDigitalCodes.json";
import { StreetDataSet } from "./declarations";

export const uniqueDigitalCodeDataSet: StreetDataSet<number> = uniqDigitalCodes as StreetDataSet<
  number
>;
