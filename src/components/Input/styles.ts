import styled, { css } from 'styled-components';

import Tooltip from '../Tooltip';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
  type?: string;
}

export const Container = styled.div<ContainerProps>`
  ${props =>
    props.type !== 'hidden' &&
    css`
      background: ${props.theme.title === 'light'
        ? props.theme.colors.white
        : 'transparent'};
      border: 3px solid ${props.theme.colors.primaryLight};

      &:hover {
        box-shadow: inset 0 0 1em transparent,
          0 0 0.4em ${props.theme.colors.primary};
      }
    `}

  ${props =>
    props.type === 'hidden' &&
    css`
      display: none !important;
    `}

  border-radius: 12px;
  padding: 8px;
  width: 100%;
  color: ${props => props.theme.colors.grayLight};

  display: flex;
  align-items: center;
  justify-content: space-between;

  height: 46px;

  & + div {
    margin-top: 32px;
  }

  ${props =>
    props.isErrored &&
    css`
      border-color: ${props.theme.colors.red};
    `}

  ${props =>
    props.isFocused &&
    css`
      color: ${props.theme.colors.primary};
      border-color: ${props.theme.colors.primary};
    `}

  ${props =>
    props.isFilled &&
    css`
      color: ${props.theme.colors.primary};
    `}

  input {
    background: transparent;
    flex: 1;
    border: 0;
    color: ${props =>
      props.theme.title === 'light'
        ? props.theme.colors.black
        : props.theme.colors.primary};

    &::placeholder {
      color: ${props => props.theme.colors.grayLight};
    }
  }

  svg:nth-of-type(1) {
    cursor: pointer;
  }

  svg:nth-of-type(2) {
    margin-left: 8px;
  }
`;

export const IconContainer = styled.div`
  background: transparent;
  width: 34px;
  height: 34px;
  border-radius: 8px;

  cursor: pointer;

  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: #eee;
  }
`;

export const Error = styled(Tooltip)`
  height: 20px;
  margin-right: 4px;

  span {
    color: ${props => props.theme.colors.white} !important;
    background: ${props => props.theme.colors.red};

    &::before {
      border-color: ${props => props.theme.colors.red} transparent;
    }
  }
`;
