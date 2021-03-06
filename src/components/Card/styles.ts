import styled from 'styled-components';
import { lighten, darken } from 'polished';

interface ContainerProps {
  width?: number;
}

export const Container = styled.div<ContainerProps>`
  background: ${props =>
    props.theme.title === 'light'
      ? darken(0.05, props.theme.colors.white)
      : lighten(0.05, props.theme.colors.black)};
  border-radius: 8px;

  padding: 32px;

  width: ${props => `${props.width}%`};
  min-width: 330px !important;
  height: 80vh;

  > h1 {
    color: ${props => lighten(0.05, props.theme.colors.primary)};

    margin-bottom: 16px;
  }
`;
