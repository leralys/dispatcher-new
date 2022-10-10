import styled, { css } from 'styled-components';

import { LogoProps } from './Logo';

export const LogoContainer = styled.div`
  ${({ customHeight: height, onClick }: LogoProps) => css`
    height: ${height}px;
    width: fit-content;
    cursor: ${onClick && 'pointer'};
  `}
`;

export const LogoImg = styled.img`
  height: 100%;
  width: auto;
`;
