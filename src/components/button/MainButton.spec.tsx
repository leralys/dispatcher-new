import { render, screen } from '../../utils/test-utils';
import MainButton, { ButtonVariants } from './MainButton';
// import { iconStyles } from './button.styles';

const buttonText = 'test';

Object.values(ButtonVariants).forEach((variant) => {
  test(`Checking button variant ${variant}`, () => {
    render(<MainButton btnVariant={variant}>{buttonText}</MainButton>);
    const buttonElement = screen.getByTestId('main-button');
    expect(buttonElement).toBeDefined();
    expect(buttonElement).toHaveTextContent(buttonText);
  });
});
