import oldFullTitlesData from "./data/oldFullTitles.json";
import { StreetDataSet } from "./declarations";

export const oldFullTitleDataSet: StreetDataSet<
  string | null
> = oldFullTitlesData as StreetDataSet<string | null>;
