import { CSSProperties } from 'react';
import { SxProps, Theme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

import { BORDER_RADIUS } from '../../globalStyles';
import {
  NEUTRAL_SHADES,
  SECONDARY_SHADES,
  BOX_SHADOW,
  MAIN_COLORS,
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
      color: SECONDARY_SHADES[300],
      fontSize: '14px',
    },
    '.MuiOutlinedInput-notchedOutline': {
      border: 'none',
    },
    '.MuiSelect-icon': {
      fill: SECONDARY_SHADES[300],
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
        border: isError && !disabled && `1px solid ${red[700]}`,
      },
    },
    '.MuiSelect-select.MuiSelect-outlined.MuiInputBase-input': {
      color: isError && !disabled && red[700],
    },
    '.MuiSelect-icon': {
      fill: isError && !disabled && red[800],
    },
    '.MuiOutlinedInput-notchedOutline': {
      border: isError && !disabled && `1px solid ${red[700]}`,
    },
    '&&.Mui-focused': {
      '.MuiOutlinedInput-notchedOutline': {
        border: isError && !disabled && `1px solid ${red[700]}`,
      },
    },
  };
  const disabledStyles = {
    background: disabled && NEUTRAL_SHADES.DISABLED_BACKGROUND,
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
    marginTop: '3px',
    color: SECONDARY_SHADES[300],
    'li.MuiMenuItem-root': {
      fontFamily: 'Mulish, Roboto, san-serif',
      fontSize: '12px',
    },
  };
};

export const emptyValueStyles: CSSProperties = {
  fontFamily: 'Mulish, Roboto, san-serif',
  fontSize: '12px',
  color: `${NEUTRAL_SHADES[600]}`,
};

export const SxHelperText = (
  customWidth: number,
  isError: boolean
): SxProps<Theme> => {
  return {
    color: isError ? red[700] : SECONDARY_SHADES[300],
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
