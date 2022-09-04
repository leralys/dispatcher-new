import { render, screen } from '../../utils/test-utils';
import MainButton, { ButtonVariants } from './MainButton';
import {
  MAIN_COLORS,
  NEUTRAL_SHADES,
  SECONDARY_SHADES,
} from '../../utils/ui/colors';
// import { iconStyles } from './button.styles';

const buttonText = 'test';

Object.values(ButtonVariants).forEach((variant) => {
  test(`Checking button variant ${variant}`, () => {
    render(<MainButton btnVariant={variant}>{buttonText}</MainButton>);
    const buttonElement = screen.getByTestId('main-button');
    expect(buttonElement).toBeDefined();
    expect(buttonElement).toHaveTextContent(buttonText);
    expect(buttonElement).toHaveStyle(
      `background: ${
        variant === ButtonVariants.TEXT ? 'none' : MAIN_COLORS[variant]
      }`
    );
    expect(buttonElement).toHaveStyle(
      `color: ${
        variant === ButtonVariants.PRIMARY
          ? NEUTRAL_SHADES.WHITE
          : SECONDARY_SHADES[300]
      }`
    );
  });
});
