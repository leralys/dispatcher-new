import { useState } from 'react';
import {
  InputProps as MuiOutlinedInputProps,
  InputAdornment,
  SvgIcon,
} from '@mui/material';
import { ClickAwayListener } from '@mui/base';

import Select, { Option } from '../Select/Select';
import SearchHistory from '../SearchHistory/SearchHistory';
import { ReactComponent as SearchIcon } from '../../assets/svgs/searchIcon.svg';
import { StyledSearch, SxSearch, SearchContainer } from './search.styles';
import { NEUTRAL_SHADES } from '../../utils/ui/colors';

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
  // const [showHistory, setShowHistory] = useState<boolean>(false);

  const handleFocus = () => {
    setIsFocused(true);
    // setShowHistory(true);
  };

  const handleClickAway = () => {
    if (!isFilterOpen) {
      setIsFocused(false);
      // setShowHistory(false);
    }
  };

  const handleChange = (value: string) => {
    console.log(value);
  };

  return (
    <>
      <ClickAwayListener onClickAway={handleClickAway}>
        <SearchContainer
          customWidth={isFocused ? customGrowWidth : customWidth}
          data-testid='search-container'
        >
          <StyledSearch
            data-testid='search'
            startAdornment={
              <InputAdornment position='start'>
                <SvgIcon
                  component={SearchIcon}
                  inheritViewBox
                  data-testid='search-icon'
                  sx={{ color: NEUTRAL_SHADES.WHITE }}
                />
              </InputAdornment>
            }
            endAdornment={
              isWithFilter && (
                <InputAdornment position='end' data-testid='end-adornment'>
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
            onFocus={handleFocus}
            // transient props
            $customHeight={customHeight}
            $isWithFilter={isWithFilter}
          />
        </SearchContainer>
      </ClickAwayListener>
      {isFocused && <SearchHistory />}
    </>
  );
};

export default Search;
