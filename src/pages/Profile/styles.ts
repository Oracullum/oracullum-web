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
