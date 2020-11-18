import fullTitlesData from "./data/fullTitles.json";
import { StreetDataSet } from "./declarations";

export const fullTitleDataSet: StreetDataSet<string> = fullTitlesData as StreetDataSet<
  string
>;
