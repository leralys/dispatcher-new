import { SxProps, Theme } from '@mui/material';

import {
  SECONDARY_SHADES,
  NEUTRAL_SHADES,
  BOX_SHADOW,
} from '../../utils/ui/colors';
import { BORDER_RADIUS } from '../../globalStyles';

export const SxDatepickerInput = {
  color: SECONDARY_SHADES[400],
  cursor: 'pointer',
  fontSize: '14px',
  padding: '0px',
  '&::placeholder': {
    opacity: 1,
  },
};

export const SxDatepickerInputContainer = (
  isBorder: boolean,
  isSelected: boolean
): SxProps<Theme> => {
  const styles = {
    borderRadius: BORDER_RADIUS[10],
    cursor: 'pointer',
    background: NEUTRAL_SHADES.WHITE,
    width: '175px',
    height: '48px',
    paddingInline: isSelected ? '16px 8px' : '16px',
    '&:hover': {
      background: `${SECONDARY_SHADES[100]}`,
    },
  };
  return isBorder
    ? { ...styles, border: `1px solid ${SECONDARY_SHADES[300]}` }
    : styles;
};

export const SxCloseIcon: SxProps<Theme> = {
  color: SECONDARY_SHADES[300],
};

export const SxPaperProps: SxProps<Theme> = {
  borderRadius: BORDER_RADIUS[10],
  boxShadow: `0px 4px 12px ${BOX_SHADOW[200]}`,
  marginLeft: '-16px',
};

export const SxPopperProps: SxProps<Theme> = {
  paddingTop: '20px',
};
