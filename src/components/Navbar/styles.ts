import styled from 'styled-components';

export const Container = styled.nav`
  display: flex;
  align-items: flex-start;
`;

export const ThemeSwitcher = styled.section`
  display: flex;
  align-items: center;

  div {
    height: 22px;
  }
`;

export const NavigationBar = styled.nav`
  ul {
    display: flex;

    li {
      margin: 0 15px;

      a,
      button {
        color: ${props =>
          props.theme.title === 'light'
            ? props.theme.colors.black
            : props.theme.colors.white};
        font-size: 18px;
        font-weight: bold;
        font-family: Archivo;

        &:hover {
          color: ${props => props.theme.colors.primary};
          border-bottom: 2px solid ${props => props.theme.colors.primary};
        }

        svg {
          margin-right: 8px;
        }
      }
    }
  }
`;
