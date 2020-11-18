import namingDatesData from "./data/dates.json";
import { StreetDataSet } from "./declarations";

export const namingDateDataSet: StreetDataSet<string | null> = namingDatesData as StreetDataSet<string | null>
