export enum IndustryEnum {
  automotive = "automotive",
  banking = "banking",
  consulting = "consulting",
  finance = "finance",
  healthcare = "healthcare",
  mediaPR = "mediaPR",
  retail = "retail",
  technology = "technology",
  telecommunication = "telecommunication",
  other = "other",
}

export const IndustryOptions = {
  [IndustryEnum.automotive]: "Automotive",
  [IndustryEnum.banking]: "Banking",
  [IndustryEnum.consulting]: "Consulting",
  [IndustryEnum.finance]: "Finance",
  [IndustryEnum.healthcare]: "Healthcare",
  [IndustryEnum.mediaPR]: "Media/PR",
  [IndustryEnum.retail]: "Retail",
  [IndustryEnum.technology]: "Technology",
  [IndustryEnum.telecommunication]: "Telecommunication",
  [IndustryEnum.other]: "Other",
};

export enum operatingGeographyEnum {
  national = "national",
  regional = "regional",
  global = "global",
}

export const operatingGeographyOptions = {
  [operatingGeographyEnum.national]: "National",
  [operatingGeographyEnum.regional]: "Regional",
  [operatingGeographyEnum.global]: "Global",
};
