import { IStreet, StreetDataSet } from "./declarations";
import { districtsFlagsDataSet } from "./districtsFlagsDataSet";
import { fullTitleDataSet } from "./fullTitleDataSet";
import { typeDataSet } from "./typeDataSet";
import { namingDateDataSet } from "./namingDateDataSet";
import { namingDocumentDataSet } from "./namingDocumentDataSet";
import { namingDocumentNumberDataSet } from "./namingDocumentNumberDataSet";
import { namingDocumentTitleDataSet } from "./namingDocumentTitleDataSet";
import { oldFullTitleDataSet } from "./oldFullTitleDataSet";
import { oldTypeDataSet } from "./oldTypeDataSet";
import { placeDescriptionDataSet } from "./placeDescriptionDataSet";

export const streetDataSet: StreetDataSet<IStreet> = fullTitleDataSet.map<
  IStreet
>((fullTitle, ind) => ({
  fullTitle,
  districtsFlags: districtsFlagsDataSet[ind],
  type: typeDataSet[ind],
  placeDescription: placeDescriptionDataSet[ind],
  namingDate: namingDateDataSet[ind],
  namingDocument: namingDocumentDataSet[ind],
  namingDocumentNumber: namingDocumentNumberDataSet[ind],
  namingDocumentTitle: namingDocumentTitleDataSet[ind],
  oldFullTitle: oldFullTitleDataSet[ind],
  oldType: oldTypeDataSet[ind],
})) as StreetDataSet<IStreet>;
