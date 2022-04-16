import React from 'react';
import ReactDOM from 'react-dom';
import Router from './Router';

import GlobalStyle from './styles/GlobalStyle';
import { ThemeProvider } from '@emotion/react';
import theme from './styles/theme';

const rootElement = document.getElementById('root');
ReactDOM.render(
  <>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <Router />
    </ThemeProvider>
  </>,
  rootElement,
);
