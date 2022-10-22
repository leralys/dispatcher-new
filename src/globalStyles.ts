import styled, { createGlobalStyle } from 'styled-components';
import type {} from '@mui/x-date-pickers/themeAugmentation';
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
  // *::-webkit-scrollbar {
  //   width: 6px;
  // }
  // *::-webkit-scrollbar-track {
  //   margin-block: 4px;
  //   border-radius: 5px;
  // }
  // *::-webkit-scrollbar-thumb {
  //   background: ${SECONDARY_SHADES[400]};
  //   border-radius: 5px;
  // }
  // *::-webkit-scrollbar-thumb:hover {
  //   background: ${SECONDARY_SHADES[400]}90;
  // }
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
      main: MAIN_COLORS.error,
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
    MuiPickersCalendarHeader: {
      styleOverrides: {
        root: {
          color: `${SECONDARY_SHADES[400]}`,
        },
        label: {
          fontSize: '14px',
        },
        switchViewButton: {
          '&:hover': {
            background: `${MAIN_COLORS.secondary}70`,
          },
        },
      },
    },
    MuiPickersDay: {
      styleOverrides: {
        root: {
          color: `${SECONDARY_SHADES[400]}`,
          '&:hover': {
            background: `${MAIN_COLORS.secondary}80`,
          },
          '&.Mui-selected': {
            '&:focus': {
              background: `${MAIN_COLORS.primary}`,
            },
            '&:hover': {
              opacity: 0.8,
            },
          },
        },
        today: {
          '&:not(.Mui-selected)': {
            border: `1px solid ${SECONDARY_SHADES[400]}`,
          },
        },
      },
    },
    PrivatePickersMonth: {
      styleOverrides: {
        root: {
          color: `${SECONDARY_SHADES[400]}`,
          '&:hover': {
            background: `${MAIN_COLORS.secondary}80`,
          },
          '&.Mui-selected': {
            '&:focus': {
              background: `${MAIN_COLORS.primary}`,
            },
            '&:hover': {
              opacity: 0.8,
            },
          },
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
