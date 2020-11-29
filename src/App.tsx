import React, { useCallback } from 'react';
import { ThemeProvider, DefaultTheme } from 'styled-components';

import { HandlesProvider } from './context/handles';
import usePersistedState from './hooks/usePersistedState';

import Routes from './routes';

import GlobalStyle from './styles/global';

import light from './styles/themes/light';
import dark from './styles/themes/dark';

const App: React.FC = () => {
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light);

  const toggleTheme = useCallback(() => {
    setTheme(theme.title === 'light' ? dark : light);
  }, [theme.title, setTheme]);

  return (
    <ThemeProvider theme={theme}>
      <HandlesProvider toggleTheme={toggleTheme}>
        <Routes />
        <GlobalStyle />
      </HandlesProvider>
    </ThemeProvider>
  );
};

export default App;
