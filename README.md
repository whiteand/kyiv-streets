# kyiv-streets

It's dataset with all kyiv streets (on 25.11.2020).

# Description

We have separated datasets (arrays with 2843 elements). These are [parallel arrays](https://en.wikipedia.org/wiki/Parallel_array). So you are not to use all of them if you do not want.

```typescript
export const districtsFlagsDataSet: StreetDataSet<number>;
export const fullTitleDataSet: StreetDataSet<string>;
export const namingDateDataSet: StreetDataSet<string | null>;
export const namingDocumentDataSet: StreetDataSet<string | null>;
export const namingDocumentNumberDataSet: StreetDataSet<string | null>;
export const namingDocumentTitleDataSet: StreetDataSet<string | null>;
export const oldFullTitleDataSet: StreetDataSet<string | null>;
export const oldTypeDataSet: StreetDataSet<number | null>;
export const placeDescriptionDataSet: StreetDataSet<string | null>;
export const typeDataSet: StreetDataSet<number>;
```

Also There is one combined dataset:

```typescript
export const street: StreetDataSet<IStreet>;
// where
interface IStreet {
  districtsFlags: number;
  fullTitle: string;
  type: number;
  namingDate: string | null;
  namingDocument: string | null;
  namingDocumentNumber: string | null;
  namingDocumentTitle: string | null;
  oldFullTitle: string | null;
  oldType: string | number;
  placeDescription: string | null;
}
```
