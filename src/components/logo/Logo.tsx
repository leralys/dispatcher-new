import logoSvg from '../../assets/svgs/logo.svg';
import { LogoContainer, LogoImg } from './logo.style';

export interface LogoProps {
  customHeight?: number;
  onClick?: () => void;
}

const Logo = ({ customHeight = 50, onClick }: LogoProps) => {
  return (
    <LogoContainer customHeight={customHeight} data-testid='logo-container'>
      <LogoImg
        src={logoSvg}
        alt='dispatcher-logo'
        onClick={onClick}
      />
    </LogoContainer>
  );
};

export default Logo;
