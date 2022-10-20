import { ReactNode } from 'react';
import { ButtonProps as MuiButtonProps } from '@mui/material';
import EastIcon from '@mui/icons-material/East';

import {
  StyledButton,
  SxButtonIcon,
  StyledIconButton,
  SxDisabledStyles,
} from './styles';

export enum ButtonVariants {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  TEXT = 'text',
}

export interface Props extends MuiButtonProps {
  withEndIcon?: boolean;
  children?: ReactNode | string;
  btnVariant?: ButtonVariants;
  isIconBtn?: boolean;
  icon?: ReactNode;
}

const MainButton = ({
  children,
  withEndIcon = false,
  btnVariant = ButtonVariants.PRIMARY,
  isIconBtn = false,
  onClick,
  disabled,
  icon,
}: Props) => {
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
            withEndIcon &&
            (icon ? (
              icon
            ) : (
              <EastIcon sx={SxButtonIcon(btnVariant)} data-testid='end-icon' />
            ))
          }
          onClick={onClick}
          sx={SxDisabledStyles(btnVariant)}
          disabled={disabled}
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
