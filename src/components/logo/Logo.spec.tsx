import { render, screen } from '../../utils/test-utils';
import Logo from './Logo';

const customHeightsArr = [10, 100];
const defaultLogoSize = 50;

describe('Test logo', () => {
  test(`Testing default logo with ${defaultLogoSize}px height`, () => {
    render(<Logo />);
    const logoContainer = screen.getByTestId('logo-container');
    expect(logoContainer)
      .toBeDefined()
      .toHaveStyle(`height: ${defaultLogoSize}px`);
  });
  customHeightsArr.forEach((height) => {
    test(`Testing logo with ${height}px height`, () => {
      render(<Logo customHeight={height} />);
      const logoContainer = screen.getByTestId('logo-container');
      expect(logoContainer).toBeDefined().toHaveStyle(`height: ${height}px`);
    });
  });
});
