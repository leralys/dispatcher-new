import { useMemo } from 'react';
import {
  OutlinedInputProps,
  FormHelperText,
  InputAdornment,
} from '@mui/material';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

import {
  SxErrorIcon,
  StyledInput,
  SxStyledInput,
  SxHelperText,
} from './input.styles';

export interface InputProps extends OutlinedInputProps {
  helperText?: string;
  isError?: boolean;
}

const Input = ({
  className,
  helperText,
  isError = false,
  fullWidth = true,
  placeholder = 'Type something...',
  sx,
  ...props
}: InputProps) => {
  const showhelperText = useMemo(
    () => !props.disabled && Boolean(helperText),
    [props.disabled, helperText]
  );
  return (
    <>
      <StyledInput
        data-testid='input'
        classes={{ root: className }}
        error={isError}
        endAdornment={
          isError && (
            <InputAdornment position='end'>
              <ErrorOutlineIcon sx={SxErrorIcon} />
            </InputAdornment>
          )
        }
        fullWidth={fullWidth}
        placeholder={placeholder}
        sx={SxStyledInput(sx, props, isError)}
      />
      {showhelperText && (
        <FormHelperText
          data-testid='input-helper-text'
          sx={SxHelperText(isError)}
        >
          {helperText}
        </FormHelperText>
      )}
    </>
  );
};

export default Input;
