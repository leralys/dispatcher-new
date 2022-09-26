import { ReactNode } from 'react';
import { InputAdornment } from '@mui/material';
import { InputProps as MuiOutlinedInputProps } from '@mui/material';

import { ReactComponent as SearchIcon } from '../../assets/svgs/searchIcon.svg';
import { StyledSearch, SxSearch } from './search.styles';

export interface SearchProps extends MuiOutlinedInputProps {
  placeholder?: string;
  endAdornmentComponent?: ReactNode;
}

const Search = ({
  placeholder = 'Search',
  endAdornmentComponent,
  fullWidth = true,
}: SearchProps) => {
  return (
    <StyledSearch
      startAdornment={
        <InputAdornment position='start' sx={{ width: 'fit-content' }}>
          <SearchIcon data-testid='search-icon' />
        </InputAdornment>
      }
      endAdornment={
        Boolean(endAdornmentComponent) && (
          <InputAdornment position='end'>
            {endAdornmentComponent}
          </InputAdornment>
        )
      }
      placeholder={placeholder}
      fullWidth={fullWidth}
      sx={SxSearch()}
      data-testid='search'
    />
  );
};

export default Search;
