import { ButtonProps as MuiButtonProps } from '@mui/material';
import EastIcon from '@mui/icons-material/East';

import { StyledButton, iconStyles } from './button.styles';
import { ButtonVariants } from './button.consts';

export interface MainButtonProps extends MuiButtonProps {
  withEndIcon?: boolean;
  children?: JSX.Element | string;
  btnVariant: ButtonVariants;
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
      btnVariant={btnVariant}
      onClick={onClick && onClick}
    >
      {children}
    </StyledButton>
  );
};

export default MainButton;
