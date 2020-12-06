import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import React, { useCallback, useRef } from 'react';
import Input from '../Input';

import { Container, Item, Divider } from './styles';

interface EnterpriseExchangeProps {
  value: string;
}

const EnterpriseExchange: React.FC<EnterpriseExchangeProps> = ({ value }) => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback((data: any) => {
    console.log(data);
  }, []);

  return (
    <Container>
      <div />
      <Form ref={formRef} onSubmit={handleSubmit}>
        <Item>
          <h3>Ação</h3>

          <p>{value}</p>
        </Item>

        <Divider />

        <Item>
          <h3>Quantidade</h3>

          <Input name="quantity" />
        </Item>

        <Divider />

        <Item>
          <button type="submit" onClick={handleSubmit}>
            Comprar
          </button>
        </Item>
      </Form>
    </Container>
  );
};

export default EnterpriseExchange;
