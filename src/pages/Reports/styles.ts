import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Header = styled.header`
  width: 100%;

  margin-bottom: 64px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  > h1 {
    position: relative;

    width: 122px;

    &:after {
      content: '';

      position: absolute;
      bottom: -6px;
      left: 0;

      background: ${props => props.theme.colors.primaryGradient};
      width: 100%;
      height: 2px;
    }
  }
`;

export const Labels = styled.div`
  color: ${props => props.theme.colors.gray};

  display: flex;
  align-items: center;

  div {
    display: flex;
    align-items: center;

    strong {
      margin-left: 6px;
    }
  }
`;

export const Record = styled.div`
  background: ${props =>
    props.theme.title === 'light'
      ? props.theme.colors.primary
      : props.theme.colors.black};
  margin: 8px 0;

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

  > div:nth-of-type(5) {
    h3 {
      color: ${props => props.theme.colors.green};
    }
  }

  &:hover {
    background: ${shade(0.1, '#414345')};
  }
`;

export const Item = styled.div`
  margin: 0 16px;
  padding: 0 16px;

  h3 {
    color: ${props => props.theme.colors.grayLight};
    font-weight: bold;
  }
`;

export const Divider = styled.div`
  width: 3px;
  height: 80%;

  background: #2b2d2f;
`;
