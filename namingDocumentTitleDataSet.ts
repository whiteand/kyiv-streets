import namingDocumentTitlesData from "./data/namingDocumentTitles.json";
import { StreetDataSet } from "./declarations";

export const namingDocumentTitleDataSet: StreetDataSet<
  string | null
> = namingDocumentTitlesData as StreetDataSet<string | null>;
