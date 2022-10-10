import { render, screen } from '../../../../utils/testUtils';

import NoImage from './NoImage';
import { NEUTRAL_SHADES } from '../../../../utils/ui/colors';

describe('Should render no image container with icon', () => {
  test(`correct icon styles`, () => {
    render(<NoImage />);
    const noImageContainer = screen.getByTestId('no-image-container');
    const noImageIcon = screen.getByTestId('no-image-icon');
    expect(noImageContainer).toBeDefined();
    expect(noImageIcon).toHaveStyle(`fill: ${NEUTRAL_SHADES[900]}`);
  });
});
