import styled, { css } from 'styled-components';

import { LogoProps } from './Logo';

export const LogoContainer = styled.div`
  ${({ customHeight: height }: LogoProps) => css`
    height: ${height}px;
    width: fit-content;
  `}
`;

export const LogoImg = styled.img`
  height: 100%;
  width: auto;
`;
