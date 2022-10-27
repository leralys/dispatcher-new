import { SyntheticEvent } from 'react';
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
  handleItemRemove: (index: number) => void;
  handleClearHistory: () => void;
  handleItemClick: (value: string) => void;
}

const SearchHistory = ({
  searchList = [],
  customWidth = 664,
  handleItemRemove,
  handleClearHistory,
  handleItemClick,
}: Props) => {
  const handleClick = (value: string) => {
    handleItemClick(value);
  };

  return (
    <HistoryContainer customWidth={customWidth} data-testid='search-history'>
      <HistoryHeader>
        <HistoryTitle>Recent searches</HistoryTitle>
        <Button
          onClick={(e: SyntheticEvent) => {
            e.stopPropagation();
            handleClearHistory();
          }}
          btnVariant={ButtonVariants.TEXT}
          sx={{ fontSize: '12px !important' }}
        >
          Clear
        </Button>
      </HistoryHeader>
      <HistoryBody>
        {searchList.map((item, index) => (
          <HistoryItemContainer data-testid='history-item' key={index}>
            <HistoryItem
              onClick={(e: SyntheticEvent) => {
                e.stopPropagation();
                handleClick(item);
              }}
            >
              {item}
            </HistoryItem>
            <Button
              isIconBtn={true}
              onClick={(e: SyntheticEvent) => {
                e.stopPropagation();
                handleItemRemove(index);
              }}
            >
              <CloseRoundedIcon fontSize='small' sx={SxRemoveIcon} />
            </Button>
          </HistoryItemContainer>
        ))}
      </HistoryBody>
    </HistoryContainer>
  );
};

export default SearchHistory;
