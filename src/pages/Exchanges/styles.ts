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

    width: 190px;

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
    margin-left: 120px;
  }
`;

export const Items = styled.div``;
