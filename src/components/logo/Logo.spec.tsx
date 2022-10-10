import { render, screen } from '../../utils/testUtils';
import Logo from './Logo';

const customHeightsArr = [10, 100];
const defaultLogoSize = 50;

describe('Should render logo with correct height', () => {
  it(`default ${defaultLogoSize}px height`, () => {
    render(<Logo />);
    const logoContainer = screen.getByTestId('logo-container');
    expect(logoContainer)
      .toBeDefined()
      .toHaveStyle(`height: ${defaultLogoSize}px`);
  });
  customHeightsArr.forEach((height) => {
    it(`${height}px height`, () => {
      render(<Logo customHeight={height} />);
      const logoContainer = screen.getByTestId('logo-container');
      expect(logoContainer)
        .toBeDefined()
        .toHaveStyle(`height: ${height}px`);
    });
  });
});
