import { lighten } from 'polished';
import styled from 'styled-components';

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

    width: 135px;

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

export const Tables = styled.div`
  width: 100%;

  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  > div + div {
    margin-left: 80px;
  }

  .card-production {
    height: 100%;
    width: 100%;

    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;

    span {
      font-size: 3.6em;
      color: ${props => lighten(0.05, props.theme.colors.primary)};
      margin-top: -80px;
    }
  }
`;
