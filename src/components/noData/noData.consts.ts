import search from '../../assets/svgs/search.svg';
import chart from '../../assets/svgs/chart.svg';

export type noDataTypes = 'search' | 'chart';

export const noDataImgObj = {
  search: {
    component: search,
    text: "We couldn't find any matches for your query",
  },
  chart: {
    component: chart,
    text: 'No data to display',
  },
};
