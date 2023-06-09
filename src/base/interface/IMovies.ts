export interface IMovies {
  page: number;
  next: string;
  entries: number;
  results: IMovie[];
}

export interface IMovie {
  _id: string;
  id: string;
  primaryImage: PrimaryImage | null;
  titleType: TitleType;
  titleText: TitleText;
  originalTitleText: TitleText;
  releaseYear: ReleaseYear;
  releaseDate: ReleaseDate;
}

export interface TitleText {
  text: string;
  __typename: OriginalTitleTextTypename;
}

export enum OriginalTitleTextTypename {
  TitleText = "TitleText",
}

export interface PrimaryImage {
  id: string;
  width: number;
  height: number;
  url: string;
  caption: Caption;
  __typename: string;
}

export interface Caption {
  plainText: string;
  __typename: CaptionTypename;
}

export enum CaptionTypename {
  Markdown = "Markdown",
}

export interface ReleaseDate {
  day: number;
  month: number;
  year: number;
  __typename: ReleaseDateTypename;
}

export enum ReleaseDateTypename {
  ReleaseDate = "ReleaseDate",
}

export interface ReleaseYear {
  year: number;
  endYear: number | null;
  __typename: ReleaseYearTypename;
}

export enum ReleaseYearTypename {
  YearRange = "YearRange",
}

export interface TitleType {
  displayableProperty: DisplayableProperty;
  text: string;
  id: string;
  isSeries: boolean;
  isEpisode: boolean;
  categories: Category[];
  canHaveEpisodes: boolean;
  __typename: TitleTypeTypename;
}

export enum TitleTypeTypename {
  TitleType = "TitleType",
}

export interface Category {
  value: Value;
  __typename: CategoryTypename;
}

export enum CategoryTypename {
  TitleTypeCategory = "TitleTypeCategory",
}

export enum Value {
  Movie = "movie",
  Tv = "tv",
}

export interface DisplayableProperty {
  value: Caption;
  __typename: DisplayablePropertyTypename;
}

export enum DisplayablePropertyTypename {
  DisplayableTitleTypeProperty = "DisplayableTitleTypeProperty",
}
