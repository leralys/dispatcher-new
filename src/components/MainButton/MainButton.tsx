import { ReactNode } from 'react';
import { ButtonProps as MuiButtonProps } from '@mui/material';
import EastIcon from '@mui/icons-material/East';

import {
  StyledButton,
  SxButtonIcon,
  StyledIconButton,
} from './mainButton.styles';

export enum ButtonVariants {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  TEXT = 'text',
}

export interface MainButtonProps extends MuiButtonProps {
  withEndIcon?: boolean;
  children?: ReactNode | string;
  btnVariant?: ButtonVariants;
  isIconBtn?: boolean;
}

const MainButton = ({
  children,
  withEndIcon = false,
  btnVariant = ButtonVariants.PRIMARY,
  isIconBtn = false,
  onClick,
  sx,
}: MainButtonProps) => {
  return (
    <>
      {isIconBtn ? (
        <StyledIconButton onClick={onClick} data-testid='icon-button'>
          {children}
        </StyledIconButton>
      ) : (
        <StyledButton
          variant='contained'
          disableElevation
          endIcon={
            withEndIcon && (
              <EastIcon sx={SxButtonIcon(btnVariant)} data-testid='end-icon' />
            )
          }
          onClick={onClick}
          sx={sx}
          data-testid='main-button'
          // transient props
          $btnVariant={btnVariant}
        >
          {children}
        </StyledButton>
      )}
    </>
  );
};

export default MainButton;
