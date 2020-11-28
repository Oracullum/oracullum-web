import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div``;

export const Item = styled.div``;

export const Divider = styled.div`
  width: 2px;
  height: 100%;

  background: ${props => shade(0.2, props.theme.colors.black)};
`;
