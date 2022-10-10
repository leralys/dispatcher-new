import { red } from '@mui/material/colors';

import { render, screen } from '../../utils/testUtils';
import Input from './Input';

describe(`Should render input`, () => {
  it(`input should exist`, () => {
    render(<Input />);
    const inputElement = screen.getByTestId('input');
    expect(inputElement).toBeDefined();
  });
  it('icon when error should exist', () => {
    render(<Input isError={true} />);
    const icon = screen.getByTestId('ErrorOutlineIcon');
    expect(icon).toBeDefined().toHaveStyle(`fill: ${red[700]}`);
  });
  it('helper text should exist', () => {
    const helpText = 'Helper Text';
    render(<Input helperText={helpText} error={true} />);
    const helperTextElement = screen.getByTestId('input-helper-text');
    expect(helperTextElement)
      .toBeDefined()
      .toHaveTextContent(helpText)
      .toHaveStyle('position: absolute');
  });
});
