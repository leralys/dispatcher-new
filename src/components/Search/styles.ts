import styled, { css } from 'styled-components';
import {
  SxProps,
  Theme,
  OutlinedInput as MuiOutlinedInput,
} from '@mui/material';

import { BORDER_RADIUS } from '../../globalStyles';
import { SECONDARY_SHADES, NEUTRAL_SHADES } from '../../utils/ui/colors';

export const SearchContainer = styled.div<{ customWidth: number }>`
  ${({ customWidth: width }) => css`
    width: ${width}px;
    transition: all 0.3s ease-out;
    position: relative;
  `}
`;

export const StyledOutlinedInput = styled(MuiOutlinedInput)<{
  $customHeight: number;
  $isWithFilter: boolean;
}>`
  && {
    ${({ $customHeight: height, $isWithFilter: isWithFilter }) => css`
      font-size: 14px;
      color: ${SECONDARY_SHADES[400]};
      border-radius: ${BORDER_RADIUS[10]};
      height: ${height}px;
      background: ${NEUTRAL_SHADES.WHITE};
      padding-inline: 16px;
      padding-right: ${isWithFilter && '2px'};
    `}
  }
`;

export const SxSearch = (): SxProps<Theme> => {
  const defaultStyles = {
    fieldset: {
      '&.MuiOutlinedInput-notchedOutline': {
        border: 'none',
      },
    },
  };
  const hoveredStyles = {
    '&:hover': {
      fieldset: {
        '&.MuiOutlinedInput-notchedOutline': {
          border: 'none',
        },
      },
    },
  };
  const focusedStyles = {
    '&&.Mui-focused': {
      fieldset: {
        '&.MuiOutlinedInput-notchedOutline': {
          border: 'none',
        },
      },
    },
  };
  return { ...defaultStyles, ...hoveredStyles, ...focusedStyles };
};

export const SxClearIcon: SxProps<Theme> = {
  color: `${SECONDARY_SHADES[300]}`,
};

export const IconButtonSpan = styled.span<{ isWithFilter: boolean }>`
  ${({ isWithFilter }) => css`
    margin-right: ${isWithFilter ? 4 : -8}px;
  `}
`;
