import { render, screen } from '../../utils/test-utils';
import { red } from '@mui/material/colors';

import Input from './Input';

describe(`Should render input`, () => {
  test(`input should exist`, () => {
    render(<Input />);
    const inputElement = screen.getByTestId('input');
    expect(inputElement).toBeDefined();
  });
  test('icon when error should exist', () => {
    render(<Input isError={true} />);
    const icon = screen.getByTestId('ErrorOutlineIcon');
    expect(icon).toBeDefined().toHaveStyle(`fill: ${red[700]}`);
  });
  test('helper text', () => {
    const helpText = 'Helper Text';
    render(<Input helperText={helpText} error={true} />);
    const helperTextElement = screen.getByTestId('input-helper-text');
    expect(helperTextElement)
      .toBeDefined()
      .toHaveTextContent(helpText)
      .toHaveStyle('position: absolute');
  });
});
