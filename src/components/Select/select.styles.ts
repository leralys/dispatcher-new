import { CSSProperties } from 'react';
import { SxProps, Theme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

import { BORDER_RADIUS } from '../../globalStyles';
import {
  NEUTRAL_SHADES,
  SECONDARY_SHADES,
  BOX_SHADOW,
} from '../../utils/ui/colors';

export const SxSelect = (
  sx: SxProps<Theme>,
  customWidth: number,
  customHeight: number,
  fullWidth: boolean,
  isError: boolean,
  disabled: boolean
): SxProps<Theme> => {
  const defaultStyles = {
    width: fullWidth ? '100%' : `${customWidth}px`,
    height: `${customHeight}px`,
    borderRadius: BORDER_RADIUS[10],
    background: NEUTRAL_SHADES.WHITE,
    textOverflow: 'ellipsis',
    '.MuiSelect-select.MuiSelect-outlined.MuiInputBase-input': {
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

export const SxMenuStyles = (customWidth: number): SxProps<Theme> => {
  return {
    maxHeight: '126px',
    width: `${customWidth}px`,
    borderRadius: `${BORDER_RADIUS[8]}`,
    boxShadow: `0px 4px 12px ${BOX_SHADOW[200]}`,
    marginTop: '3px',
    'li.MuiMenuItem-root': {
      fontFamily: 'Mulish, Roboto, san-serif',
      fontSize: '12px',
    },
  };
};

export const emptyValueStyles: CSSProperties = {
  fontFamily: 'Mulish, Roboto, san-serif',
  fontSize: '14px',
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
    paddingLeft: '14px',
  };
};
export const SxFormControl = (fullWidth: boolean): SxProps<Theme> => {
  return {
    width: fullWidth && '100%',
  };
};

// export const selectStyles = (customWidth: string, customHeight: string) => {
//   return {
//     width: customWidth ? customWidth : '265px',
//     height: customHeight ? customHeight : '48px',
//     display: 'flex',
//     alignItems: 'center',
//     borderRadius: `${BORDER_RADIUS}px`,
//     '.MuiSelect-icon': {
//       color: NEUTRAL_SHADES[900]
//     },
//     '.MuiSelect-select': {
//       display: 'flex',
//       gap: '10px',
//       alignItems: 'center'
//     },
//     '&:hover': {
//       backgroundColor: `${NEUTRAL_SHADES[200]}`
//     },
//     '&:hover .MuiOutlinedInput-notchedOutline': {
//       border: `1px solid ${NEUTRAL_SHADES[500]}`
//     },
//     '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
//       border: `1px solid ${PRIMARY_COLOR}`
//     }
//   };
// };

// export const selectedValueStyles = {
//   color: PRIMARY_COLOR,
//   backgroundColor: `${PRIMARY_SHADES[100]}`,
//   '.MuiSelect-icon': {
//     color: PRIMARY_COLOR
//   },
//   '&& .MuiOutlinedInput-notchedOutline': {
//     border: 'none'
//   },
//   border: 'none'
// };

// export const menuItemStyles = {
//   fontSize: '0.9em',
//   py: 0
// };

// export const helperTextStyles = {
//   color: `${ERROR_SHADES[80]}`,
//   position: 'absolute',
//   bottom: -22,
//   left: -4
// };

// export const inputLabelStyles = (isError: boolean): SxProps<Theme> => {
//   const styles = {
//     lineHeight: '1.12em',
//     '&.MuiInputLabel-shrink': {
//       color: isError && `${ERROR_SHADES[80]}`
//     }
//   };
//   return styles;
// };
