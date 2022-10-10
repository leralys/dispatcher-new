import { render, screen } from '../../utils/testUtils';
import NoData from './NoData';
import { noDataImgObj, NoDataEnum } from './noData.consts';

describe('Should render component with img and correct text', () => {
  it(`${NoDataEnum.SEARCH} no data component`, () => {
    const searchText = noDataImgObj.search.text;
    render(<NoData component={NoDataEnum.SEARCH} />);
    const noDataImg = screen.getByTestId('no-data-img') as HTMLImageElement;
    const noDataText = screen.getByTestId(
      'no-data-text'
    ) as HTMLParagraphElement;
    expect(noDataImg.src).toBeDefined();
    expect(noDataText.innerHTML).toBeDefined().toBe(searchText);
  });
  it(`${NoDataEnum.CHART} no data component`, () => {
    const chartText = noDataImgObj.chart.text;
    render(<NoData component={NoDataEnum.CHART} />);
    const noDataImg = screen.getByTestId('no-data-img') as HTMLImageElement;
    const noDataText = screen.getByTestId(
      'no-data-text'
    ) as HTMLParagraphElement;
    expect(noDataImg.src).toBeDefined();
    expect(noDataText.innerHTML).toBeDefined().toBe(chartText);
  });
});
