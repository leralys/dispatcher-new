import styled from 'styled-components';
import { SxProps, Theme } from '@mui/material';
import { red } from '@mui/material/colors';
import { OutlinedInput as MuiOutlinedInput } from '@mui/material';

import { Props } from './Input';
import {
  SECONDARY_SHADES,
  MAIN_COLORS,
  NEUTRAL_SHADES,
} from '../../utils/ui/colors';
import { BORDER_RADIUS } from '../../globalStyles';

export const StyledInput = styled(MuiOutlinedInput)`
  && {
    font-size: 14px;
    color: ${SECONDARY_SHADES[400]};
    border-radius: ${BORDER_RADIUS[10]};
    height: 38px;
    background: ${NEUTRAL_SHADES.WHITE};
  }
`;

export const SxErrorIcon = {
  fill: red[700],
};

export const SxStyledInput = (
  sx: SxProps<Theme>,
  props: Props,
  isError: boolean
): SxProps<Theme> => {
  const defaultStyles = {
    '.MuiInputBase-input.MuiOutlinedInput-input': {
      paddingInline: '8px',
    },
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
          border: `1px solid ${SECONDARY_SHADES[400]}`,
        },
      },
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
    color: isError ? red[700] : SECONDARY_SHADES[400],
    position: 'absolute',
    paddingLeft: '8px',
  };
};
