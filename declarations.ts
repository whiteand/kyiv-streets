export enum DistrictFlag {
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

export type StreetDataSet<T> = readonly T[] & {
  length: 2843;
};

export interface IStreet {
  districtsFlags: number;
  fullTitle: string;
  type: number;
  namingDate: string | null;
  namingDocument: string | null;
  namingDocumentNumber: string | null;
  namingDocumentTitle: string | null;
  oldFullTitle: string | null;
  oldType: number | null;
  placeDescription: string | null;
}
