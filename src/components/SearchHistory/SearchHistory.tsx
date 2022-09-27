import Button, { ButtonVariants } from '../MainButton/MainButton';
import {
  HistoryContainer,
  HistoryHeader,
  HistoryTitle,
} from './searchHistory.styles';

const SearchHistory = () => {
  return (
    <HistoryContainer>
      <HistoryHeader>
        <HistoryTitle>Recent searches</HistoryTitle>
        <Button btnVariant={ButtonVariants.TEXT}>Clear</Button>
      </HistoryHeader>
    </HistoryContainer>
  );
};

export default SearchHistory;
