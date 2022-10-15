import { red } from '@mui/material/colors';

import { render, screen } from '../../utils/testUtils';
import Select from './Select';
import { countries } from '../../utils/consts/filters';
import { SECONDARY_SHADES } from '../../utils/ui/colors';

const name = 'example';

describe('Should render component', () => {
  it(`Select`, () => {
    render(<Select items={countries} name={name} />);
    const select = screen.getByTestId('select');
    expect(select).toBeDefined().toHaveStyle('height: 48px; width: 175px');
  });
  it(`Select full width`, () => {
    render(<Select items={countries} fullWidth={true} name={name} />);
    const select = screen.getByTestId('select');
    const selectFormControl = screen.getByTestId('select-form-control');
    expect(selectFormControl).toBeDefined().toHaveStyle('width: 100%');
    expect(select).toBeDefined().toHaveStyle('width: 100%');
  });
  it(`Select disabled`, () => {
    render(<Select items={countries} disabled={true} name={name} />);
    const select = screen.getByTestId('select');
    expect(select)
      .toBeDefined()
      .toHaveStyle(`background: ${SECONDARY_SHADES[100]}`);
  });
  it(`Select with helper text`, () => {
    const helperText = 'Helper Text';
    render(<Select items={countries} helperText={helperText} name={name} />);
    const selectHelperText = screen.getByTestId(
      'select-helper-text'
    ) as HTMLParagraphElement;
    expect(selectHelperText)
      .toBeDefined()
      .toHaveStyle(`color: ${SECONDARY_SHADES[400]}; width: 175px`);
    expect(selectHelperText.innerHTML).toBeDefined().toBe(helperText);
  });
  it(`Select with error`, () => {
    const helperText = 'Error Text';
    render(
      <Select
        items={countries}
        helperText={helperText}
        isError={true}
        name={name}
      />
    );
    const selectHelperText = screen.getByTestId('select-helper-text');
    expect(selectHelperText).toBeDefined().toHaveStyle(`color: ${red[700]};`);
  });
});
