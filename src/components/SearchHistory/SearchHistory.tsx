import { ForwardedRef, forwardRef, SyntheticEvent, useRef } from 'react';
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
} from './styles';

export interface Props {
  customWidth?: number;
  searchList: string[];
  handleSearchItemRemove: (index: number) => void;
  handleClearHistory: () => void;
  handleItemClick: (value: string) => void;
}

const SearchHistory = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLDivElement>) => {
    const {
      searchList = [],
      customWidth = 664,
      handleSearchItemRemove,
      handleClearHistory,
      handleItemClick,
    } = props;

    const scrollRef = useRef<HTMLDivElement>(null);
    const scroll = () =>
      scrollRef?.current &&
      scrollRef.current.scrollIntoView({ behavior: 'smooth' });

    const handleRemoveClick = (e: SyntheticEvent, index: number) => {
      e.stopPropagation();
      handleSearchItemRemove(index);
    };

    const handleClearClick = (e: SyntheticEvent) => {
      e.stopPropagation();
      handleClearHistory();
    };

    const handleClick = (e: SyntheticEvent, value: string) => {
      e.stopPropagation();
      handleItemClick(value);
      scroll();
    };

    return (
      <HistoryContainer
        customWidth={customWidth}
        ref={ref}
        {...props}
        data-testid='search-history'
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
          <HistoryItemContainer ref={scrollRef}></HistoryItemContainer>
          {searchList.map((item, index) => (
            <HistoryItemContainer data-testid='history-item' key={index}>
              <HistoryItem onClick={(e) => handleClick(e, item)}>
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
