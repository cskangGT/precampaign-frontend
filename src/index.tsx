import React from 'react';
import ReactDOM from 'react-dom/client';
import Router from './Router';

import GlobalStyle from './styles/GlobalStyle';
import { ThemeProvider } from '@emotion/react';
import theme from './styles/theme';

const rootNode: any = document.getElementById('root');

ReactDOM.createRoot(rootNode).render(
  <>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <Router />
    </ThemeProvider>
  </>,
);

// ReactDOM.render(
//   <>
//     <GlobalStyle />
//     <ThemeProvider theme={theme}>
//       <Router />
//     </ThemeProvider>
//   </>,
//   rootElement,
// )
