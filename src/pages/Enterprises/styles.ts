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

export const Items = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(560px, 1fr));
  column-gap: 24px;
  row-gap: 36px;
`;
