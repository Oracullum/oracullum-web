import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  background: ${props =>
    props.theme.title === 'light'
      ? props.theme.colors.primary
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

    background: ${props => props.theme.colors.green};
    border-bottom-left-radius: 8px;
    border-top-left-radius: 8px;
  }

  > div:nth-of-type(4) {
    h3 {
      color: ${props => props.theme.colors.white};
    }

    p {
      color: ${props => props.theme.colors.primary};
    }
  }

  &:hover {
    background: ${shade(0.1, '#414345')};
  }
`;

export const Item = styled.div`
  margin: 0 16px;

  h3 {
    color: ${props => props.theme.colors.primary};
    font-weight: bold;
  }

  p {
    margin-top: 2px;
    font-weight: bold;
  }
`;

export const Divider = styled.div`
  width: 3px;
  height: 80%;

  background: #2b2d2f;
`;
