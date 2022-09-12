import { render, screen } from '../../utils/test-utils';
import { red } from '@mui/material/colors';

import Input from './Input';

const helperText = 'Helper Text';

describe(`Should render input`, () => {
  test(`input should exist`, () => {
    render(<Input />);
    const inputElement = screen.getByTestId('input');
    expect(inputElement).toBeDefined();
  });
  test('icon when error should exist', () => {
    render(<Input isError={true} />);
    const icon = screen.getByTestId('error-icon');
    expect(icon).toBeDefined().toHaveStyle(`fill: ${red[700]}`);
  });
  test('test helper text', () => {
    render(<Input helperText={helperText} error={true} />);
    const helperTextElement = screen.getByTestId('input-helper-text');
    expect(helperTextElement)
      .toBeDefined()
      .toHaveTextContent(helperText)
      .toHaveStyle('position: absolute');
  });
});
