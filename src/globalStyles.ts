import styled, { createGlobalStyle } from 'styled-components';
import { red } from '@mui/material/colors';
import { Theme, createTheme } from '@mui/material';

import { SECONDARY_SHADES, MAIN_COLORS } from './utils/ui/colors';

export const GlobalStyle = createGlobalStyle`
  *,
  * ::before,
  * ::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
  }
  a {
    text-decoration: none;
  }
  .font-mulish {
    font-family: 'Mulish', 'Roboto', sans-serif;
  }
  *::-webkit-scrollbar {
    width: 6px;
  }
  *::-webkit-scrollbar-track {
    // margin-block: 4px;
    border-radius: 5px;
  }
  *::-webkit-scrollbar-thumb {
    background: ${SECONDARY_SHADES[400]};
    border-radius: 5px;
  }
  *::-webkit-scrollbar-thumb:hover {
    background: ${SECONDARY_SHADES.SCROLLBAR};
  }
`;

export const globalMuiTheme: Theme = createTheme({
  palette: {
    primary: {
      main: MAIN_COLORS.primary,
    },
    secondary: {
      main: MAIN_COLORS.secondary,
    },
    error: {
      main: red[700],
    },
  },
  components: {
    MuiIconButton: {
      styleOverrides: {
        root: {
          padding: '4px',
        },
      },
    },
  },
});

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
