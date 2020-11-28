import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 1440px;
  margin: auto;

  display: grid;
  grid-template-areas:
    'logo hero'
    'resume hero'
    'actions total';

  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;

  img {
    grid-area: logo;
    width: 70%;
  }

  p {
    grid-area: resume;

    color: ${props => props.theme.colors.black};
    font-size: 36px;
    font-weight: bold;
    font-family: Archivo;

    max-width: 620px;
  }
`;

export const ActionButtons = styled.div`
  grid-area: actions;

  display: flex;

  div + div {
    margin-left: 52px;
  }
`;

export const Hero = styled.div`
  grid-area: hero;

  margin-bottom: 80px;
`;

export const TotalConnections = styled.div`
  grid-area: total;

  align-self: flex-end;

  text-align: right;

  color: ${props => props.theme.colors.black};
  font-size: 24px;
`;
