import { render, screen } from '../../utils/test-utils';
import MainButton, { ButtonVariants } from './MainButton';
import {
  MAIN_COLORS,
  NEUTRAL_SHADES,
  SECONDARY_SHADES,
} from '../../utils/ui/colors';

const buttonText = 'test';

Object.values(ButtonVariants).forEach((variant) => {
  test(`Checking button variant ${variant}`, () => {
    render(
      <MainButton btnVariant={variant} withEndIcon={true}>
        {buttonText}
      </MainButton>
    );
    const buttonElement = screen.getByTestId('main-button');
    const endIcon = screen.getByTestId('end-icon');
    expect(buttonElement)
      .toBeDefined()
      .toHaveTextContent(buttonText)
      .toHaveStyle(
        `background: ${
          variant === ButtonVariants.TEXT ? 'none' : MAIN_COLORS[variant]
        };
      color: ${
        variant === ButtonVariants.PRIMARY
          ? NEUTRAL_SHADES.WHITE
          : SECONDARY_SHADES[300]
      }`
      );
    expect(endIcon).toHaveStyle(
      `fill: ${
        variant === ButtonVariants.PRIMARY
          ? NEUTRAL_SHADES.WHITE
          : SECONDARY_SHADES[300]
      }`
    );
  });
});
