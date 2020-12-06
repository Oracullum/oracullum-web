import React, { useCallback } from 'react';
import { ThemeProvider, DefaultTheme } from 'styled-components';
import { ToastContainer } from 'react-toastify';

import { AuthProvider } from './context/AuthContext';
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
    <AuthProvider>
      <ThemeProvider theme={theme}>
        <HandlesProvider toggleTheme={toggleTheme}>
          <Routes />
          <GlobalStyle />
          <ToastContainer autoClose={3000} />
        </HandlesProvider>
      </ThemeProvider>
    </AuthProvider>
  );
};

export default App;
