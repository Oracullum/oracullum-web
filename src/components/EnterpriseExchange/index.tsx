import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import React, { useCallback, useRef } from 'react';
import Input from '../Input';

import { Container, Item, Divider, Inputs } from './styles';

interface EnterpriseExchangeProps {
  enterpriseValue: string;
}

const EnterpriseExchange: React.FC<EnterpriseExchangeProps> = ({
  enterpriseValue,
}) => {
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
          <p>{enterpriseValue}</p>
        </Item>

        <Divider />

        <Inputs>
          <h3>Quantidade</h3>
          <Input name="quantity" />
        </Inputs>

        <Divider />

        <Inputs>
          <button type="button" onClick={handleSubmit}>
            Comprar
          </button>
        </Inputs>
      </Form>
    </Container>
  );
};

export default EnterpriseExchange;
