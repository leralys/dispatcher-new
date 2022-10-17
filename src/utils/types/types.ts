export type Option = {
  label: string;
  value: string;
};

export enum ENDPOINTS {
  EVERYTHING = 'everything',
  TOP_HEADLINES = 'top-headlines',
}

export interface IFilterObject {
  [key: string]: string;
  country: string;
  endpoint: string;
  q: string;
  language: string;
  sortBy: string;
  category: string;
  sources: string;
  from: string;
  to: string;
}

export type DateType = Date | null;