import React, { useState, useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import Ink from 'react-ink';

import EnterpriseExchange from '../EnterpriseExchange';

import {
  Container,
  Items,
  Item,
  AccordionTitle,
  AccordionContent,
  Enterprises,
} from './styles';

const Accordion: React.FC = () => {
  const { title, colors } = useContext(ThemeContext);

  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <Container>
      <AccordionTitle onClick={() => setIsOpen(!isOpen)}>
        <Ink />

        <span>Itaú</span>

        <Items>
          <Item>
            <label>Ações</label>
            <span>80 ações</span>
          </Item>
        </Items>

        {isOpen ? (
          <button type="button" onClick={() => setIsOpen(!isOpen)}>
            <FaChevronUp
              color={title === 'light' ? colors.white : colors.primary}
              size={20}
            />
          </button>
        ) : (
          <button type="button" onClick={() => setIsOpen(!isOpen)}>
            <FaChevronDown
              color={title === 'light' ? colors.white : colors.primary}
              size={20}
            />
          </button>
        )}
      </AccordionTitle>

      <AccordionContent isOpen={isOpen}>
        <Enterprises>
          <EnterpriseExchange value="ITUB4" />

          <EnterpriseExchange value="ITUB4" />

          <EnterpriseExchange value="ITUB4" />
        </Enterprises>
      </AccordionContent>
    </Container>
  );
};

export default Accordion;
