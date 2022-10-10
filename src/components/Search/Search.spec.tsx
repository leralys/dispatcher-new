import { fireEvent } from '@testing-library/react';

import { render, screen } from '../../utils/test-utils';
import Search from './Search';

describe('Search', () => {
  it('should render component', () => {
    render(<Search />);
    const searchComponent = screen.getByTestId('search');
    const searchIcon = screen.getByTestId('search-icon');
    const searchContainer = screen.getByTestId('search-container');
    expect(searchComponent).toBeDefined();
    expect(searchIcon).toBeDefined();
    expect(searchContainer).toBeDefined().toHaveStyle('width: 424px');
  });
  it('should render end adornment', () => {
    render(<Search isWithFilter={true} />);
    const endAdornment = screen.getByTestId('end-adornment');
    expect(endAdornment).toBeDefined();
  });
  it('should grow and render search results when focused', async () => {
    render(<Search />);
    const search = screen.getByTestId('search');
    fireEvent.focus(search);
    const searchHistory = await screen.findByTestId('search-history-container');
    expect(searchHistory).toBeDefined();
  });
});
