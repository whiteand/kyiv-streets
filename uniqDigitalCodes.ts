import uniqDigitalCodesData from "./data/uniqDigitalCodes.json";
import { StreetDataSet } from "./declarations";

export const uniqDigitalCodes: StreetDataSet<number> = uniqDigitalCodesData as StreetDataSet<
  number
>;
