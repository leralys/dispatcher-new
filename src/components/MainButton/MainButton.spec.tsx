import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

import { render, screen } from '../../utils/test-utils';
import MainButton, { ButtonVariants } from './MainButton';
import {
  MAIN_COLORS,
  NEUTRAL_SHADES,
  SECONDARY_SHADES,
} from '../../utils/ui/colors';

describe(`Should render button and icon with correct styles`, () => {
  Object.values(ButtonVariants).forEach((variant) => {
    it(`button variant ${variant}`, () => {
      const buttonText = 'test';
      render(
        <MainButton btnVariant={variant} withEndIcon={true}>
          {buttonText}
        </MainButton>
      );
      const button = screen.getByTestId('main-button');
      const endIcon = screen.getByTestId('end-icon');
      expect(button)
        .toBeDefined()
        .toHaveTextContent(buttonText)
        .toHaveStyle(
          `background: ${
            variant === ButtonVariants.TEXT ? 'none' : MAIN_COLORS[variant]
          };
        color: ${
          variant === ButtonVariants.PRIMARY
            ? NEUTRAL_SHADES.WHITE
            : SECONDARY_SHADES[400]
        }`
        );
      expect(endIcon).toHaveStyle(
        `fill: ${
          variant === ButtonVariants.PRIMARY
            ? NEUTRAL_SHADES.WHITE
            : SECONDARY_SHADES[400]
        }`
      );
    });
  });
  it('should render icon button with icon', () => {
    render(
      <MainButton isIconBtn={true}>
        <CloseRoundedIcon />
      </MainButton>
    );
    const iconButton = screen.getByTestId('icon-button');
    const closeIcon = screen.getByTestId('CloseRoundedIcon');
    expect(iconButton).toBeDefined();
    expect(closeIcon).toBeDefined();
  });
});
