import styled, { css } from 'styled-components';
import { lighten, shade } from 'polished';

export const Container = styled.div`
  & + div {
    margin-top: 24px;
  }
`;

export const AccordionTitle = styled.div`
  background: ${props => lighten(0.05, props.theme.colors.background)};
  border-radius: 16px;

  padding: 32px;

  display: flex;
  align-items: center;

  width: 100%;

  z-index: 1;

  > span {
    font-size: 1.8em;
    font-weight: bold;
    color: ${props => props.theme.colors.primary};

    margin-right: 86px;
  }
`;

export const Items = styled.div`
  display: flex;
  width: 100%;
`;

export const Item = styled.div`
  display: flex;
  flex-direction: column;

  margin-right: 60px;

  label {
    margin-bottom: 8px;
    color: #656565;
  }

  span {
    font-size: 1.4em;
    font-weight: bold;
    color: ${props => props.theme.colors.primary};
  }
`;

interface AccordionContentProps {
  isOpen: boolean;
}

export const AccordionContent = styled.div<AccordionContentProps>`
  /* padding: 32px; */

  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;

  margin-top: -10px;
  /* padding-top: 32px; */

  visibility: ${props => (props.isOpen ? 'visible' : 'hidden')};
  opacity: ${props => (props.isOpen ? 1 : 0)};

  transition: all 200ms;

  display: flex;

  ${props =>
    !props.isOpen &&
    css`
      height: 0;
      padding: 0;
    `}

  background: ${props => lighten(0.03, props.theme.colors.background)};
`;

export const HistoricTransactionals = styled.div`
  background-color: #333435;
  width: 100%;
  max-height: 272px;

  padding: 32px 40px;

  border-bottom-left-radius: 12px;

  overflow-y: scroll;
  ::-webkit-scrollbar {
    width: 10px;
  }
  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 3px ${props => props.theme.colors.primary};
    border-radius: 10px;
  }
  ::-webkit-scrollbar-thumb {
    background: ${props => props.theme.colors.primary};
    border-radius: 10px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: ${props => shade(0.2, props.theme.colors.primary)};
  }
`;

export const Transaction = styled.div`
  background: ${props => lighten(0.05, props.theme.colors.background)};
  width: 100%;

  padding: 32px 40px;

  border-bottom-right-radius: 12px;

  h3 {
    margin-bottom: 24px;
    font-size: 1.4em;
    color: ${props => props.theme.colors.primary};
  }

  label {
    display: block;
    margin-bottom: 8px;
    color: #656565;
    font-weight: bold;
    font-size: 1.2em;
  }
`;

interface ButtonGroupProps {
  isBuy: boolean;
}

export const ButtonGroup = styled.div<ButtonGroupProps>`
  display: flex;
  justify-content: space-between;

  button:nth-of-type(1) {
    border-top-left-radius: 12px;
    border-bottom-left-radius: 12px;
    ${props =>
      props.isBuy &&
      css`
        background-color: ${() => props.theme.colors.primary};
        color: ${() => props.theme.colors.white};
      `}
  }

  button:nth-of-type(2) {
    border-top-right-radius: 12px;
    border-bottom-right-radius: 12px;
    ${props =>
      !props.isBuy &&
      css`
        background-color: ${() => props.theme.colors.primary};
        color: ${() => props.theme.colors.white};
      `}
  }

  button {
    padding: 12px 16px;
    border: 1px solid ${props => props.theme.colors.primary};
    color: #656565;
    font-weight: bold;
    min-width: 90px;
  }

  a {
    max-width: 120px;
  }
`;

export const Buttons = styled.div``;

export const InputGroup = styled.div`
  margin-top: 24px;

  display: flex;
  justify-content: space-between;
`;

export const Inputs = styled.div`
  label {
    display: block;
    margin-bottom: 8px;
    color: #656565;
    font-weight: bold;
    font-size: 1.2em;
  }

  div {
    border: 1px solid ${props => props.theme.colors.primary};
    background-color: ${props => lighten(0.05, props.theme.colors.background)};

    input {
      color: ${props => props.theme.colors.white};
    }
  }
`;
