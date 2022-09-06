import { render, screen } from '../../utils/test-utils';
import Logo from './Logo';

const customHeightsArr = [10, 100];
const defaultLogoSize = 50;

describe('Should render logo with correct height', () => {
  test(`default logo with ${defaultLogoSize}px height`, () => {
    render(<Logo />);
    const logoContainer = screen.getByTestId('logo-container');
    expect(logoContainer)
      .toBeDefined()
      .toHaveStyleRule('height', `${defaultLogoSize}px`);
  });
  customHeightsArr.forEach((height) => {
    test(`logo with ${height}px height`, () => {
      render(<Logo customHeight={height} />);
      const logoContainer = screen.getByTestId('logo-container');
      expect(logoContainer)
        .toBeDefined()
        .toHaveStyleRule('height', `${height}px`);
    });
  });
});
