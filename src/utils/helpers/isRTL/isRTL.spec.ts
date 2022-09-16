import mockIl from '../../../mock/topHeadlinesIsrMock.json';
import mockUs from '../../../mock/topHeadlinesUsMock.json';
import { isRTL } from './isRTL';

describe('Should return correct boolean for RTL and LTR texts', () => {
  it('true when text is RTL', () => {
    const result = isRTL(mockIl.articles[0].title);
    expect(result).toBe(true);
  });
  it('false when text is LTR', () => {
    const result = isRTL(mockUs.articles[0].title);
    expect(result).toBe(false);
  });
});
