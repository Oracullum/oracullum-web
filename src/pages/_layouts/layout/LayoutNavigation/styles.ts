import styled, { css } from 'styled-components';
import { lighten, shade } from 'polished';

export const Container = styled.div`
  display: flex;

  height: 100%;
`;

export const AsideNavigationContainer = styled.div`
  padding: 16px;

  img {
    width: 6rem;
    margin-bottom: 22px;
  }

  div + div {
    margin-top: 1rem;
  }
`;

interface AsideNavigationItemProps {
  active: boolean;
}

export const AsideNavigationItem = styled.div<AsideNavigationItemProps>`
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;

  background: ${props =>
    props.active && props.theme.title === 'light'
      ? props.theme.colors.white
      : props.active && props.theme.title === 'dark'
      ? props.theme.colors.black
      : 'transparent'};

  border-radius: 16px;
  padding: 4px;

  width: 6rem;
  height: 5rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  cursor: pointer;

  position: relative;

  ${props =>
    props.active &&
    css`
      &:after {
        content: '';
        position: absolute;

        background-color: transparent;
        top: -50px;
        right: -16px;
        height: 50px;
        width: 16px;
        border-bottom-right-radius: 25px;
        box-shadow: 0 25px 0 0
          ${props.theme.title === 'light'
            ? props.theme.colors.white
            : props.theme.colors.black};
      }

      div {
        background: ${props.theme.title === 'light'
          ? props.theme.colors.white
          : props.theme.colors.black};
        width: 64px;
        height: 80px;
        right: -16px;
        position: absolute;

        z-index: -1;
      }

      &:before {
        content: '';
        position: absolute;

        background-color: transparent;
        bottom: -50px;
        right: -16px;
        height: 50px;
        width: 16px;
        border-top-right-radius: 25px;
        box-shadow: 0 -25px 0 0 ${props.theme.title === 'light' ? props.theme.colors.white : props.theme.colors.black};
      }
    `}

  &:hover {
    color: ${props => !props.active && lighten(0.1, props.theme.colors.white)};
    background: ${props =>
      !props.active && shade(0.2, props.theme.colors.primary)};

    svg {
      color: ${props =>
        !props.active && lighten(0.1, props.theme.colors.white)};
    }
  }

  svg {
    margin-bottom: 0.6rem;
  }

  span {
    color: ${props => props.active && props.theme.colors.primary};
    font-size: 12px;
    font-weight: bold;
    text-align: center;
  }
`;

export const ContentWrapper = styled.div`
  color: ${props => props.theme.colors.text};
  background: ${props =>
    props.theme.title === 'light'
      ? props.theme.colors.white
      : props.theme.colors.black};

  width: 100%;
  height: 100%;

  padding: 32px;

  overflow-y: scroll;
  ::-webkit-scrollbar {
    width: 10px;
  }
  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 3px ${props => props.theme.colors.primary};
    border-radius: 10px;
  }
  ::-webkit-scrollbar-thumb {
    background: ${props => props.theme.colors.primary};
    border-radius: 10px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: ${props => shade(0.2, props.theme.colors.primary)};
  }
`;
