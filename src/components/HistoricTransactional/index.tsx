import React, { useMemo } from 'react';
import { format } from 'date-fns';

import { Container, Item, Divider } from './styles';

interface HistoricTransactionalProps {
  date: string;
  operation: string;
  quantity: string;
  price: string;
}

const HistoricTransactional: React.FC<HistoricTransactionalProps> = ({
  date,
  operation,
  quantity,
  price,
}) => {
  const parsedDate = useMemo(() => format(new Date(date), 'dd/MM/yyyy'), [
    date,
  ]);

  return (
    <Container isOperationBuy={operation}>
      <div />

      <Item>
        <h3>Data</h3>
        <p>{parsedDate}</p>
      </Item>

      <Divider />

      <Item>
        <h3>Operação</h3>
        <p>{operation}</p>
      </Item>

      <Divider />

      <Item>
        <h3>Quantidade</h3>
        <p>{quantity}</p>
      </Item>

      <Divider />

      <Item>
        <h3>Valor</h3>
        <p>R$: {price}</p>
      </Item>
    </Container>
  );
};

export default HistoricTransactional;
