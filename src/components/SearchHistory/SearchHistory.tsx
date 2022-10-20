import { ForwardedRef, forwardRef, SyntheticEvent } from 'react';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

import Button, { ButtonVariants } from '../MainButton/MainButton';
import {
  HistoryBody,
  HistoryContainer,
  HistoryHeader,
  HistoryTitle,
  HistoryItemContainer,
  HistoryItem,
  SxRemoveIcon,
} from './searchHistory.styles';

export interface Props {
  customWidth?: number;
  searchList: string[];
  handleSearchItemRemove: (index: number) => void;
  handleClearHistory: () => void;
  handleItemSearch: (value: string) => void;
}

const SearchHistory = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLDivElement>) => {
    const {
      searchList = [],
      customWidth = 664,
      handleSearchItemRemove,
      handleClearHistory,
      handleItemSearch,
    } = props;

    const handleRemoveClick = (e: SyntheticEvent, index: number) => {
      e.stopPropagation();
      handleSearchItemRemove(index);
    };

    const handleClearClick = (e: SyntheticEvent) => {
      e.stopPropagation();
      handleClearHistory();
    };

    return (
      <HistoryContainer
        customWidth={customWidth}
        ref={ref}
        {...props}
        data-testid='search-history-container'
      >
        <HistoryHeader>
          <HistoryTitle>Recent searches</HistoryTitle>
          <Button
            onClick={handleClearClick}
            btnVariant={ButtonVariants.TEXT}
            sx={{ fontSize: '12px !important' }}
          >
            Clear
          </Button>
        </HistoryHeader>
        <HistoryBody>
          {searchList.map((item, index) => (
            <HistoryItemContainer key={index}>
              <HistoryItem onClick={() => handleItemSearch(item)}>
                {item}
              </HistoryItem>
              <Button
                isIconBtn={true}
                onClick={(e) => handleRemoveClick(e, index)}
              >
                <CloseRoundedIcon fontSize='small' sx={SxRemoveIcon} />
              </Button>
            </HistoryItemContainer>
          ))}
        </HistoryBody>
      </HistoryContainer>
    );
  }
);

export default SearchHistory;
