import logoSvg from '../../assets/svgs/logo.svg';
import { LogoContainer, LogoImg } from './style';

export interface LogoProps {
  customHeight: number;
  onClick?: () => void;
}

const Logo = ({ customHeight = 50, onClick }: LogoProps) => {
  return (
    <LogoContainer customHeight={customHeight}>
      <LogoImg
        src={logoSvg}
        alt='dispatcher-logo'
        onClick={onClick && onClick}
      />
    </LogoContainer>
  );
};

export default Logo;
