import namingDocumentsNumbersData from "./data/namingDocumentsNumber.json";
import { StreetDataSet } from "./declarations";

export const namingDocumentNumberDataSet: StreetDataSet<
  string | null
> = namingDocumentsNumbersData as StreetDataSet<string | null>;
