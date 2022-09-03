import { InputAdornment } from '@mui/material';
import { InputProps as MuiInputProps } from '@mui/material';

import { InputStyled, InputIcon } from './styles';

export interface InputComponentProps extends MuiInputProps {
  withStartAdornment?: boolean;
  placeholder?: string;
}

const InputComponent = ({
  withStartAdornment = true,
  placeholder = 'Search',
}: InputComponentProps) => {
  return (
    <InputStyled
      startAdornment={
        withStartAdornment && (
          <InputAdornment position='start'>
            <InputIcon />
          </InputAdornment>
        )
      }
      placeholder={placeholder}
      disableUnderline
    />
  );
};

export default InputComponent;
