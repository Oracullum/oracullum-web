import React from 'react';

import { Container, Item, Divider } from './styles';

interface HistoricTransactionalProps {
  dateValue: string;
  operationValue: string;
  quantityValue: string;
  priceValue: string;
}

const HistoricTransactional: React.FC<HistoricTransactionalProps> = ({
  dateValue,
  operationValue,
  quantityValue,
  priceValue,
}) => {
  return (
    <Container isOperationBuy={operationValue}>
      <div />

      <Item>
        <h3>Data</h3>
        <p>{dateValue}</p>
      </Item>

      <Divider />

      <Item>
        <h3>Operação</h3>
        <p>{operationValue}</p>
      </Item>

      <Divider />

      <Item>
        <h3>Quantidade</h3>
        <p>{quantityValue}</p>
      </Item>

      <Divider />

      <Item>
        <h3>Valor</h3>
        <p>R$: {priceValue}</p>
      </Item>
    </Container>
  );
};

export default HistoricTransactional;
