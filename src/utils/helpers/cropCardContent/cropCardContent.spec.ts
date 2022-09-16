import cropCardContent, { ellipsis } from './cropCardContent';
import { SCREENS } from '../../ui/screenSizes';
import {
  MAX_ARTICLE_LENGTH_MOBILE,
  MAX_ARTICLE_LENGTH_DESKTOP,
} from '../../consts/maxValues';
import { replacementChar } from '../../consts/consts';
import mockIl from '../../../mock/topHeadlinesIsrMock.json';
import mockUs from '../../../mock/topHeadlinesUsMock.json';

const screenWidths = [SCREENS.mobileM, SCREENS.tabletS, SCREENS.laptopS];
const ellipsisLength = ellipsis.length;
const descriptionWithReplacementChar = mockIl.articles[8].description;
const longDescription = mockUs.articles[2].description;
const shortDescription = mockUs.articles[0].description;

describe('Should string of correct length', () => {
  it('empty string when includes replacement character "�"', () => {
    const result = jest.fn((description: string) => {
      return description && !description.includes(replacementChar)
        ? cropCardContent(description, screenWidths[0])
        : '';
    });
    result(descriptionWithReplacementChar);
    expect(result).toHaveReturnedWith('');
  });
  describe('Should return cropped string of correct length when description is longer then max value', () => {
    it('for mobile screen', () => {
      const result = cropCardContent(longDescription, screenWidths[0]);
      expect(result).toHaveLength(MAX_ARTICLE_LENGTH_MOBILE + ellipsisLength);
    });
    it('for desktop screen', () => {
      const result = cropCardContent(longDescription, screenWidths[2]);
      expect(result).toHaveLength(MAX_ARTICLE_LENGTH_DESKTOP + ellipsisLength);
    });
  });
  describe('Should return string with same length when description is shorter then max value', () => {
    screenWidths.forEach((width) => {
      it(`for screen ${width}px width`, () => {
        const result = cropCardContent(shortDescription, screenWidths[2]);
        expect(result).toHaveLength(shortDescription.length);
      });
    });
  });
});
