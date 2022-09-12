import styled from 'styled-components';
import {
  SxProps,
  Theme,
  OutlinedInput as MuiOutlinedInput,
} from '@mui/material';

import { BORDER_RADIUS } from '../../globalStyles';
import { SECONDARY_SHADES } from '../../utils/ui/colors';

export const StyledSearch = styled(MuiOutlinedInput)`
  && {
    font-size: 14px;
    color: ${SECONDARY_SHADES[300]};
    border-radius: ${BORDER_RADIUS[10]};
    height: 50px;
  }
`;

export const SxSearch = (isWithEndAdornment: boolean): SxProps<Theme> => {
  const defaultStyles = {
    fieldset: {
      '&.MuiOutlinedInput-notchedOutline': {
        border: `1px solid ${SECONDARY_SHADES[400]}`,
      },
    },
  };
  const hoveredStyles = {
    '&:hover': {
      fieldset: {
        '&.MuiOutlinedInput-notchedOutline': {
          border: `1px solid ${SECONDARY_SHADES[400]}`,
        },
      },
    },
    '&.MuiInputBase-root.MuiOutlinedInput-root': {
      paddingRight: isWithEndAdornment && '8px',
    },
  };
  const focusedStyles = {
    '&&.Mui-focused': {
      fieldset: {
        '&.MuiOutlinedInput-notchedOutline': {
          border: `1px solid ${SECONDARY_SHADES[400]}`,
        },
      },
    },
  };
  return { ...defaultStyles, ...hoveredStyles, ...focusedStyles };
};
