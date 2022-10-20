import logoSvg from '../../assets/svgs/logo.svg';
import { LogoContainer, LogoImg } from './styles';

export interface Props {
  customHeight?: number;
  onClick?: () => void;
}

const Logo = ({ customHeight = 50, onClick = undefined }: Props) => {
  return (
    <LogoContainer
      customHeight={customHeight}
      onClick={onClick}
      data-testid='logo-container'
    >
      <LogoImg src={logoSvg} alt='dispatcher-logo' />
    </LogoContainer>
  );
};

export default Logo;
