import React, { useState, useContext } from 'react';

import { ThemeContext } from 'styled-components';

import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

import {
  Container,
  Items,
  Item,
  AccordionTitle,
  AccordionContent,
  Enterprises,
} from './styles';

import EnterpriseExchange from '../EnterpriseExchange';

const Accordion: React.FC = () => {
  const { colors } = useContext(ThemeContext);

  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <Container>
      <AccordionTitle>
        <span>ITUB4</span>

        <Items>
          <Item>
            <label>Ações</label>
            <span>80 ações</span>
          </Item>
        </Items>

        {isOpen ? (
          <button type="button" onClick={() => setIsOpen(!isOpen)}>
            <FaChevronUp color={colors.primary} size={20} />
          </button>
        ) : (
          <button type="button" onClick={() => setIsOpen(!isOpen)}>
            <FaChevronDown color={colors.primary} size={20} />
          </button>
        )}
      </AccordionTitle>

      <AccordionContent isOpen={isOpen}>
        <Enterprises>
          <EnterpriseExchange enterpriseValue="ITUB4" />

          <EnterpriseExchange enterpriseValue="ITUB4" />

          <EnterpriseExchange enterpriseValue="ITUB4" />
        </Enterprises>
      </AccordionContent>
    </Container>
  );
};

export default Accordion;
