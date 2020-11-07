import styled from 'styled-components';
import { lighten, darken } from 'polished';

interface ExternalLoginButtonProps {
  color: string;
}

export const Container = styled.div<ExternalLoginButtonProps>`
  background: ${props =>
    props.theme.title === 'light'
      ? props.theme.colors.white
      : props.theme.colors.black};
  border-radius: 8px;
  padding: 8px 16px;
  margin: 4px;

  position: relative;

  cursor: pointer;

  svg {
    margin: 2px 0;
  }

  &:hover {
    background: ${props =>
      props.theme.title === 'light'
        ? lighten(0.8, props.theme.colors.white)
        : darken(0.8, props.theme.colors.black)};
    box-shadow: inset 0 0 1em transparent,
      0.1em 0.1em 0.4em ${props => props.theme.colors.secondaryLighter};

    div {
      background: ${props =>
        props.theme.title === 'light'
          ? lighten(0.2, props.color)
          : darken(0.2, props.color)};
    }
  }
`;

export const Bar = styled.div<ExternalLoginButtonProps>`
  background: ${props => props.color};
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;

  width: 100%;
  height: 10px;

  position: absolute;
  bottom: 0;
  left: 0;
`;
