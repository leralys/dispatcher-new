import { ReactNode, useMemo, useState } from 'react';
import { InputAdornment } from '@mui/material';
import { InputProps as MuiOutlinedInputProps } from '@mui/material';
import { ClickAwayListener } from '@mui/base';

import { ReactComponent as SearchIcon } from '../../assets/svgs/searchIcon.svg';
import { StyledSearch, SxSearch, SearchContainer } from './search.styles';

export interface SearchProps extends MuiOutlinedInputProps {
  placeholder?: string;
  endAdornmentComponent?: ReactNode;
  customHeight?: number;
  customWidth?: number;
  customGrowWidth?: number;
}

const Search = ({
  placeholder = 'Search',
  endAdornmentComponent,
  customHeight = 50,
  customWidth = 424,
  customGrowWidth = 664,
}: SearchProps) => {
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const isWithEndAdornment = useMemo(
    () => Boolean(endAdornmentComponent),
    [endAdornmentComponent]
  );
  return (
    <SearchContainer customWidth={isFocused ? customGrowWidth : customWidth}>
      <StyledSearch
        data-testid='search'
        startAdornment={
          <InputAdornment position='start' sx={{ width: 'fit-content' }}>
            <SearchIcon data-testid='search-icon' />
          </InputAdornment>
        }
        endAdornment={
          isWithEndAdornment && (
            <InputAdornment position='end'>
              {endAdornmentComponent}
            </InputAdornment>
          )
        }
        placeholder={placeholder}
        fullWidth={true}
        sx={SxSearch(isWithEndAdornment)}
        customHeight={customHeight}
        isWithEndAdornment={isWithEndAdornment}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
    </SearchContainer>
  );
};

export default Search;
