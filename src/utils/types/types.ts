export type Option = {
  label: string;
  value: string;
};

export enum ENDPOINTS {
  EVERYTHING = 'everything',
  TOP_HEADLINES = 'top-headlines',
}

export interface IFilterObject {
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

export interface IDateObject {
  from: DateType;
  to: DateType;
}
export type DateFilterType = Pick<IFilterObject, 'to' | 'from'>;

export type DateType = Date | null;
