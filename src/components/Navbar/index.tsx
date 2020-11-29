import React, { useContext, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from 'styled-components';
import { FaUser, FaSignOutAlt } from 'react-icons/fa';
import Switch from 'react-switch';

import HandlesContext from '../../context/handles';

import { Container, ThemeSwitcher, NavigationBar } from './styles';

const Navbar: React.FC = () => {
  const { title, colors } = useContext(ThemeContext);
  const { toggleTheme } = useContext(HandlesContext);

  const handleSignOut = useCallback(() => {
    console.log('sair');
  }, []);

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
            <Link to="/profile">
              <FaUser size={16} color={colors.primary} />
              MEU PERFIL
            </Link>
          </li>
          <li>
            <button type="button">
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
