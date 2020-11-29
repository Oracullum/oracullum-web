import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

interface PresentationProps {
  backgroundImg?: string;
}

export const Presentation = styled.div<PresentationProps>`
  background: url(${props => props.backgroundImg}) no-repeat;
  background-size: cover;
  height: 100vh;
  width: 100%;

  position: relative;

  a img {
    position: absolute;
    top: 40px;
    left: 100px;

    width: 400px;

    z-index: 10;
  }

  p {
    position: absolute;
    top: 240px;
    left: 100px;

    max-width: 400px;

    color: ${props => props.theme.colors.black};
    font-size: 48px;
    font-weight: bold;
    font-family: Archivo;

    z-index: 10;

    span {
      color: ${props => props.theme.colors.white};
      font-family: Titillium Web;
    }
  }
`;

export const AccessContainer = styled.div`
  background: ${props =>
    props.theme.title === 'light'
      ? props.theme.colors.white
      : props.theme.colors.black};
  height: 100vh;
  width: 480px;

  padding: 60px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  > span {
    color: ${props => props.theme.colors.primary};
    font-size: 18px;
    margin-bottom: 16px;
  }
`;

export const ExternalLogins = styled.div`
  background: ${props => shade(0.2, props.theme.colors.white)};
  padding: 14px;
  border-radius: 16px;
  margin: 8px 0 32px !important;

  display: flex;
`;

export const ActionButtons = styled.div`
  width: 100%;
  margin-top: 50px;

  display: flex;
  justify-content: space-between;
`;

export const RememberMeContainer = styled.section`
  margin: 32px 0 40px 0;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    color: ${props => props.theme.colors.primary};
    font-weight: bold;

    cursor: pointer;

    transition: color 0.4s;

    &:hover {
      color: ${props => shade(0.2, props.theme.colors.primary)};
    }
  }
`;
