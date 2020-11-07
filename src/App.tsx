import React from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from './styles/global';

import light from './styles/themes/light';

const App: React.FC = () => (
  <ThemeProvider theme={light}>
    <GlobalStyle />
  </ThemeProvider>
);

export default App;
