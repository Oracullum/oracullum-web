import styled from 'styled-components';
import { shade, lighten, darken } from 'polished';

interface ILinkProps {
  outline?: boolean;
  amount?: number;
  color: string;
  func?: 'lighten' | 'darken';
}

export const Container = styled.div<ILinkProps>`
  a {
    background: ${props => (props.outline ? 'transparent' : props.color)};
    color: ${props => (props.outline ? props.color : props.theme.colors.white)};
    border: 3px solid ${props => props.color};

    padding: 8px 20px;
    border-radius: 12px;

    font-size: 16px;
    font-weight: bold;

    letter-spacing: 1px;
    text-transform: uppercase;

    position: relative;

    display: flex;
    align-items: center;
    justify-content: center;

    transition: background-color 0.4s;

    &:hover {
      color: ${props => props.outline && lighten(0.8, props.color)};
      background: ${props =>
        props.outline && props.func
          ? props.func === 'lighten'
            ? lighten(props.amount || 0.2, props.color)
            : darken(props.amount || 0.2, props.color)
          : shade(0.2, props.color)};
    }

    svg {
      margin-left: 6px;
    }
  }
`;
