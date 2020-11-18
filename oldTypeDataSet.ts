import oldTypesData from "./data/oldTypes.json";
import { StreetDataSet } from "./declarations";

export const oldTypes: StreetDataSet<
  number | null
> = oldTypesData as StreetDataSet<number | null>;
