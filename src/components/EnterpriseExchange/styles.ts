import styled from 'styled-components';
import { shade, lighten } from 'polished';

export const Container = styled.div`
  form {
    display: flex;
    justify-content: space-between;
    height: 100%;
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  background: #414345;
  margin: 24px 0;

  border-radius: 8px;

  display: flex;
  align-items: center;

  height: 54px;

  cursor: pointer;

  transition: background 200ms;

  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;

  > div:nth-of-type(1) {
    height: 100%;
    width: 6px;

    background: ${props => props.theme.colors.greenLight};

    border-bottom-left-radius: 8px;
    border-top-left-radius: 8px;
  }

  &:hover {
    background: ${shade(0.1, '#414345')};
  }

  div p {
    color: ${props => props.theme.colors.greenLight};
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

  button {
    height: 40px;
    margin-top: 7px;
    width: 100%;
    font-size: 1em;
    padding: 4px 8px;
  }
`;

export const Divider = styled.div`
  width: 3px;
  height: 80%;

  background: #2b2d2f;
`;

export const Inputs = styled.div`
  margin: 0 16px;

  h3 {
    color: #ccc;
    font-weight: 400;
    font-size: 1.1em;
  }
  div {
    border: 1px solid ${props => props.theme.colors.primary};
    background-color: ${props => lighten(0.05, props.theme.colors.background)};
    height: 28px;
    width: 85px;
    margin-top: 2px;
    border-radius: 8px;

    input {
      color: ${props => props.theme.colors.white};
      width: 100%;
    }
  }

  button {
    background-color: ${props => props.theme.colors.primary};
    border-radius: 8px;
    padding: 6px 10px;
    color: ${props => props.theme.colors.white};
    font-weight: bold;
  }
`;
