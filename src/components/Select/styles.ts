import styled from 'styled-components';
import { SxProps, Theme } from '@mui/material/styles';

import { BORDER_RADIUS } from '../../globalStyles';
import {
  NEUTRAL_SHADES,
  SECONDARY_SHADES,
  BOX_SHADOW,
  MAIN_COLORS,
  ERROR_SHADES,
} from '../../utils/ui/colors';

export const SxSelect = (
  sx: SxProps<Theme>,
  width: number,
  height: number,
  fullWidth: boolean,
  isError: boolean,
  disabled: boolean,
  isInSearch: boolean
): SxProps<Theme> => {
  const defaultStyles = {
    width: fullWidth ? '100%' : isInSearch ? '164px' : `${width}px`,
    height: isInSearch ? '40px' : `${height}px`,
    borderRadius: !isInSearch && BORDER_RADIUS[10],
    background: NEUTRAL_SHADES.WHITE,
    textOverflow: 'ellipsis',
    borderLeft: isInSearch && `1px solid ${MAIN_COLORS.secondary}`,
    '.MuiSelect-select.MuiSelect-outlined.MuiInputBase-input': {
      paddingLeft: '16px',
      paddingRight: '48px',
      color: SECONDARY_SHADES[400],
      fontSize: '14px',
    },
    '.MuiOutlinedInput-notchedOutline': {
      border: 'none',
    },
    '.MuiSelect-icon': {
      fill: SECONDARY_SHADES[400],
      transition: 'transform 0.3s ease-out',
      transform: 'rotate(-90deg)',
      marginRight: '8px',
    },
    '.MuiSelect-iconOpen': {
      transform: 'rotate(90deg)',
    },
  };
  const errorStyles = {
    '&:hover': {
      '.MuiOutlinedInput-notchedOutline': {
        border: isError && !disabled && `1px solid ${MAIN_COLORS.error}`,
      },
    },
    '.MuiSelect-select.MuiSelect-outlined.MuiInputBase-input': {
      color: isError && !disabled && MAIN_COLORS.error,
    },
    '.MuiSelect-icon': {
      fill: isError && !disabled && ERROR_SHADES[400],
    },
    '.MuiOutlinedInput-notchedOutline': {
      border: isError && !disabled && `1px solid ${MAIN_COLORS.error}`,
    },
    '&&.Mui-focused': {
      '.MuiOutlinedInput-notchedOutline': {
        border: isError && !disabled && `1px solid ${MAIN_COLORS.error}`,
      },
    },
  };
  const disabledStyles = {
    background: disabled && SECONDARY_SHADES[100],
    border: disabled && `1px solid ${NEUTRAL_SHADES[300]}`,
    '.MuiSelect-select.MuiSelect-outlined.MuiInputBase-input': {
      cursor: disabled && 'not-allowed',
    },
    '.MuiSelect-icon': {
      fill: disabled && NEUTRAL_SHADES.DISABLED,
    },
  };
  return [
    defaultStyles,
    errorStyles,
    disabledStyles,
    ...(Array.isArray(sx) ? sx : [sx]),
  ];
};

export const SxMenuStyles = (
  customWidth: number,
  isInSearch: boolean
): SxProps<Theme> => {
  return {
    maxHeight: '126px',
    width: isInSearch ? '164px' : `${customWidth}px`,
    borderRadius: `${BORDER_RADIUS[8]}`,
    boxShadow: `0px 4px 12px ${BOX_SHADOW[200]}`,
    marginTop: '2px',
    '&::-webkit-scrollbar': {
      width: '5px',
    },
    '&::-webkit-scrollbar-track': {
      marginBlock: '4px',
      borderRadius: '5px',
    },
    '&::-webkit-scrollbar-thumb': {
      background: `${SECONDARY_SHADES[400]}`,
      borderRadius: '5px',
    },
    '&::-webkit-scrollbar-thumb:hover': {
      background: `${SECONDARY_SHADES[400]}90`,
    },
    color: SECONDARY_SHADES[400],
    'li.MuiMenuItem-root': {
      fontFamily: 'Mulish, Roboto, san-serif',
      fontSize: '12px',
    },
    // selected menu item
    '.MuiButtonBase-root.MuiMenuItem-root.Mui-selected': {
      background: `${SECONDARY_SHADES[300]}`,
    },
  };
};

export const EmptyValueEm = styled.em`
  font-family: 'Mulish', 'Roboto', san-serif;
  font-size: 12px;
  color: ${NEUTRAL_SHADES[600]};
`;

export const SxHelperText = (
  customWidth: number,
  isError: boolean
): SxProps<Theme> => {
  return {
    color: isError ? MAIN_COLORS.error : SECONDARY_SHADES[400],
    position: 'relative',
    width: `${customWidth}px`,
    marginInline: '0px',
    paddingLeft: '16px',
  };
};
export const SxFormControl = (fullWidth: boolean): SxProps<Theme> => {
  return {
    width: fullWidth && '100%',
  };
};

export const SxMenuItem: SxProps<Theme> = {
  '&:hover': {
    backgroundColor: `${SECONDARY_SHADES[300]}69`,
  },
};
