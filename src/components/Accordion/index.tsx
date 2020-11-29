import React, { useState, useContext, useCallback, useRef } from 'react';

import { ThemeContext } from 'styled-components';

import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { FormHandles } from '@unform/core';

import { Form } from '@unform/web';
import {
  Container,
  Items,
  Item,
  AccordionTitle,
  AccordionContent,
  HistoricTransactionals,
  Transaction,
  ButtonGroup,
  Buttons,
  InputGroup,
  Inputs,
} from './styles';

import Link from '../Link';
import Input from '../Input';

const Accordion: React.FC = () => {
  const { colors } = useContext(ThemeContext);

  const formRef = useRef<FormHandles>(null);

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isBuy, setIsBuy] = useState<boolean>(false);

  const handleSetTypeTransaction = useCallback(e => {
    const { value } = e.target;
    setIsBuy(value === 'buy');
  }, []);

  const handleSubmit = useCallback((data: any) => {
    console.log(data);
    // data.operation = isBuy ? 'buy' : 'sell';
  }, []);

  return (
    <Container>
      <AccordionTitle>
        <span>ITUB4</span>

        <Items>
          <Item>
            <label>Código</label>
            <span>123456</span>
          </Item>

          <Item>
            <label>Empresa</label>
            <span>Itaú</span>
          </Item>

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
        <HistoricTransactionals>
          <span style={{ display: 'block' }}>oi</span>
          <span style={{ display: 'block' }}>oi</span>
          <span style={{ display: 'block' }}>oi</span>
        </HistoricTransactionals>

        <Transaction>
          <h3>Transação</h3>
          <Form ref={formRef} onSubmit={handleSubmit}>
            <label>Operação</label>
            <ButtonGroup isBuy={isBuy}>
              <Buttons>
                <button
                  type="button"
                  value="buy"
                  onClick={handleSetTypeTransaction}
                >
                  Compra
                </button>

                <button
                  type="button"
                  value="sell"
                  onClick={handleSetTypeTransaction}
                >
                  Venda
                </button>
              </Buttons>

              <Link outline color={colors.primary} to="/#">
                Comprar
              </Link>
            </ButtonGroup>

            <InputGroup>
              <Inputs>
                <label>Preço</label>
                <Input name="price" />
              </Inputs>

              <Inputs>
                <label>Data:</label>
                <Input name="date" />
              </Inputs>

              <Inputs>
                <label>Quantidade</label>
                <Input name="quantity" />
              </Inputs>
            </InputGroup>
          </Form>
        </Transaction>
      </AccordionContent>
    </Container>
  );
};

export default Accordion;
