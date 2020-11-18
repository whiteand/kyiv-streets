import namingDocumentsData from "./data/namingDocuments.json";
import { StreetDataSet } from "./declarations";

export const namingDocumentDataSet: StreetDataSet<
  string | null
> = namingDocumentsData as StreetDataSet<string | null>;
