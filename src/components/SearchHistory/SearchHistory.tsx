import { ForwardedRef, forwardRef } from 'react';
import Button, { ButtonVariants } from '../MainButton/MainButton';
import {
  HistoryContainer,
  HistoryHeader,
  HistoryTitle,
} from './searchHistory.styles';

export interface SearchHistoryProps {
  customWidth: number;
}

const SearchHistory = forwardRef(
  (props: SearchHistoryProps, ref: ForwardedRef<HTMLDivElement>) => {
    return (
      <HistoryContainer customWidth={props.customWidth} ref={ref} {...props}>
        <HistoryHeader>
          <HistoryTitle>Recent searches</HistoryTitle>
          <Button btnVariant={ButtonVariants.TEXT}>Clear</Button>
        </HistoryHeader>
      </HistoryContainer>
    );
  }
);

export default SearchHistory;
