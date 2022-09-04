import { ButtonProps as MuiButtonProps } from '@mui/material';
import EastIcon from '@mui/icons-material/East';

import { StyledButton, iconStyles } from './mainButton.styles';

export enum ButtonVariants {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  TEXT = 'text',
}

export interface MainButtonProps extends MuiButtonProps {
  withEndIcon?: boolean;
  children?: React.ReactNode | string;
  btnVariant?: ButtonVariants;
  onClick?: () => void;
}

const MainButton = ({
  children,
  withEndIcon = false,
  btnVariant = ButtonVariants.PRIMARY,
  onClick,
}: MainButtonProps) => {
  return (
    <StyledButton
      variant='contained'
      disableElevation
      endIcon={withEndIcon && <EastIcon sx={iconStyles(btnVariant)} />}
      onClick={onClick && onClick}
      data-testid='main-button'
      // transient props
      $btnVariant={btnVariant}
    >
      {children}
    </StyledButton>
  );
};

export default MainButton;
