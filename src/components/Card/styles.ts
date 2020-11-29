import styled from 'styled-components';
import { lighten } from 'polished';

interface ContainerProps {
  width?: number;
}

export const Container = styled.div<ContainerProps>`
  background: ${props => lighten(0.05, props.theme.colors.black)};
  border-radius: 8px;

  padding: 32px;

  width: ${props => `${props.width}%`};
  height: 80vh;

  > h1 {
    color: ${props => lighten(0.05, props.theme.colors.primary)};

    margin-bottom: 16px;
  }
`;
