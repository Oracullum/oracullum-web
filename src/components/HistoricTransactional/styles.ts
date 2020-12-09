import styled, { css } from 'styled-components';
import { shade, darken } from 'polished';

interface ContainerProps {
  isOperationBuy: string;
}

export const Container = styled.div<ContainerProps>`
  background: ${props =>
    props.theme.title === 'light'
      ? darken(0.08, props.theme.colors.primaryLighter)
      : props.theme.colors.black};
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
      props.theme.title === 'light'
        ? css`
            ${props.isOperationBuy === 'buy'
              ? css`
                  background: ${props.theme.colors.yellow};
                `
              : css`
                  background: #a80000;
                `}
          `
        : css`
            ${props.isOperationBuy === 'buy'
              ? css`
                  background: ${props.theme.colors.greenLight};
                `
              : css`
                  background: #a80000;
                `}
          `}
    border-bottom-left-radius: 8px;
    border-top-left-radius: 8px;
  }

  &:hover {
    background: ${props =>
      props.theme.title === 'light'
        ? darken(0.04, props.theme.colors.primaryLight)
        : shade(0.1, '#414345')};
  }

  ${props =>
    props.theme.title === 'light'
      ? css`
          div p {
            ${props.isOperationBuy === 'buy'
              ? css`
                  color: ${props.theme.colors.yellow};
                `
              : css`
                  color: ${() => darken(0.0, '#a80000')};
                `}
          }
        `
      : css`
          div p {
            ${props.isOperationBuy === 'buy'
              ? css`
                  color: ${props.theme.colors.greenLight};
                `
              : css`
                  color: ${() => darken(0.0, '#a80000')};
                `}
          }
        `}
`;

export const Item = styled.div`
  margin: 0 16px;

  h3 {
    color: ${props =>
      props.theme.title === 'light' ? props.theme.colors.white : '#ccc'};
    font-weight: 400;
  }

  p {
    margin-top: 2px;
    font-weight: bold;
  }
`;

export const Divider = styled.div`
  width: 3px;
  height: 80%;

  background: ${props =>
    props.theme.title === 'light'
      ? props.theme.colors.primaryLighter
      : '#2b2d2f'};
`;
