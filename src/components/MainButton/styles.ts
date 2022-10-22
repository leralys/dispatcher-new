import styled, { css } from 'styled-components';
import { Button, IconButton } from '@mui/material';
import { SxProps, Theme } from '@mui/material';

import { ButtonVariants } from './MainButton';
import {
  MAIN_COLORS,
  SECONDARY_SHADES,
  NEUTRAL_SHADES,
} from '../../utils/ui/colors';
import { BORDER_RADIUS } from '../../globalStyles';

export const StyledButton = styled(Button)<{
  $btnVariant: ButtonVariants;
  disabled: boolean;
}>`
  && {
    ${({ $btnVariant: variant }) => css`
      border-radius: ${BORDER_RADIUS[20]};
      font-size: 14px;
      background: ${variant === ButtonVariants.TEXT
        ? 'none'
        : MAIN_COLORS[variant]};
      color: ${variant === ButtonVariants.PRIMARY
        ? NEUTRAL_SHADES.WHITE
        : SECONDARY_SHADES[400]};
      opacity: 1;

      @media only screen and (max-width: 300px) {
        font-size: 12px;
      }
      &:hover {
        background: ${variant === ButtonVariants.TEXT
          ? `${MAIN_COLORS.secondary}70`
          : MAIN_COLORS[variant]};
        opacity: ${variant !== ButtonVariants.TEXT && 0.8};
      }
    `}
  }
`;

export const SxButtonIcon = (variant: ButtonVariants): SxProps<Theme> => {
  return {
    fill:
      variant === ButtonVariants.PRIMARY
        ? NEUTRAL_SHADES.WHITE
        : SECONDARY_SHADES[400],
  };
};

export const StyledIconButton = styled(IconButton)`
&& {
  color: ${SECONDARY_SHADES[400]};
  &:hover {
   background: ${MAIN_COLORS.secondary}70;
  }
`;

export const SxDisabledStyles = (
  sx: SxProps<Theme>,
  variant: ButtonVariants
): SxProps<Theme> => {
  const disabledStyles = {
    '&.MuiButtonBase-root.Mui-disabled': {
      background: `${
        variant === ButtonVariants.TEXT ? 'none' : NEUTRAL_SHADES[200]
      }`,
      color: NEUTRAL_SHADES.DISABLED,
    },
  };
  return [disabledStyles, ...(Array.isArray(sx) ? sx : [sx])];
};
