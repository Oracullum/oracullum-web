import React, { useContext, useCallback } from 'react';
import { ThemeContext } from 'styled-components';
import { FaSignOutAlt } from 'react-icons/fa';
import Switch from 'react-switch';

import { useAuth } from '../../context/AuthContext';
import HandlesContext from '../../context/handles';

import { Container, ThemeSwitcher, NavigationBar } from './styles';

const Navbar: React.FC = () => {
  const { signOut } = useAuth();

  const { title, colors } = useContext(ThemeContext);
  const { toggleTheme } = useContext(HandlesContext);

  const handleSignOut = useCallback(() => {
    signOut();
  }, [signOut]);

  return (
    <Container>
      <ThemeSwitcher>
        <Switch
          onChange={toggleTheme}
          checked={title === 'dark'}
          checkedIcon={false}
          uncheckedIcon={false}
          height={10}
          width={40}
          handleDiameter={20}
          offColor={colors.black}
          onColor={colors.secondary}
          offHandleColor={colors.red}
          onHandleColor={colors.green}
        />
      </ThemeSwitcher>

      <NavigationBar>
        <ul>
          <li>
            <button type="button" onClick={handleSignOut}>
              <FaSignOutAlt size={16} color={colors.primary} />
              SAIR
            </button>
          </li>
        </ul>
      </NavigationBar>
    </Container>
  );
};

export default Navbar;
