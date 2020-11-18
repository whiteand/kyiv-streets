import placeDescriptionsData from "./data/placeDescriptions.json";
import { StreetDataSet } from "./declarations";

export const placeDescriptionDataSet: StreetDataSet<
  string | null
> = placeDescriptionsData as StreetDataSet<string | null>;
