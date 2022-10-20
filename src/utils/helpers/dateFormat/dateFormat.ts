import { format } from 'date-fns';

// returns date in format 'Friday Jun 25, 2021'
export const formatArticleDate = (date: string) => {
  return format(new Date(date), 'EEEE LLL d, yyyy');
};
// ISO format 2022-07-15
export const dateToISOFormat = (date: Date) => {
  return date.toISOString().slice(0, 10);
};

export const formatAreaChartDate = (date: string) => {
  return format(new Date(date), 'dd/MM');
};
