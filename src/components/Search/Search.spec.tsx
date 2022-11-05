import { fireEvent } from '@testing-library/react';

import { render, screen } from '../../utils/testUtils';
import Search from './Search';

describe('Search component', () => {
  it('should render and have default width', () => {
    render(
      <Search
        id='search'
        onEndpointChange={() => {}}
        onQueryChange={() => {}}
      />
    );
    const searchComponent = screen.getByTestId('search');
    const searchIcon = screen.getByTestId('search-icon');
    const searchContainer = screen.getByTestId('search-container');
    expect(searchComponent).toBeDefined();
    expect(searchIcon).toBeDefined();
    expect(searchContainer).toBeDefined().toHaveStyle('width: 424px');
  });
  it('should render end adornment', () => {
    render(
      <Search
        isWithFilter={true}
        id='search'
        onEndpointChange={() => {}}
        onQueryChange={() => {}}
      />
    );
    const endAdornment = screen.getByTestId('end-adornment');
    expect(endAdornment).toBeDefined();
  });
  it('should grow when focused', async () => {
    render(
      <Search
        id='search'
        onEndpointChange={() => {}}
        onQueryChange={() => {}}
      />
    );
    const search = screen.getByTestId('search');
    const searchContainer = screen.getByTestId('search-container');
    fireEvent.focus(search);
    expect(searchContainer).toBeDefined();
    setTimeout(() => {
      expect(searchContainer).toHaveStyle('width: 664px');
    }, 3000);
  });
});
