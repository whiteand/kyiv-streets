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

# Examples:

## Search by titles

```typescript
// utils/searchStreetTitle.ts
import { fullTitleDataSet } from "kyiv-streets";

export function searchStreetTitle(title: string): string[] {
  const trimmedLowerCased = title.trim().toLowerCase();

  return fullTitleDataSet.filter((fullTitle) =>
    fullTitle.toLowerCase().includes(trimmedLowerCased)
  );
}
```

```typescript
// other file
import { searchStreetTitle } from "utils/searchStreetTitle";

const streetTitles = searchStreetTitle("Незал");
console.log(streetTitles); // ['Незалежності']
```

## Search By Street Type

```typescript
import { streetDataSet, Type } from "kyiv-streets";

streetDataSet.filter((street) => street.type === Type.Maidan);
// [
//   {
//     fullTitle: 'Незалежності',
//     districtsFlags: 16,
//     type: 13,
//     placeDescription: 'Розташований між Хрещатик, вул., Грінченка Бориса, вул., Шевченка Тараса, пров., Софіївською вул., Малою Житомирською вул., Михайлівською вул., Костьольною вул., Інститутською вул., Городецького Архітектора, вул.',
//     namingDate: '8/26/1991',
//     namingDocument: 'Рішення виконавчого комітету Київської міської ради народних депутатів',
//     namingDocumentNumber: '524',
//     namingDocumentTitle: '«Про перейменування площі Жовтневої революції і станції метро „Площа Жовтневої революції“» ',
//     oldFullTitle: null,
//     oldType: null
//   }
// ]
```

## Search By City District

```typescript
// Search by district
import { streetDataSet, DistrictFlag } from "kyiv-streets";
streetDataSet.filter(
  (street) => street.districtsFlags & DistrictFlag.Solomyanskyi
);
// [
//   {
//     fullTitle: '9-го Травня',
//     districtsFlags: 512,
//     type: 0,
//     placeDescription: 'Пролягає від Трублаїні, вул. до Відрадного просп.',
//     namingDate: '12/16/1974',
//     namingDocument: 'Рішення виконавчого комітету Київської міської ради депутатів трудящих',
//     namingDocumentNumber: '1476',
//     namingDocumentTitle: 'Про впорядкування найменувань та перейменування вулиць м. Києва',
//     oldFullTitle: null,
//     oldType: null
//   },
//   {
//     fullTitle: 'Абрикосова',
//     districtsFlags: 256,
//     type: 0,
//     placeDescription: 'Пролягає у новому мікрорайоні на схід від Богатирської вул. паралельно Сетомльській вул.',
//     namingDate: '7/14/2011',
//     namingDocument: 'Рішення Київської міської ради',
//     namingDocumentNumber: '374/5761',
//     namingDocumentTitle: '«Про найменування вулиць в Оболонському районі м. Києва»',
//     oldFullTitle: null,
//     oldType: null
//   }
//   ... 273 records
// ]
```

## Available Street Types

Streets have only one of these street type

```typescript
export enum Type {
  Street = 0,
  Lane = 1,
  Square = 2,
  Line = 3,
  Ave = 4,
  Bulvar = 5,
  Descent = 6,
  Proyizd = 7,
  Highway = 8,
  Road = 9,
  Alley = 10,
  Naberezhna = 11,
  BlindAlley = 12,
  Maidan = 13,
}
```

## Available City Districts

There are such city districts:

```typescript
enum DistrictFlag {
  Darnytskyi = 1,
  Podilskyi = 2,
  Solomyanskyi = 4,
  Dniprovskyi = 8,
  Shevchenkivskyi = 16,
  Holosiivskyi = 32,
  Desnyanskyi = 64,
  Pecherskyi = 128,
  Obolonskyi = 256,
  Svyatoshynskyi = 512,
  StDniprovskyy2 = 1024,
  SdtFrontovyk = 2048,
  Bortnychi = 4096,
  Chornobylets = 8192,
  StObolon = 16384,
  SdtStadne = 32768,
  StNyvky = 65536,
}
```

If street is placed in several districts it's `districtsFlags` field equal to bitwise OR of all `DistrictFlag` of the districts.

For example if a street is placed in Solomyanskyi and Shevchenkivskyi. Than it's `districtsFlags` will be equal `DistrictFlag.Solomyanskyi | DistrictFlag.Shevchenkivskyi`
