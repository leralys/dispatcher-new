import styled, { css } from 'styled-components';
import {
  SxProps,
  Theme,
  OutlinedInput as MuiOutlinedInput,
} from '@mui/material';

import { BORDER_RADIUS } from '../../globalStyles';
import { SECONDARY_SHADES, NEUTRAL_SHADES } from '../../utils/ui/colors';

export const SearchContainer = styled.div<{ customWidth: number }>`
  ${({ customWidth }) => css`
    width: ${customWidth}px;
    transition: all 0.5s ease-out;
  `}
`;

export const StyledSearch = styled(MuiOutlinedInput)<{
  customHeight: number;
  isWithEndAdornment: boolean;
}>`
  && {
    ${({ customHeight, isWithEndAdornment }) => css`
      font-size: 14px;
      color: ${SECONDARY_SHADES[300]};
      border-radius: ${BORDER_RADIUS[10]};
      height: ${customHeight}px;
      background: ${NEUTRAL_SHADES.WHITE};
      padding-inline: 16px;
      padding-right: ${isWithEndAdornment && '2px'};
    `}
  }
`;

export const SxSearch = (withEndAdornment: boolean): SxProps<Theme> => {
  const defaultStyles = {
    fieldset: {
      '&.MuiOutlinedInput-notchedOutline': {
        // border: `1px solid ${SECONDARY_SHADES[400]}`,
        border: 'none',
      },
    },
  };
  const hoveredStyles = {
    '&:hover': {
      fieldset: {
        '&.MuiOutlinedInput-notchedOutline': {
          // border: `1px solid ${SECONDARY_SHADES[400]}`,
          border: 'none',
        },
      },
    },
  };
  const focusedStyles = {
    '&&.Mui-focused': {
      fieldset: {
        '&.MuiOutlinedInput-notchedOutline': {
          // border: `1px solid ${SECONDARY_SHADES[400]}`,
          border: 'none',
        },
      },
    },
  };
  // return [
  //   defaultStyles,
  //   hoveredStyles,
  //   focusedStyles,
  //   ...(Array.isArray(sx) ? sx : [sx]),
  // ];
  return { ...defaultStyles, ...hoveredStyles, ...focusedStyles };
};
