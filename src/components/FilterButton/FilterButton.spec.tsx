import { render, screen } from '../../utils/test-utils';
import FilterButton from './FilterButton';
import { BORDER_RADIUS } from '../../globalStyles';
import { NEUTRAL_SHADES, MAIN_COLORS } from '../../utils/ui/colors';

describe('Should render filter button', () => {
  it('is closed', () => {
    const title = 'Test Title';
    render(<FilterButton isOpen={false} title={title} />);
    const filterBtn = screen.getByTestId('filter-button');
    const filterIcon = screen.getByTestId('filter-icon');
    expect(filterBtn)
      .toBeDefined()
      .toHaveStyle(
        `width: 176px; height: 48px; border-radius: ${BORDER_RADIUS[10]}; background: ${NEUTRAL_SHADES.WHITE};`
      )
      .toHaveTextContent(title);
    expect(filterIcon).toBeDefined().toHaveStyle('transform: rotate(90deg)');
  });
  it('is open', () => {
    render(<FilterButton isOpen={true} />);
    const filterBtn = screen.getByTestId('filter-button');
    const filterIcon = screen.getByTestId('filter-icon');
    expect(filterBtn).toBeDefined();
    expect(filterIcon).toBeDefined().toHaveStyle('transform: rotate(-90deg)');
  });
  it('is in search', () => {
    render(<FilterButton isOpen={false} isInSearch={true} />);
    const filterBtn = screen.getByTestId('filter-button');
    expect(filterBtn)
      .toBeDefined()
      .toHaveStyle(
        `width: 164px; height: 40px; padding-right: 0px; border-left: 1px solid ${MAIN_COLORS.secondary}`
      );
  });
  it('is selected one', () => {
    const selected = 'SelectedText';
    render(<FilterButton isOpen={false} selectedItem={selected} />);
    const filterBtn = screen.getByTestId('filter-button');
    const selectedAmount = screen.queryByTestId('selected-amount');
    expect(filterBtn).toBeDefined().toHaveTextContent(selected);
    expect(selectedAmount).toBeNull();
  });
  it('is selected many', () => {
    const selected = 'SelectedText';
    const amount = 5;
    render(
      <FilterButton
        isOpen={false}
        selectedItem={selected}
        selectedItemsAmount={amount}
      />
    );
    const filterBtn = screen.getByTestId('filter-button');
    const selectedAmount = screen.queryByTestId('selected-amount');
    expect(filterBtn).toBeDefined().toHaveTextContent(selected);
    expect(selectedAmount).toHaveTextContent(`+ ${amount}`);
  });
});
