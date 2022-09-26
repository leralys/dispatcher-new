import { SxProps, Theme } from '@mui/material';
import { red } from '@mui/material/colors';
import { OutlinedInput as MuiOutlinedInput } from '@mui/material';
import styled from 'styled-components';

import { InputProps } from '../Input/Input';
import { SECONDARY_SHADES, MAIN_COLORS } from '../../utils/ui/colors';
import { BORDER_RADIUS } from '../../globalStyles';

export const StyledInput = styled(MuiOutlinedInput)`
  && {
    font-size: 14px;
    color: ${SECONDARY_SHADES[300]};
    border-radius: ${BORDER_RADIUS[10]};
    height: 38px;
  }
`;

export const SxErrorIcon = {
  fill: red[700],
};

export const SxStyledInput = (
  sx: SxProps<Theme>,
  props: InputProps,
  isError: boolean
): SxProps<Theme> => {
  const defaultStyles = {
    fieldset: {
      '&.MuiOutlinedInput-notchedOutline': {
        border: `1px solid ${MAIN_COLORS.secondary}`,
      },
    },
  };
  const hoveredStyles = {
    '&:hover': {
      fieldset: {
        '&.MuiOutlinedInput-notchedOutline': {
          border: `1px solid ${SECONDARY_SHADES[300]}`,
        },
      },
    },
  };
  const focusedStyles = {
    '&&.Mui-focused': {
      fieldset: {
        '&.MuiOutlinedInput-notchedOutline': {
          border: `1px solid ${SECONDARY_SHADES[300]}`,
        },
      },
    },
  };
  const errorStyles = {
    '&:hover': {
      fieldset: {
        '&.MuiOutlinedInput-notchedOutline': {
          border: isError && `1px solid ${red[700]}`,
        },
      },
    },
    '&&.Mui-focused': {
      fieldset: {
        '&.MuiOutlinedInput-notchedOutline': {
          border: isError && `1px solid ${red[700]}`,
        },
      },
    },
  };
  return [
    defaultStyles,
    hoveredStyles,
    focusedStyles,
    errorStyles,
    ...(Array.isArray(sx) ? sx : [sx]),
  ];
};

export const SxHelperText = (isError: boolean): SxProps<Theme> => {
  return {
    color: isError ? red[700] : SECONDARY_SHADES[300],
    position: 'absolute',
    paddingLeft: '14px',
  };
};
