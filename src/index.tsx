import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/system';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

import App from './App';
import { GlobalStyle, globalMuiTheme } from './globalStyles';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
const queryClient = new QueryClient({});

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={globalMuiTheme}>
        <GlobalStyle />
        <QueryClientProvider client={queryClient}>
          <Routes>
            <Route path='/' element={<App />} />
          </Routes>
          <ReactQueryDevtools initialIsOpen={true} />
        </QueryClientProvider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
