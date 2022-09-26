import { red } from '@mui/material/colors';

import { render, screen } from '../../utils/test-utils';
import Select from './Select';
import { countries } from '../../features/filters/consts';
import { NEUTRAL_SHADES, SECONDARY_SHADES } from '../../utils/ui/colors';

describe('Should render component', () => {
  it(`Select`, () => {
    render(<Select items={countries} />);
    const select = screen.getByTestId('select');
    expect(select).toBeDefined().toHaveStyle('height: 48px; width: 175px');
  });
  it(`Select full width`, () => {
    render(<Select items={countries} fullWidth={true} />);
    const select = screen.getByTestId('select');
    const selectFormControl = screen.getByTestId('select-form-control');
    expect(selectFormControl).toBeDefined().toHaveStyle('width: 100%');
    expect(select).toBeDefined().toHaveStyle('width: 100%');
  });
  it(`Select disabled`, () => {
    render(<Select items={countries} disabled={true} />);
    const select = screen.getByTestId('select');
    expect(select)
      .toBeDefined()
      .toHaveStyle(`background: ${NEUTRAL_SHADES.DISABLED_BACKGROUND}`);
  });
  it(`Select with helper text`, () => {
    const helperText = 'Helper Text';
    render(<Select items={countries} helperText={helperText} />);
    const selectHelperText = screen.getByTestId(
      'select-helper-text'
    ) as HTMLParagraphElement;
    expect(selectHelperText)
      .toBeDefined()
      .toHaveStyle(`color: ${SECONDARY_SHADES[300]}; width: 175px`);
    expect(selectHelperText.innerHTML).toBeDefined().toBe(helperText);
  });
  it(`Select with error`, () => {
    const helperText = 'Error Text';
    render(<Select items={countries} helperText={helperText} isError={true} />);
    const selectHelperText = screen.getByTestId('select-helper-text');
    expect(selectHelperText).toBeDefined().toHaveStyle(`color: ${red[700]};`);
  });
});
