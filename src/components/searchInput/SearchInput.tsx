import { InputAdornment } from '@mui/material';
import { InputProps as MuiInputProps } from '@mui/material';

import { InputStyled, InputIcon } from './searchInput.styles';

export interface SearchInputProps extends MuiInputProps {
  withStartAdornment?: boolean;
  placeholder?: string;
}

const SearchInput = ({
  withStartAdornment = true,
  placeholder = 'Search',
}: SearchInputProps) => {
  return (
    <InputStyled
      startAdornment={
        withStartAdornment && (
          <InputAdornment position='start'>
            <InputIcon data-testid='search-input-icon' />
          </InputAdornment>
        )
      }
      placeholder={placeholder}
      disableUnderline
    />
  );
};

export default SearchInput;
