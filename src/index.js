import React from 'react';
import ReactDOM from 'react-dom/client';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import App from './App';

const Global = createGlobalStyle`
  body {
    margin: 0;
  }
  * {
    box-sizing: border-box;
    font-family: consolas;
  }
`;

const theme = {
    colors: {
        primary: 'green',
        secondary: '#fff',
    },
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ThemeProvider theme={theme}>
        <Global />
        <App />
    </ThemeProvider>
);
