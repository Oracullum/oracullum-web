import { darken, lighten } from 'polished';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  > h1 {
    margin-bottom: 64px;

    position: relative;

    width: 130px;

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

export const Header = styled.header`
  width: 100%;

  margin-bottom: 32px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  h1 {
    color: ${props => props.theme.colors.primary};
  }
`;

export const Tables = styled.div`
  width: 100%;

  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  > div + div {
    margin-left: 80px;
  }
`;

export const BoxProfile = styled.header`
  background: ${props =>
    props.theme.title === 'light'
      ? darken(0.05, props.theme.colors.white)
      : lighten(0.05, props.theme.colors.black)};

  padding: 25px 35px;

  border-radius: 12px;

  form button {
    background-color: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.white};

    font-weight: bold;

    padding: 10px 15px;

    border-radius: 8px;
  }
`;

export const Item = styled.header`
  display: flex;
  flex-direction: column;

  margin-bottom: 24px;

  label {
    font-size: 1.2em;
    color: ${props => props.theme.colors.grayDark};
    font-weight: 600;
    margin-bottom: 4px;
  }

  input {
    max-width: 250px;
    min-height: 32px;

    padding: 8px;

    background-color: transparent;
    color: ${props => props.theme.colors.white};

    border: 1px solid ${props => props.theme.colors.primary};
    border-radius: 8px;
  }
`;
