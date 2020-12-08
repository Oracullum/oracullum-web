import styled, { css } from 'styled-components';
import { shade } from 'polished';

interface TdProps {
  isOperationBuy?: string;
}

export const Td = styled.td<TdProps>`
  padding: 0 16px;

  background: ${props =>
    props.theme.title === 'light'
      ? props.theme.colors.primaryLight
      : props.theme.colors.black};

  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;

  &:hover {
    background: ${shade(0.6, '#414345')};
  }

  &:nth-of-type(5) {
    ${props =>
      props.theme.title === 'light'
        ? css`
            ${props.isOperationBuy === 'buy'
              ? css`
                  color: ${props.theme.colors.yellow};
                `
              : css`
                  color: #a80000;
                `}
          `
        : css`
            ${props.isOperationBuy === 'buy'
              ? css`
                  color: ${props.theme.colors.greenLight};
                `
              : css`
                  color: #a80000;
                `}
          `}
  }

  &:first-child {
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;

    position: relative;

    &:before {
      content: '';
      width: 8px;
      height: 100%;

      border-top-left-radius: 8px;
      border-bottom-left-radius: 8px;

      position: absolute;
      left: 0;
      top: 0;

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
    }
  }

  &:last-child {
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
  }
`;
