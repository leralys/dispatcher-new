import { SxProps, Theme } from '@mui/material/styles';

import { BORDER_RADIUS } from '../../globalStyles';
import {
  NEUTRAL_SHADES,
  SECONDARY_SHADES,
  BOX_SHADOW,
} from '../../utils/ui/colors';

export const SxButtonIcon = (
  customWidth: number,
  customHeight: number
): SxProps<Theme> => {
  return {
    width: `${customWidth}px`,
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

// export const errorSelectStyles = (showError: boolean): SxProps<Theme> => {
//   const errorStyle = {
//     '.MuiOutlinedInput-notchedOutline': {
//       border: `1px solid ${ERROR_SHADES[80]}`
//     },
//     '&:hover': {
//       backgroundColor: 'none'
//     },
//     '&:hover .MuiOutlinedInput-notchedOutline': {
//       border: `1px solid ${ERROR_SHADES[80]}`
//     },
//     '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
//       border: `1px solid ${ERROR_SHADES[80]}`
//     }
//   };
//   return showError ? errorStyle : {};
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
