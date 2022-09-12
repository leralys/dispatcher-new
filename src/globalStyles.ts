import styled, { createGlobalStyle } from 'styled-components';
import { SECONDARY_SHADES } from './utils/ui/colors';

export const GlobalStyle = createGlobalStyle`
  *,
  * ::before,
  * ::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    color: ${SECONDARY_SHADES[400]};
    font-size: 16px;
  }
  a {
    text-decoration: none;
  }
  .font-mulish {
    font-family: 'Mulish', 'Roboto', sans-serif;
  }
`;

export const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
`;

export const BORDER_RADIUS = {
  8: '8px',
  10: '10px',
  20: '20px',
};
