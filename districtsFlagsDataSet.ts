import districtsData from "./data/districtCodes.json";
import { StreetDataSet } from "./declarations";

export const districtsFlagsDataSet: StreetDataSet<number> = districtsData as StreetDataSet<
  number
>;
