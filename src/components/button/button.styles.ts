import styled, { css } from 'styled-components';
import Button from '@mui/material/Button';
import { SxProps, Theme } from '@mui/material';

import { MainButtonProps } from './MainButton';
import { ButtonVariants } from './button.consts';
import {
  MAIN_COLORS,
  SECONDARY_SHADES,
  NEUTRAL_SHADES,
} from '../../utils/ui/colors';
import { BORDER_RADIUS } from '../../globalStyles';

export const StyledButton = styled(Button)`
  && {
    ${({ btnVariant }: MainButtonProps) => css`
      border-radius: ${BORDER_RADIUS};
      font-size: 14px;
      background: ${btnVariant === ButtonVariants.TEXT
        ? 'none'
        : MAIN_COLORS[btnVariant]};
      color: ${btnVariant === ButtonVariants.PRIMARY
        ? NEUTRAL_SHADES.WHITE
        : SECONDARY_SHADES[300]};
      opacity: 1;

      @media only screen and (max-width: 300px) {
        font-size: 12px;
      }
      &:hover {
        background: ${btnVariant === ButtonVariants.TEXT
          ? `${MAIN_COLORS.secondary}70`
          : MAIN_COLORS[btnVariant]};
        opacity: ${btnVariant !== ButtonVariants.TEXT && 0.8};
      }
    `}
  }
`;

export const iconStyles = (btnVariant: ButtonVariants): SxProps<Theme> => {
  return {
    fill:
      btnVariant === ButtonVariants.PRIMARY
        ? NEUTRAL_SHADES.WHITE
        : SECONDARY_SHADES[300],
  };
};
