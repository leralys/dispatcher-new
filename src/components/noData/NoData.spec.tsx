import { render, screen } from '../../utils/test-utils';
import NoData from './NoData';
import { noDataImgObj } from './noData.consts';

const search = 'search';
const chart = 'chart';
const searchText = noDataImgObj.search.text;
const chartText = noDataImgObj.chart.text;

describe('Should NoData component with img and correct text', () => {
  test(`${search} no data component`, () => {
    render(<NoData component={search} />);
    const noDataImg = screen.getByTestId('no-data-img') as HTMLImageElement;
    const noDataText = screen.getByTestId(
      'no-data-text'
    ) as HTMLParagraphElement;
    expect(noDataImg.src).toBeDefined();
    expect(noDataText.innerHTML).toBeDefined().toBe(searchText);
  });
  test(`${chart} no data component`, () => {
    render(<NoData component={chart} />);
    const noDataImg = screen.getByTestId('no-data-img') as HTMLImageElement;
    const noDataText = screen.getByTestId(
      'no-data-text'
    ) as HTMLParagraphElement;
    expect(noDataImg.src).toBeDefined();
    expect(noDataText.innerHTML).toBeDefined().toBe(chartText);
  });
});
