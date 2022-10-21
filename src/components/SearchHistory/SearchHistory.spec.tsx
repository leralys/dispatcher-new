import { render, screen } from '../../utils/testUtils';
import SearchHistory from './SearchHistory';

describe('Search History', () => {
  it('should render component with correct amount of history items', async () => {
    const searchList = ['test', 'search', 'soccer'];
    render(
      <SearchHistory
        searchList={searchList}
        handleSearchItemRemove={() => {}}
        handleClearHistory={() => {}}
      />
    );
    const searchHistory = screen.getByTestId('search-history');
    const historyItems = await screen.findAllByTestId('history-item');
    expect(searchHistory).toBeDefined();
    expect(historyItems).toHaveLength(3);
  });
});
