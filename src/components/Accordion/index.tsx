import React, { useState, useContext, useCallback, useRef } from 'react';

import { toast } from 'react-toastify';
import Ink from 'react-ink';
import * as Yup from 'yup';

import { ThemeContext } from 'styled-components';

import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { FormHandles } from '@unform/core';

import { Form } from '@unform/web';
import { useAuth } from '../../context/AuthContext';
import api from '../../services/api';
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

import Input from '../Input';
import HistoricTransactional from '../HistoricTransactional';
import Button from '../Button';
import getValidationErrors from '../../utils/getValidationErrors';

interface HistoricTransactionalProps {
  date: Date;
  operation: string;
  price: number;
  quantity: number;
}

interface AccordionProps {
  // code: string;
  quantity: number;
  name: string;
  enterprise: string;
  historics?: HistoricTransactionalProps[];
  setExchanges: React.Dispatch<React.SetStateAction<never[]>>;
  exchange_id: string;
}

const Accordion: React.FC<AccordionProps> = ({
  // code,
  quantity,
  name,
  enterprise,
  historics,
  setExchanges,
  exchange_id,
}) => {
  const { title, colors } = useContext(ThemeContext);
  const { token } = useAuth();

  const formRef = useRef<FormHandles>(null);

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isBuy, setIsBuy] = useState<boolean>(true);

  const handleSetTypeTransaction = useCallback(e => {
    const { value } = e.target;
    setIsBuy(value === 'buy');
  }, []);

  const handleSubmit = useCallback(
    async (data: any) => {
      try {
        const schema = Yup.object().shape({
          date: Yup.string().required('Data obrigatório'),
          quantity: Yup.number().required('Quantidade obrigatório!'),
          price: Yup.number().required('Preço obrigatório'),
        });
        console.log(data);
        await schema.validate(data, { abortEarly: false });

        formRef.current?.setErrors({});

        await api.post(
          'historic-transactionals',
          {
            date: data.date,
            quantity: data.quantity,
            price: data.price,
            operation: isBuy ? 'buy' : 'sell',
            exchange_id: data.exchange_id,
          },
          { headers: { Authorization: `Bearer ${token}` } },
        );

        toast.success('Cadastro efetuado com sucesso!');
      } catch (err) {
        const errors = getValidationErrors(err);
        console.log(err);

        formRef.current?.setErrors(errors);

        if (err instanceof Yup.ValidationError) {
          toast.info('Por favor preencha todos os campos obrigatórios!');
        } else {
          toast.error('Ocorreu um erro no cadastro, tente novamente!');
        }
      }
    },
    [token, isBuy],
  );

  return (
    <Container>
      <AccordionTitle onClick={() => setIsOpen(!isOpen)}>
        <Ink />

        <span>{name}</span>

        <Items>
          {/* <Item>
            <label>Código</label>
            <span>{code}</span>
          </Item> */}

          <Item>
            <label>Empresa</label>
            <span>{enterprise}</span>
          </Item>

          <Item>
            <label>Ações</label>
            <span>{quantity} ações</span>
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
        <HistoricTransactionals>
          {historics?.map((item: any) => (
            <HistoricTransactional
              date={item.date}
              operation={item.operation}
              price={item.price}
              quantity={item.quantity}
              key={item.id}
            />
          ))}
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

              <Button outline color={colors.primary} type="submit">
                Efetuar Transação
              </Button>
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
              <Input name="exchange_id" value={exchange_id} type="hidden" />
            </InputGroup>
          </Form>
        </Transaction>
      </AccordionContent>
    </Container>
  );
};

export default Accordion;
