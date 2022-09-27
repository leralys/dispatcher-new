import { useState } from 'react';
import {
  InputProps as MuiOutlinedInputProps,
  InputAdornment,
} from '@mui/material';
import { ClickAwayListener } from '@mui/base';

import Select, { Option } from '../Select/Select';
import { ReactComponent as SearchIcon } from '../../assets/svgs/searchIcon.svg';
import { StyledSearch, SxSearch, SearchContainer } from './search.styles';

export interface SearchProps extends MuiOutlinedInputProps {
  placeholder?: string;
  isWithFilter?: boolean;
  customHeight?: number;
  customWidth?: number;
  customGrowWidth?: number;
  filterItems?: Option[];
}

const Search = ({
  placeholder = 'Search',
  isWithFilter,
  customHeight = 50,
  customWidth = 424,
  customGrowWidth = 664,
  filterItems = [],
}: SearchProps) => {
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [isFilterOpen, setIsFilterOpen] = useState<boolean>(false);

  const handleClickAway = () => {
    if (!isFilterOpen) {
      setIsFocused(false);
    }
  };

  const handleChange = (value: string) => {
    console.log(value);
  };

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <SearchContainer customWidth={isFocused ? customGrowWidth : customWidth}>
        <StyledSearch
          data-testid='search'
          startAdornment={
            <InputAdornment position='start' sx={{ width: 'fit-content' }}>
              <SearchIcon data-testid='search-icon' />
            </InputAdornment>
          }
          endAdornment={
            isWithFilter && (
              <InputAdornment position='end'>
                <Select
                  items={filterItems}
                  isInSearch={true}
                  isWithEmptyValue={false}
                  selected={filterItems[0]}
                  onChange={handleChange}
                  onOpen={() => setIsFilterOpen(true)}
                  onClose={() => setIsFilterOpen(false)}
                />
              </InputAdornment>
            )
          }
          placeholder={placeholder}
          fullWidth={true}
          sx={SxSearch()}
          onFocus={() => setIsFocused(true)}
          // transient props
          $customHeight={customHeight}
          $isWithFilter={isWithFilter}
        />
      </SearchContainer>
    </ClickAwayListener>
  );
};

export default Search;
