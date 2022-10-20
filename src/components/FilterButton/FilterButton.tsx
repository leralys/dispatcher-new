import { ReactNode } from 'react';
import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded';

import {
  StyledFilterButton,
  FilterText,
  SxFilterIcon,
  TextAndAmount,
  Amount,
} from './styles';

export interface Props {
  isOpen?: boolean;
  title?: string;
  selectedItem?: string;
  selectedItemsAmount?: number;
  isInSearch?: boolean;
  icon?: ReactNode;
}

const DropdownButton = ({
  isOpen = false,
  title = 'Select',
  selectedItem = '',
  selectedItemsAmount = null,
  isInSearch = false,
  icon,
}: Props) => {
  return (
    <StyledFilterButton isInSearch={isInSearch} data-testid='filter-button'>
      <TextAndAmount>
        <FilterText
          selectedItemsAmount={selectedItemsAmount}
          data-testid='filter-text'
        >
          {selectedItem ? selectedItem : title}
        </FilterText>
        {selectedItemsAmount && (
          <Amount data-testid='selected-amount'>
            {' '}
            + {selectedItemsAmount}
          </Amount>
        )}
      </TextAndAmount>
      {icon ? (
        icon
      ) : (
        <ArrowBackIosRoundedIcon
          sx={SxFilterIcon(isOpen)}
          data-testid='filter-icon'
        />
      )}
    </StyledFilterButton>
  );
};

export default DropdownButton;
