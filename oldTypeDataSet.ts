import oldTypesData from "./data/oldTypes.json";
import { StreetDataSet } from "./declarations";

export const oldTypeDataSet: StreetDataSet<
  number | null
> = oldTypesData as StreetDataSet<number | null>;
