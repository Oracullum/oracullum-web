import styled, { css } from 'styled-components';
import { shade } from 'polished';

interface ContainerProps {
  isOperationBuy: string;
}

export const Container = styled.div<ContainerProps>`
  background: #414345;
  margin: 24px 0;

  border-radius: 8px;

  display: flex;
  align-items: center;

  height: 48px;

  cursor: pointer;

  transition: background 200ms;

  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;

  > div:nth-of-type(1) {
    height: 100%;
    width: 6px;
    ${props =>
      props.isOperationBuy === 'buy'
        ? css`
            background: ${props.theme.colors.greenLight};
          `
        : css`
            background: #fe3333;
          `}
    border-bottom-left-radius: 8px;
    border-top-left-radius: 8px;
  }

  &:hover {
    background: ${shade(0.1, '#414345')};
  }

  div p {
    ${props =>
      props.isOperationBuy === 'buy'
        ? css`
            color: ${props.theme.colors.greenLight};
          `
        : css`
            color: #fe3333;
          `}
  }
`;

export const Item = styled.div`
  margin: 0 16px;

  h3 {
    color: #ccc;
    font-weight: 400;
    font-size: 1.1em;
  }

  p {
    margin-top: 2px;
    font-weight: bold;

    font-size: 1.4em;
  }
`;

export const Divider = styled.div`
  width: 3px;
  height: 80%;

  background: #2b2d2f;
`;
