import styled, { css } from 'styled-components';

import { Props } from './Logo';

export const LogoContainer = styled.div`
  ${({ customHeight: height, onClick }: Props) => css`
    height: ${height}px;
    width: fit-content;
    cursor: ${onClick && 'pointer'};
  `}
`;

export const LogoImg = styled.img`
  height: 100%;
  width: auto;
`;
